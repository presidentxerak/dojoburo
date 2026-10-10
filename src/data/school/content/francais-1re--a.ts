import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'francais-1re',
  chapters: [
    /* ==================================================================== */
    /* LA POÉSIE DU XIXe AU XXIe SIÈCLE                                      */
    /* ==================================================================== */
    {
      id: 'poesie',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'vers-et-libertes',
          title: 'Du vers régulier au vers libre : lire un poème',
          minutes: 35,
          objectives: [
            "Compter les syllabes d'un vers en appliquant les règles du e muet, de la diérèse et de la synérèse.",
            "Identifier les mètres, les rimes, les strophes et les formes fixes comme le sonnet.",
            "Analyser les effets de rythme : césure, enjambement, rejet et contre-rejet.",
            "Situer les grandes libérations de la forme poétique, du poème en prose au vers libre.",
          ],
          course: [
            {
              heading: "Compter les syllabes : le mètre",
              paragraphs: [
                "En poésie, on ne compte pas les syllabes comme dans la conversation courante : on compte les syllabes prononcées selon des règles fixées par la tradition, et leur nombre donne le mètre du vers. L'alexandrin compte douze syllabes, le décasyllabe dix, l'octosyllabe huit ; on rencontre aussi l'hexasyllabe (six) ou l'heptasyllabe (sept). Les vers de cinq, sept, neuf ou onze syllabes sont dits impairs : Verlaine les recommande dans son « Art poétique » (recueilli dans Jadis et naguère, 1884), parce qu'ils lui semblent plus légers et plus musicaux.",
                "Le e muet, ou e caduc, demande une attention particulière. À la fin d'un mot, il se prononce et compte devant une consonne ou un h aspiré ; il s'élide et ne compte pas devant une voyelle ou un h muet ; il ne compte jamais en fin de vers. Ainsi « une barque » se dit u-ne-bar-que, mais « glisse au fond » se dit glis-sau-fond. Suivi de s ou de nt (« les heures », « ils chantent »), le e ne s'élide pas : il compte toujours à l'intérieur du vers, même devant une voyelle.",
                "Deux voyelles qui se suivent dans un mot peuvent former une seule syllabe : c'est la synérèse (« nuit », « pied », « dernier »). Elles peuvent aussi être prononcées en deux syllabes : c'est la diérèse (« pas-si-on », « li-on »). La tradition fixe l'usage pour beaucoup de mots, mais le poète peut jouer de la diérèse pour étirer un mot et le mettre en valeur. On ne repère une diérèse qu'en comptant tout le vers : c'est le total attendu qui oblige à prononcer le mot en deux temps.",
              ],
              box: { label: "Règle", text: "Le e muet compte devant une consonne, s'élide devant une voyelle ou un h muet, ne compte jamais en fin de vers. Suivi de s ou de nt, il compte toujours à l'intérieur du vers. La diérèse sépare deux voyelles voisines en deux syllabes ; la synérèse les réunit en une seule." },
            },
            {
              heading: "Rimes, strophes et formes fixes",
              paragraphs: [
                "La rime est le retour, à la fin de deux vers ou plus, de la même voyelle prononcée et, souvent, des sons qui l'entourent. On la décrit selon trois critères. Sa disposition : rimes suivies ou plates (AABB), croisées (ABAB), embrassées (ABBA). Sa richesse : pauvre quand un seul son est commun (ami, joli : le son i), suffisante quand deux sons sont communs (beauté, clarté : les sons t et é), riche à partir de trois sons communs (haleine, plaine : les sons l, è, n). Son genre : elle est féminine quand le vers se termine par un e muet (amie, plaine, ils pensent), masculine dans tous les autres cas. La règle classique impose d'alterner rimes masculines et féminines.",
                "Les vers se groupent en strophes : distique (deux vers), tercet (trois), quatrain (quatre), quintil (cinq), sizain (six), huitain, dizain. Le sonnet est la forme fixe la plus célèbre. Venu d'Italie, où Pétrarque l'a illustré, il est acclimaté en France au XVIe siècle, notamment par Marot puis par les poètes de la Pléiade (Du Bellay, Ronsard). Il compte quatorze vers, répartis en deux quatrains et deux tercets ; le dernier vers, appelé chute, porte souvent la pointe du poème.",
                "Au XIXe siècle, le sonnet reste très vivant : Baudelaire, Verlaine et Rimbaud l'emploient beaucoup, tout en prenant des libertés avec ses règles (rimes différentes dans les deux quatrains, vers inattendus, mélange des tons). Connaître la forme régulière permet justement de mesurer ces écarts et d'en interpréter le sens.",
              ],
              box: { label: "Repère", text: "Sonnet régulier : deux quatrains sur deux rimes embrassées (ABBA ABBA), puis deux tercets, le plus souvent CCD EED ou CCD EDE. Quatorze vers, souvent des alexandrins ou des décasyllabes." },
            },
            {
              heading: "Le rythme : césure, enjambement, rejet",
              paragraphs: [
                "Dans l'alexandrin classique, une pause principale, la césure, partage le vers en deux moitiés de six syllabes appelées hémistiches (6//6). D'autres accents, à l'intérieur de chaque hémistiche, créent des coupes secondaires. Les romantiques assouplissent ce modèle : Victor Hugo pratique le trimètre, alexandrin en trois mesures de quatre syllabes (4//4//4), et la césure peut tomber au milieu d'un groupe de mots.",
                "Il y a enjambement quand la phrase ne s'arrête pas à la fin du vers mais se poursuit sur le vers suivant. Si le débordement est bref et met en relief un ou deux mots placés au début du vers suivant, on parle de rejet. Si, au contraire, un élément bref placé à la fin d'un vers annonce une phrase qui se développe dans le vers suivant, on parle de contre-rejet. Ces décalages entre la syntaxe et le vers créent une attente, une surprise, et attirent l'attention sur un mot.",
                "Le rythme est aussi sonore. L'allitération est la répétition d'un même son consonne, l'assonance celle d'un même son voyelle. Leur relevé n'a d'intérêt que s'il éclaire le sens : un retour de sons sifflants peut suggérer le souffle du vent, une suite de voyelles ouvertes une impression d'ampleur, mais il faut toujours relier l'effet sonore à ce que dit le poème.",
              ],
              box: { label: "Définition", text: "Enjambement : la phrase déborde d'un vers sur le suivant. Rejet : élément bref, lié par la syntaxe au vers précédent, rejeté au début du vers suivant. Contre-rejet : élément bref placé à la fin d'un vers, lié par la syntaxe au vers suivant." },
            },
            {
              heading: "Libérer la forme : du poème en prose au vers libre",
              paragraphs: [
                "Au XIXe siècle, des poètes contestent l'idée que la poésie se confond avec le vers. Aloysius Bertrand compose Gaspard de la Nuit, publié en 1842 après sa mort ; Baudelaire écrit ensuite des petits poèmes en prose, réunis en volume après sa mort sous le titre Le Spleen de Paris (1869). Le poème en prose renonce au mètre et à la rime mais garde la brièveté, la densité et le travail des images. Rimbaud prolonge cette recherche dans les Illuminations, publiées en 1886.",
                "Le vers libre apparaît dans les années 1880. Il ne compte plus les syllabes et ne rime pas forcément, mais il reste un vers, c'est-à-dire une unité découpée par le retour à la ligne. Deux poèmes des Illuminations, « Marine » et « Mouvement », sont souvent présentés comme les premiers vers libres français ; Gustave Kahn et Jules Laforgue en font une revendication. Au XXe siècle, Apollinaire supprime la ponctuation d'Alcools (1913), Claudel et Saint-John Perse développent le verset, vers très long proche du souffle biblique, et la plupart des poètes contemporains écrivent en vers libres.",
                "Libérer la forme ne signifie pas renoncer au rythme. Le vers libre joue sur la longueur inégale des lignes, les blancs de la page, les répétitions comme l'anaphore (reprise d'un mot en tête de vers), les sonorités. Lire un poème, c'est donc toujours se demander comment la forme, régulière ou libre, produit du sens : un vers très court isolé, un blanc, l'absence de majuscule ou de ponctuation sont des choix à interpréter.",
              ],
              box: { label: "À retenir", text: "Vers régulier : un mètre fixe et des rimes. Poème en prose : ni vers ni mètre, mais densité et unité. Vers libre : retour à la ligne sans nombre fixe de syllabes, rime facultative. Verset : vers très ample, qui dépasse souvent la ligne." },
            },
          ],
          keyPoints: [
            "Alexandrin : 12 syllabes, césure à l'hémistiche (6//6) ; décasyllabe : 10 ; octosyllabe : 8.",
            "Le e muet compte devant une consonne, s'élide devant une voyelle, ne compte jamais en fin de vers.",
            "Diérèse : deux voyelles prononcées en deux syllabes (pas-si-on) ; synérèse : en une seule (nuit).",
            "Rimes plates (AABB), croisées (ABAB), embrassées (ABBA) ; pauvres, suffisantes, riches ; masculines ou féminines.",
            "Sonnet : deux quatrains et deux tercets, quatorze vers, avec une chute.",
            "Rejet et contre-rejet mettent un mot en valeur par un décalage entre la phrase et le vers.",
            "Poème en prose (Bertrand, Baudelaire), vers libre (années 1880), verset (Claudel) : la poésie se libère du mètre sans perdre son rythme.",
          ],
          example: {
            statement: "Voici deux vers (écrits pour l'exercice) : « Le soir descend sans bruit sur la ville endormie, / Et les quais lentement retiennent leur haleine. » Comptez les syllabes, situez la césure et nommez le mètre.",
            solution: [
              "Premier vers : Le / soir / des / cend / sans / bruit // sur / la / vil / len / dor / mi(e). Le e de « ville » s'élide devant la voyelle de « endormie » ; le e final de « endormie » ne compte pas en fin de vers.",
              "Total du premier vers : douze syllabes, avec une césure après « bruit », à la sixième syllabe : 6//6.",
              "Second vers : Et / les / quais / len / te / ment // re / tien / nent / leur / ha / lei(ne). Le e de « lentement » se prononce car il est suivi d'une consonne ; la terminaison -nent de « retiennent » compte devant la consonne de « leur ».",
              "Total du second vers : douze syllabes, césure après « lentement » : 6//6.",
              "Les deux vers se terminent par un e muet : leurs rimes sont féminines.",
              "Réponse : ce sont deux alexandrins réguliers, partagés en deux hémistiches de six syllabes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Comptez les syllabes de chacun de ces vers (écrits pour l'exercice) et nommez leur mètre : a) « Le vent passe et s'en va » ; b) « Sous les branches du chêne noir » ; c) « Une barque d'argent glisse au fond de la plaine » ; d) « Le jour se lève sur la mer immense ».",
              hint: "Repérez chaque e muet : suivi d'une consonne, il compte ; suivi d'une voyelle, il s'élide ; en fin de vers, il ne compte pas.",
              solution: [
                "a) Le / vent / pas / s(e) et / s'en / va : « passe et » se dit pas-set, le e s'élide. Six syllabes : hexasyllabe.",
                "b) Sous / les / bran / ches / du / chê / ne / noir : les e de « branches » et de « chêne » sont suivis d'une consonne et comptent. Huit syllabes : octosyllabe.",
                "c) U / ne / bar / que / d'ar / gent // glis / s(e) au / fond / de / la / plai(ne) : le e de « glisse » s'élide devant « au », celui de « plaine » est en fin de vers. Douze syllabes : alexandrin, césure après « d'argent ».",
                "d) Le / jour / se / lè / ve / sur / la / mer / im / men(se) : le e de « lève » compte devant « sur », celui de « immense » est en fin de vers. Dix syllabes : décasyllabe.",
              ],
            },
            {
              level: 2,
              statement: "Voici un quatrain écrit pour l'exercice : « Le soir descend sans bruit sur la ville endormie, / Et le fleuve, plus bas, poursuit son long chemin ; / Une barque d'argent y dort jusqu'au matin, / Comme un dernier adieu murmuré par une amie. » Donnez la disposition des rimes, leur richesse et leur genre, puis dites si l'alternance classique est respectée.",
              hint: "Notez A, B, B, A selon les sons finaux, puis comptez les sons communs à chaque paire de rimes.",
              solution: [
                "Les terminaisons sont « endormie », « chemin », « matin », « amie » : le premier et le dernier vers riment ensemble, les deux vers du milieu aussi. Disposition ABBA : rimes embrassées.",
                "Rime A (endormie, amie) : deux sons communs, m et i. Rime suffisante.",
                "Rime B (chemin, matin) : un seul son commun, la voyelle nasale finale (in). Rime pauvre.",
                "Genre : « endormie » et « amie » finissent par un e muet, la rime A est féminine ; « chemin » et « matin » n'en ont pas, la rime B est masculine.",
                "Conclusion : un quatrain d'alexandrins à rimes embrassées, avec une rime suffisante et une rime pauvre ; l'alternance est respectée, puisqu'une paire féminine encadre une paire masculine.",
              ],
            },
            {
              level: 3,
              statement: "Type bac (commentaire). Voici trois alexandrins écrits pour l'exercice : « Il allait vers le sud, et rien ne l'arrêtait, / Ni le vent ni la nuit. Puis il vit, immobile, / La mer. Alors le ciel s'ouvrit dans sa poitrine. » Rédigez un paragraphe de commentaire qui analyse le travail du rythme et son effet.",
              hint: "Cherchez où la phrase s'arrête par rapport à la fin des vers, et repérez le groupe de deux syllabes placé au début du dernier vers.",
              solution: [
                "Constat métrique : les trois vers sont des alexandrins césurés à l'hémistiche (« Il allait vers le sud // et rien ne l'arrêtait » ; « Ni le vent ni la nuit // Puis il vit, immobile » ; « La mer. Alors le ciel // s'ouvrit dans sa poitrine »).",
                "Premier décalage : la phrase du vers 1 déborde sur le premier hémistiche du vers 2 (« Ni le vent ni la nuit ») : cet enjambement prolonge la marche du personnage, comme si rien ne pouvait l'interrompre.",
                "Second décalage : le complément d'objet de « vit », « La mer », est rejeté au début du vers 3. Ce rejet de deux syllabes, suivi d'un point, crée une attente (« Puis il vit, immobile, ») puis une révélation brutale.",
                "Interprétation : le rythme imite l'expérience du personnage. La longue marche continue s'arrête net devant la mer ; la brièveté du rejet traduit le saisissement, et le second hémistiche du vers 3 développe l'émotion par une métaphore (le ciel qui « s'ouvrit » dans sa poitrine).",
                "Paragraphe rédigé : « Le poème fait éprouver la découverte au lecteur avant de la nommer. L'enjambement des vers 1 et 2 prolonge une marche que rien n'arrête, puis le rejet de « La mer », isolé par le point au début du vers 3, suspend la phrase et produit l'effet d'une apparition. Le contraste entre cette mesure brève et l'ampleur de la métaphore finale traduit le passage du saisissement à l'émerveillement. »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion de versification à sa définition.",
            pairs: [
              { left: "Alexandrin", right: "Vers de douze syllabes, traditionnellement coupé en deux hémistiches" },
              { left: "Diérèse", right: "Prononciation en deux syllabes de deux voyelles voisines" },
              { left: "Rejet", right: "Élément bref repoussé au début du vers suivant" },
              { left: "Rimes embrassées", right: "Disposition ABBA" },
              { left: "Sonnet", right: "Deux quatrains et deux tercets" },
              { left: "Vers libre", right: "Vers sans nombre fixe de syllabes, rime facultative" },
            ],
          },
          quiz: [
            {
              q: "Combien de syllabes compte le groupe « Une barque d'argent » à l'intérieur d'un vers ?",
              options: ["Cinq", "Six", "Sept", "Quatre"],
              answer: 1,
              why: "U-ne-bar-que-d'ar-gent : les e de « une » et de « barque » sont suivis d'une consonne et se prononcent, ce qui donne six syllabes.",
            },
            {
              q: "Quelle disposition correspond au schéma ABAB ?",
              options: ["Rimes suivies", "Rimes embrassées", "Rimes croisées"],
              answer: 2,
              why: "Les rimes croisées alternent : A, puis B, puis de nouveau A et B. Les rimes embrassées suivent le schéma ABBA, les rimes suivies AABB.",
            },
            {
              q: "Un e muet placé à la fin du vers :",
              options: ["compte toujours", "ne compte jamais", "compte s'il est suivi d'une consonne", "compte seulement dans un sonnet"],
              answer: 1,
              why: "En fin de vers, le e muet n'est jamais compté ; il rend seulement la rime féminine.",
            },
            {
              q: "Qui est l'auteur des poèmes en prose réunis après sa mort sous le titre Le Spleen de Paris (1869) ?",
              options: ["Baudelaire", "Rimbaud", "Victor Hugo", "Apollinaire"],
              answer: 0,
              why: "Baudelaire a composé ces petits poèmes en prose, publiés en volume en 1869, deux ans après sa mort.",
            },
            {
              q: "Comment nomme-t-on un élément bref placé en fin de vers mais lié par la syntaxe au vers suivant ?",
              options: ["Un rejet", "Une césure", "Un enjambement simple", "Un contre-rejet"],
              answer: 3,
              why: "Le contre-rejet annonce en fin de vers une phrase qui se développe au vers suivant ; le rejet fait l'inverse.",
            },
          ],
          trap: "Compter les syllabes comme à l'oral courant, en avalant tous les e muets, ou au contraire compter le e final du vers : on trouve alors onze ou treize syllabes au lieu de douze et l'on conclut à tort à un vers irrégulier.",
          method: "Recopiez le vers en séparant les syllabes par des barres obliques, entourez chaque e muet et décidez pour chacun : consonne après (il compte), voyelle après (il s'élide), fin de vers (il ne compte pas). Si le total ne tombe pas juste, cherchez une diérèse.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'rimbaud-cahier-de-douai',
          title: 'Rimbaud, « Cahier de Douai » : émancipations créatrices',
          minutes: 35,
          objectives: [
            "Situer le Cahier de Douai dans la vie de Rimbaud et dans le contexte de l'année 1870.",
            "Identifier les formes d'émancipation à l'œuvre dans le recueil : personnelle, sociale, politique, religieuse et poétique.",
            "Analyser la manière dont Rimbaud s'approprie et bouscule le sonnet et l'alexandrin.",
            "Construire une réflexion argumentée sur le parcours « émancipations créatrices ».",
          ],
          course: [
            {
              heading: "Un adolescent de seize ans dans la guerre de 1870",
              paragraphs: [
                "Arthur Rimbaud naît le 20 octobre 1854 à Charleville, dans les Ardennes. Son père, officier, quitte très tôt le foyer ; sa mère, Vitalie, élève ses enfants avec une grande sévérité. Élève brillant du collège de Charleville, Rimbaud remporte des prix, notamment de vers latins. En janvier 1870 arrive un jeune professeur de rhétorique, Georges Izambard, qui lui prête des livres et l'encourage à écrire. En mai 1870, Rimbaud envoie des poèmes au poète parnassien Théodore de Banville, dans l'espoir d'être publié.",
                "Le 19 juillet 1870, la France déclare la guerre à la Prusse. Le 2 septembre, l'armée française est défaite à Sedan et Napoléon III est fait prisonnier ; le 4 septembre, la République est proclamée à Paris. Fin août, Rimbaud fugue vers Paris : arrêté à la gare du Nord parce qu'il voyage sans billet, il est enfermé à la prison de Mazas, jusqu'à ce qu'Izambard obtienne sa libération. Il séjourne ensuite à Douai, chez des tantes de son professeur, et y rencontre le poète Paul Demeny. En octobre, il fugue de nouveau, à pied, vers la Belgique (Charleroi, Bruxelles), avant de revenir à Douai.",
                "Au cours de ces deux séjours, à l'automne 1870, Rimbaud recopie de sa main vingt-deux poèmes et les confie à Demeny. On appelle cet ensemble le Cahier de Douai, ou Recueil Demeny. Rimbaud ne l'a jamais publié lui-même et n'a pas choisi ce titre : les poèmes ont été édités plus tard. Ils ont été écrits par un adolescent de quinze et seize ans, au moment où l'Empire s'effondre.",
              ],
              box: { label: "Repère", text: "1854 : naissance à Charleville. 1870 : guerre franco-prussienne, fugues, poèmes confiés à Demeny. Mai 1871 : lettres dites « du Voyant ». 1873 : Une saison en enfer, seul livre que Rimbaud fait imprimer. 1886 : publication des Illuminations. 1891 : mort à Marseille, à trente-sept ans." },
            },
            {
              heading: "S'émanciper : la route, le corps, la nature",
              paragraphs: [
                "La première émancipation est celle du corps et de la route. Dans « Sensation », deux quatrains au futur, le jeune poète rêve de partir par les sentiers d'été, sans parler ni penser, et d'aller loin dans la Nature, heureux comme avec une femme. Dans « Ma Bohème », sous-titré « Fantaisie », il se peint en vagabond aux poches trouées, qui dort à la belle étoile et rime en chemin comme un « Petit-Poucet rêveur ». La fugue devient un art de vivre et un art poétique.",
                "Les poèmes de la halte racontent les plaisirs simples conquis par cette liberté : dans « Au Cabaret-Vert, cinq heures du soir » et « La Maline », le marcheur fatigué savoure des tartines, du jambon et la bière, et observe une jeune serveuse. Le quotidien le plus prosaïque entre dans le sonnet. Dans « Roman », dont le premier vers affirme qu'on n'est pas sérieux quand on a dix-sept ans, Rimbaud met en scène avec humour les élans amoureux de l'adolescence et leurs clichés.",
              ],
            },
            {
              heading: "Se révolter : société, pouvoir, religion",
              paragraphs: [
                "Rimbaud s'émancipe aussi de la société qui l'entoure. « À la musique » fait la satire des bourgeois de Charleville réunis pour le concert militaire sur la place de la Gare : leur suffisance et leur médiocrité s'opposent au jeune poète qui suit les jeunes filles du regard. « Les Effarés », au contraire, regarde avec tendresse des enfants pauvres, dans le froid, qui contemplent le boulanger à travers le soupirail.",
                "La révolte est politique. « Le Forgeron » donne la parole à un homme du peuple qui interpelle Louis XVI ; « Morts de Quatre-vingt-douze et de Quatre-vingt-treize » exalte les soldats de la Révolution contre un journaliste bonapartiste ; « Rages de Césars » montre Napoléon III vaincu et prisonnier ; « L'Éclatante Victoire de Sarrebrück » tourne en dérision une image de propagande impériale. « Le Dormeur du val », enfin, dénonce la guerre sans jamais la nommer.",
                "La révolte est aussi religieuse. Dans « Le Mal », pendant que la mitraille fauche les soldats, Dieu rit parmi les ornements des autels et ne s'éveille que lorsque des mères, dans l'angoisse et les larmes, lui donnent un gros sou. Le poème associe la guerre, le pouvoir et l'Église dans une même accusation.",
              ],
              box: { label: "À retenir", text: "Le Cahier de Douai conjugue plusieurs émancipations : quitter la famille et la ville (fugue, bohème), jouir du monde sensible, railler la bourgeoisie, attaquer l'Empire et la guerre, contester la religion, et inventer une parole poétique personnelle." },
            },
            {
              heading: "Une émancipation poétique : jouer avec les formes",
              paragraphs: [
                "Rimbaud ne rejette pas encore les formes héritées : la plupart des poèmes sont en alexandrins et beaucoup sont des sonnets (« Le Dormeur du val », « Ma Bohème », « Le Mal », « Vénus Anadyomène », « Au Cabaret-Vert »). Mais il les bouscule de l'intérieur : rimes différentes d'un quatrain à l'autre, enjambements et rejets nombreux, vocabulaire familier ou trivial introduit dans une forme noble.",
                "Le mélange des registres est sa signature. Dans « Ma Bohème », le poète compare les élastiques de ses souliers abîmés aux cordes d'une lyre, symbole antique de la poésie : le sublime et le dérisoire se rencontrent. « Vénus Anadyomène » parodie le mythe de la naissance de Vénus en montrant une femme laide sortant d'une vieille baignoire, avec une chute volontairement choquante. « Le Dormeur du val » construit au contraire une chute tragique : le rejet de « Dort » au début du vers 7 installe l'illusion du sommeil, que le dernier vers détruit en révélant les deux blessures du soldat.",
                "Ces audaces annoncent les recherches suivantes. En mai 1871, dans deux lettres à Izambard et à Demeny dites « du Voyant », Rimbaud écrit que le poète doit se faire voyant par un long dérèglement de tous les sens et affirme « Je est un autre ». Le Cahier de Douai est l'atelier de cette émancipation : une jeune voix qui maîtrise la tradition pour mieux s'en libérer.",
              ],
            },
          ],
          keyPoints: [
            "Automne 1870 : Rimbaud, quinze puis seize ans, confie vingt-deux poèmes à Paul Demeny, à Douai ; il ne les a pas publiés lui-même.",
            "Contexte : guerre franco-prussienne, défaite de Sedan (2 septembre 1870), chute du Second Empire, fugues du poète.",
            "Émancipation du corps et de la route : « Sensation », « Ma Bohème », « Au Cabaret-Vert ».",
            "Révolte sociale, politique et religieuse : « À la musique », « Rages de Césars », « Le Mal », « Le Dormeur du val ».",
            "Émancipation poétique : sonnets et alexandrins bousculés, rejets, mélange du sublime et du trivial, parodie.",
            "Les lettres « du Voyant » (mai 1871) sont postérieures au recueil : elles en prolongent l'élan.",
          ],
          example: {
            statement: "Montrez comment « Le Dormeur du val » dénonce la guerre sans jamais la nommer.",
            solution: [
              "Identifier la forme : un sonnet en alexandrins, daté d'octobre 1870, donc écrit pendant la guerre franco-prussienne.",
              "Premier mouvement : les quatrains peignent un paysage lumineux et vivant, un « trou de verdure » où chante une rivière ; un jeune soldat y semble dormir. Le rejet de « Dort » au début du vers 7 renforce l'illusion du repos.",
              "Deuxième mouvement : les tercets accumulent des indices inquiétants (il est pâle, il sourit comme un enfant malade, la Nature doit le bercer car il a froid, les parfums ne le font plus frissonner).",
              "La chute : le dernier vers révèle « deux trous rouges » au côté droit. Le lecteur comprend que le soldat est mort et relit le poème autrement.",
              "Interprétation : Rimbaud ne décrit ni bataille ni ennemi. Le contraste entre la nature paisible et la mort d'un tout jeune homme rend la guerre absurde ; la chute oblige le lecteur à découvrir lui-même la violence.",
              "Conclusion : la dénonciation passe par la construction du sonnet, l'ironie tragique et la chute, non par un discours explicite.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chacun de ces poèmes du Cahier de Douai à la forme d'émancipation qui y domine (corps et route, révolte sociale, révolte politique, révolte religieuse) : « Ma Bohème », « Le Mal », « À la musique », « Rages de Césars », « Sensation ».",
              hint: "Demandez-vous contre quoi, ou vers quoi, le poète se tourne dans chaque texte.",
              solution: [
                "« Ma Bohème » : corps et route (le vagabondage du poète, la liberté de la fugue).",
                "« Le Mal » : révolte religieuse (Dieu indifférent aux massacres, qui ne s'éveille que pour l'argent des mères), mêlée à la dénonciation de la guerre.",
                "« À la musique » : révolte sociale (satire des bourgeois de Charleville).",
                "« Rages de Césars » : révolte politique (Napoléon III vaincu et prisonnier).",
                "« Sensation » : corps et route (le désir de partir dans la nature, la plénitude des sensations).",
              ],
            },
            {
              level: 2,
              statement: "« Ma Bohème » est un sonnet en alexandrins. Le poète y raconte ses errances : poches crevées, manteau usé, nuits à la belle étoile sous la Grande Ourse, vers composés au bord des routes ; il se compare au Petit Poucet et, dans le dernier tercet, assimile les élastiques de ses souliers abîmés aux cordes d'une lyre. À partir de ces éléments, montrez en trois points que le poème mêle émancipation de vie et émancipation poétique.",
              hint: "Pensez au sujet du poème, au choix des images et au contraste entre la forme du sonnet et ce qu'elle raconte.",
              solution: [
                "Premier point, la liberté vécue : le poème célèbre la fugue, la marche, la pauvreté joyeuse ; le poète n'a plus de toit que le ciel, il échappe à la famille et à la ville.",
                "Deuxième point, une figure du poète renouvelée : il n'est plus un inspiré solennel mais un enfant vagabond (« Petit-Poucet rêveur »), qui compose en marchant.",
                "Troisième point, le mélange des registres : la lyre, instrument d'Orphée et symbole de la haute poésie, devient les élastiques de souliers usés. Le sublime et le trivial se rencontrent, ce qui désacralise la poésie tout en la réinventant.",
                "Conclusion : la forme noble du sonnet accueille un sujet modeste et un ton ironique ; l'émancipation de la vie et celle de l'écriture vont ensemble.",
              ],
            },
            {
              level: 3,
              statement: "Type bac (dissertation). Sujet : « La poésie du Cahier de Douai est-elle seulement une poésie de la révolte ? » Vous répondrez à cette question en prenant appui sur le recueil de Rimbaud, sur les textes étudiés dans le cadre du parcours « émancipations créatrices » et sur votre culture littéraire. Proposez une problématique et un plan détaillé en trois parties.",
              hint: "Le mot « seulement » invite à reconnaître la révolte, puis à montrer ce qu'elle ouvre : la joie, la tendresse, l'invention d'une poétique.",
              solution: [
                "Problématique : la révolte du jeune Rimbaud n'est-elle qu'un refus, ou devient-elle le moteur d'une création qui célèbre aussi le monde et invente une voix ?",
                "Partie 1, une poésie de la révolte : contre la bourgeoisie (« À la musique »), contre l'Empire et la guerre (« Rages de Césars », « L'Éclatante Victoire de Sarrebrück », « Le Dormeur du val »), contre la religion (« Le Mal »), contre les conventions poétiques (parodie de « Vénus Anadyomène »).",
                "Partie 2, mais aussi une poésie de la joie et de la tendresse : bonheur de la route et des sensations (« Sensation », « Ma Bohème »), plaisirs simples (« Au Cabaret-Vert »), compassion pour les pauvres (« Les Effarés »), humour amoureux (« Roman »).",
                "Partie 3, une révolte créatrice : la contestation devient invention formelle (sonnets bousculés, rejets, mélange du sublime et du trivial) et affirmation d'un sujet poétique libre, qui annonce les lettres du Voyant (1871). Ouverture possible vers d'autres émancipations du parcours, par exemple l'audace formelle d'Apollinaire dans Alcools.",
                "Conclusion : la révolte est le point de départ, non le tout ; elle libère une énergie qui fait du recueil une émancipation créatrice au sens plein.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces étapes de la vie de Rimbaud.",
            items: [
              "Naissance à Charleville (octobre 1854)",
              "Arrivée du professeur Georges Izambard au collège (janvier 1870)",
              "Envoi de poèmes à Théodore de Banville (mai 1870)",
              "Déclaration de guerre à la Prusse (juillet 1870)",
              "Fugue à Paris et détention à Mazas (fin août 1870)",
              "Poèmes recopiés pour Paul Demeny à Douai (automne 1870)",
              "Lettres dites « du Voyant » (mai 1871)",
            ],
          },
          quiz: [
            {
              q: "À qui Rimbaud confie-t-il les poèmes du Cahier de Douai ?",
              options: ["Georges Izambard", "Paul Demeny", "Théodore de Banville", "Paul Verlaine"],
              answer: 1,
              why: "Le poète Paul Demeny, rencontré à Douai, reçoit les vingt-deux poèmes à l'automne 1870 ; d'où le nom de Recueil Demeny.",
            },
            {
              q: "Quel événement forme la toile de fond historique du recueil ?",
              options: ["La Commune de Paris", "La révolution de février 1848 et la IIe République", "La Première Guerre mondiale", "La guerre franco-prussienne"],
              answer: 3,
              why: "Les poèmes datent de 1870, pendant la guerre contre la Prusse et la chute du Second Empire ; la Commune n'éclate qu'en mars 1871.",
            },
            {
              q: "Dans « Le Dormeur du val », la mort du soldat est révélée :",
              options: ["dès le premier vers", "au milieu du premier quatrain", "dans le dernier vers", "dans le titre"],
              answer: 2,
              why: "Le sonnet entretient l'illusion du sommeil jusqu'à la chute, qui mentionne les deux blessures du soldat.",
            },
            {
              q: "Quel poème fait la satire des bourgeois de Charleville réunis pour un concert ?",
              options: ["À la musique", "Les Effarés", "Sensation", "Au Cabaret-Vert, cinq heures du soir"],
              answer: 0,
              why: "« À la musique » se moque des notables assemblés sur la place de la Gare pour écouter la musique militaire.",
            },
            {
              q: "La formule « Je est un autre » se trouve :",
              options: ["dans le poème « Roman »", "dans une lettre de mai 1871", "dans la préface du Cahier de Douai", "dans « Ma Bohème »"],
              answer: 1,
              why: "Elle figure dans les lettres dites du Voyant, écrites en mai 1871, après le Cahier de Douai, qui n'a d'ailleurs pas de préface.",
            },
          ],
          trap: "Présenter le Cahier de Douai comme un livre publié par Rimbaud, ou y attribuer les formules des lettres du Voyant : le recueil est un ensemble de manuscrits confiés à Demeny en 1870, et les lettres datent de mai 1871.",
          method: "Pour chaque poème étudié, préparez une fiche de quatre lignes : la forme (sonnet ou non, mètre), l'objet de l'émancipation, une expression brève à citer, un procédé (rejet, mélange des registres, chute, parodie). Une dizaine de fiches suffit à nourrir une dissertation.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ponge-rage-expression',
          title: 'Ponge, « La rage de l’expression » : dans l’atelier du poète',
          minutes: 35,
          objectives: [
            "Situer Francis Ponge et son projet poétique : prendre le parti des choses.",
            "Identifier les traces du travail d'écriture dans La Rage de l'expression : notes datées, variantes, définitions, autocritique.",
            "Analyser la manière dont Ponge fait de la recherche de l'expression juste le sujet même du livre.",
            "Construire une réflexion sur le parcours « dans l'atelier du poète ».",
          ],
          course: [
            {
              heading: "Francis Ponge, le parti pris des choses",
              paragraphs: [
                "Francis Ponge (1899-1988), né à Montpellier, se fait connaître avec Le Parti pris des choses (1942), recueil de courts textes en prose consacrés à des objets ordinaires : le cageot, la bougie, l'huître, le pain, l'orange. Son projet est de donner la parole aux choses muettes, de les regarder comme si on les voyait pour la première fois, et de renouveler la langue pour les dire avec exactitude.",
                "Ponge se méfie de la poésie lyrique traditionnelle, celle qui exprime surtout les émotions du poète et se sert de la nature comme d'un miroir. Il préfère se placer du côté de l'objet. Mais il sait que l'objet n'existe dans le texte que par les mots : il faut donc travailler la langue elle-même, ses sonorités, son étymologie, ses définitions. Le poète résume ailleurs ce double engagement en associant le « parti pris des choses » et la prise en compte des mots.",
              ],
              box: { label: "Définition", text: "Le parti pris des choses : choisir de décrire les objets du quotidien pour eux-mêmes, avec précision et sans effusion lyrique, en faisant de la langue l'outil d'une connaissance du monde." },
            },
            {
              heading: "La Rage de l'expression : publier l'atelier",
              paragraphs: [
                "La Rage de l'expression paraît en 1952 et rassemble des textes écrits pour l'essentiel entre la fin des années 1930 et le milieu des années 1940, pendant la guerre. On y trouve notamment « Berges de la Loire », « La Guêpe », « Notes prises pour un oiseau », « L'Œillet », « Le Mimosa », « Le Carnet du bois de pins » et « La Mounine ou Note après coup sur un ciel de Provence ».",
                "L'originalité du livre est de ne pas présenter des poèmes achevés mais le travail qui y mène. Ponge publie ses notes datées, ses brouillons, ses versions successives d'une même phrase, ses listes de mots, ses définitions recopiées du dictionnaire, ses hésitations et ses jugements sévères sur ses propres essais. Le lecteur entre dans l'atelier : il voit le poète chercher, se tromper, recommencer.",
                "Le titre dit cette obstination. La « rage » est à la fois une passion et une fureur : celle de trouver l'expression juste, qui rende compte de l'objet sans le trahir. Dans « Berges de la Loire », texte qui fonctionne comme un manifeste, Ponge prend la résolution de ne jamais sacrifier l'objet qu'il étudie à une trouvaille verbale séduisante ni à l'arrangement de ses trouvailles en un joli poème. Mieux vaut un texte inachevé mais fidèle à la chose qu'une œuvre bien faite mais fausse.",
              ],
            },
            {
              heading: "Les outils de l'atelier",
              paragraphs: [
                "Le premier outil est le dictionnaire. Ponge consulte longuement le Littré, recopie des définitions, explore l'étymologie et les sens oubliés des mots, comme si la langue contenait déjà une connaissance des choses qu'il faut retrouver. Le deuxième outil est la variation : une même phrase est reprise plusieurs fois, avec un adjectif changé, un rythme modifié, jusqu'à ce que le texte sonne juste.",
                "Le troisième outil est l'autocritique. Ponge commente ses tentatives, les juge trop faciles, trop conventionnelles, trop « poétiques » au mauvais sens du mot, et repart. L'échec fait partie du texte : certains ensembles avouent ne pas avoir atteint leur but. Enfin, l'attention aux sons et à la forme des mots est constante, car pour Ponge le mot est lui-même une sorte d'objet, avec son épaisseur et sa matière.",
              ],
              box: { label: "À retenir", text: "Dans La Rage de l'expression, le sujet du livre devient la recherche elle-même : notes datées, variantes, définitions, autocritique. Le texte inachevé n'est pas un défaut, c'est une éthique de l'exactitude." },
            },
            {
              heading: "Le parcours : dans l'atelier du poète",
              paragraphs: [
                "Le parcours invite à comparer plusieurs conceptions de la création. La tradition classique valorise le travail patient : Boileau, dans son Art poétique (1674), conseille de remettre vingt fois l'ouvrage sur le métier. Les romantiques mettent souvent en avant l'inspiration : dans « La Nuit de mai », Musset imagine une Muse qui vient visiter le poète. Ponge, lui, montre la fabrication et refuse le mythe du génie inspiré.",
                "D'autres écrivains ont réfléchi au travail de l'écriture : Baudelaire compare le poète à un artisan qui transforme la boue en or, Valéry s'intéresse davantage au travail de l'esprit qu'à l'œuvre achevée, et l'étude des manuscrits (on parle de critique génétique) révèle les ratures de Flaubert ou de Hugo. Avec Ponge, ce que l'on cache d'ordinaire devient l'œuvre même : l'atelier est ouvert au lecteur.",
              ],
            },
          ],
          keyPoints: [
            "Francis Ponge (1899-1988) : Le Parti pris des choses (1942), puis La Rage de l'expression (1952).",
            "Projet : dire les objets ordinaires avec exactitude, contre l'effusion lyrique, en travaillant la langue.",
            "Le livre publie l'atelier : notes datées, versions successives, définitions du Littré, hésitations, autocritique.",
            "« Berges de la Loire » : ne jamais sacrifier l'objet à une trouvaille verbale ou à un poème bien arrangé.",
            "La « rage » : passion obstinée de l'expression juste, qui accepte l'inachèvement.",
            "Parcours : travail (Boileau) contre inspiration (Musset), critique génétique, atelier ouvert.",
          ],
          example: {
            statement: "Expliquez en quoi le titre La Rage de l'expression éclaire le projet de Ponge dans ce recueil.",
            solution: [
              "Analyser les mots : « expression » désigne l'acte de dire, de mettre en mots ; « rage » associe la passion, l'acharnement et une forme de colère.",
              "Relier au contenu : le livre montre Ponge aux prises avec la langue, reprenant sans cesse ses phrases pour dire un objet (une guêpe, un oiseau, un œillet, un bois de pins).",
              "Relier à la démarche : la rage naît de l'écart entre la chose et les mots ; les formules toutes faites trahissent l'objet, il faut donc chercher encore.",
              "Relier à la forme : notes, variantes et inachèvements sont les traces visibles de cette rage ; le livre expose le combat au lieu d'en cacher les étapes.",
              "Réponse : le titre annonce un recueil dont le sujet est la lutte obstinée pour l'expression juste ; la poésie y est un travail exigeant, non une inspiration facile.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici un fragment de brouillon écrit pour l'exercice, à la manière de Ponge : « 3 mars. La tasse. Non : pas « humble », c'est trop facile. Mieux : la tasse attend, ventre rond, qu'on la remplisse. 4 mars. « Attend » ne va pas, la tasse n'attend rien. Chercher au dictionnaire : tasse, petit récipient à anse. L'anse : une oreille pour la main. » Relevez quatre procédés de l'atelier du poète.",
              hint: "Cherchez les dates, les mots refusés, le recours au dictionnaire et la réécriture d'une même idée.",
              solution: [
                "Des notes datées (« 3 mars », « 4 mars ») : le texte montre le temps de la recherche.",
                "Le refus d'un mot jugé facile (« humble ») : c'est l'autocritique, qui écarte le cliché.",
                "Une correction d'une version à l'autre : la phrase « la tasse attend » est d'abord proposée puis rejetée le lendemain parce qu'elle prête à l'objet une intention qu'il n'a pas.",
                "Le recours au dictionnaire (« petit récipient à anse ») puis une image neuve tirée de la définition (« une oreille pour la main ») : la langue aide à mieux voir l'objet.",
              ],
            },
            {
              level: 2,
              statement: "Comparez ces deux versions d'une phrase sur une bougie (écrites pour l'exercice) : version A, « La bougie, douce compagne des soirs mélancoliques, pleure sa cire en silence » ; version B, « La bougie se mange elle-même par le haut, et sa flamme penche dès qu'on respire ». Laquelle correspond le mieux au projet de Ponge ? Justifiez en trois arguments.",
              hint: "Demandez-vous laquelle parle surtout des émotions du poète et laquelle observe vraiment l'objet.",
              solution: [
                "La version A est faite de clichés lyriques : « douce compagne », « soirs mélancoliques », « pleure » ; elle prête des sentiments humains à la bougie et parle surtout de l'état d'âme de celui qui écrit.",
                "La version B observe le fonctionnement réel de l'objet : la bougie se consume par le haut, la flamme réagit au moindre souffle. Les images (« se mange elle-même ») naissent de l'observation.",
                "La version B renouvelle la langue : l'expression est surprenante et exacte à la fois, elle fait voir l'objet autrement, alors que la version A répète des formules attendues.",
                "Conclusion : la version B correspond au parti pris des choses ; la version A représente ce lyrisme convenu dont Ponge se méfie.",
              ],
            },
            {
              level: 3,
              statement: "Type bac (dissertation). Sujet : « La Rage de l'expression est-elle le récit d'un échec ? » Vous répondrez en prenant appui sur l'œuvre de Ponge, sur les textes étudiés dans le cadre du parcours « dans l'atelier du poète » et sur votre culture littéraire. Proposez une problématique et un plan détaillé.",
              hint: "Reconnaissez d'abord ce qui ressemble à un échec (inachèvement, autocritique), puis demandez-vous si cet échec n'est pas une réussite d'un autre ordre.",
              solution: [
                "Problématique : en exposant ses tâtonnements et ses textes inachevés, Ponge avoue-t-il l'impuissance de la poésie, ou invente-t-il une autre façon de réussir ?",
                "Partie 1, un livre qui affiche l'échec : textes inachevés, versions abandonnées, jugements sévères du poète sur lui-même ; l'objet semble toujours échapper aux mots.",
                "Partie 2, un échec assumé comme méthode : « Berges de la Loire » préfère la fidélité à l'objet au poème bien fini ; l'inachèvement est une exigence morale d'exactitude ; le lecteur suit une recherche plutôt qu'il ne contemple un résultat.",
                "Partie 3, une réussite d'un nouveau genre : des trouvailles d'expression naissent du travail, le livre invente une forme (le carnet, la note, le texte en chantier) et renouvelle la figure du poète-artisan, dans la lignée de Boileau et à rebours du mythe de l'inspiration (Musset).",
                "Conclusion : ce qui ressemble à un échec est la condition d'une poésie de l'exactitude ; l'atelier ouvert est l'œuvre elle-même.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur Ponge et La Rage de l'expression.",
            statements: [
              { text: "Le Parti pris des choses (1942) précède La Rage de l'expression (1952).", true: true, why: "Le premier recueil fait connaître Ponge ; La Rage de l'expression paraît dix ans plus tard." },
              { text: "Ponge présente dans ce livre uniquement des poèmes achevés et polis.", true: false, why: "Il publie au contraire notes, variantes et brouillons : c'est l'atelier qui est donné à lire." },
              { text: "Ponge cherche avant tout à exprimer ses états d'âme face à la nature.", true: false, why: "Il se méfie de l'effusion lyrique et veut dire l'objet pour lui-même." },
              { text: "Le dictionnaire Littré est l'un des outils de travail de Ponge.", true: true, why: "Il y puise définitions et étymologies pour mieux saisir les choses par les mots." },
              { text: "Dans « Berges de la Loire », Ponge décide de ne jamais sacrifier l'objet à l'arrangement d'un poème.", true: true, why: "Ce texte fonctionne comme un manifeste de la fidélité à l'objet." },
              { text: "Pour Ponge, un texte inachevé est forcément un texte raté qu'il faut cacher.", true: false, why: "L'inachèvement est assumé et publié : il témoigne de l'exigence d'exactitude." },
              { text: "Boileau conseille, dans son Art poétique, de reprendre patiemment son ouvrage.", true: true, why: "Il recommande de remettre vingt fois l'ouvrage sur le métier, ce qui rapproche son idéal du travail de Ponge." },
            ],
          },
          quiz: [
            {
              q: "En quelle année paraît La Rage de l'expression ?",
              options: ["1942", "1952", "1913", "1970"],
              answer: 1,
              why: "Le recueil paraît en 1952 ; 1942 est la date du Parti pris des choses.",
            },
            {
              q: "Qu'est-ce qui fait l'originalité de La Rage de l'expression ?",
              options: ["Il est entièrement écrit en alexandrins", "Il raconte la vie de Ponge pendant la guerre", "Il montre l'écriture en train de se faire", "Il traduit des poèmes étrangers"],
              answer: 2,
              why: "Le livre publie notes, versions et autocritiques : le lecteur entre dans l'atelier du poète.",
            },
            {
              q: "Quel texte du recueil fonctionne comme un manifeste de la fidélité à l'objet ?",
              options: ["« La Guêpe »", "« Le Mimosa »", "« La Mounine ou Note après coup sur un ciel de Provence »", "« Berges de la Loire »"],
              answer: 3,
              why: "Dans « Berges de la Loire », Ponge s'engage à ne pas sacrifier l'objet aux trouvailles verbales.",
            },
            {
              q: "De quel type de poésie Ponge se méfie-t-il ?",
              options: ["Du lyrisme sentimental", "De la prose", "De la description précise des objets", "De l'usage du dictionnaire"],
              answer: 0,
              why: "Ponge veut se placer du côté des choses et refuse l'effusion sentimentale qui fait de la nature un simple miroir.",
            },
            {
              q: "Dans le parcours, quelle conception de la création Ponge rejette-t-il ?",
              options: ["Le travail patient et la réécriture", "L'inspiration venue d'une Muse", "L'observation attentive des objets", "Le recours au dictionnaire"],
              answer: 1,
              why: "Ponge montre la fabrication du texte et s'oppose à l'idée romantique d'une inspiration venue d'ailleurs.",
            },
          ],
          trap: "Croire que les textes de Ponge sont des descriptions objectives et simples : ils sont aussi une réflexion constante sur la langue, et les notes, variantes et échecs font partie de l'œuvre.",
          method: "Quand vous citez Ponge, nommez toujours le texte précis du recueil et le procédé d'atelier qu'il illustre (variante, définition, autocritique, inachèvement) : la dissertation gagne en précision si chaque exemple montre une étape du travail.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'dorion-mes-forets',
          title: 'Dorion, « Mes forêts » : la poésie, la nature, l’intime',
          minutes: 30,
          objectives: [
            "Situer Hélène Dorion et Mes forêts dans la poésie contemporaine de langue française.",
            "Identifier les procédés du vers libre contemporain : vers brefs, blancs, anaphore, images.",
            "Analyser la manière dont la forêt devient à la fois un paysage, un miroir de soi et un monde fragile.",
            "Situer l'œuvre dans le parcours « la poésie, la nature, l'intime », de Ronsard aux poètes d'aujourd'hui.",
          ],
          course: [
            {
              heading: "Une poète québécoise contemporaine",
              paragraphs: [
                "Hélène Dorion, née à Québec en 1958, est une poète, romancière et essayiste québécoise dont l'œuvre, commencée au début des années 1980, compte de nombreux recueils. Mes forêts paraît en 2021. Le livre appartient à la poésie de langue française d'aujourd'hui, écrite hors de France, ce qui rappelle que la littérature francophone dépasse largement les frontières de l'Hexagone.",
                "Le recueil est composé de poèmes en vers libres, souvent brefs, organisés en plusieurs sections. Le paysage de référence est celui de la forêt boréale et des grands espaces du Québec : arbres, écorces, racines, mousses, rochers, rivières, oiseaux, neige et saisons. Mais cette forêt n'est jamais un simple décor : elle devient une manière de penser le temps, la mémoire et la place de l'être humain dans le monde vivant.",
              ],
            },
            {
              heading: "« Mes » forêts : la nature et l'intime",
              paragraphs: [
                "Le titre associe un possessif, « mes », et un pluriel, « forêts ». Le possessif dit l'intimité : ces forêts sont celles de la poète, de sa mémoire, de son corps, de ses deuils et de ses joies. Le pluriel dit l'ampleur : il y a plusieurs forêts, réelles et intérieures, qui se superposent. La reprise de l'expression au fil du recueil fonctionne comme une anaphore, un refrain qui relance la méditation.",
                "La forêt sert de miroir à l'intériorité : l'écorce peut évoquer la peau et ses blessures, les racines l'enfance et la filiation, les cycles des saisons le vieillissement, la perte et le renouveau. Mais le mouvement va aussi dans l'autre sens : la poète ne projette pas seulement ses sentiments sur la nature, elle se découvre elle-même comme une part de ce monde vivant. L'intime et la nature s'éclairent mutuellement.",
              ],
              box: { label: "À retenir", text: "Dans Mes forêts, la forêt est à la fois un paysage réel, un miroir de l'intériorité et un monde vivant dont l'être humain fait partie. Le possessif « mes » dit l'intime, le pluriel « forêts » dit l'ampleur et la diversité." },
            },
            {
              heading: "Une poétique de l'attention et de la fragilité",
              paragraphs: [
                "L'écriture de Dorion repose sur des vers libres courts, des phrases simples, des images concrètes et des blancs nombreux. Le silence de la page imite celui de la forêt et laisse au lecteur le temps de voir. Le rythme naît de la longueur variable des vers, des reprises et des ruptures, non d'un nombre fixe de syllabes. Le langage est sobre : il cherche la justesse plus que l'éclat.",
                "Le recueil porte aussi une conscience écologique. La forêt est un monde fragile, exposé à l'action humaine et au temps ; la regarder avec attention, c'est déjà la protéger. La poésie devient alors une forme de soin : elle nomme ce qui risque de disparaître et rappelle les liens qui unissent l'humain au vivant. Cette inquiétude ne se dit pas sous forme de discours militant, mais à travers des images et une méditation.",
              ],
            },
            {
              heading: "Le parcours : la poésie, la nature, l'intime",
              paragraphs: [
                "La relation entre nature et sentiment traverse toute l'histoire de la poésie. Au XVIe siècle, Ronsard, dans l'élégie « Contre les bûcherons de la forêt de Gastine », s'indigne qu'on abatte une forêt aimée et imagine le sang des nymphes coulant sous l'écorce : on y lit déjà une défense de la forêt. Au XIXe siècle, Lamartine, dans « Le Lac » (Méditations poétiques, 1820), demande à la nature de garder le souvenir d'un amour perdu : c'est le modèle du lyrisme romantique.",
                "Baudelaire, dans « Correspondances » (Les Fleurs du mal, 1857), fait de la nature un temple et parle de l'homme qui passe à travers des « forêts de symboles » : la nature devient un langage à déchiffrer. Au XXe siècle, Philippe Jaccottet pratique une poésie de l'attention aux choses simples du paysage. Dorion prolonge cette tradition en y ajoutant une conscience contemporaine de la fragilité du vivant.",
              ],
              box: { label: "Repère", text: "Ronsard, « Contre les bûcherons de la forêt de Gastine » (XVIe siècle). Lamartine, « Le Lac » (1820). Hugo, Les Contemplations (1856). Baudelaire, « Correspondances » (1857). Jaccottet (1925-2021), poésie de l'attention. Dorion, Mes forêts (2021)." },
            },
          ],
          keyPoints: [
            "Hélène Dorion, poète québécoise née en 1958 ; Mes forêts paraît en 2021.",
            "Vers libres brefs, blancs, reprises et images concrètes : une poétique de l'attention.",
            "La forêt : paysage réel, miroir de l'intériorité (mémoire, corps, deuil) et monde vivant fragile.",
            "« Mes » dit l'intime, « forêts » au pluriel dit l'ampleur ; l'expression revient comme un refrain.",
            "Parcours : de Ronsard et Lamartine à Baudelaire et Jaccottet, la nature parle de l'être humain ; Dorion y ajoute une conscience écologique.",
          ],
          example: {
            statement: "Expliquez le titre Mes forêts et ce qu'il annonce du recueil.",
            solution: [
              "Observer la grammaire : un déterminant possessif de la première personne (« mes ») et un nom au pluriel (« forêts »).",
              "Le possessif annonce l'intime : il ne s'agit pas de la forêt en général mais des forêts vécues, aimées, intériorisées par la poète.",
              "Le pluriel annonce la diversité : forêts réelles du Québec, forêts de la mémoire, forêts du corps et de l'esprit.",
              "Le titre suggère aussi une appartenance réciproque : la poète possède ces forêts autant qu'elle leur appartient, puisqu'elle se découvre comme une part du vivant.",
              "Réponse : le titre réunit les deux pôles du parcours, la nature et l'intime, et annonce un recueil où le paysage devient un lieu de méditation sur soi et sur le monde.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici un poème en vers libres écrit pour l'exercice : « mes chemins sont des lignes de pluie / ils traversent l'enfance / et s'arrêtent au bord d'un lac / où personne ne m'attend // mes chemins / gardent la trace de pas effacés / une mousse lente / recouvre ce que j'ai perdu ». Relevez quatre caractéristiques du vers libre contemporain.",
              hint: "Observez la longueur des vers, la ponctuation, les majuscules, les blancs et les reprises.",
              solution: [
                "Des vers de longueur variable, sans nombre fixe de syllabes et sans rime régulière.",
                "L'absence de ponctuation et de majuscule en début de vers : le découpage en vers et le blanc remplacent la ponctuation.",
                "Un blanc entre deux strophes (marqué ici par //) et un vers très court isolé (« mes chemins ») qui crée une pause.",
                "L'anaphore de « mes chemins », qui ouvre les deux strophes et donne un rythme de refrain ; s'y ajoutent des métaphores qui relient nature et intime (la mousse qui recouvre ce qui a été perdu).",
              ],
            },
            {
              level: 2,
              statement: "Dans « Le Lac » (1820), Lamartine revient seul au bord d'un lac où il a connu un amour heureux ; il supplie le temps de suspendre sa course et demande à la nature (le lac, les rochers, les bois) de garder le souvenir de ce bonheur. Le poème est écrit en strophes régulières. Comparez en trois points la relation entre nature et intime chez Lamartine et dans Mes forêts.",
              hint: "Comparez le rôle donné à la nature, la forme des poèmes et l'époque de chacun.",
              solution: [
                "Point commun : dans les deux cas, la nature est liée à la mémoire et à l'intériorité ; elle accueille le souvenir, le deuil, la conscience du temps qui passe.",
                "Différence de rôle : chez Lamartine, la nature est surtout un témoin et un confident à qui le poète confie son amour perdu ; chez Dorion, elle est aussi un monde vivant dont la poète fait partie et dont elle perçoit la fragilité.",
                "Différence de forme : Lamartine emploie des strophes et des mètres réguliers, une éloquence ample et des apostrophes ; Dorion écrit en vers libres brefs, avec des blancs et une parole sobre.",
                "Conclusion : on passe d'un lyrisme romantique où la nature reflète le cœur du poète à une poésie contemporaine où le moi et le vivant sont interdépendants.",
              ],
            },
            {
              level: 3,
              statement: "Type bac (dissertation). Sujet : « Dans Mes forêts, la nature n'est-elle qu'un miroir de l'intime ? » Vous répondrez en prenant appui sur le recueil d'Hélène Dorion, sur les textes étudiés dans le cadre du parcours « la poésie, la nature, l'intime » et sur votre culture littéraire. Proposez une problématique et un plan détaillé.",
              hint: "L'expression « n'est-elle qu'un miroir » vous invite à reconnaître la fonction de miroir, puis à montrer ce que la nature est d'autre.",
              solution: [
                "Problématique : la forêt de Dorion sert-elle seulement à exprimer les émotions de la poète, ou est-elle aussi un monde vivant qui transforme la manière d'être soi ?",
                "Partie 1, un miroir de l'intime : la forêt dit la mémoire, l'enfance, le corps, le deuil ; le possessif « mes » et la reprise de l'expression lient le paysage à la vie intérieure, comme chez Lamartine.",
                "Partie 2, une nature qui existe pour elle-même : précision des éléments (écorces, racines, mousses, oiseaux), attention au détail, silence et blancs qui laissent la forêt exister ; la nature est un monde fragile qu'il faut regarder et protéger, comme le pressentait déjà Ronsard face aux bûcherons.",
                "Partie 3, une interdépendance du moi et du vivant : la poète se découvre comme une part de la forêt ; l'intime n'est plus enfermé dans un moi séparé mais ouvert au monde ; la poésie devient soin et méditation, dans la lignée d'une poésie de l'attention (Jaccottet).",
                "Conclusion : la nature est un miroir, mais un miroir qui renvoie au-delà de soi, vers la fragilité et la beauté du vivant.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque poète à l'œuvre du parcours qui lui correspond.",
            pairs: [
              { left: "Ronsard", right: "« Contre les bûcherons de la forêt de Gastine »" },
              { left: "Lamartine", right: "« Le Lac », dans les Méditations poétiques (1820)" },
              { left: "Baudelaire", right: "« Correspondances », dans Les Fleurs du mal (1857)" },
              { left: "Hugo", right: "Les Contemplations (1856)" },
              { left: "Hélène Dorion", right: "Mes forêts (2021)" },
            ],
          },
          quiz: [
            {
              q: "D'où vient Hélène Dorion ?",
              options: ["De Belgique", "De Suisse", "Du Sénégal", "Du Québec"],
              answer: 3,
              why: "Hélène Dorion est une poète québécoise, née à Québec en 1958.",
            },
            {
              q: "Quelle forme domine dans Mes forêts ?",
              options: ["Le sonnet en alexandrins réguliers", "Le vers libre, souvent bref", "Le poème en prose rimé", "La ballade médiévale"],
              answer: 1,
              why: "Le recueil est écrit en vers libres, souvent courts, avec des blancs qui rythment la lecture.",
            },
            {
              q: "Que suggère le possessif « mes » dans le titre ?",
              options: ["Une dimension intime et personnelle", "Une propriété au sens juridique du terme", "Un ton ironique", "Un dialogue avec le lecteur"],
              answer: 0,
              why: "Le possessif indique que ces forêts sont celles de la mémoire, du corps et de la vie intérieure de la poète.",
            },
            {
              q: "Quel poète du XVIe siècle s'indigne contre l'abattage d'une forêt ?",
              options: ["Du Bellay", "Marot", "Ronsard", "Montaigne"],
              answer: 2,
              why: "Ronsard écrit l'élégie « Contre les bûcherons de la forêt de Gastine », où il défend la forêt menacée.",
            },
            {
              q: "Quel élément distingue Dorion du lyrisme romantique de Lamartine ?",
              options: ["L'absence totale de souvenirs", "Le refus de parler de soi", "L'usage exclusif de la prose et de la rime", "La conscience de la fragilité du vivant"],
              answer: 3,
              why: "Comme Lamartine, Dorion lie nature et intime, mais elle regarde aussi la nature comme un monde vivant fragile dont l'humain fait partie.",
            },
          ],
          trap: "Réduire Mes forêts à une description de paysages, ou à l'inverse à une simple confidence : l'intérêt du recueil est la relation entre les deux, la forêt disant l'intime et l'intime s'ouvrant au vivant.",
          method: "Pour analyser un poème en vers libres, observez d'abord la page avant de lire le sens : longueur des vers, blancs, vers isolés, reprises, absence de ponctuation. Puis demandez-vous ce que chacun de ces choix fait ressentir ou souligne.",
        },
      ],
    },
    /* ==================================================================== */
    /* ÉTUDE DE LA LANGUE : LA PHRASE COMPLEXE                               */
    /* ==================================================================== */
    {
      id: 'langue-phrase-complexe',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'juxtaposition-coordination',
          title: 'Juxtaposition, coordination, subordination : relier les propositions',
          minutes: 30,
          objectives: [
            "Délimiter les propositions d'une phrase complexe à partir de ses verbes conjugués.",
            "Identifier les trois modes de liaison des propositions : juxtaposition, coordination, subordination.",
            "Distinguer les grandes catégories de subordonnées : relative, conjonctive complétive, conjonctive circonstancielle, interrogative indirecte.",
            "Analyser l'effet stylistique de la parataxe et de l'hypotaxe dans un texte.",
          ],
          course: [
            {
              heading: "Phrase simple, phrase complexe, proposition",
              paragraphs: [
                "Une proposition est un ensemble de mots organisé autour d'un verbe, le plus souvent conjugué, avec son sujet et ses compléments. Une phrase simple ne contient qu'une proposition (« Le jour se lève. ») ; une phrase complexe en contient plusieurs (« Le jour se lève et la ville s'éveille. »). Pour analyser une phrase complexe, on commence donc par repérer les verbes conjugués : chacun signale en principe une proposition.",
                "Attention aux formes verbales non conjuguées. Un infinitif ou un participe est souvent un simple complément à l'intérieur d'une proposition (« Il veut partir » ne contient qu'une proposition). Mais il existe aussi des subordonnées infinitives (« J'entends les oiseaux chanter ») et participiales (« La nuit tombée, nous rentrâmes »), dont le verbe a son propre sujet. On les rencontre surtout dans les textes littéraires.",
              ],
              box: { label: "Méthode", text: "Pour délimiter les propositions : 1) repérez les verbes conjugués ; 2) rattachez à chaque verbe son sujet et ses compléments ; 3) repérez les mots qui relient les propositions (ponctuation, conjonctions, pronoms relatifs) ; 4) nommez le mode de liaison." },
            },
            {
              heading: "Juxtaposition et coordination",
              paragraphs: [
                "Des propositions sont juxtaposées lorsqu'elles sont placées côte à côte, séparées seulement par un signe de ponctuation (virgule, point-virgule, deux-points), sans mot de liaison : « Il pleut, nous restons. » Elles restent grammaticalement indépendantes. Le rapport logique entre elles n'est pas exprimé mais il existe : ici, la première proposition donne la cause de la seconde. Le lecteur doit le reconstituer.",
                "Des propositions sont coordonnées lorsqu'elles sont reliées par une conjonction de coordination : mais, ou, et, donc, or, ni, car. Elles restent de même niveau, aucune ne dépend de l'autre. Chaque conjonction a un sens : addition (et), alternative (ou), opposition (mais), conséquence (donc), cause (car), articulation d'un raisonnement (or). Certains adverbes, dits adverbes de liaison ou connecteurs, peuvent aussi relier des propositions : puis, ensuite, pourtant, cependant, en effet, c'est pourquoi.",
                "Une même relation logique peut donc s'exprimer de plusieurs façons : « Il pleut, nous restons » (juxtaposition), « Il pleut, donc nous restons » (coordination), « Nous restons parce qu'il pleut » (subordination). Le choix n'est pas indifférent : il rend le lien plus ou moins explicite.",
              ],
              box: { label: "À retenir", text: "Les sept conjonctions de coordination : mais, ou, et, donc, or, ni, car. Car ne relie que des propositions (jamais deux mots), et il exprime la cause sans créer de subordonnée." },
            },
            {
              heading: "La subordination",
              paragraphs: [
                "Dans la subordination, une proposition, dite subordonnée, dépend d'une autre, dite principale : elle ne peut pas former une phrase à elle seule. « Je sais » est une principale ; « que vous viendrez » est une subordonnée qui ne se suffit pas. La subordonnée est introduite par un mot subordonnant : un pronom relatif (qui, que, quoi, dont, où, lequel), une conjonction de subordination (que, quand, comme, si, lorsque, puisque, quoique, et les locutions comme parce que, afin que, bien que), ou un mot interrogatif (si, qui, quand, pourquoi, comment...).",
                "On distingue quatre grandes catégories. La subordonnée relative complète un nom, son antécédent : « la lettre qu'il attendait ». La subordonnée conjonctive complétive, introduite par que, occupe la place d'un nom, souvent comme complément d'objet du verbe : « Il comprend que tout est perdu » (on peut la remplacer par « cela »). La subordonnée conjonctive circonstancielle exprime une circonstance (temps, cause, but, conséquence, concession, condition, comparaison) et peut souvent être déplacée ou supprimée : « Quand le jour se lève, la ville s'éveille ». Enfin, la subordonnée interrogative indirecte rapporte une question : « Je me demande s'il viendra ».",
                "Une subordonnée peut elle-même être la principale d'une autre subordonnée : « Il comprit que la lettre qu'il attendait n'arriverait pas ». Ici, la relative « qu'il attendait » complète « lettre », nom qui appartient à la complétive. On décrit alors la phrase par emboîtements successifs.",
              ],
              box: { label: "Repère", text: "Relative : complète un nom (antécédent). Complétive : remplaçable par « cela », souvent COD. Circonstancielle : complément de phrase, souvent mobile. Interrogative indirecte : question rapportée après un verbe comme se demander, savoir, ignorer." },
            },
            {
              heading: "Parataxe et hypotaxe : des choix de style",
              paragraphs: [
                "On appelle parataxe la construction qui juxtapose ou coordonne les propositions sans les hiérarchiser, et hypotaxe celle qui les subordonne les unes aux autres. La parataxe produit un effet de rapidité, de brutalité ou d'évidence : la célèbre formule latine attribuée à César, traduite par « Je suis venu, j'ai vu, j'ai vaincu », juxtapose trois actions pour suggérer une victoire immédiate. Elle laisse au lecteur le soin d'établir les liens.",
                "L'hypotaxe explicite au contraire les relations logiques : elle est la marque de la prose argumentative et de la période oratoire, longue phrase organisée en membres équilibrés. Deux autres figures sont utiles en commentaire : l'asyndète, absence d'un mot de liaison attendu (« Il entra, il vit, il partit »), et la polysyndète, répétition insistante d'une conjonction (« et le vent, et la pluie, et la nuit »). Dans une analyse, nommer la construction ne suffit pas : il faut en interpréter l'effet.",
              ],
            },
          ],
          keyPoints: [
            "Une proposition s'organise autour d'un verbe ; on repère d'abord les verbes conjugués.",
            "Juxtaposition : ponctuation seule ; coordination : mais, ou, et, donc, or, ni, car ; subordination : une proposition dépend d'une principale.",
            "Mots subordonnants : pronoms relatifs, conjonctions de subordination, mots interrogatifs.",
            "Quatre subordonnées : relative, complétive, circonstancielle, interrogative indirecte.",
            "Parataxe (liens implicites, rapidité) et hypotaxe (liens explicites, argumentation) sont des choix de style.",
          ],
          example: {
            statement: "Analysez la phrase suivante : « La pluie tombait depuis le matin ; les rues étaient désertes, mais Paul voulut sortir parce qu'il attendait une lettre qui ne venait pas. »",
            solution: [
              "Repérer les verbes conjugués : tombait, étaient, voulut, attendait, venait. La phrase compte cinq propositions (« sortir » est un infinitif complément de « voulut »).",
              "P1 « La pluie tombait depuis le matin » et P2 « les rues étaient désertes » sont juxtaposées par le point-virgule.",
              "P3 « Paul voulut sortir » est coordonnée à P2 par la conjonction « mais », qui exprime l'opposition.",
              "P4 « parce qu'il attendait une lettre » est une subordonnée conjonctive circonstancielle de cause ; sa principale est P3.",
              "P5 « qui ne venait pas » est une subordonnée relative, introduite par le pronom « qui », qui complète l'antécédent « lettre » ; elle dépend de P4.",
              "Bilan : la phrase passe de la juxtaposition (décor) à la coordination (opposition) puis à deux subordinations emboîtées, qui expliquent la décision du personnage.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque phrase, dites si les propositions sont juxtaposées, coordonnées ou subordonnées : a) « Le vent se lève, les volets claquent. » b) « Il voulait partir, mais la porte était fermée. » c) « Je sais que vous viendrez. » d) « Elle n'a pas répondu, car elle dormait. » e) « Quand le jour se lève, la ville s'éveille. »",
              hint: "Cherchez ce qui relie les deux verbes conjugués : un signe de ponctuation seul, une des sept conjonctions de coordination, ou un mot subordonnant.",
              solution: [
                "a) Juxtaposition : les deux propositions sont séparées par une simple virgule ; un lien de cause à effet reste implicite.",
                "b) Coordination par « mais » (opposition).",
                "c) Subordination : « que vous viendrez » est une complétive, COD de « sais ».",
                "d) Coordination par « car » (cause). Car est une conjonction de coordination, non de subordination.",
                "e) Subordination : « Quand le jour se lève » est une circonstancielle de temps qui dépend de « la ville s'éveille ».",
              ],
            },
            {
              level: 2,
              statement: "Délimitez les propositions de la phrase suivante, puis donnez la nature de chacune et son rôle : « Le voyageur qui arrivait de Lyon comprit qu'il avait manqué le dernier train, mais il ne s'inquiéta pas, car il connaissait un hôtel qui restait ouvert la nuit. »",
              hint: "Il y a six verbes conjugués. Attention : la première principale est coupée en deux par une relative.",
              solution: [
                "Verbes conjugués : arrivait, comprit, avait manqué, s'inquiéta, connaissait, restait. Six propositions.",
                "P1 « Le voyageur comprit » : principale, interrompue par P2.",
                "P2 « qui arrivait de Lyon » : subordonnée relative, complète l'antécédent « voyageur ».",
                "P3 « qu'il avait manqué le dernier train » : subordonnée conjonctive complétive, COD de « comprit ».",
                "P4 « mais il ne s'inquiéta pas » : proposition coordonnée à P1 par « mais » (opposition).",
                "P5 « car il connaissait un hôtel » : coordonnée à P4 par « car » (cause) ; elle est principale par rapport à P6.",
                "P6 « qui restait ouvert la nuit » : subordonnée relative, complète l'antécédent « hôtel ».",
              ],
            },
            {
              level: 3,
              statement: "Type bac (question de grammaire de l'oral). Voici une phrase écrite pour l'exercice, dans l'esprit des moralistes : « On croit être libre, et l'on obéit ; on se plaint du maître, mais on le sert, parce que la coutume a fait de la chaîne une habitude. » Analysez la construction de cette phrase et montrez ce qu'elle apporte au sens.",
              hint: "Repérez cinq verbes conjugués, puis observez la symétrie entre les deux premiers ensembles et le rôle de la dernière proposition.",
              solution: [
                "Délimitation : cinq verbes conjugués (croit, obéit, se plaint, sert, a fait), donc cinq propositions ; « être libre » est un infinitif COD de « croit ».",
                "Premier ensemble : P1 « On croit être libre » et P2 « l'on obéit » sont coordonnées par « et », qui prend ici une valeur d'opposition (et pourtant).",
                "Les deux ensembles sont juxtaposés par le point-virgule.",
                "Second ensemble : P3 « on se plaint du maître » et P4 « on le sert » sont coordonnées par « mais » (opposition explicite).",
                "P5 « parce que la coutume a fait de la chaîne une habitude » est une subordonnée conjonctive circonstancielle de cause dont la principale est P4.",
                "Effet : la phrase construit deux antithèses parallèles (croire / obéir, se plaindre / servir) par coordination, ce qui souligne la contradiction des hommes ; la subordination finale apporte l'explication, la coutume. La syntaxe passe du constat à la cause, ce qui rappelle l'analyse de La Boétie sur la servitude volontaire.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Juxtaposition, coordination, subordination.",
            statements: [
              { text: "« Car » est une conjonction de coordination.", true: true, why: "Car fait partie de la liste mais, ou, et, donc, or, ni, car ; il exprime la cause sans subordonner." },
              { text: "Dans « Il pleut, je reste », les propositions sont coordonnées.", true: false, why: "Aucune conjonction ne les relie : elles sont juxtaposées par la virgule." },
              { text: "Une subordonnée peut former une phrase à elle seule.", true: false, why: "Elle dépend d'une principale : « que vous viendrez » ne se suffit pas." },
              { text: "Le mot « que » est toujours un pronom relatif.", true: false, why: "Il peut aussi être une conjonction de subordination, qui introduit une complétive (« Je sais que... »)." },
              { text: "« Parce que » introduit une subordonnée circonstancielle de cause.", true: true, why: "C'est une locution conjonctive de subordination, à la différence de « car »." },
              { text: "La juxtaposition ne peut exprimer aucun rapport logique.", true: false, why: "Le rapport existe mais reste implicite ; c'est au lecteur de le reconstituer." },
              { text: "Une subordonnée peut être la principale d'une autre subordonnée.", true: true, why: "Les subordonnées peuvent s'emboîter : une relative peut dépendre d'une complétive, par exemple." },
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces locutions ou conjonctions est une conjonction de coordination ?",
              options: ["parce que", "car", "puisque", "lorsque"],
              answer: 1,
              why: "Car coordonne ; parce que, puisque et lorsque subordonnent.",
            },
            {
              q: "Combien de propositions compte la phrase « Je pense qu'il viendra quand il aura fini » ?",
              options: ["Une", "Deux", "Trois", "Quatre"],
              answer: 2,
              why: "Trois verbes conjugués (pense, viendra, aura fini) : une principale, une complétive et une circonstancielle de temps.",
            },
            {
              q: "Dans « Le vent souffle, la mer gronde », les propositions sont :",
              options: ["juxtaposées", "coordonnées", "subordonnées"],
              answer: 0,
              why: "Elles sont simplement séparées par une virgule, sans mot de liaison.",
            },
            {
              q: "Quelle subordonnée complète un nom appelé antécédent ?",
              options: ["La circonstancielle", "La complétive", "L'interrogative indirecte", "La relative"],
              answer: 3,
              why: "La relative, introduite par un pronom relatif, complète un nom ou un pronom, son antécédent.",
            },
            {
              q: "Comment appelle-t-on une construction qui juxtapose ou coordonne les propositions sans les hiérarchiser ?",
              options: ["L'hypotaxe", "La parataxe", "La subordination", "La période"],
              answer: 1,
              why: "La parataxe s'oppose à l'hypotaxe, qui subordonne les propositions les unes aux autres.",
            },
          ],
          trap: "Classer « car » parmi les conjonctions de subordination parce qu'il exprime la cause comme « parce que » : le sens ne suffit pas, c'est la construction qui compte, et car coordonne.",
          method: "Avant toute analyse, soulignez les verbes conjugués et numérotez les propositions ; tracez ensuite une flèche de chaque subordonnée vers sa principale. Ce schéma évite d'oublier une proposition et prépare la réponse à l'oral.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'subordonnees-circonstancielles',
          title: 'Les subordonnées circonstancielles : cause, but, conséquence, temps',
          minutes: 35,
          objectives: [
            "Identifier une subordonnée conjonctive circonstancielle et la distinguer d'une complétive ou d'une relative.",
            "Distinguer l'expression de la cause, du but, de la conséquence et du temps.",
            "Justifier le mode employé dans la subordonnée (indicatif ou subjonctif).",
            "Employer des subordonnées variées pour articuler un raisonnement à l'écrit.",
          ],
          course: [
            {
              heading: "Reconnaître une circonstancielle",
              paragraphs: [
                "La subordonnée conjonctive circonstancielle est introduite par une conjonction de subordination simple (quand, comme, si, lorsque, puisque, quoique) ou par une locution conjonctive (parce que, afin que, bien que, si bien que, avant que...). Elle joue le rôle d'un complément circonstanciel, que la grammaire actuelle appelle aussi complément de phrase : elle est souvent mobile et peut être supprimée sans rendre la phrase incorrecte.",
                "Il ne faut pas la confondre avec la complétive, introduite par que, qui complète le verbe et ne peut être ni déplacée ni supprimée (« J'attends que l'averse cesse » : « que l'averse cesse » est COD de « attends »). Le mode du verbe dépend du sens : l'indicatif présente un fait comme réel ; le subjonctif présente un fait envisagé, voulu, redouté ou non encore réalisé.",
              ],
              box: { label: "Règle", text: "Une circonstancielle est un complément de phrase : on peut le plus souvent la déplacer ou la supprimer. Le mode suit le sens : indicatif pour un fait posé comme réel, subjonctif pour un fait seulement envisagé." },
            },
            {
              heading: "La cause",
              paragraphs: [
                "La cause répond à la question « pourquoi ? ». Parce que présente une cause neutre, souvent nouvelle pour le destinataire. Puisque présente une cause connue ou évidente, que l'on donne comme un argument : « Puisque vous êtes là, commençons. » Comme, placé en tête de phrase, présente la cause avant sa conséquence : « Comme il pleuvait, nous sommes restés. » On trouve aussi étant donné que, vu que, du moment que, et sous prétexte que, qui présente une cause contestée par celui qui parle.",
                "Toutes ces conjonctions se construisent avec l'indicatif, puisque la cause est présentée comme réelle. En revanche, non que (ou non pas que) introduit une cause rejetée et demande le subjonctif : « Il se tait, non qu'il soit timide, mais il réfléchit. » La cause peut aussi s'exprimer sans subordonnée : par car, par un groupe nominal (à cause de, grâce à, en raison de), par un participe (« Étant malade, il resta »).",
              ],
            },
            {
              heading: "Le but et la conséquence",
              paragraphs: [
                "Le but est le résultat visé, l'intention. Il s'exprime par pour que, afin que, de peur que, de crainte que, de sorte que (au sens de « pour que »), toujours suivis du subjonctif, car le fait n'est encore qu'envisagé : « Il parle lentement pour que tout le monde comprenne. » Après de peur que et de crainte que, on peut trouver un ne explétif, qui n'a pas de valeur négative : « Il s'enferme de peur qu'on ne le dérange. »",
                "La conséquence est le résultat effectivement obtenu. Elle s'exprime par si bien que, de sorte que, de telle manière que, au point que, ou par des systèmes corrélatifs qui associent un intensif à que : si... que, tant... que, tellement... que, tel... que. Elle se construit avec l'indicatif, puisque le résultat est réel : « Il a tant marché qu'il est épuisé. » Avec assez... pour que ou trop... pour que, la conséquence n'est qu'envisagée et le subjonctif s'impose.",
                "La différence est donc de sens : le but est une intention (« Il a crié pour qu'on l'entende »), la conséquence un résultat (« Il a crié si fort qu'on l'a entendu »). La locution de sorte que peut exprimer les deux : avec le subjonctif, elle marque le but ; avec l'indicatif, la conséquence.",
              ],
              box: { label: "À retenir", text: "But : intention, subjonctif (pour que, afin que, de peur que). Conséquence : résultat réel, indicatif (si bien que, si... que, tellement... que). De sorte que + subjonctif = but ; de sorte que + indicatif = conséquence." },
            },
            {
              heading: "Le temps",
              paragraphs: [
                "La subordonnée de temps situe le fait de la principale par rapport à celui de la subordonnée. Simultanéité : quand, lorsque, pendant que, tandis que, alors que, comme (avec l'imparfait : « Comme il sortait, il la vit »), à mesure que. Antériorité du fait de la subordonnée : après que, dès que, aussitôt que, depuis que, une fois que (« Dès que la cloche sonna, les élèves sortirent »). Toutes ces conjonctions se construisent avec l'indicatif.",
                "Postériorité du fait de la subordonnée : avant que, jusqu'à ce que, en attendant que. Le fait n'est pas encore réalisé au moment de la principale, d'où le subjonctif : « Rentrez avant qu'il fasse nuit. » Après avant que, on peut trouver un ne explétif. À l'inverse, la norme demande l'indicatif après après que, puisque le fait est accompli : « Après qu'il est parti, elle a pleuré », même si l'usage oral emploie souvent, à tort, le subjonctif.",
              ],
              box: { label: "Règle", text: "Après que + indicatif (le fait est accompli). Avant que, jusqu'à ce que, en attendant que + subjonctif (le fait n'est pas encore réalisé)." },
            },
          ],
          keyPoints: [
            "Cause : parce que, puisque (cause évidente), comme (en tête), sous prétexte que (cause contestée) + indicatif ; non que + subjonctif.",
            "But : pour que, afin que, de peur que, de crainte que + subjonctif.",
            "Conséquence : si bien que, au point que, si... que, tant... que + indicatif.",
            "Temps : quand, lorsque, dès que, après que + indicatif ; avant que, jusqu'à ce que + subjonctif.",
            "Une complétive introduite par que (COD) n'est pas une circonstancielle : elle n'est ni mobile ni supprimable.",
          ],
          example: {
            statement: "Identifiez et analysez les subordonnées de la phrase : « Comme il pleuvait, nous avons attendu que l'averse cesse, si bien que nous sommes arrivés en retard. »",
            solution: [
              "Repérer les verbes conjugués : pleuvait, avons attendu, cesse, sommes arrivés. Quatre propositions, dont la principale « nous avons attendu ».",
              "« Comme il pleuvait » : subordonnée conjonctive circonstancielle de cause, introduite par « comme » placé en tête de phrase ; indicatif imparfait, car la cause est réelle.",
              "« que l'averse cesse » : ce n'est pas une circonstancielle mais une subordonnée conjonctive complétive, COD de « avons attendu » ; on ne peut ni la déplacer ni la supprimer. Le subjonctif s'explique par le verbe attendre, qui présente le fait comme non encore réalisé.",
              "« si bien que nous sommes arrivés en retard » : subordonnée conjonctive circonstancielle de conséquence ; indicatif, car le retard est un résultat réel.",
              "Bilan : deux circonstancielles (cause, conséquence) encadrent une complétive ; la phrase enchaîne logiquement la cause, la réaction et le résultat.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez le rapport logique exprimé par chaque subordonnée : a) « Puisque vous insistez, je viendrai. » b) « Il parle lentement pour que tout le monde comprenne. » c) « Elle avait tant couru qu'elle ne sentait plus ses jambes. » d) « Dès que la cloche sonna, les élèves sortirent. » e) « Il s'enferme de peur qu'on ne le dérange. »",
              hint: "Demandez-vous si la subordonnée répond à « pourquoi ? », « dans quelle intention ? », « avec quel résultat ? » ou « quand ? ».",
              solution: [
                "a) Cause, présentée comme connue par « puisque ».",
                "b) But, avec « pour que » et le subjonctif « comprenne ».",
                "c) Conséquence, avec le système corrélatif « tant... que » et l'indicatif.",
                "d) Temps : antériorité du fait de la subordonnée (la cloche sonne d'abord), avec « dès que » et l'indicatif.",
                "e) But (une crainte à éviter), avec « de peur que », le subjonctif et un ne explétif sans valeur négative.",
              ],
            },
            {
              level: 2,
              statement: "Conjuguez le verbe entre parenthèses au mode et au temps qui conviennent, puis justifiez : a) « Rentrez avant qu'il (faire) nuit. » b) « Après que le rideau (tomber), le public applaudit longuement. » c) « Je vous explique la règle afin que vous la (retenir). » d) « Il a tellement plu que la rivière (déborder). » e) « Non qu'il (être) paresseux, mais il manque de méthode. » f) « Attendez jusqu'à ce que je (revenir). »",
              hint: "Subjonctif pour un fait non réalisé ou rejeté (avant que, afin que, non que, jusqu'à ce que) ; indicatif pour un fait réel (après que, conséquence).",
              solution: [
                "a) « avant qu'il fasse nuit » : subjonctif présent, car la nuit n'est pas encore tombée.",
                "b) « Après que le rideau est tombé » : indicatif passé composé, car le fait est accompli et antérieur à « applaudit ».",
                "c) « afin que vous la reteniez » : subjonctif présent, car le but est seulement visé.",
                "d) « que la rivière a débordé » : indicatif passé composé, car la conséquence est réelle.",
                "e) « Non qu'il soit paresseux » : subjonctif présent, car la cause est rejetée.",
                "f) « jusqu'à ce que je revienne » : subjonctif présent, car le retour n'a pas encore eu lieu.",
              ],
            },
            {
              level: 3,
              statement: "Type bac (question de grammaire de l'oral). Analysez les subordonnées de la phrase suivante, écrite pour l'exercice dans une langue classique : « Comme la Marquise ne pouvait dormir, le philosophe lui parla des étoiles jusqu'à ce que le jour parût, afin qu'elle comprît que la Terre n'était qu'une planète. »",
              hint: "Il y a quatre subordonnées, dont une n'est pas circonstancielle. Les formes « parût » et « comprît » sont des imparfaits du subjonctif.",
              solution: [
                "Principale : « le philosophe lui parla des étoiles ».",
                "« Comme la Marquise ne pouvait dormir » : circonstancielle de cause, « comme » en tête de phrase, indicatif imparfait (fait réel). La négation sans « pas » (ne pouvait) est un tour littéraire.",
                "« jusqu'à ce que le jour parût » : circonstancielle de temps, qui marque la limite de l'action principale ; le lever du jour est postérieur, d'où le subjonctif, ici à l'imparfait par concordance des temps avec le passé simple « parla ».",
                "« afin qu'elle comprît » : circonstancielle de but ; subjonctif imparfait, toujours par concordance des temps dans la langue soutenue.",
                "« que la Terre n'était qu'une planète » : subordonnée conjonctive complétive, COD de « comprît » ; indicatif, car le fait est présenté comme vrai. « ne... que » exprime une restriction (seulement une planète), non une négation.",
                "Bilan : trois circonstancielles (cause, temps, but) et une complétive organisent une phrase qui raconte une leçon d'astronomie, dans l'esprit des Entretiens de Fontenelle.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque conjonction ou locution au rapport logique qu'elle exprime.",
            pairs: [
              { left: "puisque", right: "Cause présentée comme évidente" },
              { left: "afin que", right: "But" },
              { left: "si bien que", right: "Conséquence" },
              { left: "jusqu'à ce que", right: "Temps : limite d'une action" },
              { left: "sous prétexte que", right: "Cause contestée par l'énonciateur" },
              { left: "de peur que", right: "But, sous la forme d'une crainte à éviter" },
            ],
          },
          quiz: [
            {
              q: "« Puisque vous le savez, dites-le. » La subordonnée exprime :",
              options: ["le but", "la cause", "la conséquence", "le temps"],
              answer: 1,
              why: "Puisque introduit une cause présentée comme connue du destinataire.",
            },
            {
              q: "Quel mode suit « afin que » ?",
              options: ["L'indicatif", "Le conditionnel", "Le subjonctif"],
              answer: 2,
              why: "Le but est un fait seulement visé, non encore réalisé : il demande le subjonctif.",
            },
            {
              q: "Quelle phrase respecte la norme ?",
              options: ["Après qu'il soit parti, elle pleura.", "Après qu'il fut parti, elle pleura.", "Après qu'il partirait, elle pleura.", "Après qu'il part, elle pleura."],
              answer: 1,
              why: "Après que se construit avec l'indicatif ; le passé antérieur « fut parti » marque l'antériorité par rapport au passé simple « pleura ».",
            },
            {
              q: "« Il a tant marché qu'il est épuisé. » La subordonnée exprime :",
              options: ["la conséquence", "la cause", "le but", "la concession"],
              answer: 0,
              why: "Le système tant... que exprime un résultat réel, à l'indicatif.",
            },
            {
              q: "Dans « Rentrez avant que la nuit tombe », le fait de la subordonnée se situe :",
              options: ["avant celui de la principale", "en même temps que celui de la principale", "après celui de la principale"],
              answer: 2,
              why: "La nuit tombera après le retour : le fait de la subordonnée est postérieur, d'où le subjonctif.",
            },
          ],
          trap: "Prendre toute proposition introduite par « que » pour une circonstancielle : dans « J'attends que l'averse cesse », la subordonnée est une complétive COD, et dans « la lettre que j'attends », « que » est un pronom relatif.",
          method: "Pour justifier un mode, posez-vous une seule question : le fait est-il présenté comme réel (indicatif) ou seulement envisagé, voulu, redouté, à venir (subjonctif) ? Puis vérifiez avec la conjonction : après que, indicatif ; avant que, subjonctif.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'circonstancielles-concession',
          title: 'Opposition, concession, condition, comparaison',
          minutes: 35,
          objectives: [
            "Distinguer l'opposition et la concession et identifier leurs outils.",
            "Employer correctement le système hypothétique en si et les autres expressions de la condition.",
            "Identifier une subordonnée de comparaison, y compris lorsque son verbe est sous-entendu.",
            "Utiliser ces subordonnées pour nuancer une argumentation.",
          ],
          course: [
            {
              heading: "Opposition et concession",
              paragraphs: [
                "L'opposition met en parallèle deux faits pour souligner leur différence : « Il aime la mer, alors que sa sœur préfère la montagne. » Elle s'exprime par alors que et tandis que, suivis de l'indicatif, puisque les deux faits sont réels. On pourrait inverser les deux propositions sans changer le sens.",
                "La concession est plus subtile : un fait qui aurait dû empêcher un autre fait ne l'empêche pas. « Bien qu'il soit fatigué, il continue » : la fatigue devrait entraîner l'arrêt, mais la conséquence attendue ne se produit pas. Les principales locutions de concession, bien que, quoique, encore que, sont suivies du subjonctif. Même si est suivi de l'indicatif ; quand bien même, du conditionnel (« Quand bien même il insisterait, je refuserais »).",
                "On rencontre aussi les tours quelque... que, si... que, aussi... que suivis du subjonctif (« Si habile qu'il soit, il échouera »), et quoi que, en deux mots, qui signifie « quelle que soit la chose que » (« Quoi qu'il dise, on ne le croit plus »). Hors subordination, la concession s'exprime par malgré, en dépit de, avoir beau (« Il a beau crier, personne ne l'entend »), ou par le couple certes... mais.",
              ],
              box: { label: "À retenir", text: "Opposition : deux faits comparés (alors que, tandis que + indicatif). Concession : une conséquence attendue ne se produit pas (bien que, quoique + subjonctif ; même si + indicatif). Quoique (bien que) ne se confond pas avec quoi que (quelle que soit la chose que)." },
            },
            {
              heading: "La condition et l'hypothèse",
              paragraphs: [
                "La subordonnée introduite par si exprime une condition dont dépend le fait principal. Le système des temps est fixe. Si + présent, puis présent, futur ou impératif dans la principale : le fait est possible (« S'il pleut demain, nous resterons »). Si + imparfait, puis conditionnel présent : le fait est imaginé dans le présent ou l'avenir, possible ou contraire à la réalité (« Si j'avais le temps, je lirais davantage »). Si + plus-que-parfait, puis conditionnel passé : le fait est contraire à ce qui s'est passé, c'est l'irréel du passé (« Si vous m'aviez prévenu, je serais venu »).",
                "Après le si de condition, on n'emploie jamais le futur ni le conditionnel : « Si j'aurais su » est fautif. En revanche, après le si d'une interrogative indirecte (« Je me demande s'il viendra »), le futur et le conditionnel sont possibles, car ce n'est pas une condition. D'autres outils expriment la condition : au cas où et dans le cas où, suivis du conditionnel ; à condition que, pourvu que, pour peu que, à moins que, suivis du subjonctif (« Nous sortirons, à moins qu'il ne pleuve »).",
              ],
              box: { label: "Règle", text: "Si + présent → présent, futur ou impératif. Si + imparfait → conditionnel présent. Si + plus-que-parfait → conditionnel passé. Jamais de futur ni de conditionnel après le si de condition." },
            },
            {
              heading: "La comparaison",
              paragraphs: [
                "La subordonnée de comparaison rapproche deux faits. Elle est introduite par comme, ainsi que, de même que, autant que, ou par des systèmes corrélatifs : plus... que, moins... que, aussi... que, autant... que, autre... que, tel... que. Son verbe est à l'indicatif ou au conditionnel : « Il agit comme il l'a toujours fait » ; « Elle est plus habile qu'on ne le croit », où le ne est explétif.",
                "Le verbe de la comparative est très souvent sous-entendu, par ellipse : « Il court comme un lièvre » signifie « comme court un lièvre ». C'est souvent sur cette construction que repose la figure de style de la comparaison, qui rapproche deux réalités à l'aide d'un outil (comme, tel, pareil à). L'analyse grammaticale et l'analyse stylistique se complètent : on nomme la structure, puis on interprète le rapprochement.",
              ],
            },
            {
              heading: "Des outils pour argumenter",
              paragraphs: [
                "Ces subordonnées sont au cœur de l'argumentation. La concession permet de reconnaître une objection avant de la dépasser : « Bien que la science explique le ciel, elle ne l'a pas rendu moins beau. » L'hypothèse permet de raisonner sur un cas imaginaire, notamment dans le raisonnement par l'absurde : « Si tous les hommes refusaient de servir, le tyran tomberait. » La comparaison sert l'analogie, qui éclaire une idée abstraite par une image concrète.",
                "Dans les textes de la littérature d'idées, repérer ces subordonnées aide à suivre le raisonnement de l'auteur ; dans vos propres copies, les employer avec précision montre une pensée nuancée. Une dissertation réussie concède souvent avant de réfuter, envisage des hypothèses et compare des œuvres.",
              ],
            },
          ],
          keyPoints: [
            "Opposition : alors que, tandis que + indicatif ; concession : bien que, quoique + subjonctif, même si + indicatif.",
            "Système en si : présent → futur ; imparfait → conditionnel présent ; plus-que-parfait → conditionnel passé.",
            "Jamais de conditionnel ni de futur après le si de condition (mais possible après le si interrogatif).",
            "Condition avec subjonctif : à condition que, pourvu que, à moins que ; avec conditionnel : au cas où.",
            "Comparaison : comme, ainsi que, plus... que, aussi... que ; le verbe est souvent sous-entendu.",
          ],
          example: {
            statement: "Corrigez et analysez la phrase fautive : « Si vous seriez venu, vous auriez vu le spectacle, bien que la salle était pleine. »",
            solution: [
              "Repérer les subordonnées : « Si vous seriez venu » (condition) et « bien que la salle était pleine » (concession).",
              "Première erreur : après le si de condition, on n'emploie jamais le conditionnel. Le fait est contraire à ce qui s'est passé (vous n'êtes pas venu) : c'est l'irréel du passé, qui demande le plus-que-parfait dans la subordonnée.",
              "Correction : « Si vous étiez venu, vous auriez vu le spectacle », avec le conditionnel passé dans la principale.",
              "Seconde erreur : bien que se construit avec le subjonctif. Correction : « bien que la salle fût pleine » (langue soutenue) ou « bien que la salle ait été pleine » (langue courante).",
              "Phrase corrigée : « Si vous étiez venu, vous auriez vu le spectacle, bien que la salle ait été pleine. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez le rapport logique de chaque subordonnée : a) « Bien qu'il pleuve, la fête aura lieu. » b) « Tandis que les uns travaillent, les autres se reposent. » c) « Si vous partez tôt, vous éviterez les embouteillages. » d) « Il est plus habile qu'on ne le croit. » e) « Pourvu que la mer soit calme, nous embarquerons demain. »",
              hint: "Concession : un obstacle qui n'empêche rien. Opposition : deux faits mis en parallèle. Condition : un fait dont dépend l'autre.",
              solution: [
                "a) Concession : la pluie devrait empêcher la fête, mais la fête aura lieu ; subjonctif après bien que.",
                "b) Opposition : deux comportements mis en parallèle ; indicatif après tandis que.",
                "c) Condition : si + présent, puis futur dans la principale.",
                "d) Comparaison : système plus... que ; le ne est explétif, sans valeur négative.",
                "e) Condition : pourvu que + subjonctif ; ici la locution n'exprime pas un souhait, car elle dépend de la principale.",
              ],
            },
            {
              level: 2,
              statement: "Conjuguez le verbe entre parenthèses et justifiez : a) « Si j'(avoir) le temps, je lirais davantage. » b) « S'il (pleuvoir) demain, nous resterons. » c) « Si vous m'(prévenir), je serais venu. » d) « Quoiqu'elle (savoir) la réponse, elle se tait. » e) « Même si vous (insister), je ne céderai pas. » f) « Au cas où il (pleuvoir), prenez un parapluie. »",
              hint: "Regardez le temps de la principale pour le système en si, et retenez le mode propre à chaque locution.",
              solution: [
                "a) « Si j'avais » : imparfait, car la principale est au conditionnel présent.",
                "b) « S'il pleut » : présent, car la principale est au futur.",
                "c) « Si vous m'aviez prévenu » : plus-que-parfait, car la principale est au conditionnel passé (irréel du passé).",
                "d) « Quoiqu'elle sache » : subjonctif présent après quoique (concession).",
                "e) « Même si vous insistez » : indicatif présent, même si ne prend jamais le subjonctif.",
                "f) « Au cas où il pleuvrait » : conditionnel présent après au cas où.",
              ],
            },
            {
              level: 3,
              statement: "Type bac (expression écrite). Rédigez un paragraphe argumentatif de six à huit lignes qui réponde à la question : « La science rend-elle le monde moins merveilleux ? » Vous emploierez au moins une subordonnée de concession, une de condition et une de comparaison, que vous identifierez ensuite.",
              hint: "Commencez par concéder (bien que...), raisonnez sur une hypothèse (si...), puis éclairez votre idée par une comparaison (comme..., plus... que).",
              solution: [
                "Paragraphe proposé : « Bien que la science ait chassé du ciel les dieux et les monstres de la mythologie, elle ne l'a pas rendu moins merveilleux. Si l'on apprend que chaque étoile est peut-être un soleil entouré de planètes, l'univers paraît bien plus vaste qu'on ne l'imaginait. Fontenelle le montre dans ses Entretiens sur la pluralité des mondes : la Marquise s'émerveille davantage à mesure qu'elle comprend, comme un spectateur qui découvrirait les machines de l'opéra sans cesser d'admirer le spectacle. »",
                "Concession : « Bien que la science ait chassé du ciel les dieux... » : bien que + subjonctif passé ; l'objection est reconnue avant d'être dépassée.",
                "Condition : « Si l'on apprend que... » : si + présent, principale au présent ; le raisonnement part d'un fait possible.",
                "Comparaison : « qu'on ne l'imaginait », introduite par le système plus... que, avec un ne explétif ; puis « comme un spectateur qui découvrirait... », comparative dont le verbe est sous-entendu (comme s'émerveillerait un spectateur).",
                "On note aussi « à mesure qu'elle comprend », circonstancielle de temps qui marque une progression parallèle.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'analyse d'une subordonnée circonstancielle.",
            items: [
              "Repérer les verbes conjugués et délimiter les propositions",
              "Repérer le mot qui introduit la subordonnée",
              "Vérifier que ce mot est une conjonction, et non un pronom relatif ou un mot interrogatif",
              "Tester la mobilité ou la suppression pour confirmer le rôle de complément de phrase",
              "Identifier le rapport logique en reformulant la phrase",
              "Nommer le mode du verbe et le justifier par le sens",
            ],
          },
          quiz: [
            {
              q: "« Bien qu'il soit tard, ils discutent encore. » La subordonnée exprime :",
              options: ["la cause", "l'opposition simple", "la concession", "la condition"],
              answer: 2,
              why: "L'heure tardive devrait mettre fin à la discussion, mais ce n'est pas le cas : c'est une concession.",
            },
            {
              q: "Complétez correctement : « Si j'... le temps, je viendrais. »",
              options: ["aurais", "avais", "aurai", "ai eu"],
              answer: 1,
              why: "Avec un conditionnel présent dans la principale, la subordonnée en si est à l'imparfait.",
            },
            {
              q: "Quel mode suit « même si » ?",
              options: ["L'indicatif", "Le subjonctif", "Le conditionnel"],
              answer: 0,
              why: "Même si se construit avec l'indicatif, à la différence de bien que et quoique.",
            },
            {
              q: "Que signifie « quoi qu'il dise » ?",
              options: ["Bien qu'il dise", "Quelle que soit la chose qu'il dit", "Parce qu'il dit", "Pendant qu'il dit"],
              answer: 1,
              why: "Quoi que, en deux mots, est un pronom indéfini ; il ne se confond pas avec quoique, synonyme de bien que.",
            },
            {
              q: "Dans « Il est plus habile qu'on ne le croit », le mot « ne » est :",
              options: ["négatif", "restrictif", "interrogatif", "explétif"],
              answer: 3,
              why: "Ce ne n'a pas de valeur négative : on le trouve après certains comparatifs et certaines conjonctions dans la langue soignée.",
            },
          ],
          trap: "Écrire « si j'aurais » ou « bien que la salle était pleine » : après le si de condition, jamais de conditionnel ; après bien que et quoique, toujours le subjonctif.",
          method: "Mémorisez le système en si par trois phrases modèles que vous savez par cœur (« S'il pleut, je reste » ; « S'il pleuvait, je resterais » ; « S'il avait plu, je serais resté ») et comparez chaque phrase douteuse à son modèle.",
        },
      ],
    },
    /* ==================================================================== */
    /* LA LITTÉRATURE D'IDÉES DU XVIe AU XVIIIe SIÈCLE                       */
    /* ==================================================================== */
    {
      id: 'litterature-idees',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'argumenter-xvie-xviiie',
          title: 'Convaincre, persuader, délibérer : les formes de l’argumentation',
          minutes: 35,
          objectives: [
            "Distinguer convaincre, persuader et délibérer, et identifier ethos, logos et pathos.",
            "Identifier les formes de l'argumentation directe et indirecte du XVIe au XVIIIe siècle.",
            "Reconnaître les principaux types de raisonnement et d'arguments.",
            "Situer les textes dans leur contexte : humanisme, classicisme, Lumières.",
          ],
          course: [
            {
              heading: "Convaincre, persuader, délibérer",
              paragraphs: [
                "Argumenter, c'est chercher à faire partager une opinion, appelée thèse. Convaincre consiste à s'adresser à la raison du destinataire : on avance des arguments, on les enchaîne logiquement, on les appuie sur des exemples. Persuader consiste à toucher la sensibilité, l'imagination et les émotions : on émeut, on indigne, on fait rire. Les deux démarches se combinent presque toujours ; Pascal, dans De l'art de persuader, explique déjà que pour emporter l'adhésion il faut à la fois convaincre l'esprit et plaire au cœur.",
                "Délibérer, c'est examiner le pour et le contre avant de prendre une décision. La délibération peut être intérieure, comme dans les stances où le héros du Cid de Corneille (1637) hésite entre son amour et son honneur, ou se faire à plusieurs voix, dans un dialogue où des personnages confrontent leurs points de vue. Elle met en scène le doute et le cheminement d'une pensée.",
                "La rhétorique antique, en particulier Aristote, distingue trois moyens de persuasion : le logos, la force des arguments et du raisonnement ; le pathos, les émotions suscitées chez le destinataire ; l'ethos, l'image que l'orateur donne de lui-même (sa sincérité, sa compétence, sa modération). Ces trois notions restent des outils précieux pour analyser n'importe quel texte argumentatif.",
              ],
              box: { label: "Définition", text: "Convaincre : agir sur la raison (logos). Persuader : agir sur les émotions (pathos), en s'appuyant aussi sur l'image de l'orateur (ethos). Délibérer : peser le pour et le contre avant de décider, seul ou à plusieurs." },
            },
            {
              heading: "L'argumentation directe",
              paragraphs: [
                "Dans l'argumentation directe, l'auteur expose sa thèse en son nom ou au nom d'un locuteur clairement engagé. L'essai est une forme libre où l'auteur réfléchit en suivant sa pensée : Montaigne invente le mot et le genre avec ses Essais (1580, puis éditions augmentées jusqu'en 1595). Le discours s'adresse à un public, le traité expose méthodiquement une doctrine, le pamphlet attaque avec violence. Les moralistes du XVIIe siècle choisissent des formes brèves : les Maximes de La Rochefoucauld (1665), les Pensées de Pascal (1670, posthumes), Les Caractères de La Bruyère (1688).",
                "Au XVIIIe siècle, l'Encyclopédie dirigée par Diderot et d'Alembert (1751-1772) diffuse les connaissances et les idées nouvelles sous la forme d'articles ; Voltaire publie un Dictionnaire philosophique portatif (1764). Dans tous ces textes, on analyse la thèse, les arguments, les exemples, les connecteurs logiques et le type de raisonnement.",
                "On distingue plusieurs raisonnements. Le raisonnement déductif part d'un principe général pour l'appliquer à un cas particulier ; le raisonnement inductif part d'exemples pour en tirer une loi générale ; le raisonnement par analogie éclaire une idée par une comparaison ; le raisonnement concessif reconnaît une objection pour mieux la dépasser (certes... mais) ; le raisonnement par l'absurde montre que la thèse adverse conduit à une conséquence inacceptable.",
              ],
            },
            {
              heading: "L'argumentation indirecte",
              paragraphs: [
                "L'argumentation indirecte passe par un récit ou une fiction : elle plaît pour mieux instruire. L'apologue est un court récit dont on tire une leçon : la fable (La Fontaine, Fables, à partir de 1668), le conte philosophique (Voltaire, Zadig, 1747 ; Candide, 1759), l'utopie qui décrit une société idéale pour critiquer la société réelle (Thomas More, Utopie, 1516 ; l'abbaye de Thélème dans le Gargantua de Rabelais, 1534). La Fontaine explique lui-même qu'une morale trop nue ennuie et que le récit la fait mieux accepter.",
                "Le dialogue philosophique met en scène des interlocuteurs qui confrontent leurs idées, sur le modèle de Platon : Fontenelle, Entretiens sur la pluralité des mondes (1686) ; Diderot, Supplément au Voyage de Bougainville (écrit en 1772, publié en 1796). Le roman épistolaire et le regard étranger permettent de critiquer la société par les yeux d'un visiteur naïf : Montesquieu, Lettres persanes (1721) ; Françoise de Graffigny, Lettres d'une Péruvienne (1747).",
                "Ces formes indirectes ont aussi une utilité pratique : sous la monarchie absolue, la censure surveille les livres. La fiction, l'ironie, la publication anonyme ou à l'étranger permettent de critiquer le pouvoir, l'Église ou les mœurs en limitant les risques.",
              ],
              box: { label: "À retenir", text: "Argumentation directe : essai, discours, traité, pamphlet, maxime, article. Argumentation indirecte : fable, conte philosophique, utopie, dialogue, roman épistolaire au regard étranger. L'apologue instruit en plaisant." },
            },
            {
              heading: "Trois siècles, trois moments",
              paragraphs: [
                "Au XVIe siècle, l'humanisme place l'être humain au centre de la réflexion, redécouvre les textes antiques et croit en l'éducation (Rabelais, Montaigne, La Boétie). Le siècle est aussi celui de la Réforme et des guerres de Religion (1562-1598), qui obligent à penser la tolérance et le pouvoir. Au XVIIe siècle, sous la monarchie absolue de Louis XIV, les moralistes observent les passions humaines et la vie de cour avec lucidité.",
                "Au XVIIIe siècle, les philosophes des Lumières (Montesquieu, Voltaire, Diderot, Rousseau) veulent éclairer les esprits par la raison, combattre les préjugés, le fanatisme et l'arbitraire, défendre la tolérance et la liberté. Ils manient volontiers l'ironie, qui dit le contraire de ce qu'elle pense pour mieux le faire comprendre : dans L'Esprit des lois (1748), Montesquieu feint de justifier l'esclavage par des arguments si absurdes que le lecteur en perçoit l'horreur.",
              ],
            },
          ],
          keyPoints: [
            "Convaincre : la raison ; persuader : les émotions ; délibérer : peser le pour et le contre.",
            "Logos (arguments), pathos (émotions), ethos (image de l'orateur).",
            "Raisonnements : déductif, inductif, par analogie, concessif, par l'absurde.",
            "Argumentation directe (essai, maxime, article) et indirecte (fable, conte, utopie, dialogue, roman épistolaire).",
            "Humanisme (XVIe), moralistes (XVIIe), Lumières (XVIIIe) ; la fiction et l'ironie contournent la censure.",
          ],
          example: {
            statement: "Dans ce passage écrit pour l'exercice, relevez ce qui relève de la conviction et ce qui relève de la persuasion : « Mes amis, regardez vos mains : elles ont bâti ces villes, labouré ces champs, porté ces armes. Pourquoi les tendre aux chaînes ? Un seul homme ne peut rien contre tous ; s'il commande, c'est que vous obéissez. Cessez d'obéir, et il ne commandera plus. »",
            solution: [
              "Identifier la thèse : la domination d'un seul repose sur l'obéissance de tous ; il suffit de cesser d'obéir pour être libre.",
              "Persuasion : l'apostrophe affectueuse (« Mes amis »), l'impératif (« regardez »), l'image concrète des mains, l'énumération rythmée de trois verbes (bâti, labouré, porté) et la question rhétorique (« Pourquoi les tendre aux chaînes ? ») visent à émouvoir et à indigner.",
              "Conviction : la phrase « Un seul homme ne peut rien contre tous » pose un principe ; « s'il commande, c'est que vous obéissez » en tire une relation logique ; « Cessez d'obéir, et il ne commandera plus » formule la conséquence, à valeur de condition.",
              "Ethos : l'orateur se présente comme proche de son auditoire, l'un des leurs.",
              "Réponse : le passage persuade par les images et l'appel aux émotions, puis convainc par un raisonnement bref et implacable ; les deux démarches se renforcent.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces œuvres selon qu'elles relèvent de l'argumentation directe ou indirecte, et nommez leur genre : Montaigne, Essais ; La Fontaine, Fables ; Voltaire, Candide ; Montesquieu, Lettres persanes ; Pascal, Pensées ; Thomas More, Utopie.",
              hint: "Demandez-vous si l'auteur expose ses idées en son nom ou s'il passe par une histoire et des personnages.",
              solution: [
                "Argumentation directe : Montaigne, Essais (essai) ; Pascal, Pensées (fragments de réflexion, forme brève).",
                "Argumentation indirecte : La Fontaine, Fables (fable, apologue en vers) ; Voltaire, Candide (conte philosophique) ; Montesquieu, Lettres persanes (roman épistolaire au regard étranger) ; Thomas More, Utopie (récit utopique).",
                "Point commun des œuvres indirectes : une fiction qui plaît au lecteur tout en lui faisant comprendre une critique ou une leçon.",
              ],
            },
            {
              level: 2,
              statement: "Nommez le type de raisonnement de chaque argument (écrits pour l'exercice) : a) « Tous les hommes naissent libres ; or les sujets du tyran sont des hommes ; donc ils sont nés libres. » b) « Les Athéniens, les Spartiates, les Romains de la République ont défendu leur liberté : un peuple qui le veut peut rester libre. » c) « Le tyran est comme un feu qui s'éteint quand on cesse de l'alimenter. » d) « Certes, la tradition mérite le respect ; mais elle ne peut justifier l'injustice. » e) « Si l'esclavage était juste, il faudrait admettre que la force fait le droit, ce qui est absurde. »",
              hint: "Du général au particulier, du particulier au général, une image, une objection reconnue, ou une conséquence inacceptable.",
              solution: [
                "a) Raisonnement déductif, sous la forme d'un syllogisme : une majeure générale, une mineure, une conclusion.",
                "b) Raisonnement inductif : plusieurs exemples historiques conduisent à une loi générale.",
                "c) Raisonnement par analogie : la comparaison avec le feu rend concrète l'idée que le pouvoir dépend de ceux qui l'entretiennent.",
                "d) Raisonnement concessif : l'objection est reconnue (« certes ») puis dépassée (« mais »).",
                "e) Raisonnement par l'absurde : la thèse adverse mène à une conséquence jugée inacceptable, donc elle est rejetée.",
              ],
            },
            {
              level: 3,
              statement: "Type bac (dissertation, réflexion sur l'objet d'étude). Sujet : « Pourquoi les auteurs du XVIe au XVIIIe siècle passent-ils si souvent par la fiction pour défendre leurs idées ? » Proposez une problématique et un plan détaillé, avec des exemples précis.",
              hint: "Pensez au plaisir du lecteur, à la force de la fiction pour faire comprendre, et aux contraintes de l'époque, sans oublier les limites de ce détour.",
              solution: [
                "Problématique : le détour par la fiction n'est-il qu'une ruse face à la censure, ou une manière plus efficace de faire penser le lecteur ?",
                "Partie 1, plaire pour instruire : le récit rend la leçon agréable et mémorisable (Fables de La Fontaine ; Candide de Voltaire) ; la fiction touche le lecteur et le persuade.",
                "Partie 2, faire voir autrement : le regard étranger rend étrange ce qui paraît naturel (Lettres persanes ; Lettres d'une Péruvienne) ; l'utopie propose un contre-modèle (Utopie de More, abbaye de Thélème) ; le dialogue fait réfléchir en confrontant les points de vue (Fontenelle, Diderot).",
                "Partie 3, contourner la censure, mais avec des limites : anonymat, ironie, publication à l'étranger protègent les auteurs ; mais la fiction peut être mal comprise ou réduite à un divertissement, d'où le recours parallèle à l'argumentation directe (Montaigne, l'Encyclopédie, La Boétie).",
                "Conclusion : la fiction n'est pas un simple déguisement ; elle fait participer le lecteur au raisonnement et l'invite à conclure lui-même, ce qui est l'idéal des Lumières.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion de l'argumentation à sa définition.",
            pairs: [
              { left: "Logos", right: "La force des arguments et du raisonnement" },
              { left: "Pathos", right: "Les émotions suscitées chez le destinataire" },
              { left: "Ethos", right: "L'image que l'orateur donne de lui-même" },
              { left: "Délibérer", right: "Peser le pour et le contre avant de décider" },
              { left: "Apologue", right: "Court récit dont on tire une leçon" },
              { left: "Raisonnement inductif", right: "Tirer une loi générale d'exemples particuliers" },
            ],
          },
          quiz: [
            {
              q: "Persuader, c'est surtout :",
              options: ["démontrer par la logique", "toucher la sensibilité", "peser le pour et le contre", "rapporter des faits vérifiés"],
              answer: 1,
              why: "Persuader s'adresse à la sensibilité ; convaincre s'adresse à la raison ; délibérer consiste à examiner le pour et le contre.",
            },
            {
              q: "Lequel de ces textes relève de l'apologue ?",
              options: ["Les Essais de Montaigne", "Un discours prononcé devant le Parlement", "Un article de l'Encyclopédie", "Les Fables de La Fontaine"],
              answer: 3,
              why: "La fable est un apologue : un récit court, souvent avec des animaux, dont on tire une morale.",
            },
            {
              q: "Le raisonnement qui part d'exemples particuliers pour aboutir à une idée générale est :",
              options: ["inductif", "déductif", "par l'absurde", "concessif"],
              answer: 0,
              why: "L'induction va du particulier au général ; la déduction applique un principe général à un cas particulier.",
            },
            {
              q: "Que désigne l'ethos ?",
              options: ["Les arguments logiques", "Les émotions que l'orateur suscite chez le public", "L'image que l'orateur donne de lui-même", "La conclusion du discours"],
              answer: 2,
              why: "L'ethos est la crédibilité que l'orateur construit : sincérité, compétence, modération.",
            },
            {
              q: "À quel siècle appartiennent les philosophes des Lumières ?",
              options: ["Le XVIIIe siècle", "Le XVIe siècle", "Le XVIIe siècle"],
              answer: 0,
              why: "Montesquieu, Voltaire, Diderot et Rousseau écrivent au XVIIIe siècle ; le XVIe est celui de l'humanisme.",
            },
          ],
          trap: "Opposer convaincre et persuader comme deux démarches qui s'excluent : la plupart des textes combinent les deux, et l'analyse doit montrer comment les arguments et les émotions se renforcent.",
          method: "Face à un texte argumentatif, posez toujours quatre questions dans l'ordre : quelle est la thèse ? par quels arguments et quel raisonnement ? par quels moyens de persuasion (ethos, pathos) ? sous quelle forme (directe ou indirecte) et pourquoi ce choix ?",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'la-boetie-servitude',
          title: 'La Boétie, « Discours de la servitude volontaire » : défendre la liberté',
          minutes: 35,
          objectives: [
            "Situer La Boétie et le Discours de la servitude volontaire dans le contexte de la Renaissance.",
            "Expliquer la thèse du Discours et le paradoxe de la « servitude volontaire ».",
            "Analyser les moyens de l'argumentation : questions, exemples antiques, analogies, apostrophes.",
            "Construire une réflexion sur le parcours consacré à la défense de la liberté.",
          ],
          course: [
            {
              heading: "Un jeune humaniste, un texte de jeunesse",
              paragraphs: [
                "Étienne de La Boétie naît en 1530 à Sarlat, dans le Périgord, et meurt en 1563 près de Bordeaux, à trente-deux ans. Humaniste nourri de culture grecque et latine, traducteur, poète, il devient conseiller au parlement de Bordeaux. Il y rencontre Montaigne, qui lui voue une amitié célèbre : dans le chapitre « De l'amitié » des Essais, Montaigne l'explique par une formule restée fameuse, « Parce que c'était lui, parce que c'était moi ».",
                "Selon Montaigne, La Boétie a écrit le Discours de la servitude volontaire dans sa première jeunesse, vers seize ou dix-huit ans selon les éditions des Essais, comme un exercice à l'honneur de la liberté contre les tyrans. La date exacte de rédaction reste discutée. On a souvent rapproché le texte de la révolte contre l'impôt sur le sel (la gabelle), qui éclate en Guyenne en 1548 et que le pouvoir royal réprime durement, mais ce lien demeure une hypothèse.",
                "Le Discours n'a pas été publié du vivant de son auteur. Après le massacre de la Saint-Barthélemy (1572), des protestants en publient des extraits puis le texte entier, dans les années 1570, pour nourrir leur combat contre la tyrannie ; il circule aussi sous le titre de Contr'un. Montaigne, qui voulait l'insérer dans ses Essais, y renonce pour ne pas paraître approuver cet usage partisan.",
              ],
              box: { label: "Repère", text: "1530 : naissance à Sarlat. Vers 1548 et les années suivantes : rédaction probable du Discours (date discutée). 1563 : mort de La Boétie. Années 1570 : publication par des protestants. 1580 : première édition des Essais de Montaigne." },
            },
            {
              heading: "La thèse : un paradoxe",
              paragraphs: [
                "Le Discours part d'une question : comment se peut-il que tant d'hommes, de villes et de nations supportent un seul tyran, qui n'a de puissance que celle qu'ils lui donnent ? La Boétie remarque que le tyran n'a qu'un corps, deux yeux et deux mains comme les autres ; il n'est fort que de l'obéissance de tous. La servitude n'est donc pas d'abord imposée par la force : elle est consentie. D'où l'expression paradoxale de servitude volontaire, alliance de deux mots qui semblent s'exclure, comme dans un oxymore.",
                "La conséquence est radicale : pour être libre, il n'est pas nécessaire de combattre le tyran, il suffit de ne plus le servir. La Boétie le dit en une phrase devenue célèbre : « Soyez résolus de ne servir plus, et vous voilà libres. » Il compare le pouvoir du tyran à un feu qui s'éteint quand on cesse de lui fournir du bois, et le tyran lui-même à un grand colosse dont on a retiré la base et qui s'effondre sous son propre poids.",
              ],
              box: { label: "À retenir", text: "La thèse du Discours : le tyran n'a de pouvoir que celui que lui donnent ceux qui lui obéissent. La servitude est volontaire ; la liberté ne demande donc pas la violence mais le refus de consentir." },
            },
            {
              heading: "Pourquoi les hommes servent-ils ?",
              paragraphs: [
                "La Boétie affirme d'abord que la liberté est naturelle. La nature a fait les hommes sur le même modèle pour qu'ils se reconnaissent tous compagnons, ou plutôt frères ; même les animaux résistent à la captivité. Il distingue trois sortes de tyrans : ceux qui doivent le pouvoir à l'élection du peuple, ceux qui le prennent par la force des armes, ceux qui l'héritent par succession. Tous finissent par gouverner de la même manière.",
                "Si la liberté est naturelle, pourquoi l'oublie-t-on ? La première raison est la coutume : les hommes nés sous le joug, élevés dans la servitude, prennent pour naturel l'état où ils ont toujours vécu. Ensuite, les tyrans endorment les peuples par des divertissements : théâtres, jeux, spectacles, festins et distributions de vivres sont, dit La Boétie, des appâts de la servitude. Ils s'entourent aussi de mystère et de sacré pour paraître plus qu'humains.",
                "Enfin, La Boétie dévoile le ressort secret de la domination : quelques favoris, quatre ou cinq, tiennent le tyran et sont tenus par lui ; ceux-ci en ont sous eux six cents, qui en ont six mille, et ainsi de suite. Une immense chaîne de complices, chacun profitant de la tyrannie pour dominer plus faible que lui, rend le pouvoir solide. Mais ces complices ne sont pas des amis : l'amitié, qui suppose l'égalité et la vertu, ne peut exister entre le tyran et ceux qui le servent par intérêt.",
              ],
            },
            {
              heading: "Une écriture qui veut réveiller",
              paragraphs: [
                "Le Discours est une argumentation directe, mais très vivante. La Boétie multiplie les questions rhétoriques pour provoquer l'étonnement du lecteur, les apostrophes au peuple, les exemples tirés de l'histoire antique (Grecs, Romains, Perses) selon l'usage humaniste, et les analogies concrètes (le feu, le colosse, les animaux). Il mêle la conviction, par le raisonnement, et la persuasion, par l'indignation et la pitié.",
                "Le texte a eu une longue postérité. On l'a rapproché du traité de Rousseau Du contrat social (1762), dont le premier chapitre affirme que l'homme est né libre et que partout il est dans les fers, et des théories de la désobéissance civile, comme celle de l'Américain Thoreau au XIXe siècle. Le parcours invite à lire La Boétie avec d'autres textes qui défendent la liberté, de Montaigne aux philosophes des Lumières.",
              ],
            },
          ],
          keyPoints: [
            "La Boétie (1530-1563), humaniste, conseiller au parlement de Bordeaux, ami de Montaigne.",
            "Discours écrit dans sa jeunesse (date discutée), publié après sa mort par des protestants dans les années 1570.",
            "Thèse : le tyran n'a de pouvoir que celui qu'on lui donne ; « Soyez résolus de ne servir plus, et vous voilà libres. »",
            "Causes de la servitude : la coutume, les divertissements, le sacré, la chaîne des complices.",
            "Moyens : questions rhétoriques, apostrophes, exemples antiques, analogies (le feu, le colosse).",
          ],
          example: {
            statement: "Expliquez pourquoi l'expression « servitude volontaire » est paradoxale et comment La Boétie la justifie.",
            solution: [
              "Analyser l'expression : « servitude » désigne l'état d'un esclave, soumis contre son gré ; « volontaire » suppose un libre choix. Les deux mots semblent s'exclure : c'est un oxymore.",
              "Repérer la justification : le tyran n'est qu'un homme, il n'a pas plus de force physique qu'un autre ; son pouvoir vient de ceux qui lui obéissent, paient l'impôt, servent dans ses armées.",
              "Expliquer le consentement : les hommes consentent par habitude (la coutume), par distraction (les divertissements), par intérêt (la chaîne des complices).",
              "Tirer la conséquence : si la servitude est voulue, la liberté est à portée de main ; il suffit de cesser de servir.",
              "Réponse : le paradoxe est le cœur de l'argumentation ; il choque pour réveiller le lecteur et lui faire découvrir sa propre responsabilité.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Citez les quatre causes qui, selon La Boétie, expliquent que les hommes acceptent la servitude, et donnez pour chacune une explication en une phrase.",
              hint: "Pensez à l'habitude, aux plaisirs, au sacré et à la pyramide des profiteurs.",
              solution: [
                "La coutume : nés et élevés dans la servitude, les hommes la prennent pour leur état naturel et oublient la liberté.",
                "Les divertissements : jeux, spectacles, festins et distributions de vivres endorment les peuples et leur font aimer leur condition.",
                "Le sacré et le mystère : les tyrans se donnent une apparence surhumaine ou religieuse pour impressionner leurs sujets.",
                "La chaîne des complices : quelques favoris tiennent le tyran, et chacun en tient d'autres sous lui ; beaucoup profitent de la tyrannie et la soutiennent.",
              ],
            },
            {
              level: 2,
              statement: "La Boétie compare le pouvoir du tyran à un feu qui s'éteint quand on cesse de l'alimenter, et le tyran à un colosse qui s'effondre quand on lui retire sa base. Analysez ces deux analogies : que montrent-elles et pourquoi sont-elles efficaces ?",
              hint: "Demandez-vous qui fournit le bois et qui forme la base dans chaque image.",
              solution: [
                "Ce qu'elles montrent : dans les deux images, la force apparente du tyran dépend entièrement d'un soutien extérieur ; le bois, c'est l'obéissance du peuple ; la base du colosse, ce sont ceux qui le portent.",
                "La conséquence : il n'est pas besoin d'attaquer le feu ni de frapper le colosse ; il suffit de retirer ce qui les nourrit ou les soutient. Les images illustrent la thèse de la non-coopération.",
                "Leur efficacité : elles rendent concrète une idée abstraite, frappent l'imagination (raisonnement par analogie) et renversent l'impression de puissance du tyran : l'immense colosse est fragile.",
                "Conclusion : les analogies servent à la fois la conviction (elles démontrent un mécanisme) et la persuasion (elles redonnent courage au lecteur).",
              ],
            },
            {
              level: 3,
              statement: "Type bac (dissertation). Sujet : « Le Discours de la servitude volontaire est-il seulement une dénonciation de la tyrannie ? » Vous répondrez en prenant appui sur l'œuvre de La Boétie, sur les textes étudiés dans le cadre du parcours et sur votre culture littéraire. Proposez une problématique et un plan détaillé.",
              hint: "La dénonciation est bien présente, mais le texte accuse aussi les peuples et propose une réflexion sur la nature humaine et l'amitié.",
              solution: [
                "Problématique : en dénonçant les tyrans, La Boétie ne cherche-t-il pas surtout à réveiller la responsabilité des peuples et à penser les conditions de la liberté ?",
                "Partie 1, une dénonciation de la tyrannie : les ruses des tyrans (divertissements, sacré), la chaîne des complices, l'absence d'amitié autour du tyran ; exemples antiques de despotes.",
                "Partie 2, une interpellation des peuples : le paradoxe de la servitude volontaire fait des sujets les vrais soutiens du tyran ; la coutume et la lâcheté sont analysées sans complaisance ; l'apostrophe et la question rhétorique cherchent à provoquer un sursaut.",
                "Partie 3, une réflexion humaniste sur la liberté : la liberté naturelle et la fraternité des hommes, la valeur de l'amitié fondée sur l'égalité ; une pensée de la non-coopération qui sera relue par les protestants, rapprochée de Rousseau et de la désobéissance civile.",
                "Conclusion : le Discours dénonce, mais surtout il éclaire ; il fait de la liberté une affaire de volonté et de lucidité.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les grandes étapes de l'argumentation du Discours.",
            items: [
              "Le constat : un seul homme tient sous son joug des peuples entiers",
              "Le paradoxe : il n'a de pouvoir que celui qu'on lui donne",
              "La liberté est naturelle : les hommes sont faits pour être compagnons et frères",
              "Première cause de la servitude : la coutume",
              "Les ruses des tyrans : divertissements et apparence sacrée",
              "Le ressort secret : la chaîne des complices",
              "Le tyran ne peut ni aimer ni être aimé : l'amitié lui est impossible",
            ],
          },
          quiz: [
            {
              q: "Quel écrivain fut l'ami intime de La Boétie ?",
              options: ["Rabelais", "Montaigne", "Ronsard", "Calvin"],
              answer: 1,
              why: "Montaigne évoque leur amitié dans le chapitre « De l'amitié » des Essais.",
            },
            {
              q: "Selon La Boétie, quelle est la première raison de la servitude volontaire ?",
              options: ["La coutume", "La peur des armes", "La pauvreté du peuple", "Le manque d'instruction"],
              answer: 0,
              why: "Les hommes nés dans la servitude la prennent pour naturelle : la coutume leur fait oublier la liberté.",
            },
            {
              q: "Que suffit-il de faire, selon le Discours, pour être libre ?",
              options: ["Prendre les armes contre le tyran", "Fuir à l'étranger", "Cesser de servir", "Élire un autre roi"],
              answer: 2,
              why: "Puisque le tyran ne tient que par l'obéissance, il suffit de la retirer : « Soyez résolus de ne servir plus, et vous voilà libres. »",
            },
            {
              q: "À quoi La Boétie compare-t-il le tyran privé de soutien ?",
              options: ["À un fleuve en crue", "À un lion en cage", "À un navire sans voile ni gouvernail", "À un colosse dont on a ôté la base"],
              answer: 3,
              why: "Le colosse sans base s'effondre sous son propre poids : la puissance du tyran repose sur ceux qui le portent.",
            },
            {
              q: "Comment le Discours a-t-il été publié ?",
              options: ["Par La Boétie lui-même, à Bordeaux", "Après sa mort, par des protestants, dans les années 1570", "Dans les Essais de Montaigne, au cœur du chapitre « De l'amitié »", "Au XVIIIe siècle, par Rousseau"],
              answer: 1,
              why: "Le texte paraît après la Saint-Barthélemy, dans des recueils protestants ; Montaigne renonce à l'insérer dans les Essais.",
            },
          ],
          trap: "Lire le Discours comme un appel à la révolte armée ou au tyrannicide : La Boétie montre au contraire qu'il suffit de refuser son consentement, sans violence, pour que la tyrannie s'effondre.",
          method: "Pour réviser une œuvre d'idées, résumez sa thèse en une phrase, puis notez trois arguments et, pour chacun, une image ou un exemple à citer. À l'écrit comme à l'oral, ce schéma thèse, argument, exemple suffit à construire un paragraphe solide.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'fontenelle-pluralite-mondes',
          title: 'Fontenelle, « Entretiens sur la pluralité des mondes » : le goût de la science',
          minutes: 35,
          objectives: [
            "Situer Fontenelle et les Entretiens sur la pluralité des mondes dans la révolution scientifique du XVIIe siècle.",
            "Analyser le dispositif du dialogue galant entre le philosophe et la Marquise.",
            "Identifier les procédés de la vulgarisation scientifique : analogies, anecdotes, humour.",
            "Construire une réflexion sur le parcours « le goût de la science ».",
          ],
          course: [
            {
              heading: "Fontenelle, un Moderne au service de la science",
              paragraphs: [
                "Bernard Le Bovier de Fontenelle naît à Rouen en 1657 et meurt à Paris en 1757, à près de cent ans. Neveu de Pierre et Thomas Corneille par sa mère, il commence par écrire pour le théâtre et la poésie galante, puis se tourne vers la diffusion des savoirs. Il publie en 1686 les Entretiens sur la pluralité des mondes, puis en 1687 l'Histoire des oracles, qui critique la crédulité et les superstitions.",
                "Dans la querelle des Anciens et des Modernes, il prend le parti des Modernes (Digression sur les Anciens et les Modernes, 1688) : il pense que les connaissances progressent et que les Modernes peuvent égaler, voire dépasser, les Anciens. Élu à l'Académie française en 1691, il devient en 1697 secrétaire perpétuel de l'Académie royale des sciences, fondée en 1666 ; pendant plus de quarante ans, il y rédige l'histoire des travaux et les éloges des savants.",
              ],
              box: { label: "Repère", text: "1543 : Copernic place le Soleil au centre du système. 1610 : Galilée publie ses observations à la lunette. 1633 : condamnation de Galilée. 1644 : Principes de la philosophie de Descartes (les tourbillons). 1686 : Entretiens de Fontenelle. 1687 : Principia de Newton." },
            },
            {
              heading: "Le contexte : une révolution du regard",
              paragraphs: [
                "Pendant des siècles, on a pensé avec Ptolémée que la Terre était immobile au centre de l'univers (géocentrisme). Copernic, en 1543, propose que la Terre tourne sur elle-même et autour du Soleil (héliocentrisme). Galilée, grâce à la lunette, découvre les reliefs de la Lune et les satellites de Jupiter ; il est condamné par l'Église en 1633 pour avoir défendu le système de Copernic. Descartes explique ensuite le mouvement des astres par des tourbillons de matière.",
                "Fontenelle écrit à un moment où ces idées sont admises par les savants mais encore mal connues du public cultivé. Il adopte le système de Copernic et la physique des tourbillons de Descartes ; les Principia de Newton, qui fondent la théorie de la gravitation, paraissent l'année suivante. Le livre est ainsi un témoignage précieux sur l'état des connaissances, et sur la manière de les faire partager.",
              ],
            },
            {
              heading: "Le dispositif : un dialogue galant sous les étoiles",
              paragraphs: [
                "Le livre se présente comme le récit de conversations nocturnes, appelées « soirs », dans le parc d'un château. Le narrateur, un philosophe, explique l'univers à une jeune Marquise, curieuse et spirituelle. La première édition compte cinq soirs, un sixième est ajouté l'année suivante. La progression va du plus proche au plus lointain : la Terre est une planète qui tourne sur elle-même et autour du Soleil ; la Lune est une terre peut-être habitée ; les autres planètes aussi ; enfin, les étoiles fixes sont autant de soleils qui éclairent peut-être d'autres mondes.",
                "Le choix d'une interlocutrice est un choix de lecteur. Dans sa préface, Fontenelle s'adresse aux gens du monde et en particulier aux femmes, à qui la science était alors largement fermée ; il leur demande seulement l'attention que l'on accorde à un roman. La Marquise n'est pas une élève passive : elle objecte, plaisante, comprend vite et va parfois plus loin que son maître. Le ton galant, fait de compliments et de badinage, rend la science aimable sans la rendre fausse.",
                "Prudent, Fontenelle prend soin de préciser que les habitants qu'il imagine sur les autres planètes ne sont pas des hommes : il évite ainsi d'entrer en conflit avec la théologie, qui fait descendre tous les hommes d'Adam.",
              ],
            },
            {
              heading: "Les procédés de la vulgarisation",
              paragraphs: [
                "Fontenelle explique l'inconnu par le connu. Dans le premier soir, il compare la nature à un grand spectacle d'opéra : le spectateur voit les effets mais pas les machines cachées, et le philosophe est celui qui veut comprendre les rouages. La Marquise en vient à déclarer qu'elle estime davantage l'univers depuis qu'elle sait qu'il fonctionne comme une montre : comprendre n'abolit pas l'émerveillement.",
                "Les anecdotes et les fables jouent le même rôle. La plus célèbre est celle des roses qui, ne vivant qu'un jour, croiraient le jardinier immortel parce que, de mémoire de rose, on ne l'a jamais vu mourir ; de même, la brièveté de la vie humaine nous fait croire immuables des cieux qui changent. L'humour, les hypothèses amusantes sur les habitants des autres planètes et la modestie qu'impose l'immensité de l'univers font de la science une aventure de l'esprit.",
              ],
              box: { label: "À retenir", text: "Les Entretiens rendent la science accessible par le dialogue, l'analogie (l'opéra, la montre), l'anecdote (les roses et le jardinier), l'humour et la galanterie. Le goût de la science est à la fois plaisir de comprendre et esprit critique." },
            },
          ],
          keyPoints: [
            "Fontenelle (1657-1757), Moderne, secrétaire perpétuel de l'Académie des sciences à partir de 1697.",
            "Entretiens sur la pluralité des mondes (1686) : un philosophe explique l'astronomie à une Marquise, au fil de plusieurs soirs.",
            "Contenu : héliocentrisme de Copernic, tourbillons de Descartes, Lune et planètes peut-être habitées, étoiles qui sont des soleils.",
            "Procédés : dialogue galant, analogies (opéra, montre), anecdote des roses, humour.",
            "Le goût de la science : curiosité, plaisir de comprendre, esprit critique, ouverture du savoir aux femmes et au public cultivé.",
          ],
          example: {
            statement: "Pourquoi Fontenelle choisit-il la forme du dialogue avec une Marquise pour exposer l'astronomie ?",
            solution: [
              "Constat : le livre aurait pu être un traité ; Fontenelle choisit une conversation entre un philosophe et une jeune femme du monde.",
              "Raison pédagogique : le dialogue avance pas à pas, au rythme des questions de la Marquise ; ses objections sont celles du lecteur, ce qui permet de lever les difficultés une à une.",
              "Raison sociale : la Marquise représente le public visé, les gens du monde et les femmes, alors tenus à l'écart des savoirs savants ; elle prouve qu'on peut comprendre sans être spécialiste.",
              "Raison esthétique : la galanterie et l'humour rendent la lecture agréable, comme celle d'un roman, et associent la science au plaisir.",
              "Réponse : le dialogue galant permet d'instruire en plaisant, d'élargir le public de la science et de montrer que le goût du savoir naît de la curiosité et de l'échange.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Répondez brièvement : a) Qui sont les deux personnages des Entretiens ? b) Où et quand ont lieu les conversations ? c) Quel système astronomique Fontenelle adopte-t-il ? d) Quelle hypothèse annonce le titre ?",
              hint: "Pensez au philosophe, au parc, au Soleil au centre, et au mot « pluralité ».",
              solution: [
                "a) Un philosophe, qui est le narrateur, et une jeune Marquise.",
                "b) Dans le parc d'un château, le soir, au cours de plusieurs soirées successives.",
                "c) Le système de Copernic : la Terre tourne sur elle-même et autour du Soleil (héliocentrisme), avec la physique des tourbillons de Descartes.",
                "d) L'hypothèse que d'autres mondes que la Terre existent et peuvent être habités : la Lune, les planètes, et peut-être les planètes d'autres soleils.",
              ],
            },
            {
              level: 2,
              statement: "Fontenelle raconte que des roses, qui ne vivent qu'un jour, croiraient le jardinier immortel, puisque, de mémoire de rose, on ne l'a jamais vu mourir. Expliquez quelle idée cette anecdote veut faire comprendre, quel type de raisonnement elle utilise et pourquoi elle est efficace.",
              hint: "Comparez la durée de vie des roses à celle du jardinier, puis celle des hommes à celle des astres.",
              solution: [
                "L'idée : notre courte expérience nous trompe ; parce que nous n'avons jamais vu les cieux changer, nous les croyons éternels, alors qu'ils peuvent changer sur des durées qui dépassent nos vies.",
                "Le raisonnement : c'est un raisonnement par analogie. Les roses sont aux jardiniers ce que les hommes sont aux astres : des êtres éphémères qui jugent mal ce qui dure plus qu'eux.",
                "L'efficacité : l'image est concrète, gracieuse et amusante ; la formule « de mémoire de rose » fait sourire et se retient facilement.",
                "La leçon critique : l'anecdote invite à se méfier des évidences et des préjugés fondés sur une expérience limitée, ce qui est le cœur de l'esprit scientifique.",
              ],
            },
            {
              level: 3,
              statement: "Type bac (dissertation). Sujet : « Dans les Entretiens sur la pluralité des mondes, le plaisir l'emporte-t-il sur le savoir ? » Vous répondrez en prenant appui sur l'œuvre de Fontenelle, sur les textes étudiés dans le cadre du parcours « le goût de la science » et sur votre culture littéraire. Proposez une problématique et un plan détaillé.",
              hint: "Montrez la place du plaisir, puis la solidité du savoir transmis, avant de dépasser l'opposition : le plaisir est la voie du savoir.",
              solution: [
                "Problématique : la galanterie et l'humour de Fontenelle sont-ils un ornement qui affaiblit la science, ou le moyen même de transmettre le goût de savoir ?",
                "Partie 1, une œuvre de plaisir : cadre romanesque (parc, nuit, conversation), galanterie, badinage avec la Marquise, anecdotes et hypothèses amusantes sur les habitants des planètes.",
                "Partie 2, une œuvre de savoir : exposé rigoureux du système de Copernic et des tourbillons de Descartes, progression méthodique de la Terre aux étoiles, rôle des objections, esprit critique (l'anecdote des roses, la prudence sur les habitants des planètes).",
                "Partie 3, le plaisir comme chemin du savoir : la curiosité de la Marquise montre que comprendre augmente l'émerveillement (l'univers comme montre, la nature comme opéra) ; cette alliance de l'agréable et de l'utile inspire les Lumières, de Voltaire (Micromégas, 1752) à l'Encyclopédie.",
                "Conclusion : le plaisir ne l'emporte pas sur le savoir, il le rend désirable ; c'est précisément le goût de la science.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Fontenelle et ses Entretiens.",
            statements: [
              { text: "Les Entretiens sur la pluralité des mondes paraissent en 1686.", true: true, why: "La première édition date de 1686 ; un sixième soir est ajouté l'année suivante." },
              { text: "Fontenelle défend le géocentrisme de Ptolémée.", true: false, why: "Il expose le système de Copernic, dans lequel la Terre tourne autour du Soleil." },
              { text: "La Marquise se contente d'écouter sans jamais objecter.", true: false, why: "Elle questionne, objecte, plaisante et comprend vite : son rôle est actif." },
              { text: "Fontenelle s'appuie sur les tourbillons de Descartes.", true: true, why: "Il adopte la physique cartésienne ; la gravitation de Newton n'est publiée qu'en 1687." },
              { text: "Fontenelle affirme que les habitants des autres planètes sont des hommes comme nous.", true: false, why: "Il précise au contraire qu'ils ne sont pas des hommes, pour éviter un conflit avec la théologie." },
              { text: "L'anecdote des roses et du jardinier illustre les erreurs dues à une expérience trop courte.", true: true, why: "Les roses jugent le jardinier immortel comme nous jugeons les cieux immuables." },
              { text: "Fontenelle a pris le parti des Anciens dans la querelle des Anciens et des Modernes.", true: false, why: "Il est un Moderne, convaincu du progrès des connaissances." },
            ],
          },
          quiz: [
            {
              q: "À qui le philosophe des Entretiens explique-t-il l'astronomie ?",
              options: ["À un jeune prince", "À une Marquise", "À ses élèves de l'Académie", "Au roi Louis XIV"],
              answer: 1,
              why: "Les conversations réunissent le philosophe et une jeune Marquise curieuse, figure du public cultivé que Fontenelle veut toucher.",
            },
            {
              q: "Quelle fonction Fontenelle occupe-t-il à partir de 1697 ?",
              options: ["Précepteur du Dauphin", "Directeur de l'Observatoire royal et astronome du roi", "Secrétaire perpétuel de l'Académie des sciences", "Professeur au Collège royal"],
              answer: 2,
              why: "Il est pendant plus de quarante ans le secrétaire perpétuel de l'Académie royale des sciences.",
            },
            {
              q: "À quoi Fontenelle compare-t-il la nature dans le premier soir ?",
              options: ["À un spectacle d'opéra dont on ne voit pas les machines", "À un livre écrit en latin", "À une forêt obscure", "À une bataille"],
              answer: 0,
              why: "Le spectateur voit les effets ; le philosophe veut comprendre les machines cachées qui les produisent.",
            },
            {
              q: "Quelle hypothèse le titre du livre annonce-t-il ?",
              options: ["Que la Terre est plate", "Que la Lune est un astre de feu", "Que le Soleil tourne autour de la Terre immobile", "Que d'autres mondes peuvent être habités"],
              answer: 3,
              why: "La « pluralité des mondes » désigne l'idée que la Lune, les planètes et les mondes d'autres soleils peuvent être habités.",
            },
            {
              q: "Que montre la formule « de mémoire de rose » ?",
              options: ["L'amour de Fontenelle pour les jardins", "Les limites d'un jugement fondé sur une expérience trop brève", "La supériorité des fleurs sur les hommes", "La fragilité de la beauté"],
              answer: 1,
              why: "Les roses éphémères croient le jardinier immortel : nous jugeons de même les cieux à l'échelle trop courte de nos vies.",
            },
          ],
          trap: "Réduire les Entretiens à un badinage mondain, ou à l'inverse à un manuel d'astronomie : l'œuvre tient sa force de l'alliance entre l'exactitude du savoir et le plaisir de la conversation.",
          method: "Constituez un petit répertoire de trois images de Fontenelle (l'opéra, la montre, les roses) et, pour chacune, notez l'idée scientifique qu'elle illustre ; ces exemples courts nourrissent efficacement une dissertation ou un entretien oral.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'graffigny-peruvienne',
          title: 'Graffigny, « Lettres d’une Péruvienne » : un nouvel univers',
          minutes: 35,
          objectives: [
            "Situer Françoise de Graffigny et les Lettres d'une Péruvienne dans le XVIIIe siècle des Lumières.",
            "Analyser le procédé du regard étranger et la critique de la société française qu'il permet.",
            "Identifier les caractéristiques du roman épistolaire et la place d'une voix féminine.",
            "Construire une réflexion sur le parcours consacré à la découverte d'un nouvel univers.",
          ],
          course: [
            {
              heading: "Une femme de lettres au siècle des Lumières",
              paragraphs: [
                "Françoise de Graffigny naît à Nancy, en Lorraine, en 1695 et meurt à Paris en 1758. Mariée à un homme violent, elle obtient la séparation et vit ensuite de manière indépendante, ce qui est difficile pour une femme de son temps. Elle séjourne à Cirey auprès de Voltaire et d'Émilie du Châtelet (1738-1739), puis s'installe à Paris, où elle tient un salon fréquenté par des écrivains et des philosophes.",
                "Les Lettres d'une Péruvienne paraissent en 1747 et connaissent un immense succès, en France comme dans toute l'Europe ; une édition augmentée paraît en 1752. Graffigny triomphe aussi au théâtre avec Cénie (1750). Elle est l'une des rares femmes de lettres de son siècle à avoir connu une telle reconnaissance, et son roman est aujourd'hui redécouvert comme une œuvre majeure.",
              ],
            },
            {
              heading: "L'histoire de Zilia",
              paragraphs: [
                "Zilia est une jeune Inca, vierge consacrée au Soleil, qui doit épouser Aza, héritier de l'empire. Le jour de leurs noces, les conquérants espagnols envahissent le temple et l'enlèvent. Le navire espagnol qui l'emporte est pris par des Français ; un officier, Déterville, la protège, tombe amoureux d'elle et la conduit en France. Dans ses premières lettres, Zilia écrit à Aza au moyen des quipos, cordons noués qui servaient aux Incas à conserver la mémoire ; puis elle apprend le français et écrit dans cette langue.",
                "En France, Zilia découvre une société entièrement nouvelle, d'abord à travers la famille de Déterville, où la sœur de celui-ci, Céline, devient son amie. Elle apprend enfin qu'Aza est vivant, mais qu'il s'est converti au christianisme et s'est engagé auprès d'une jeune Espagnole. Zilia refuse pourtant d'épouser Déterville : elle lui offre son amitié et choisit de vivre de manière indépendante, dans une maison à la campagne acquise grâce aux trésors de son temple, en goûtant le simple plaisir d'exister.",
              ],
              box: { label: "À retenir", text: "Les Lettres d'une Péruvienne (1747) forment un roman épistolaire à une seule voix : seule Zilia écrit, à Aza puis à Déterville. Le récit d'amour se double d'une découverte de la France et d'une conquête de l'indépendance." },
            },
            {
              heading: "Le regard étranger : voir la France autrement",
              paragraphs: [
                "Comme Montesquieu dans les Lettres persanes (1721), Graffigny utilise le regard d'une étrangère qui découvre la France sans en connaître les codes. Ce qui paraît naturel aux Français devient, sous ses yeux, étrange, voire absurde. Au début, Zilia ne comprend pas ce qu'elle voit et décrit les objets et les usages avec naïveté ; le lecteur doit reconstituer ce qu'elle désigne, et il découvre ainsi sa propre société comme pour la première fois.",
                "Peu à peu, la naïveté devient lucidité critique. Zilia observe le goût du luxe et de l'apparence, une politesse faite de formules sans sincérité, l'importance de l'argent, la frivolité de la conversation. Elle s'en prend surtout à la condition des femmes : une éducation négligée, souvent reçue au couvent, qui ne leur apprend qu'à plaire, et une dépendance qui les prive de liberté. La critique est d'autant plus forte qu'elle vient d'une femme sensible et raisonnable, que l'on ne peut taxer d'ignorance.",
              ],
            },
            {
              heading: "Un nouvel univers : le parcours",
              paragraphs: [
                "Le roman fait se rencontrer deux univers. Pour Zilia, la France est un monde nouveau, avec sa langue, ses objets, ses mœurs ; pour le lecteur français, le Pérou des Incas, idéalisé, offre un contre-modèle de simplicité et de vertu. Le roman pose ainsi la question de la relativité des usages et de la violence de la conquête : les Espagnols, qui se disent civilisés, ont détruit l'empire inca.",
                "Le parcours invite à relier l'œuvre à d'autres textes qui découvrent un nouvel univers ou le regardent depuis l'extérieur. Montaigne, dans « Des cannibales » (Essais, 1580), observe que chacun appelle barbarie ce qui n'est pas de son usage. Montesquieu fait poser à ses Parisiens la question « Comment peut-on être Persan ? ». Voltaire, dans L'Ingénu (1767), et Diderot, dans le Supplément au Voyage de Bougainville, reprennent le regard du voyageur ou du sauvage pour mettre en question la civilisation européenne.",
              ],
              box: { label: "Repère", text: "Montaigne, « Des cannibales » (1580). Montesquieu, Lettres persanes (1721). Graffigny, Lettres d'une Péruvienne (1747, édition augmentée en 1752). Voltaire, L'Ingénu (1767). Diderot, Supplément au Voyage de Bougainville (écrit en 1772)." },
            },
          ],
          keyPoints: [
            "Françoise de Graffigny (1695-1758), femme de lettres indépendante ; Lettres d'une Péruvienne, 1747, immense succès européen.",
            "Zilia, jeune Inca enlevée par les Espagnols puis conduite en France par Déterville, écrit d'abord avec des quipos.",
            "Roman épistolaire à une seule voix : seule Zilia écrit.",
            "Regard étranger : critique du luxe, de l'apparence, de l'argent et surtout de la condition des femmes.",
            "Dénouement : Zilia refuse le mariage, choisit l'amitié et une vie indépendante.",
            "Parcours : Montaigne, Montesquieu, Voltaire, Diderot ; la relativité des usages et la critique de la civilisation.",
          ],
          example: {
            statement: "Montrez en quoi le dénouement des Lettres d'une Péruvienne est original pour un roman du XVIIIe siècle.",
            solution: [
              "Rappeler le dénouement : abandonnée par Aza, Zilia pourrait épouser Déterville, qui l'aime et l'a protégée ; elle refuse et lui offre son amitié.",
              "Mesurer l'écart avec les attentes : le roman de l'époque se termine souvent par un mariage ou par la mort de l'héroïne ; ici, ni l'un ni l'autre.",
              "Interpréter le choix : Zilia choisit l'indépendance, une maison à elle, la lecture, l'amitié et le plaisir d'exister ; elle ne dépend plus d'un homme.",
              "Relier à la critique du roman : ce choix prolonge sa réflexion sur la condition des femmes, qu'elle juge privées d'éducation et de liberté.",
              "Réponse : le dénouement est original parce qu'il refuse le mariage comme seule issue et fait de la liberté d'une femme la véritable conclusion du roman.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici un passage écrit pour l'exercice, à la manière de Zilia : « Les Français ont une étrange coutume, mon cher Aza : ils se saluent avec des paroles d'amitié qu'ils oublient en se retournant ; ils appellent politesse cet art de promettre ce qu'ils ne donnent pas. » Relevez trois procédés du regard étranger et dites ce qui est critiqué.",
              hint: "Observez l'adjectif qui qualifie la coutume, la généralisation sur « les Français » et l'opposition entre les paroles et les actes.",
              solution: [
                "L'étonnement : l'adjectif « étrange » montre une étrangère qui découvre une coutume que les Français trouvent naturelle.",
                "La généralisation : « Les Français » sont observés comme un peuple lointain, ce qui met à distance les mœurs du lecteur.",
                "L'antithèse et l'ironie : « paroles d'amitié » s'oppose à « qu'ils oublient », et « promettre » s'oppose à « ne donnent pas » ; la définition de la politesse devient une accusation.",
                "Ce qui est critiqué : l'hypocrisie de la politesse mondaine, faite de formules sans sincérité.",
              ],
            },
            {
              level: 2,
              statement: "Comparez le regard de Zilia et celui de Montaigne dans « Des cannibales », où il observe que chacun appelle barbarie ce qui n'est pas de son usage. En quoi les deux textes mettent-ils en question l'idée de civilisation ? Répondez en trois points.",
              hint: "Pensez au renversement des points de vue : qui est vraiment le barbare ?",
              solution: [
                "Un même renversement : chez Montaigne comme chez Graffigny, le prétendu « sauvage » ou l'étrangère juge les Européens, et leur civilisation apparaît à son tour étrange ou barbare.",
                "Une même relativité : ce que l'on croit naturel n'est que l'usage d'un pays ; Montaigne le formule en idée générale, Graffigny le fait éprouver par le regard d'un personnage.",
                "Une même dénonciation de la violence : Montaigne rappelle les cruautés des Européens, Graffigny la destruction de l'empire inca par les conquérants espagnols.",
                "Une différence : Montaigne raisonne en son nom dans un essai (argumentation directe), Graffigny passe par la fiction d'une héroïne sensible (argumentation indirecte), ce qui ajoute l'émotion et la critique de la condition des femmes.",
              ],
            },
            {
              level: 3,
              statement: "Type bac (dissertation). Sujet : « Les Lettres d'une Péruvienne ne sont-elles qu'une histoire d'amour ? » Vous répondrez en prenant appui sur le roman de Graffigny, sur les textes étudiés dans le cadre du parcours et sur votre culture littéraire. Proposez une problématique et un plan détaillé.",
              hint: "Partez de l'histoire d'amour, puis montrez qu'elle sert une critique sociale et la conquête d'une liberté.",
              solution: [
                "Problématique : l'intrigue sentimentale est-elle le cœur du roman, ou le support d'une réflexion sur la société et la liberté des femmes ?",
                "Partie 1, une histoire d'amour : la passion de Zilia pour Aza, les lettres comme fil qui la relie à l'absent, l'amour de Déterville, l'émotion et la sensibilité propres au roman épistolaire du XVIIIe siècle.",
                "Partie 2, une critique de la société française : le regard étranger dénonce le luxe, l'hypocrisie de la politesse, l'argent et l'éducation des femmes ; la conquête espagnole est mise en accusation ; ce procédé rapproche le roman des Lettres persanes et de « Des cannibales ».",
                "Partie 3, la conquête d'une liberté : Zilia apprend une langue, pense par elle-même, refuse le mariage et choisit l'indépendance et l'amitié ; la voix d'une héroïne et d'une autrice affirme la dignité des femmes.",
                "Conclusion : l'histoire d'amour est le point de départ d'une découverte plus vaste ; le nouvel univers que découvre Zilia est aussi celui de sa propre liberté.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'histoire de Zilia.",
            items: [
              "Zilia, vierge du Soleil, doit épouser Aza, héritier de l'empire inca",
              "Le jour des noces, les Espagnols envahissent le temple et l'enlèvent",
              "Le navire espagnol est pris par des Français ; Déterville protège Zilia",
              "En France, Zilia apprend la langue et découvre la société française",
              "Zilia apprend qu'Aza, converti, s'est engagé auprès d'une Espagnole",
              "Elle refuse d'épouser Déterville et lui offre son amitié",
              "Elle choisit une vie indépendante dans une maison à la campagne",
            ],
          },
          quiz: [
            {
              q: "En quelle année paraissent les Lettres d'une Péruvienne ?",
              options: ["1721", "1747", "1759", "1789"],
              answer: 1,
              why: "Le roman paraît en 1747 ; 1721 est la date des Lettres persanes de Montesquieu.",
            },
            {
              q: "Avec quoi Zilia écrit-elle ses premières lettres ?",
              options: ["Des quipos, cordons noués", "Une plume d'oie", "Des tablettes d'argile", "Des hiéroglyphes"],
              answer: 0,
              why: "Les quipos étaient des cordons à nœuds utilisés par les Incas ; Zilia apprend ensuite à écrire en français.",
            },
            {
              q: "Quel procédé critique Graffigny partage-t-elle avec Montesquieu ?",
              options: ["Le monologue délibératif", "La maxime", "Le regard étranger", "Le vers libre"],
              answer: 2,
              why: "Comme les Persans de Montesquieu, Zilia découvre la France sans en connaître les codes, ce qui en fait apparaître les travers.",
            },
            {
              q: "Comment se termine le roman ?",
              options: ["Zilia épouse Déterville", "Zilia retourne au Pérou pour retrouver Aza", "Zilia entre au couvent", "Zilia choisit l'amitié et l'indépendance"],
              answer: 3,
              why: "Zilia refuse le mariage et propose à Déterville une amitié, en choisissant de vivre libre.",
            },
            {
              q: "Pourquoi parle-t-on d'un roman épistolaire à une seule voix ?",
              options: ["Il ne contient qu'une seule lettre", "Toutes les lettres sont écrites par Zilia", "Il est entièrement en vers", "Déterville raconte toute l'histoire après coup"],
              answer: 1,
              why: "On ne lit que les lettres de Zilia, adressées à Aza puis à Déterville ; les réponses ne sont pas données.",
            },
          ],
          trap: "Résumer le roman comme une simple histoire d'amour malheureuse : l'intrigue sentimentale sert une critique de la société française et la conquête, par Zilia, d'une liberté de femme.",
          method: "Pour une œuvre au regard étranger, préparez un tableau à deux colonnes : ce que voit le personnage (sa description naïve) et ce que comprend le lecteur (la critique visée). Cet exercice entraîne à expliquer l'ironie à l'écrit comme à l'oral.",
        },
      ],
    },
  ],
}
