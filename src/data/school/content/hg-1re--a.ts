import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'hg-1re',
  chapters: [
    /* ==================================================================== */
    /* HISTOIRE, THÈME 1 · L'EUROPE FACE AUX RÉVOLUTIONS                     */
    /* ==================================================================== */
    {
      id: 'europe-revolutions',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'revolution-francaise',
          title: 'La Révolution française : une nouvelle conception de la nation',
          minutes: 35,
          objectives: [
            "Expliquer comment, en 1789, la souveraineté passe du roi à la nation et comment la société d'ordres est abolie.",
            "Identifier les grandes étapes de la Révolution, de la monarchie constitutionnelle à la République puis au Directoire.",
            "Définir la nation révolutionnaire : une communauté de citoyens égaux en droits, souveraine et unie.",
            "Analyser les limites de cette nouvelle citoyenneté (femmes, citoyens passifs, esclaves des colonies).",
          ],
          course: [
            {
              heading: "1789 : la nation devient souveraine",
              paragraphs: [
                "À la fin du XVIIIe siècle, la France est une monarchie absolue de droit divin : le roi Louis XVI tient son pouvoir de Dieu et concentre les pouvoirs. La société est divisée en trois ordres inégaux : le clergé et la noblesse, qui jouissent de privilèges (exemptions fiscales, droits seigneuriaux, accès réservé à certaines fonctions), et le tiers état, qui rassemble plus de 95 % de la population. Les idées des Lumières (Montesquieu, Rousseau, Voltaire) contestent l'arbitraire royal et les privilèges.",
                "Face à une grave crise financière, le roi convoque les états généraux, qui s'ouvrent à Versailles le 5 mai 1789. Dans une brochure célèbre parue en janvier 1789, l'abbé Sieyès demande : « Qu'est-ce que le Tiers-État ? Tout. » Le 17 juin, les députés du tiers état, rejoints par des membres du clergé, se proclament Assemblée nationale ; le 20 juin, par le serment du Jeu de paume, ils jurent de ne pas se séparer avant d'avoir donné une constitution à la France. C'est une révolution juridique : la souveraineté n'appartient plus au roi mais à la nation.",
                "Le peuple intervient ensuite : à Paris, la prise de la Bastille, le 14 juillet 1789, protège l'Assemblée menacée par les troupes royales ; dans les campagnes, la Grande Peur pousse les paysans à attaquer les châteaux. Dans la nuit du 4 août 1789, l'Assemblée abolit les privilèges : la société d'ordres disparaît. Le 26 août, elle adopte la Déclaration des droits de l'homme et du citoyen (DDHC).",
              ],
              box: { label: "Définition", text: "Souveraineté nationale : principe selon lequel le pouvoir suprême appartient à la nation, c'est-à-dire à l'ensemble des citoyens, qui l'exercent par leurs représentants. Article 3 de la DDHC : « Le principe de toute souveraineté réside essentiellement dans la Nation »." },
            },
            {
              heading: "Une nouvelle conception de la nation",
              paragraphs: [
                "Sous l'Ancien Régime, la nation désignait surtout les sujets du roi, liés par leur fidélité au monarque. Avec la Révolution, la nation devient une communauté politique de citoyens libres et égaux en droits, qui choisissent de vivre ensemble sous les mêmes lois. L'article 1er de la DDHC l'affirme : « Les hommes naissent et demeurent libres et égaux en droits ». L'article 6 fait de la loi « l'expression de la volonté générale » : elle est la même pour tous.",
                "Cette nation est une et indivisible. L'Assemblée unifie le territoire : en 1790, les anciennes provinces sont remplacées par 83 départements, administrés de la même façon ; les douanes intérieures sont supprimées ; un système de poids et mesures commun, le système métrique, est élaboré dans les années 1790. Le 14 juillet 1790, la fête de la Fédération rassemble à Paris des gardes nationaux venus de toute la France, qui jurent fidélité « à la Nation, à la Loi et au Roi » : la nation se célèbre elle-même.",
                "La citoyenneté s'élargit à des groupes jusque-là exclus : les protestants obtiennent l'égalité civile, puis les juifs deviennent citoyens en 1790 et 1791. L'état civil est laïcisé en septembre 1792 : les naissances, mariages et décès sont désormais enregistrés par les mairies et non plus par l'Église, et le divorce est autorisé.",
              ],
              box: { label: "À retenir", text: "La nation révolutionnaire repose sur trois idées : la souveraineté appartient aux citoyens ; tous sont égaux devant la loi ; la nation est une et indivisible, avec les mêmes institutions et les mêmes lois sur tout le territoire." },
            },
            {
              heading: "De la monarchie constitutionnelle à la République",
              paragraphs: [
                "La Constitution de septembre 1791 établit une monarchie constitutionnelle : le roi garde le pouvoir exécutif et un droit de veto suspensif, mais le pouvoir législatif appartient à une assemblée élue. La séparation des pouvoirs s'inspire de Montesquieu. Mais le roi accepte mal la Révolution, en particulier la Constitution civile du clergé (1790), qui fait élire les prêtres. Dans la nuit du 20 au 21 juin 1791, la famille royale s'enfuit et elle est arrêtée à Varennes : la confiance entre le roi et la nation est brisée, et des voix réclament la République.",
                "En avril 1792, la France déclare la guerre au souverain autrichien. Les premières défaites, attribuées à la trahison du roi, provoquent l'insurrection parisienne du 10 août 1792 : les Tuileries sont prises et la monarchie tombe. Une nouvelle assemblée, la Convention, est élue au suffrage universel masculin. Le lendemain de la victoire de Valmy (20 septembre 1792), elle abolit la royauté le 21 septembre ; la République est proclamée. Louis XVI est jugé et guillotiné le 21 janvier 1793.",
                "Menacée par la guerre extérieure et par les insurrections intérieures (Vendée à partir de mars 1793), la République d'exception organise la Terreur (1793-1794) : le Comité de salut public, où domine Robespierre, suspend les libertés au nom de la défense de la Révolution, et environ 17 000 condamnations à mort sont prononcées par les tribunaux révolutionnaires, sans compter les exécutions sommaires. Après la chute de Robespierre (9 thermidor an II, 27 juillet 1794), le Directoire (1795-1799) revient à une République modérée, au suffrage censitaire, avant le coup d'État de Bonaparte en 1799.",
              ],
              box: { label: "Repère", text: "17 juin 1789 : Assemblée nationale. 14 juillet 1789 : prise de la Bastille. 4 août 1789 : abolition des privilèges. 26 août 1789 : DDHC. Juin 1791 : fuite à Varennes. 10 août 1792 : chute de la monarchie. 21 septembre 1792 : abolition de la royauté. 21 janvier 1793 : exécution de Louis XVI." },
            },
            {
              heading: "Les limites de la citoyenneté révolutionnaire",
              paragraphs: [
                "Tous ne sont pas des citoyens à part entière. La Constitution de 1791 distingue les citoyens actifs, hommes de plus de 25 ans payant un impôt au moins égal à trois journées de travail, qui votent, et les citoyens passifs, qui ont des droits civils mais ne votent pas. Le suffrage universel masculin n'est appliqué qu'en 1792 pour élire la Convention, et le Directoire rétablit le suffrage censitaire.",
                "Les femmes sont exclues de la citoyenneté politique, alors même qu'elles participent à la Révolution (marche sur Versailles des 5 et 6 octobre 1789, clubs féminins). En 1791, Olympe de Gouges rédige une Déclaration des droits de la femme et de la citoyenne qui réclame l'égalité : selon elle, puisque la femme a le droit de monter sur l'échafaud, elle doit aussi avoir celui de monter à la tribune. Opposée aux Montagnards, elle est guillotinée en novembre 1793 ; les clubs de femmes sont interdits la même année.",
                "Dans les colonies, l'esclavage contredit les principes de 1789. Après la grande révolte des esclaves de Saint-Domingue (1791), la Convention abolit l'esclavage dans toutes les colonies françaises le 4 février 1794 (16 pluviôse an II). Cette abolition sera annulée par Bonaparte en 1802.",
              ],
            },
          ],
          keyPoints: [
            "Juin 1789 : le tiers état se proclame Assemblée nationale ; la souveraineté passe du roi à la nation.",
            "Nuit du 4 août 1789 : abolition des privilèges et fin de la société d'ordres ; 26 août : DDHC (liberté, égalité en droits, souveraineté nationale).",
            "La nation révolutionnaire est une communauté de citoyens égaux, une et indivisible (départements, lois communes, fête de la Fédération).",
            "1791 : monarchie constitutionnelle ; la fuite à Varennes la discrédite ; 21 septembre 1792 : abolition de la royauté, puis République.",
            "Limites : citoyens passifs, exclusion des femmes (Olympe de Gouges), esclavage aboli en 1794 seulement, puis rétabli en 1802.",
          ],
          example: {
            statement: "Montrez qu'entre 1789 et 1792, la Révolution fait passer la France d'une monarchie absolue à une nation souveraine.",
            solution: [
              "Rappeler la situation de départ : en 1789, le roi est souverain de droit divin et la société est divisée en ordres inégaux.",
              "Première étape, juin 1789 : le tiers état se proclame Assemblée nationale (17 juin) et prête le serment du Jeu de paume (20 juin) ; la souveraineté passe à la nation.",
              "Deuxième étape, août 1789 : l'abolition des privilèges (4 août) supprime la société d'ordres ; la DDHC (26 août) proclame l'égalité en droits et la souveraineté nationale (article 3).",
              "Troisième étape, 1791 : la Constitution établit une monarchie constitutionnelle où le roi n'est plus qu'un pouvoir délégué par la nation ; la fuite à Varennes ruine sa légitimité.",
              "Quatrième étape, 1792 : après la prise des Tuileries (10 août), la Convention élue au suffrage universel masculin abolit la royauté (21 septembre).",
              "Conclusion : en trois ans, la nation, communauté de citoyens égaux, remplace le roi comme source de tout pouvoir, même si la citoyenneté reste limitée (femmes, esclaves).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque date à l'événement correspondant et expliquez en une phrase son importance pour la nation : 17 juin 1789 ; 4 août 1789 ; 26 août 1789 ; 14 juillet 1790 ; 21 septembre 1792.",
              hint: "Pour chaque date, demandez-vous ce qui change : qui détient la souveraineté, qui est égal à qui, qui se rassemble.",
              solution: [
                "17 juin 1789 : le tiers état se proclame Assemblée nationale ; la nation, et non plus le roi, devient souveraine.",
                "4 août 1789 : abolition des privilèges ; les Français deviennent égaux devant la loi et l'impôt, la société d'ordres disparaît.",
                "26 août 1789 : adoption de la DDHC ; elle fonde la nation sur des droits universels et sur la souveraineté nationale.",
                "14 juillet 1790 : fête de la Fédération ; des gardes nationaux de tout le pays célèbrent l'unité de la nation.",
                "21 septembre 1792 : la Convention abolit la royauté ; la nation se gouverne sans roi, la République est proclamée.",
              ],
            },
            {
              level: 2,
              statement: "Analysez ces trois articles de la DDHC du 26 août 1789. Article 1er : « Les hommes naissent et demeurent libres et égaux en droits. » Article 3 : « Le principe de toute souveraineté réside essentiellement dans la Nation. » Article 6 : « La Loi est l'expression de la volonté générale. » (1) Quel principe chaque article affirme-t-il ? (2) Contre quoi chacun est-il dirigé ? (3) Montrez une limite de leur application entre 1789 et 1799.",
              hint: "Opposez chaque article à un trait de l'Ancien Régime : privilèges, monarchie de droit divin, volonté du roi.",
              solution: [
                "(1) L'article 1er affirme la liberté et l'égalité en droits ; l'article 3, la souveraineté nationale ; l'article 6, le règne d'une loi commune, votée au nom de tous.",
                "(2) L'article 1er s'oppose à la société d'ordres et aux privilèges ; l'article 3, à la monarchie absolue de droit divin, où le roi est souverain ; l'article 6, à l'arbitraire royal, résumé par la formule « si veut le roi, si veut la loi ».",
                "(3) Limites : la Constitution de 1791 réserve le vote aux citoyens actifs ; les femmes restent exclues de la vie politique (Olympe de Gouges le dénonce) ; l'esclavage subsiste dans les colonies jusqu'en 1794.",
                "Bilan : la DDHC fonde une nouvelle conception de la nation, mais son universalisme n'est que partiellement appliqué.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « En quoi la Révolution française invente-t-elle une nouvelle conception de la nation entre 1789 et 1799 ? ». Rédigez l'introduction et présentez un plan en trois parties, avec deux arguments datés par partie.",
              hint: "Construisez une progression : la nation devient souveraine, elle se pense une et égalitaire, mais elle reste incomplète et divisée.",
              solution: [
                "Introduction : en 1789, la France est une monarchie absolue où la nation se confond avec les sujets du roi. La Révolution, de la réunion des états généraux (mai 1789) au coup d'État de Bonaparte (1799), transforme ce mot. Problématique : comment la nation devient-elle la source du pouvoir et une communauté de citoyens égaux, et quelles en sont les limites ?",
                "I. Une nation souveraine : le tiers état se proclame Assemblée nationale (17 juin 1789) ; la DDHC affirme que la souveraineté réside dans la nation (26 août 1789) ; la République remplace la monarchie (21 septembre 1792).",
                "II. Une nation de citoyens égaux, une et indivisible : abolition des privilèges (4 août 1789) ; départements, lois et mesures communes ; fête de la Fédération (14 juillet 1790) ; émancipation des protestants et des juifs.",
                "III. Une nation incomplète et déchirée : citoyens passifs et retour du suffrage censitaire sous le Directoire ; exclusion des femmes (Olympe de Gouges, 1791) ; abolition de l'esclavage tardive (1794) ; guerre civile et Terreur (1793-1794).",
                "Conclusion : la Révolution fonde durablement l'idée d'une nation de citoyens souverains, mais ses principes universels restent en partie à conquérir, ce qui nourrira tout le XIXe siècle.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements de la Révolution dans l'ordre chronologique.",
            items: [
              "Ouverture des états généraux à Versailles",
              "Serment du Jeu de paume",
              "Prise de la Bastille",
              "Abolition des privilèges",
              "Fête de la Fédération",
              "Fuite du roi arrêtée à Varennes",
              "Abolition de la royauté par la Convention",
            ],
          },
          quiz: [
            {
              q: "Que proclament les députés du tiers état le 17 juin 1789 ?",
              options: ["La République", "L'Assemblée nationale", "L'abolition de l'esclavage", "La déchéance du roi"],
              answer: 1,
              why: "En se proclamant Assemblée nationale, ils affirment représenter la nation tout entière, qui devient souveraine.",
            },
            {
              q: "Que supprime la nuit du 4 août 1789 ?",
              options: ["Les privilèges", "La monarchie", "Le suffrage censitaire", "Les départements"],
              answer: 0,
              why: "L'abolition des privilèges met fin à la société d'ordres : tous deviennent égaux devant la loi.",
            },
            {
              q: "Qui sont les citoyens passifs de la Constitution de 1791 ?",
              options: ["Les nobles qui ont émigré à l'étranger", "Les membres du clergé réfractaire", "Les hommes trop pauvres pour voter", "Les députés de la droite"],
              answer: 2,
              why: "Les citoyens passifs ont les droits civils mais ne paient pas assez d'impôt pour voter.",
            },
            {
              q: "Que réclame Olympe de Gouges dans sa Déclaration de 1791 ?",
              options: ["L'égalité des droits entre femmes et hommes", "Le retour de la monarchie absolue de droit divin", "La suppression du suffrage universel", "L'interdiction du divorce"],
              answer: 0,
              why: "Dans la Déclaration des droits de la femme et de la citoyenne, elle réclame pour les femmes les droits proclamés pour les hommes en 1789.",
            },
            {
              q: "En quelle année la royauté est-elle abolie ?",
              options: ["1789", "1791", "1792", "1793"],
              answer: 2,
              why: "La Convention, réunie au lendemain de Valmy, abolit la royauté le 21 septembre 1792 ; Louis XVI est exécuté le 21 janvier 1793.",
            },
          ],
          trap: "Croire que la République est proclamée dès 1789 : de 1789 à 1792, la Révolution conserve le roi dans une monarchie constitutionnelle, et la royauté n'est abolie que le 21 septembre 1792.",
          method: "Pour chaque événement de 1789 à 1792, notez ce qu'il change pour la nation (souveraineté, égalité, unité) : vous obtenez un fil directeur réutilisable dans toute question problématisée.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'empire-napoleonien',
          title: 'Le Consulat et l’Empire : consolider et diffuser la Révolution',
          minutes: 35,
          objectives: [
            "Expliquer comment Bonaparte prend le pouvoir et met en place un régime autoritaire, du Consulat à l'Empire.",
            "Identifier les institutions durables créées sous le Consulat (préfets, Code civil, Concordat, lycées) et ce qu'elles conservent ou trahissent de la Révolution.",
            "Analyser la diffusion des principes révolutionnaires en Europe par les conquêtes et les réactions nationales qu'elle suscite.",
          ],
          course: [
            {
              heading: "Du coup d'État au régime personnel",
              paragraphs: [
                "Sous le Directoire, la République est instable : coups d'État successifs, crise financière, guerre. Le général Napoléon Bonaparte, rendu populaire par ses victoires en Italie (1796-1797), organise avec Sieyès le coup d'État des 18 et 19 brumaire an VIII (9 et 10 novembre 1799). La Constitution de l'an VIII crée le Consulat : trois consuls, mais le Premier consul, Bonaparte, détient l'essentiel du pouvoir. Les assemblées sont nombreuses mais faibles.",
                "Bonaparte présente son pouvoir comme l'aboutissement de la Révolution. En décembre 1799, la proclamation des consuls affirme que la Révolution est « fixée aux principes qui l'ont commencée » et qu'elle « est finie ». Le régime s'appuie sur le plébiscite : les citoyens approuvent par oui ou par non la Constitution (1800), le Consulat à vie (1802), puis l'Empire (1804). Le peuple ne choisit pas ses dirigeants, il ratifie un pouvoir déjà installé.",
                "Le 18 mai 1804, le Sénat proclame Napoléon empereur des Français ; le 2 décembre 1804, il se sacre lui-même à Notre-Dame de Paris, en présence du pape Pie VII. Le régime devient de plus en plus autoritaire : censure de la presse (une poignée de journaux autorisés à Paris), police de Fouché, création d'une noblesse d'Empire (1808), culte de la personnalité par la peinture et les catéchismes.",
              ],
              box: { label: "Définition", text: "Plébiscite : vote par lequel les citoyens répondent par oui ou par non à une question posée par le pouvoir, souvent pour approuver un homme ou un régime. Il donne une apparence démocratique à un pouvoir autoritaire." },
            },
            {
              heading: "Les « masses de granit » : consolider l'héritage révolutionnaire",
              paragraphs: [
                "Le Consulat crée des institutions centralisées qui dureront jusqu'à aujourd'hui. Dans chaque département, un préfet nommé par le gouvernement applique ses décisions (loi du 17 février 1800). La Banque de France est fondée en 1800 et le franc germinal stabilise la monnaie en 1803. Les lycées (1802) forment les futurs cadres de l'État ; la Légion d'honneur (1802) récompense le mérite civil et militaire.",
                "Le Concordat, signé avec le pape en 1801, rétablit la paix religieuse : le catholicisme est reconnu comme la religion de la majorité des Français, mais l'État nomme les évêques et rémunère le clergé, et l'Église renonce aux biens vendus pendant la Révolution. Les protestants puis les juifs voient leurs cultes organisés : la liberté de culte est maintenue.",
                "Le Code civil, promulgué le 21 mars 1804, unifie le droit privé pour toute la France. Il consacre plusieurs acquis de 1789 : égalité devant la loi, liberté individuelle, liberté de conscience, droit de propriété, mariage civil et divorce, égalité des héritiers. Mais il renforce l'autorité du père et du mari : la femme mariée est juridiquement incapable, et l'article 213 dispose que « le mari doit protection à sa femme, la femme obéissance à son mari ». Le livret ouvrier (1803) place aussi les ouvriers sous surveillance.",
              ],
              box: { label: "À retenir", text: "Napoléon conserve l'égalité civile, l'abolition des privilèges et la vente des biens nationaux, mais il supprime la liberté politique, renforce l'autorité du chef et du père, et rétablit l'esclavage dans les colonies en 1802." },
            },
            {
              heading: "Le Grand Empire : diffuser la Révolution par la conquête",
              paragraphs: [
                "Napoléon enchaîne les victoires contre les coalitions européennes : Austerlitz (2 décembre 1805), Iéna (1806), Friedland (1807). La défaite navale de Trafalgar (21 octobre 1805) laisse toutefois la maîtrise des mers au Royaume-Uni, contre lequel il décrète le Blocus continental (1806). En 1811, l'Empire compte 130 départements, de Hambourg à Rome, entouré d'États vassaux confiés à des membres de sa famille (royaumes de Naples, de Westphalie, d'Espagne) et d'alliés contraints (Autriche, Prusse).",
                "Dans les territoires annexés ou dominés, Napoléon exporte les réformes révolutionnaires : abolition des privilèges et des droits seigneuriaux, Code civil, égalité devant la loi, émancipation des juifs, administration rationnelle. Le Saint-Empire romain germanique disparaît en 1806, remplacé par une Confédération du Rhin sous protection française : la carte de l'Europe est profondément simplifiée.",
              ],
            },
            {
              heading: "Le réveil des nations contre l'Empire",
              paragraphs: [
                "La domination française pèse lourd : conscription, impôts, réquisitions, pillages, présence de troupes. Elle provoque une réaction nationale. En Espagne, le soulèvement de Madrid le 2 mai 1808 et sa répression, peinte par Goya (Tres de mayo, 1814), ouvrent une guerre de guérilla. En Allemagne, le philosophe Fichte prononce ses Discours à la nation allemande (1807-1808), qui définissent la nation par la langue et la culture. En Russie et en Prusse, la mobilisation contre Napoléon prend un caractère patriotique.",
                "La campagne de Russie (1812) tourne au désastre : la Grande Armée, forte d'environ 600 000 hommes, venue de toute l'Europe, est détruite par la retraite, le froid et les combats (passage de la Bérézina). Battu à Leipzig en octobre 1813 (bataille des Nations), Napoléon abdique le 6 avril 1814. Revenu de l'île d'Elbe pour les Cent-Jours, il est définitivement vaincu à Waterloo le 18 juin 1815 et exilé à Sainte-Hélène, où il meurt en 1821.",
                "Paradoxe : en diffusant l'idée de nation souveraine, Napoléon a réveillé les sentiments nationaux des peuples qu'il dominait. Le XIXe siècle sera celui des nations.",
              ],
              box: { label: "Repère", text: "9 novembre 1799 : coup d'État de Brumaire. 1801 : Concordat. 1802 : rétablissement de l'esclavage. 21 mars 1804 : Code civil. 2 décembre 1804 : sacre. 2 décembre 1805 : Austerlitz. 1812 : campagne de Russie. 18 juin 1815 : Waterloo." },
            },
          ],
          keyPoints: [
            "Brumaire (novembre 1799) : coup d'État de Bonaparte, qui affirme terminer la Révolution ; Consulat puis Empire (sacre le 2 décembre 1804).",
            "Un régime autoritaire légitimé par le plébiscite : censure, police, culte du chef, noblesse d'Empire.",
            "Des institutions durables : préfets, Banque de France, lycées, Légion d'honneur, Concordat (1801), Code civil (1804).",
            "Le Code civil garde l'égalité civile et la propriété, mais soumet la femme au mari ; l'esclavage est rétabli en 1802.",
            "Les conquêtes diffusent les réformes en Europe mais suscitent des réactions nationales (Espagne 1808, Allemagne, Russie).",
          ],
          example: {
            statement: "Le Code civil de 1804 consolide-t-il ou trahit-il l'héritage de la Révolution ?",
            solution: [
              "Présenter le document : le Code civil, promulgué le 21 mars 1804, unifie pour la première fois le droit privé de toute la France.",
              "Ce qu'il consolide : l'égalité devant la loi et la fin des privilèges, la liberté individuelle et de conscience, la propriété (garantissant la vente des biens nationaux), le mariage civil.",
              "Ce qu'il trahit ou limite : l'autorité du père et du mari est renforcée, la femme mariée est juridiquement incapable (article 213), le divorce est restreint par rapport à 1792.",
              "Le contexte : il accompagne un régime autoritaire qui supprime la liberté politique, et la même année 1802 voit le rétablissement de l'esclavage.",
              "Réponse : le Code civil consolide l'égalité civile issue de 1789, ce qui explique sa diffusion en Europe, mais il fige une société patriarcale et ne garantit aucune liberté politique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les éléments suivants en deux colonnes, « héritage de la Révolution conservé » et « rupture avec la Révolution » : égalité devant la loi ; rétablissement de l'esclavage ; vente des biens nationaux confirmée ; censure de la presse ; noblesse d'Empire ; liberté de culte ; sacre de l'empereur.",
              hint: "Comparez chaque élément aux principes de 1789 : égalité en droits, souveraineté nationale, libertés.",
              solution: [
                "Héritage conservé : égalité devant la loi ; vente des biens nationaux confirmée ; liberté de culte.",
                "Rupture : rétablissement de l'esclavage (1802), contraire à l'abolition de 1794 ; censure de la presse, contraire à la liberté d'expression de l'article 11 de la DDHC ; noblesse d'Empire (1808), qui recrée des titres héréditaires ; sacre de l'empereur, qui renoue avec un pouvoir héréditaire et religieux.",
                "Bilan : Napoléon garde l'égalité civile mais supprime la liberté politique.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en un paragraphe argumenté pourquoi les conquêtes napoléoniennes ont à la fois diffusé les principes révolutionnaires et provoqué des réactions nationales en Europe. Appuyez-vous sur deux exemples précis.",
              hint: "Distinguez ce que les Français apportent (réformes) et ce qu'ils imposent (domination) ; choisissez un exemple pour chaque aspect.",
              solution: [
                "Idée 1, la diffusion : dans les pays annexés ou vassaux, Napoléon abolit les privilèges et les droits seigneuriaux, introduit le Code civil et l'égalité devant la loi ; dans le royaume de Westphalie ou en Italie, une partie des élites accueille ces réformes.",
                "Idée 2, la domination : ces réformes s'accompagnent de la conscription, des impôts, des réquisitions et de l'installation de rois étrangers, comme Joseph Bonaparte en Espagne.",
                "Idée 3, la réaction : en Espagne, le soulèvement du 2 mai 1808 ouvre une guérilla populaire ; en Allemagne, Fichte appelle à l'unité de la nation allemande par la langue et la culture (1807-1808).",
                "Conclusion : en exportant l'idée de nation souveraine tout en dominant les peuples, Napoléon fait naître les nationalismes qui contribueront à sa chute.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « Napoléon Bonaparte, héritier ou fossoyeur de la Révolution (1799-1815) ? ». Rédigez une introduction complète et un plan détaillé en deux parties, chacune avec trois arguments datés, puis une conclusion.",
              hint: "Ne choisissez pas un camp : montrez d'abord ce qui est conservé et diffusé, puis ce qui est supprimé.",
              solution: [
                "Introduction : le 18 brumaire an VIII (9 novembre 1799), le général Bonaparte prend le pouvoir en affirmant que la Révolution est finie. Jusqu'à Waterloo (1815), il dirige la France et domine l'Europe. Problématique : son pouvoir prolonge-t-il ou détruit-il l'œuvre de la Révolution ?",
                "I. Un héritier qui consolide et diffuse la Révolution : (1) il garantit l'abolition des privilèges et la vente des biens nationaux ; (2) le Code civil (1804) inscrit l'égalité civile et la liberté de conscience dans le droit ; (3) les conquêtes exportent ces réformes en Europe et font disparaître le Saint-Empire (1806).",
                "II. Un fossoyeur des libertés révolutionnaires : (1) le pouvoir personnel, légitimé par des plébiscites, mène au sacre (1804) et à l'Empire héréditaire ; (2) la censure, la police et la noblesse d'Empire (1808) suppriment la liberté politique et recréent une hiérarchie ; (3) l'esclavage est rétabli en 1802 et le Code civil soumet la femme au mari.",
                "Conclusion : Napoléon conserve l'égalité civile de 1789 et la répand en Europe, mais il sacrifie la liberté et la souveraineté réelle du peuple. Ses institutions (préfets, Code civil, lycées) lui survivront, tout comme les nationalismes qu'il a éveillés.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque création napoléonienne à sa définition.",
            pairs: [
              { left: "Préfet", right: "Représentant de l'État nommé dans chaque département" },
              { left: "Concordat", right: "Accord de 1801 avec le pape qui organise le culte catholique" },
              { left: "Code civil", right: "Recueil de 1804 qui unifie le droit privé" },
              { left: "Légion d'honneur", right: "Décoration créée en 1802 pour récompenser le mérite" },
              { left: "Blocus continental", right: "Interdiction faite à l'Europe de commercer avec le Royaume-Uni" },
              { left: "Plébiscite", right: "Vote par oui ou par non pour approuver un pouvoir" },
            ],
          },
          quiz: [
            {
              q: "Comment Bonaparte arrive-t-il au pouvoir en novembre 1799 ?",
              options: ["Par une élection au suffrage universel", "Par un coup d'État", "Par un sacre à Reims", "Par une insurrection parisienne"],
              answer: 1,
              why: "Les 18 et 19 brumaire an VIII, il renverse le Directoire avec l'appui de l'armée et de Sieyès.",
            },
            {
              q: "Quelle mesure de 1802 revient sur une conquête de la Révolution ?",
              options: ["La création des lycées d'État", "La fondation de la Légion d'honneur", "La signature du Concordat avec le pape", "Le rétablissement de l'esclavage"],
              answer: 3,
              why: "L'esclavage, aboli par la Convention en 1794, est rétabli par la loi du 20 mai 1802.",
            },
            {
              q: "Quel principe le Code civil ne garantit-il pas ?",
              options: ["L'égalité entre les époux", "L'égalité de tous devant la loi", "Le droit de propriété", "La liberté de conscience"],
              answer: 0,
              why: "Le Code civil soumet la femme mariée à l'autorité de son mari (article 213).",
            },
            {
              q: "Quelle bataille marque la défaite définitive de Napoléon ?",
              options: ["Austerlitz", "Iéna", "Waterloo", "Trafalgar"],
              answer: 2,
              why: "Waterloo, le 18 juin 1815, met fin aux Cent-Jours ; Trafalgar (1805) fut une défaite navale, pas la défaite finale.",
            },
            {
              q: "Où le soulèvement de mai 1808 ouvre-t-il une guerre de guérilla contre les Français ?",
              options: ["En Russie", "En Autriche", "En Espagne", "En Prusse"],
              answer: 2,
              why: "Le Dos de Mayo à Madrid et sa répression lancent une résistance populaire qui immobilise une partie de l'armée française.",
            },
          ],
          trap: "Présenter Napoléon soit comme un simple dictateur, soit comme le défenseur de la Révolution : il conserve l'égalité civile et la diffuse, mais supprime la liberté politique et rétablit l'esclavage.",
          method: "Préparez un tableau à deux colonnes « ce qu'il conserve de 1789 » et « ce qu'il supprime », avec une date par ligne : il répond directement aux sujets du type « héritier ou fossoyeur ».",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'restauration-revolution',
          title: 'L’Europe entre restauration et révolution (1814-1848)',
          minutes: 35,
          objectives: [
            "Expliquer les principes de l'ordre européen fondé par le congrès de Vienne en 1815.",
            "Identifier les mouvements libéraux et nationaux qui contestent cet ordre, de l'indépendance grecque aux révolutions de 1830.",
            "Décrire la vie politique française de la Restauration à la monarchie de Juillet.",
            "Analyser le « printemps des peuples » de 1848, ses causes, son extension et ses échecs.",
          ],
          course: [
            {
              heading: "L'ordre de Vienne : restaurer et équilibrer",
              paragraphs: [
                "Après la chute de Napoléon, les vainqueurs (Autriche, Prusse, Russie, Royaume-Uni) se réunissent au congrès de Vienne (septembre 1814-juin 1815), où la France est représentée par Talleyrand. Le chancelier autrichien Metternich y joue un rôle central. Deux principes guident les diplomates : la légitimité, c'est-à-dire le retour des dynasties d'avant la Révolution, et l'équilibre entre les grandes puissances, pour qu'aucune ne domine l'Europe.",
                "La carte est redessinée sans tenir compte des aspirations des peuples. L'Allemagne forme une Confédération germanique de 39 États dominée par l'Autriche et la Prusse ; l'Italie reste divisée, la Lombardie et la Vénétie revenant à l'Autriche ; la Pologne est à nouveau partagée, le tsar recevant un royaume de Pologne ; la Belgique est réunie aux Pays-Bas. En septembre 1815, les souverains de Russie, d'Autriche et de Prusse forment la Sainte-Alliance, au nom des valeurs chrétiennes ; la Quadruple-Alliance, avec le Royaume-Uni, organise des congrès pour surveiller l'Europe et intervenir contre les révolutions.",
              ],
              box: { label: "Définition", text: "Libéralisme : courant politique qui défend les libertés individuelles (expression, presse, culte), un régime constitutionnel et représentatif. Nationalisme (au sens du XIXe siècle) : volonté d'un peuple, uni par la langue, la culture ou l'histoire, de former un État indépendant et souverain." },
            },
            {
              heading: "Des peuples qui contestent l'ordre de 1815",
              paragraphs: [
                "Les idées de 1789 n'ont pas disparu. Des sociétés secrètes, comme les carbonari en Italie, préparent des insurrections ; en 1820-1821, des révolutions éclatent en Espagne, au Portugal et en Italie, mais elles sont écrasées, parfois par des interventions extérieures (l'armée française rétablit le roi d'Espagne en 1823). En Amérique, les colonies espagnoles conquièrent leur indépendance dans les années 1810-1820, sous la conduite de chefs comme Simón Bolívar, et le Brésil se sépare du Portugal en 1822.",
                "La lutte des Grecs contre l'Empire ottoman (1821-1830) émeut l'opinion européenne. Les massacres commis par les Ottomans, comme à Chios en 1822, inspirent à Delacroix un grand tableau, et le poète anglais Byron meurt en 1824 à Missolonghi aux côtés des insurgés : c'est le philhellénisme. Le Royaume-Uni, la France et la Russie interviennent et détruisent la flotte ottomane à Navarin (1827). L'indépendance de la Grèce est reconnue en 1830 : pour la première fois, l'ordre de Vienne recule devant un mouvement national.",
                "Le romantisme, mouvement artistique qui exalte les sentiments, l'histoire et le génie des peuples (poésie, peinture, musique), accompagne souvent ces combats nationaux.",
              ],
            },
            {
              heading: "La France : de la Restauration à la monarchie de Juillet",
              paragraphs: [
                "En 1814, Louis XVIII, frère de Louis XVI, rentre en France et accorde (octroie) la Charte constitutionnelle du 4 juin 1814. C'est une monarchie constitutionnelle qui conserve l'égalité civile, le Code civil et les biens nationaux, mais le suffrage est très censitaire : seuls les hommes payant au moins 300 francs d'impôt direct votent, soit environ 100 000 électeurs. Son frère Charles X, roi en 1824, se fait sacrer à Reims et mène une politique ultraroyaliste.",
                "En juillet 1830, Charles X publie des ordonnances qui suspendent la liberté de la presse et dissolvent la Chambre. Les Parisiens se soulèvent lors des Trois Glorieuses (27, 28 et 29 juillet 1830), que Delacroix célèbre dans La Liberté guidant le peuple. Charles X s'enfuit. Les libéraux, qui craignent la République, appellent au trône Louis-Philippe d'Orléans, « roi des Français ». La monarchie de Juillet rétablit le drapeau tricolore et élargit un peu le suffrage (environ 250 000 électeurs à la fin du régime), mais elle reste le gouvernement des notables.",
                "La révolution de 1830 a un écho européen : la Belgique se soulève en août 1830 et obtient son indépendance, reconnue par les puissances à Londres en 1831 ; en revanche, l'insurrection polonaise contre le tsar (1830-1831) est écrasée, et de nombreux Polonais s'exilent en France.",
              ],
              box: { label: "Repère", text: "1815 : congrès de Vienne. 1821-1830 : guerre d'indépendance grecque. 27-29 juillet 1830 : Trois Glorieuses. 1830-1831 : indépendance belge, écrasement de l'insurrection polonaise. Février-mars 1848 : révolutions à Paris, Vienne, Berlin, Milan." },
            },
            {
              heading: "1848, le « printemps des peuples »",
              paragraphs: [
                "En 1846-1847, une crise économique frappe l'Europe : mauvaises récoltes, hausse du prix du pain, chômage. Elle s'ajoute aux frustrations politiques des libéraux, des démocrates et des nationalistes. En France, le refus du ministre Guizot d'élargir le suffrage provoque la révolution des 22-24 février 1848 : Louis-Philippe abdique et la Deuxième République est proclamée.",
                "La révolution se diffuse en quelques semaines : à Vienne, le 13 mars, Metternich doit s'enfuir ; à Berlin, le roi de Prusse cède en mars ; à Milan, les Cinq Journées chassent les Autrichiens ; les Hongrois, avec Kossuth, et les Tchèques revendiquent leur autonomie. En mai 1848, un Parlement élu se réunit à Francfort pour unifier l'Allemagne ; le roi de Piémont-Sardaigne entre en guerre contre l'Autriche pour libérer l'Italie. Le servage est aboli dans l'Empire d'Autriche.",
                "Mais en 1849, les monarchies reprennent l'avantage : les Piémontais sont battus, le roi de Prusse refuse la couronne impériale offerte par le Parlement de Francfort, la révolution hongroise est écrasée avec l'aide de l'armée russe, et la République romaine de Mazzini tombe sous les coups de l'armée française. Le printemps des peuples échoue, mais il laisse des acquis (suffrage universel masculin en France, fin du servage en Autriche) et prépare les unités italienne et allemande.",
              ],
              box: { label: "À retenir", text: "Entre 1815 et 1848, l'Europe oscille entre l'ordre conservateur de Vienne et les poussées libérales et nationales. Les succès (Grèce, Belgique, 1830 en France) restent limités ; 1848 généralise la révolution, mais la réaction l'emporte en 1849." },
            },
          ],
          keyPoints: [
            "Congrès de Vienne (1814-1815) : légitimité et équilibre, carte redessinée sans les peuples ; Sainte-Alliance contre les révolutions.",
            "Mouvements libéraux et nationaux : indépendance grecque (reconnue en 1830), indépendances en Amérique latine, insurrections réprimées en Italie et en Espagne.",
            "France : Charte de 1814 et suffrage censitaire ; Trois Glorieuses (juillet 1830) et monarchie de Juillet de Louis-Philippe.",
            "1830 en Europe : indépendance belge, échec de l'insurrection polonaise.",
            "1848, printemps des peuples : révolutions à Paris, Vienne, Berlin, Milan, Budapest ; échec en 1849 mais des acquis durables.",
          ],
          example: {
            statement: "Pourquoi peut-on dire que l'ordre établi par le congrès de Vienne est contesté entre 1815 et 1848 ?",
            solution: [
              "Définir l'ordre de Vienne : en 1815, les vainqueurs de Napoléon rétablissent les dynasties légitimes et organisent l'équilibre européen, sans tenir compte des aspirations nationales.",
              "Première contestation, libérale : les révolutions de 1820-1821 en Espagne et en Italie, puis les Trois Glorieuses de 1830 en France, réclament des libertés et une constitution.",
              "Deuxième contestation, nationale : les Grecs obtiennent leur indépendance (1830), les Belges aussi (1830-1831), tandis que les Polonais échouent (1831).",
              "Troisième contestation, générale : en 1848, le printemps des peuples touche Paris, Vienne, Berlin, Milan et Budapest, et Metternich lui-même doit fuir.",
              "Conclusion : l'ordre de Vienne résiste grâce aux interventions des grandes puissances et à la réaction de 1849, mais il recule face aux peuples, ce qui annonce l'Europe des nationalités.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun des mouvements suivants, indiquez la date, s'il est surtout libéral ou surtout national, et s'il réussit ou échoue : insurrection grecque ; Trois Glorieuses ; révolution belge ; insurrection polonaise ; révolution hongroise.",
              hint: "Un mouvement libéral réclame des libertés et une constitution ; un mouvement national réclame l'indépendance ou l'unité d'un peuple.",
              solution: [
                "Insurrection grecque (1821-1830) : surtout nationale (indépendance face aux Ottomans) ; réussite, indépendance reconnue en 1830.",
                "Trois Glorieuses (juillet 1830) : surtout libérale (contre les ordonnances de Charles X) ; réussite, avènement de Louis-Philippe.",
                "Révolution belge (1830) : nationale (séparation des Pays-Bas) ; réussite, indépendance reconnue en 1831.",
                "Insurrection polonaise (1830-1831) : nationale (contre la domination du tsar) ; échec, écrasée en 1831.",
                "Révolution hongroise (1848-1849) : nationale et libérale ; échec, écrasée en 1849 avec l'aide de la Russie.",
              ],
            },
            {
              level: 2,
              statement: "Comparez la Charte de 1814 et la monarchie de Juillet (1830-1848) : qui gouverne, qui vote, quels symboles ? Expliquez ensuite pourquoi la monarchie de Juillet tombe en février 1848.",
              hint: "Pensez au suffrage censitaire, au drapeau, au titre du roi, puis à la crise de 1846-1847 et au refus de réforme.",
              solution: [
                "Points communs : deux monarchies constitutionnelles qui conservent l'égalité civile et le Code civil ; le suffrage reste censitaire et réservé aux hommes les plus riches.",
                "Différences : Louis XVIII octroie la Charte et garde le drapeau blanc ; Louis-Philippe est « roi des Français », rétablit le drapeau tricolore et élargit un peu le suffrage (de 100 000 à environ 250 000 électeurs).",
                "Chute : la crise économique de 1846-1847 aggrave le mécontentement ; l'opposition réclame l'élargissement du suffrage par la campagne des banquets ; Guizot refuse ; l'interdiction d'un banquet déclenche l'insurrection parisienne des 22-24 février 1848.",
                "Conclusion : Louis-Philippe abdique le 24 février et la Deuxième République est proclamée.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « Pourquoi le printemps des peuples de 1848 se diffuse-t-il rapidement en Europe et pourquoi échoue-t-il ? ». Rédigez une introduction, un plan en deux parties avec des exemples précis, et une conclusion qui montre les acquis.",
              hint: "Partie 1 : causes communes et diffusion (dates, villes). Partie 2 : divisions des révolutionnaires et reprise en main des monarchies.",
              solution: [
                "Introduction : en février-mars 1848, une vague révolutionnaire part de Paris et touche une grande partie de l'Europe ; on parle de printemps des peuples. Problématique : quelles forces expliquent cette diffusion, et pourquoi la réaction l'emporte-t-elle dès 1849 ?",
                "I. Une diffusion rapide : causes communes (crise économique de 1846-1847, aspirations libérales et nationales bridées depuis 1815) ; effet d'entraînement de Paris (22-24 février) ; insurrections à Vienne (13 mars, fuite de Metternich), Berlin, Milan (Cinq Journées), Budapest ; Parlement de Francfort (mai 1848).",
                "II. Un échec rapide : divisions entre libéraux modérés et démocrates, peur sociale des possédants (journées de Juin à Paris) ; rivalités entre nationalités dans l'Empire d'Autriche ; reprise en main militaire : défaite piémontaise (1849), refus de la couronne par le roi de Prusse, écrasement de la Hongrie par la Russie, chute de la République romaine.",
                "Conclusion : le printemps des peuples échoue politiquement, mais il laisse le suffrage universel masculin en France, l'abolition de l'esclavage dans les colonies françaises et la fin du servage en Autriche ; il prépare les unités italienne et allemande, qui se feront par la guerre et la diplomatie.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : l'Europe de 1815 à 1848.",
            statements: [
              { text: "Le congrès de Vienne redessine la carte de l'Europe selon la volonté des peuples.", true: false, why: "Il suit les principes de légitimité et d'équilibre entre puissances, sans consulter les peuples." },
              { text: "La Grèce obtient son indépendance face à l'Empire ottoman en 1830.", true: true, why: "Après l'intervention européenne et la bataille de Navarin (1827), l'indépendance est reconnue en 1830." },
              { text: "La Charte de 1814 instaure le suffrage universel masculin.", true: false, why: "Elle établit un suffrage très censitaire : environ 100 000 électeurs." },
              { text: "Les Trois Glorieuses portent Louis-Philippe au pouvoir.", true: true, why: "Après la fuite de Charles X, les libéraux font de Louis-Philippe le « roi des Français »." },
              { text: "L'insurrection polonaise de 1830 aboutit à l'indépendance de la Pologne.", true: false, why: "Elle est écrasée par l'armée russe en 1831." },
              { text: "En mars 1848, Metternich doit fuir Vienne.", true: true, why: "L'insurrection viennoise du 13 mars 1848 chasse le symbole de l'ordre de 1815." },
              { text: "Le Parlement de Francfort réussit à unifier l'Allemagne en 1849.", true: false, why: "Le roi de Prusse refuse la couronne impériale qu'il lui propose, et l'unité échoue." },
            ],
          },
          quiz: [
            {
              q: "Quel est l'un des deux principes du congrès de Vienne ?",
              options: ["Le droit des peuples", "La légitimité", "Le suffrage universel", "La laïcité"],
              answer: 1,
              why: "La légitimité consiste à rendre leurs trônes aux dynasties d'avant la Révolution ; l'autre principe est l'équilibre.",
            },
            {
              q: "Quel peintre représente La Liberté guidant le peuple ?",
              options: ["Goya", "Géricault", "Delacroix", "Courbet"],
              answer: 2,
              why: "Eugène Delacroix peint en 1830 cette allégorie des Trois Glorieuses.",
            },
            {
              q: "Quel pays obtient son indépendance en 1830-1831 en se séparant des Pays-Bas ?",
              options: ["La Pologne", "La Hongrie", "La Lombardie", "La Belgique"],
              answer: 3,
              why: "La révolution belge de 1830 aboutit à un royaume indépendant reconnu par les puissances à Londres.",
            },
            {
              q: "Qu'est-ce que la Sainte-Alliance ?",
              options: ["Une union de souverains contre les révolutions", "Une société secrète italienne qui prépare des insurrections", "Un parti libéral français", "Un traité de libre-échange"],
              answer: 0,
              why: "Formée en 1815 par la Russie, l'Autriche et la Prusse, elle défend l'ordre monarchique et chrétien.",
            },
            {
              q: "Quel facteur commun favorise les révolutions de 1848 ?",
              options: ["Le retour de Napoléon de l'île d'Elbe", "L'unité allemande réalisée par la Prusse", "La crise économique de 1846-1847", "La guerre de Crimée"],
              answer: 2,
              why: "Mauvaises récoltes, cherté du pain et chômage aggravent le mécontentement politique dans toute l'Europe.",
            },
          ],
          trap: "Confondre libéralisme et nationalisme, ou croire que l'ordre de Vienne s'effondre en 1830 : la plupart des mouvements sont réprimés et seules la Grèce et la Belgique obtiennent leur indépendance.",
          method: "Construisez une frise à deux lignes, « mouvements libéraux » et « mouvements nationaux », et marquez chaque événement d'un signe réussite ou échec : la logique de la période apparaît d'un coup d'œil.",
        },
      ],
    },
    /* ==================================================================== */
    /* HISTOIRE, THÈME 2 · LA FRANCE DANS L'EUROPE DES NATIONALITÉS :        */
    /* POLITIQUE ET SOCIÉTÉ (1848-1871)                                      */
    /* ==================================================================== */
    {
      id: 'france-nationalites',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'deuxieme-republique',
          title: 'La Deuxième République : l’entrée dans l’âge démocratique',
          minutes: 35,
          objectives: [
            "Expliquer la révolution de février 1848 et les grandes mesures du gouvernement provisoire, dont le suffrage universel masculin et l'abolition de l'esclavage.",
            "Analyser l'apprentissage du suffrage universel et les divisions de la République, des journées de Juin à l'élection de Louis-Napoléon Bonaparte.",
            "Expliquer comment la Deuxième République prend fin par le coup d'État du 2 décembre 1851.",
          ],
          course: [
            {
              heading: "Février 1848 : une république démocratique et sociale",
              paragraphs: [
                "À la fin de la monarchie de Juillet, seuls environ 250 000 hommes, les plus riches, peuvent voter. L'opposition réclame l'élargissement du suffrage par une campagne de banquets à partir de 1847, dans un contexte de crise économique (mauvaises récoltes, chômage). L'interdiction d'un banquet à Paris provoque l'insurrection des 22, 23 et 24 février 1848 : Louis-Philippe abdique et la République est proclamée à l'Hôtel de Ville.",
                "Le gouvernement provisoire rassemble des républicains modérés comme le poète Lamartine et des républicains plus avancés comme Ledru-Rollin, le socialiste Louis Blanc et l'ouvrier Albert. Lamartine fait garder le drapeau tricolore contre le drapeau rouge réclamé par une partie des insurgés. Le gouvernement proclame les libertés de presse et de réunion, abolit la peine de mort en matière politique et reconnaît le droit au travail : les Ateliers nationaux emploient les chômeurs parisiens à des travaux publics, et la journée de travail est limitée à 10 heures à Paris.",
                "Deux décisions font entrer la France dans l'âge démocratique. Le décret du 5 mars 1848 établit le suffrage universel masculin : tous les hommes de plus de 21 ans peuvent voter, et le corps électoral passe d'environ 250 000 à plus de 9 millions d'électeurs. Le décret du 27 avril 1848, préparé par Victor Schœlcher, abolit définitivement l'esclavage dans les colonies françaises ; environ 250 000 esclaves deviennent libres et citoyens.",
              ],
              box: { label: "Définition", text: "Suffrage universel masculin : droit de vote accordé à tous les hommes majeurs, sans condition de fortune. Il remplace en 1848 le suffrage censitaire, réservé à ceux qui payaient un certain montant d'impôt. Les femmes n'obtiendront le droit de vote qu'en 1944." },
            },
            {
              heading: "L'apprentissage du vote et la fracture de juin 1848",
              paragraphs: [
                "Le 23 avril 1848, jour de Pâques, les Français élisent une Assemblée constituante. La participation dépasse 80 %. Dans les campagnes, les électeurs se rendent souvent en cortège au chef-lieu de canton pour voter, guidés par le maire ou le curé. Le résultat surprend les républicains parisiens : la majorité des élus sont des républicains modérés et des notables conservateurs. La France rurale, majoritaire, se méfie des « rouges » de Paris et a mal accepté la hausse de 45 % des impôts directs (l'impôt des « 45 centimes ») décidée en mars.",
                "Pour l'Assemblée, les Ateliers nationaux coûtent cher et rassemblent des ouvriers jugés dangereux. Leur fermeture, décidée le 21 juin, déclenche l'insurrection des quartiers populaires de Paris : ce sont les journées de Juin (23-26 juin 1848). Le général Cavaignac écrase la révolte ; on compte plusieurs milliers de morts, et des milliers d'insurgés sont déportés en Algérie. La République démocratique et sociale de février est brisée : désormais, la peur du désordre domine chez les possédants et les ruraux.",
              ],
              box: { label: "À retenir", text: "Le suffrage universel ne garantit pas la victoire des républicains avancés : en 1848, la majorité des électeurs, surtout ruraux, vote pour l'ordre et pour les notables." },
            },
            {
              heading: "La Constitution de 1848 et l'élection de Louis-Napoléon Bonaparte",
              paragraphs: [
                "La Constitution du 4 novembre 1848 affirme que la République est « démocratique, une et indivisible » et qu'elle a pour principe la Liberté, l'Égalité et la Fraternité. Elle sépare strictement les pouvoirs : une Assemblée unique, élue pour trois ans, vote les lois ; un président de la République, élu pour quatre ans au suffrage universel masculin et non rééligible immédiatement, détient le pouvoir exécutif. Aucune procédure ne permet de régler un conflit entre les deux.",
                "Le 10 décembre 1848, Louis-Napoléon Bonaparte, neveu de Napoléon Ier, est élu président avec environ 74 % des suffrages exprimés, loin devant Cavaignac ; Lamartine obtient moins de 1 %. Son nom rappelle la gloire impériale, il rassure les partisans de l'ordre et séduit des paysans et des ouvriers. En mai 1849, les élections législatives donnent la majorité au parti de l'Ordre, qui rassemble les monarchistes, mais les démocrates-socialistes (la « Montagne ») progressent dans certaines campagnes.",
              ],
            },
            {
              heading: "D'une république conservatrice au coup d'État",
              paragraphs: [
                "L'Assemblée conservatrice restreint les libertés. La loi Falloux (15 mars 1850) renforce l'influence de l'Église dans l'enseignement. La loi électorale du 31 mai 1850 exige trois ans de résidence dans la commune pour voter : près de 3 millions d'hommes, surtout des ouvriers mobiles, perdent leur droit de vote. Les femmes restent exclues : en 1849, Jeanne Deroin tente symboliquement d'être candidate aux élections, sans succès.",
                "La Constitution interdit au président de se représenter en 1852 et l'Assemblée refuse de la réviser. Le 2 décembre 1851, jour anniversaire du sacre de Napoléon Ier et d'Austerlitz, Louis-Napoléon Bonaparte dissout l'Assemblée par un coup d'État et, habilement, rétablit le suffrage universel complet. Des résistances éclatent à Paris, où le député Baudin est tué sur une barricade, et dans plusieurs régions rurales du Centre et du Midi ; la répression entraîne environ 27 000 arrestations. Victor Hugo part en exil.",
                "Les 20 et 21 décembre 1851, un plébiscite approuve le coup d'État par environ 7,4 millions de oui contre 650 000 non. Une nouvelle Constitution (janvier 1852) concentre les pouvoirs entre les mains du président, et l'Empire est rétabli le 2 décembre 1852. La Deuxième République a duré moins de quatre ans, mais elle a installé durablement le suffrage universel masculin.",
              ],
              box: { label: "Repère", text: "22-24 février 1848 : révolution. 5 mars : suffrage universel masculin. 27 avril : abolition de l'esclavage. 23-26 juin : journées de Juin. 10 décembre 1848 : élection de Louis-Napoléon Bonaparte. 2 décembre 1851 : coup d'État. 2 décembre 1852 : rétablissement de l'Empire." },
            },
          ],
          keyPoints: [
            "Février 1848 : chute de Louis-Philippe et proclamation de la Deuxième République ; libertés, droit au travail, Ateliers nationaux.",
            "5 mars 1848 : suffrage universel masculin (plus de 9 millions d'électeurs) ; 27 avril 1848 : abolition de l'esclavage (Victor Schœlcher).",
            "Avril 1848 : une Assemblée modérée ; juin 1848 : la fermeture des Ateliers nationaux provoque une insurrection écrasée par Cavaignac.",
            "10 décembre 1848 : Louis-Napoléon Bonaparte élu président avec environ 74 % des voix ; le parti de l'Ordre domine.",
            "1850 : loi Falloux et restriction du suffrage ; 2 décembre 1851 : coup d'État, approuvé par plébiscite ; Empire rétabli en 1852.",
          ],
          example: {
            statement: "Pourquoi peut-on dire que la Deuxième République fait entrer la France dans l'âge démocratique, malgré son échec ?",
            solution: [
              "Définir l'âge démocratique : un régime où le pouvoir procède du vote du peuple, avec des libertés publiques.",
              "Premier argument : le suffrage universel masculin (5 mars 1848) fait passer le corps électoral d'environ 250 000 à plus de 9 millions d'hommes ; la participation d'avril 1848 dépasse 80 %.",
              "Deuxième argument : la République proclame des libertés (presse, réunion) et étend la citoyenneté aux anciens esclaves des colonies (27 avril 1848).",
              "Troisième argument : les Français apprennent le vote ; même le président est élu au suffrage universel (10 décembre 1848).",
              "Nuance : la République se divise (journées de Juin), restreint le suffrage en 1850, exclut les femmes et disparaît par le coup d'État de 1851.",
              "Réponse : l'échec du régime n'efface pas le suffrage universel masculin, que même Louis-Napoléon Bonaparte rétablit et utilise ; il devient une base de la vie politique française.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec la bonne date ou le bon nom : (a) le décret instaurant le suffrage universel masculin date du ... ; (b) l'abolition de l'esclavage est préparée par ... ; (c) la fermeture des Ateliers nationaux déclenche les ... ; (d) le premier président de la République élu au suffrage universel est ... ; (e) le coup d'État a lieu le ...",
              hint: "Relisez l'encadré Repère : chaque réponse s'y trouve.",
              solution: [
                "(a) 5 mars 1848.",
                "(b) Victor Schœlcher (décret du 27 avril 1848).",
                "(c) journées de Juin (23-26 juin 1848).",
                "(d) Louis-Napoléon Bonaparte, élu le 10 décembre 1848.",
                "(e) 2 décembre 1851.",
              ],
            },
            {
              level: 2,
              statement: "Résultats de l'élection présidentielle du 10 décembre 1848 (ordres de grandeur arrondis, en % des suffrages exprimés) : Louis-Napoléon Bonaparte 74 % ; Cavaignac 20 % ; Ledru-Rollin 5 % ; Lamartine moins de 1 %. (1) Présentez les candidats. (2) Expliquez la victoire de Louis-Napoléon Bonaparte. (3) Que révèle l'échec de Lamartine, figure de février 1848 ?",
              hint: "Pensez au prestige du nom Bonaparte, à la peur du désordre après juin 1848 et à l'image de Cavaignac chez les ouvriers.",
              solution: [
                "(1) Louis-Napoléon Bonaparte, neveu de Napoléon Ier ; Cavaignac, républicain modéré qui a écrasé les journées de Juin ; Ledru-Rollin, républicain démocrate et social ; Lamartine, poète et républicain modéré du gouvernement provisoire.",
                "(2) Louis-Napoléon bénéficie du prestige de son nom auprès des paysans ; il rassure les conservateurs, qui veulent l'ordre ; une partie des ouvriers vote pour lui par rejet de Cavaignac, le « boucher de Juin ».",
                "(3) L'échec de Lamartine montre que les républicains de février ont perdu le soutien populaire : la peur sociale de juin et la hausse des impôts ont détourné les électeurs de la République.",
                "Conclusion : le suffrage universel, dans une France rurale, profite d'abord à un homme qui incarne l'ordre et la gloire nationale.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « Comment la Deuxième République passe-t-elle de l'enthousiasme de février 1848 au coup d'État de décembre 1851 ? ». Rédigez l'introduction et un plan en trois parties chronologiques avec des exemples précis, puis une conclusion.",
              hint: "Trois temps : la république démocratique et sociale (février-juin 1848), la république conservatrice (juin 1848-1851), la fin de la République (décembre 1851-décembre 1852).",
              solution: [
                "Introduction : en février 1848, une révolution renverse Louis-Philippe et proclame la Deuxième République ; moins de quatre ans plus tard, le président Louis-Napoléon Bonaparte s'empare de tout le pouvoir. Problématique : comment expliquer ce retournement rapide ?",
                "I. Une république démocratique et sociale (février-juin 1848) : libertés, droit au travail et Ateliers nationaux ; suffrage universel masculin (5 mars) ; abolition de l'esclavage (27 avril).",
                "II. Une république divisée puis conservatrice (juin 1848-1851) : Assemblée modérée élue en avril ; journées de Juin écrasées par Cavaignac ; élection de Louis-Napoléon (10 décembre 1848) ; parti de l'Ordre majoritaire, loi Falloux et loi du 31 mai 1850 qui retire le vote à près de 3 millions d'hommes.",
                "III. La fin de la République : conflit entre le président et l'Assemblée sur la révision ; coup d'État du 2 décembre 1851 et répression ; plébiscite massif ; rétablissement de l'Empire le 2 décembre 1852.",
                "Conclusion : la peur sociale et les institutions mal équilibrées expliquent la chute de la République ; mais le suffrage universel masculin, conservé par le nouveau régime, est désormais un acquis.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements de la Deuxième République dans l'ordre chronologique.",
            items: [
              "Abdication de Louis-Philippe",
              "Décret instaurant le suffrage universel masculin",
              "Décret d'abolition de l'esclavage",
              "Journées de Juin à Paris",
              "Élection de Louis-Napoléon Bonaparte à la présidence",
              "Loi électorale qui exige trois ans de résidence",
              "Coup d'État du 2 décembre",
            ],
          },
          quiz: [
            {
              q: "Combien d'électeurs compte la France après le décret du 5 mars 1848 ?",
              options: ["Environ 100 000", "Environ 250 000", "Environ 2 millions", "Plus de 9 millions"],
              answer: 3,
              why: "Le suffrage universel masculin fait passer le corps électoral d'environ 250 000 à plus de 9 millions d'hommes.",
            },
            {
              q: "Quel événement provoque les journées de Juin 1848 ?",
              options: ["L'interdiction d'un banquet républicain", "L'abolition de l'esclavage dans les colonies", "La fermeture des Ateliers nationaux", "Le coup d'État de Louis-Napoléon"],
              answer: 2,
              why: "Les ouvriers parisiens privés de travail se soulèvent ; Cavaignac écrase l'insurrection.",
            },
            {
              q: "Qui prépare le décret d'abolition de l'esclavage de 1848 ?",
              options: ["Victor Schœlcher", "Alphonse de Lamartine", "Louis Blanc", "Alexandre Ledru-Rollin"],
              answer: 0,
              why: "Sous-secrétaire d'État aux colonies, Victor Schœlcher inspire le décret du 27 avril 1848.",
            },
            {
              q: "Que prévoit la Constitution de 1848 pour le président ?",
              options: ["Il est héréditaire", "Il est élu par les seuls propriétaires", "Il est désigné par l'Assemblée nationale pour une durée de sept ans", "Il est élu au suffrage universel pour quatre ans"],
              answer: 3,
              why: "Le président est élu au suffrage universel masculin pour quatre ans et ne peut être réélu immédiatement.",
            },
            {
              q: "Que fait la loi du 31 mai 1850 ?",
              options: ["Elle restreint le suffrage universel", "Elle accorde le droit de vote aux femmes majeures", "Elle rétablit l'esclavage", "Elle crée les Ateliers nationaux"],
              answer: 0,
              why: "En exigeant trois ans de résidence, elle retire le droit de vote à près de 3 millions d'hommes.",
            },
          ],
          trap: "Croire que le suffrage universel de 1848 concerne tous les adultes : il est seulement masculin, et les femmes n'obtiendront le droit de vote qu'en 1944.",
          method: "Retenez la Deuxième République en trois temps avec une date-clé chacun (5 mars 1848, juin 1848, 2 décembre 1851) : c'est déjà le plan d'une question problématisée.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'second-empire',
          title: 'Le Second Empire, un régime autoritaire qui se libéralise',
          minutes: 35,
          objectives: [
            "Caractériser le régime autoritaire du Second Empire : institutions, plébiscite, contrôle de l'opinion.",
            "Expliquer la modernisation économique et urbaine conduite par l'État (chemins de fer, banques, transformations de Paris).",
            "Analyser la libéralisation du régime à partir de 1860 et ses limites, jusqu'à la chute de 1870.",
          ],
          course: [
            {
              heading: "Un régime autoritaire fondé sur le suffrage universel",
              paragraphs: [
                "La Constitution du 14 janvier 1852, confirmée après le rétablissement de l'Empire (2 décembre 1852), donne l'essentiel du pouvoir à Napoléon III : il commande l'armée, nomme les ministres, qui ne sont responsables que devant lui, et a seul l'initiative des lois. Le Corps législatif, élu au suffrage universel masculin, vote les lois et le budget mais ne peut ni les proposer ni les amender librement ; le Sénat, nommé par l'empereur, veille à la Constitution.",
                "Le régime se réclame du peuple : c'est le bonapartisme, un pouvoir fort qui s'appuie directement sur le suffrage universel, par les plébiscites et les élections. Mais le vote est encadré : les préfets soutiennent des candidats officiels, qui bénéficient de l'aide de l'administration et d'affiches blanches, réservées aux documents officiels. La presse est soumise à l'autorisation préalable et peut être suspendue après des avertissements (décret du 17 février 1852).",
                "Les opposants sont surveillés, emprisonnés ou exilés. Victor Hugo, réfugié à Jersey puis à Guernesey, dénonce « Napoléon le Petit » et refuse l'amnistie de 1859. Après l'attentat d'Orsini contre l'empereur (janvier 1858), la loi de sûreté générale permet d'interner ou de déporter sans jugement d'anciens opposants. Le régime s'appuie sur l'armée, l'administration, l'Église catholique et les notables.",
              ],
              box: { label: "Définition", text: "Bonapartisme : courant politique qui associe un pouvoir exécutif fort, incarné par un homme, et l'appel direct au peuple par le suffrage universel et le plébiscite, au nom de l'ordre, de la prospérité et de la grandeur nationale." },
            },
            {
              heading: "L'Empire de la prospérité et de la modernisation",
              paragraphs: [
                "Influencé par les idées saint-simoniennes, qui font de l'industrie et du crédit les moteurs du progrès, Napoléon III encourage la modernisation. De nouvelles banques collectent l'épargne pour financer l'industrie : le Crédit mobilier des frères Pereire (1852), le Crédit lyonnais (1863), la Société générale (1864). Le réseau ferré passe d'environ 3 000 km en 1850 à environ 17 000 km en 1870, organisé en grandes compagnies en étoile autour de Paris.",
                "Préfet de la Seine de 1853 à 1870, le baron Haussmann transforme Paris : larges boulevards rectilignes, immeubles alignés en pierre de taille, égouts, adduction d'eau, parcs (bois de Boulogne, Buttes-Chaumont), gares et halles. Ces travaux assainissent la ville et facilitent la circulation, mais ils servent aussi l'ordre public (les larges avenues gênent les barricades) et repoussent les classes populaires vers l'est et les faubourgs. D'autres villes, comme Lyon et Marseille, suivent l'exemple.",
                "Le régime met en scène cette prospérité dans les Expositions universelles de Paris (1855 et 1867). En 1860, le traité de libre-échange avec le Royaume-Uni réduit les droits de douane, ce qui stimule la modernisation mais inquiète une partie des industriels. En 1869, l'impératrice Eugénie inaugure le canal de Suez, percé par Ferdinand de Lesseps.",
              ],
              box: { label: "À retenir", text: "Le Second Empire associe autoritarisme politique et modernisation économique : l'État encourage le crédit, les chemins de fer et les grands travaux, et cherche à gagner le soutien de la population par la prospérité." },
            },
            {
              heading: "Un empire qui se libéralise à partir de 1860",
              paragraphs: [
                "Le traité de libre-échange mécontente les industriels protectionnistes, et la politique italienne de l'empereur, qui menace le pouvoir du pape, lui aliène une partie des catholiques. Napoléon III cherche donc de nouveaux appuis. En 1860, il accorde au Corps législatif le droit de répondre au discours du trône et la publication de ses débats. En 1864, la loi Ollivier reconnaît le droit de grève en supprimant le délit de coalition : l'empereur espère gagner les ouvriers.",
                "En 1868, de nouvelles lois assouplissent le régime de la presse et autorisent les réunions publiques : journaux d'opposition et réunions se multiplient. Aux élections de 1869, les républicains et les libéraux progressent nettement, surtout dans les grandes villes ; à Paris, le jeune avocat Léon Gambetta est élu sur le programme républicain de Belleville. En janvier 1870, l'empereur appelle au gouvernement Émile Ollivier, ancien républicain rallié, puis le sénatus-consulte d'avril 1870 rend les ministres responsables devant les Chambres : le régime devient un empire parlementaire.",
                "Le 8 mai 1870, un plébiscite approuve ces réformes libérales par environ 7,3 millions de oui contre 1,5 million de non : l'Empire semble consolidé. Mais la guerre contre la Prusse, déclarée en juillet 1870, tourne au désastre. Le 2 septembre 1870, Napoléon III capitule à Sedan et il est fait prisonnier ; le 4 septembre, la République est proclamée à l'Hôtel de Ville de Paris.",
              ],
              box: { label: "Repère", text: "2 décembre 1852 : rétablissement de l'Empire. 1853-1870 : Haussmann préfet de la Seine. 1855 et 1867 : Expositions universelles. 1860 : traité de libre-échange et premières réformes libérales. 1864 : droit de grève. 1868 : lois sur la presse et les réunions. 8 mai 1870 : plébiscite. 2 septembre 1870 : Sedan. 4 septembre 1870 : proclamation de la République." },
            },
          ],
          keyPoints: [
            "Constitution de 1852 : pouvoir concentré entre les mains de l'empereur ; Corps législatif élu mais faible ; Sénat nommé.",
            "Bonapartisme : appel direct au peuple par le plébiscite, candidatures officielles, presse contrôlée, opposants exilés (Victor Hugo).",
            "Modernisation : banques (Crédit mobilier, Crédit lyonnais), chemins de fer (de 3 000 à 17 000 km), Paris d'Haussmann, Expositions universelles.",
            "À partir de 1860, libéralisation : droit de grève (1864), lois sur la presse et les réunions (1868), ministère Ollivier (1870).",
            "Plébiscite triomphal de mai 1870, mais défaite de Sedan (2 septembre 1870) et proclamation de la République le 4 septembre.",
          ],
          example: {
            statement: "Montrez que le Second Empire est à la fois un régime autoritaire et un régime qui s'appuie sur le suffrage universel.",
            solution: [
              "Rappeler l'origine du régime : un coup d'État (2 décembre 1851), approuvé par plébiscite, puis le rétablissement de l'Empire (2 décembre 1852).",
              "Aspect autoritaire : l'empereur concentre les pouvoirs, nomme les ministres et le Sénat, a seul l'initiative des lois ; la presse est censurée et les opposants sont exilés.",
              "Appui sur le suffrage universel : le Corps législatif est élu par tous les hommes majeurs, et les grands choix sont soumis au peuple par plébiscite (1851, 1852, 1870).",
              "Limite de ce suffrage : il est encadré par les candidatures officielles soutenues par les préfets et par le contrôle de l'information.",
              "Conclusion : le Second Empire est un régime autoritaire de type bonapartiste, qui cherche sa légitimité dans un suffrage universel contrôlé.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque élément, dites s'il relève de l'Empire autoritaire (1852-1860) ou de l'Empire libéral (1860-1870) : décret sur la presse de février 1852 ; droit de grève ; loi de sûreté générale ; lois sur la presse et les réunions de 1868 ; ministère Ollivier ; candidatures officielles systématiques.",
              hint: "Repérez les mesures qui contrôlent et celles qui accordent des libertés, puis vérifiez les dates.",
              solution: [
                "Empire autoritaire : décret sur la presse (17 février 1852) ; loi de sûreté générale (1858) ; candidatures officielles systématiques.",
                "Empire libéral : droit de grève (loi Ollivier, 1864) ; lois sur la presse et les réunions (1868) ; ministère Ollivier (janvier 1870).",
                "Remarque : les candidatures officielles ne disparaissent pas totalement en 1860, mais elles sont de plus en plus contestées.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en quoi les transformations de Paris par Haussmann répondent à plusieurs objectifs à la fois. Présentez trois objectifs et une conséquence sociale, avec des exemples précis.",
              hint: "Pensez à l'hygiène, à la circulation, à l'ordre public et au prestige du régime ; puis au prix des loyers.",
              solution: [
                "Objectif sanitaire : les égouts, l'adduction d'eau et la destruction de quartiers insalubres luttent contre les épidémies, comme le choléra.",
                "Objectif de circulation et économique : les boulevards relient les gares et les quartiers, facilitant le commerce ; les travaux donnent du travail à des milliers d'ouvriers du bâtiment.",
                "Objectif politique : les larges avenues rendent les barricades plus difficiles et facilitent le mouvement des troupes ; les monuments et les parcs magnifient le régime.",
                "Conséquence sociale : la hausse des loyers dans les nouveaux immeubles repousse les classes populaires vers l'est parisien et les communes voisines, ce qui accentue la ségrégation sociale.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « Le Second Empire : un régime autoritaire qui se libéralise (1852-1870) ? ». Rédigez une introduction et un plan détaillé en deux parties, chacune avec trois arguments, puis une conclusion qui explique la chute du régime.",
              hint: "Partie 1 : le régime autoritaire et ses appuis. Partie 2 : les raisons et les étapes de la libéralisation, ainsi que ses limites.",
              solution: [
                "Introduction : proclamé le 2 décembre 1852, un an après le coup d'État, le Second Empire de Napoléon III dure jusqu'en septembre 1870. Problématique : comment un régime fondé sur l'autorité d'un homme évolue-t-il vers plus de libertés, et cette évolution suffit-elle à le sauver ?",
                "I. Un régime autoritaire (1852-1860) : (1) une Constitution qui concentre les pouvoirs entre les mains de l'empereur ; (2) un suffrage universel encadré (plébiscites, candidatures officielles) ; (3) le contrôle de l'opinion et la répression (décret de 1852 sur la presse, exil de Victor Hugo, loi de sûreté générale de 1858).",
                "II. Une libéralisation progressive (1860-1870) : (1) ses causes, la perte d'appuis chez les industriels et les catholiques ; (2) ses étapes, droit d'adresse (1860), droit de grève (1864), lois sur la presse et les réunions (1868), ministère Ollivier (1870) ; (3) ses effets, la montée des oppositions aux élections de 1869, mais un plébiscite favorable en mai 1870.",
                "Conclusion : la libéralisation semble réussir en mai 1870, mais c'est la défaite militaire face à la Prusse (Sedan, 2 septembre 1870) qui fait tomber l'Empire ; la République est proclamée le 4 septembre 1870.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : le Second Empire.",
            statements: [
              { text: "Sous le Second Empire, le suffrage universel masculin est supprimé.", true: false, why: "Il est maintenu : le Corps législatif est élu et les plébiscites consultent tous les hommes majeurs." },
              { text: "Les candidatures officielles sont soutenues par les préfets.", true: true, why: "L'administration aide les candidats favorables au régime, ce qui encadre le vote." },
              { text: "Haussmann transforme Paris sous le Second Empire.", true: true, why: "Préfet de la Seine de 1853 à 1870, il perce boulevards, égouts et parcs." },
              { text: "Le droit de grève est reconnu en 1864.", true: true, why: "La loi Ollivier supprime le délit de coalition." },
              { text: "Le Second Empire devient de plus en plus autoritaire après 1860.", true: false, why: "C'est l'inverse : à partir de 1860, il se libéralise progressivement." },
              { text: "Le plébiscite de mai 1870 est un échec pour l'empereur.", true: false, why: "Il obtient environ 7,3 millions de oui ; c'est la défaite militaire qui fait tomber l'Empire." },
            ],
          },
          quiz: [
            {
              q: "Qui détient l'initiative des lois dans la Constitution de 1852 ?",
              options: ["Le Corps législatif", "Le Sénat", "Les préfets", "L'empereur"],
              answer: 3,
              why: "Seul l'empereur propose les lois ; le Corps législatif les vote sans pouvoir les proposer.",
            },
            {
              q: "Qu'est-ce qu'une candidature officielle ?",
              options: ["Un candidat soutenu par l'administration", "Un candidat élu sans adversaire par la loi", "Un candidat choisi par le pape", "Un candidat républicain autorisé par la presse"],
              answer: 0,
              why: "Les préfets aident les candidats favorables au régime : affiches blanches, pressions sur les maires.",
            },
            {
              q: "Quelle mesure de 1864 marque la libéralisation du régime ?",
              options: ["La loi de sûreté générale", "Le décret sur la presse", "Le droit de grève", "Le traité de Francfort"],
              answer: 2,
              why: "La loi Ollivier de 1864 supprime le délit de coalition et reconnaît ainsi le droit de grève.",
            },
            {
              q: "Quel est le rôle d'Haussmann sous le Second Empire ?",
              options: ["Ministre de la Guerre de Napoléon III", "Préfet de la Seine qui transforme Paris", "Banquier fondateur du Crédit mobilier", "Chef de l'opposition républicaine au Corps législatif"],
              answer: 1,
              why: "De 1853 à 1870, il dirige les grands travaux qui modernisent Paris.",
            },
            {
              q: "Quel événement met fin au Second Empire ?",
              options: ["Le plébiscite de mai 1870", "Les élections de 1869", "L'attentat d'Orsini", "La défaite de Sedan"],
              answer: 3,
              why: "Napoléon III capitule à Sedan le 2 septembre 1870 ; la République est proclamée le 4 septembre.",
            },
          ],
          trap: "Croire que le Second Empire supprime le suffrage universel : il le conserve et s'en sert (plébiscites, Corps législatif élu), mais il l'encadre par les candidatures officielles et le contrôle de la presse.",
          method: "Pour une question sur un régime politique, examinez toujours quatre points dans l'ordre : qui détient le pouvoir, qui vote, quelles libertés existent, sur qui le régime s'appuie.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'industrialisation',
          title: 'L’industrialisation transforme l’économie et la société',
          minutes: 35,
          objectives: [
            "Décrire l'accélération de l'industrialisation en France au milieu du XIXe siècle : énergie, transports, banques, entreprises.",
            "Expliquer les transformations de la société : essor de la bourgeoisie, naissance d'un monde ouvrier, monde rural encore majoritaire.",
            "Analyser les conditions de vie ouvrières et les réponses apportées (paternalisme, premières lois sociales, organisation ouvrière).",
          ],
          course: [
            {
              heading: "Une industrialisation qui s'accélère",
              paragraphs: [
                "L'industrialisation est le passage d'une économie dominée par l'agriculture et l'artisanat à une économie où l'industrie mécanisée, utilisant des machines et de nouvelles énergies, devient le moteur de la croissance. Commencée en Grande-Bretagne à la fin du XVIIIe siècle, elle s'accélère en France à partir des années 1840-1850, sans rupture brutale : la France garde longtemps de nombreux ateliers et du travail à domicile.",
                "Cette première industrialisation repose sur le charbon, la machine à vapeur et le fer. Les bassins houillers, comme celui du Nord-Pas-de-Calais ou de la Loire, sont en plein essor. La sidérurgie se développe en Lorraine (famille de Wendel) et au Creusot, où les frères Schneider dirigent depuis 1836 une grande entreprise qui produit fonte, rails, locomotives et machines à vapeur. Le textile reste la première industrie par le nombre d'emplois, dans le Nord (Lille, Roubaix, Tourcoing), en Alsace (Mulhouse) et à Lyon pour la soie.",
                "Le chemin de fer joue un rôle moteur : il consomme du fer et du charbon, réduit les temps de transport, unifie le marché national et favorise les échanges. Le réseau passe d'environ 3 000 km en 1850 à environ 17 000 km en 1870. Pour financer ces investissements, de nouvelles banques collectent l'épargne (Crédit mobilier, Crédit lyonnais, Société générale) et la loi de 1867 facilite la création de sociétés anonymes, qui réunissent les capitaux de nombreux actionnaires.",
              ],
              box: { label: "Définition", text: "Industrialisation : processus par lequel l'industrie mécanisée, fondée sur de nouvelles sources d'énergie et sur la concentration des moyens de production, devient l'activité motrice de l'économie et transforme la société." },
            },
            {
              heading: "La bourgeoisie, groupe dominant",
              paragraphs: [
                "L'industrialisation renforce la bourgeoisie, groupe social qui vit de la propriété du capital, des professions libérales ou du commerce. La grande bourgeoisie d'affaires (banquiers, industriels, négociants) concentre richesse et influence : Eugène Schneider est à la fois maître de forges et président du Corps législatif. Elle s'allie au pouvoir, investit dans l'industrie et les chemins de fer, et adopte un mode de vie qui affirme sa réussite (beaux quartiers, domestiques, éducation des enfants au lycée).",
                "Une petite et moyenne bourgeoisie de commerçants, d'artisans aisés, de fonctionnaires et d'employés se développe aussi. Elle valorise le travail, l'épargne, la famille et l'instruction comme moyens d'ascension sociale. Les grands magasins, comme le Bon Marché développé par Aristide Boucicaut à partir de 1852, illustrent une nouvelle culture de la consommation tournée vers ces classes moyennes urbaines.",
              ],
            },
            {
              heading: "Le monde ouvrier et la question sociale",
              paragraphs: [
                "Les ouvriers de l'industrie sont encore minoritaires dans la population active, mais leur nombre augmente. Beaucoup viennent des campagnes : c'est l'exode rural, qui reste progressif en France. Les conditions de travail sont dures : journées de 12 à 15 heures, salaires faibles, accidents, absence de protection contre la maladie et la vieillesse, discipline d'usine stricte. Les femmes et les enfants travaillent aussi, surtout dans le textile. Dès 1840, le médecin Louis René Villermé décrit la misère des ouvriers du textile dans une enquête célèbre.",
                "Les logements ouvriers sont souvent insalubres et surpeuplés, ce qui favorise les épidémies. La loi de 1841 interdit le travail des enfants de moins de 8 ans dans les entreprises de plus de 20 ouvriers, mais elle est peu appliquée faute d'inspecteurs. On appelle « question sociale » l'ensemble des problèmes posés par la misère ouvrière dans une société qui s'enrichit.",
                "Certains patrons répondent par le paternalisme : au Creusot, les Schneider construisent logements, écoles, hôpital et églises pour leurs ouvriers ; à Mulhouse, une cité ouvrière est créée en 1853. Ces avantages améliorent la vie des familles, mais ils servent aussi à fixer et à contrôler la main-d'œuvre. Les ouvriers, eux, s'organisent : sociétés de secours mutuel, participation à l'Association internationale des travailleurs fondée à Londres en 1864, grèves après la loi de 1864. En 1869, à La Ricamarie et à Aubin, la troupe tire sur des mineurs en grève.",
              ],
              box: { label: "Définition", text: "Paternalisme : politique patronale qui prend en charge la vie des ouvriers en dehors du travail (logement, école, santé, loisirs) pour les attacher à l'entreprise, améliorer leurs conditions de vie et prévenir les conflits sociaux." },
            },
            {
              heading: "Une France encore largement rurale",
              paragraphs: [
                "L'industrialisation ne fait pas disparaître la France paysanne. Vers 1850, environ la moitié des actifs travaillent encore dans l'agriculture, et en 1851 seul un Français sur quatre vit dans une commune urbaine. Les campagnes connaissent cependant des transformations : le chemin de fer ouvre de nouveaux marchés, certaines régions se spécialisent (vigne du Languedoc, élevage), et l'exode rural commence à vider les régions les plus pauvres.",
                "Le monde rural reste divisé entre grands propriétaires, nombreux petits paysans propriétaires, fermiers et métayers, et journaliers sans terre. Cette France rurale pèse lourd dans le suffrage universel : elle soutient majoritairement le Second Empire, qui veille à ses intérêts et à l'ordre social.",
              ],
              box: { label: "À retenir", text: "Au milieu du XIXe siècle, la France s'industrialise progressivement : la bourgeoisie s'affirme, le monde ouvrier grandit et s'organise, mais la majorité de la population reste rurale." },
            },
          ],
          keyPoints: [
            "L'industrialisation s'accélère en France dans les années 1850-1860 : charbon, vapeur, fer, textile.",
            "Le chemin de fer est le moteur de cette croissance (d'environ 3 000 à 17 000 km entre 1850 et 1870), financé par de nouvelles banques.",
            "La bourgeoisie d'affaires domine l'économie et la société ; les classes moyennes urbaines se développent.",
            "Les ouvriers vivent dans des conditions difficiles (longues journées, travail des enfants, logements insalubres) : c'est la question sociale.",
            "Réponses : paternalisme (Le Creusot), loi de 1841 sur le travail des enfants, droit de grève (1864), organisations ouvrières.",
            "La France reste majoritairement rurale : environ la moitié des actifs dans l'agriculture vers 1850.",
          ],
          example: {
            statement: "Expliquez pourquoi le chemin de fer est un moteur de l'industrialisation en France au milieu du XIXe siècle.",
            solution: [
              "Rappeler le contexte : le réseau ferré passe d'environ 3 000 km en 1850 à environ 17 000 km en 1870, encouragé par l'État sous le Second Empire.",
              "Effet sur l'industrie lourde : construire des voies et des locomotives exige d'énormes quantités de fer, d'acier et de charbon, ce qui stimule mines et sidérurgie (Le Creusot).",
              "Effet sur les échanges : le train réduit les coûts et les durées de transport, unifie le marché national et permet aux régions de se spécialiser.",
              "Effet financier : les compagnies ferroviaires mobilisent l'épargne de milliers d'actionnaires et favorisent l'essor des banques modernes.",
              "Effet social : le chemin de fer facilite l'exode rural et la circulation des personnes et des idées.",
              "Conclusion : par ses besoins en matériaux, ses effets sur les échanges et sur la finance, le chemin de fer entraîne l'ensemble de l'économie.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Définissez en une phrase chacun des termes suivants et donnez un exemple tiré du cours : (a) industrialisation ; (b) bourgeoisie ; (c) exode rural ; (d) paternalisme ; (e) question sociale.",
              hint: "Une bonne définition répond à « qu'est-ce que c'est ? » ; l'exemple doit être un lieu, une date ou un nom précis.",
              solution: [
                "(a) Industrialisation : passage à une économie dominée par l'industrie mécanisée ; exemple : l'essor de la sidérurgie au Creusot.",
                "(b) Bourgeoisie : groupe social qui vit de la propriété du capital, du commerce ou des professions libérales ; exemple : la famille Schneider ou les frères Pereire.",
                "(c) Exode rural : départ des habitants des campagnes vers les villes ; exemple : les paysans pauvres qui rejoignent les usines du Nord ou les chantiers de Paris.",
                "(d) Paternalisme : prise en charge de la vie des ouvriers par le patron ; exemple : logements, écoles et hôpital construits par les Schneider au Creusot.",
                "(e) Question sociale : ensemble des problèmes liés à la misère ouvrière ; exemple : l'enquête de Villermé (1840) sur les ouvriers du textile.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives inspirées d'une ville industrielle du Nord vers 1860 : un fileur adulte gagne 2 francs par jour, une ouvrière 1 franc, un enfant de 12 ans 0,50 franc ; la journée de travail dure 13 heures ; un pain de 2 kg coûte 0,70 franc et le loyer d'une pièce 6 francs par mois. (1) Calculez le revenu d'une famille où le père, la mère et un enfant travaillent 25 jours par mois. (2) Quelle part de ce revenu le loyer représente-t-il ? (3) Si la famille achète un pain de 2 kg par jour, combien dépense-t-elle en pain sur un mois de 30 jours, et quelle part du revenu cela représente-t-il ? (4) Expliquez pourquoi le travail des enfants est fréquent.",
              hint: "Additionnez les trois salaires journaliers, multipliez par 25, puis divisez le loyer par ce revenu.",
              solution: [
                "(1) Revenu journalier de la famille : 2 + 1 + 0,50 = 3,50 francs. Revenu mensuel : 3,50 × 25 = 87,50 francs.",
                "(2) Part du loyer : 6 ÷ 87,50 ≈ 0,069, soit environ 7 % du revenu.",
                "(3) Dépense en pain : 0,70 × 30 = 21 francs par mois ; 21 ÷ 87,50 = 0,24, soit 24 % du revenu, pour le seul pain.",
                "(4) Avec ces salaires, un seul revenu ne suffit pas à nourrir une famille : le pain seul absorbe près du quart des trois salaires réunis, et il faut encore payer le loyer, les autres aliments, le chauffage et les vêtements. Le salaire de l'enfant, même faible, est indispensable ; les patrons, eux, recherchent une main-d'œuvre bon marché, et la loi de 1841 est peu appliquée.",
                "Conclusion : le travail des enfants s'explique par la pauvreté des familles et par l'intérêt des employeurs, dans un contexte de faible protection légale.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « Comment l'industrialisation transforme-t-elle l'économie et la société françaises entre 1848 et 1870 ? ». Rédigez l'introduction et un plan en trois parties avec des exemples précis, puis une conclusion nuancée.",
              hint: "Une partie sur l'économie, une sur les groupes sociaux, une sur la question sociale ; nuancez avec le poids du monde rural.",
              solution: [
                "Introduction : entre la révolution de 1848 et la chute du Second Empire, la France connaît une forte croissance industrielle, encouragée par l'État. Problématique : quelles mutations économiques et sociales l'industrialisation provoque-t-elle, et jusqu'où transforme-t-elle le pays ?",
                "I. Une économie transformée : charbon, vapeur et fer (Nord-Pas-de-Calais, Lorraine, Le Creusot) ; chemins de fer (de 3 000 à 17 000 km) ; nouvelles banques et sociétés anonymes (1867) ; libre-échange (1860).",
                "II. Une société recomposée : affirmation de la grande bourgeoisie d'affaires (Schneider, Pereire) et des classes moyennes ; croissance du monde ouvrier nourrie par l'exode rural ; villes transformées (Paris d'Haussmann).",
                "III. La question sociale : conditions de travail et de logement difficiles, travail des enfants malgré la loi de 1841 ; paternalisme patronal ; organisation ouvrière (droit de grève en 1864, Internationale, grèves de 1869).",
                "Conclusion : l'industrialisation transforme profondément l'économie et fait naître de nouveaux groupes sociaux, mais elle est progressive : la France de 1870 reste majoritairement rurale et paysanne.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque nom ou lieu à son rôle dans l'industrialisation.",
            pairs: [
              { left: "Le Creusot", right: "Grande entreprise sidérurgique des Schneider" },
              { left: "Frères Pereire", right: "Fondateurs du Crédit mobilier en 1852" },
              { left: "Villermé", right: "Médecin auteur d'une enquête sur les ouvriers du textile" },
              { left: "Aristide Boucicaut", right: "Développe le grand magasin du Bon Marché" },
              { left: "Mulhouse", right: "Ville textile où naît une cité ouvrière en 1853" },
              { left: "Loi de 1841", right: "Limite le travail des enfants dans les entreprises" },
            ],
          },
          quiz: [
            {
              q: "Quelle source d'énergie domine la première industrialisation ?",
              options: ["Le pétrole", "L'électricité", "Le charbon", "Le gaz naturel"],
              answer: 2,
              why: "Le charbon alimente les machines à vapeur, les locomotives et les hauts-fourneaux.",
            },
            {
              q: "Combien de kilomètres de voies ferrées la France compte-t-elle environ en 1870 ?",
              options: ["17 000 km", "3 000 km", "1 000 km", "50 000 km"],
              answer: 0,
              why: "Le réseau passe d'environ 3 000 km en 1850 à environ 17 000 km en 1870.",
            },
            {
              q: "Qu'est-ce que le paternalisme ?",
              options: ["Un syndicat ouvrier", "Une loi qui organise l'autorité du père dans la famille", "La prise en charge des ouvriers par le patron", "Une banque d'affaires"],
              answer: 2,
              why: "Logement, école ou santé sont fournis par le patron pour attacher et encadrer la main-d'œuvre.",
            },
            {
              q: "Que prévoit la loi de 1841 ?",
              options: ["Le droit de grève", "L'interdiction du travail avant 8 ans dans certaines entreprises", "La limitation de la journée de travail à 8 heures pour tous les salariés", "Les congés payés"],
              answer: 1,
              why: "Elle interdit d'employer des enfants de moins de 8 ans dans les entreprises de plus de 20 ouvriers, mais elle est mal appliquée.",
            },
            {
              q: "Vers 1850, quelle part des actifs travaille dans l'agriculture ?",
              options: ["Moins de 10 %", "Environ un quart", "Environ les trois quarts", "Environ la moitié"],
              answer: 3,
              why: "La France s'industrialise lentement : vers 1850, l'agriculture occupe encore environ la moitié des actifs.",
            },
          ],
          trap: "Imaginer une France entièrement transformée par l'usine en 1870 : l'industrialisation y est progressive, l'artisanat et le travail à domicile persistent, et la majorité de la population reste rurale.",
          method: "Organisez vos connaissances en trois niveaux, l'économie (énergies, transports, banques), la société (bourgeoisie, ouvriers, paysans) et les réponses (patrons, État, ouvriers), avec un exemple localisé pour chacun.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'nouveaux-etats-europe',
          title: 'La France et la construction de l’Italie et de l’Allemagne',
          minutes: 35,
          objectives: [
            "Expliquer le rôle de la France de Napoléon III dans l'unité italienne, de Plombières au rattachement de Nice et de la Savoie.",
            "Décrire les étapes de l'unité allemande réalisée par la Prusse de Bismarck, par la guerre et la diplomatie.",
            "Analyser les conséquences de la guerre franco-allemande de 1870-1871 pour la France et pour l'Europe.",
          ],
          course: [
            {
              heading: "Le principe des nationalités et la politique de Napoléon III",
              paragraphs: [
                "Au milieu du XIXe siècle, l'Italie et l'Allemagne ne sont pas des États unifiés. L'Italie est divisée en plusieurs États, dont le royaume de Piémont-Sardaigne, les États du pape et le royaume des Deux-Siciles, tandis que la Lombardie et la Vénétie appartiennent à l'Autriche. L'Allemagne forme une Confédération germanique dominée par l'Autriche et la Prusse, mais l'union douanière du Zollverein (1834), dirigée par la Prusse, a déjà rapproché les économies.",
                "Napoléon III se dit favorable au principe des nationalités, selon lequel chaque peuple doit pouvoir former un État. Il veut aussi effacer l'humiliation de 1815, affaiblir l'Autriche et agrandir la France. Cette politique, qui fait de la France un acteur majeur de la recomposition de l'Europe, comporte un risque : contribuer à la naissance de voisins puissants.",
              ],
              box: { label: "Définition", text: "Principe des nationalités : idée selon laquelle chaque nation, définie par une langue, une culture et une histoire communes ou par la volonté de vivre ensemble, a le droit de former un État indépendant." },
            },
            {
              heading: "L'unité italienne avec l'aide de la France",
              paragraphs: [
                "Le Risorgimento (la « renaissance ») désigne le mouvement d'unification de l'Italie. Il réunit des républicains comme Mazzini, des monarchistes libéraux comme Cavour, président du Conseil du royaume de Piémont-Sardaigne à partir de 1852, et des combattants populaires comme Garibaldi. Cavour comprend que le Piémont ne peut vaincre l'Autriche seul : en 1858, à Plombières, il obtient le soutien de Napoléon III contre la promesse de céder Nice et la Savoie.",
                "En 1859, l'armée franco-piémontaise bat les Autrichiens à Magenta puis à Solferino (24 juin 1859). Le carnage de Solferino inspire au Suisse Henri Dunant la création de la Croix-Rouge (1863). Napoléon III signe rapidement l'armistice de Villafranca : le Piémont obtient la Lombardie. En 1860, les États d'Italie centrale votent leur rattachement au Piémont, et la France reçoit Nice et la Savoie par le traité de Turin, confirmé par des plébiscites massifs en avril 1860.",
                "La même année, l'expédition des Mille de Garibaldi conquiert la Sicile et Naples, qu'il remet au roi de Piémont. Le royaume d'Italie est proclamé le 17 mars 1861, avec Victor-Emmanuel II pour roi. La Vénétie est rattachée en 1866, après la défaite de l'Autriche face à la Prusse. Rome, protégée par une garnison française qui défend le pape, n'est prise par les troupes italiennes que le 20 septembre 1870, après le départ des Français ; elle devient la capitale en 1871.",
              ],
            },
            {
              heading: "L'unité allemande par « le fer et le sang »",
              paragraphs: [
                "En 1862, le roi de Prusse Guillaume Ier nomme Otto von Bismarck ministre-président. Celui-ci affirme que les grandes questions de l'époque ne se régleront pas par des discours et des votes de majorité, mais « par le fer et par le sang ». Il renforce l'armée prussienne et mène une politique de puissance. En 1864, la Prusse et l'Autriche enlèvent au Danemark les duchés de Schleswig et de Holstein.",
                "En 1866, Bismarck se retourne contre l'Autriche, vaincue à Sadowa (3 juillet 1866). La Confédération germanique est dissoute, l'Autriche est exclue des affaires allemandes et la Prusse forme en 1867 la Confédération de l'Allemagne du Nord. Napoléon III, resté neutre, espérait des compensations territoriales, qu'il n'obtient pas. Les États du Sud (Bavière, Wurtemberg, Bade) restent hors de la confédération, mais signent des alliances militaires secrètes avec la Prusse.",
                "En juillet 1870, une querelle sur la candidature d'un prince Hohenzollern au trône d'Espagne sert de prétexte. Bismarck publie une version raccourcie et blessante d'une dépêche du roi, la dépêche d'Ems (13 juillet 1870). Le 19 juillet, la France déclare la guerre à la Prusse : les États du Sud se rangent derrière celle-ci. La guerre réalise l'unité allemande.",
              ],
              box: { label: "Repère", text: "1858 : entrevue de Plombières. 1859 : Magenta et Solferino. 1860 : Nice et la Savoie françaises. 17 mars 1861 : royaume d'Italie. 3 juillet 1866 : Sadowa. 19 juillet 1870 : déclaration de guerre. 2 septembre 1870 : Sedan. 18 janvier 1871 : proclamation de l'Empire allemand. 10 mai 1871 : traité de Francfort." },
            },
            {
              heading: "La défaite française et ses conséquences",
              paragraphs: [
                "L'armée française, mal préparée, est rapidement battue. Le 2 septembre 1870, Napoléon III capitule à Sedan avec son armée ; le 4 septembre, la République est proclamée à Paris. Le gouvernement de la Défense nationale poursuit la guerre : Gambetta quitte Paris assiégé en ballon pour organiser des armées en province, mais Metz capitule en octobre et Paris, affamé, signe l'armistice le 28 janvier 1871.",
                "Le 18 janvier 1871, dans la galerie des Glaces du château de Versailles, le roi de Prusse est proclamé empereur allemand (Kaiser) : l'Empire allemand, le IIe Reich, naît sur le sol français, ce que les Français ressentent comme une humiliation. Par le traité de Francfort (10 mai 1871), la France cède l'Alsace, sauf le territoire de Belfort, et une partie de la Lorraine (l'actuelle Moselle) ; elle doit verser une indemnité de 5 milliards de francs-or et subir une occupation jusqu'à son paiement complet, achevé en 1873.",
                "Ces événements bouleversent l'équilibre européen. L'Allemagne unifiée devient la première puissance militaire et bientôt industrielle du continent. En France, la perte de l'Alsace-Moselle nourrit un désir de revanche et un patriotisme qui marqueront la Troisième République. Le traumatisme de la défaite est aussi à l'origine de la Commune de Paris (mars-mai 1871).",
              ],
              box: { label: "À retenir", text: "La France a favorisé l'unité italienne, qui lui rapporte Nice et la Savoie (1860), mais elle a sous-estimé la Prusse : l'unité allemande se fait contre elle, en 1870-1871, et lui coûte l'Alsace-Moselle." },
            },
          ],
          keyPoints: [
            "Napoléon III défend le principe des nationalités, mais aussi les intérêts et l'agrandissement de la France.",
            "Unité italienne : Plombières (1858), victoires franco-piémontaises de 1859, Nice et Savoie françaises (1860), royaume d'Italie (1861), Rome capitale (1871).",
            "Unité allemande par la Prusse de Bismarck : guerre contre le Danemark (1864), Sadowa contre l'Autriche (1866), guerre contre la France (1870-1871).",
            "18 janvier 1871 : proclamation de l'Empire allemand à Versailles.",
            "Traité de Francfort (10 mai 1871) : perte de l'Alsace (sauf Belfort) et de la Moselle, indemnité de 5 milliards de francs-or.",
          ],
          example: {
            statement: "Comparez le rôle de la France dans l'unité italienne et dans l'unité allemande.",
            solution: [
              "Point de départ : dans les deux cas, Napoléon III se réclame du principe des nationalités, mais il cherche aussi à affaiblir l'Autriche et à agrandir la France.",
              "Unité italienne, la France alliée : après l'accord de Plombières (1858), l'armée française combat avec le Piémont à Magenta et Solferino (1859).",
              "Bénéfice pour la France : elle obtient Nice et la Savoie (traité de Turin, 1860, confirmé par plébiscites).",
              "Unité allemande, la France adversaire : neutre en 1866, Napoléon III n'obtient aucune compensation ; en 1870, la guerre qu'il déclare permet à Bismarck de rallier les États du Sud.",
              "Coût pour la France : défaite de Sedan, proclamation de l'Empire allemand à Versailles (18 janvier 1871) et perte de l'Alsace-Moselle (traité de Francfort).",
              "Conclusion : la France est actrice de l'unité italienne et en profite, mais elle subit l'unité allemande, qui se construit contre elle.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces événements en deux colonnes, « unité italienne » et « unité allemande », puis rangez chaque colonne dans l'ordre chronologique : Sadowa ; expédition des Mille ; proclamation de l'Empire à Versailles ; Solferino ; guerre des Duchés ; prise de Rome ; dépêche d'Ems ; proclamation du royaume d'Italie.",
              hint: "Associez chaque événement à un acteur (Cavour, Garibaldi, Bismarck) et à une date.",
              solution: [
                "Unité italienne : Solferino (1859) ; expédition des Mille (1860) ; proclamation du royaume d'Italie (1861) ; prise de Rome (1870).",
                "Unité allemande : guerre des Duchés (1864) ; Sadowa (1866) ; dépêche d'Ems (1870) ; proclamation de l'Empire à Versailles (1871).",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi la proclamation de l'Empire allemand dans la galerie des Glaces de Versailles, le 18 janvier 1871, est un symbole fort pour les Allemands comme pour les Français.",
              hint: "Interrogez le lieu (Versailles, palais de Louis XIV), la date (avant même la fin de la guerre) et ce que ressentent les deux peuples.",
              solution: [
                "Pour les Allemands : l'unité, rêvée depuis 1848, est enfin réalisée ; elle naît d'une victoire militaire commune de tous les États allemands, dirigés par la Prusse.",
                "Le lieu : Versailles est le palais de Louis XIV, symbole de la puissance française ; y proclamer l'Empire montre le renversement du rapport de force en Europe.",
                "Pour les Français : la cérémonie a lieu dans un pays occupé, alors que Paris est encore assiégé ; elle est vécue comme une humiliation nationale.",
                "Conséquence : cette humiliation, aggravée par la perte de l'Alsace-Moselle, nourrit l'esprit de revanche en France ; en 1919, les vainqueurs feront signer le traité de paix à l'Allemagne dans la même galerie des Glaces.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « Quel rôle la France joue-t-elle dans la construction de nouveaux États en Europe entre 1848 et 1871 ? ». Rédigez une introduction, un plan en deux parties avec trois arguments datés chacune, et une conclusion.",
              hint: "Opposez une France actrice et bénéficiaire (Italie) à une France qui subit et paie (Allemagne).",
              solution: [
                "Introduction : au milieu du XIXe siècle, l'Italie et l'Allemagne se constituent en États-nations par la guerre et la diplomatie. La France de Napoléon III se réclame du principe des nationalités. Problématique : la France est-elle l'artisan ou la victime de ces recompositions ?",
                "I. Une France actrice de l'unité italienne : (1) l'entrevue de Plombières (1858) scelle l'alliance avec Cavour ; (2) les victoires de Magenta et de Solferino (1859) chassent l'Autriche de Lombardie ; (3) la France gagne Nice et la Savoie (1860), mais sa garnison protège Rome jusqu'en 1870, ce qui retarde l'achèvement de l'unité.",
                "II. Une France qui subit l'unité allemande : (1) neutre en 1866, Napoléon III laisse la Prusse vaincre l'Autriche à Sadowa sans obtenir de compensation ; (2) piégée par la dépêche d'Ems, la France déclare la guerre le 19 juillet 1870 et est battue à Sedan ; (3) l'Empire allemand est proclamé à Versailles (18 janvier 1871) et le traité de Francfort lui enlève l'Alsace-Moselle.",
                "Conclusion : la France a contribué à l'Europe des nationalités, mais elle en sort affaiblie : face à une Allemagne puissante, la Troisième République naît dans la défaite et dans l'espoir de recouvrer l'Alsace-Moselle.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces étapes de la construction de l'Italie et de l'Allemagne.",
            items: [
              "Entrevue de Plombières entre Napoléon III et Cavour",
              "Bataille de Solferino",
              "Proclamation du royaume d'Italie",
              "Victoire prussienne de Sadowa sur l'Autriche",
              "Capitulation de Napoléon III à Sedan",
              "Proclamation de l'Empire allemand à Versailles",
              "Traité de Francfort",
            ],
          },
          quiz: [
            {
              q: "Que reçoit la France en échange de son aide au Piémont ?",
              options: ["L'Alsace et la Lorraine", "La Lombardie et la Vénétie", "Nice et la Savoie", "La Corse et la Sardaigne"],
              answer: 2,
              why: "Le traité de Turin (1860), confirmé par plébiscites, rattache Nice et la Savoie à la France.",
            },
            {
              q: "Quel personnage conquiert la Sicile et Naples en 1860 ?",
              options: ["Cavour", "Garibaldi", "Mazzini", "Victor-Emmanuel II"],
              answer: 1,
              why: "Avec l'expédition des Mille, Garibaldi conquiert le Sud avant de le remettre au roi de Piémont.",
            },
            {
              q: "Quelle bataille exclut l'Autriche des affaires allemandes en 1866 ?",
              options: ["Sadowa", "Sedan", "Solferino", "Magenta"],
              answer: 0,
              why: "La victoire prussienne de Sadowa (3 juillet 1866) permet à la Prusse de dominer l'Allemagne du Nord.",
            },
            {
              q: "Où l'Empire allemand est-il proclamé le 18 janvier 1871 ?",
              options: ["Au Reichstag de Berlin", "À Francfort", "À Sedan", "À Versailles"],
              answer: 3,
              why: "Dans la galerie des Glaces du château de Versailles, symbole de la puissance française.",
            },
            {
              q: "Que perd la France au traité de Francfort ?",
              options: ["Nice et la Savoie", "L'Alsace et la Moselle", "Toute la Lorraine et Belfort", "La Corse"],
              answer: 1,
              why: "Elle cède l'Alsace, sauf Belfort, et une partie de la Lorraine (l'actuelle Moselle), et paie 5 milliards de francs-or.",
            },
          ],
          trap: "Croire que la France perd toute l'Alsace et toute la Lorraine en 1871 : le territoire de Belfort reste français, et seule une partie de la Lorraine, l'actuelle Moselle, est annexée.",
          method: "Pour chaque unité, construisez une frise avec trois lignes, guerres, accords diplomatiques et rôle de la France : vous verrez immédiatement le contraste entre l'Italie et l'Allemagne.",
        },
      ],
    },
    /* ==================================================================== */
    /* HISTOIRE, THÈME 3 · LA TROISIÈME RÉPUBLIQUE AVANT 1914 : UN RÉGIME    */
    /* POLITIQUE, UN EMPIRE COLONIAL                                         */
    /* ==================================================================== */
    {
      id: 'troisieme-republique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'projet-republicain',
          title: 'La mise en œuvre du projet républicain',
          minutes: 35,
          objectives: [
            "Expliquer comment la République s'enracine entre 1870 et 1879, de la Commune à la victoire des républicains.",
            "Identifier les grandes lois républicaines (libertés publiques, école gratuite, obligatoire et laïque) et les symboles du régime.",
            "Analyser les crises que traverse la République (boulangisme, affaire Dreyfus) et la séparation des Églises et de l'État en 1905.",
          ],
          course: [
            {
              heading: "1870-1879 : une République incertaine qui s'impose",
              paragraphs: [
                "La République est proclamée le 4 septembre 1870, après la défaite de Sedan. Mais les élections de février 1871, organisées pour décider de la paix, donnent une majorité de monarchistes, favorables à la fin de la guerre ; Adolphe Thiers est placé à la tête du pouvoir exécutif. À Paris, le peuple, patriote et républicain, refuse la défaite et se méfie de cette Assemblée réunie à Versailles. Le 18 mars 1871, la tentative du gouvernement de reprendre les canons de la garde nationale à Montmartre déclenche l'insurrection : c'est la Commune de Paris.",
                "La Commune, élue fin mars, prend des mesures démocratiques et sociales : séparation de l'Église et de l'État, mesures en faveur des ouvriers, rôle actif de femmes comme Louise Michel. Le gouvernement de Thiers la fait écraser par l'armée lors de la « semaine sanglante » (21-28 mai 1871) : plusieurs milliers de morts, dont le nombre fait encore débat entre historiens, des dizaines de milliers d'arrestations et des déportations en Nouvelle-Calédonie. La répression rassure les conservateurs : la République peut être un régime d'ordre. Thiers déclare en 1872 que « la République sera conservatrice ou ne sera pas ».",
                "Les monarchistes, divisés entre légitimistes et orléanistes, échouent à restaurer la monarchie, d'autant que le comte de Chambord refuse le drapeau tricolore. Le président Mac Mahon (1873-1879) mène une politique d'« Ordre moral ». En 1875, l'amendement Wallon, voté à une voix de majorité, mentionne l'élection du « président de la République » : les lois constitutionnelles de 1875 fondent le régime. Lors de la crise du 16 mai 1877, Mac Mahon dissout la Chambre républicaine, mais les électeurs renvoient une majorité républicaine ; Gambetta avait prévenu qu'il faudrait alors « se soumettre ou se démettre ». Après la victoire des républicains au Sénat, Mac Mahon démissionne en janvier 1879.",
              ],
              box: { label: "Définition", text: "Lois constitutionnelles de 1875 : elles établissent une république parlementaire. Le Parlement comprend une Chambre des députés élue au suffrage universel masculin et un Sénat élu au suffrage indirect ; réunies, les deux chambres élisent le président de la République pour sept ans. Les ministres sont responsables devant les Chambres." },
            },
            {
              heading: "Les républicains au pouvoir : symboles et libertés",
              paragraphs: [
                "Les républicains opportunistes, comme Gambetta et Jules Ferry, veulent enraciner le régime progressivement. Ils lui donnent des symboles : La Marseillaise devient l'hymne national (1879), le 14 juillet la fête nationale (1880), la devise « Liberté, Égalité, Fraternité » est inscrite au fronton des bâtiments publics, et les bustes de Marianne entrent dans les mairies. Les Chambres reviennent de Versailles à Paris (1879) et les communards sont amnistiés (1880).",
                "De grandes lois garantissent les libertés fondamentales : liberté de réunion (30 juin 1881) et liberté de la presse (29 juillet 1881) ; liberté syndicale (loi Waldeck-Rousseau, 21 mars 1884) ; loi municipale du 5 avril 1884, qui confirme l'élection des maires par les conseils municipaux ; rétablissement du divorce (1884) ; liberté d'association (1er juillet 1901). La République se veut un régime de libertés, fondé sur le suffrage universel masculin et sur la souveraineté du Parlement.",
              ],
              box: { label: "Repère", text: "4 septembre 1870 : proclamation de la République. 18 mars-28 mai 1871 : Commune de Paris. 1875 : lois constitutionnelles. 1879 : démission de Mac Mahon. 1881-1882 : lois Ferry sur l'école. 1884 : loi sur les syndicats. 1894-1906 : affaire Dreyfus. 9 décembre 1905 : loi de séparation des Églises et de l'État." },
            },
            {
              heading: "L'école de la République",
              paragraphs: [
                "Pour Jules Ferry, ministre de l'Instruction publique, l'école doit former des citoyens capables de voter de façon éclairée, attachés à la République et à la patrie, et libérés de l'influence de l'Église, que les républicains jugent hostile au régime. La loi du 16 juin 1881 rend l'école primaire publique gratuite ; la loi du 28 mars 1882 rend l'instruction obligatoire pour les filles et les garçons de 6 à 13 ans et laïcise les programmes : l'instruction morale et civique remplace le catéchisme. En 1886, la loi Goblet confie l'enseignement public à un personnel exclusivement laïque.",
                "Les instituteurs, formés dans les écoles normales de chaque département et parfois appelés plus tard les « hussards noirs » de la République, diffusent la langue française, le calcul, l'histoire nationale et le patriotisme, dans le souvenir de l'Alsace-Moselle perdue. La loi Camille Sée (1880) crée des lycées publics de jeunes filles. L'école contribue à unifier culturellement le pays et à faire aimer la République dans les campagnes.",
              ],
              box: { label: "À retenir", text: "Lois Ferry : l'école primaire publique devient gratuite (1881), obligatoire de 6 à 13 ans et laïque (1882). Laïcité : neutralité de l'État et de ses services à l'égard des religions, qui garantit la liberté de conscience de chacun." },
            },
            {
              heading: "Une République contestée qui se défend",
              paragraphs: [
                "La République affronte des crises. De 1886 à 1889, le général Boulanger, ancien ministre de la Guerre populaire pour ses discours de revanche contre l'Allemagne, rassemble des mécontents de droite et de gauche contre le régime parlementaire ; après son élection triomphale à Paris en janvier 1889, il renonce à tenter un coup de force et s'enfuit. En 1892-1893, le scandale de Panama, où des parlementaires ont été achetés, nourrit l'antiparlementarisme. Des attentats anarchistes frappent le pays et le président Sadi Carnot est assassiné en 1894.",
                "L'affaire Dreyfus divise profondément la France. En 1894, le capitaine Alfred Dreyfus, officier juif, est condamné à tort pour espionnage au profit de l'Allemagne et déporté en Guyane. Malgré la découverte du vrai coupable, Esterhazy, acquitté en 1898, l'armée refuse de reconnaître l'erreur. Le 13 janvier 1898, Émile Zola publie « J'accuse... ! » dans le journal L'Aurore. Les dreyfusards, réunis dans la Ligue des droits de l'homme, défendent la justice et la vérité ; les antidreyfusards, souvent nationalistes et antisémites, placent l'honneur de l'armée au-dessus de tout. Dreyfus est gracié en 1899 et réhabilité en 1906.",
                "L'Affaire renforce la gauche républicaine, qui mène une politique anticléricale. La loi de séparation des Églises et de l'État, du 9 décembre 1905, préparée par Aristide Briand, garantit la liberté de conscience et le libre exercice des cultes (article 1er) et dispose que la République « ne reconnaît, ne salarie ni ne subventionne aucun culte » (article 2). Le Concordat de 1801 est abrogé. Les inventaires des biens d'Église provoquent des incidents en 1906, puis l'apaisement s'installe.",
              ],
            },
          ],
          keyPoints: [
            "La République, proclamée le 4 septembre 1870, s'impose lentement : Commune écrasée (mai 1871), lois constitutionnelles (1875), démission de Mac Mahon (1879).",
            "Symboles républicains : La Marseillaise (1879), le 14 juillet (1880), la devise, Marianne.",
            "Libertés : réunion et presse (1881), syndicats (1884), associations (1901).",
            "Lois Ferry : école primaire gratuite (1881), obligatoire de 6 à 13 ans et laïque (1882), pour former des citoyens.",
            "Crises : boulangisme (1886-1889), Panama (1892), affaire Dreyfus (1894-1906), qui oppose dreyfusards et antidreyfusards.",
            "9 décembre 1905 : séparation des Églises et de l'État, liberté de conscience, fin du Concordat.",
          ],
          example: {
            statement: "Expliquez pourquoi l'école est au cœur du projet républicain dans les années 1880.",
            solution: [
              "Rappeler le contexte : les républicains ont conquis le pouvoir en 1879 et veulent enraciner durablement le régime dans un pays encore rural et marqué par l'influence de l'Église.",
              "Former des citoyens : dans un régime de suffrage universel, l'électeur doit savoir lire, s'informer et juger ; l'école gratuite (1881) et obligatoire (1882) donne cette instruction à tous.",
              "Former des républicains et des patriotes : l'instruction morale et civique, l'histoire nationale et le souvenir de l'Alsace-Moselle attachent les enfants à la République et à la patrie.",
              "Laïciser la société : les programmes laïques (1882) et le personnel laïque (1886) soustraient l'école publique à l'Église, jugée hostile au régime.",
              "Unifier la nation : la diffusion du français et d'une culture commune rapproche les régions.",
              "Conclusion : l'école est l'instrument principal par lequel la République forme ses citoyens et s'enracine dans le pays.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque loi à sa date et à son contenu : loi sur la liberté de la presse ; loi Ferry sur l'obligation scolaire ; loi Waldeck-Rousseau ; loi sur les associations ; loi de séparation des Églises et de l'État. Dates possibles : 1881, 1882, 1884, 1901, 1905.",
              hint: "Les deux lois scolaires de Ferry se suivent (1881 puis 1882), mais une seule est demandée ici.",
              solution: [
                "Liberté de la presse : 29 juillet 1881 ; elle supprime l'autorisation préalable et la censure.",
                "Loi Ferry sur l'obligation scolaire : 28 mars 1882 ; instruction obligatoire de 6 à 13 ans et programmes laïques.",
                "Loi Waldeck-Rousseau : 21 mars 1884 ; elle autorise les syndicats professionnels.",
                "Loi sur les associations : 1er juillet 1901 ; liberté de créer une association sans autorisation préalable (les congrégations religieuses restent soumises à autorisation).",
                "Loi de séparation : 9 décembre 1905 ; liberté de conscience, fin du Concordat, l'État ne reconnaît ni ne finance aucun culte.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en quoi l'affaire Dreyfus est à la fois une affaire judiciaire et une crise politique majeure pour la République. Présentez les deux camps, leurs valeurs et l'issue de l'Affaire.",
              hint: "Distinguez les étapes judiciaires (condamnation, révision, réhabilitation) et les conséquences politiques (mobilisation des intellectuels, ligues, politique de défense républicaine).",
              solution: [
                "Affaire judiciaire : en 1894, le capitaine Dreyfus est condamné à tort pour espionnage et déporté en Guyane ; le vrai coupable, Esterhazy, est acquitté en 1898 ; Dreyfus est à nouveau condamné à Rennes en 1899, puis gracié, et réhabilité en 1906.",
                "Les dreyfusards : intellectuels comme Zola (« J'accuse... ! », 13 janvier 1898), républicains et socialistes comme Jaurès ; ils défendent la vérité, la justice et les droits de l'individu, et fondent la Ligue des droits de l'homme (1898).",
                "Les antidreyfusards : nationalistes, une grande partie de l'armée et des catholiques ; ils défendent l'honneur de l'armée et l'ordre, et beaucoup expriment un antisémitisme virulent.",
                "Crise politique : l'Affaire divise les familles et l'opinion, mobilise les intellectuels et la presse, et met en jeu les valeurs mêmes de la République.",
                "Issue : la victoire des dreyfusards renforce la gauche républicaine (gouvernement de défense républicaine en 1899), qui mène ensuite une politique laïque aboutissant à la loi de 1905.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « Comment la République s'enracine-t-elle en France entre 1870 et 1914 ? ». Rédigez l'introduction et un plan en trois parties avec des exemples précis, puis une conclusion.",
              hint: "Une partie sur l'installation du régime, une sur les moyens de l'enracinement (symboles, libertés, école), une sur les crises surmontées.",
              solution: [
                "Introduction : proclamée le 4 septembre 1870 dans la défaite, la Troisième République est d'abord fragile, face à une Assemblée monarchiste. En 1914, elle est solidement installée. Problématique : par quels moyens la République parvient-elle à s'enraciner durablement ?",
                "I. Une République qui s'installe (1870-1879) : écrasement de la Commune (1871), qui rassure les conservateurs ; échec des monarchistes et lois constitutionnelles de 1875 ; crise du 16 mai 1877 et démission de Mac Mahon (1879).",
                "II. Une République qui forme des citoyens : symboles (Marseillaise, 14 juillet, Marianne) ; libertés publiques (1881, 1884, 1901) ; école gratuite, obligatoire et laïque des lois Ferry (1881-1882).",
                "III. Une République qui surmonte ses crises : boulangisme (1886-1889) et Panama ; affaire Dreyfus et mobilisation des dreyfusards ; séparation des Églises et de l'État (1905), qui affirme la laïcité.",
                "Conclusion : en 1914, la République est acceptée par la grande majorité des Français, même si elle exclut toujours les femmes du vote et reste contestée par les nationalistes et l'extrême gauche révolutionnaire ; l'Union sacrée de 1914 montrera sa solidité.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la mise en œuvre du projet républicain.",
            statements: [
              { text: "Les élections de février 1871 donnent une majorité républicaine.", true: false, why: "Elles donnent une majorité monarchiste, favorable à la paix." },
              { text: "La Commune de Paris est écrasée lors de la semaine sanglante de mai 1871.", true: true, why: "L'armée du gouvernement de Thiers reprend Paris du 21 au 28 mai 1871." },
              { text: "Les lois Ferry rendent l'école gratuite, obligatoire et laïque jusqu'à 16 ans.", true: false, why: "L'instruction est obligatoire de 6 à 13 ans ; l'obligation jusqu'à 16 ans date de 1959." },
              { text: "La Marseillaise devient l'hymne national en 1879.", true: true, why: "Les républicains, au pouvoir depuis 1879, l'adoptent comme hymne national." },
              { text: "Émile Zola publie « J'accuse... ! » pour défendre Dreyfus.", true: true, why: "Le texte paraît dans L'Aurore le 13 janvier 1898." },
              { text: "La loi de 1905 interdit la pratique religieuse.", true: false, why: "Elle garantit au contraire le libre exercice des cultes ; l'État cesse seulement de les reconnaître et de les financer." },
              { text: "Les femmes votent sous la Troisième République avant 1914.", true: false, why: "Le suffrage reste masculin : les femmes votent pour la première fois en 1945." },
            ],
          },
          quiz: [
            {
              q: "Pourquoi l'amendement Wallon de 1875 est-il important ?",
              options: ["Il crée la Commune", "Il mentionne l'élection du président de la République", "Il rend l'école obligatoire", "Il rétablit l'Empire au profit d'un héritier de la famille Bonaparte"],
              answer: 1,
              why: "Voté à une voix de majorité, il inscrit le mot République dans les lois constitutionnelles.",
            },
            {
              q: "Jusqu'à quel âge l'instruction est-elle obligatoire avec la loi de 1882 ?",
              options: ["10 ans", "16 ans", "18 ans", "13 ans"],
              answer: 3,
              why: "La loi du 28 mars 1882 rend l'instruction obligatoire de 6 à 13 ans.",
            },
            {
              q: "Qui publie « J'accuse... ! » en 1898 ?",
              options: ["Émile Zola", "Jean Jaurès", "Georges Clemenceau", "Alfred Dreyfus"],
              answer: 0,
              why: "Zola publie sa lettre au président de la République dans L'Aurore, journal dirigé par Clemenceau.",
            },
            {
              q: "Que dit l'article 2 de la loi de 1905 ?",
              options: ["L'État nomme les évêques", "Le catholicisme redevient la religion de la majorité des Français, comme sous le Concordat", "La République ne reconnaît, ne salarie ni ne subventionne aucun culte", "Les cultes sont interdits dans l'espace public"],
              answer: 2,
              why: "L'État devient neutre : il ne reconnaît ni ne finance aucune religion, tout en garantissant la liberté de culte (article 1er).",
            },
            {
              q: "Quel général menace la République entre 1886 et 1889 ?",
              options: ["Mac Mahon", "Cavaignac", "Boulanger", "Gallieni"],
              answer: 2,
              why: "Le boulangisme rassemble des mécontents contre le régime parlementaire, mais Boulanger renonce au coup de force en 1889.",
            },
          ],
          trap: "Confondre la proclamation de la République (4 septembre 1870) et son enracinement : jusqu'en 1879, le régime est dominé par les monarchistes et son avenir reste incertain.",
          method: "Classez les lois républicaines en trois familles (symboles, libertés, école et laïcité) avec leur date : cette classification fournit directement la partie centrale d'une question sur l'enracinement de la République.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'societe-francaise-1914',
          title: 'Permanences et mutations de la société française jusqu’en 1914',
          minutes: 35,
          objectives: [
            "Décrire une société française encore largement rurale mais transformée par la seconde industrialisation et l'urbanisation.",
            "Expliquer la place croissante du monde ouvrier, son organisation (syndicats, socialisme) et les premières lois sociales.",
            "Analyser la place des femmes et des immigrés dans la société française avant 1914.",
          ],
          course: [
            {
              heading: "Une France encore rurale et paysanne",
              paragraphs: [
                "En 1911, la France compte environ 39,6 millions d'habitants : sa population augmente très lentement, en raison d'une natalité faible, alors que celle de l'Allemagne dépasse 60 millions. Cette faiblesse démographique inquiète les contemporains. La France reste majoritairement rurale : en 1911, environ 56 % des Français vivent à la campagne, et l'agriculture emploie encore environ 40 % des actifs. Il faut attendre 1931 pour que la population urbaine dépasse la population rurale.",
                "Le monde paysan est dominé par la petite propriété, souvent peu mécanisée. Il connaît des crises : à partir des années 1870, le phylloxéra, un insecte, détruit une grande partie du vignoble ; la concurrence des blés américains fait baisser les prix. Pour protéger les agriculteurs, le gouvernement adopte des droits de douane élevés avec le tarif Méline (1892). En 1907, la révolte des vignerons du Languedoc, ruinés par la surproduction, entraîne d'immenses manifestations ; des soldats du 17e régiment d'infanterie se mutinent et rejoignent les manifestants à Béziers.",
                "L'exode rural se poursuit : les jeunes partent vers les villes, attirés par les salaires de l'industrie et des services. Mais les campagnes changent aussi : l'école, le service militaire, le chemin de fer et la presse diffusent le français et la culture nationale.",
              ],
              box: { label: "À retenir", text: "Permanences : une France rurale, paysanne et peu peuplée, de natalité faible. Mutations : seconde industrialisation, urbanisation, essor du monde ouvrier et des classes moyennes, démocratisation de l'instruction." },
            },
            {
              heading: "La seconde industrialisation et la société urbaine",
              paragraphs: [
                "À partir des années 1880, la seconde industrialisation repose sur de nouvelles énergies et de nouvelles industries : l'électricité, notamment l'hydroélectricité des Alpes (la « houille blanche »), le pétrole, la chimie, l'aluminium, l'automobile (Renault, Peugeot) et l'aviation (Louis Blériot traverse la Manche en 1909). Les frères Lumière présentent le cinématographe en 1895. De grandes entreprises se forment et l'organisation du travail se rationalise.",
                "Les villes grandissent et se modernisent : Paris se dote du métro (1900) et accueille l'Exposition universelle de 1900. Les classes moyennes (employés de bureau et de commerce, fonctionnaires, instituteurs) progressent et voient dans l'école un moyen d'ascension sociale. Les loisirs se développent : presse à grand tirage (Le Petit Parisien dépasse le million d'exemplaires), cafés-concerts, cinéma, sport (premier Tour de France en 1903). On parlera plus tard, après 1918, de « Belle Époque », mais cette expression masque de fortes inégalités.",
              ],
            },
            {
              heading: "Le monde ouvrier s'organise et l'État commence à le protéger",
              paragraphs: [
                "Les ouvriers sont de plus en plus nombreux dans les grandes usines et les mines. Leurs conditions restent dures : longues journées, accidents, logements insalubres. Le 1er mai 1891, à Fourmies, la troupe tire sur des manifestants qui réclament la journée de 8 heures et tue neuf personnes ; le 10 mars 1906, la catastrophe de la mine de Courrières (Pas-de-Calais) fait 1 099 morts et provoque une grande grève.",
                "Les ouvriers s'organisent. Les syndicats, autorisés en 1884, se regroupent en 1895 dans la Confédération générale du travail (CGT), qui affirme en 1906, dans la charte d'Amiens, son indépendance à l'égard des partis et son objectif de grève générale. Les socialistes s'unissent en 1905 dans la SFIO (Section française de l'Internationale ouvrière), animée par Jean Jaurès et Jules Guesde. Les grèves se multiplient au début du XXe siècle, et le gouvernement de Clemenceau les réprime durement (1906-1909).",
                "Pour répondre à la question sociale, la République adopte des lois sociales : limitation du travail des enfants (1874, puis 1892, avec un âge minimum de 13 ans), loi sur les accidents du travail qui rend le patron responsable (1898), repos hebdomadaire obligatoire (1906), création d'un ministère du Travail (1906), retraites ouvrières et paysannes (1910). Ces lois restent limitées, mais elles marquent les débuts de l'intervention de l'État dans la protection des travailleurs.",
              ],
              box: { label: "Repère", text: "1884 : liberté syndicale. 1891 : fusillade de Fourmies. 1895 : fondation de la CGT. 1898 : loi sur les accidents du travail. 1905 : fondation de la SFIO. 1906 : catastrophe de Courrières, charte d'Amiens, repos hebdomadaire. 1910 : retraites ouvrières et paysannes." },
            },
            {
              heading: "Les femmes et les immigrés : une place à conquérir",
              paragraphs: [
                "Les femmes représentent plus d'un tiers de la population active : paysannes, ouvrières du textile, domestiques, couturières, et de plus en plus employées, institutrices ou postières. Mais elles n'ont pas le droit de vote, et le Code civil fait de la femme mariée une mineure juridique ; une loi de 1907 lui permet seulement de disposer librement de son salaire. Des féministes, comme Hubertine Auclert, réclament le droit de vote. Quelques femmes accèdent à des professions jusque-là masculines : Marie Curie reçoit le prix Nobel de physique en 1903 puis celui de chimie en 1911.",
                "La France, dont la population augmente peu, attire des travailleurs étrangers : en 1911, on compte près de 1,2 million d'étrangers, surtout des Belges dans le Nord et des Italiens dans le Sud-Est. Ils occupent souvent les emplois les plus pénibles. Ils suscitent parfois une xénophobie violente : en 1893, à Aigues-Mortes, des ouvriers italiens des salins sont massacrés. La loi de 1889 sur la nationalité facilite l'accès des enfants d'immigrés nés en France à la nationalité française (droit du sol).",
              ],
            },
          ],
          keyPoints: [
            "En 1911 : environ 39,6 millions d'habitants, natalité faible, 56 % de ruraux, environ 40 % des actifs dans l'agriculture.",
            "Crises agricoles (phylloxéra, révolte des vignerons de 1907) et protectionnisme (tarif Méline, 1892).",
            "Seconde industrialisation : électricité, chimie, automobile, aviation ; urbanisation et essor des classes moyennes.",
            "Monde ouvrier : CGT (1895), charte d'Amiens (1906), SFIO (1905) ; grèves et répressions (Fourmies 1891).",
            "Lois sociales : accidents du travail (1898), repos hebdomadaire (1906), retraites ouvrières et paysannes (1910).",
            "Femmes sans droit de vote et juridiquement mineures dans le mariage ; près de 1,2 million d'étrangers en 1911, parfois victimes de xénophobie.",
          ],
          example: {
            statement: "Montrez que la société française de 1914 combine permanences et mutations.",
            solution: [
              "Définir les termes : une permanence est un trait qui se maintient ; une mutation est une transformation profonde.",
              "Permanence démographique et rurale : en 1911, environ 56 % des Français vivent à la campagne et la natalité reste faible ; la population n'augmente guère (environ 39,6 millions d'habitants).",
              "Mutation économique : la seconde industrialisation (électricité, automobile, chimie) fait grandir les usines et les villes ; les classes moyennes progressent.",
              "Mutation sociale et politique : le monde ouvrier s'organise (CGT en 1895, SFIO en 1905) et l'État adopte des lois sociales (1898, 1906, 1910).",
              "Permanence des inégalités : les femmes restent privées du droit de vote et juridiquement soumises au mari ; les immigrés subissent parfois la xénophobie.",
              "Conclusion : la France de 1914 se modernise réellement, mais lentement, en gardant un fort enracinement rural et des inégalités durables.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les éléments suivants en « permanences » ou « mutations » de la société française avant 1914 : natalité faible ; essor de l'automobile ; majorité de ruraux ; fondation de la CGT ; femmes privées du droit de vote ; loi sur les retraites ouvrières ; métro de Paris.",
              hint: "Demandez-vous pour chaque élément s'il prolonge une situation ancienne ou s'il est nouveau à la fin du XIXe siècle.",
              solution: [
                "Permanences : natalité faible ; majorité de ruraux ; femmes privées du droit de vote.",
                "Mutations : essor de l'automobile ; fondation de la CGT (1895) ; loi sur les retraites ouvrières et paysannes (1910) ; métro de Paris (1900).",
              ],
            },
            {
              level: 2,
              statement: "Population de la France (recensements, valeurs arrondies) : 1872 : 36,1 millions ; 1911 : 39,6 millions. Population de l'Allemagne (territoire de l'Empire) : 1871 : 41 millions ; 1910 : 65 millions. (1) Calculez l'augmentation de chaque population en millions et en pourcentage. (2) Comparez. (3) Pourquoi cette différence inquiète-t-elle les Français avant 1914 ?",
              hint: "Pourcentage d'augmentation = (valeur finale - valeur initiale) ÷ valeur initiale × 100.",
              solution: [
                "(1) France : 39,6 - 36,1 = 3,5 millions ; 3,5 ÷ 36,1 × 100 ≈ 9,7 %. Allemagne : 65 - 41 = 24 millions ; 24 ÷ 41 × 100 ≈ 58,5 %.",
                "(2) En une quarantaine d'années, la population allemande augmente environ six fois plus vite que la population française (58,5 % contre 9,7 %).",
                "(3) Dans un contexte de rivalité depuis la défaite de 1870-1871, une population plus nombreuse signifie une armée plus nombreuse et une main-d'œuvre plus abondante ; les Français craignent d'être dépassés, ce qui explique la loi des trois ans de service militaire (1913) et le recours aux travailleurs étrangers.",
                "Conclusion : la faiblesse démographique est une permanence française qui pèse sur la puissance du pays avant 1914.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « Quelles sont les permanences et les mutations de la société française entre 1870 et 1914 ? ». Rédigez une introduction, un plan en deux parties avec trois arguments chacune, et une conclusion.",
              hint: "Partie 1 : ce qui change (économie, monde ouvrier, lois sociales). Partie 2 : ce qui demeure (ruralité, démographie, inégalités pour les femmes et les étrangers).",
              solution: [
                "Introduction : entre la naissance de la Troisième République et la Première Guerre mondiale, la France connaît une période de croissance que l'on appellera plus tard la Belle Époque. Problématique : la société française se transforme-t-elle en profondeur ou reste-t-elle marquée par des traits anciens ?",
                "I. De profondes mutations : (1) la seconde industrialisation (électricité, chimie, automobile) et l'urbanisation (métro de Paris, 1900) ; (2) l'organisation du monde ouvrier (CGT 1895, SFIO 1905, grèves) ; (3) les premières lois sociales (1898, 1906, 1910) et la démocratisation de l'instruction.",
                "II. De fortes permanences : (1) une France rurale (56 % de ruraux en 1911) et paysanne, protégée par le tarif Méline (1892) ; (2) une démographie faible, qui inquiète face à l'Allemagne ; (3) des inégalités persistantes : femmes privées du droit de vote et juridiquement soumises, étrangers victimes de xénophobie (Aigues-Mortes, 1893).",
                "Conclusion : la société française se modernise réellement, mais à son rythme ; les mutations touchent surtout les villes et l'industrie, tandis que la France rurale et les inégalités de statut demeurent jusqu'en 1914.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque date à l'événement de la société française qui lui correspond.",
            pairs: [
              { left: "1891", right: "Fusillade de Fourmies lors du 1er mai" },
              { left: "1895", right: "Fondation de la CGT à Limoges" },
              { left: "1898", right: "Loi sur les accidents du travail" },
              { left: "1905", right: "Fondation de la SFIO" },
              { left: "1907", right: "Révolte des vignerons du Languedoc" },
              { left: "1910", right: "Retraites ouvrières et paysannes" },
            ],
          },
          quiz: [
            {
              q: "En 1911, quelle part des Français vit à la campagne ?",
              options: ["Environ 56 %", "Environ 20 %", "Environ 35 %", "Plus de 90 %"],
              answer: 0,
              why: "La France reste majoritairement rurale jusqu'en 1931.",
            },
            {
              q: "Qu'affirme la charte d'Amiens de 1906 ?",
              options: ["La fusion de tous les partis socialistes au sein de la SFIO", "L'indépendance du syndicalisme à l'égard des partis", "Le droit de vote des femmes", "La création des retraites ouvrières et paysannes"],
              answer: 1,
              why: "Adoptée par la CGT, elle proclame l'indépendance syndicale et l'objectif de la grève générale.",
            },
            {
              q: "Quel fléau ravage le vignoble français à partir des années 1870 ?",
              options: ["Le doryphore", "La peste bovine", "Le mildiou du blé", "Le phylloxéra"],
              answer: 3,
              why: "Cet insecte venu d'Amérique détruit une grande partie des vignes, qui sont replantées sur des porte-greffes américains.",
            },
            {
              q: "Quelle loi de 1898 améliore la protection des ouvriers ?",
              options: ["La loi sur les syndicats", "La loi sur les accidents du travail", "La loi des trois ans de service militaire", "La loi sur les associations"],
              answer: 1,
              why: "Elle rend le patron responsable des accidents survenus au travail, qui sont indemnisés.",
            },
            {
              q: "Où des ouvriers italiens sont-ils massacrés en 1893 ?",
              options: ["À Fourmies", "À Courrières", "À Aigues-Mortes", "À Saint-Étienne"],
              answer: 2,
              why: "Dans les salins d'Aigues-Mortes, des travailleurs italiens sont tués lors de violences xénophobes.",
            },
          ],
          trap: "Imaginer la « Belle Époque » comme une période heureuse pour tous : l'expression date d'après 1918, et la société d'avant 1914 reste marquée par la misère ouvrière, les crises agricoles et l'inégalité des femmes.",
          method: "Préparez un tableau à deux colonnes, permanences et mutations, et remplissez chaque ligne (démographie, campagnes, industrie, ouvriers, femmes, étrangers) avec un chiffre ou une date : il sert de plan à la plupart des sujets.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'metropole-colonies',
          title: 'Métropole et colonies',
          minutes: 35,
          objectives: [
            "Décrire la constitution de l'empire colonial français, de la conquête de l'Algérie au protectorat sur le Maroc.",
            "Expliquer les justifications de la colonisation et les débats qu'elle suscite en métropole.",
            "Analyser la situation coloniale : domination, statut des colonisés, exploitation, résistances, et la place de l'empire dans la culture métropolitaine.",
          ],
          course: [
            {
              heading: "La constitution d'un vaste empire",
              paragraphs: [
                "La conquête de l'Algérie commence en 1830 avec la prise d'Alger. Elle est longue et violente : l'émir Abd el-Kader résiste jusqu'en 1847, et une grande révolte éclate encore en Kabylie en 1871. L'Algérie est divisée en départements français en 1848 et devient une colonie de peuplement, où s'installent des colons venus de France, d'Espagne, d'Italie ou de Malte. Sous le Second Empire, la France prend pied en Cochinchine, au Sénégal et en Nouvelle-Calédonie.",
                "L'expansion s'accélère sous la Troisième République, dans un contexte de rivalité entre puissances européennes. La France établit son protectorat sur la Tunisie (1881), conquiert le Tonkin et l'Annam et forme l'Union indochinoise (1887), s'empare de Madagascar (1895-1896) et constitue en Afrique de vastes fédérations : l'Afrique-Occidentale française (AOF, 1895) et l'Afrique-Équatoriale française (AEF, 1910). En 1898, à Fachoda (Soudan), la mission Marchand doit se retirer devant les Britanniques. En 1912, le Maroc devient un protectorat français.",
                "À la veille de la Première Guerre mondiale, l'empire colonial français est le deuxième du monde, après l'empire britannique : il couvre environ dix millions de km², soit près de vingt fois la superficie de la métropole, et compte plusieurs dizaines de millions d'habitants.",
              ],
              box: { label: "Définition", text: "Colonie : territoire conquis, dominé et administré par une puissance étrangère, la métropole. Protectorat : territoire où le souverain local est maintenu, mais où la puissance protectrice contrôle en fait la politique extérieure, l'armée et l'administration (Tunisie, Maroc)." },
            },
            {
              heading: "Justifier et débattre : la colonisation en question",
              paragraphs: [
                "Les partisans de la colonisation avancent plusieurs arguments. Économiques : les colonies offrent des matières premières et des débouchés pour l'industrie. Politiques et stratégiques : après la défaite de 1871, l'empire doit rendre à la France son rang de grande puissance, avec des ports et des bases dans le monde entier. Idéologiques : les colonisateurs prétendent apporter la « civilisation », c'est-à-dire leur religion, leur médecine, leur école et leurs techniques, à des peuples qu'ils jugent inférieurs.",
                "En juillet 1885, à la Chambre des députés, Jules Ferry défend la colonisation en reprenant ces trois arguments ; il affirme que « les races supérieures ont un droit vis-à-vis des races inférieures », parce qu'elles auraient le devoir de les civiliser. Georges Clemenceau lui répond en dénonçant cette hiérarchie des races, contraire selon lui aux droits de l'homme, et en reprochant aux expéditions coloniales de détourner la France de la revanche contre l'Allemagne. À cette époque, ces débats portent surtout sur l'intérêt et les méthodes de la colonisation : peu de voix contestent son principe même.",
                "Un « parti colonial », groupe de pression réunissant députés, géographes, militaires et hommes d'affaires autour d'Eugène Étienne, soutient l'expansion. Des missionnaires catholiques et protestants partent aussi évangéliser les populations colonisées.",
              ],
            },
            {
              heading: "La situation coloniale : domination et exploitation",
              paragraphs: [
                "La société coloniale est fondée sur l'inégalité. La plupart des colonisés ne sont pas citoyens mais « sujets » français : ils ne votent pas et relèvent, en Algérie à partir de 1881 puis dans d'autres colonies, du code de l'indigénat, qui prévoit des sanctions particulières sans jugement. Les exceptions sont rares : par le décret Crémieux (1870), les juifs d'Algérie deviennent citoyens ; les habitants des quatre communes du Sénégal votent, et Blaise Diagne y est élu député en 1914.",
                "Les colonies sont exploitées au profit de la métropole : en Algérie, des terres sont confisquées au profit des colons ; ailleurs, les populations sont soumises à l'impôt et au travail forcé pour construire routes, ports et voies ferrées. En Afrique-Équatoriale, de grandes compagnies concessionnaires exploitent le caoutchouc avec une grande brutalité, ce que dénonce en 1905 une mission d'enquête dirigée par Pierre Savorgnan de Brazza. Les colonies produisent pour l'exportation : arachide au Sénégal, vin et céréales en Algérie, riz en Indochine.",
                "La colonisation apporte aussi quelques équipements, comme des écoles, des hôpitaux ou des instituts Pasteur, mais ils profitent surtout aux colons et à une petite minorité de colonisés. Les colonisés résistent : Samory Touré combat les Français en Afrique de l'Ouest jusqu'à sa capture en 1898 ; les Kanak se soulèvent en Nouvelle-Calédonie en 1878 ; Madagascar connaît une insurrection en 1896-1897.",
              ],
              box: { label: "À retenir", text: "La colonisation repose sur une inégalité de statut : citoyens d'un côté, sujets de l'autre, soumis au code de l'indigénat. Elle s'accompagne de violences, d'expropriations et de travail forcé, et suscite des résistances." },
            },
            {
              heading: "L'empire dans la métropole",
              paragraphs: [
                "L'empire devient familier aux Français de métropole. Les manuels scolaires et les cartes murales montrent les possessions françaises en couleur ; la presse illustrée raconte les conquêtes ; les publicités utilisent des images de colonisés, souvent caricaturales. Les Expositions universelles de Paris (1889, 1900) et l'Exposition coloniale de Marseille (1906) présentent des pavillons coloniaux et des « villages indigènes » où des colonisés sont exhibés devant le public.",
                "Cette culture coloniale diffuse des stéréotypes racistes et l'idée que la France a une mission civilisatrice. Elle contribue à rendre l'empire légitime aux yeux de nombreux Français, même si la majorité d'entre eux reste peu intéressée par les colonies, en dehors des milieux d'affaires, militaires et religieux.",
              ],
              box: { label: "Repère", text: "1830 : prise d'Alger. 1848 : départements d'Algérie. 1881 : protectorat sur la Tunisie, code de l'indigénat en Algérie. 1885 : débat Ferry-Clemenceau. 1887 : Union indochinoise. 1895 : AOF. 1896 : annexion de Madagascar. 1898 : Fachoda. 1912 : protectorat sur le Maroc." },
            },
          ],
          keyPoints: [
            "L'empire se constitue de la prise d'Alger (1830) au protectorat sur le Maroc (1912) ; il est le deuxième du monde en 1914.",
            "Grandes étapes : Tunisie (1881), Union indochinoise (1887), AOF (1895), Madagascar (1896), AEF (1910), Maroc (1912).",
            "Justifications économiques, politiques et prétendument civilisatrices ; débat Ferry-Clemenceau (1885).",
            "Société coloniale inégalitaire : citoyens et sujets, code de l'indigénat (1881), travail forcé, expropriations.",
            "Résistances (Abd el-Kader, Samory Touré, Kanak en 1878) et culture coloniale en métropole (expositions, manuels, publicité).",
          ],
          example: {
            statement: "Quels arguments les partisans de la colonisation avancent-ils sous la Troisième République, et comment leurs adversaires leur répondent-ils ?",
            solution: [
              "Situer le débat : dans les années 1880, l'expansion coloniale s'accélère (Tunisie 1881, Tonkin) et provoque des débats à la Chambre, notamment en juillet 1885.",
              "Argument économique : les colonies fournissent des matières premières et des débouchés pour l'industrie française.",
              "Argument politique : après la défaite de 1871, l'empire doit rendre à la France son rang de grande puissance mondiale.",
              "Argument idéologique : Jules Ferry affirme que les « races supérieures » auraient un devoir de civiliser les « races inférieures ».",
              "Réponses des adversaires : Clemenceau dénonce cette hiérarchie des races, contraire aux droits de l'homme, et estime que les conquêtes détournent la France de la revanche contre l'Allemagne.",
              "Conclusion : le débat porte sur l'intérêt et la légitimité des conquêtes, mais la majorité des républicains finit par soutenir l'expansion coloniale.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque territoire à sa date d'entrée dans l'empire et à son statut (colonie ou protectorat) : Algérie ; Tunisie ; Madagascar ; Maroc. Dates : 1830-1847, 1881, 1896, 1912.",
              hint: "Un protectorat conserve un souverain local (bey ou sultan) ; une colonie est administrée directement.",
              solution: [
                "Algérie : conquête de 1830 à 1847 ; colonie de peuplement, divisée en départements dès 1848.",
                "Tunisie : 1881 ; protectorat (le bey reste en place).",
                "Madagascar : 1896 ; colonie (annexion, la reine est exilée en 1897).",
                "Maroc : 1912 ; protectorat (le sultan reste en place).",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en un paragraphe argumenté pourquoi on peut parler d'une société coloniale inégalitaire. Utilisez au moins trois exemples précis du cours.",
              hint: "Pensez au statut juridique, au droit de vote, aux terres et au travail.",
              solution: [
                "Inégalité de statut : la majorité des colonisés sont des « sujets » et non des citoyens ; ils ne votent pas, à quelques exceptions près (quatre communes du Sénégal).",
                "Inégalité devant la loi : le code de l'indigénat (Algérie, 1881, puis d'autres colonies) permet de sanctionner les sujets sans jugement pour des faits qui ne sont pas des délits pour les citoyens.",
                "Inégalité économique : en Algérie, des terres sont confisquées au profit des colons ; en Afrique, l'impôt et le travail forcé pèsent sur les populations, et les compagnies concessionnaires d'AEF exploitent brutalement le caoutchouc.",
                "Conclusion : la société coloniale repose sur une domination juridique, politique et économique des colonisés par les colonisateurs, contraire aux principes républicains d'égalité proclamés en métropole.",
              ],
            },
            {
              level: 3,
              statement: "Réponse à une question problématisée (type bac, contrôle continu) : « Quelles relations la métropole entretient-elle avec ses colonies sous la Troisième République jusqu'en 1914 ? ». Rédigez une introduction, un plan en trois parties avec des exemples précis et une conclusion.",
              hint: "Une partie sur la conquête et ses justifications, une sur la domination dans les colonies, une sur la place de l'empire en métropole.",
              solution: [
                "Introduction : entre 1870 et 1914, la Troisième République fait de la France la deuxième puissance coloniale du monde. Problématique : comment la République, qui proclame l'égalité des droits, conquiert-elle, domine-t-elle et se représente-t-elle son empire ?",
                "I. Conquérir et justifier : étapes (Tunisie 1881, Indochine 1887, Madagascar 1896, AOF et AEF, Maroc 1912) ; arguments économiques, politiques et prétendument civilisateurs ; débat Ferry-Clemenceau (1885).",
                "II. Dominer et exploiter : distinction entre citoyens et sujets, code de l'indigénat (1881) ; expropriations en Algérie, impôt et travail forcé, compagnies concessionnaires ; résistances (Samory Touré, Kanak 1878, Madagascar 1896-1897).",
                "III. Faire connaître et aimer l'empire : manuels et cartes scolaires, presse et publicité ; Expositions universelles et coloniales avec leurs « villages indigènes » ; diffusion de stéréotypes racistes.",
                "Conclusion : la métropole entretient avec ses colonies une relation de domination, en contradiction avec les principes républicains ; cette contradiction nourrira les revendications des colonisés au XXe siècle, d'autant que l'empire fournira soldats et travailleurs pendant la Première Guerre mondiale.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces étapes de la construction de l'empire colonial français.",
            items: [
              "Prise d'Alger",
              "Reddition de l'émir Abd el-Kader",
              "Protectorat sur la Tunisie",
              "Création de l'Union indochinoise",
              "Annexion de Madagascar",
              "Crise de Fachoda avec le Royaume-Uni",
              "Protectorat sur le Maroc",
            ],
          },
          quiz: [
            {
              q: "Quel territoire devient un protectorat français en 1881 ?",
              options: ["L'Algérie", "Madagascar", "Le Maroc", "La Tunisie"],
              answer: 3,
              why: "Par le traité du Bardo (1881), le bey de Tunis accepte le protectorat français ; le Maroc ne le devient qu'en 1912.",
            },
            {
              q: "Qu'est-ce que le code de l'indigénat ?",
              options: ["Un régime de sanctions spécifiques aux sujets colonisés", "Le Code civil appliqué à tous les habitants des colonies", "Une loi qui accorde la citoyenneté aux colonisés", "Un traité entre la France et le Royaume-Uni"],
              answer: 0,
              why: "Il permet de punir les sujets colonisés sans jugement, pour des infractions qui ne concernent pas les citoyens.",
            },
            {
              q: "Qui répond à Jules Ferry en 1885 en dénonçant la hiérarchie des races ?",
              options: ["Pierre Waldeck-Rousseau", "Léon Gambetta", "Georges Clemenceau", "Eugène Étienne"],
              answer: 2,
              why: "Clemenceau critique la politique coloniale de Ferry et l'idée de races supérieures, au nom des droits de l'homme.",
            },
            {
              q: "Que se passe-t-il à Fachoda en 1898 ?",
              options: ["La France conquiert le Maroc", "La mission Marchand recule devant les Britanniques", "Samory Touré remporte une grande victoire sur l'armée française", "Les Kanak se soulèvent"],
              answer: 1,
              why: "Face aux troupes britanniques au Soudan, la France doit céder ; le conflit se règle ensuite par l'Entente cordiale (1904).",
            },
            {
              q: "Quel est le statut de la plupart des colonisés avant 1914 ?",
              options: ["Citoyens", "Sujets", "Électeurs", "Fonctionnaires"],
              answer: 1,
              why: "Ils sont sujets français : soumis aux lois françaises sans en avoir les droits politiques.",
            },
          ],
          trap: "Croire que tous les habitants de l'empire sont des citoyens français : la plupart sont des sujets, sans droit de vote et soumis au code de l'indigénat, en contradiction avec les principes républicains.",
          method: "Pour tout sujet colonial, pensez aux deux points de vue, celui de la métropole (conquête, justifications, culture coloniale) et celui des colonisés (statut, exploitation, résistances), et donnez un exemple localisé pour chacun.",
        },
      ],
    },
  ],
}
