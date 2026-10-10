import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'hg-emc-3e',
  chapters: [
    {
      id: 'guerres-totales',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'premiere-guerre-mondiale',
          title: 'Civils et militaires dans la Première Guerre mondiale',
          minutes: 30,
          objectives: [
            "Expliquer en quoi la Première Guerre mondiale est une guerre totale qui mobilise les civils comme les militaires.",
            "Décrire l'expérience combattante et les violences de masse, à partir des exemples de Verdun et du génocide des Arméniens.",
            "Situer dans le temps les grandes étapes du conflit, de 1914 à 1919.",
            "Rédiger un développement construit sur la guerre totale.",
          ],
          course: [
            {
              heading: "Une guerre européenne devenue mondiale (1914-1918)",
              paragraphs: [
                "Le 28 juin 1914, l'héritier du trône d'Autriche-Hongrie, l'archiduc François-Ferdinand, est assassiné à Sarajevo. Par le jeu des alliances, une guerre éclate en août 1914 entre deux camps : la Triple-Entente (France, Royaume-Uni, Russie), rejointe par l'Italie en 1915, et les Empires centraux (Allemagne, Autriche-Hongrie, rejoints par l'Empire ottoman). Les soldats partent en pensant que la guerre sera courte.",
                "En 1914, c'est une guerre de mouvement : l'armée allemande envahit la Belgique et le nord de la France, puis elle est arrêtée lors de la bataille de la Marne (septembre 1914). À la fin de 1914, le front se stabilise de la mer du Nord à la Suisse : commence alors la guerre de position, ou guerre des tranchées, qui dure jusqu'en 1918.",
                "La guerre devient mondiale : les empires coloniaux fournissent des soldats et des travailleurs (tirailleurs dits « sénégalais », troupes indiennes), on se bat aussi au Proche-Orient et en Afrique, et les États-Unis entrent en guerre en avril 1917 aux côtés de l'Entente. La même année, la révolution russe conduit la Russie à cesser le combat. L'armistice est signé le 11 novembre 1918 à Rethondes, et le traité de Versailles est imposé à l'Allemagne le 28 juin 1919.",
              ],
              box: { label: "Repère", text: "1914-1918 : Première Guerre mondiale. 1916 : bataille de Verdun. 1917 : entrée en guerre des États-Unis et révolution russe. 11 novembre 1918 : armistice. 28 juin 1919 : traité de Versailles." },
            },
            {
              heading: "Les soldats dans l'enfer des tranchées : l'exemple de Verdun",
              paragraphs: [
                "Les soldats, surnommés « poilus » en France, vivent dans des tranchées creusées dans la terre, dans la boue et le froid, au milieu des rats, des poux et des cadavres. Ils subissent les bombardements d'artillerie, qui causent la majorité des blessures, et participent à des assauts meurtriers contre les tranchées ennemies, protégées par des barbelés et des mitrailleuses.",
                "La bataille de Verdun (février à décembre 1916) est le symbole de cette violence de masse. L'armée allemande attaque pour épuiser l'armée française ; les combats durent dix mois sur quelques kilomètres carrés, sous des dizaines de millions d'obus. Ils font plus de 300 000 morts dans les deux camps. Grâce à un système de relève appelé « noria », la plupart des régiments français y combattent.",
                "Des armes nouvelles rendent la guerre plus meurtrière : gaz de combat (employés à grande échelle à partir de 1915), lance-flammes, chars, avions. En 1917, épuisés par des offensives inutiles comme celle du Chemin des Dames, des soldats refusent de monter à l'assaut : ce sont les mutineries, sévèrement réprimées. Le bilan est terrible : environ 10 millions de soldats tués, dont environ 1,4 million de Français, et des millions de blessés, comme les « gueules cassées » défigurées.",
              ],
              box: { label: "Définition", text: "Violence de masse : violence qui touche un très grand nombre de personnes, militaires ou civiles, du fait de la puissance des armes industrielles et de la volonté d'anéantir l'ennemi." },
            },
            {
              heading: "Les civils mobilisés et visés : une guerre totale",
              paragraphs: [
                "La Première Guerre mondiale est une guerre totale : les États mobilisent toutes les ressources de la nation, humaines, économiques, financières et morales, pour vaincre. À l'arrière, l'économie devient une économie de guerre : les usines fabriquent des obus et des armes, l'État dirige la production et emprunte de l'argent aux citoyens (emprunts nationaux).",
                "Les femmes remplacent les hommes partis au front : elles travaillent dans les champs, dans les transports et dans les usines d'armement, où on les appelle les « munitionnettes ». Les colonies fournissent des hommes et des matières premières. Pour maintenir le moral, l'État pratique la censure du courrier et de la presse et diffuse une propagande que les soldats appellent le « bourrage de crâne ».",
                "Les civils sont aussi des victimes : populations du nord de la France et de la Belgique occupées, déplacées ou soumises au travail forcé, villes bombardées. À partir d'avril 1915, le gouvernement de l'Empire ottoman organise le génocide des Arméniens, accusés de soutenir la Russie : déportations, massacres et marches de la mort font entre 1,2 et 1,5 million de victimes selon les estimations des historiens. C'est le premier génocide du XXe siècle.",
              ],
              box: { label: "Définition", text: "Guerre totale : guerre qui mobilise toutes les ressources d'un pays (hommes, économie, finances, sciences, opinion) et qui vise l'anéantissement de l'adversaire, en effaçant la frontière entre combattants et civils." },
            },
          ],
          keyPoints: [
            "1914-1918 : guerre mondiale entre la Triple-Entente (France, Royaume-Uni, Russie, puis États-Unis en 1917) et les Empires centraux (Allemagne, Autriche-Hongrie, Empire ottoman).",
            "Guerre totale : mobilisation de toutes les ressources (hommes, économie, finances, opinion) pour anéantir l'ennemi.",
            "Verdun (février à décembre 1916) : plus de 300 000 morts, symbole de la violence de masse et de l'enfer des tranchées.",
            "À l'arrière : économie de guerre, travail des femmes (munitionnettes), censure et propagande (« bourrage de crâne »).",
            "1915 : génocide des Arméniens par le gouvernement ottoman, premier génocide du XXe siècle.",
            "11 novembre 1918 : armistice. 28 juin 1919 : traité de Versailles. Bilan : environ 10 millions de soldats tués.",
          ],
          example: {
            statement: "Expliquez, en vous appuyant sur deux exemples précis, pourquoi on qualifie la Première Guerre mondiale de « guerre totale ».",
            solution: [
              "Définir la notion : une guerre totale mobilise toutes les ressources d'un pays et vise l'anéantissement de l'adversaire, en touchant les militaires comme les civils.",
              "Premier exemple, au front : des millions de soldats sont mobilisés et subissent une violence de masse, comme à Verdun en 1916, où plus de 300 000 hommes meurent en dix mois.",
              "Deuxième exemple, à l'arrière : l'économie devient une économie de guerre, les femmes remplacent les hommes dans les usines d'armement (les munitionnettes), et l'État contrôle l'opinion par la censure et la propagande.",
              "Ajouter que les civils deviennent des cibles : le génocide des Arméniens, à partir de 1915, montre que la guerre conduit à exterminer une population civile.",
              "Conclure : la Première Guerre mondiale est une guerre totale, car elle engage toute la société, au front comme à l'arrière, et efface la frontière entre combattants et civils.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque événement à sa date, puis classez les événements dans l'ordre chronologique. Événements : traité de Versailles ; début de la bataille de Verdun ; armistice ; entrée en guerre des États-Unis ; bataille de la Marne. Dates : septembre 1914, février 1916, avril 1917, 11 novembre 1918, 28 juin 1919.",
              hint: "La bataille de la Marne met fin à la guerre de mouvement en 1914, et le traité de paix est signé après l'arrêt des combats.",
              solution: [
                "Bataille de la Marne : septembre 1914.",
                "Début de la bataille de Verdun : février 1916.",
                "Entrée en guerre des États-Unis : avril 1917.",
                "Armistice : 11 novembre 1918.",
                "Traité de Versailles : 28 juin 1919.",
                "Ordre chronologique : bataille de la Marne, Verdun, entrée en guerre des États-Unis, armistice, traité de Versailles.",
              ],
            },
            {
              level: 2,
              statement: "Classez les éléments suivants selon qu'ils concernent le front ou l'arrière : tranchées ; munitionnettes ; emprunt national ; assaut contre une tranchée ennemie ; propagande dans les journaux ; gaz de combat ; travail des femmes dans les champs. Expliquez ensuite, en deux ou trois phrases, en quoi cette liste montre que la guerre est totale.",
              hint: "Demandez-vous si chaque élément concerne les soldats qui combattent ou la population restée dans le pays, puis rappelez la définition de la guerre totale.",
              solution: [
                "Front : tranchées ; assaut contre une tranchée ennemie ; gaz de combat.",
                "Arrière : munitionnettes ; emprunt national ; propagande dans les journaux ; travail des femmes dans les champs.",
                "Explication : la guerre ne concerne pas seulement les soldats. Toute la population est mobilisée : les femmes travaillent pour remplacer les hommes et produire des armes, les citoyens prêtent leur argent à l'État, et l'opinion est encadrée par la propagande.",
                "Conclusion : toutes les ressources du pays, humaines, économiques, financières et morales, sont mises au service de la victoire : c'est la définition de la guerre totale.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit (type brevet) : dans un texte structuré d'une vingtaine de lignes, décrivez et expliquez les violences subies par les militaires et par les civils pendant la Première Guerre mondiale.",
              hint: "Organisez votre texte en deux parties (les militaires, puis les civils), avec dans chacune au moins une date, un lieu et un chiffre ou un exemple précis.",
              solution: [
                "Introduction : de 1914 à 1918, la Première Guerre mondiale oppose la Triple-Entente aux Empires centraux. C'est une guerre totale, marquée par des violences de masse qui touchent les soldats comme les civils.",
                "Partie 1, les militaires : à partir de la fin de 1914, les soldats vivent dans les tranchées, dans la boue, le froid, la peur et la saleté. Ils subissent les bombardements d'artillerie et des assauts meurtriers. À Verdun, de février à décembre 1916, plus de 300 000 soldats français et allemands meurent. Des armes nouvelles (gaz, chars, avions) aggravent les souffrances ; beaucoup reviennent mutilés, comme les « gueules cassées ».",
                "Partie 2, les civils : les populations du nord de la France et de la Belgique sont occupées, déplacées ou soumises au travail forcé, et des villes sont bombardées. À l'arrière, les civils sont mobilisés dans l'économie de guerre et encadrés par la censure et la propagande. Surtout, à partir de 1915, le gouvernement ottoman organise le génocide des Arméniens, qui fait entre 1,2 et 1,5 million de victimes.",
                "Conclusion : la guerre fait environ 10 millions de morts parmi les soldats. Par l'ampleur de ses violences contre les militaires et contre les civils, elle annonce les violences encore plus grandes de la Seconde Guerre mondiale.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements de la Première Guerre mondiale dans l'ordre chronologique.",
            items: [
              "Assassinat de François-Ferdinand à Sarajevo (28 juin 1914)",
              "Bataille de la Marne (septembre 1914)",
              "Début du génocide des Arméniens (avril 1915)",
              "Bataille de Verdun (février à décembre 1916)",
              "Entrée en guerre des États-Unis (avril 1917)",
              "Armistice de Rethondes (11 novembre 1918)",
              "Traité de Versailles (28 juin 1919)",
            ],
          },
          quiz: [
            {
              q: "Que désigne l'expression « guerre totale » ?",
              options: [
                "Une guerre qui se déroule sur tous les continents à la fois, sans aucune exception",
                "Une guerre qui mobilise toutes les ressources d'un pays et touche aussi les civils",
                "Une guerre qui ne concerne que les soldats de métier",
                "Une guerre gagnée entièrement par un seul camp",
              ],
              answer: 1,
              why: "Une guerre totale engage toutes les ressources d'un pays (hommes, économie, opinion) et efface la frontière entre combattants et civils.",
            },
            {
              q: "En quelle année a lieu la bataille de Verdun ?",
              options: ["1914", "1915", "1916", "1918"],
              answer: 2,
              why: "La bataille de Verdun dure de février à décembre 1916.",
            },
            {
              q: "Qui sont les « munitionnettes » ?",
              options: [
                "Les ouvrières des usines d'armement",
                "Des infirmières qui soignent les blessés dans les tranchées",
                "Des soldates françaises envoyées au front",
                "Les femmes chargées de lire le courrier des soldats",
              ],
              answer: 0,
              why: "Les munitionnettes sont les femmes qui fabriquent les obus et les armes dans les usines, à la place des hommes mobilisés.",
            },
            {
              q: "Quel peuple est victime d'un génocide organisé par le gouvernement ottoman à partir de 1915 ?",
              options: ["Les Grecs", "Les Russes", "Les Serbes", "Les Arméniens"],
              answer: 3,
              why: "Le génocide des Arméniens fait entre 1,2 et 1,5 million de victimes : c'est le premier génocide du XXe siècle.",
            },
            {
              q: "Quand l'armistice qui met fin aux combats est-il signé ?",
              options: ["Le 28 juin 1919", "Le 11 novembre 1918", "Le 8 mai 1918", "Le 6 avril 1917"],
              answer: 1,
              why: "L'armistice est signé le 11 novembre 1918 à Rethondes ; le traité de Versailles, qui fixe la paix, n'est signé que le 28 juin 1919.",
            },
          ],
          trap: "Confondre l'armistice du 11 novembre 1918, qui arrête les combats, et le traité de Versailles du 28 juin 1919, qui fixe les conditions de la paix imposée à l'Allemagne.",
          method: "Pour un développement construit, commencez par définir la notion clé (ici « guerre totale »), puis organisez votre texte en deux parties, les militaires puis les civils, avec dans chacune au moins une date et un exemple précis comme Verdun ou le génocide des Arméniens.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'democraties-totalitarismes',
          title: 'Démocraties fragilisées et expériences totalitaires dans l\'entre-deux-guerres',
          minutes: 35,
          objectives: [
            "Caractériser un régime totalitaire à partir des exemples de l'URSS de Staline et de l'Allemagne d'Hitler.",
            "Expliquer les difficultés des démocraties dans l'entre-deux-guerres, en particulier après la crise de 1929.",
            "Décrire l'expérience du Front populaire en France et ses principales réformes.",
            "Situer les repères : 1917, 1924, 1929, 1933, 1936.",
          ],
          course: [
            {
              heading: "Des démocraties fragilisées par les crises",
              paragraphs: [
                "Après 1918, la plupart des pays européens sont des démocraties, mais elles sont affaiblies par les deuils, les dettes, l'inflation et le traumatisme des anciens combattants. En Allemagne, la République de Weimar, née de la défaite, est accusée d'avoir accepté le traité de Versailles, vécu comme un « diktat », c'est-à-dire une paix imposée.",
                "En octobre 1929, le krach de la bourse de New York (le « jeudi noir », 24 octobre) déclenche une crise économique mondiale. Au début des années 1930, elle frappe l'Europe : faillites, chute de la production, chômage de masse (environ 6 millions de chômeurs en Allemagne en 1932). Beaucoup d'Européens perdent confiance dans la démocratie et se tournent vers des partis extrémistes qui promettent l'ordre et des solutions rapides.",
                "En France, la crise arrive plus tard, mais elle nourrit l'antiparlementarisme. Le 6 février 1934, des ligues d'extrême droite manifestent à Paris contre le gouvernement et la manifestation tourne à l'émeute. Inquiets d'une menace fasciste, les partis de gauche (socialistes, communistes et radicaux) s'unissent dans le Front populaire.",
              ],
            },
            {
              heading: "Le Front populaire, une réponse démocratique (1936)",
              paragraphs: [
                "Le Front populaire remporte les élections législatives d'avril et mai 1936. Léon Blum, chef des socialistes (SFIO), devient président du Conseil, c'est-à-dire chef du gouvernement. Trois femmes entrent au gouvernement, alors qu'elles n'ont pas encore le droit de vote. Dans le même temps, une immense vague de grèves avec occupation d'usines touche le pays.",
                "Les accords de Matignon (juin 1936), signés entre le patronat et les syndicats, puis des lois votées par le Parlement apportent des avancées sociales majeures : hausse des salaires, conventions collectives, deux semaines de congés payés et semaine de 40 heures. Pour la première fois, beaucoup d'ouvriers partent en vacances. Le Front populaire montre qu'une démocratie peut répondre à la crise par la réforme, mais il se divise et prend fin en 1938.",
              ],
              box: { label: "Repère", text: "1936 : victoire électorale du Front populaire, accords de Matignon et lois sociales (congés payés, semaine de 40 heures, conventions collectives)." },
            },
            {
              heading: "L'URSS de Staline, un régime totalitaire communiste",
              paragraphs: [
                "En 1917, la révolution russe renverse le tsar (février), puis les bolcheviks de Lénine prennent le pouvoir (octobre). Ils instaurent la dictature du parti communiste, et l'URSS naît en 1922. Après la mort de Lénine en 1924, Staline élimine ses rivaux et devient le maître absolu du pays à la fin des années 1920.",
                "Staline veut bâtir une société communiste sans propriété privée. À partir de 1929, il impose la collectivisation forcée des terres (les kolkhozes) et l'industrialisation par des plans quinquennaux. Les paysans qui résistent, qualifiés de « koulaks », sont déportés ou tués ; la famine de 1932-1933 fait des millions de morts, notamment en Ukraine.",
                "Le régime contrôle toute la société : parti unique, culte de la personnalité de Staline, propagande, police politique (le NKVD) et terreur de masse. Les opposants, réels ou supposés, sont envoyés dans les camps de travail forcé du Goulag ; pendant la Grande Terreur (1937-1938), environ 700 000 personnes sont exécutées.",
              ],
            },
            {
              heading: "L'Allemagne nazie, un régime totalitaire raciste",
              paragraphs: [
                "Adolf Hitler, chef du parti nazi (NSDAP), profite de la crise : son parti devient le premier du Reichstag en juillet 1932, et Hitler est nommé chancelier, légalement, le 30 janvier 1933. En quelques mois, il supprime les libertés et interdit les autres partis (juillet 1933). À la mort du président Hindenburg (août 1934), il devient le Führer, le guide, avec tous les pouvoirs.",
                "L'idéologie nazie est raciste et antisémite : elle affirme la supériorité d'une prétendue « race aryenne » et désigne les Juifs comme des ennemis. Les lois de Nuremberg (1935) privent les Juifs de la citoyenneté allemande et interdisent les mariages mixtes ; lors de la « Nuit de cristal » (9 au 10 novembre 1938), synagogues et magasins juifs sont détruits. Hitler veut aussi conquérir un « espace vital » à l'Est.",
                "Comme en URSS, le régime encadre toute la population : parti unique, culte du chef, propagande dirigée par Goebbels, embrigadement de la jeunesse (Jeunesses hitlériennes), police politique (la Gestapo) et camps de concentration ouverts dès 1933, comme celui de Dachau, pour les opposants.",
              ],
              box: { label: "Définition", text: "Totalitarisme : régime politique qui contrôle tous les aspects de la vie des individus grâce à un parti unique, un chef tout-puissant, une idéologie officielle, la propagande, l'embrigadement et la terreur. Il prétend créer un « homme nouveau »." },
            },
          ],
          keyPoints: [
            "Crise de 1929 (krach du 24 octobre à New York) : chômage de masse en Europe au début des années 1930 et recul de la confiance dans la démocratie.",
            "Totalitarisme : parti unique, chef tout-puissant, idéologie, propagande, embrigadement et terreur pour contrôler toute la société.",
            "URSS de Staline : collectivisation forcée, culte de la personnalité, Goulag, Grande Terreur (1937-1938).",
            "Allemagne d'Hitler (chancelier le 30 janvier 1933) : régime raciste et antisémite, lois de Nuremberg (1935), Nuit de cristal (1938).",
            "France : émeute du 6 février 1934, puis victoire du Front populaire (1936) et lois sociales : congés payés, semaine de 40 heures.",
          ],
          example: {
            statement: "Comparez l'URSS de Staline et l'Allemagne d'Hitler : quels points communs font de ces deux régimes des totalitarismes, et quelle différence d'idéologie les sépare ?",
            solution: [
              "Rappeler la définition : un régime totalitaire cherche à contrôler tous les aspects de la vie des individus.",
              "Points communs politiques : un parti unique (le parti communiste, le parti nazi) et un chef adulé grâce au culte de la personnalité (Staline, le Führer).",
              "Points communs dans les méthodes : propagande, embrigadement de la jeunesse, police politique (NKVD, Gestapo) et camps (Goulag, camps de concentration).",
              "Différence d'idéologie : le communisme stalinien veut une société sans classes et élimine les « ennemis de classe » ; le nazisme repose sur le racisme et l'antisémitisme et persécute les Juifs.",
              "Conclure : malgré des idéologies opposées, les deux régimes emploient les mêmes méthodes totalitaires, fondées sur la propagande et la terreur.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque élément, indiquez s'il concerne l'URSS de Staline, l'Allemagne nazie ou la France du Front populaire : a) le Goulag ; b) les congés payés ; c) les lois de Nuremberg ; d) les kolkhozes ; e) Léon Blum ; f) la Gestapo ; g) les accords de Matignon.",
              hint: "Repérez d'abord les mots liés au communisme (collectivisation), puis ceux liés à l'antisémitisme nazi, puis les réformes sociales françaises.",
              solution: [
                "URSS de Staline : a) le Goulag ; d) les kolkhozes.",
                "Allemagne nazie : c) les lois de Nuremberg ; f) la Gestapo.",
                "France du Front populaire : b) les congés payés ; e) Léon Blum ; g) les accords de Matignon.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en quelques lignes comment la crise économique des années 1930 a favorisé l'arrivée d'Hitler au pouvoir en Allemagne.",
              hint: "Partez des conséquences de la crise sur la population (chômage), puis montrez comment le parti nazi en a profité lors des élections.",
              solution: [
                "Après le krach d'octobre 1929, la crise atteint l'Allemagne : les entreprises font faillite et le chômage explose, avec environ 6 millions de chômeurs en 1932.",
                "La République de Weimar, déjà contestée depuis le traité de Versailles, paraît incapable de répondre à la crise : beaucoup d'Allemands perdent confiance dans la démocratie.",
                "Hitler promet du travail, l'ordre et la revanche ; sa propagande désigne des boucs émissaires, en particulier les Juifs. Le parti nazi progresse et devient le premier parti au Reichstag en juillet 1932.",
                "Conclusion : la crise a permis à Hitler d'être nommé chancelier légalement, le 30 janvier 1933, avant de détruire la démocratie.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit (type brevet) : montrez que l'Allemagne nazie est un régime totalitaire. Vous évoquerez l'arrivée au pouvoir d'Hitler, les moyens de contrôle de la population et les persécutions.",
              hint: "Suivez trois étapes : comment Hitler prend le pouvoir (1933-1934), comment il encadre la société, qui il persécute et pourquoi.",
              solution: [
                "Introduction : en Allemagne, la crise des années 1930 affaiblit la République de Weimar. Hitler, chef du parti nazi, en profite et met en place un régime totalitaire.",
                "Partie 1, la prise du pouvoir : nommé chancelier le 30 janvier 1933, Hitler supprime les libertés, interdit les autres partis dès juillet 1933, puis devient Führer en août 1934, avec tous les pouvoirs.",
                "Partie 2, l'encadrement de la société : le parti unique et le culte du chef s'imposent ; la propagande de Goebbels contrôle la presse, la radio et le cinéma ; les jeunes sont embrigadés dans les Jeunesses hitlériennes ; la Gestapo surveille et arrête les opposants, envoyés dans des camps de concentration comme Dachau.",
                "Partie 3, les persécutions : l'idéologie nazie est raciste et antisémite. Les lois de Nuremberg (1935) privent les Juifs de leur citoyenneté, et la Nuit de cristal (novembre 1938) détruit synagogues et commerces juifs.",
                "Conclusion : l'Allemagne nazie est un régime totalitaire, car elle contrôle toute la société par la propagande et la terreur, au service d'une idéologie raciste qui mènera à la guerre et au génocide.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Totalitarisme", right: "Régime qui contrôle tous les aspects de la vie des individus" },
              { left: "Culte de la personnalité", right: "Adoration organisée du chef par la propagande" },
              { left: "Goulag", right: "Système de camps de travail forcé en URSS" },
              { left: "Collectivisation", right: "Suppression de la propriété privée des terres au profit de fermes d'État ou collectives" },
              { left: "Antisémitisme", right: "Hostilité et haine envers les Juifs" },
              { left: "Front populaire", right: "Union des partis de gauche victorieuse aux élections françaises de 1936" },
            ],
          },
          quiz: [
            {
              q: "Quand Hitler est-il nommé chancelier ?",
              options: ["Le 24 octobre 1929", "Le 6 février 1934", "Le 30 janvier 1933", "Le 9 novembre 1938"],
              answer: 2,
              why: "Hitler est nommé chancelier le 30 janvier 1933, de façon légale, après les succès électoraux du parti nazi.",
            },
            {
              q: "Lequel de ces éléments est commun aux régimes de Staline et d'Hitler ?",
              options: [
                "Un parti unique",
                "Une idéologie fondée sur la race",
                "La collectivisation des terres",
                "Des élections libres entre plusieurs partis",
              ],
              answer: 0,
              why: "Les deux régimes reposent sur un parti unique ; le racisme est propre au nazisme et la collectivisation au stalinisme.",
            },
            {
              q: "Que sont les camps du Goulag ?",
              options: [
                "Des fermes collectives soviétiques",
                "Des usines construites pendant les plans quinquennaux",
                "Des camps de vacances pour la jeunesse",
                "Des camps de travail forcé en URSS",
              ],
              answer: 3,
              why: "Le Goulag est le système des camps de travail forcé où sont envoyés les opposants, réels ou supposés, au régime de Staline.",
            },
            {
              q: "Quelle mesure le Front populaire a-t-il obtenue en 1936 ?",
              options: ["Le droit de vote des femmes", "Les congés payés", "La Sécurité sociale", "L'impôt sur le revenu"],
              answer: 1,
              why: "En 1936, les salariés obtiennent deux semaines de congés payés ; le droit de vote des femmes date de 1944 et la Sécurité sociale de 1945.",
            },
            {
              q: "Quelles lois privent les Juifs allemands de leur citoyenneté en 1935 ?",
              options: ["Les lois de Weimar", "Les lois fondamentales du Reich", "Les lois de Nuremberg", "Les lois de Matignon"],
              answer: 2,
              why: "Les lois de Nuremberg (septembre 1935) excluent les Juifs de la citoyenneté allemande et interdisent les mariages mixtes.",
            },
          ],
          trap: "Croire qu'Hitler a pris le pouvoir par un coup d'État : il a été nommé chancelier légalement en 1933, après des succès électoraux, puis il a détruit la démocratie de l'intérieur.",
          method: "Pour caractériser un régime totalitaire, utilisez une grille en cinq critères (chef, parti unique, idéologie, propagande et embrigadement, terreur) et trouvez un exemple précis pour chacun : la même grille s'applique à l'URSS et à l'Allemagne.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'guerre-aneantissement',
          title: 'La Deuxième Guerre mondiale, une guerre d\'anéantissement',
          minutes: 35,
          objectives: [
            "Expliquer pourquoi la Deuxième Guerre mondiale est une guerre d'anéantissement.",
            "Décrire le génocide des Juifs et des Tsiganes et ses étapes.",
            "Situer les grandes phases du conflit et ses repères, de 1939 à 1945.",
            "Rédiger un développement construit sur les violences de masse contre les civils.",
          ],
          course: [
            {
              heading: "Une guerre mondiale (1939-1945)",
              paragraphs: [
                "Hitler veut conquérir un « espace vital » à l'Est. Après l'annexion de l'Autriche (mars 1938) et le démembrement de la Tchécoslovaquie, il signe avec Staline le pacte germano-soviétique (23 août 1939), puis envahit la Pologne le 1er septembre 1939. Le 3 septembre, le Royaume-Uni et la France déclarent la guerre à l'Allemagne.",
                "De 1939 à 1942, l'Axe (Allemagne, Italie, Japon) remporte de grandes victoires grâce à la guerre éclair : la France est battue en juin 1940, l'Allemagne attaque l'URSS en juin 1941 (opération Barbarossa), et le Japon attaque la flotte américaine à Pearl Harbor le 7 décembre 1941, ce qui fait entrer les États-Unis dans la guerre. Le conflit devient mondial.",
                "À partir de 1942-1943, les Alliés (Royaume-Uni, URSS, États-Unis) reprennent l'initiative : victoire soviétique à Stalingrad (février 1943), débarquement en Normandie (6 juin 1944). L'Allemagne capitule le 8 mai 1945. Le Japon capitule le 2 septembre 1945, après les bombardements atomiques d'Hiroshima (6 août) et de Nagasaki (9 août).",
              ],
              box: { label: "Repère", text: "1er septembre 1939 : invasion de la Pologne. 1941 : attaque de l'URSS et de Pearl Harbor. Février 1943 : victoire soviétique à Stalingrad. 6 juin 1944 : débarquement en Normandie. 8 mai 1945 : fin de la guerre en Europe. 6 et 9 août 1945 : Hiroshima et Nagasaki. 2 septembre 1945 : capitulation du Japon." },
            },
            {
              heading: "Une guerre d'anéantissement",
              paragraphs: [
                "La Deuxième Guerre mondiale est une guerre d'anéantissement : chaque camp cherche à détruire totalement l'ennemi, son armée mais aussi sa population et son économie. Elle fait entre 50 et 60 millions de morts, en majorité des civils. L'URSS est le pays le plus touché, avec plus de 20 millions de morts.",
                "Comme en 1914-1918, les économies sont entièrement mobilisées : les États-Unis deviennent « l'arsenal des démocraties », tandis que l'Allemagne pille les pays occupés et impose le travail forcé à des millions de personnes. Les sciences sont mises au service de la guerre : radar, fusées et surtout bombe atomique.",
                "Les civils sont directement visés. Les bombardements stratégiques détruisent des villes entières (Coventry, Hambourg, Dresde, Tokyo) ; les bombes atomiques d'Hiroshima et de Nagasaki tuent plus de 100 000 personnes sur le coup, et beaucoup d'autres meurent ensuite des brûlures et des radiations. À l'Est, l'occupation allemande s'accompagne de massacres, de famines organisées et de représailles ; en Asie, l'armée japonaise massacre aussi des civils, comme à Nankin en Chine dès 1937.",
              ],
              box: { label: "Définition", text: "Guerre d'anéantissement : guerre dans laquelle un camp cherche à détruire totalement l'adversaire, militaires comme civils, par tous les moyens, jusqu'à l'extermination de populations entières." },
            },
            {
              heading: "Le génocide des Juifs et des Tsiganes",
              paragraphs: [
                "Pour les nazis, les Juifs et les Tsiganes doivent disparaître. Dès l'invasion de la Pologne, les Juifs sont enfermés dans des ghettos, comme celui de Varsovie, où beaucoup meurent de faim et de maladie. À partir de juin 1941, à l'Est, des unités mobiles de tuerie, les Einsatzgruppen, assassinent par balles plus d'un million de Juifs, hommes, femmes et enfants : c'est la « Shoah par balles ».",
                "En janvier 1942, la conférence de Wannsee organise la coordination de la « solution finale », c'est-à-dire l'extermination de tous les Juifs d'Europe. Les Juifs de toute l'Europe occupée sont déportés en train vers des centres de mise à mort situés en Pologne (Auschwitz-Birkenau, Treblinka, Sobibor, Belzec...), où ils sont assassinés dans des chambres à gaz dès leur arrivée.",
                "Environ 6 millions de Juifs sont assassinés, soit les deux tiers des Juifs d'Europe : c'est la Shoah (« catastrophe » en hébreu). Les Tsiganes sont eux aussi victimes d'un génocide, qui fait plusieurs centaines de milliers de morts selon les estimations. Le mot « génocide » est créé en 1944 par le juriste Raphael Lemkin. De 1945 à 1946, le tribunal de Nuremberg juge les principaux dirigeants nazis pour crimes de guerre et crimes contre l'humanité.",
              ],
              box: { label: "Définition", text: "Génocide : extermination volontaire et organisée d'un peuple ou d'un groupe en raison de son origine. Shoah : génocide des Juifs d'Europe par les nazis, qui fait environ 6 millions de victimes." },
            },
          ],
          keyPoints: [
            "1er septembre 1939 : invasion de la Pologne. 1941 : la guerre devient mondiale (attaque de l'URSS en juin, Pearl Harbor le 7 décembre).",
            "Tournant de 1942-1943 : Stalingrad (février 1943). 6 juin 1944 : débarquement en Normandie.",
            "8 mai 1945 : capitulation allemande. 6 et 9 août 1945 : Hiroshima et Nagasaki. 2 septembre 1945 : capitulation du Japon.",
            "Guerre d'anéantissement : 50 à 60 millions de morts, surtout des civils ; bombardements, massacres, mobilisation des économies et des sciences.",
            "Génocide des Juifs (Shoah, environ 6 millions de morts) et des Tsiganes : ghettos, Einsatzgruppen, centres de mise à mort comme Auschwitz-Birkenau.",
            "1945-1946 : procès de Nuremberg, qui juge des crimes contre l'humanité.",
          ],
          example: {
            statement: "Présentez les deux principales méthodes employées par les nazis pour exterminer les Juifs d'Europe, en les situant dans le temps et dans l'espace.",
            solution: [
              "Rappeler le contexte : l'idéologie nazie, raciste et antisémite, veut faire disparaître les Juifs ; dès 1939, en Pologne, ils sont enfermés dans des ghettos.",
              "Première méthode, à partir de juin 1941 : en URSS occupée, les Einsatzgruppen fusillent les Juifs près de leurs villages, au bord de fosses ; plus d'un million de personnes sont ainsi assassinées (la « Shoah par balles »).",
              "Seconde méthode, surtout à partir de 1942 : après la conférence de Wannsee (janvier 1942), les Juifs de toute l'Europe occupée sont déportés vers des centres de mise à mort en Pologne, comme Auschwitz-Birkenau ou Treblinka, et assassinés dans des chambres à gaz.",
              "Bilan : environ 6 millions de Juifs sont assassinés, soit les deux tiers des Juifs d'Europe. C'est la Shoah, un génocide.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces événements dans l'ordre chronologique et donnez la date de chacun : débarquement en Normandie ; invasion de la Pologne ; attaque de Pearl Harbor ; capitulation de l'Allemagne ; victoire soviétique à Stalingrad ; bombardement d'Hiroshima.",
              hint: "La guerre commence en Europe en 1939, devient mondiale en 1941, puis les Alliés reprennent l'avantage à partir de 1943.",
              solution: [
                "Invasion de la Pologne : 1er septembre 1939.",
                "Attaque de Pearl Harbor : 7 décembre 1941.",
                "Victoire soviétique à Stalingrad : février 1943.",
                "Débarquement en Normandie : 6 juin 1944.",
                "Capitulation de l'Allemagne : 8 mai 1945.",
                "Bombardement d'Hiroshima : 6 août 1945.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi on peut dire que les civils sont les principales victimes de la Deuxième Guerre mondiale. Appuyez-vous sur trois exemples précis.",
              hint: "Pensez aux bombardements, aux violences de l'occupation et au génocide, et utilisez le bilan humain de la guerre.",
              solution: [
                "Bilan : la guerre fait entre 50 et 60 millions de morts, dont une majorité de civils, ce qui la distingue de la Première Guerre mondiale.",
                "Premier exemple, les bombardements : des villes entières sont détruites (Hambourg, Dresde, Tokyo), et les bombes atomiques d'Hiroshima et de Nagasaki tuent plus de 100 000 personnes sur le coup en août 1945.",
                "Deuxième exemple, l'occupation : à l'Est, les populations subissent massacres, famines et travail forcé ; en Chine, l'armée japonaise massacre les habitants de Nankin.",
                "Troisième exemple, le génocide : environ 6 millions de Juifs et plusieurs centaines de milliers de Tsiganes sont exterminés parce qu'ils sont nés juifs ou tsiganes.",
                "Conclusion : dans cette guerre d'anéantissement, les civils ne sont pas des victimes accidentelles, ils sont visés volontairement.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit (type brevet) : dans un texte structuré d'une vingtaine de lignes, décrivez et expliquez les étapes du génocide des Juifs pendant la Seconde Guerre mondiale.",
              hint: "Suivez l'ordre chronologique : persécutions et ghettos, Shoah par balles, centres de mise à mort ; terminez par le bilan et le jugement des crimes.",
              solution: [
                "Introduction : pendant la Seconde Guerre mondiale, les nazis, guidés par une idéologie raciste et antisémite, organisent l'extermination des Juifs d'Europe : c'est la Shoah, un génocide.",
                "Étape 1, l'exclusion et les ghettos : en Allemagne, les Juifs sont persécutés dès 1933 (lois de Nuremberg en 1935). Après l'invasion de la Pologne en 1939, ils sont enfermés dans des ghettos, comme à Varsovie, où beaucoup meurent de faim et de maladie.",
                "Étape 2, la Shoah par balles : à partir de juin 1941, lors de l'invasion de l'URSS, les Einsatzgruppen fusillent plus d'un million de Juifs, hommes, femmes et enfants.",
                "Étape 3, les centres de mise à mort : en janvier 1942, la conférence de Wannsee coordonne la « solution finale ». Les Juifs de toute l'Europe occupée sont déportés en train vers des centres comme Auschwitz-Birkenau ou Treblinka et assassinés dans des chambres à gaz.",
                "Conclusion : environ 6 millions de Juifs sont assassinés, les deux tiers des Juifs d'Europe ; les Tsiganes sont eux aussi victimes d'un génocide. Après la guerre, le tribunal de Nuremberg juge les dirigeants nazis pour crimes contre l'humanité.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur la Deuxième Guerre mondiale.",
            statements: [
              { text: "Le pacte germano-soviétique est signé en août 1939, juste avant l'invasion de la Pologne.", true: true, why: "Il est signé le 23 août 1939 ; l'Allemagne envahit la Pologne le 1er septembre." },
              { text: "Les États-Unis sont en guerre dès septembre 1939.", true: false, why: "Ils entrent en guerre après l'attaque japonaise de Pearl Harbor, le 7 décembre 1941." },
              { text: "La majorité des morts de la Deuxième Guerre mondiale sont des civils.", true: true, why: "Bombardements, massacres, famines et génocides font des civils les principales victimes." },
              { text: "Le génocide des Juifs commence seulement avec les chambres à gaz, en 1942.", true: false, why: "Dès 1941, les Einsatzgruppen assassinent par balles plus d'un million de Juifs à l'Est, et beaucoup meurent avant dans les ghettos." },
              { text: "Auschwitz-Birkenau est à la fois un camp de concentration et un centre de mise à mort.", true: true, why: "Une partie des déportés y est soumise au travail forcé, la plupart des Juifs sont assassinés dès leur arrivée." },
              { text: "La guerre prend fin en Europe le 8 mai 1945 et en Asie le 2 septembre 1945.", true: true, why: "L'Allemagne capitule le 8 mai, le Japon le 2 septembre, après Hiroshima et Nagasaki." },
              { text: "Les Tsiganes n'ont pas été persécutés par les nazis.", true: false, why: "Les Tsiganes sont victimes d'un génocide qui fait plusieurs centaines de milliers de morts." },
            ],
          },
          quiz: [
            {
              q: "Quel événement fait entrer les États-Unis dans la guerre ?",
              options: [
                "La bataille de Stalingrad",
                "L'invasion de la Pologne",
                "La défaite de la France en juin 1940",
                "L'attaque japonaise de Pearl Harbor",
              ],
              answer: 3,
              why: "Le 7 décembre 1941, le Japon attaque la flotte américaine à Pearl Harbor : les États-Unis entrent en guerre et le conflit devient mondial.",
            },
            {
              q: "Combien de Juifs environ ont été assassinés pendant la Shoah ?",
              options: ["1 million", "6 millions", "20 millions", "60 millions"],
              answer: 1,
              why: "Environ 6 millions de Juifs sont assassinés, soit les deux tiers des Juifs d'Europe.",
            },
            {
              q: "Que désigne la « Shoah par balles » ?",
              options: [
                "Les massacres de Juifs par les Einsatzgruppen à l'Est",
                "Les bombardements des villes allemandes par les avions alliés de 1943 à 1945",
                "Les exécutions de résistants en France",
              ],
              answer: 0,
              why: "À partir de juin 1941, les Einsatzgruppen fusillent plus d'un million de Juifs en URSS occupée.",
            },
            {
              q: "Quelle bataille marque le tournant de la guerre sur le front de l'Est ?",
              options: ["Pearl Harbor (1941)", "Le débarquement en Normandie (1944)", "Stalingrad (1942-1943)", "Hiroshima (1945)"],
              answer: 2,
              why: "La capitulation de l'armée allemande à Stalingrad, en février 1943, marque le début du recul allemand face à l'URSS.",
            },
            {
              q: "Qui le tribunal de Nuremberg juge-t-il en 1945-1946 ?",
              options: [
                "Les responsables du régime de Vichy",
                "Les principaux dirigeants japonais",
                "Les responsables de la crise de 1929",
                "Les principaux dirigeants nazis",
              ],
              answer: 3,
              why: "Le tribunal de Nuremberg juge les principaux dirigeants nazis pour crimes de guerre et crimes contre l'humanité.",
            },
          ],
          trap: "Réduire le génocide des Juifs aux chambres à gaz : plus d'un million de Juifs ont d'abord été assassinés par balles à l'Est à partir de 1941, et beaucoup d'autres sont morts dans les ghettos.",
          method: "Construisez une frise à deux étages : en haut, les grandes étapes militaires (1939, 1941, 1943, 1944, 1945) ; en bas, les étapes du génocide (ghettos, Shoah par balles, Wannsee, centres de mise à mort). Vous verrez que l'extermination s'accélère quand la guerre devient mondiale.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'france-vichy-resistance',
          title: 'La France défaite et occupée : Vichy, collaboration, Résistance',
          minutes: 35,
          objectives: [
            "Expliquer la défaite de 1940 et la mise en place du régime de Vichy.",
            "Caractériser la collaboration et la participation de l'État français à la persécution des Juifs.",
            "Décrire les formes de la Résistance intérieure et de la France libre, et le rôle du général de Gaulle et de Jean Moulin.",
            "Situer les repères : 18 juin 1940, 1940-1944, août 1944.",
          ],
          course: [
            {
              heading: "La défaite de 1940 et la fin de la IIIe République",
              paragraphs: [
                "Le 10 mai 1940, l'armée allemande lance son offensive à l'ouest. Elle perce le front dans les Ardennes et, en quelques semaines, l'armée française est battue. Des millions de civils fuient sur les routes : c'est l'exode. Le maréchal Pétain, héros de Verdun devenu chef du gouvernement, demande l'armistice, qui est signé le 22 juin 1940 à Rethondes.",
                "La France est coupée en deux par une ligne de démarcation : une zone occupée au nord et à l'ouest, sous autorité allemande, et une zone dite « libre » au sud. L'Alsace et la Moselle sont annexées de fait par l'Allemagne. La France doit payer l'entretien des troupes d'occupation, et plus d'un million et demi de soldats français restent prisonniers en Allemagne.",
                "Le 10 juillet 1940, à Vichy, les députés et les sénateurs votent les pleins pouvoirs à Pétain. Il met fin à la IIIe République et crée l'État français, un régime autoritaire : plus d'élections ni de Parlement, culte du chef (le « Maréchal »), censure. La devise « Travail, Famille, Patrie » remplace « Liberté, Égalité, Fraternité » : c'est ce que Vichy appelle la « Révolution nationale ».",
              ],
              box: { label: "Repère", text: "22 juin 1940 : armistice. 10 juillet 1940 : pleins pouvoirs à Pétain. 1940-1944 : régime de Vichy. Novembre 1942 : les Allemands occupent la zone sud. 25 août 1944 : libération de Paris." },
            },
            {
              heading: "Vichy et la collaboration",
              paragraphs: [
                "Le 24 octobre 1940, Pétain rencontre Hitler à Montoire et engage la France dans la collaboration d'État avec l'Allemagne nazie. Le gouvernement de Vichy, notamment avec Pierre Laval, livre à l'occupant des ressources et de la main-d'œuvre : en 1943, le Service du travail obligatoire (STO) envoie de force des centaines de milliers de jeunes Français travailler en Allemagne.",
                "Vichy mène sa propre politique antisémite : dès octobre 1940, le statut des Juifs les exclut de la fonction publique et de nombreuses professions. Puis il participe à la déportation : lors de la rafle du Vél d'Hiv (16 et 17 juillet 1942), la police française arrête à Paris environ 13 000 Juifs, dont plus de 4 000 enfants. Environ 75 000 Juifs sont déportés de France ; seuls 3 % environ reviennent.",
                "Vichy pourchasse aussi les résistants, les communistes et les francs-maçons ; en 1943, il crée la Milice, une police politique qui traque les résistants aux côtés des Allemands. Certains Français, les collaborationnistes, vont plus loin encore et souhaitent la victoire du nazisme. Après l'invasion de la zone sud par les Allemands (novembre 1942), Vichy n'a presque plus d'autonomie.",
              ],
              box: { label: "Définition", text: "Collaboration : politique de coopération avec l'occupant allemand menée par le régime de Vichy (collaboration d'État). Collaborationnistes : Français partisans de l'idéologie nazie qui réclament une collaboration totale." },
            },
            {
              heading: "La France libre et la Résistance intérieure",
              paragraphs: [
                "Le 18 juin 1940, depuis Londres, le général de Gaulle lance à la radio de la BBC un appel à continuer le combat. Il fonde la France libre, rejointe par des volontaires et par une partie de l'empire colonial, à commencer par le Tchad en août 1940. Les Forces françaises libres combattent aux côtés des Alliés, par exemple à Bir Hakeim, en Libye, en 1942.",
                "En France, la Résistance intérieure naît de refus individuels, puis s'organise en mouvements (Combat, Libération, Franc-Tireur...) et en réseaux de renseignement. Les résistants publient des journaux clandestins, cachent des Juifs et des aviateurs alliés, sabotent des voies ferrées. À partir de 1943, de nombreux jeunes qui refusent le STO rejoignent les maquis.",
                "Jean Moulin, envoyé par de Gaulle, unifie la Résistance : il préside le 27 mai 1943 la première réunion du Conseil national de la Résistance (CNR). Arrêté en juin 1943, il meurt après avoir été torturé. En mars 1944, le CNR adopte un programme qui prévoit de rétablir la démocratie et de créer la Sécurité sociale.",
                "Après les débarquements de Normandie (6 juin 1944) et de Provence (15 août 1944), les Forces françaises de l'intérieur (FFI) aident les Alliés. Paris se soulève et est libéré le 25 août 1944. Le Gouvernement provisoire de la République française (GPRF), dirigé par de Gaulle, rétablit la République. Pétain est jugé et condamné en 1945.",
              ],
              box: { label: "Définition", text: "Résistance : ensemble des actions menées contre l'occupant allemand et le régime de Vichy, depuis l'extérieur (la France libre du général de Gaulle) ou sur le territoire (la Résistance intérieure)." },
            },
          ],
          keyPoints: [
            "22 juin 1940 : armistice ; la France est coupée en une zone occupée et une zone « libre ».",
            "10 juillet 1940 : pleins pouvoirs à Pétain ; l'État français de Vichy est un régime autoritaire (« Travail, Famille, Patrie »).",
            "Collaboration d'État (Montoire, 1940), STO (1943), Milice ; Vichy participe à la persécution et à la déportation des Juifs (rafle du Vél d'Hiv, juillet 1942).",
            "18 juin 1940 : appel du général de Gaulle depuis Londres, naissance de la France libre.",
            "Jean Moulin unifie la Résistance intérieure : première réunion du CNR le 27 mai 1943, programme du CNR en mars 1944.",
            "25 août 1944 : libération de Paris ; le GPRF du général de Gaulle rétablit la République.",
          ],
          example: {
            statement: "Montrez que le régime de Vichy rompt avec les valeurs de la République.",
            solution: [
              "Rappeler l'origine du régime : le 10 juillet 1940, le Parlement vote les pleins pouvoirs à Pétain, qui met fin à la IIIe République et crée l'État français.",
              "Rupture avec la démocratie : il n'y a plus d'élections ni de Parlement, les libertés sont supprimées, la presse est censurée et le culte du Maréchal est organisé.",
              "Rupture avec l'égalité : le statut des Juifs d'octobre 1940 exclut les Juifs de nombreux métiers, et la police française participe à leur arrestation, comme lors de la rafle du Vél d'Hiv en juillet 1942.",
              "Rupture symbolique : la devise « Travail, Famille, Patrie » remplace « Liberté, Égalité, Fraternité ».",
              "Conclure : Vichy est un régime autoritaire, antisémite et collaborateur, qui s'oppose point par point aux valeurs républicaines.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez la date de chacun des événements suivants : a) l'appel du général de Gaulle ; b) la signature de l'armistice ; c) le vote des pleins pouvoirs à Pétain ; d) la rafle du Vél d'Hiv ; e) la première réunion du CNR ; f) la libération de Paris.",
              hint: "Quatre de ces événements ont lieu en 1940, 1942 et 1943 ; le dernier a lieu l'été qui suit le débarquement en Normandie.",
              solution: [
                "a) Appel du général de Gaulle : 18 juin 1940.",
                "b) Armistice : 22 juin 1940.",
                "c) Pleins pouvoirs à Pétain : 10 juillet 1940.",
                "d) Rafle du Vél d'Hiv : 16 et 17 juillet 1942.",
                "e) Première réunion du CNR : 27 mai 1943.",
                "f) Libération de Paris : 25 août 1944.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez la différence entre la France libre et la Résistance intérieure, puis montrez comment Jean Moulin a contribué à les rapprocher.",
              hint: "Demandez-vous d'où chacune agit, qui la dirige et par quels moyens elle combat.",
              solution: [
                "La France libre est fondée à Londres par le général de Gaulle après son appel du 18 juin 1940 ; elle rassemble des volontaires et des territoires de l'empire et combat avec les Alliés (Forces françaises libres).",
                "La Résistance intérieure agit sur le territoire français : mouvements, réseaux et maquis publient des journaux clandestins, renseignent les Alliés, cachent des personnes pourchassées et sabotent.",
                "Jean Moulin, envoyé en France par de Gaulle, réunit les principaux mouvements et partis dans le Conseil national de la Résistance, dont il préside la première réunion le 27 mai 1943.",
                "Conclusion : grâce à Jean Moulin, la Résistance intérieure reconnaît l'autorité du général de Gaulle, ce qui renforce sa légitimité auprès des Alliés.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit (type brevet) : décrivez et expliquez les différentes attitudes des Français et de leurs dirigeants face à la défaite et à l'occupation, de 1940 à 1944.",
              hint: "Distinguez le régime de Vichy et la collaboration, la majorité de la population qui cherche à survivre, puis les résistants, en datant chaque exemple.",
              solution: [
                "Introduction : en juin 1940, la France est vaincue par l'Allemagne et occupée. Face à cette situation, les Français font des choix différents, de la collaboration à la Résistance.",
                "Partie 1, Vichy et la collaboration : le maréchal Pétain obtient les pleins pouvoirs le 10 juillet 1940, crée un régime autoritaire et engage la collaboration d'État à Montoire (octobre 1940). Vichy adopte le statut des Juifs, organise avec sa police la rafle du Vél d'Hiv (juillet 1942) et impose le STO (1943). Des collaborationnistes soutiennent ouvertement le nazisme.",
                "Partie 2, une majorité qui cherche à survivre : la plupart des Français subissent les privations (rationnement), l'absence des prisonniers et la peur ; beaucoup attendent sans s'engager, mais l'opinion se retourne contre Vichy, surtout avec le STO.",
                "Partie 3, la Résistance : de Londres, le général de Gaulle appelle à continuer le combat le 18 juin 1940 et fonde la France libre. En France, des mouvements et des maquis se forment ; Jean Moulin les unifie dans le CNR en mai 1943. Les résistants participent à la Libération, et Paris est libéré le 25 août 1944.",
                "Conclusion : l'occupation divise les Français. La Libération permet de rétablir la République avec le GPRF, et le programme du CNR prépare les grandes réformes d'après-guerre.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque personnage ou organisation à son rôle entre 1940 et 1944.",
            pairs: [
              { left: "Philippe Pétain", right: "Chef de l'État français à partir de juillet 1940" },
              { left: "Charles de Gaulle", right: "Chef de la France libre, auteur de l'appel du 18 juin" },
              { left: "Jean Moulin", right: "Unificateur de la Résistance, premier président du CNR" },
              { left: "Pierre Laval", right: "Chef du gouvernement de Vichy, partisan de la collaboration" },
              { left: "STO", right: "Envoi forcé de jeunes Français travailler en Allemagne à partir de 1943" },
              { left: "Milice", right: "Police politique créée par Vichy en 1943 pour traquer les résistants" },
            ],
          },
          quiz: [
            {
              q: "Qui lance un appel à poursuivre le combat le 18 juin 1940 ?",
              options: ["Le général de Gaulle", "Le maréchal Philippe Pétain", "Jean Moulin", "Pierre Laval"],
              answer: 0,
              why: "Depuis Londres, à la radio de la BBC, le général de Gaulle appelle les Français à continuer la guerre.",
            },
            {
              q: "Quelle devise le régime de Vichy adopte-t-il ?",
              options: ["Liberté, Égalité, Fraternité", "Ordre et Progrès", "Travail, Famille, Patrie", "Un peuple, un empire, un guide"],
              answer: 2,
              why: "« Travail, Famille, Patrie » remplace la devise républicaine et résume la « Révolution nationale » voulue par Pétain.",
            },
            {
              q: "Qui procède aux arrestations lors de la rafle du Vél d'Hiv en juillet 1942 ?",
              options: ["L'armée allemande seule", "La police française", "Les Forces françaises libres", "Les maquisards"],
              answer: 1,
              why: "Ce sont des policiers et des gendarmes français qui arrêtent environ 13 000 Juifs à Paris, à la demande des nazis et avec l'accord de Vichy.",
            },
            {
              q: "Que prévoit le programme du CNR adopté en mars 1944 ?",
              options: [
                "Le maintien du régime de Vichy après la guerre",
                "Une alliance militaire avec l'Allemagne",
                "Le retour de la monarchie",
                "La démocratie et la Sécurité sociale",
              ],
              answer: 3,
              why: "Le programme du CNR prévoit de rétablir la démocratie et d'engager de grandes réformes sociales, dont la Sécurité sociale.",
            },
            {
              q: "Quand Paris est-il libéré ?",
              options: ["Le 25 août 1944", "Le 6 juin 1944", "Le 8 mai 1945", "Le 18 juin 1940"],
              answer: 0,
              why: "Paris se soulève et est libéré le 25 août 1944 par les FFI et la 2e division blindée du général Leclerc.",
            },
          ],
          trap: "Croire que Vichy a seulement obéi aux Allemands : le régime a pris de lui-même des mesures antisémites (statut des Juifs d'octobre 1940) et sa police a arrêté des Juifs pour les livrer à l'occupant.",
          method: "Pour une question sur cette période, distinguez toujours trois acteurs : l'occupant allemand, le régime de Vichy et la Résistance (France libre et Résistance intérieure). Pour chaque fait étudié, demandez-vous qui agit, et datez-le.",
        },
      ],
    },
    {
      id: 'dynamiques-territoriales',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'aires-urbaines',
          title: 'Les aires urbaines, une nouvelle géographie d\'une France mondialisée',
          minutes: 30,
          objectives: [
            "Définir les notions d'aire urbaine (aire d'attraction des villes pour l'Insee depuis 2020), de périurbanisation et de métropolisation.",
            "Décrire l'organisation d'une aire urbaine, du centre à la couronne périurbaine.",
            "Expliquer comment la mondialisation renforce le poids des grandes métropoles françaises.",
            "Réaliser un schéma simple de l'organisation d'une aire urbaine.",
          ],
          course: [
            {
              heading: "Une France très urbaine",
              paragraphs: [
                "Aujourd'hui, la grande majorité des Français vivent en ville ou sous l'influence d'une ville. Pour mesurer cette influence, les géographes et l'Insee (l'Institut national de la statistique et des études économiques) ne regardent pas seulement la ville bâtie : ils observent aussi où les habitants vont travailler chaque jour.",
                "Le programme parle d'« aire urbaine » : un pôle urbain qui concentre les emplois, entouré d'une couronne périurbaine de communes dont une part importante des actifs travaille dans le pôle. Depuis 2020, l'Insee utilise un découpage proche, l'« aire d'attraction des villes », construit sur le même principe : selon l'Insee, environ 93 % de la population vit dans l'aire d'attraction d'une ville.",
                "L'aire d'attraction de Paris est de loin la plus peuplée, avec environ 13 millions d'habitants. Viennent ensuite celles de Lyon, d'Aix-Marseille, de Lille, de Toulouse et de Bordeaux. Les villes forment ainsi une hiérarchie urbaine, dominée par Paris.",
              ],
              box: { label: "Définition", text: "Aire urbaine (aire d'attraction d'une ville pour l'Insee depuis 2020) : ensemble formé par un pôle qui concentre la population et les emplois et par sa couronne, faite des communes dont une part importante des actifs vient travailler dans le pôle." },
            },
            {
              heading: "Du centre à la couronne périurbaine",
              paragraphs: [
                "Une aire urbaine s'organise en auréoles. Le centre-ville, souvent ancien, concentre commerces, administrations, lieux culturels et quartiers d'affaires (comme La Défense près de Paris ou la Part-Dieu à Lyon) ; ses logements sont chers et attirent des ménages aisés. Autour, les banlieues mêlent grands ensembles construits dans les années 1960 et 1970, quartiers pavillonnaires, zones d'activités et centres commerciaux.",
                "Plus loin, la couronne périurbaine regroupe des communes autrefois rurales, où se sont installées des familles venues de la ville : c'est la périurbanisation. Elle s'explique par le prix du logement, moins cher loin du centre, par le désir d'une maison individuelle avec jardin et par la généralisation de l'automobile.",
                "Cette organisation entraîne d'importantes mobilités pendulaires : chaque jour, des millions d'actifs font l'aller-retour entre leur domicile et leur lieu de travail, souvent en voiture. Il en résulte des embouteillages, de la pollution et une consommation d'espaces agricoles et naturels : c'est l'étalement urbain. Pour le limiter, les villes développent les transports en commun (tramways, RER, bus) et cherchent à construire de façon plus dense.",
              ],
              box: { label: "Définition", text: "Périurbanisation : extension de la ville sur les communes rurales voisines, liée à l'installation d'habitants qui continuent de travailler dans le pôle urbain. Mobilités pendulaires : déplacements quotidiens entre le domicile et le lieu de travail." },
            },
            {
              heading: "Des métropoles dans la mondialisation",
              paragraphs: [
                "La métropolisation est le processus par lequel la population, les emplois qualifiés, les richesses et les pouvoirs de décision se concentrent dans les plus grandes villes, les métropoles. Paris est une ville mondiale : elle accueille des sièges sociaux de grandes entreprises, des organisations internationales (comme l'UNESCO et l'OCDE), de grandes universités et un aéroport international majeur, Roissy-Charles-de-Gaulle.",
                "Les autres métropoles françaises (Lyon, Marseille, Toulouse, Lille, Bordeaux, Nantes...) s'insèrent aussi dans la mondialisation grâce à leurs entreprises, leurs universités, leurs aéroports et leurs lignes à grande vitesse. Toulouse est par exemple un pôle mondial de l'aéronautique, autour d'Airbus. Ces métropoles attirent étudiants, cadres, chercheurs et touristes.",
                "Mais la métropolisation crée aussi des inégalités : hausse des prix du logement dans les centres, quartiers en difficulté dans certaines banlieues, villes petites et moyennes qui perdent des habitants et des commerces. Certaines retrouvent toutefois de l'attractivité, par exemple grâce au télétravail, qui permet à des actifs de vivre plus loin des métropoles.",
              ],
              box: { label: "À retenir", text: "Une aire urbaine réunit un pôle (centre et banlieues) et une couronne périurbaine. La métropolisation concentre les fonctions de commandement dans les grandes villes, Paris en tête, qui s'insèrent dans la mondialisation." },
            },
          ],
          keyPoints: [
            "Environ 93 % des habitants vivent dans l'aire d'attraction d'une ville (découpage de l'Insee de 2020, qui succède aux aires urbaines).",
            "Aire urbaine : pôle urbain (centre et banlieues) et couronne périurbaine dont les actifs travaillent dans le pôle.",
            "Périurbanisation : installation de citadins dans les communes rurales proches, liée au prix du logement, à la maison individuelle et à la voiture.",
            "Conséquences : mobilités pendulaires, étalement urbain, pollution, recul des terres agricoles.",
            "Métropolisation : concentration des habitants, des emplois qualifiés et des pouvoirs dans les grandes villes ; Paris est une ville mondiale.",
          ],
          example: {
            statement: "Une famille quitte un appartement du centre de Lyon pour une maison avec jardin dans une commune située à 35 km, tandis que les deux parents continuent de travailler à Lyon. Expliquez ce choix et ses conséquences en utilisant le vocabulaire de la géographie.",
            solution: [
              "Nommer le phénomène : la famille participe à la périurbanisation, car elle s'installe dans une commune de la couronne périurbaine tout en travaillant dans le pôle urbain.",
              "Expliquer le choix : les logements y sont moins chers qu'au centre de Lyon, la famille peut avoir une maison individuelle avec jardin, et la voiture lui permet de parcourir la distance.",
              "Décrire les conséquences pour la famille : chaque jour, les parents effectuent des mobilités pendulaires de 70 km aller-retour, ce qui prend du temps et coûte cher en carburant.",
              "Décrire les conséquences pour le territoire : embouteillages aux entrées de Lyon, pollution, construction de nouveaux lotissements sur des terres agricoles, donc étalement urbain.",
              "Conclure : ce choix individuel, répété par des milliers de ménages, transforme l'organisation de toute l'aire urbaine.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les espaces suivants du centre vers la périphérie et donnez une caractéristique pour chacun : banlieue ; couronne périurbaine ; centre-ville ; espace rural situé hors de l'aire urbaine.",
              hint: "Suivez le trajet d'un habitant qui part du cœur de la ville et s'en éloigne de plus en plus.",
              solution: [
                "1. Centre-ville : quartiers anciens, commerces, administrations, lieux culturels, quartier d'affaires.",
                "2. Banlieue : espace bâti continu autour du centre, avec grands ensembles, pavillons, zones d'activités et centres commerciaux.",
                "3. Couronne périurbaine : communes plus éloignées, souvent pavillonnaires, dont beaucoup d'actifs vont travailler dans le pôle urbain.",
                "4. Espace rural hors de l'aire urbaine : communes peu peuplées dont les habitants ne dépendent pas d'un pôle urbain pour leur emploi.",
              ],
            },
            {
              level: 2,
              statement: "Définissez la métropolisation, puis donnez trois éléments qui montrent que Paris est une ville mondiale.",
              hint: "Pensez aux fonctions de commandement (économie, politique, culture) et aux liens avec le reste du monde.",
              solution: [
                "Définition : la métropolisation est la concentration de la population, des emplois qualifiés, des richesses et des pouvoirs de décision dans les plus grandes villes.",
                "Premier élément : Paris accueille de nombreux sièges sociaux de grandes entreprises, notamment dans le quartier d'affaires de La Défense.",
                "Deuxième élément : des organisations internationales y ont leur siège, comme l'UNESCO et l'OCDE.",
                "Troisième élément : Paris est reliée au monde entier par l'aéroport de Roissy-Charles-de-Gaulle et attire des millions de touristes étrangers.",
                "Conclusion : par ses fonctions de commandement et ses liens avec le monde, Paris est une ville mondiale, au sommet de la hiérarchie urbaine française.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit (type brevet) : décrivez et expliquez l'organisation et les dynamiques d'une grande aire urbaine française. Vous pouvez prendre l'exemple de Lyon et compléter votre texte par un schéma simple.",
              hint: "Décrivez d'abord les auréoles (centre, banlieues, couronne périurbaine), puis expliquez les dynamiques (périurbanisation, mobilités, métropolisation) et leurs conséquences.",
              solution: [
                "Introduction : la plupart des Français vivent dans une aire urbaine. L'aire urbaine de Lyon, deuxième de France, montre comment ces espaces s'organisent et se transforment dans une France mondialisée.",
                "Partie 1, l'organisation : au centre, la Presqu'île concentre commerces, lieux culturels et quartiers anciens, et le quartier d'affaires de la Part-Dieu accueille des bureaux et une grande gare. Autour, les banlieues (Villeurbanne, Vénissieux...) mêlent grands ensembles, pavillons et zones d'activités. Plus loin, la couronne périurbaine regroupe des communes où vivent des actifs qui travaillent dans le pôle.",
                "Partie 2, les dynamiques : la périurbanisation étend la ville sur les campagnes voisines, car les logements y sont moins chers et la voiture permet de longs trajets. Elle provoque des mobilités pendulaires, des embouteillages et l'étalement urbain ; la métropole développe donc tramways et transports en commun.",
                "Partie 3, la métropolisation : Lyon attire des entreprises, des étudiants et des chercheurs ; elle est reliée au monde par l'aéroport Lyon-Saint-Exupéry et aux autres métropoles par le TGV.",
                "Schéma : trois cercles concentriques (centre, banlieues, couronne périurbaine), des flèches vers le centre pour les mobilités pendulaires, des traits pour les axes de transport et un symbole pour l'aéroport, avec une légende.",
                "Conclusion : l'aire urbaine de Lyon s'étend et se renforce, mais cette croissance pose des défis de transport, de logement et d'environnement.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les aires urbaines françaises.",
            statements: [
              { text: "La grande majorité des Français vivent sous l'influence d'une ville.", true: true, why: "Selon l'Insee, environ 93 % de la population vit dans l'aire d'attraction d'une ville." },
              { text: "La couronne périurbaine est formée de communes dont beaucoup d'actifs travaillent dans le pôle urbain.", true: true, why: "C'est précisément ce qui définit la couronne : ses habitants dépendent du pôle pour leur emploi." },
              { text: "La périurbanisation s'explique surtout par le développement des transports en commun.", true: false, why: "Elle repose surtout sur l'automobile, sur le prix du logement et sur le désir d'une maison individuelle." },
              { text: "Une mobilité pendulaire est un déménagement d'une ville vers une autre.", true: false, why: "C'est un déplacement quotidien, aller et retour, entre le domicile et le lieu de travail." },
              { text: "Paris est la seule ville française intégrée à la mondialisation.", true: false, why: "Paris domine, mais Lyon, Toulouse, Marseille ou Lille sont aussi reliées au monde." },
              { text: "L'étalement urbain fait reculer les terres agricoles.", true: true, why: "Lotissements, routes et zones commerciales sont souvent construits sur d'anciennes terres agricoles." },
            ],
          },
          quiz: [
            {
              q: "Qu'appelle-t-on la périurbanisation ?",
              options: [
                "La rénovation des centres-villes anciens",
                "L'extension de la ville sur les communes rurales voisines",
                "La construction de grands ensembles en banlieue dans les années 1960 et 1970",
                "La disparition des villes moyennes",
              ],
              answer: 1,
              why: "La périurbanisation est l'extension de la ville sur les campagnes proches, où s'installent des citadins qui travaillent dans le pôle.",
            },
            {
              q: "Quelle est l'aire d'attraction la plus peuplée de France ?",
              options: ["Lyon", "Aix-Marseille", "Lille", "Paris"],
              answer: 3,
              why: "L'aire d'attraction de Paris compte environ 13 millions d'habitants, loin devant toutes les autres.",
            },
            {
              q: "Que sont les mobilités pendulaires ?",
              options: [
                "Les voyages touristiques",
                "Les déménagements vers les métropoles",
                "Les allers-retours domicile-travail",
                "Les migrations internationales",
              ],
              answer: 2,
              why: "Ce sont les déplacements quotidiens entre le domicile et le lieu de travail, comme le mouvement régulier d'un pendule.",
            },
            {
              q: "Quel processus concentre les emplois qualifiés et les pouvoirs de décision dans les grandes villes ?",
              options: ["La métropolisation", "La périurbanisation", "La désindustrialisation", "L'exode urbain"],
              answer: 0,
              why: "La métropolisation renforce le poids des plus grandes villes, qui concentrent les fonctions de commandement.",
            },
            {
              q: "Quel moyen de transport a surtout permis la périurbanisation ?",
              options: ["Le train à grande vitesse", "L'avion", "L'automobile", "Le vélo"],
              answer: 2,
              why: "La généralisation de la voiture a permis d'habiter loin de son lieu de travail.",
            },
          ],
          trap: "Confondre la banlieue, qui appartient au pôle urbain (bâti continu autour du centre), et la couronne périurbaine, faite de communes plus éloignées, séparées du pôle par des champs ou des forêts.",
          method: "Pour réaliser un schéma d'aire urbaine, dessinez des cercles concentriques (centre, banlieues, couronne périurbaine), ajoutez des flèches pour les mobilités pendulaires et des traits pour les axes de transport, puis construisez une légende organisée en deux ou trois parties.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'espaces-productifs',
          title: 'Les espaces productifs et leurs évolutions',
          minutes: 30,
          objectives: [
            "Identifier les différents espaces productifs (agricoles, industriels, touristiques et de services) et leur localisation.",
            "Expliquer les évolutions des espaces productifs liées à la mondialisation : tertiarisation, désindustrialisation, métropolisation.",
            "Décrire un espace productif à partir d'un exemple précis (un espace agricole, une zone industrialo-portuaire, une technopole).",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un espace productif ?",
              paragraphs: [
                "Un espace productif est un espace aménagé et organisé pour produire des richesses : produits agricoles, biens industriels ou services. Les activités sont traditionnellement classées en trois secteurs : le primaire (agriculture, pêche, forêt), le secondaire (industrie, construction) et le tertiaire (services : commerce, transports, banque, santé, éducation, tourisme).",
                "Aujourd'hui, le tertiaire domine très largement : il regroupe plus des trois quarts des emplois en France. L'industrie emploie une part beaucoup plus faible des actifs qu'en 1970, et l'agriculture moins de 3 %. On parle de tertiarisation de l'économie.",
              ],
              box: { label: "Définition", text: "Espace productif : espace aménagé par les sociétés pour produire et échanger des biens ou des services. Tertiarisation : augmentation de la part des services dans l'économie et dans les emplois." },
            },
            {
              heading: "Des espaces agricoles et industriels qui se transforment",
              paragraphs: [
                "La France est la première puissance agricole de l'Union européenne par la valeur de sa production. Les espaces agricoles sont spécialisés : céréales dans le Bassin parisien (la Beauce), élevage intensif en Bretagne, vignobles de Champagne ou du Bordelais. Les exploitations, moins nombreuses mais plus grandes, sont modernisées et souvent tournées vers l'exportation ; les productions de qualité (labels, AOP) et l'agriculture biologique progressent.",
                "L'industrie a connu une forte désindustrialisation depuis les années 1970 : fermeture des mines, des usines textiles et sidérurgiques, notamment dans le Nord et en Lorraine, face à la concurrence de pays où les salaires sont plus bas. Des usines ont été délocalisées. Ces régions ont dû se reconvertir, par exemple vers la logistique, les services ou le tourisme.",
                "Les industries de pointe se développent en revanche dans les métropoles et sur les littoraux : aéronautique à Toulouse, technopoles comme Sophia-Antipolis près de Nice, zones industrialo-portuaires (ZIP) comme celles du Havre ou de Fos-sur-Mer près de Marseille. Elles s'appuient sur l'innovation, la recherche et l'ouverture au monde.",
              ],
              box: { label: "Définition", text: "Désindustrialisation : recul de l'emploi et de la place de l'industrie dans un territoire. Technopole : pôle qui rassemble entreprises de haute technologie, universités et centres de recherche. ZIP : zone industrielle installée dans un grand port." },
            },
            {
              heading: "Les espaces des services et du tourisme",
              paragraphs: [
                "Les activités tertiaires se concentrent dans les métropoles : quartiers d'affaires (comme La Défense), sièges sociaux, universités, hôpitaux, centres commerciaux. Les services les plus qualifiés (finance, recherche, conseil, numérique) sont particulièrement présents à Paris et dans les grandes métropoles régionales.",
                "La France est la première destination touristique du monde par le nombre de visiteurs étrangers. Les espaces touristiques sont variés : littoraux (Côte d'Azur, côte atlantique), montagnes (stations de sports d'hiver des Alpes), villes et patrimoine (Paris, châteaux de la Loire), parcs de loisirs. Le tourisme crée des emplois, mais il peut aussi saturer certains lieux et abîmer l'environnement.",
                "Tous ces espaces productifs sont de plus en plus intégrés à la mondialisation : ils dépendent des exportations, des investissements étrangers et des grands axes de transport (autoroutes, lignes à grande vitesse, ports, aéroports). Les espaces les mieux connectés, surtout les métropoles et les littoraux, sont les plus dynamiques.",
              ],
              box: { label: "À retenir", text: "Les espaces productifs se transforment avec la mondialisation : l'agriculture se modernise, l'industrie recule dans les anciennes régions industrielles mais se développe dans les métropoles et les ports, et les services dominent l'économie." },
            },
          ],
          keyPoints: [
            "Espace productif : espace aménagé pour produire des richesses (agriculture, industrie, services).",
            "Tertiarisation : les services regroupent plus des trois quarts des emplois ; l'agriculture moins de 3 %.",
            "Agriculture : la France est la première puissance agricole de l'UE ; espaces spécialisés et modernisés (Beauce, Bretagne, vignobles).",
            "Désindustrialisation depuis les années 1970 (Nord, Lorraine) ; essor des industries de pointe dans les métropoles et sur les littoraux (Toulouse, technopoles, ZIP).",
            "La France est la première destination touristique mondiale ; les espaces les mieux connectés à la mondialisation sont les plus dynamiques.",
          ],
          example: {
            statement: "À partir de l'exemple de Toulouse, montrez qu'un espace productif industriel peut être intégré à la mondialisation.",
            solution: [
              "Présenter l'espace : Toulouse est une grande métropole du sud-ouest de la France, spécialisée dans l'aéronautique et le spatial.",
              "Identifier l'activité : Airbus y a son siège opérationnel et des chaînes d'assemblage d'avions ; de nombreuses entreprises sous-traitantes travaillent pour elle.",
              "Montrer les liens avec le monde : des éléments d'avions fabriqués dans d'autres pays d'Europe sont acheminés à Toulouse pour l'assemblage, et les avions sont vendus à des compagnies du monde entier.",
              "Montrer le rôle de la connaissance : universités, écoles d'ingénieurs et centres de recherche fournissent une main-d'œuvre très qualifiée.",
              "Conclure : Toulouse est un espace productif dynamique, car il est innovant et ouvert sur le monde.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les activités suivantes dans le secteur primaire, secondaire ou tertiaire : viticulture ; construction d'avions ; banque ; pêche ; hôtellerie ; sidérurgie ; enseignement ; élevage.",
              hint: "Le primaire exploite directement la nature, le secondaire transforme des matières en produits, le tertiaire rend des services.",
              solution: [
                "Primaire : viticulture, pêche, élevage.",
                "Secondaire : construction d'avions, sidérurgie.",
                "Tertiaire : banque, hôtellerie, enseignement.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez ce qu'est la désindustrialisation, donnez-en deux causes, puis montrez comment l'ancien bassin minier du Nord a cherché à se reconvertir.",
              hint: "Pensez à la concurrence internationale et à l'épuisement des mines, puis à la valorisation du patrimoine et à de nouvelles activités.",
              solution: [
                "Définition : la désindustrialisation est le recul de l'emploi et de la place de l'industrie dans un territoire.",
                "Causes : la concurrence de pays où les salaires sont plus bas, qui entraîne fermetures et délocalisations ; l'épuisement ou le manque de rentabilité des mines de charbon, fermées progressivement.",
                "Reconversion : le bassin minier valorise son patrimoine, inscrit au patrimoine mondial de l'UNESCO en 2012 ; le musée du Louvre-Lens a ouvert la même année sur un ancien site minier.",
                "Autres activités : la région développe la logistique, grâce à sa position entre Paris, Londres et Bruxelles, ainsi que des services.",
                "Conclusion : un espace touché par la désindustrialisation peut trouver de nouvelles activités, mais la reconversion est longue et le chômage reste souvent élevé.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit (type brevet) : décrivez et expliquez les transformations d'un espace productif français sous l'effet de la mondialisation. Vous prendrez l'exemple de la zone industrialo-portuaire du Havre.",
              hint: "Localisez l'espace, décrivez ses activités, puis montrez ses liens avec le monde et ses aménagements récents.",
              solution: [
                "Introduction : la mondialisation repose sur des échanges maritimes ; les grands ports, comme Le Havre, sont donc des espaces productifs essentiels.",
                "Partie 1, la localisation : Le Havre est situé à l'embouchure de la Seine, sur la Manche, l'une des mers les plus fréquentées du monde. Il est relié à Rouen et à Paris par le fleuve, l'autoroute et le rail.",
                "Partie 2, les activités : c'est le premier port français pour les conteneurs. Sa zone industrialo-portuaire accueille des raffineries, des industries chimiques et des entrepôts logistiques.",
                "Partie 3, les transformations : pour accueillir des porte-conteneurs géants, un nouveau terminal, Port 2000, a été construit dans les années 2000. Depuis 2021, les ports du Havre, de Rouen et de Paris sont réunis dans un seul ensemble, HAROPA, pour mieux concurrencer les grands ports d'Europe du Nord.",
                "Conclusion : la ZIP du Havre est un espace productif ouvert sur le monde, qui se transforme pour rester compétitif dans la mondialisation.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Secteur primaire", right: "Agriculture, pêche, exploitation de la forêt" },
              { left: "Tertiarisation", right: "Augmentation de la part des services dans l'économie" },
              { left: "Désindustrialisation", right: "Recul de l'emploi industriel dans un territoire" },
              { left: "Technopole", right: "Pôle qui rassemble entreprises de haute technologie et recherche" },
              { left: "ZIP", right: "Zone industrielle installée dans un grand port" },
              { left: "Délocalisation", right: "Transfert d'une activité vers un pays où les coûts sont plus bas" },
            ],
          },
          quiz: [
            {
              q: "Quel secteur regroupe la majorité des emplois en France ?",
              options: ["Le secteur primaire", "Le secteur secondaire", "Le secteur tertiaire"],
              answer: 2,
              why: "Les services regroupent plus des trois quarts des emplois : c'est la tertiarisation.",
            },
            {
              q: "Quelle ville est un grand pôle mondial de l'aéronautique ?",
              options: ["Lille", "Toulouse", "Brest", "Clermont-Ferrand"],
              answer: 1,
              why: "Toulouse accueille le siège opérationnel et des chaînes d'assemblage d'Airbus, ainsi que de nombreux sous-traitants.",
            },
            {
              q: "Que désigne une ZIP ?",
              options: [
                "Une zone de production agricole intensive",
                "Un quartier d'affaires",
                "Une zone de protection de la nature",
                "Un espace industriel lié à un grand port",
              ],
              answer: 3,
              why: "Une zone industrialo-portuaire réunit des industries qui profitent de l'arrivée des matières premières par la mer, comme au Havre ou à Fos-sur-Mer.",
            },
            {
              q: "Quelles régions ont été particulièrement touchées par la désindustrialisation ?",
              options: [
                "Le Nord et la Lorraine",
                "La Côte d'Azur et la Corse",
                "L'Île-de-France et la région toulousaine",
                "Les Alpes et les Pyrénées",
              ],
              answer: 0,
              why: "Ces anciennes régions des mines, du textile et de la sidérurgie ont perdu beaucoup d'emplois industriels depuis les années 1970.",
            },
            {
              q: "Quel est le rang de la France dans le monde pour le nombre de visiteurs étrangers ?",
              options: ["Dixième", "Premier", "Cinquième", "Troisième"],
              answer: 1,
              why: "La France est la première destination touristique mondiale par le nombre de visiteurs étrangers.",
            },
          ],
          trap: "Croire que la France n'a plus d'industrie : l'emploi industriel a beaucoup reculé, mais des industries de pointe (aéronautique, luxe, pharmacie, agroalimentaire) restent puissantes et exportatrices.",
          method: "Pour décrire un espace productif, répondez toujours à quatre questions : que produit-on ? où, et pourquoi à cet endroit ? avec quels aménagements et quels travailleurs ? avec quels liens avec le reste du monde ?",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'espaces-faible-densite',
          title: 'Les espaces de faible densité et leurs atouts',
          minutes: 25,
          objectives: [
            "Définir un espace de faible densité et le localiser sur le territoire français.",
            "Identifier les atouts et les difficultés des espaces de faible densité.",
            "Expliquer les dynamiques récentes de ces espaces : arrivée de néoruraux, tourisme, résidences secondaires, énergies renouvelables.",
          ],
          course: [
            {
              heading: "Des espaces peu peuplés mais étendus",
              paragraphs: [
                "Un espace de faible densité est un espace où vivent peu d'habitants par km². La densité moyenne de la France métropolitaine est d'environ 120 habitants par km², mais certaines zones rurales ou montagnardes en comptent moins de 30, parfois moins de 10.",
                "Ces espaces sont surtout ruraux et montagnards. Une large bande appelée « diagonale des faibles densités » va du nord-est (Meuse, Haute-Marne) au sud-ouest (Landes), en passant par le Massif central ; s'y ajoutent les Alpes du Sud, les Pyrénées et l'intérieur de la Corse. La Lozère, dans le Massif central, est le département le moins peuplé de France, avec moins de 80 000 habitants.",
                "Selon la définition adoptée par l'Insee en 2021, les communes rurales regroupent environ 88 % des communes et un tiers de la population : la France rurale reste donc très importante. Elle est aussi très diverse : campagnes proches des villes, campagnes agricoles, espaces de montagne, territoires très isolés.",
              ],
              box: { label: "Formule", text: "Densité de population = nombre d'habitants ÷ superficie, exprimée en habitants par km². Un espace de faible densité compte peu d'habitants par km² et se trouve souvent loin des grandes villes et des services." },
            },
            {
              heading: "Des difficultés réelles",
              paragraphs: [
                "Pendant longtemps, beaucoup d'espaces ruraux ont perdu des habitants : c'est l'exode rural, qui s'accélère après 1945. La population restante est souvent âgée. Des écoles, des commerces, des bureaux de poste ou des médecins ont disparu, obligeant les habitants à de longs trajets : on parle de « déserts médicaux ».",
                "L'enclavement est une autre difficulté : routes sinueuses en montagne, peu de transports en commun, réseau internet ou téléphonique parfois insuffisant (les « zones blanches »). La voiture y est indispensable, ce qui pèse sur le budget des ménages et isole les personnes qui ne peuvent pas conduire.",
              ],
              box: { label: "Définition", text: "Enclavement : situation d'un territoire difficile d'accès, mal relié aux autres par les réseaux de transport et de communication. Exode rural : départ massif des habitants des campagnes vers les villes." },
            },
            {
              heading: "Des atouts et des dynamiques nouvelles",
              paragraphs: [
                "Ces espaces ont pourtant de nombreux atouts. L'agriculture et la forêt y restent importantes, avec des productions de qualité, comme les fromages AOP du Massif central (roquefort, cantal). Les paysages préservés attirent le tourisme vert, les randonneurs et les stations de montagne ; des parcs nationaux, comme celui des Cévennes, et des parcs naturels régionaux, comme celui du Vercors, protègent et valorisent ces territoires.",
                "Depuis les années 1970, de nombreux espaces ruraux regagnent des habitants : des citadins, appelés néoruraux, s'installent à la campagne pour un meilleur cadre de vie et un logement moins cher. Le télétravail, qui s'est développé depuis la crise du Covid-19 en 2020, renforce ce mouvement dans certains territoires. Les résidences secondaires y sont aussi nombreuses.",
                "Ces espaces accueillent de nouvelles activités : énergies renouvelables (éoliennes, panneaux solaires, méthanisation), artisanat, accueil de personnes âgées. Les pouvoirs publics les aident à attirer des habitants, par exemple avec les maisons de santé ou les espaces France Services, qui regroupent plusieurs services publics en un même lieu.",
              ],
              box: { label: "À retenir", text: "Les espaces de faible densité ne sont pas forcément des espaces en déclin : malgré l'enclavement et le recul des services, ils disposent d'atouts (agriculture de qualité, paysages, tourisme, énergies renouvelables) et attirent de nouveaux habitants." },
            },
          ],
          keyPoints: [
            "Espace de faible densité : peu d'habitants par km² (moyenne de la France métropolitaine : environ 120 habitants par km²).",
            "Localisation : la « diagonale des faibles densités » (de la Meuse aux Landes), le Massif central, les montagnes, l'intérieur de la Corse.",
            "Difficultés : vieillissement, recul des services (déserts médicaux), enclavement, dépendance à la voiture.",
            "Atouts : agriculture de qualité, forêts, paysages et tourisme vert, parcs naturels, énergies renouvelables.",
            "Dynamiques : arrivée de néoruraux, résidences secondaires, télétravail ; beaucoup d'espaces ruraux regagnent des habitants.",
          ],
          example: {
            statement: "Un département de 5 200 km² compte 78 000 habitants. Calculez sa densité de population, puis dites s'il s'agit d'un espace de faible densité en la comparant à la moyenne de la France métropolitaine (environ 120 habitants par km²).",
            solution: [
              "Rappeler la formule : densité = nombre d'habitants ÷ superficie.",
              "Calculer : 78 000 ÷ 5 200 = 15. La densité est de 15 habitants par km².",
              "Comparer : 120 ÷ 15 = 8. La densité de ce département est huit fois plus faible que la moyenne de la France métropolitaine.",
              "Conclure : il s'agit bien d'un espace de faible densité.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez la densité de population des deux communes suivantes et dites laquelle appartient à un espace de faible densité : commune A, 450 habitants pour 30 km² ; commune B, 24 000 habitants pour 12 km².",
              hint: "Divisez le nombre d'habitants par la superficie, puis comparez chaque résultat à la moyenne de la France métropolitaine, environ 120 habitants par km².",
              solution: [
                "Commune A : 450 ÷ 30 = 15 habitants par km².",
                "Commune B : 24 000 ÷ 12 = 2 000 habitants par km².",
                "La commune A, avec 15 habitants par km², bien en dessous de la moyenne, appartient à un espace de faible densité ; la commune B est une commune urbaine très dense.",
              ],
            },
            {
              level: 2,
              statement: "Présentez, sous la forme d'une liste organisée, deux difficultés et trois atouts des espaces de faible densité, en donnant un exemple pour chacun.",
              hint: "Pour les difficultés, pensez à l'accès aux services et aux transports ; pour les atouts, pensez à la nature, aux productions et aux nouveaux habitants.",
              solution: [
                "Difficulté 1, le recul des services : fermeture d'écoles, de commerces et départ des médecins, d'où des « déserts médicaux ».",
                "Difficulté 2, l'enclavement : routes de montagne lentes, peu de transports en commun, couverture internet parfois insuffisante.",
                "Atout 1, une agriculture de qualité : fromages AOP du Massif central, comme le roquefort ou le cantal.",
                "Atout 2, des paysages préservés qui attirent le tourisme vert : parc national des Cévennes, parc naturel régional du Vercors.",
                "Atout 3, l'espace disponible et le cadre de vie : installation de néoruraux et de télétravailleurs, implantation d'éoliennes ou de panneaux solaires.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit (type brevet) : montrez que les espaces de faible densité ne sont pas seulement des espaces en déclin, mais des territoires qui possèdent des atouts et connaissent de nouvelles dynamiques.",
              hint: "Commencez par définir et localiser ces espaces, présentez leurs difficultés, puis consacrez la partie la plus longue à leurs atouts et à leurs dynamiques.",
              solution: [
                "Introduction : les espaces de faible densité comptent peu d'habitants par km². Ils couvrent une grande partie du territoire, notamment le long de la « diagonale des faibles densités », du nord-est au sud-ouest, et dans les montagnes.",
                "Partie 1, des difficultés réelles : l'exode rural a vidé de nombreuses campagnes après 1945 ; la population est souvent âgée, les services reculent (déserts médicaux) et l'enclavement rend la voiture indispensable.",
                "Partie 2, des atouts : l'agriculture de qualité (AOP du Massif central), la forêt, les paysages préservés protégés par des parcs (Cévennes, Vercors) attirent touristes et randonneurs.",
                "Partie 3, de nouvelles dynamiques : depuis les années 1970, des néoruraux s'installent à la campagne ; le télétravail renforce ce mouvement depuis 2020. Les énergies renouvelables et les services publics regroupés (maisons de santé, France Services) créent des activités et améliorent la vie quotidienne.",
                "Conclusion : les espaces de faible densité restent fragiles, mais beaucoup sont attractifs et regagnent des habitants : ils ne sont pas condamnés au déclin.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les espaces de faible densité.",
            statements: [
              { text: "Un espace de faible densité est forcément un désert sans habitants.", true: false, why: "Il compte peu d'habitants par km², mais il est habité, cultivé et souvent animé." },
              { text: "La Lozère est le département le moins peuplé de France.", true: true, why: "Elle compte moins de 80 000 habitants." },
              { text: "Tous les espaces ruraux perdent des habitants aujourd'hui.", true: false, why: "Depuis les années 1970, beaucoup d'espaces ruraux regagnent des habitants, grâce notamment aux néoruraux." },
              { text: "Un néorural est un citadin qui s'installe à la campagne.", true: true, why: "Il recherche souvent un meilleur cadre de vie et un logement moins cher." },
              { text: "Les parcs naturels régionaux protègent et valorisent des territoires ruraux.", true: true, why: "Ils associent protection de la nature et développement local, comme dans le Vercors." },
              { text: "Le tourisme vert ne concerne que les littoraux.", true: false, why: "Le tourisme vert se pratique surtout à la campagne et en montagne : randonnée, gîtes, découverte de la nature." },
            ],
          },
          quiz: [
            {
              q: "Comment calcule-t-on la densité de population ?",
              options: [
                "Superficie × nombre d'habitants",
                "Superficie ÷ nombre d'habitants",
                "Nombre d'habitants - superficie",
                "Nombre d'habitants ÷ superficie",
              ],
              answer: 3,
              why: "On divise le nombre d'habitants par la superficie : le résultat s'exprime en habitants par km².",
            },
            {
              q: "Qu'appelle-t-on un néorural ?",
              options: [
                "Un citadin qui s'installe à la campagne",
                "Un agriculteur qui quitte la campagne pour la ville",
                "Un touriste de passage",
                "Le propriétaire d'une résidence secondaire en bord de mer",
              ],
              answer: 0,
              why: "Les néoruraux sont des habitants des villes venus vivre à la campagne.",
            },
            {
              q: "Quelle difficulté touche souvent les espaces de faible densité ?",
              options: [
                "La saturation des transports en commun aux heures de pointe",
                "Le manque de terres agricoles",
                "Le recul des services comme les médecins",
                "Le prix très élevé des logements",
              ],
              answer: 2,
              why: "La fermeture de commerces, d'écoles et le départ des médecins obligent les habitants à faire de longs trajets.",
            },
            {
              q: "Où passe la « diagonale des faibles densités » ?",
              options: ["Du Nord à la Côte d'Azur", "De la Meuse aux Landes", "De la Bretagne à l'Alsace", "Le long des littoraux"],
              answer: 1,
              why: "Elle traverse la France du nord-est au sud-ouest, en passant par le Massif central.",
            },
            {
              q: "Lequel de ces éléments est un atout des espaces de faible densité ?",
              options: ["Les embouteillages", "La forte densité de médecins", "Les grands quartiers d'affaires", "Les paysages préservés"],
              answer: 3,
              why: "Les paysages préservés attirent touristes et nouveaux habitants, et sont protégés par des parcs naturels.",
            },
          ],
          trap: "Assimiler espace de faible densité et espace en déclin : beaucoup de ces territoires gagnent à nouveau des habitants et développent de nouvelles activités, même si certains restent fragiles.",
          method: "Pour une question sur ces espaces, organisez votre réponse en deux temps, les contraintes puis les atouts et les dynamiques, et appuyez chaque idée sur un exemple localisé : un massif, un département, un parc naturel.",
        },
      ],
    },
    {
      id: 'regles-jeu-democratique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'constitution-etat-droit',
          title: 'La Constitution et l\'État de droit',
          minutes: 25,
          objectives: [
            "Définir la Constitution et expliquer sa place au sommet de la hiérarchie des normes.",
            "Identifier les principes et les valeurs de la République inscrits dans la Constitution de 1958.",
            "Expliquer ce qu'est un État de droit et le rôle du Conseil constitutionnel.",
          ],
          course: [
            {
              heading: "La Constitution, texte fondamental de la République",
              paragraphs: [
                "La Constitution est le texte qui fixe l'organisation des pouvoirs publics et leurs relations, et qui garantit les droits et libertés des citoyens. La Constitution actuelle de la France est celle de la Ve République : approuvée par référendum le 28 septembre 1958, elle a été promulguée le 4 octobre 1958.",
                "Son article 1er affirme : « La France est une République indivisible, laïque, démocratique et sociale. » L'article 2 fixe la langue (le français), l'emblème (le drapeau bleu, blanc, rouge), l'hymne (La Marseillaise), la devise (« Liberté, Égalité, Fraternité ») et le principe de la République : « gouvernement du peuple, par le peuple et pour le peuple ». L'article 3 précise que la souveraineté nationale appartient au peuple, qui l'exerce par ses représentants et par la voie du référendum.",
                "Le préambule de la Constitution renvoie à trois textes qui protègent les droits : la Déclaration des droits de l'homme et du citoyen de 1789 (libertés, égalité devant la loi), le préambule de la Constitution de 1946 (droits sociaux comme le droit de grève, égalité entre les femmes et les hommes) et la Charte de l'environnement de 2004.",
              ],
              box: { label: "Définition", text: "Constitution : texte fondamental d'un État, qui organise les pouvoirs publics et garantit les droits et libertés des citoyens. En France, c'est la Constitution du 4 octobre 1958, celle de la Ve République." },
            },
            {
              heading: "La hiérarchie des normes",
              paragraphs: [
                "Les règles de droit, appelées normes, sont classées selon une hiérarchie : chaque norme doit respecter celles qui lui sont supérieures. Au sommet se trouve la Constitution, avec les textes de son préambule ; viennent ensuite les traités internationaux ratifiés par la France, puis les lois votées par le Parlement, enfin les règlements (décrets du gouvernement, arrêtés des ministres, des préfets ou des maires).",
                "Par exemple, un arrêté municipal qui interdirait l'accès à un parc public aux personnes d'une certaine religion serait contraire à la loi et à la Constitution : un juge pourrait l'annuler. La Constitution elle-même peut être modifiée, mais selon une procédure exigeante (article 89) : après un vote des deux assemblées dans les mêmes termes, la révision doit être approuvée par référendum ou par le Parlement réuni en Congrès à la majorité des trois cinquièmes. En 2024, une révision y a inscrit la liberté garantie à la femme d'avoir recours à une interruption volontaire de grossesse.",
              ],
              box: { label: "Règle", text: "Hiérarchie des normes, du haut vers le bas : Constitution, traités internationaux, lois, règlements (décrets, puis arrêtés). Une norme inférieure doit toujours respecter les normes qui lui sont supérieures." },
            },
            {
              heading: "L'État de droit et le contrôle de constitutionnalité",
              paragraphs: [
                "Un État de droit est un État dans lequel les pouvoirs publics eux-mêmes sont soumis au droit. Il repose sur trois éléments : le respect de la hiérarchie des normes, l'égalité de tous devant la loi, gouvernants compris, et l'existence de juges indépendants capables de sanctionner ceux qui ne respectent pas le droit. Il s'oppose à l'arbitraire d'un pouvoir qui agirait comme il le veut.",
                "En France, le Conseil constitutionnel vérifie que les lois respectent la Constitution. Il compte neuf membres nommés pour neuf ans : trois par le président de la République, trois par le président de l'Assemblée nationale, trois par le président du Sénat. Il peut être saisi avant la promulgation d'une loi, notamment par 60 députés ou 60 sénateurs ; une disposition jugée contraire à la Constitution ne peut pas s'appliquer.",
                "Depuis 2010, toute personne qui est partie à un procès peut aussi contester une loi déjà en vigueur, si elle estime que cette loi porte atteinte aux droits et libertés garantis par la Constitution : c'est la question prioritaire de constitutionnalité (QPC), transmise au Conseil constitutionnel par le Conseil d'État ou la Cour de cassation. L'État de droit protège ainsi chaque citoyen, y compris contre l'État.",
              ],
              box: { label: "Définition", text: "État de droit : État dans lequel les gouvernants comme les citoyens sont soumis au droit, ce qui suppose le respect de la hiérarchie des normes, l'égalité devant la loi et des juges indépendants." },
            },
          ],
          keyPoints: [
            "Constitution du 4 octobre 1958 : texte fondamental de la Ve République, qui organise les pouvoirs et garantit les droits.",
            "Article 1er : « La France est une République indivisible, laïque, démocratique et sociale. »",
            "Préambule : Déclaration des droits de l'homme et du citoyen de 1789, préambule de 1946, Charte de l'environnement de 2004.",
            "Hiérarchie des normes : Constitution, traités, lois, règlements ; chaque norme respecte les normes supérieures.",
            "État de droit : pouvoirs publics soumis au droit, égalité devant la loi, juges indépendants.",
            "Le Conseil constitutionnel (9 membres nommés pour 9 ans) contrôle les lois ; depuis 2010, la QPC permet à un justiciable de contester une loi.",
          ],
          example: {
            statement: "Un maire prend un arrêté qui interdit, toute l'année et à toute heure, à plus de deux jeunes de moins de 18 ans de se retrouver ensemble sur la place du village. Un habitant estime que cet arrêté porte atteinte aux libertés. Expliquez comment l'État de droit lui permet d'agir.",
            solution: [
              "Identifier la norme : un arrêté municipal est un règlement, situé tout en bas de la hiérarchie des normes.",
              "Rappeler la règle : cet arrêté doit respecter les normes supérieures, en particulier la Constitution et la Déclaration de 1789, qui protègent la liberté d'aller et venir et le droit de se réunir.",
              "Analyser : une interdiction générale, permanente et visant tous les jeunes paraît disproportionnée par rapport à un éventuel problème d'ordre public.",
              "Agir : l'habitant peut saisir le juge administratif (le tribunal administratif), indépendant du maire, et lui demander d'annuler l'arrêté.",
              "Conclure : dans un État de droit, même un élu doit respecter le droit, et un juge indépendant peut sanctionner ses décisions.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces normes de la plus haute à la plus basse dans la hiérarchie des normes : un arrêté du maire ; la Constitution ; une loi votée par le Parlement ; un traité international ratifié par la France ; un décret du Premier ministre.",
              hint: "Les règlements (décrets et arrêtés) sont pris pour appliquer les lois ; les traités ratifiés ont une autorité supérieure à celle des lois.",
              solution: [
                "1. La Constitution.",
                "2. Le traité international ratifié par la France.",
                "3. La loi votée par le Parlement.",
                "4. Le décret du Premier ministre.",
                "5. L'arrêté du maire.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en quoi le Conseil constitutionnel et la question prioritaire de constitutionnalité (QPC) protègent les droits des citoyens.",
              hint: "Distinguez le contrôle avant l'entrée en vigueur d'une loi et le contrôle d'une loi déjà appliquée.",
              solution: [
                "Le Conseil constitutionnel vérifie que les lois respectent la Constitution et les droits garantis par son préambule, comme la Déclaration de 1789.",
                "Avant la promulgation, il peut être saisi, par exemple par 60 députés ou 60 sénateurs : une disposition contraire à la Constitution est alors censurée et ne s'applique pas.",
                "Depuis 2010, la QPC permet à une personne engagée dans un procès de contester une loi déjà en vigueur qui porterait atteinte à ses droits ; si le Conseil constitutionnel lui donne raison, la disposition est abrogée.",
                "Conclusion : ces deux contrôles garantissent que le législateur lui-même respecte les droits et libertés : c'est un pilier de l'État de droit.",
              ],
            },
            {
              level: 3,
              statement: "Situation pratique (type brevet, EMC) : votre classe prépare une exposition destinée aux élèves de 6e. Rédigez un texte d'une quinzaine de lignes expliquant pourquoi la France est un État de droit, en vous appuyant sur au moins trois exemples précis.",
              hint: "Définissez l'État de droit, puis prenez un exemple pour chacun de ses piliers : hiérarchie des normes, égalité devant la loi, juges indépendants.",
              solution: [
                "Définir simplement : un État de droit est un pays où tout le monde, y compris ceux qui gouvernent, doit respecter les règles de droit.",
                "Premier exemple, la hiérarchie des normes : la Constitution de 1958 est le texte le plus important ; une loi, un décret ou un arrêté du maire doit la respecter.",
                "Deuxième exemple, le contrôle des lois : le Conseil constitutionnel peut empêcher l'application d'une loi contraire à la Constitution, et depuis 2010 un citoyen peut contester une loi grâce à la QPC.",
                "Troisième exemple, l'égalité devant la loi et l'indépendance des juges : un ministre ou un élu peut être jugé comme n'importe quel citoyen, et un juge peut annuler la décision d'un maire qui ne respecte pas les libertés.",
                "Conclure pour les élèves de 6e : grâce à l'État de droit, les libertés de chacun sont protégées, même face à l'État.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Classez ces normes de la plus haute à la plus basse dans la hiérarchie des normes.",
            items: [
              "La Constitution et son préambule",
              "Les traités internationaux ratifiés par la France",
              "Les lois votées par le Parlement",
              "Les décrets du gouvernement",
              "Les arrêtés municipaux",
            ],
          },
          quiz: [
            {
              q: "Quand la Constitution de la Ve République a-t-elle été promulguée ?",
              options: ["Le 26 août 1789", "Le 4 octobre 1958", "Le 27 octobre 1946", "Le 10 juillet 1940"],
              answer: 1,
              why: "Approuvée par référendum le 28 septembre 1958, la Constitution est promulguée le 4 octobre 1958.",
            },
            {
              q: "Lequel de ces textes est cité dans le préambule de la Constitution de 1958 ?",
              options: ["Le Code civil de 1804", "Le traité de Maastricht de 1992", "La Déclaration de 1789", "La loi de 1905 sur la laïcité"],
              answer: 2,
              why: "Le préambule renvoie à la Déclaration des droits de l'homme et du citoyen de 1789, au préambule de 1946 et à la Charte de l'environnement de 2004.",
            },
            {
              q: "Qu'est-ce qu'un État de droit ?",
              options: [
                "Un État où les pouvoirs publics sont eux-mêmes soumis au droit",
                "Un État où le chef décide seul des lois et les applique comme il le souhaite, sans contrôle",
                "Un État qui possède un très grand nombre de lois",
              ],
              answer: 0,
              why: "Dans un État de droit, gouvernants et citoyens respectent les mêmes règles, sous le contrôle de juges indépendants.",
            },
            {
              q: "Qui peut poser une question prioritaire de constitutionnalité (QPC) ?",
              options: [
                "Uniquement le président de la République",
                "Uniquement les députés",
                "Seulement le Conseil d'État",
                "Toute personne partie à un procès",
              ],
              answer: 3,
              why: "Depuis 2010, toute personne engagée dans un procès peut contester une loi qui porterait atteinte à ses droits constitutionnels.",
            },
            {
              q: "Combien de membres nommés le Conseil constitutionnel compte-t-il ?",
              options: ["5", "9", "12", "577"],
              answer: 1,
              why: "Il compte neuf membres nommés pour neuf ans, trois par le président de la République et trois par chacun des présidents des assemblées.",
            },
          ],
          trap: "Confondre la Constitution et la loi : la loi est votée par le Parlement et doit respecter la Constitution, texte supérieur qui ne peut être modifié que selon une procédure spéciale.",
          method: "Pour expliquer un principe en EMC, suivez trois temps : définir le mot avec précision, citer le texte qui le fonde (article de la Constitution, Déclaration de 1789), puis l'illustrer par une situation concrète de la vie quotidienne.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'separation-pouvoirs',
          title: 'La séparation des pouvoirs et les institutions de la Ve République',
          minutes: 30,
          objectives: [
            "Expliquer le principe de séparation des pouvoirs et son origine.",
            "Identifier les institutions de la Ve République et leur rôle : président de la République, gouvernement, Parlement, autorité judiciaire.",
            "Décrire les moyens d'action réciproques entre le pouvoir exécutif et le pouvoir législatif.",
          ],
          course: [
            {
              heading: "Un principe pour éviter l'abus de pouvoir",
              paragraphs: [
                "Au XVIIIe siècle, le philosophe Montesquieu, dans De l'esprit des lois (1748), explique que pour garantir la liberté, aucune personne ni aucun groupe ne doit détenir tous les pouvoirs. Il écrit : « Pour qu'on ne puisse abuser du pouvoir, il faut que, par la disposition des choses, le pouvoir arrête le pouvoir. »",
                "On distingue trois pouvoirs : le pouvoir législatif, qui fait les lois ; le pouvoir exécutif, qui les fait appliquer et dirige la politique du pays ; le pouvoir judiciaire, qui juge et sanctionne ceux qui ne respectent pas les lois. L'article 16 de la Déclaration des droits de l'homme et du citoyen de 1789 affirme : « Toute société dans laquelle la garantie des droits n'est pas assurée, ni la séparation des pouvoirs déterminée, n'a point de Constitution. »",
              ],
              box: { label: "Définition", text: "Séparation des pouvoirs : principe selon lequel les pouvoirs législatif, exécutif et judiciaire sont confiés à des organes distincts qui se contrôlent mutuellement, afin de protéger les libertés." },
            },
            {
              heading: "Le pouvoir exécutif : le président et le gouvernement",
              paragraphs: [
                "Le président de la République est élu au suffrage universel direct depuis la réforme de 1962 (première élection en 1965), pour cinq ans (le quinquennat, adopté par référendum en 2000), et il ne peut pas exercer plus de deux mandats consécutifs. Il veille au respect de la Constitution, nomme le Premier ministre, préside le Conseil des ministres, est le chef des armées, promulgue les lois et peut dissoudre l'Assemblée nationale ou soumettre certains projets de loi au référendum.",
                "Le gouvernement, dirigé par le Premier ministre, « détermine et conduit la politique de la nation » (article 20). Il propose des projets de loi, prend des décrets pour appliquer les lois et dirige l'administration. Il est responsable devant l'Assemblée nationale, qui peut le renverser.",
                "Lorsque la majorité de l'Assemblée nationale est opposée au président, celui-ci nomme en général un Premier ministre issu de cette majorité : c'est la cohabitation, qui a eu lieu de 1986 à 1988, de 1993 à 1995 et de 1997 à 2002. Le Premier ministre gouverne alors avec une plus grande autonomie.",
              ],
            },
            {
              heading: "Le pouvoir législatif : le Parlement",
              paragraphs: [
                "Le Parlement est composé de deux assemblées : c'est le bicamérisme. L'Assemblée nationale compte 577 députés élus au suffrage universel direct pour cinq ans. Le Sénat compte 348 sénateurs élus au suffrage universel indirect, par des grands électeurs qui sont surtout des élus locaux, pour six ans ; il est renouvelé par moitié tous les trois ans et représente les collectivités territoriales.",
                "Le Parlement vote la loi et le budget, contrôle l'action du gouvernement et évalue les politiques publiques. Un texte de loi est examiné et voté successivement par les deux assemblées ; en cas de désaccord persistant, le gouvernement peut demander à l'Assemblée nationale de statuer définitivement. Les parlementaires interrogent les ministres lors des séances de questions au gouvernement et peuvent créer des commissions d'enquête.",
              ],
            },
            {
              heading: "L'autorité judiciaire et l'équilibre des pouvoirs",
              paragraphs: [
                "La Constitution parle d'« autorité judiciaire ». Les juges sont indépendants : ni le gouvernement ni le Parlement ne peuvent leur dicter leurs décisions. Les tribunaux de l'ordre judiciaire jugent les conflits entre personnes et les infractions ; à côté, les juridictions administratives jugent les litiges avec l'administration. Selon l'article 64, le président de la République est garant de l'indépendance de l'autorité judiciaire, assisté par le Conseil supérieur de la magistrature.",
                "Les pouvoirs exécutif et législatif disposent de moyens d'action l'un sur l'autre. L'Assemblée nationale peut renverser le gouvernement en adoptant une motion de censure (article 49), ce qui s'est produit en 1962 et en décembre 2024. À l'inverse, le président peut dissoudre l'Assemblée nationale (article 12), ce qui provoque de nouvelles élections législatives, comme en juin 2024. Enfin, le Conseil constitutionnel veille à ce que les lois respectent la Constitution.",
              ],
              box: { label: "Règle", text: "Exécutif : président de la République et gouvernement. Législatif : Parlement (Assemblée nationale et Sénat). Judiciaire : juges indépendants. La motion de censure (Assemblée contre gouvernement) et la dissolution (président contre Assemblée) assurent l'équilibre." },
            },
          ],
          keyPoints: [
            "Montesquieu (1748) : séparer les pouvoirs législatif, exécutif et judiciaire pour que « le pouvoir arrête le pouvoir ».",
            "Président : élu au suffrage universel direct pour 5 ans ; il nomme le Premier ministre, est chef des armées et peut dissoudre l'Assemblée.",
            "Gouvernement (Premier ministre et ministres) : détermine et conduit la politique de la nation, responsable devant l'Assemblée nationale.",
            "Parlement : Assemblée nationale (577 députés, 5 ans, suffrage direct) et Sénat (348 sénateurs, 6 ans, suffrage indirect) ; il vote la loi et contrôle le gouvernement.",
            "Équilibre : motion de censure, dissolution, juges indépendants, Conseil constitutionnel.",
            "Cohabitation : président et majorité de l'Assemblée de bords opposés (1986-1988, 1993-1995, 1997-2002).",
          ],
          example: {
            statement: "Expliquez comment une loi est adoptée en France, de son initiative à son entrée en vigueur.",
            solution: [
              "L'initiative : un texte peut être proposé par le gouvernement (projet de loi) ou par des parlementaires (proposition de loi).",
              "L'examen : le texte est étudié en commission, puis débattu, amendé et voté en séance publique par l'Assemblée nationale et par le Sénat.",
              "La navette : le texte circule entre les deux assemblées jusqu'à ce qu'il soit adopté dans les mêmes termes ; en cas de désaccord persistant, l'Assemblée nationale peut avoir le dernier mot à la demande du gouvernement.",
              "Le contrôle : avant la promulgation, le Conseil constitutionnel peut être saisi pour vérifier que la loi respecte la Constitution.",
              "La promulgation : le président de la République promulgue la loi dans les quinze jours, puis elle est publiée au Journal officiel et entre en vigueur.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez pour chaque institution si elle relève du pouvoir législatif, exécutif ou judiciaire : le Sénat ; le Premier ministre ; un tribunal ; l'Assemblée nationale ; le président de la République ; une cour d'appel ; un ministre.",
              hint: "Demandez-vous si l'institution vote les lois, les fait appliquer, ou juge.",
              solution: [
                "Pouvoir législatif : le Sénat, l'Assemblée nationale.",
                "Pouvoir exécutif : le Premier ministre, le président de la République, un ministre.",
                "Pouvoir judiciaire : un tribunal, une cour d'appel.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez ce que sont la motion de censure et la dissolution, puis montrez qu'elles assurent un équilibre entre les pouvoirs.",
              hint: "Pour chaque mécanisme, précisez qui agit, contre qui, et ce qui se passe ensuite.",
              solution: [
                "La motion de censure (article 49) : l'Assemblée nationale vote contre le gouvernement ; si elle est adoptée à la majorité absolue des députés, le gouvernement doit démissionner.",
                "La dissolution (article 12) : le président de la République met fin au mandat des députés avant son terme ; de nouvelles élections législatives sont organisées.",
                "L'équilibre : l'Assemblée peut sanctionner le gouvernement, mais le président peut, à l'inverse, renvoyer les députés devant les électeurs. Aucun pouvoir ne peut agir sans limite.",
                "Conclusion : ces deux mécanismes appliquent l'idée de Montesquieu : « le pouvoir arrête le pouvoir », et c'est finalement le peuple qui tranche par son vote.",
              ],
            },
            {
              level: 3,
              statement: "Situation pratique (type brevet, EMC) : un camarade affirme : « En France, le président de la République a tous les pouvoirs : il fait les lois et décide de tout. » Rédigez une réponse argumentée d'une quinzaine de lignes pour lui montrer qu'il se trompe.",
              hint: "Reconnaissez d'abord les pouvoirs importants du président, puis montrez les limites posées par la séparation des pouvoirs, avec des institutions et des exemples précis.",
              solution: [
                "Reconnaître ce qui est juste : le président de la République a des pouvoirs importants. Élu au suffrage universel direct, il nomme le Premier ministre, est chef des armées et peut dissoudre l'Assemblée nationale.",
                "Corriger sur la loi : ce n'est pas le président qui fait les lois, mais le Parlement (Assemblée nationale et Sénat), qui les discute et les vote ; le président se contente de les promulguer.",
                "Montrer les contre-pouvoirs : le gouvernement est responsable devant l'Assemblée, qui peut le renverser par une motion de censure ; le Conseil constitutionnel peut censurer une loi ; les juges sont indépendants.",
                "Donner un exemple : en période de cohabitation (par exemple de 1997 à 2002), le président a dû gouverner avec un Premier ministre d'un bord opposé.",
                "Conclure : en France, les pouvoirs sont séparés et se limitent mutuellement, comme le voulait Montesquieu ; c'est ce qui protège les libertés des citoyens.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque institution ou mécanisme à sa description.",
            pairs: [
              { left: "Assemblée nationale", right: "577 députés élus pour cinq ans au suffrage universel direct" },
              { left: "Sénat", right: "348 sénateurs élus pour six ans au suffrage indirect" },
              { left: "Président de la République", right: "Élu pour cinq ans, il nomme le Premier ministre" },
              { left: "Gouvernement", right: "Détermine et conduit la politique de la nation" },
              { left: "Motion de censure", right: "Vote de l'Assemblée qui peut renverser le gouvernement" },
              { left: "Dissolution", right: "Décision du président qui provoque de nouvelles élections législatives" },
            ],
          },
          quiz: [
            {
              q: "Quel penseur a théorisé la séparation des pouvoirs dans De l'esprit des lois ?",
              options: ["Jean-Jacques Rousseau", "Voltaire", "Montesquieu", "Denis Diderot"],
              answer: 2,
              why: "Montesquieu publie De l'esprit des lois en 1748 et y défend l'idée que « le pouvoir arrête le pouvoir ».",
            },
            {
              q: "Pour combien de temps le président de la République est-il élu ?",
              options: ["Cinq ans", "Six ans", "Sept ans", "Quatre ans"],
              answer: 0,
              why: "Depuis le référendum de 2000, le mandat présidentiel dure cinq ans : c'est le quinquennat.",
            },
            {
              q: "Quelle assemblée peut renverser le gouvernement par une motion de censure ?",
              options: ["Le Sénat", "L'Assemblée nationale", "Le Conseil constitutionnel", "Le Conseil des ministres"],
              answer: 1,
              why: "Le gouvernement est responsable devant l'Assemblée nationale, seule à pouvoir le renverser par une motion de censure.",
            },
            {
              q: "Comment les sénateurs sont-ils élus ?",
              options: [
                "Au suffrage universel direct, pour cinq ans",
                "Par le président de la République",
                "Par tirage au sort parmi tous les citoyens inscrits",
                "Au suffrage universel indirect, pour six ans",
              ],
              answer: 3,
              why: "Les sénateurs sont élus pour six ans par des grands électeurs, surtout des élus locaux.",
            },
            {
              q: "Qu'appelle-t-on la cohabitation ?",
              options: [
                "Le partage du pouvoir entre l'Assemblée nationale et le Sénat",
                "La réunion du Parlement en Congrès à Versailles",
                "Un président et une majorité de bords opposés",
                "L'alliance de plusieurs partis au gouvernement",
              ],
              answer: 2,
              why: "Il y a cohabitation quand le président doit gouverner avec un Premier ministre issu d'une majorité parlementaire qui lui est opposée.",
            },
          ],
          trap: "Croire que le président de la République fait les lois : c'est le Parlement qui les vote ; le président les promulgue, et le gouvernement les fait appliquer par des décrets.",
          method: "Construisez un schéma des institutions en trois colonnes (exécutif, législatif, judiciaire) avec, pour chaque institution, son mode de désignation et sa durée, puis des flèches pour l'élection par les citoyens, la motion de censure et la dissolution. Refaites-le de mémoire avant le brevet.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'elections-pluralisme',
          title: 'Voter : élections, pluralisme et place de l\'opposition',
          minutes: 25,
          objectives: [
            "Expliquer les conditions pour voter en France et les principes du suffrage universel.",
            "Distinguer les principales élections et les modes de scrutin majoritaire et proportionnel.",
            "Expliquer le rôle des partis politiques, du pluralisme et de l'opposition dans une démocratie.",
          ],
          course: [
            {
              heading: "Le droit de vote, une conquête",
              paragraphs: [
                "En démocratie, les citoyens choisissent leurs représentants par l'élection. En France, le suffrage universel masculin est établi en 1848 ; les femmes obtiennent le droit de vote et d'éligibilité par l'ordonnance du 21 avril 1944 et votent pour la première fois en 1945. En 1974, l'âge de la majorité, et donc du droit de vote, est abaissé de 21 à 18 ans.",
                "Pour voter, il faut avoir la nationalité française, avoir 18 ans, jouir de ses droits civils et politiques et être inscrit sur les listes électorales. L'inscription est automatique pour les jeunes qui ont fait leur recensement citoyen à 16 ans. Les citoyens des autres pays de l'Union européenne qui résident en France peuvent voter aux élections municipales et européennes.",
                "Voter est un droit et un devoir civique, mais ce n'est pas obligatoire en France. Le suffrage est universel, égal (une personne, une voix), libre et secret : l'électeur passe par l'isoloir et glisse son bulletin dans une enveloppe. Une personne absente peut voter par procuration. Depuis 2014, les votes blancs sont décomptés à part, mais ils ne sont pas pris en compte dans les suffrages exprimés.",
              ],
              box: { label: "Définition", text: "Suffrage universel : droit de vote accordé à tous les citoyens majeurs, sans condition de richesse, d'instruction ou de sexe. Il est égal, libre et secret." },
            },
            {
              heading: "Les élections et les modes de scrutin",
              paragraphs: [
                "Les citoyens élisent leurs représentants à plusieurs échelles : le président de la République et les députés tous les cinq ans, les conseillers municipaux (qui élisent ensuite le maire), départementaux et régionaux tous les six ans, les députés européens tous les cinq ans. Au suffrage universel direct, les électeurs votent eux-mêmes pour leurs élus ; au suffrage indirect, ce sont des élus qui votent, comme pour les sénateurs.",
                "Le scrutin majoritaire donne la victoire au candidat qui obtient le plus de voix. Pour l'élection présidentielle, il est uninominal à deux tours : pour être élu au premier tour, il faut la majorité absolue des suffrages exprimés (plus de 50 %) ; sinon, seuls les deux candidats arrivés en tête restent au second tour. Les députés sont aussi élus au scrutin majoritaire à deux tours, dans 577 circonscriptions. Ce mode de scrutin dégage souvent des majorités nettes, mais il avantage les grands partis.",
                "Le scrutin proportionnel attribue les sièges en proportion des voix obtenues par chaque liste. Il est utilisé pour les élections européennes : en France, chaque liste est nationale et il faut au moins 5 % des suffrages exprimés pour obtenir des élus. Ce scrutin représente mieux la diversité des opinions, mais il peut rendre plus difficile la formation d'une majorité.",
              ],
              box: { label: "Règle", text: "Majorité absolue : plus de la moitié des suffrages exprimés. Majorité relative : le plus grand nombre de voix, sans forcément dépasser la moitié. Les votes blancs et nuls ne font pas partie des suffrages exprimés." },
            },
            {
              heading: "Pluralisme, partis et opposition",
              paragraphs: [
                "Le pluralisme est la libre existence de plusieurs partis politiques, opinions et médias. Selon l'article 4 de la Constitution, les partis « concourent à l'expression du suffrage » et « se forment et exercent leur activité librement », à condition de respecter la souveraineté nationale et la démocratie. Sans pluralisme, il n'y a pas de véritable choix : dans les régimes totalitaires, un parti unique supprime toute concurrence.",
                "L'opposition rassemble les partis qui ne participent pas au gouvernement. Elle critique, propose d'autres solutions et contrôle la majorité. Depuis la révision constitutionnelle de 2008, l'article 51-1 lui reconnaît des droits particuliers ; par exemple, la présidence de la commission des finances de l'Assemblée nationale revient à un député de l'opposition. L'alternance, c'est-à-dire l'arrivée au pouvoir de l'opposition après une élection, comme en 1981, montre que la démocratie fonctionne.",
                "Le jeu démocratique suppose d'accepter le résultat des urnes, de respecter ses adversaires et de débattre avec des arguments. La campagne électorale est encadrée : les dépenses des candidats sont plafonnées et contrôlées, et le temps de parole dans les médias audiovisuels est réglementé par l'Arcom.",
              ],
              box: { label: "Définition", text: "Pluralisme : coexistence libre de plusieurs partis, opinions et médias. Opposition : partis qui ne gouvernent pas et contrôlent la majorité. Alternance : passage du pouvoir de la majorité à l'opposition à la suite d'une élection." },
            },
          ],
          keyPoints: [
            "Suffrage universel masculin : 1848. Droit de vote des femmes : ordonnance du 21 avril 1944. Vote à 18 ans : 1974.",
            "Pour voter : nationalité française, 18 ans, droits civils et politiques, inscription sur les listes électorales.",
            "Le vote est universel, égal, libre et secret ; il n'est pas obligatoire en France.",
            "Scrutin majoritaire (présidentielle, législatives) et scrutin proportionnel (européennes).",
            "Pluralisme : plusieurs partis, opinions et médias ; l'opposition contrôle la majorité et peut lui succéder (alternance).",
          ],
          example: {
            statement: "Au premier tour d'une élection présidentielle, il y a 40 000 000 de suffrages exprimés. Le candidat A obtient 14 000 000 de voix, B 11 000 000, C 9 000 000 et D 6 000 000. Un candidat est-il élu dès le premier tour ? Qui participe au second tour ?",
            solution: [
              "Vérifier le total : 14 + 11 + 9 + 6 = 40 millions, ce qui correspond bien aux suffrages exprimés.",
              "Calculer la majorité absolue : il faut plus de la moitié des suffrages exprimés, soit plus de 40 000 000 ÷ 2 = 20 000 000 de voix.",
              "Calculer le score du candidat arrivé en tête : 14 000 000 ÷ 40 000 000 = 0,35, soit 35 %. A n'a pas la majorité absolue.",
              "Conclure : aucun candidat n'est élu au premier tour. Les deux candidats arrivés en tête, A (35 %) et B (27,5 %), s'affrontent au second tour.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dites si chaque personne peut voter à l'élection présidentielle française et justifiez : a) Inès, 17 ans, française ; b) Paul, 45 ans, français, inscrit sur les listes électorales ; c) Marta, 30 ans, italienne, qui vit à Lyon ; d) Karim, français, qui a eu 18 ans le mois dernier et a fait son recensement citoyen à 16 ans.",
              hint: "Vérifiez pour chacun les conditions : nationalité, âge, inscription sur les listes électorales.",
              solution: [
                "a) Inès ne peut pas voter : elle n'a pas encore 18 ans.",
                "b) Paul peut voter : il est français, majeur et inscrit.",
                "c) Marta ne peut pas voter à l'élection présidentielle, car elle n'est pas française ; en tant que citoyenne européenne résidant en France, elle peut voter aux élections municipales et européennes.",
                "d) Karim peut voter : il est français et majeur, et il a été inscrit automatiquement sur les listes grâce à son recensement.",
              ],
            },
            {
              level: 2,
              statement: "Dans une assemblée fictive de 20 sièges, la liste A obtient 40 % des suffrages exprimés, la liste B 25 %, la liste C 20 % et la liste D 15 %. Répartissez les sièges au scrutin proportionnel, puis comparez avec un scrutin majoritaire où la liste arrivée en tête obtiendrait tous les sièges. Quels sont les avantages et les inconvénients de chaque mode de scrutin ?",
              hint: "Au scrutin proportionnel, multipliez le nombre de sièges par le pourcentage de chaque liste.",
              solution: [
                "Proportionnelle : A obtient 20 × 0,40 = 8 sièges ; B 20 × 0,25 = 5 sièges ; C 20 × 0,20 = 4 sièges ; D 20 × 0,15 = 3 sièges. Vérification : 8 + 5 + 4 + 3 = 20.",
                "Scrutin majoritaire : la liste A, arrivée en tête avec 40 %, obtiendrait les 20 sièges ; les listes B, C et D, qui représentent 60 % des électeurs, n'auraient aucun élu.",
                "Avantage de la proportionnelle : elle représente fidèlement la diversité des opinions. Inconvénient : aucune liste n'a la majorité (11 sièges sur 20), il faut donc des alliances.",
                "Avantage du scrutin majoritaire : il dégage une majorité nette pour gouverner. Inconvénient : il laisse sans représentation une grande partie des électeurs.",
              ],
            },
            {
              level: 3,
              statement: "Situation pratique (type brevet, EMC) : à la veille d'une élection, un ami qui vient d'avoir 18 ans vous dit : « Voter ne sert à rien, et l'opposition ne sert qu'à tout bloquer. » Rédigez une réponse argumentée d'une quinzaine de lignes pour le convaincre de l'importance du vote et du rôle de l'opposition.",
              hint: "Rappelez d'abord que le droit de vote est une conquête, puis expliquez ce que permet le vote, enfin montrez à quoi sert l'opposition dans une démocratie.",
              solution: [
                "Rappeler l'histoire : le droit de vote a été conquis progressivement (suffrage universel masculin en 1848, vote des femmes en 1944, vote à 18 ans en 1974) ; dans beaucoup de pays, il n'existe toujours pas d'élections libres.",
                "Montrer l'utilité du vote : en votant, le citoyen exerce sa part de la souveraineté nationale et choisit ceux qui feront les lois et gouverneront ; s'abstenir, c'est laisser les autres décider à sa place.",
                "Expliquer le rôle de l'opposition : elle ne sert pas à bloquer, mais à critiquer, proposer d'autres solutions et contrôler la majorité ; la Constitution lui reconnaît des droits depuis 2008.",
                "Montrer que l'opposition rend l'alternance possible : si les électeurs changent d'avis, elle peut arriver au pouvoir, comme en 1981. Sans elle, il n'y aurait qu'un parti unique, comme dans les régimes totalitaires.",
                "Conclure : voter et accepter le pluralisme, c'est faire vivre la démocratie.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Le vote et le pluralisme en France.",
            statements: [
              { text: "En France, voter est obligatoire.", true: false, why: "Voter est un droit et un devoir civique, mais ce n'est pas une obligation légale en France." },
              { text: "Les femmes ont voté pour la première fois en France en 1945.", true: true, why: "Elles obtiennent le droit de vote en 1944 et votent pour la première fois aux élections municipales de 1945." },
              { text: "Un citoyen allemand qui réside en France peut voter aux élections municipales.", true: true, why: "Les citoyens de l'Union européenne peuvent voter aux élections municipales et européennes dans leur pays de résidence." },
              { text: "À l'élection présidentielle, un candidat qui obtient 45 % des voix au premier tour est élu.", true: false, why: "Il faut la majorité absolue, plus de 50 % des suffrages exprimés, pour être élu au premier tour." },
              { text: "Les votes blancs font partie des suffrages exprimés.", true: false, why: "Depuis 2014, ils sont décomptés à part, mais ils ne sont pas inclus dans les suffrages exprimés." },
              { text: "Dans une démocratie, l'opposition a le droit de critiquer le gouvernement et de proposer d'autres solutions.", true: true, why: "C'est le principe du pluralisme, protégé par la Constitution." },
              { text: "Le scrutin proportionnel favorise toujours la formation de larges majorités.", true: false, why: "C'est plutôt le scrutin majoritaire qui dégage des majorités nettes ; la proportionnelle oblige souvent à former des alliances." },
            ],
          },
          quiz: [
            {
              q: "En quelle année les femmes obtiennent-elles le droit de vote en France ?",
              options: ["1944", "1848", "1936", "1974"],
              answer: 0,
              why: "L'ordonnance du 21 avril 1944 accorde aux femmes le droit de vote et d'éligibilité.",
            },
            {
              q: "À partir de quel âge peut-on voter en France ?",
              options: ["16 ans", "21 ans", "20 ans", "18 ans"],
              answer: 3,
              why: "Depuis 1974, la majorité et le droit de vote sont fixés à 18 ans.",
            },
            {
              q: "Qu'est-ce que le pluralisme politique ?",
              options: [
                "L'obligation pour tous les citoyens de voter à chaque élection",
                "L'existence libre de plusieurs partis et opinions",
                "Le fait qu'un seul parti dirige le pays",
                "Le droit de vote des étrangers",
              ],
              answer: 1,
              why: "Le pluralisme garantit la libre concurrence de plusieurs partis, opinions et médias.",
            },
            {
              q: "Quel mode de scrutin est utilisé pour les élections européennes en France ?",
              options: ["Majoritaire uninominal à deux tours", "Tirage au sort", "Proportionnel", "Suffrage indirect par les maires"],
              answer: 2,
              why: "Les sièges sont répartis à la proportionnelle entre les listes qui obtiennent au moins 5 % des suffrages exprimés.",
            },
            {
              q: "Qu'appelle-t-on l'alternance ?",
              options: [
                "L'arrivée au pouvoir de l'opposition après une élection",
                "Le vote à tour de rôle des députés et des sénateurs sur chaque projet de loi",
                "Le changement de Premier ministre chaque année",
              ],
              answer: 0,
              why: "L'alternance est le passage du pouvoir de la majorité à l'opposition, décidé par les électeurs, comme en 1981.",
            },
          ],
          trap: "Confondre la majorité absolue (plus de la moitié des suffrages exprimés) et la majorité relative (arriver en tête) : un candidat arrivé premier avec 35 % des voix n'est pas élu au premier tour de la présidentielle.",
          method: "Pour une situation pratique d'EMC, identifiez la valeur ou le principe en jeu (ici le suffrage universel ou le pluralisme), citez une règle précise (une date, un article, une condition) et terminez par ce que le citoyen peut faire concrètement.",
        },
      ],
    },
    {
      id: 'monde-depuis-1945',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'independances',
          title: 'Indépendances et construction de nouveaux États',
          minutes: 30,
          objectives: [
            "Expliquer les causes de la décolonisation après 1945.",
            "Décrire deux voies d'accès à l'indépendance : l'Inde (1947) et l'Algérie (1954-1962).",
            "Identifier les difficultés des nouveaux États et leur affirmation sur la scène internationale (Bandung, Tiers-monde, non-alignement).",
          ],
          course: [
            {
              heading: "Pourquoi les colonies veulent-elles leur indépendance ?",
              paragraphs: [
                "En 1945, les empires coloniaux européens, surtout britannique et français, dominent encore une grande partie de l'Afrique et de l'Asie. Mais la Seconde Guerre mondiale les a affaiblis : la France a été vaincue et occupée, le Royaume-Uni est épuisé, et le Japon a montré en Asie que les Européens pouvaient être battus.",
                "Les peuples colonisés, qui ont souvent participé à l'effort de guerre, réclament l'égalité et la liberté. Des mouvements nationalistes se développent, menés par des élites parfois formées dans les universités européennes. La Charte des Nations unies (1945) affirme le droit des peuples à disposer d'eux-mêmes, et les deux grandes puissances, États-Unis et URSS, sont hostiles au colonialisme.",
              ],
              box: { label: "Définition", text: "Décolonisation : processus par lequel les colonies accèdent à l'indépendance et deviennent des États souverains. Elle se fait par la négociation ou à l'issue d'une guerre." },
            },
            {
              heading: "L'Inde : une indépendance négociée mais sanglante (1947)",
              paragraphs: [
                "En Inde, colonie britannique, le parti du Congrès, mené par Gandhi et Nehru, réclame l'indépendance. Gandhi prône la non-violence et la désobéissance civile, par exemple lors de la marche du sel (1930), qui défie le monopole britannique sur le sel. Après 1945, le Royaume-Uni, affaibli, accepte de négocier.",
                "L'indépendance est proclamée le 15 août 1947, mais l'ancienne colonie est partagée entre deux États : l'Union indienne, majoritairement hindoue, et le Pakistan, majoritairement musulman. Cette partition provoque d'immenses déplacements de population (plus de 10 millions de personnes) et des violences qui font des centaines de milliers de morts. Gandhi est assassiné en janvier 1948.",
              ],
            },
            {
              heading: "L'Algérie : une indépendance au terme d'une guerre (1954-1962)",
              paragraphs: [
                "L'Algérie, conquise par la France à partir de 1830, est divisée en départements. Elle compte environ un million d'Européens, que l'on appellera les « pieds-noirs », et près de neuf millions de musulmans, privés de l'égalité des droits. Le 1er novembre 1954, le Front de libération nationale (FLN) lance une série d'attentats : c'est le début de la guerre d'Algérie.",
                "La France envoie plus d'un million de soldats, dont de nombreux appelés du contingent. La guerre est très violente : attentats, torture pratiquée par l'armée française, déplacements forcés de populations. Elle provoque une crise politique en France : en 1958, le général de Gaulle revient au pouvoir et fonde la Ve République, puis il choisit d'accorder aux Algériens le droit de décider de leur avenir.",
                "Les accords d'Évian (18 mars 1962) mettent fin à la guerre, et l'Algérie devient indépendante le 5 juillet 1962, après un référendum. Des centaines de milliers de pieds-noirs et une partie des harkis, Algériens qui avaient combattu dans l'armée française, quittent l'Algérie pour la France ; de nombreux harkis restés sur place sont massacrés.",
              ],
              box: { label: "Repère", text: "15 août 1947 : indépendance de l'Inde. 1954-1962 : guerre d'Algérie. 1955 : conférence de Bandung. 1960 : indépendance de la plupart des colonies françaises d'Afrique subsaharienne. 18 mars 1962 : accords d'Évian." },
            },
            {
              heading: "Les nouveaux États et le Tiers-monde",
              paragraphs: [
                "En 1960, dix-sept pays africains deviennent indépendants, dont la plupart des colonies françaises d'Afrique subsaharienne (Sénégal, Côte d'Ivoire, Madagascar...), le plus souvent par la négociation. Dès avril 1955, la conférence de Bandung, en Indonésie, a réuni 29 pays d'Asie et d'Afrique qui condamnent le colonialisme. Ces pays sont appelés le Tiers-monde, une expression créée en 1952 par le démographe Alfred Sauvy.",
                "Les nouveaux États doivent construire leur nation : créer une administration, une armée, des écoles, une économie. Ils rencontrent de grandes difficultés : pauvreté, dépendance économique envers les anciennes métropoles (on parle de néocolonialisme), frontières héritées de la colonisation, conflits internes et, souvent, régimes autoritaires. Beaucoup refusent de choisir entre les deux blocs de la guerre froide : c'est le mouvement des non-alignés, fondé en 1961.",
              ],
              box: { label: "Définition", text: "Tiers-monde : ensemble des pays pauvres, souvent issus de la décolonisation, qui cherchent à s'affirmer en dehors des deux blocs de la guerre froide. Non-alignement : refus de s'aligner sur les États-Unis ou sur l'URSS." },
            },
          ],
          keyPoints: [
            "Causes : affaiblissement des métropoles après 1945, nationalismes, droit des peuples à disposer d'eux-mêmes (ONU), hostilité des États-Unis et de l'URSS au colonialisme.",
            "Inde : indépendance négociée le 15 août 1947, Gandhi et la non-violence, partition sanglante avec le Pakistan.",
            "Algérie : guerre de 1954 à 1962, accords d'Évian (18 mars 1962), indépendance le 5 juillet 1962.",
            "1955 : conférence de Bandung ; les nouveaux États forment le Tiers-monde, et beaucoup rejoignent le mouvement des non-alignés (1961).",
            "Difficultés : pauvreté, dépendance économique (néocolonialisme), frontières héritées, conflits et régimes autoritaires.",
          ],
          example: {
            statement: "Comparez l'accès à l'indépendance de l'Inde et de l'Algérie.",
            solution: [
              "Point commun : dans les deux cas, un mouvement nationaliste (le parti du Congrès en Inde, le FLN en Algérie) réclame l'indépendance après 1945, face à une puissance coloniale européenne affaiblie.",
              "L'Inde : l'indépendance est obtenue par la négociation avec le Royaume-Uni, après des décennies de lutte non violente menée par Gandhi ; elle est proclamée le 15 août 1947.",
              "L'Algérie : l'indépendance est obtenue au terme d'une guerre de huit ans contre la France (1954-1962), marquée par les attentats et la torture ; elle est fixée par les accords d'Évian et proclamée le 5 juillet 1962.",
              "Les conséquences : dans les deux cas, l'indépendance s'accompagne de violences et de déplacements de populations, partition avec le Pakistan en Inde, départ des pieds-noirs et des harkis en Algérie.",
              "Conclure : deux voies différentes, la négociation et la guerre, mènent à l'indépendance, mais toutes deux ont un coût humain élevé.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces événements dans l'ordre chronologique et datez-les : début de la guerre d'Algérie ; indépendance de l'Inde ; conférence de Bandung ; accords d'Évian ; indépendance de la plupart des colonies françaises d'Afrique subsaharienne.",
              hint: "L'indépendance de l'Inde est la plus ancienne ; la guerre d'Algérie dure de 1954 à 1962.",
              solution: [
                "Indépendance de l'Inde : 15 août 1947.",
                "Début de la guerre d'Algérie : 1er novembre 1954.",
                "Conférence de Bandung : avril 1955.",
                "Indépendance de la plupart des colonies françaises d'Afrique subsaharienne : 1960.",
                "Accords d'Évian : 18 mars 1962.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi la guerre d'Algérie a eu des conséquences importantes pour la France, sur le plan politique comme sur le plan humain.",
              hint: "Pensez au changement de République en 1958, aux soldats envoyés en Algérie et aux populations qui quittent l'Algérie en 1962.",
              solution: [
                "Conséquences politiques : la guerre provoque une grave crise ; en 1958, la IVe République s'effondre, le général de Gaulle revient au pouvoir et fonde la Ve République.",
                "Conséquences pour les soldats : plus d'un million de jeunes Français, dont de nombreux appelés du contingent, servent en Algérie ; la guerre fait des dizaines de milliers de morts parmi les soldats français et bien davantage parmi les Algériens.",
                "Conséquences humaines en 1962 : des centaines de milliers de pieds-noirs et une partie des harkis s'installent en France, souvent dans des conditions difficiles.",
                "Conséquences sur la mémoire : la torture et les violences de cette guerre restent longtemps un sujet douloureux et débattu en France comme en Algérie.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit (type brevet) : dans un texte structuré d'une vingtaine de lignes, décrivez et expliquez la décolonisation de l'Algérie, de ses causes à l'indépendance.",
              hint: "Suivez trois temps : une colonie inégalitaire, une guerre longue et violente, une indépendance négociée en 1962 et ses conséquences.",
              solution: [
                "Introduction : après 1945, les peuples colonisés réclament leur indépendance. En Algérie, colonie française depuis 1830, cette revendication conduit à une guerre de 1954 à 1962.",
                "Partie 1, les causes : l'Algérie compte environ un million d'Européens et près de neuf millions de musulmans privés de l'égalité des droits. Les nationalistes algériens, inspirés par le droit des peuples à disposer d'eux-mêmes, réclament l'indépendance.",
                "Partie 2, la guerre : le 1er novembre 1954, le FLN déclenche l'insurrection. La France envoie plus d'un million de soldats ; la guerre est marquée par les attentats, la torture et les déplacements de populations. Elle entraîne en 1958 le retour au pouvoir du général de Gaulle et la naissance de la Ve République.",
                "Partie 3, l'indépendance : de Gaulle accepte le principe de l'autodétermination. Les accords d'Évian du 18 mars 1962 mettent fin à la guerre, et l'Algérie devient indépendante le 5 juillet 1962. Des centaines de milliers de pieds-noirs et de harkis partent pour la France.",
                "Conclusion : la décolonisation de l'Algérie est l'une des plus violentes. Le nouvel État doit ensuite se construire, tandis que la mémoire de cette guerre reste longtemps douloureuse des deux côtés de la Méditerranée.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de la décolonisation dans l'ordre chronologique.",
            items: [
              "Signature de la Charte des Nations unies (juin 1945)",
              "Indépendance de l'Inde (15 août 1947)",
              "Début de la guerre d'Algérie (1er novembre 1954)",
              "Conférence de Bandung (avril 1955)",
              "Indépendance de dix-sept pays africains (1960)",
              "Accords d'Évian (18 mars 1962)",
              "Indépendance de l'Algérie (5 juillet 1962)",
            ],
          },
          quiz: [
            {
              q: "Quel dirigeant indien prône la non-violence ?",
              options: ["Nehru", "Jinnah", "Sukarno", "Gandhi"],
              answer: 3,
              why: "Gandhi mène une lutte non violente contre la domination britannique, par exemple lors de la marche du sel en 1930.",
            },
            {
              q: "Quand commence la guerre d'Algérie ?",
              options: ["Le 8 mai 1945, à Sétif", "Le 1er novembre 1954", "Le 13 mai 1958", "Le 18 mars 1962"],
              answer: 1,
              why: "Le 1er novembre 1954, le FLN lance une série d'attentats qui marquent le début de la guerre.",
            },
            {
              q: "Que se passe-t-il à Bandung en 1955 ?",
              options: [
                "La proclamation de l'indépendance de l'Inde et du Pakistan",
                "Le premier sommet des pays de l'OTAN",
                "Une conférence anticoloniale de pays d'Asie et d'Afrique",
                "La création de l'ONU",
              ],
              answer: 2,
              why: "La conférence de Bandung réunit 29 pays d'Asie et d'Afrique qui condamnent le colonialisme.",
            },
            {
              q: "Qui a inventé l'expression « Tiers-monde » ?",
              options: ["Alfred Sauvy", "Charles de Gaulle", "Gandhi", "Nehru"],
              answer: 0,
              why: "Le démographe français Alfred Sauvy emploie cette expression en 1952, par comparaison avec le tiers état de 1789.",
            },
            {
              q: "Qui sont les harkis ?",
              options: [
                "Des combattants indépendantistes de l'Armée de libération nationale",
                "Des Algériens qui ont combattu dans l'armée française",
                "Les Européens installés en Algérie",
                "Les dirigeants du FLN",
              ],
              answer: 1,
              why: "Les harkis sont des Algériens engagés aux côtés de l'armée française ; beaucoup ont été massacrés après l'indépendance.",
            },
          ],
          trap: "Croire que toutes les indépendances ont été obtenues par la guerre : beaucoup ont été négociées (Inde, Afrique subsaharienne française en 1960), même si certaines ont donné lieu à de longues guerres (Indochine, Algérie).",
          method: "Pour étudier une indépendance, posez toujours les mêmes questions : qui colonise ? qui réclame l'indépendance et comment ? par quelle voie, la négociation ou la guerre ? à quelles dates ? avec quelles conséquences pour le nouvel État et pour l'ancienne métropole ?",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'guerre-froide',
          title: 'Un monde bipolaire au temps de la guerre froide',
          minutes: 30,
          objectives: [
            "Expliquer ce qu'est la guerre froide et pourquoi le monde devient bipolaire à partir de 1947.",
            "Décrire les grandes crises de la guerre froide, en particulier à Berlin et à Cuba.",
            "Situer les repères : 1947, 1948-1949, 1961, 1962, 1989, 1991.",
          ],
          course: [
            {
              heading: "Deux superpuissances, deux modèles",
              paragraphs: [
                "En 1945, les États-Unis et l'URSS sortent vainqueurs de la guerre et deviennent des superpuissances. Leurs modèles s'opposent : les États-Unis défendent la démocratie libérale et l'économie capitaliste, fondée sur la libre entreprise et le marché ; l'URSS impose un régime communiste à parti unique et une économie planifiée et collectivisée.",
                "Dès 1946, Winston Churchill dénonce le « rideau de fer » qui coupe l'Europe en deux. En 1947, la rupture est consommée : le président américain Truman annonce une politique d'endiguement (containment) du communisme et les États-Unis lancent le plan Marshall d'aide à la reconstruction de l'Europe ; l'URSS répond par la doctrine Jdanov, qui dénonce l'« impérialisme » américain.",
                "Le monde devient bipolaire : il s'organise autour de deux blocs rivaux. À l'Ouest, l'OTAN (1949) unit militairement les États-Unis et leurs alliés ; à l'Est, le pacte de Varsovie (1955) réunit l'URSS et les démocraties populaires d'Europe de l'Est.",
              ],
              box: { label: "Définition", text: "Guerre froide : conflit entre les États-Unis et l'URSS (1947-1991), sans affrontement militaire direct entre eux, mais marqué par une rivalité idéologique, une course aux armements et des guerres menées par des alliés interposés. Monde bipolaire : monde organisé autour de deux pôles." },
            },
            {
              heading: "Berlin, symbole de la guerre froide",
              paragraphs: [
                "Après 1945, l'Allemagne et sa capitale, Berlin, sont divisées en quatre zones d'occupation (américaine, britannique, française et soviétique). En juin 1948, Staline bloque tous les accès terrestres à Berlin-Ouest pour en chasser les Occidentaux. Les Américains organisent un pont aérien qui ravitaille la ville pendant près d'un an ; Staline lève le blocus en mai 1949.",
                "En 1949, l'Allemagne est coupée en deux États : la République fédérale d'Allemagne (RFA) à l'Ouest, démocratique, et la République démocratique allemande (RDA) à l'Est, communiste. Comme des millions d'Allemands de l'Est fuient vers l'Ouest en passant par Berlin, la RDA construit dans la nuit du 12 au 13 août 1961 un mur qui coupe la ville en deux. Le mur de Berlin devient le symbole de la division du monde.",
              ],
            },
            {
              heading: "Crises, détente et équilibre de la terreur",
              paragraphs: [
                "La guerre froide ne devient jamais une guerre directe entre les deux Grands, car l'URSS possède aussi la bombe atomique depuis 1949 : un conflit nucléaire détruirait les deux camps. C'est l'équilibre de la terreur. Les affrontements ont lieu ailleurs, par alliés interposés : guerre de Corée (1950-1953), guerre du Vietnam (engagement américain massif de 1965 à 1973), guerre d'Afghanistan menée par l'URSS (1979-1989).",
                "La crise la plus grave a lieu à Cuba en octobre 1962 : les Américains découvrent que l'URSS installe des missiles nucléaires sur l'île, devenue alliée de Moscou après la révolution de Fidel Castro. Le président Kennedy impose un blocus naval. Le monde est au bord de la guerre nucléaire, mais Khrouchtchev accepte de retirer les missiles. Les deux Grands installent ensuite une ligne de communication directe, le « téléphone rouge », et entrent dans une période de détente.",
                "Dans les années 1980, l'URSS est épuisée par la course aux armements et par une économie en crise. Mikhaïl Gorbatchev, au pouvoir à partir de 1985, lance des réformes. En 1989, les peuples d'Europe de l'Est se libèrent du communisme : le mur de Berlin tombe le 9 novembre 1989, et l'Allemagne est réunifiée le 3 octobre 1990. L'URSS disparaît en décembre 1991 : la guerre froide est terminée.",
              ],
              box: { label: "Repère", text: "1947 : début de la guerre froide. 1948-1949 : blocus de Berlin. 13 août 1961 : construction du mur de Berlin. Octobre 1962 : crise de Cuba. 9 novembre 1989 : chute du mur de Berlin. Décembre 1991 : disparition de l'URSS." },
            },
          ],
          keyPoints: [
            "Guerre froide (1947-1991) : rivalité entre les États-Unis (démocratie libérale, capitalisme) et l'URSS (communisme), sans guerre directe entre eux.",
            "1947 : doctrine Truman et plan Marshall, doctrine Jdanov ; le monde devient bipolaire (OTAN en 1949, pacte de Varsovie en 1955).",
            "Berlin : blocus (1948-1949), construction du mur (13 août 1961), chute du mur (9 novembre 1989).",
            "Octobre 1962 : crise de Cuba, la plus grave de la guerre froide ; l'équilibre de la terreur évite la guerre nucléaire.",
            "Conflits par alliés interposés : Corée, Vietnam, Afghanistan. Disparition de l'URSS en décembre 1991.",
          ],
          example: {
            statement: "Expliquez pourquoi Berlin est un symbole de la guerre froide.",
            solution: [
              "Rappeler la situation de départ : en 1945, Berlin, située en zone soviétique, est partagée en quatre secteurs entre les vainqueurs.",
              "Première crise : en 1948-1949, Staline impose le blocus de Berlin-Ouest ; les Américains répondent par un pont aérien et Staline doit lever le blocus en mai 1949.",
              "Division : en 1949, l'Allemagne est coupée en deux États, la RFA à l'Ouest et la RDA à l'Est ; Berlin-Ouest reste une enclave occidentale en RDA.",
              "Le mur : pour arrêter la fuite de ses habitants vers l'Ouest, la RDA construit un mur à partir du 13 août 1961, qui sépare familles et quartiers pendant 28 ans.",
              "Conclure : Berlin résume toute la guerre froide, de la division de l'Europe en 1948-1949 à sa fin, avec la chute du mur le 9 novembre 1989.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque date à son événement. Dates : 1947 ; juin 1948 à mai 1949 ; 13 août 1961 ; octobre 1962 ; 9 novembre 1989 ; décembre 1991. Événements : crise de Cuba ; chute du mur de Berlin ; blocus de Berlin ; disparition de l'URSS ; début de la guerre froide ; construction du mur de Berlin.",
              hint: "Le mur est construit avant la crise de Cuba, et il tombe avant la disparition de l'URSS.",
              solution: [
                "1947 : début de la guerre froide.",
                "Juin 1948 à mai 1949 : blocus de Berlin.",
                "13 août 1961 : construction du mur de Berlin.",
                "Octobre 1962 : crise de Cuba.",
                "9 novembre 1989 : chute du mur de Berlin.",
                "Décembre 1991 : disparition de l'URSS.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi on parle de « guerre froide » et pourquoi les deux Grands ne se sont jamais affrontés directement.",
              hint: "Distinguez ce qui fait la « guerre » (la rivalité) et ce qui la rend « froide » (l'absence d'affrontement direct), puis pensez à l'arme nucléaire.",
              solution: [
                "C'est une « guerre » car les États-Unis et l'URSS s'opposent dans tous les domaines : idéologie (capitalisme contre communisme), course aux armements, conquête spatiale, propagande, recherche d'alliés.",
                "Elle est « froide » car les deux superpuissances ne se combattent jamais directement : elles s'affrontent par alliés interposés, en Corée, au Vietnam ou en Afghanistan.",
                "La raison principale est l'arme nucléaire : depuis 1949, les deux Grands la possèdent, et une guerre directe risquerait de les détruire tous les deux. C'est l'équilibre de la terreur.",
                "Exemple : lors de la crise de Cuba, en octobre 1962, le monde est au bord de la guerre nucléaire, mais les deux dirigeants finissent par négocier.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit (type brevet) : montrez que la guerre froide est un affrontement indirect entre deux superpuissances, en vous appuyant sur deux crises.",
              hint: "Présentez d'abord les deux blocs, puis développez une crise à Berlin et la crise de Cuba, en montrant qu'elles ne débouchent jamais sur une guerre directe.",
              solution: [
                "Introduction : de 1947 à 1991, les États-Unis et l'URSS s'opposent dans une guerre froide. Le monde devient bipolaire, mais les deux Grands ne s'affrontent jamais directement.",
                "Partie 1, deux blocs rivaux : les États-Unis défendent la démocratie libérale et le capitalisme, l'URSS le communisme. En 1947, la doctrine Truman et le plan Marshall s'opposent à la doctrine Jdanov ; chaque camp se dote d'une alliance militaire, l'OTAN en 1949 et le pacte de Varsovie en 1955.",
                "Partie 2, Berlin : en 1948-1949, Staline bloque Berlin-Ouest, mais les Américains répondent par un pont aérien et non par une attaque. En 1961, la RDA construit le mur de Berlin ; les Occidentaux protestent sans intervenir militairement.",
                "Partie 3, Cuba : en octobre 1962, l'URSS installe des missiles nucléaires à Cuba. Kennedy impose un blocus naval ; après des jours de tension, Khrouchtchev retire les missiles. La peur de la guerre nucléaire, l'équilibre de la terreur, pousse les deux Grands à négocier.",
                "Conclusion : la guerre froide est un affrontement indirect, fait de crises et de guerres par alliés interposés. Elle prend fin avec la chute du mur de Berlin en 1989 et la disparition de l'URSS en 1991.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion de la guerre froide à sa définition.",
            pairs: [
              { left: "Plan Marshall", right: "Aide américaine à la reconstruction de l'Europe (1947)" },
              { left: "Rideau de fer", right: "Frontière qui sépare l'Europe de l'Ouest et l'Europe de l'Est" },
              { left: "OTAN", right: "Alliance militaire du bloc de l'Ouest (1949)" },
              { left: "Pacte de Varsovie", right: "Alliance militaire du bloc de l'Est (1955)" },
              { left: "Équilibre de la terreur", right: "La menace nucléaire dissuade les deux Grands de s'affronter directement" },
              { left: "Endiguement", right: "Politique américaine qui vise à stopper l'expansion du communisme" },
            ],
          },
          quiz: [
            {
              q: "Quel événement de 1961 symbolise la division de l'Europe ?",
              options: [
                "Le blocus de Berlin",
                "La construction du mur de Berlin",
                "La crise de Cuba",
                "La création de l'Organisation du traité de l'Atlantique nord",
              ],
              answer: 1,
              why: "La RDA construit le mur de Berlin à partir du 13 août 1961 pour empêcher ses habitants de fuir vers l'Ouest.",
            },
            {
              q: "Que propose le plan Marshall en 1947 ?",
              options: [
                "Une aide économique pour reconstruire l'Europe",
                "Une alliance militaire avec l'URSS contre l'Allemagne vaincue",
                "L'installation de missiles en Turquie",
                "Le partage de Berlin en quatre zones",
              ],
              answer: 0,
              why: "Le plan Marshall apporte une aide américaine à la reconstruction des pays européens, que l'URSS refuse pour son bloc.",
            },
            {
              q: "Pourquoi les États-Unis et l'URSS ne se sont-ils jamais affrontés directement ?",
              options: [
                "Parce qu'ils étaient alliés",
                "Parce que l'ONU l'interdisait",
                "Parce qu'ils étaient trop éloignés",
                "À cause de la menace nucléaire",
              ],
              answer: 3,
              why: "Les deux Grands possèdent l'arme atomique : une guerre directe les détruirait tous les deux. C'est l'équilibre de la terreur.",
            },
            {
              q: "Où se déroule la crise de 1962 qui place le monde au bord de la guerre nucléaire ?",
              options: ["À Berlin", "En Corée", "À Cuba", "Au Vietnam"],
              answer: 2,
              why: "En octobre 1962, l'URSS installe des missiles nucléaires à Cuba, à moins de 200 km des côtes américaines.",
            },
            {
              q: "Quand l'URSS disparaît-elle ?",
              options: ["En décembre 1991", "En novembre 1989", "En octobre 1990", "En mai 1945"],
              answer: 0,
              why: "L'URSS disparaît en décembre 1991, ce qui met fin à la guerre froide ; le mur de Berlin était tombé deux ans plus tôt.",
            },
          ],
          trap: "Confondre la chute du mur de Berlin (9 novembre 1989) et la disparition de l'URSS (décembre 1991) : la guerre froide ne s'achève vraiment qu'avec la fin de l'URSS.",
          method: "Pour réviser la guerre froide, construisez une frise en trois phases (de 1947 à 1962, tensions et crises ; de 1962 à la fin des années 1970, détente ; années 1980 à 1991, regain de tensions puis effondrement du bloc de l'Est) et placez chaque crise dans la bonne phase.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'projet-europeen',
          title: 'Affirmation et mise en œuvre du projet européen',
          minutes: 30,
          objectives: [
            "Expliquer pourquoi et comment la construction européenne commence après 1945.",
            "Décrire les grandes étapes de l'approfondissement et des élargissements, de la CECA à l'Union européenne.",
            "Identifier les débats que suscite le projet européen.",
          ],
          course: [
            {
              heading: "Les origines : construire la paix (1950-1957)",
              paragraphs: [
                "Après deux guerres mondiales, des responsables politiques comme Jean Monnet et Robert Schuman veulent rendre la guerre impossible entre Européens, en particulier entre la France et l'Allemagne. Dans le contexte de la guerre froide, l'Europe de l'Ouest veut aussi se renforcer face au bloc soviétique, avec le soutien des États-Unis.",
                "Le 9 mai 1950, le ministre français des Affaires étrangères, Robert Schuman, propose de mettre en commun les productions de charbon et d'acier, indispensables à l'armement. En 1951, six pays (France, RFA, Italie, Belgique, Pays-Bas, Luxembourg) créent la Communauté européenne du charbon et de l'acier (CECA). Le 25 mars 1957, ils signent les traités de Rome, qui créent la Communauté économique européenne (CEE), un marché commun, et Euratom, pour l'énergie atomique.",
                "La CEE supprime progressivement les droits de douane entre ses membres (union douanière achevée en 1968) et met en place la politique agricole commune (PAC, 1962), qui modernise l'agriculture. La réconciliation franco-allemande est scellée par le traité de l'Élysée, signé par le général de Gaulle et le chancelier Adenauer en 1963.",
              ],
              box: { label: "Repère", text: "9 mai 1950 : déclaration Schuman. 1951 : CECA. 25 mars 1957 : traités de Rome (CEE). 1992 : traité de Maastricht (Union européenne). 2002 : l'euro en pièces et billets. 31 janvier 2020 : sortie du Royaume-Uni." },
            },
            {
              heading: "Approfondir : de la CEE à l'Union européenne",
              paragraphs: [
                "La construction européenne s'approfondit : les États membres mettent en commun de plus en plus de compétences. Depuis 1979, le Parlement européen est élu au suffrage universel direct. L'Acte unique (1986) prévoit un grand marché intérieur, avec la libre circulation des marchandises, des personnes, des services et des capitaux. Les accords de Schengen (1985) organisent la suppression des contrôles aux frontières entre les pays signataires.",
                "Le traité de Maastricht (1992) crée l'Union européenne (UE) et la citoyenneté européenne : un citoyen européen peut circuler et s'installer dans un autre pays de l'Union et y voter aux élections municipales et européennes. Le traité prévoit aussi une monnaie unique, l'euro, utilisé dans les échanges à partir de 1999 puis en pièces et billets depuis le 1er janvier 2002 ; il est aujourd'hui partagé par une vingtaine de pays.",
                "Le traité de Lisbonne (signé en 2007, en vigueur en 2009) réforme les institutions de l'Union : la Commission européenne propose les lois et veille à leur application ; le Parlement européen et le Conseil de l'Union européenne, qui réunit les ministres des États, votent les lois ; le Conseil européen, qui réunit les chefs d'État et de gouvernement, fixe les grandes orientations.",
              ],
              box: { label: "Définition", text: "Approfondissement : renforcement des compétences communes et des liens entre les États membres. Élargissement : entrée de nouveaux États dans la construction européenne." },
            },
            {
              heading: "Élargir et débattre",
              paragraphs: [
                "De 6 membres en 1957, la construction européenne passe à 28 en 2013 : Royaume-Uni, Irlande et Danemark (1973), Grèce (1981), Espagne et Portugal (1986), Autriche, Finlande et Suède (1995), puis dix pays, surtout d'Europe centrale et orientale, en 2004, la Bulgarie et la Roumanie en 2007, la Croatie en 2013. Après la chute du mur de Berlin, l'Union accueille ainsi d'anciennes démocraties populaires.",
                "Le projet européen suscite des débats. Certains souhaitent une Europe plus intégrée, presque fédérale ; d'autres veulent que les États gardent l'essentiel de leur souveraineté. En 2005, les Français et les Néerlandais rejettent par référendum le projet de traité constitutionnel européen. En 2016, les Britanniques votent pour quitter l'Union : le Brexit devient effectif le 31 janvier 2020, et l'Union compte depuis 27 membres.",
              ],
              box: { label: "À retenir", text: "La construction européenne, née pour garantir la paix, s'est à la fois approfondie (marché commun, citoyenneté européenne, euro) et élargie (de 6 à 27 membres), mais elle reste discutée : Europe intégrée ou Europe des États." },
            },
          ],
          keyPoints: [
            "But initial : garantir la paix (réconciliation franco-allemande) et la prospérité, face au bloc soviétique.",
            "9 mai 1950 : déclaration Schuman ; 1951 : CECA (6 pays) ; 25 mars 1957 : traités de Rome (CEE).",
            "1992 : traité de Maastricht, création de l'Union européenne et de la citoyenneté européenne ; euro en pièces et billets en 2002.",
            "Élargissements : de 6 à 28 membres (2013), puis 27 après le Brexit (31 janvier 2020).",
            "Débats : Europe intégrée ou Europe des États ; rejet du traité constitutionnel en 2005, Brexit.",
          ],
          example: {
            statement: "Expliquez la différence entre l'approfondissement et l'élargissement de la construction européenne, en donnant deux exemples pour chacun.",
            solution: [
              "Définir l'approfondissement : c'est le renforcement des liens et des compétences communes entre les États membres.",
              "Exemples d'approfondissement : la création du marché commun par les traités de Rome en 1957 ; la création de l'Union européenne, de la citoyenneté européenne et de l'euro par le traité de Maastricht en 1992.",
              "Définir l'élargissement : c'est l'entrée de nouveaux États dans la construction européenne.",
              "Exemples d'élargissement : l'entrée du Royaume-Uni, de l'Irlande et du Danemark en 1973 ; l'entrée de dix pays, surtout d'Europe centrale et orientale, en 2004.",
              "Conclure : les deux mouvements se combinent, mais plus l'Union s'élargit, plus il devient difficile de décider ensemble et d'approfondir.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez les phrases : a) En 1951, six pays créent la ... ; b) Les traités de Rome sont signés en ... ; c) Le traité de ... crée l'Union européenne en 1992 ; d) L'euro est mis en circulation en pièces et billets le ... ; e) Le Royaume-Uni quitte l'Union européenne le ...",
              hint: "Relisez la frise du cours : la CECA, puis la CEE, puis l'Union européenne.",
              solution: [
                "a) En 1951, six pays créent la Communauté européenne du charbon et de l'acier (CECA).",
                "b) Les traités de Rome sont signés le 25 mars 1957.",
                "c) Le traité de Maastricht crée l'Union européenne en 1992.",
                "d) L'euro est mis en circulation en pièces et billets le 1er janvier 2002.",
                "e) Le Royaume-Uni quitte l'Union européenne le 31 janvier 2020.",
              ],
            },
            {
              level: 2,
              statement: "La construction européenne compte 6 membres en 1957. Trois pays entrent en 1973, un en 1981, deux en 1986, trois en 1995, dix en 2004, deux en 2007 et un en 2013. Calculez le nombre de membres après chaque élargissement, puis après le Brexit. Que montre cette évolution ?",
              hint: "Ajoutez à chaque étape le nombre de nouveaux membres au total précédent, puis retirez le Royaume-Uni.",
              solution: [
                "1973 : 6 + 3 = 9 membres.",
                "1981 : 9 + 1 = 10 membres. 1986 : 10 + 2 = 12 membres.",
                "1995 : 12 + 3 = 15 membres. 2004 : 15 + 10 = 25 membres.",
                "2007 : 25 + 2 = 27 membres. 2013 : 27 + 1 = 28 membres.",
                "Après le Brexit (2020) : 28 - 1 = 27 membres.",
                "Interprétation : l'Europe s'est beaucoup élargie, surtout en 2004 vers l'Europe centrale et orientale après la fin de la guerre froide ; le Brexit est le premier départ d'un État membre.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit (type brevet) : dans un texte structuré d'une vingtaine de lignes, décrivez et expliquez les grandes étapes de la construction européenne depuis 1950.",
              hint: "Organisez votre texte en trois temps : les débuts (1950-1957), l'approfondissement (jusqu'à l'euro), les élargissements et les débats.",
              solution: [
                "Introduction : après la Seconde Guerre mondiale, des Européens veulent construire la paix et la prospérité. La construction européenne commence en 1950 et aboutit à l'Union européenne actuelle.",
                "Partie 1, les débuts : le 9 mai 1950, Robert Schuman propose de mettre en commun le charbon et l'acier. Six pays créent la CECA en 1951, puis la CEE avec les traités de Rome du 25 mars 1957 : c'est le début d'un marché commun, renforcé par la PAC.",
                "Partie 2, l'approfondissement : le Parlement européen est élu au suffrage universel à partir de 1979 ; l'Acte unique (1986) crée un grand marché intérieur. Le traité de Maastricht (1992) fonde l'Union européenne et la citoyenneté européenne ; l'euro circule en pièces et billets depuis 2002.",
                "Partie 3, les élargissements et les débats : de 6 membres, l'Europe passe à 28 en 2013, notamment avec l'entrée de dix pays en 2004. Mais le projet est discuté : rejet du traité constitutionnel par les Français en 2005, sortie du Royaume-Uni en 2020.",
                "Conclusion : la construction européenne a garanti la paix entre ses membres et créé un vaste espace de libre circulation, mais elle doit concilier élargissement, efficacité et adhésion des citoyens.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de la construction européenne dans l'ordre chronologique.",
            items: [
              "Déclaration Schuman (9 mai 1950)",
              "Création de la CECA (1951)",
              "Traités de Rome et naissance de la CEE (1957)",
              "Première élection du Parlement européen au suffrage universel (1979)",
              "Traité de Maastricht (1992)",
              "Mise en circulation des pièces et billets en euros (2002)",
              "Sortie du Royaume-Uni de l'Union européenne (2020)",
            ],
          },
          quiz: [
            {
              q: "Combien de pays fondent la CECA en 1951 ?",
              options: ["Quatre", "Douze", "Six", "Neuf"],
              answer: 2,
              why: "La France, la RFA, l'Italie, la Belgique, les Pays-Bas et le Luxembourg fondent la CECA.",
            },
            {
              q: "Que crée le traité de Maastricht en 1992 ?",
              options: ["La CECA", "La Communauté économique européenne", "Le Conseil de l'Europe", "L'Union européenne"],
              answer: 3,
              why: "Le traité de Maastricht crée l'Union européenne, la citoyenneté européenne et prévoit la monnaie unique.",
            },
            {
              q: "Qui propose, le 9 mai 1950, de mettre en commun le charbon et l'acier ?",
              options: ["Robert Schuman", "Konrad Adenauer", "Charles de Gaulle", "Winston Churchill"],
              answer: 0,
              why: "Le ministre français des Affaires étrangères Robert Schuman fait cette proposition, inspirée par Jean Monnet.",
            },
            {
              q: "Depuis quand le Parlement européen est-il élu au suffrage universel direct ?",
              options: ["1957", "1979", "1992", "2002"],
              answer: 1,
              why: "Les premières élections européennes au suffrage universel direct ont lieu en 1979.",
            },
            {
              q: "Combien d'États membres l'Union européenne compte-t-elle depuis le Brexit ?",
              options: ["25", "28", "30", "27"],
              answer: 3,
              why: "Après la sortie du Royaume-Uni le 31 janvier 2020, l'Union passe de 28 à 27 membres.",
            },
          ],
          trap: "Confondre les traités de Rome (1957), qui créent la CEE, et le traité de Maastricht (1992), qui crée l'Union européenne : on ne parle officiellement d'« Union européenne » qu'à partir de Maastricht.",
          method: "Classez chaque étape de la construction européenne dans l'une de deux colonnes, « approfondissement » ou « élargissement » : ce tableau vous donne directement le plan d'un développement construit.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'monde-apres-1989',
          title: 'Enjeux et conflits dans le monde après 1989',
          minutes: 30,
          objectives: [
            "Expliquer comment l'ordre mondial change après la fin de la guerre froide.",
            "Identifier les nouvelles formes de conflits : conflits identitaires, génocide, terrorisme, retour de la guerre entre États.",
            "Analyser un conflit de l'après-1989 et ses enjeux, à partir de l'exemple de la guerre en Ukraine.",
          ],
          course: [
            {
              heading: "La fin de la guerre froide et l'espoir d'un nouvel ordre mondial",
              paragraphs: [
                "Avec la chute du mur de Berlin (1989) et la disparition de l'URSS (1991), le monde n'est plus bipolaire. Les États-Unis restent la seule superpuissance : le ministre français Hubert Védrine les qualifie d'« hyperpuissance ». Beaucoup espèrent alors un monde pacifié, où l'ONU jouerait pleinement son rôle et où la démocratie et l'économie de marché s'étendraient partout.",
                "En 1991, une coalition internationale menée par les États-Unis, avec l'accord de l'ONU, libère le Koweït envahi par l'Irak l'année précédente : c'est la guerre du Golfe. Mais l'espoir d'un « nouvel ordre mondial » est vite déçu, car de nombreux conflits éclatent.",
              ],
            },
            {
              heading: "Conflits identitaires et violences de masse",
              paragraphs: [
                "Dans les années 1990, de nombreux conflits opposent des groupes au sein d'un même pays ou d'États nouvellement indépendants, pour des raisons ethniques, religieuses ou nationales. En ex-Yougoslavie (1991-1999), l'éclatement du pays provoque des guerres marquées par le « nettoyage ethnique » ; en juillet 1995, à Srebrenica, en Bosnie, environ 8 000 hommes et garçons musulmans bosniaques sont massacrés par des forces serbes de Bosnie.",
                "Au Rwanda, d'avril à juillet 1994, le génocide des Tutsi fait au moins 800 000 morts, Tutsi et Hutu opposés aux massacres, en une centaine de jours. La communauté internationale n'a pas su l'empêcher. Pour juger ces crimes, l'ONU crée des tribunaux pénaux internationaux, puis une Cour pénale internationale permanente commence à fonctionner en 2002.",
              ],
              box: { label: "Définition", text: "Conflit identitaire : conflit qui oppose des groupes se définissant par leur origine, leur langue ou leur religion. Nettoyage ethnique : expulsion ou massacre d'une population pour rendre un territoire homogène." },
            },
            {
              heading: "Le terrorisme et les interventions militaires",
              paragraphs: [
                "Le 11 septembre 2001, des terroristes islamistes du réseau Al-Qaïda détournent des avions de ligne et frappent New York et Washington, faisant près de 3 000 morts. Les États-Unis répondent par la « guerre contre le terrorisme » : intervention en Afghanistan (2001), puis guerre en Irak (2003), décidée sans l'accord de l'ONU et à laquelle la France s'oppose.",
                "Le terrorisme djihadiste touche aussi l'Europe, l'Afrique et le Moyen-Orient. Le groupe État islamique, qui contrôle une partie de l'Irak et de la Syrie de 2014 à 2019, revendique de nombreux attentats, dont ceux du 13 novembre 2015 à Paris et à Saint-Denis (130 morts). La France intervient militairement au Sahel, avec l'opération Serval au Mali en 2013, puis l'opération Barkhane jusqu'en 2022.",
              ],
              box: { label: "Définition", text: "Terrorisme : usage de la violence, souvent contre des civils, pour créer un climat de peur et atteindre un but politique ou idéologique." },
            },
            {
              heading: "Un monde multipolaire et le retour de la guerre entre États",
              paragraphs: [
                "Le monde devient multipolaire : face aux États-Unis, la Chine s'affirme comme une grande puissance économique et militaire, et d'autres puissances émergent, comme l'Inde ou le Brésil. La Russie veut retrouver son influence sur les anciens territoires de l'URSS : en 2014, elle annexe la Crimée, qui appartient à l'Ukraine.",
                "Le 24 février 2022, la Russie lance une invasion de grande ampleur de l'Ukraine. Cette guerre entre États, la plus importante en Europe depuis 1945, fait des centaines de milliers de victimes, pousse des millions d'Ukrainiens à l'exil et menace la sécurité du continent. L'Union européenne et les États-Unis soutiennent l'Ukraine et sanctionnent la Russie. Au Proche-Orient aussi, les affrontements entre États et groupes armés montrent que les tensions restent fortes.",
              ],
              box: { label: "Définition", text: "Monde multipolaire : monde dans lequel plusieurs grandes puissances (États-Unis, Chine, Russie, Union européenne, puissances émergentes) se partagent l'influence et se concurrencent." },
            },
          ],
          keyPoints: [
            "Après 1991 : fin du monde bipolaire ; les États-Unis sont la seule superpuissance (« hyperpuissance »).",
            "Années 1990 : conflits identitaires en ex-Yougoslavie (Srebrenica, 1995) et génocide des Tutsi au Rwanda (1994).",
            "11 septembre 2001 : attentats d'Al-Qaïda ; interventions en Afghanistan (2001) et en Irak (2003).",
            "Terrorisme djihadiste : État islamique, attentats du 13 novembre 2015 en France ; interventions françaises au Sahel.",
            "Monde multipolaire : affirmation de la Chine et des puissances émergentes ; la Russie annexe la Crimée (2014) puis envahit l'Ukraine (24 février 2022).",
          ],
          example: {
            statement: "Montrez que la guerre en Ukraine marque le retour de la guerre entre États en Europe.",
            solution: [
              "Rappeler le contexte : après 1991, l'Ukraine devient un État indépendant, issu de l'éclatement de l'URSS ; la Russie veut garder son influence sur ses voisins.",
              "Première étape : en 2014, la Russie annexe la Crimée, un territoire ukrainien, en violation du droit international.",
              "Deuxième étape : le 24 février 2022, l'armée russe envahit l'Ukraine. C'est une guerre classique entre deux États, avec des armées, des chars, des bombardements de villes et un front.",
              "Les conséquences : des centaines de milliers de victimes, des millions de réfugiés, des sanctions contre la Russie et un soutien européen et américain à l'Ukraine.",
              "Conclure : alors que l'Europe pensait la guerre entre États disparue depuis 1945, ce conflit montre qu'elle est de retour dans un monde multipolaire.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque date à son événement. Dates : avril à juillet 1994 ; juillet 1995 ; 11 septembre 2001 ; 13 novembre 2015 ; 24 février 2022. Événements : attentats de Paris et Saint-Denis ; invasion de l'Ukraine par la Russie ; génocide des Tutsi au Rwanda ; attentats contre New York et Washington ; massacre de Srebrenica.",
              hint: "Les deux premiers événements ont lieu pendant les années 1990, dans des conflits identitaires.",
              solution: [
                "Avril à juillet 1994 : génocide des Tutsi au Rwanda.",
                "Juillet 1995 : massacre de Srebrenica.",
                "11 septembre 2001 : attentats contre New York et Washington.",
                "13 novembre 2015 : attentats de Paris et Saint-Denis.",
                "24 février 2022 : invasion de l'Ukraine par la Russie.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi on dit que le monde est passé d'un ordre bipolaire à un monde multipolaire après 1991.",
              hint: "Décrivez la situation pendant la guerre froide, puis juste après 1991, puis aujourd'hui.",
              solution: [
                "Pendant la guerre froide (1947-1991), le monde est bipolaire : il est organisé autour de deux superpuissances, les États-Unis et l'URSS, et de leurs blocs.",
                "Après la disparition de l'URSS en 1991, les États-Unis restent la seule superpuissance : Hubert Védrine parle d'« hyperpuissance ».",
                "Depuis les années 2000, d'autres puissances s'affirment : la Chine devient une grande puissance économique et militaire, l'Inde et le Brésil émergent, la Russie cherche à retrouver son influence.",
                "Conclusion : le monde est devenu multipolaire, car plusieurs puissances se partagent l'influence et se concurrencent, ce qui rend l'ordre mondial plus instable.",
              ],
            },
            {
              level: 3,
              statement: "Développement construit (type brevet) : dans un texte structuré d'une vingtaine de lignes, montrez que le monde après 1989 n'est pas un monde pacifié, en présentant différentes formes de conflits.",
              hint: "Présentez successivement les conflits identitaires des années 1990, le terrorisme et les interventions militaires, puis le retour de la guerre entre États.",
              solution: [
                "Introduction : la chute du mur de Berlin en 1989 et la fin de l'URSS en 1991 font espérer un monde pacifié. Pourtant, de nouveaux conflits éclatent.",
                "Partie 1, les conflits identitaires : dans les années 1990, des guerres opposent des groupes au sein des États. En ex-Yougoslavie, le nettoyage ethnique conduit au massacre de Srebrenica en juillet 1995 ; au Rwanda, le génocide des Tutsi fait au moins 800 000 morts en 1994.",
                "Partie 2, le terrorisme : le 11 septembre 2001, Al-Qaïda frappe les États-Unis, qui interviennent en Afghanistan puis en Irak. Plus tard, l'État islamique commet des attentats, dont ceux du 13 novembre 2015 en France.",
                "Partie 3, le retour de la guerre entre États : dans un monde devenu multipolaire, la Russie annexe la Crimée en 2014, puis envahit l'Ukraine le 24 février 2022, provoquant la guerre la plus importante en Europe depuis 1945.",
                "Conclusion : après 1989, les conflits changent de forme, mais ils ne disparaissent pas. Les civils en sont les principales victimes, et la communauté internationale peine à les empêcher.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Le monde après 1989.",
            statements: [
              { text: "Après 1991, les États-Unis sont la seule superpuissance mondiale.", true: true, why: "La disparition de l'URSS laisse les États-Unis sans rival de même niveau : on parle d'hyperpuissance." },
              { text: "La fin de la guerre froide a mis fin à toutes les guerres dans le monde.", true: false, why: "Les conflits identitaires, les génocides et le terrorisme se multiplient dans les années 1990 et 2000." },
              { text: "Le génocide des Tutsi au Rwanda a eu lieu en 1994.", true: true, why: "D'avril à juillet 1994, il fait au moins 800 000 morts." },
              { text: "La guerre en Irak de 2003 a été autorisée par l'ONU.", true: false, why: "Elle est décidée par les États-Unis sans l'accord de l'ONU, et la France s'y oppose." },
              { text: "Les attentats du 11 septembre 2001 ont été commis par Al-Qaïda.", true: true, why: "Le réseau terroriste islamiste dirigé par Oussama Ben Laden en est responsable." },
              { text: "La Russie a annexé la Crimée dès 2014, avant l'invasion de 2022.", true: true, why: "L'annexion de la Crimée en 2014 précède l'invasion de grande ampleur du 24 février 2022." },
              { text: "Un monde multipolaire est dominé par une seule puissance.", true: false, why: "Dans un monde multipolaire, plusieurs puissances se partagent l'influence." },
            ],
          },
          quiz: [
            {
              q: "Qui qualifie les États-Unis d'« hyperpuissance » après la guerre froide ?",
              options: ["Mikhaïl Gorbatchev", "Hubert Védrine", "George W. Bush", "Vladimir Poutine"],
              answer: 1,
              why: "Le ministre français des Affaires étrangères Hubert Védrine emploie ce terme pour souligner la domination américaine.",
            },
            {
              q: "Quel événement de 1994 est un génocide ?",
              options: [
                "La libération du Koweït par une coalition internationale",
                "La chute du mur de Berlin",
                "L'extermination des Tutsi au Rwanda",
                "L'annexion de la Crimée",
              ],
              answer: 2,
              why: "D'avril à juillet 1994, le génocide des Tutsi au Rwanda fait au moins 800 000 morts.",
            },
            {
              q: "Quel réseau terroriste commet les attentats du 11 septembre 2001 ?",
              options: ["Al-Qaïda", "L'État islamique", "Le FLN", "Le Hamas"],
              answer: 0,
              why: "Les attentats sont commis par des membres d'Al-Qaïda, réseau dirigé par Oussama Ben Laden.",
            },
            {
              q: "Quand la Russie lance-t-elle l'invasion de grande ampleur de l'Ukraine ?",
              options: ["En décembre 1991", "En août 2008", "En mars 2014", "En février 2022"],
              answer: 3,
              why: "L'invasion commence le 24 février 2022 ; en 2014, la Russie avait déjà annexé la Crimée.",
            },
            {
              q: "Qu'est-ce qu'un monde multipolaire ?",
              options: [
                "Un monde dominé par une seule superpuissance sans aucun rival",
                "Un monde divisé en deux blocs rivaux",
                "Un monde où plusieurs puissances se partagent l'influence",
                "Un monde sans aucun conflit armé",
              ],
              answer: 2,
              why: "Dans un monde multipolaire, plusieurs puissances (États-Unis, Chine, Russie, Union européenne...) se concurrencent.",
            },
          ],
          trap: "Croire que la fin de la guerre froide a apporté la paix : les conflits ont changé de forme (guerres civiles, génocides, terrorisme), et la guerre entre États est revenue en Europe avec l'invasion de l'Ukraine.",
          method: "Pour analyser un conflit, répondez à cinq questions : qui s'oppose ? où (localisez-le sur une carte) ? quand ? pourquoi (enjeux territoriaux, identitaires, de ressources, de puissance) ? avec quelles conséquences pour les civils et pour le monde ?",
        },
      ],
    },
  ],
}
