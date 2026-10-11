import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'francais-2nde',
  chapters: [
    /* ==================================================================== */
    /* LA POÉSIE DU MOYEN ÂGE AU XVIIIe SIÈCLE : FORMES ET POÈTES           */
    /* ==================================================================== */
    {
      id: 'poesie-formes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'versification',
          title: 'Les outils de la versification : vers, rimes et rythme',
          minutes: 35,
          objectives: [
            "Compter les syllabes d'un vers en appliquant les règles du e muet, de la diérèse et de la synérèse.",
            "Identifier les principaux mètres, la disposition, la richesse et le genre des rimes, ainsi que les strophes.",
            "Repérer la césure, l'enjambement, le rejet et le contre-rejet, et en interpréter l'effet.",
            "Situer l'histoire du vers français, de la chanson de geste à la poésie classique.",
          ],
          course: [
            {
              heading: "Le vers et son mètre",
              paragraphs: [
                "Un vers est une unité de rythme : il est délimité par le retour à la ligne et, dans la poésie traditionnelle, commence par une majuscule. Le vers français ne repose pas sur des syllabes longues et brèves, comme le vers latin, mais sur un nombre fixe de syllabes prononcées : ce nombre s'appelle le mètre. On nomme le vers d'après lui : l'octosyllabe compte huit syllabes, le décasyllabe dix, l'alexandrin douze ; on rencontre aussi l'hexasyllabe (six) et l'heptasyllabe (sept).",
                "Chaque mètre a son histoire. Au Moyen Âge, l'octosyllabe est le vers des romans en vers, comme ceux de Chrétien de Troyes, et de nombreuses chansons ; le décasyllabe est celui des chansons de geste, comme La Chanson de Roland. L'alexandrin doit son nom au Roman d'Alexandre, poème du XIIe siècle consacré à Alexandre le Grand. Longtemps concurrencé par le décasyllabe, il est remis à l'honneur par les poètes de la Pléiade au XVIe siècle, puis devient au XVIIe siècle le grand vers de la poésie et de la tragédie classiques.",
                "Un poème peut employer un seul mètre (il est isométrique) ou en mêler plusieurs (il est hétérométrique). La Fontaine, dans ses Fables, pratique ainsi les vers mêlés : un alexandrin peut succéder à un octosyllabe, puis à un vers de quatre syllabes, ce qui donne au récit sa vivacité et met en relief certains mots.",
              ],
              box: { label: "Repère", text: "Octosyllabe : 8 syllabes (romans médiévaux, chansons). Décasyllabe : 10 syllabes (chansons de geste, poésie du XVIe siècle). Alexandrin : 12 syllabes, nommé d'après le Roman d'Alexandre (XIIe siècle), vers dominant de l'âge classique." },
            },
            {
              heading: "Compter les syllabes : le e muet, la diérèse et la synérèse",
              paragraphs: [
                "Le e muet (ou e caduc), placé à la fin d'un mot, obéit à trois règles. Devant une consonne ou un h aspiré, il se prononce et compte : « une rose » se dit u-ne-ro-se. Devant une voyelle ou un h muet, il s'élide et ne compte pas : « comme une eau » se dit com-mu-neau. En fin de vers, il ne compte jamais. Suivi de s ou de nt (« les heures », « ils chantent »), il compte toujours à l'intérieur du vers, car il ne peut pas s'élider.",
                "Deux voyelles qui se suivent dans un même mot peuvent se prononcer en une seule syllabe : c'est la synérèse (« pied », « nuit », « ciel »). Elles peuvent aussi être séparées en deux syllabes : c'est la diérèse (« li-on », « pa-ti-ent », « o-ri-on »). La tradition fixe l'usage pour de nombreux mots, souvent selon leur origine latine, mais le poète peut choisir la diérèse pour ralentir le vers et mettre un mot en valeur. On ne la repère qu'en comptant tout le vers : c'est le total attendu qui oblige à séparer les voyelles.",
                "La poésie classique interdit aussi l'hiatus, c'est-à-dire la rencontre de deux voyelles prononcées entre deux mots (« il a été », « j'ai eu »). Cette règle, défendue par Malherbe au début du XVIIe siècle puis rappelée par Boileau dans son Art poétique (1674), explique que les poètes classiques évitent certains enchaînements de mots. Elle disparaît avec les libertés prises par la poésie aux XIXe et XXe siècles.",
              ],
              box: { label: "Règle", text: "Le e muet compte devant une consonne ou un h aspiré, s'élide devant une voyelle ou un h muet, ne compte jamais en fin de vers. Suivi de s ou de nt, il compte toujours à l'intérieur du vers. Diérèse : deux voyelles en deux syllabes (li-on). Synérèse : en une seule (nuit)." },
            },
            {
              heading: "La rime et la strophe",
              paragraphs: [
                "La rime est le retour du même son à la fin de deux vers ou plus, à partir de la dernière voyelle prononcée. La poésie épique du Moyen Âge se contente souvent de l'assonance, qui ne fait revenir que la dernière voyelle accentuée : La Chanson de Roland est composée de laisses (strophes de longueur variable) assonancées. La rime proprement dite s'impose ensuite dans la poésie lyrique et devient une règle de la poésie régulière jusqu'au XIXe siècle.",
                "On décrit une rime selon trois critères. Sa disposition : suivies ou plates (AABB), croisées (ABAB), embrassées (ABBA). Sa richesse : pauvre avec un seul son commun (ami, joli : le son i), suffisante avec deux (beauté, clarté : t et é), riche avec trois ou plus (fleur, douleur : l, eu, r). Son genre : féminine quand le vers se termine par un e muet (rose, ils chantent), masculine dans tous les autres cas. Ronsard recommande d'alterner rimes masculines et féminines dans son Abrégé de l'art poétique français (1565), et cette alternance devient la règle de la poésie classique.",
                "Les vers se regroupent en strophes, séparées par un blanc : le distique (deux vers), le tercet (trois), le quatrain (quatre), le quintil (cinq), le sizain (six), le huitain (huit), le dizain (dix). Certains poèmes suivent une forme fixe, qui impose le nombre de vers, de strophes et la disposition des rimes : la ballade et le rondeau au Moyen Âge, le sonnet à partir du XVIe siècle. Vous les étudierez dans les leçons suivantes.",
              ],
              box: { label: "À retenir", text: "Disposition : suivies (AABB), croisées (ABAB), embrassées (ABBA). Richesse : pauvre (1 son commun), suffisante (2), riche (3 ou plus). Genre : féminine (e muet final), masculine (tous les autres cas). L'assonance ne fait revenir que la dernière voyelle." },
            },
            {
              heading: "Le rythme : césure, coupes, enjambement",
              paragraphs: [
                "Dans l'alexandrin classique, une pause principale, la césure, partage le vers en deux moitiés de six syllabes appelées hémistiches : on note 6//6. Le décasyllabe a le plus souvent une césure après la quatrième syllabe (4//6) ; l'octosyllabe, plus court, n'a pas de césure fixe. À l'intérieur des hémistiches, les accents des groupes de mots créent des pauses plus légères, les coupes, que l'on note par une barre simple : « Sur le pont / du château // la nuit / tombait sans bruit » donne un rythme 3/3//2/4, les accents tombant sur « pont », « château », « nuit » et « bruit ».",
                "Dans la poésie classique, la phrase s'arrête le plus souvent à la fin du vers ou à la césure. Quand la phrase déborde sur le vers suivant, on parle d'enjambement. Si le débordement est bref, un ou deux mots rejetés au début du vers suivant, c'est un rejet ; si, à l'inverse, un élément bref placé à la fin d'un vers appartient par la syntaxe au vers suivant, c'est un contre-rejet. Ces décalages entre la phrase et le vers créent une attente ou une surprise, et attirent l'attention sur le mot isolé.",
                "Le rythme est aussi sonore. L'allitération est la répétition d'un même son consonne (« le vent violent vole ») ; l'assonance, au sens de procédé d'écriture, est la répétition d'un même son voyelle à l'intérieur des vers. Un relevé de sons n'a d'intérêt que s'il est relié au sens : des sons sifflants peuvent suggérer un souffle ou un serpent, mais seulement si le poème parle de souffle ou de serpent.",
              ],
              box: { label: "Définition", text: "Césure : pause principale du vers (6//6 dans l'alexandrin). Enjambement : la phrase déborde sur le vers suivant. Rejet : élément bref rejeté au début du vers suivant. Contre-rejet : élément bref placé en fin de vers, qui annonce le vers suivant." },
            },
          ],
          keyPoints: [
            "Octosyllabe : 8 syllabes ; décasyllabe : 10 (césure 4//6) ; alexandrin : 12 (césure 6//6, deux hémistiches).",
            "Le e muet compte devant une consonne, s'élide devant une voyelle, ne compte jamais en fin de vers.",
            "Diérèse : deux voyelles en deux syllabes (pa-ti-ent) ; synérèse : en une seule (nuit).",
            "Rimes suivies (AABB), croisées (ABAB), embrassées (ABBA) ; pauvres, suffisantes, riches ; masculines ou féminines, alternées dans la poésie classique.",
            "Strophes : distique, tercet, quatrain, quintil, sizain, huitain, dizain.",
            "Rejet et contre-rejet isolent un mot par un décalage entre la phrase et le vers : il faut interpréter cet effet.",
          ],
          example: {
            statement: "Voici un vers écrit pour l'exercice : « Le passeur attendait, patient, près de l'eau. » Comptez ses syllabes, nommez son mètre, placez la césure et dites quelle règle permet d'obtenir le bon total.",
            solution: [
              "On découpe d'abord les syllabes prononcées : Le / pas / seur / at / ten / dait, soit six syllabes jusqu'à la virgule.",
              "Le mot « patient » pose problème : prononcé pa-tient en deux syllabes (synérèse), le vers n'en compterait que onze.",
              "La tradition poétique prononce ce mot en trois syllabes, pa / ti / ent : c'est une diérèse. La fin du vers donne alors pa / ti / ent / près / de / l'eau, soit six syllabes.",
              "Total : 6 + 6 = 12 syllabes. Le vers est un alexandrin.",
              "La césure tombe après « attendait », à la sixième syllabe, là où se trouve la virgule : Le passeur attendait // patient, près de l'eau.",
              "Réponse : un alexandrin régulier, 6//6, dont le total n'est atteint que grâce à la diérèse sur « patient », qui ralentit le second hémistiche et souligne l'attente du personnage.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Comptez les syllabes de chacun de ces vers (écrits pour l'exercice) et nommez leur mètre : a) « Le rossignol chante à minuit » ; b) « La porte s'ouvre seule » ; c) « Au fond des bois chante une source claire » ; d) « Une rose fanée a gardé son parfum ».",
              hint: "Pour chaque e muet en fin de mot, regardez la lettre qui suit : une consonne le fait compter, une voyelle l'élide, la fin du vers l'efface.",
              solution: [
                "a) Le / ros / si / gnol / chan / tà / mi / nuit : le e de « chante » s'élide devant « à ». Huit syllabes : octosyllabe.",
                "b) La / por / te / s'ou / vre / seu(le) : les e de « porte » et de « s'ouvre » comptent devant une consonne, celui de « seule » est en fin de vers. Six syllabes : hexasyllabe.",
                "c) Au / fond / des / bois / chan / tu / ne / sour / ce / clai(re) : le e de « chante » s'élide devant « une », ceux de « une » et de « source » comptent devant une consonne. Dix syllabes : décasyllabe, avec une césure après « bois » (4//6).",
                "d) U / ne / ro / se / fa / née // a / gar / dé / son / par / fum : les e de « Une » et de « rose » comptent, celui de « fanée » s'élide devant « a ». Douze syllabes : alexandrin, césure après « fanée ».",
              ],
            },
            {
              level: 2,
              statement: "Voici un quatrain écrit pour l'exercice : « Le jour tombe sans bruit au bord de la rivière, / Et le saule penché trempe ses longs cheveux ; / Le vent courbe les joncs, et la brise légère / Disperse sur les eaux de petits cercles bleus. » Vérifiez que ce sont des alexandrins, puis donnez la disposition des rimes, leur richesse et leur genre. L'alternance classique est-elle respectée ?",
              hint: "Attribuez une lettre à chaque son final, puis comptez les sons communs à chaque paire : « rivière » et « légère », « cheveux » et « bleus ».",
              solution: [
                "Mètre : chaque vers compte douze syllabes. Par exemple, Le / jour / tom / be / sans / bruit // au / bord / de / la / ri / viè(re), avec la synérèse sur « viè » ; Dis / per / se / sur / les / eaux // de / pe / tits / cer / cles / bleus, où la terminaison -es de « cercles » compte devant une consonne.",
                "Disposition : « rivière » (A), « cheveux » (B), « légère » (A), « bleus » (B). Les rimes sont croisées (ABAB).",
                "Richesse : « rivière » et « légère » ont en commun les sons è et r, soit deux sons : rime suffisante. « Cheveux » et « bleus » n'ont en commun que le son eu : rime pauvre.",
                "Genre : « rivière » et « légère » se terminent par un e muet, la rime A est féminine ; « cheveux » et « bleus » n'en ont pas, la rime B est masculine.",
                "Conclusion : quatrain d'alexandrins à rimes croisées, féminines et masculines en alternance (F, M, F, M) : la règle classique est respectée.",
              ],
            },
            {
              level: 3,
              statement: "Type bac (vers le commentaire). Voici quatre alexandrins écrits pour l'exercice : « Le voyageur marchait sans fin vers l'horizon, / Et sa route montait, montait encor. Soudain / Il s'arrêta. La mer s'ouvrait devant ses yeux, / Immense. Il demeura longtemps silencieux. » 1) Comptez les syllabes du dernier vers. 2) Repérez un contre-rejet et un rejet. 3) Rédigez un court paragraphe qui interprète ces effets de rythme.",
              hint: "Pour le dernier vers, pensez à l'élision devant « Il » et à la diérèse traditionnelle des mots en -ieux. Cherchez ensuite les mots isolés au bord d'un vers.",
              solution: [
                "1) Im / men / sil / de / meu / ra // long / temps / si / len / ci / eux : le e de « Immense » s'élide devant « Il », et « silencieux » se prononce en quatre syllabes grâce à la diérèse si-len-ci-eux. Total : douze syllabes, césure après « demeura ».",
                "2) Contre-rejet : « Soudain », placé à la fin du deuxième vers, appartient par la syntaxe à la phrase « Soudain il s'arrêta », qui se poursuit au vers suivant. Rejet : « Immense », adjectif qui se rapporte à « la mer » du troisième vers, est rejeté au début du quatrième.",
                "3) Interprétation, première idée : la répétition « montait, montait » et l'enjambement prolongent la phrase comme la marche elle-même, longue et monotone ; le contre-rejet « Soudain », suspendu en fin de vers, crée une attente et prépare la rupture.",
                "Deuxième idée : la phrase très brève « Il s'arrêta. » mime l'arrêt du personnage. Le rejet « Immense », isolé par la virgule au début du dernier vers, donne à l'adjectif une ampleur qui imite l'ouverture soudaine du paysage.",
                "Troisième idée : la diérèse sur « silencieux » étire le dernier mot du poème et prolonge le moment de contemplation.",
                "Résultat : le rythme du passage suit le récit, de la marche monotone à la surprise puis à la contemplation ; les décalages entre phrase et vers mettent en relief les mots clés « Soudain » et « Immense ».",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion de versification à sa définition.",
            pairs: [
              { left: "Diérèse", right: "Deux voyelles voisines prononcées en deux syllabes" },
              { left: "Hémistiche", right: "Chacune des deux moitiés d'un alexandrin" },
              { left: "Rime embrassée", right: "Disposition ABBA" },
              { left: "Rime féminine", right: "Rime terminée par un e muet" },
              { left: "Contre-rejet", right: "Élément bref en fin de vers, lié par la syntaxe au vers suivant" },
              { left: "Assonance médiévale", right: "Retour de la seule dernière voyelle accentuée en fin de vers" },
            ],
          },
          quiz: [
            {
              q: "Combien de syllabes compte un décasyllabe ?",
              options: ["Huit", "Douze", "Dix", "Six"],
              answer: 2,
              why: "Le préfixe déca- signifie dix : le décasyllabe, vers des chansons de geste, compte dix syllabes.",
            },
            {
              q: "Dans le vers « Comme une eau qui s'endort », que devient le e final de « Comme » ?",
              options: ["Il s'élide", "Il compte comme une syllabe", "Il forme une diérèse", "Il crée une rime"],
              answer: 0,
              why: "Devant une voyelle, ici le u de « une », le e muet s'élide et ne compte pas.",
            },
            {
              q: "Quelle est la richesse de la rime « fleur / douleur » ?",
              options: ["Pauvre", "Suffisante", "Une simple assonance", "Riche"],
              answer: 3,
              why: "Les deux mots ont trois sons en commun (l, eu, r) : la rime est riche.",
            },
            {
              q: "D'où vient le nom de l'alexandrin ?",
              options: ["D'un poète du XVIIe siècle", "Du Roman d'Alexandre, au XIIe siècle", "De la ville d'Alexandrie, fondée en Égypte", "D'un traité de Boileau"],
              answer: 1,
              why: "Le vers de douze syllabes doit son nom au Roman d'Alexandre, poème médiéval consacré à Alexandre le Grand.",
            },
            {
              q: "Un mot bref placé au début d'un vers, mais qui termine la phrase du vers précédent, est...",
              options: ["une césure", "un contre-rejet", "un rejet", "une coupe"],
              answer: 2,
              why: "Le rejet est l'élément bref rejeté au début du vers suivant ; le contre-rejet est placé en fin de vers.",
            },
          ],
          trap: "Compter les syllabes comme dans la langue parlée, en avalant tous les e muets : on trouve alors onze ou dix syllabes dans un alexandrin, alors qu'il fallait faire compter le e devant une consonne ou appliquer une diérèse.",
          method: "Écrivez le vers au crayon en séparant chaque syllabe par une barre, entourez chaque e muet et notez au-dessus s'il compte (devant consonne), s'élide (devant voyelle) ou disparaît (fin de vers) : si le total ne tombe pas juste, cherchez une diérèse.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'poesie-medievale',
          title: 'La poésie médiévale : de la lyrique courtoise à Villon',
          minutes: 30,
          objectives: [
            "Situer les grandes étapes de la poésie du Moyen Âge, des troubadours à Villon.",
            "Définir la fin'amor et en reconnaître les motifs dans un poème.",
            "Identifier les formes fixes médiévales, la ballade et le rondeau, et le rôle du refrain.",
            "Analyser l'expression d'une voix personnelle et la méditation sur le temps et la mort.",
          ],
          course: [
            {
              heading: "Troubadours et trouvères : la naissance de la poésie lyrique",
              paragraphs: [
                "La poésie lyrique en langue romane naît au XIIe siècle dans le sud de la France, chez les troubadours, qui écrivent en langue d'oc. Leur nom vient du verbe occitan trobar, « trouver », c'est-à-dire inventer des vers et des mélodies. Le premier troubadour connu est un grand seigneur, Guillaume IX, duc d'Aquitaine (1071-1126). Après lui, Bernard de Ventadour chante l'amour de la dame, et Jaufré Rudel l'« amour de loin » pour une dame jamais vue.",
                "À la fin du XIIe siècle et au XIIIe siècle, des poètes du nord de la France reprennent ces modèles en langue d'oïl : ce sont les trouvères, comme Conon de Béthune, Gace Brulé, Thibaut de Champagne ou Chrétien de Troyes, connu surtout pour ses romans. Cette poésie est chantée : le poète compose souvent la musique, et des jongleurs la diffusent dans les cours seigneuriales. Le mot « lyrique » rappelle ce lien avec la lyre, l'instrument du chant antique, et désigne une poésie qui exprime des sentiments personnels.",
              ],
              box: { label: "Repère", text: "Troubadours : XIIe siècle, sud de la France, langue d'oc (Guillaume IX d'Aquitaine, Bernard de Ventadour, Jaufré Rudel). Trouvères : fin XIIe et XIIIe siècles, nord de la France, langue d'oïl (Conon de Béthune, Thibaut de Champagne)." },
            },
            {
              heading: "La fin'amor, un art d'aimer",
              paragraphs: [
                "Les troubadours appellent fin'amor (l'amour raffiné, parfait) l'idéal amoureux qu'ils célèbrent ; le médiéviste Gaston Paris a forgé en 1883 l'expression « amour courtois », passée dans l'usage. La dame est placée au-dessus du poète : souvent mariée, d'un rang social supérieur, elle est lointaine et exigeante. Le poète se présente comme son vassal, avec le vocabulaire de la féodalité : il lui fait hommage, la sert, lui jure fidélité et attend d'elle une récompense qui reste incertaine.",
                "Cet amour est une épreuve qui rend meilleur. L'attente, la souffrance et le désir inassouvi s'y mêlent paradoxalement à la joie (le joi des troubadours). Le poète doit faire preuve de mesure, garder le secret et se méfier des médisants, jaloux qui pourraient dénoncer l'amour : il désigne souvent la dame par un surnom codé, le senhal. Plusieurs genres déclinent ces situations : la chanson d'amour (canso), l'aube, où les amants se séparent au lever du jour, la pastourelle, où un chevalier courtise une bergère.",
              ],
              box: { label: "Définition", text: "Fin'amor (amour courtois) : idéal amoureux de la poésie des troubadours et des trouvères. La dame, supérieure et lointaine, est servie par le poète comme un seigneur par son vassal ; l'amour, fait d'attente, de souffrance et de joie, est une épreuve qui élève." },
            },
            {
              heading: "Les formes fixes des XIVe et XVe siècles",
              paragraphs: [
                "Aux XIVe et XVe siècles, la poésie se détache peu à peu de la musique et s'organise en formes fixes. Guillaume de Machaut (vers 1300-1377), à la fois poète et musicien, compose ballades, rondeaux et virelais, et Eustache Deschamps en expose les règles dans son Art de dicter (1392). Composer un poème devient un travail d'artisan : il faut maîtriser des contraintes strictes de rimes et de refrain.",
                "La ballade compte trois strophes construites sur les mêmes rimes, chacune terminée par le même vers, le refrain ; elle se clôt par un envoi, demi-strophe souvent adressée à un « Prince » (le protecteur du poète ou le président d'un concours poétique). Le rondeau est bâti sur deux rimes seulement : ses premiers mots ou ses premiers vers reviennent au milieu et à la fin du poème, comme un refrain. Le retour du refrain n'est jamais une simple répétition : à chaque reprise, il prend un sens enrichi par ce qui précède.",
                "Christine de Pizan (vers 1364-vers 1431), veuve à vingt-cinq ans, est l'une des premières femmes à vivre de sa plume. Dans ses Cent ballades, elle fait entendre la plainte de la veuve, avec le refrain célèbre « Seulette suis » ; elle prend aussi la défense des femmes dans La Cité des dames (1405).",
              ],
              box: { label: "Repère", text: "Ballade : trois strophes sur les mêmes rimes, un refrain à la fin de chaque strophe, un envoi (demi-strophe finale, souvent « Prince... »). Rondeau : deux rimes, les premiers mots ou vers reviennent en refrain au milieu et à la fin." },
            },
            {
              heading: "Une voix personnelle : Rutebeuf, Charles d'Orléans, Villon",
              paragraphs: [
                "À côté de l'idéal courtois, une poésie plus personnelle se développe. Au XIIIe siècle, Rutebeuf, poète parisien, compose des poèmes de l'infortune : dans La Complainte Rutebeuf, il se plaint de sa pauvreté, de sa maladie et de ses amis disparus, emportés comme par le vent. Le « je » du poète, même s'il se met en scène, n'est plus seulement celui de l'amant soumis : c'est celui d'un homme confronté à la misère.",
                "Charles d'Orléans (1394-1465), neveu du roi Charles VI, est fait prisonnier à la bataille d'Azincourt en 1415 et reste captif en Angleterre jusqu'en 1440. Il écrit des ballades et des rondeaux où il personnifie ses états d'âme (Mélancolie, Espoir, la forêt de Longue Attente) et célèbre le retour du printemps, comme dans le rondeau « Le temps a laissé son manteau ».",
                "François Villon, né en 1431, étudiant devenu maître ès arts, mène une vie mouvementée : il tue un prêtre dans une rixe en 1455, participe à un vol au collège de Navarre en 1456, puis est condamné à la pendaison en 1462 avant que sa peine ne soit commuée, en janvier 1463, en dix ans de bannissement de Paris. On perd ensuite sa trace. Dans Le Lais (1456) et Le Testament (1461), il mêle humour, satire et méditation sur la fuite du temps : la « Ballade des dames du temps jadis » demande, en refrain, où sont « les neiges d'antan » (de l'année passée), et dans la ballade dite « des pendus », des condamnés s'adressent à leurs « Frères humains » pour demander pitié et prière.",
              ],
            },
          ],
          keyPoints: [
            "XIIe siècle : troubadours (langue d'oc), premier connu Guillaume IX d'Aquitaine ; puis trouvères (langue d'oïl).",
            "Fin'amor : la dame supérieure et lointaine, le poète vassal, l'amour comme épreuve qui élève, mêlant souffrance et joie.",
            "XIVe et XVe siècles : formes fixes (Machaut, Deschamps) ; ballade (3 strophes, refrain, envoi) et rondeau (2 rimes, refrain repris du début).",
            "Christine de Pizan, l'une des premières femmes à vivre de sa plume (« Seulette suis »).",
            "Charles d'Orléans, prisonnier de 1415 à 1440, poète des rondeaux et des allégories.",
            "Villon (Le Testament, 1461) : fuite du temps, mort, pauvreté, repentir et humour.",
          ],
          example: {
            statement: "Un poème se présente ainsi : trois dizains de décasyllabes construits sur les mêmes rimes, chacun terminé par le même vers, suivis d'une strophe de cinq vers qui commence par « Prince ». Identifiez la forme, nommez chacun de ses éléments et dites quel effet peut produire le vers répété.",
            solution: [
              "Trois strophes sur les mêmes rimes terminées par un même vers, puis une demi-strophe finale : c'est la structure de la ballade, forme fixe des XIVe et XVe siècles.",
              "Les trois dizains sont les strophes de la ballade ; dans la grande ballade, elles comptent dix vers de dix syllabes.",
              "Le vers qui termine chaque strophe est le refrain.",
              "La strophe de cinq vers, moitié d'un dizain, est l'envoi ; son apostrophe « Prince » s'adresse au protecteur du poète ou au président d'un concours de poésie.",
              "Effet du refrain : il ramène trois ou quatre fois la même idée, qui s'enrichit de ce que chaque strophe a ajouté ; il donne au poème une allure de chant ou de prière, et laisse le dernier mot à cette idée.",
              "Réponse : il s'agit d'une ballade (trois strophes, un refrain, un envoi), forme pratiquée par Machaut, Christine de Pizan, Charles d'Orléans ou Villon, dont le refrain fonctionne comme une insistance de plus en plus chargée de sens.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici un texte d'entraînement, écrit pour l'exercice dans le style d'une chanson de troubadour : « Dame, je suis votre homme lige ; je vous sers sans rien demander, et la peine que vous me donnez m'est plus douce que la joie des autres. Je ne dirai jamais votre nom, car les médisants épient. Que vous me fassiez attendre un an ou dix, je resterai fidèle. » Relevez quatre caractéristiques de la fin'amor et justifiez chacune par une expression du texte.",
              hint: "Cherchez le vocabulaire féodal, le rapport entre souffrance et joie, le secret, et la place de l'attente.",
              solution: [
                "Le poète se présente comme le vassal de la dame : « je suis votre homme lige », « je vous sers » (un homme lige est un vassal lié à son seigneur par un hommage prioritaire).",
                "La souffrance est paradoxalement valorisée et mêlée de joie : « la peine que vous me donnez m'est plus douce que la joie des autres ».",
                "Le secret est exigé, à cause des médisants : « Je ne dirai jamais votre nom, car les médisants épient ».",
                "L'amour est une épreuve d'attente et de fidélité : « Que vous me fassiez attendre un an ou dix, je resterai fidèle ».",
                "Résultat : service vassalique, souffrance heureuse, secret face aux médisants et attente fidèle sont quatre motifs typiques de la fin'amor.",
              ],
            },
            {
              level: 2,
              statement: "Voici un rondeau écrit pour l'exercice, en octosyllabes : « Le printemps revient au verger, / La rose a quitté sa prison ; / Chaque oiseau reprend sa chanson, / Le ruisseau court, vif et léger. // Nul ne doit plus se lamenter : / Le soleil dore la maison. / Le printemps revient au verger, / La rose a quitté sa prison. // Allons danser près du pommier, / Le cœur s'ouvre comme un bourgeon, / Et l'hiver n'est plus de saison : / Pourquoi voudrait-on s'affliger ? / Le printemps revient au verger. » 1) Combien de rimes compte ce poème ? Donnez le schéma des rimes. 2) Repérez le refrain et ses places. 3) Quel effet le refrain produit-il ? À quel poème de Charles d'Orléans ce rondeau fait-il penser ?",
              hint: "Notez A pour les vers en -é et B pour les vers en -on, en majuscules pour les vers du refrain.",
              solution: [
                "1) Deux rimes seulement : le son é (verger, léger, lamenter, pommier, s'affliger) et le son on (prison, chanson, maison, bourgeon, saison). Schéma, en notant le refrain en majuscules : ABba abAB abbaA.",
                "2) Le refrain est formé des deux premiers vers, « Le printemps revient au verger, / La rose a quitté sa prison », repris aux vers 7 et 8 ; le premier vers revient seul à la fin (vers 13).",
                "3) Le refrain installe le thème du renouveau et le fait revenir comme le printemps lui-même revient : la forme imite le cycle des saisons. Sa dernière reprise, après la question « Pourquoi voudrait-on s'affliger ? », sonne comme une réponse joyeuse et définitive.",
                "Rapprochement : Charles d'Orléans célèbre lui aussi le retour du printemps dans le rondeau « Le temps a laissé son manteau », où la saison nouvelle se défait de l'hiver comme d'un vêtement.",
                "Résultat : rondeau sur deux rimes (ABba abAB abbaA), dont le refrain, repris au milieu et à la fin, fait entendre le retour cyclique du printemps.",
              ],
            },
            {
              level: 3,
              statement: "Type bac (paragraphe de commentaire). La ballade dite « des pendus » de François Villon se compose de trois dizains de décasyllabes et d'un envoi de cinq vers. Des pendus y prennent la parole et s'adressent à leurs « Frères humains » qui leur survivent ; ils décrivent leurs corps exposés sous le gibet, lavés par la pluie, noircis par le soleil, aux yeux creusés par les oiseaux ; ils demandent aux passants de ne pas se moquer d'eux, et chaque strophe se termine par une prière demandant à Dieu de les absoudre tous ; l'envoi s'adresse au « Prince Jésus ». Rédigez un paragraphe qui montre que ce poème mêle réalisme macabre et prière.",
              hint: "Construisez le paragraphe en trois temps : une phrase d'idée, deux analyses (le corps, puis la prière), une phrase de bilan.",
              solution: [
                "Phrase d'idée : « La ballade des pendus saisit d'abord par son réalisme macabre, qu'elle met au service d'une prière. »",
                "Première analyse : « Villon donne la parole aux morts, par une prosopopée saisissante : ce sont les pendus eux-mêmes qui décrivent leurs corps livrés aux éléments, la pluie, le soleil et les oiseaux qui leur creusent les yeux. Cette énumération de détails physiques, sans aucune atténuation, place le lecteur devant la réalité de la mort et de la décomposition. »",
                "Deuxième analyse : « Mais cette vision n'a pas pour but d'horrifier : l'apostrophe “Frères humains” crée une fraternité entre les morts et les vivants, qui partagent la même condition pécheresse. Le refrain, qui revient à la fin de chaque strophe pour demander à Dieu l'absolution de tous, transforme le poème en une prière répétée, et l'envoi, adressé au “Prince Jésus”, détourne la tradition de l'envoi au protecteur vers le Christ. »",
                "Phrase de bilan : « Ainsi, le spectacle du corps supplicié devient un appel à la pitié et au salut : le réalisme macabre sert une méditation chrétienne sur la mort. »",
                "Résultat : un paragraphe argumenté qui relie la forme (prosopopée, énumération, refrain, envoi) au sens (le macabre au service de la prière).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces repères de la poésie médiévale.",
            items: [
              "Guillaume IX d'Aquitaine, premier troubadour connu (vers 1100)",
              "Les trouvères reprennent la lyrique courtoise en langue d'oïl (fin du XIIe siècle)",
              "Rutebeuf compose ses poèmes de l'infortune (XIIIe siècle)",
              "Guillaume de Machaut pratique ballades et rondeaux (XIVe siècle)",
              "Christine de Pizan écrit ses Cent ballades (vers 1400)",
              "Charles d'Orléans, captif en Angleterre (1415-1440)",
              "François Villon compose Le Testament (1461)",
            ],
          },
          quiz: [
            {
              q: "Dans quelle langue écrivent les troubadours ?",
              options: ["En latin", "En langue d'oc", "En langue d'oïl", "En italien"],
              answer: 1,
              why: "Les troubadours, poètes du sud de la France au XIIe siècle, écrivent en langue d'oc ; les trouvères du nord, en langue d'oïl.",
            },
            {
              q: "Dans la fin'amor, comment le poète se présente-t-il ?",
              options: ["En vassal de sa dame", "En maître de la dame qu'il aime", "En clerc qui prêche la vertu", "En jongleur sans attache"],
              answer: 0,
              why: "Le poète courtois emprunte le vocabulaire féodal : il sert sa dame comme un vassal sert son seigneur.",
            },
            {
              q: "Qu'appelle-t-on l'envoi d'une ballade ?",
              options: ["Le premier vers, qui revient à la fin", "Le refrain répété après chaque strophe", "La demi-strophe finale", "Le titre donné par le copiste"],
              answer: 2,
              why: "L'envoi est la demi-strophe qui clôt la ballade, souvent adressée à un « Prince ».",
            },
            {
              q: "Quel poète, fait prisonnier à Azincourt, a composé de nombreux rondeaux ?",
              options: ["François Villon", "Rutebeuf", "Guillaume IX d'Aquitaine", "Charles d'Orléans"],
              answer: 3,
              why: "Charles d'Orléans, captif en Angleterre de 1415 à 1440, est le grand poète du rondeau.",
            },
            {
              q: "Dans le refrain de Villon sur « les neiges d'antan », que signifie « antan » ?",
              options: ["L'hiver prochain", "L'année passée", "La montagne", "L'éternité"],
              answer: 1,
              why: "« Antan », du latin ante annum, désigne l'année passée : le poète médite sur la disparition de ce qui fut.",
            },
          ],
          trap: "Lire la poésie courtoise comme une simple déclaration d'amour heureuse : la fin'amor repose au contraire sur la distance, l'attente et le service, et la souffrance y est valorisée comme une épreuve qui élève.",
          method: "Devant une forme fixe, dessinez d'abord son schéma (lettres des rimes, place du refrain, envoi), puis relisez le refrain à chacune de ses reprises en vous demandant ce que la strophe précédente a changé à son sens.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'renaissance-pleiade',
          title: "La Renaissance et la Pléiade : le sonnet et l'imitation des Anciens",
          minutes: 35,
          objectives: [
            "Situer la Renaissance poétique et le projet de la Pléiade dans l'histoire de la langue française.",
            "Identifier la forme du sonnet et ses deux schémas de tercets les plus fréquents.",
            "Expliquer la notion d'imitation des Anciens et des Italiens, et reconnaître le pétrarquisme.",
            "Analyser les grands thèmes de la poésie du XVIe siècle : l'amour, la fuite du temps, l'exil.",
          ],
          course: [
            {
              heading: "La Renaissance : redécouvrir l'Antiquité, illustrer le français",
              paragraphs: [
                "Au XVIe siècle, la Renaissance redécouvre les textes de l'Antiquité grecque et latine, que les humanistes éditent, traduisent et commentent. L'imprimerie, mise au point par Gutenberg vers 1450, diffuse ces textes largement. Les guerres d'Italie font connaître en France la culture italienne, et la monarchie favorise le français : l'ordonnance de Villers-Cotterêts (1539) impose son emploi dans les actes de justice et d'administration.",
                "Clément Marot (1496-1544), poète de la cour de François Ier, pratique encore les formes médiévales, mais il traduit les Psaumes et figure parmi les premiers à composer des sonnets en français, avec Mellin de Saint-Gelais. À Lyon, ville marchande ouverte sur l'Italie, Maurice Scève publie Délie (1544), long ensemble de dizains, et Louise Labé ses Euvres (1555), qui contiennent vingt-quatre sonnets amoureux d'une grande intensité.",
              ],
            },
            {
              heading: "La Pléiade et la Défense et illustration de la langue française",
              paragraphs: [
                "Au collège de Coqueret, à Paris, de jeunes gens étudient le grec et le latin auprès de l'humaniste Jean Dorat : parmi eux, Pierre de Ronsard (1524-1585), Joachim Du Bellay (1522-1560) et Jean-Antoine de Baïf. Avec d'autres, comme Jodelle, Belleau et Pontus de Tyard, ils forment un groupe que Ronsard nomme la Pléiade, d'après un groupe de sept poètes de l'Alexandrie antique et la constellation du même nom.",
                "Leur manifeste, la Défense et illustration de la langue française, est publié par Du Bellay en 1549. Il défend le français contre ceux qui jugent que seul le latin convient aux grandes œuvres, et propose de l'« illustrer », c'est-à-dire de le rendre illustre : l'enrichir par des mots nouveaux, des mots anciens remis en usage, des termes de métier ou de dialecte. Il demande d'abandonner les formes médiévales (ballades, rondeaux, virelais) au profit des genres antiques et italiens : l'ode, l'élégie, l'épigramme, l'épopée et le sonnet.",
                "Le moyen de cette rénovation est l'imitation. Imiter, ce n'est pas traduire mot à mot : Du Bellay compare le travail du poète à celui des Romains qui, selon lui, ont imité les Grecs en les dévorant et en les digérant, pour en faire leur propre substance. On parle d'innutrition : le poète se nourrit de ses modèles (Homère, Pindare, Horace, Virgile, Ovide, Pétrarque) pour créer une œuvre nouvelle en français. Il se conçoit lui-même comme inspiré, animé d'une « fureur » divine, et capable de donner l'immortalité à ceux qu'il chante.",
              ],
              box: { label: "À retenir", text: "La Pléiade (Ronsard, Du Bellay, Baïf...) veut faire du français une langue capable de rivaliser avec le latin et le grec. Manifeste : Défense et illustration de la langue française (Du Bellay, 1549). Moyen : l'imitation créatrice des Anciens et des Italiens." },
            },
            {
              heading: "Le sonnet, une forme venue d'Italie",
              paragraphs: [
                "Le sonnet est illustré au XIVe siècle par le poète italien Pétrarque (1304-1374), dont le Canzoniere célèbre une femme aimée, Laure. Introduit en France dans les années 1530 par Marot et Saint-Gelais, il triomphe avec la Pléiade : L'Olive de Du Bellay (1549) est le premier recueil français de sonnets amoureux, suivi des Amours de Ronsard (1552). Le sonnet devient alors la forme reine de la poésie amoureuse, puis de la méditation morale et religieuse.",
                "Le sonnet régulier compte quatorze vers, le plus souvent des décasyllabes ou des alexandrins, répartis en deux quatrains et deux tercets. Les quatrains sont construits sur deux rimes embrassées identiques (ABBA ABBA). Les tercets font entendre trois rimes nouvelles, selon deux schémas fréquents : CCD EED, souvent appelé sonnet marotique, ou CCD EDE, que pratique Peletier du Mans. Le passage des quatrains aux tercets marque souvent un tournant (la volta), et le dernier vers, la chute, porte volontiers une pointe.",
                "Le pétrarquisme désigne l'ensemble des procédés hérités de Pétrarque : la dame idéalisée, décrite par des images précieuses (cheveux d'or, yeux comme des astres, teint de lis et de rose) ; l'amant qui souffre et se consume ; les antithèses et les oxymores qui disent les contradictions de l'amour (brûler et geler, vivre et mourir). Louise Labé ouvre ainsi un de ses sonnets par « Je vis, je meurs », avant d'enchaîner les contraires.",
              ],
              box: { label: "Repère", text: "Sonnet : 14 vers, deux quatrains (ABBA ABBA) et deux tercets (CCD EED ou CCD EDE). La volta marque le tournant entre quatrains et tercets ; la chute, dernier vers, porte souvent une pointe." },
            },
            {
              heading: "Trois grands thèmes : l'amour, le temps, l'exil",
              paragraphs: [
                "Ronsard chante successivement Cassandre (Les Amours, 1552), Marie (Continuation des Amours, 1555) et Hélène (Sonnets pour Hélène, 1578). Il reprend au poète latin Horace le thème du carpe diem (« cueille le jour ») : puisque la beauté est fragile et la vie brève, il faut profiter de la jeunesse. Dans l'ode « Mignonne, allons voir si la rose », la rose épanouie le matin et fanée le soir devient l'image de la beauté de la jeune femme, que la vieillesse ternira.",
                "Dans le sonnet « Quand vous serez bien vieille » (Sonnets pour Hélène), Ronsard imagine Hélène âgée, le soir, près du feu, se souvenant que le poète l'a célébrée au temps de sa beauté, et regrettant de l'avoir dédaigné. Le poème mêle l'invitation à aimer sans attendre et l'affirmation du pouvoir du poète : c'est grâce à ses vers que le nom d'Hélène survivra.",
                "Du Bellay séjourne à Rome de 1553 à 1557 au service de son cousin, le cardinal Jean du Bellay. Il en rapporte Les Antiquités de Rome (1558), méditation sur les ruines de la ville, et Les Regrets (1558), recueil de sonnets en alexandrins où se mêlent la nostalgie de l'exilé et la satire de la cour pontificale. Dans le sonnet « Heureux qui, comme Ulysse, a fait un beau voyage », il envie les héros antiques revenus chez eux et préfère son « petit Liré », village de l'Anjou, à toute la grandeur de Rome.",
              ],
            },
          ],
          keyPoints: [
            "Renaissance : redécouverte de l'Antiquité, imprimerie, ordonnance de Villers-Cotterêts (1539) en faveur du français.",
            "Pléiade : Ronsard, Du Bellay, Baïf ; manifeste de Du Bellay en 1549, la Défense et illustration de la langue française.",
            "Imiter n'est pas traduire : le poète digère ses modèles antiques et italiens pour créer en français (innutrition).",
            "Sonnet : 14 vers, ABBA ABBA puis CCD EED ou CCD EDE ; volta et chute.",
            "Pétrarquisme : dame idéalisée, amant qui souffre, antithèses et oxymores (Louise Labé, « Je vis, je meurs »).",
            "Thèmes : carpe diem et pouvoir d'immortaliser (Ronsard), exil et nostalgie (Du Bellay, Les Regrets, 1558).",
          ],
          example: {
            statement: "Le sonnet 31 des Regrets de Du Bellay (« Heureux qui, comme Ulysse, a fait un beau voyage ») se termine par les mots suivants, dans l'ordre des vers : voyage, toison, raison, âge ; village, saison, maison, davantage ; aïeux, audacieux, fine ; latin, Palatin, angevine. Établissez le schéma des rimes, identifiez la forme et expliquez comment la structure sert le sens du poème.",
            solution: [
              "Premier quatrain : voyage (A), toison (B), raison (B), âge (A), soit ABBA. Second quatrain : village (A), saison (B), maison (B), davantage (A), soit ABBA sur les mêmes rimes.",
              "Premier tercet : aïeux (C), audacieux (C), fine (D). Second tercet : latin (E), Palatin (E), angevine (D). Les tercets suivent le schéma CCD EED.",
              "Forme : quatorze vers, deux quatrains sur deux rimes embrassées et deux tercets CCD EED : c'est un sonnet régulier, de type marotique, en alexandrins comme tout le recueil.",
              "Structure et sens, les quatrains : le premier évoque les héros antiques heureux d'être rentrés chez eux (Ulysse, et celui qui a conquis la Toison d'or, Jason) ; le second, ouvert par la question « Quand reverrai-je... », exprime le désir du poète de revoir son village et sa maison.",
              "Les tercets : ils opèrent la volta. Le poète ne rêve plus, il compare et tranche, par une série de constructions « Plus... que... » qui opposent l'Anjou à Rome : le « petit Liré » au mont Palatin, la Loire au Tibre, la « douceur angevine » à l'air marin.",
              "Réponse : un sonnet régulier ABBA ABBA CCD EED, dont la structure accompagne le mouvement du poème, de l'évocation des héros antiques à la nostalgie personnelle, puis à l'éloge de la petite patrie, la rime « fine / angevine » donnant le dernier mot à la douceur de l'Anjou.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un sonnet (écrit pour l'exercice) se termine par les mots suivants, dans l'ordre des vers : flamme, soupirs, désirs, âme ; femme, plaisirs, loisirs, blâme ; pleure, demeure, cœur ; larmes, douleur, armes. Donnez le schéma des rimes et précisez lequel des deux schémas de tercets il suit.",
              hint: "Attribuez une lettre à chaque nouveau son final, en reprenant la même lettre quand un son revient.",
              solution: [
                "Premier quatrain : flamme (A), soupirs (B), désirs (B), âme (A), soit ABBA.",
                "Second quatrain : femme (A), plaisirs (B), loisirs (B), blâme (A), soit ABBA sur les mêmes rimes, comme l'exige le sonnet régulier.",
                "Premier tercet : pleure (C), demeure (C), cœur (D), soit CCD.",
                "Second tercet : larmes (E), douleur (D), armes (E), soit EDE.",
                "Résultat : ABBA ABBA CCD EDE, sonnet régulier dont les tercets suivent le schéma pratiqué par Peletier du Mans, et non le schéma marotique CCD EED.",
              ],
            },
            {
              level: 2,
              statement: "Voici un quatrain écrit pour l'exercice, à la manière des poètes pétrarquistes : « Je brûle dans le froid, je gèle dans la flamme, / Je ris en sanglotant, je meurs et je respire ; / Votre douce rigueur est le feu de mon âme, / Et ce mal qui me tue est le bien que j'admire. » 1) Relevez et nommez les figures d'opposition. 2) Montrez en quoi ce quatrain est pétrarquiste, en le rapprochant d'un poème du XVIe siècle étudié dans la leçon.",
              hint: "Distinguez l'antithèse, qui oppose deux termes dans la phrase, de l'oxymore, qui réunit deux termes contradictoires dans un même groupe de mots.",
              solution: [
                "1) Antithèses : « brûle » et « froid », « gèle » et « flamme » (vers 1) ; « ris » et « sanglotant », « meurs » et « respire » (vers 2) ; « mal » et « bien » (vers 4). Le vers 1 forme même un chiasme : brûler (chaud) dans le froid, geler (froid) dans la flamme.",
                "Oxymore : « douce rigueur » (vers 3) réunit dans un même groupe nominal deux termes contradictoires.",
                "Paradoxe final : « ce mal qui me tue est le bien que j'admire » affirme que la souffrance amoureuse est désirée.",
                "2) Ce quatrain reprend les codes du pétrarquisme : l'amant souffre et se consume, la dame est à la fois douce et cruelle, et les contradictions de l'amour s'expriment par une accumulation d'antithèses, à la manière de Louise Labé dans son sonnet qui commence par « Je vis, je meurs », lui-même héritier de Pétrarque.",
                "Résultat : antithèses, chiasme, oxymore et paradoxe traduisent le déchirement de l'amant, motif central de la poésie pétrarquiste.",
              ],
            },
            {
              level: 3,
              statement: "Type bac (paragraphe de commentaire). L'ode de Ronsard « Mignonne, allons voir si la rose » se compose de trois sizains d'octosyllabes. Dans la première strophe, le poète invite la jeune femme à aller voir si la rose éclose le matin a gardé, le soir, sa beauté pareille à la sienne ; dans la deuxième, il constate avec indignation que la rose a perdu ses beautés en si peu de temps et accuse la Nature d'être cruelle ; dans la troisième, il conseille à la jeune femme de profiter de sa jeunesse, en répétant l'impératif « cueillez », car la vieillesse ternira sa beauté comme elle a terni cette fleur. Rédigez un paragraphe qui montre comment Ronsard fait de la rose le support d'une leçon de carpe diem.",
              hint: "Suivez le mouvement des trois strophes : la comparaison, le constat, la leçon ; puis nommez la tradition antique reprise.",
              solution: [
                "Phrase d'idée : « Dans cette ode, la rose n'est pas seulement une fleur : elle devient l'image de la beauté féminine et le support d'une leçon sur le temps. »",
                "Analyse de la comparaison : « Dès la première strophe, le poète rapproche la fleur et la jeune femme, qui partagent la même fraîcheur : la rose est le miroir de la “Mignonne”, si bien que tout ce qui arrive à la fleur annonce ce qui arrivera à la femme. »",
                "Analyse du constat : « La deuxième strophe dramatise la découverte : en une seule journée, du matin au soir, la rose a perdu sa beauté. Le poète s'indigne et accuse la Nature, ce qui donne au constat la force d'une plainte : la brièveté de la vie de la fleur rend sensible la fuite du temps. »",
                "Analyse de la leçon : « La dernière strophe tire la morale, introduite par la répétition de l'impératif “cueillez” : il faut profiter de la jeunesse avant que la vieillesse ne vienne “ternir” la beauté. Ronsard reprend ainsi le carpe diem du poète latin Horace, conformément au principe d'imitation des Anciens défendu par la Pléiade. »",
                "Phrase de bilan : « La rose, de la comparaison au constat puis à la leçon, fait passer le poème du badinage galant à une méditation sur le temps qui invite à vivre pleinement. »",
                "Résultat : un paragraphe qui suit la progression des trois strophes et rattache le poème à la tradition antique du carpe diem.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la Renaissance, la Pléiade et le sonnet.",
            statements: [
              { text: "Le sonnet a été inventé en France par Ronsard.", true: false, why: "Le sonnet vient d'Italie, où Pétrarque l'a illustré ; Marot et Saint-Gelais l'introduisent en France dans les années 1530." },
              { text: "Du Bellay publie la Défense et illustration de la langue française en 1549.", true: true, why: "C'est le manifeste de la Pléiade, paru la même année que L'Olive." },
              { text: "La Pléiade invite à abandonner les ballades et les rondeaux.", true: true, why: "Elle juge ces formes médiévales dépassées et leur préfère l'ode, l'élégie, l'épigramme et le sonnet." },
              { text: "Pour la Pléiade, imiter les Anciens consiste à les traduire mot à mot.", true: false, why: "L'imitation est créatrice : le poète digère ses modèles pour écrire une œuvre nouvelle en français." },
              { text: "Un sonnet régulier compte deux quatrains et deux tercets.", true: true, why: "Soit quatorze vers, avec des quatrains ABBA ABBA." },
              { text: "Dans Les Regrets, Du Bellay célèbre avec enthousiasme son séjour à Rome.", true: false, why: "Le recueil exprime surtout la nostalgie de l'exilé et la satire de la cour pontificale." },
              { text: "Le thème du carpe diem, repris par Ronsard, vient du poète latin Horace.", true: true, why: "L'expression carpe diem (« cueille le jour ») figure dans une ode d'Horace." },
            ],
          },
          quiz: [
            {
              q: "Qui est l'auteur de la Défense et illustration de la langue française ?",
              options: ["Ronsard", "Marot", "Du Bellay", "Pétrarque"],
              answer: 2,
              why: "Joachim Du Bellay publie ce manifeste de la Pléiade en 1549.",
            },
            {
              q: "Quel est le schéma des quatrains d'un sonnet régulier ?",
              options: ["ABAB CDCD", "ABBA ABBA", "AABB CCDD", "ABBA CDDC"],
              answer: 1,
              why: "Les deux quatrains reprennent les deux mêmes rimes, embrassées.",
            },
            {
              q: "Pour quelle femme Pétrarque a-t-il écrit son Canzoniere ?",
              options: ["Laure", "Cassandre", "Hélène", "Délie"],
              answer: 0,
              why: "Pétrarque chante Laure ; Cassandre et Hélène sont chantées par Ronsard, Délie par Maurice Scève.",
            },
            {
              q: "Dans le titre de Du Bellay, que signifie « illustrer » la langue ?",
              options: ["L'orner de gravures", "La simplifier pour le peuple", "La remplacer par le latin savant", "La rendre illustre"],
              answer: 3,
              why: "Illustrer, c'est rendre illustre : enrichir le français pour qu'il égale les langues anciennes.",
            },
            {
              q: "Quel thème domine l'ode « Mignonne, allons voir si la rose » ?",
              options: ["L'exil loin de la patrie natale", "Le carpe diem", "Les guerres de Religion", "La satire de la cour romaine"],
              answer: 1,
              why: "La rose fanée en un jour invite la jeune femme à profiter de sa jeunesse : c'est le carpe diem hérité d'Horace.",
            },
          ],
          trap: "Croire que l'imitation des Anciens est un plagiat ou une traduction : pour la Pléiade, imiter, c'est s'approprier un modèle pour créer une œuvre nouvelle en français, ce que Du Bellay compare à une digestion.",
          method: "Devant un sonnet, repérez la volta, le moment où le poème bascule (souvent au premier tercet), puis relisez le dernier vers comme une pointe : comparez ce qu'annonçaient les quatrains et ce que conclut la chute.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'poesie-classique',
          title: 'Du baroque au XVIIIe siècle : La Fontaine et la poésie classique',
          minutes: 35,
          objectives: [
            "Distinguer l'esthétique baroque et l'esthétique classique en poésie.",
            "Identifier les règles et les valeurs de la poésie classique : clarté, mesure, plaire et instruire.",
            "Analyser le fonctionnement de l'apologue chez La Fontaine : le récit, la morale et leur relation.",
            "Situer la place de la poésie au XVIIIe siècle, de Voltaire à Chénier.",
          ],
          course: [
            {
              heading: "L'âge baroque (vers 1580-1650) : un monde instable",
              paragraphs: [
                "La fin du XVIe siècle est marquée par les guerres de Religion (1562-1598), qui déchirent le royaume. La poésie de cette période exprime un monde instable : tout change, rien ne dure, les apparences trompent. Les poètes aiment les images du mouvement et de l'inconstance (l'eau qui coule, le nuage, la bulle, la flamme, le miroir), la métamorphose, l'illusion et la mort. Leur style multiplie les antithèses, les accumulations, les hyperboles et les effets de surprise.",
                "Agrippa d'Aubigné, protestant engagé, compose Les Tragiques (1616), vaste poème épique et satirique sur les violences des guerres de Religion. Jean de Sponde, dans ses Sonnets de la mort (1588), médite sur la fragilité de la vie avec une ferveur inquiète. Au début du XVIIe siècle, Théophile de Viau et Saint-Amant écrivent une poésie plus libre, sensible à la nature et à la rêverie. Le mot « baroque », qui viendrait d'un terme portugais désignant une perle irrégulière, n'a été appliqué à cette littérature que bien plus tard, par la critique du XXe siècle.",
              ],
              box: { label: "À retenir", text: "Baroque : esthétique du mouvement, de l'inconstance, de l'illusion et de la mort (vers 1580-1650). Images de l'eau, de la bulle, du miroir ; antithèses, hyperboles, accumulations. Poètes : d'Aubigné (Les Tragiques, 1616), Sponde, Théophile de Viau, Saint-Amant." },
            },
            {
              heading: "Le classicisme : ordre, clarté, mesure",
              paragraphs: [
                "À l'opposé, le classicisme recherche l'ordre et la clarté. Malherbe (1555-1628), poète officiel d'Henri IV puis de Louis XIII, veut une langue pure et compréhensible de tous, impose des règles strictes (césure marquée, rimes exactes, interdiction de l'hiatus) et critique les libertés de Ronsard. Boileau salue cette réforme dans son Art poétique (1674), qui commence l'éloge par la formule « Enfin Malherbe vint » et fixe les règles de chaque genre.",
                "L'esthétique classique repose sur quelques principes : la raison guide l'écriture ; il faut respecter la vraisemblance et la bienséance (ne pas choquer le goût et la morale du public) ; les Anciens sont les modèles à imiter ; l'œuvre doit « plaire et instruire », selon le double but que le poète latin Horace assignait à la poésie. La création de l'Académie française par Richelieu en 1635 participe de ce mouvement de mise en ordre de la langue.",
                "À la fin du siècle, la querelle des Anciens et des Modernes éclate en 1687, lorsque Charles Perrault lit à l'Académie son poème Le Siècle de Louis le Grand, qui place les auteurs modernes au-dessus des Anciens. Boileau et La Fontaine prennent le parti des Anciens.",
              ],
              box: { label: "Repère", text: "Classicisme : raison, clarté, mesure, vraisemblance, bienséance, imitation des Anciens, « plaire et instruire ». Malherbe réforme la langue poétique ; Boileau codifie les règles dans L'Art poétique (1674)." },
            },
            {
              heading: "La Fontaine et l'art de l'apologue",
              paragraphs: [
                "Jean de La Fontaine (1621-1695) publie ses Fables en trois recueils, soit douze livres : le premier en 1668 (livres I à VI), dédié au Dauphin, fils de Louis XIV ; le deuxième en 1678-1679 (livres VII à XI) ; le dernier livre en 1694. Il reprend des sujets connus, empruntés au Grec Ésope (VIe siècle avant J.-C.) et au Latin Phèdre (Ier siècle), puis, dans le deuxième recueil, à la tradition indienne transmise sous le nom de Pilpay. Son originalité tient à l'art du récit, non à l'invention des sujets.",
                "La fable est un apologue : un court récit qui illustre une leçon morale. Dans la préface du premier recueil, La Fontaine distingue le corps de la fable, le récit, et son âme, la morale. La morale peut être placée au début (« Le Loup et l'Agneau » s'ouvre sur l'idée que la raison du plus fort l'emporte toujours), à la fin (« Le Corbeau et le Renard »), ou rester implicite, laissée au jugement du lecteur (« La Cigale et la Fourmi »).",
                "Le récit est vif et théâtral : dialogues, vers mêlés de longueurs variées, ellipses, interventions du narrateur. Les animaux représentent des types humains (le lion, le roi ; le renard, le flatteur rusé ; le loup, le puissant sans scrupule), ce qui permet une satire prudente de la cour, de la justice et des rapports de force. Dans « Les Animaux malades de la peste », la morale finale dénonce une justice qui juge selon que l'on est puissant ou misérable.",
              ],
              box: { label: "Définition", text: "Apologue : court récit, souvent allégorique, qui illustre une leçon morale (fable, conte philosophique, parabole). Chez La Fontaine, le récit est le « corps » de la fable et la morale son « âme » ; la morale peut être explicite (au début ou à la fin) ou implicite." },
            },
            {
              heading: "Le XVIIIe siècle : une poésie en retrait ?",
              paragraphs: [
                "Le siècle des Lumières privilégie la prose pour débattre des idées : le conte philosophique, l'essai, l'article d'encyclopédie. La poésie reste pourtant pratiquée et prestigieuse, mais elle est souvent descriptive, morale ou philosophique. Voltaire écrit ainsi le Poème sur le désastre de Lisbonne (1756), après le tremblement de terre de 1755, pour contester l'idée que tout est bien dans le monde voulu par la Providence. La fable continue d'être cultivée, par exemple par Florian (Fables, 1792).",
                "André Chénier (1762-1794) renouvelle la poésie en s'inspirant de la Grèce antique. Emprisonné sous la Terreur, il est guillotiné en 1794 ; la plupart de ses poèmes, dont « La Jeune Captive », ne sont publiés qu'en 1819, et les romantiques voient en lui un précurseur. Il résume son idéal en invitant à exprimer des pensées nouvelles dans des vers à l'antique.",
              ],
            },
          ],
          keyPoints: [
            "Baroque (vers 1580-1650) : inconstance, illusion, mort ; antithèses et hyperboles ; d'Aubigné, Sponde.",
            "Classicisme : raison, clarté, mesure, bienséance, imitation des Anciens, plaire et instruire ; Malherbe, Boileau (L'Art poétique, 1674).",
            "La Fontaine : Fables en douze livres (1668, 1678-1679, 1694), sujets repris d'Ésope et de Phèdre.",
            "Apologue : le récit (corps) et la morale (âme) ; morale au début, à la fin ou implicite.",
            "Les animaux figurent des types humains : satire de la cour, de la justice et de la loi du plus fort.",
            "XVIIIe siècle : poésie philosophique (Voltaire, 1756) ; Chénier, guillotiné en 1794, publié en 1819.",
          ],
          example: {
            statement: "« Le Loup et l'Agneau » (Fables, livre I, 10) s'ouvre sur une morale affirmant que la raison du plus fort est toujours la meilleure. Suit le récit : un agneau boit dans un ruisseau ; un loup affamé l'accuse de troubler son eau, puis d'avoir médit de lui l'an passé, puis accuse son frère et les siens ; l'agneau réfute chaque accusation avec politesse, en l'appelant « Sire » et « Votre Majesté », tandis que le loup le tutoie ; le loup finit par l'emporter dans les bois et le manger sans autre forme de procès. Montrez comment le récit éclaire le sens de la morale.",
            solution: [
              "Place de la morale : elle est donnée avant le récit, qui devient une démonstration ; le lecteur sait dès le début comment l'histoire finira et peut observer comment le fort l'emporte.",
              "Le sens de « meilleure » : la morale ne dit pas que la raison du plus fort est juste, mais qu'elle l'emporte en fait. Le mot est ironique : c'est un constat amer, non une approbation.",
              "Le dialogue comme procès truqué : le loup multiplie les accusations, que l'agneau réfute une à une avec logique. Chaque réfutation réussie rend plus évidente la mauvaise foi du loup, qui change de grief au lieu de reconnaître son tort.",
              "Les marques du rapport de force : l'agneau s'adresse au loup comme à un roi (« Sire », « Votre Majesté »), le loup le tutoie ; la parole polie et juste du faible ne pèse rien face au pouvoir.",
              "Le dénouement : le loup emporte l'agneau « sans autre forme de procès », expression juridique qui souligne que tout le dialogue n'était qu'une parodie de justice.",
              "Réponse : le récit illustre la morale tout en en montrant le scandale ; la fable devient une critique de la force qui se donne l'apparence du droit, ce qui peut viser les puissants de toute époque.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chacun de ces traits dans l'esthétique baroque ou dans l'esthétique classique : a) le goût de la métamorphose et de l'illusion ; b) la règle de bienséance ; c) les images de l'eau qui coule et de la bulle ; d) la recherche de la clarté ; e) l'accumulation d'antithèses et d'hyperboles ; f) la formule « plaire et instruire » ; g) l'obsession de la mort et de l'inconstance ; h) l'interdiction de l'hiatus.",
              hint: "Le baroque exprime un monde instable et en mouvement ; le classicisme recherche l'ordre, la raison et la mesure.",
              solution: [
                "Baroque : a) la métamorphose et l'illusion, car le monde baroque est celui des apparences changeantes.",
                "Baroque : c) l'eau et la bulle, images de ce qui passe et se défait ; e) les antithèses et les hyperboles, style de l'excès et du contraste ; g) la mort et l'inconstance, thèmes majeurs de Sponde ou de d'Aubigné.",
                "Classique : b) la bienséance, qui interdit de choquer le goût et la morale du public ; d) la clarté, exigée par Malherbe.",
                "Classique : f) « plaire et instruire », double but hérité d'Horace ; h) l'interdiction de l'hiatus, règle imposée par Malherbe et rappelée par Boileau.",
                "Résultat : baroque a, c, e, g ; classique b, d, f, h.",
              ],
            },
            {
              level: 2,
              statement: "Pour chacune de ces trois fables du livre I, dites où se trouve la morale (au début, à la fin, implicite) et quel effet produit ce choix : a) « Le Loup et l'Agneau », qui commence par l'idée que la raison du plus fort est toujours la meilleure ; b) « Le Corbeau et le Renard », où le renard, après avoir obtenu le fromage par la flatterie, explique au corbeau que tout flatteur vit aux dépens de celui qui l'écoute ; c) « La Cigale et la Fourmi », qui se termine sur la réplique moqueuse de la fourmi invitant la cigale, qui a chanté tout l'été, à danser maintenant.",
              hint: "Demandez-vous qui énonce la leçon, à quel moment, et ce que le lecteur doit faire lui-même.",
              solution: [
                "a) Morale explicite au début, énoncée par le narrateur : le récit devient une démonstration. L'effet est ironique, car le lecteur voit se réaliser un principe injuste qu'il connaît d'avance.",
                "b) Morale explicite à la fin, prononcée par un personnage, le renard, qui tire profit de la leçon qu'il donne : la morale est vivante et comique, et la flatterie est dénoncée par le flatteur lui-même.",
                "c) Morale implicite : la fable s'achève sur la réplique de la fourmi, sans commentaire du narrateur. Le lecteur doit juger seul : faut-il blâmer l'imprévoyance de la cigale, ou la dureté de la fourmi qui refuse de partager ?",
                "Bilan : la place de la morale n'est pas un détail ; elle oriente la lecture, de la démonstration (a) à la comédie (b) et à la réflexion laissée ouverte (c).",
                "Résultat : a) au début, b) à la fin, c) implicite, avec trois effets différents qui montrent la variété de l'art de La Fontaine.",
              ],
            },
            {
              level: 3,
              statement: "Type bac (paragraphe de commentaire). Dans « Les Animaux malades de la peste » (Fables, livre VII, 1), la peste frappe les animaux. Le Lion réunit son conseil et propose que le plus coupable se sacrifie ; il avoue lui-même avoir dévoré des moutons, et même le berger. Le Renard le flatte et l'excuse ; les puissants (le tigre, l'ours) sont tous excusés à leur tour. L'Âne avoue enfin avoir brouté, poussé par la faim, un peu d'herbe dans le pré de moines ; tous crient contre lui, un loup « quelque peu clerc » démontre qu'il faut le sacrifier, et il est condamné. La morale conclut que, selon que l'on sera puissant ou misérable, les jugements de cour rendront blanc ou noir. Rédigez un paragraphe qui montre que cette fable fait la satire de la justice.",
              hint: "Opposez la confession du Lion et celle de l'Âne, puis analysez le rôle du Renard et du Loup, avant de relier le tout à la morale.",
              solution: [
                "Phrase d'idée : « Sous l'apparence d'un conseil des animaux, La Fontaine fait le procès d'une justice qui dépend du rang des accusés. »",
                "Première analyse : « La disproportion entre les fautes est flagrante : le Lion avoue des crimes graves, dévorer des moutons et même le berger, tandis que l'Âne n'a mangé qu'un peu d'herbe, poussé par la faim. Pourtant, le premier est absous et le second condamné : le récit renverse l'ordre attendu de la culpabilité. »",
                "Deuxième analyse : « Les auxiliaires du pouvoir rendent cette injustice possible. Le Renard, figure du courtisan, transforme les crimes du roi en mérites par la flatterie ; le Loup, “quelque peu clerc”, met son savoir au service des puissants, et son discours donne à une condamnation arbitraire l'apparence d'une démonstration. »",
                "Troisième analyse : « La morale finale, avec l'antithèse “puissant ou misérable” et l'opposition des couleurs “blanc ou noir”, généralise la leçon : c'est la cour entière, et la justice de l'Ancien Régime, qui sont visées. »",
                "Phrase de bilan : « Ainsi, la fable animalière permet à La Fontaine une satire prudente mais cinglante d'une justice soumise au pouvoir. »",
                "Résultat : un paragraphe qui relie le récit (deux confessions opposées, le Renard, le Loup) à la morale explicite, pour montrer la dénonciation d'une justice à deux vitesses.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque poète à son œuvre.",
            pairs: [
              { left: "Agrippa d'Aubigné", right: "Les Tragiques (1616)" },
              { left: "Jean de Sponde", right: "Sonnets de la mort (1588)" },
              { left: "Boileau", right: "L'Art poétique (1674)" },
              { left: "La Fontaine", right: "Fables (1668-1694)" },
              { left: "Voltaire", right: "Poème sur le désastre de Lisbonne (1756)" },
              { left: "André Chénier", right: "« La Jeune Captive », publiée en 1819" },
            ],
          },
          quiz: [
            {
              q: "Quel thème caractérise la poésie baroque ?",
              options: ["L'ordre et la mesure", "L'inconstance", "L'éloge de la raison", "La clarté du langage"],
              answer: 1,
              why: "Le baroque exprime un monde instable, fait de changement, d'illusion et de mort.",
            },
            {
              q: "En quelle année paraît le premier recueil des Fables de La Fontaine ?",
              options: ["1668", "1549", "1674", "1756"],
              answer: 0,
              why: "Le premier recueil (livres I à VI), dédié au Dauphin, paraît en 1668.",
            },
            {
              q: "La Fontaine distingue le corps et l'âme de la fable. Qu'est-ce que l'âme ?",
              options: ["Le récit", "Le titre", "La morale", "Le dialogue"],
              answer: 2,
              why: "Le corps est le récit, l'âme est la leçon morale qu'il illustre.",
            },
            {
              q: "Que signifie la formule classique « plaire et instruire » ?",
              options: ["Divertir sans rien enseigner", "Enseigner par le plaisir", "Plaire au roi pour être pensionné", "Imiter les Modernes contre les Anciens"],
              answer: 1,
              why: "Héritée d'Horace, elle assigne à l'œuvre un double but : donner du plaisir et transmettre une leçon.",
            },
            {
              q: "Quel poète, guillotiné en 1794, n'a été publié pour l'essentiel qu'en 1819 ?",
              options: ["Voltaire", "Florian", "Jean-Baptiste Rousseau", "André Chénier"],
              answer: 3,
              why: "André Chénier, exécuté sous la Terreur, est révélé par l'édition de 1819 et salué par les romantiques.",
            },
          ],
          trap: "Réduire la fable à sa morale ou la croire écrite pour les enfants : la morale est souvent ironique ou ambiguë (la « raison du plus fort » est un constat amer, non une approbation), et c'est le récit qui lui donne sa portée critique.",
          method: "Pour analyser une fable, repérez d'abord la place de la morale (au début, à la fin ou implicite), puis demandez-vous si le récit la confirme simplement ou s'il en montre l'injustice : la réponse fournit souvent la problématique.",
        },
      ],
    },
    /* ==================================================================== */
    /* LIRE ET INTERPRÉTER UN POÈME                                         */
    /* ==================================================================== */
    {
      id: 'poesie-lire',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'images-poetiques',
          title: 'Les images poétiques : comparaison, métaphore, allégorie',
          minutes: 30,
          objectives: [
            "Identifier une comparaison et nommer ses éléments : comparé, comparant, outil de comparaison, point commun.",
            "Distinguer la métaphore (in praesentia, in absentia), la métaphore filée et la personnification.",
            "Reconnaître une allégorie et la distinguer d'un symbole.",
            "Interpréter l'effet d'une image en analysant les connotations du comparant.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une image ?",
              paragraphs: [
                "Une image poétique rapproche deux réalités qui appartiennent à des domaines différents, parce qu'elles ont un point commun. Ce dont on parle s'appelle le comparé ; ce à quoi on le rapproche s'appelle le comparant. Dans « la vie est une bulle », le comparé est la vie, le comparant la bulle, et le point commun la fragilité. Ces figures, dites figures d'analogie, sont au cœur de la poésie : elles rendent concret ce qui est abstrait, elles surprennent, et elles font voir le monde autrement.",
                "Une image ne vaut pas par elle-même mais par ce qu'elle apporte. Le comparant transporte avec lui des connotations, c'est-à-dire des valeurs et des impressions associées : comparer une femme à une rose, c'est lui prêter la beauté, la fraîcheur, mais aussi la fragilité de la fleur, comme le fait Ronsard. Analyser une image, c'est donc toujours se demander ce que le comparant ajoute au comparé.",
              ],
            },
            {
              heading: "La comparaison",
              paragraphs: [
                "La comparaison rapproche le comparé et le comparant à l'aide d'un outil de comparaison : comme, tel, ainsi que, de même que, pareil à, semblable à, on dirait, sembler, ressembler à. Dans « La lune, comme une lampe d'argent, veille sur le village », le comparé est la lune, le comparant une lampe d'argent, l'outil « comme », et le point commun la lumière douce et protectrice. Le point commun n'est pas toujours exprimé : c'est alors au lecteur de le trouver.",
                "Toute phrase contenant « comme » n'est pas une comparaison. « Comme il pleuvait, nous sommes restés » exprime une cause ; « il travaille comme jardinier » signifie « en tant que ». De même, « il est plus grand que son frère » est un simple comparatif : il compare deux êtres du même domaine, sans créer d'image. La comparaison poétique suppose un rapprochement entre deux domaines différents.",
              ],
              box: { label: "Définition", text: "Comparaison : figure qui rapproche un comparé et un comparant appartenant à des domaines différents, au moyen d'un outil de comparaison (comme, tel, pareil à, sembler...). Le point commun peut être exprimé ou laissé au lecteur." },
            },
            {
              heading: "La métaphore, la métaphore filée et la personnification",
              paragraphs: [
                "La métaphore rapproche le comparé et le comparant sans outil de comparaison, ce qui rend l'image plus forte et plus immédiate. Elle est dite in praesentia quand le comparé et le comparant sont tous deux présents (« Cette femme est une rose ») et in absentia quand seul le comparant est exprimé (« les perles de sa bouche » pour désigner des dents). La métaphore in absentia demande au lecteur de reconstituer le comparé.",
                "La métaphore filée prolonge une même image sur plusieurs mots, plusieurs phrases ou plusieurs vers, en puisant dans un même champ lexical. Les poètes pétrarquistes filent ainsi la métaphore de l'amour comme feu (brûler, flamme, consumer, cendres) ou comme navigation dans la tempête (navire, écueils, vagues, port). Relever une métaphore filée, c'est repérer tous les mots qui appartiennent au domaine du comparant.",
                "La personnification attribue des caractéristiques humaines (sentiments, paroles, gestes) à un animal, un objet ou une idée : « le vent gémit », « la ville s'endort ». Dans le rondeau de Charles d'Orléans « Le temps a laissé son manteau », la saison est personnifiée : elle quitte le « manteau » de l'hiver, fait de vent, de froid et de pluie, pour se vêtir de soleil, et la nature entière se pare de nouveaux habits. La personnification se combine ici à une métaphore filée du vêtement.",
              ],
              box: { label: "À retenir", text: "Métaphore : rapprochement sans outil ; in praesentia (comparé et comparant présents) ou in absentia (comparant seul). Métaphore filée : même image prolongée sur plusieurs mots ou vers. Personnification : traits humains prêtés à un non-humain." },
            },
            {
              heading: "L'allégorie et le symbole",
              paragraphs: [
                "L'allégorie représente une idée abstraite sous une forme concrète, le plus souvent celle d'un personnage qui agit, parle et porte des attributs reconnaissables ; le nom de l'idée prend alors souvent une majuscule. La Mort tient une faux, la Justice une balance et parfois un bandeau sur les yeux, la Fortune fait tourner sa roue. L'allégorie est donc souvent une personnification développée, qui peut occuper tout un poème ou tout un récit.",
                "Le Moyen Âge en fait un usage considérable. Dans Le Roman de la Rose (commencé par Guillaume de Lorris vers 1230 et achevé par Jean de Meun vers 1275), l'amant cherche à cueillir une rose, image de la femme aimée, et rencontre des personnages allégoriques comme Bel Accueil, Danger, Male Bouche (la médisance) ou Raison. Charles d'Orléans personnifie dans ses poèmes Mélancolie, Espoir ou Nonchaloir. Les fables de La Fontaine, où les animaux figurent des types humains, sont elles aussi des récits allégoriques.",
                "Il ne faut pas confondre l'allégorie avec le symbole. Le symbole est un objet ou un être concret associé, par convention, à une idée, sans être personnifié : la colombe symbolise la paix, la balance la justice, la rose la beauté éphémère. Le symbole renvoie à l'idée ; l'allégorie la met en scène.",
              ],
              box: { label: "Définition", text: "Allégorie : représentation concrète et animée d'une idée abstraite, souvent un personnage avec majuscule et attributs (la Mort et sa faux). Symbole : objet ou être concret associé par convention à une idée, sans être personnifié (la colombe, la paix)." },
            },
          ],
          keyPoints: [
            "Une image rapproche un comparé et un comparant de domaines différents grâce à un point commun.",
            "Comparaison : avec un outil (comme, tel, pareil à...) ; tout « comme » n'est pas une comparaison.",
            "Métaphore : sans outil ; in praesentia (les deux termes) ou in absentia (comparant seul).",
            "Métaphore filée : même image prolongée ; personnification : traits humains prêtés à un non-humain.",
            "Allégorie : idée abstraite mise en scène (la Mort et sa faux) ; symbole : objet associé à une idée (la colombe, la paix).",
            "Analyser une image : comparé, comparant, point commun, puis connotations du comparant et effet sur le sens.",
          ],
          example: {
            statement: "Dans le rondeau de Charles d'Orléans qui commence par « Le temps a laissé son manteau », le poète montre la saison qui abandonne un manteau de vent, de froidure et de pluie pour se vêtir de soleil ; plus loin, les rivières et les fontaines portent une « livrée » faite de gouttes d'argent travaillées comme de l'« orfèvrerie », et chacun s'habille de neuf. Identifiez les images employées et interprétez-les.",
            solution: [
              "Personnification : « le temps » (la saison, le temps qu'il fait) agit comme une personne qui ôte son manteau et change de vêtement.",
              "Métaphore in praesentia : le manteau est fait « de vent, de froidure et de pluie » ; le comparé (l'hiver et ses intempéries) et le comparant (le manteau) sont tous deux exprimés.",
              "Métaphore filée du vêtement : manteau, se vêtir, « livrée » (l'habit aux couleurs d'un seigneur), s'habiller de neuf ; s'y ajoute le domaine du luxe avec l'« orfèvrerie » et les gouttes d'argent.",
              "Connotations : l'hiver devient un vêtement lourd et sombre que l'on quitte avec soulagement ; le printemps, une parure précieuse et festive. La nature entière semble prête pour une fête de cour.",
              "Interprétation : ces images rendent sensible le renouveau du printemps et l'associent à la joie et à l'élégance ; le monde se transforme comme on change de vêtement, ce qui donne au poème sa légèreté.",
              "Réponse : personnification de la saison et métaphore filée du vêtement et du bijou, qui font du retour du printemps une fête joyeuse et raffinée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Identifiez la figure employée dans chacune de ces phrases (écrites pour l'exercice) et, s'il y a lieu, nommez le comparé et le comparant : a) « La lune, comme une lampe d'argent, veille sur le village. » b) « Sa bouche est une rose. » c) « Le vent gémit derrière la porte. » d) « La Mort, sa faux à la main, frappe à toutes les portes. » e) « Les perles de sa bouche brillaient quand elle riait. » f) « Il est plus grand que son frère. »",
              hint: "Cherchez d'abord un outil de comparaison, puis demandez-vous si le comparé est exprimé, si un non-humain agit comme un humain, et si une idée abstraite est mise en scène.",
              solution: [
                "a) Comparaison : comparé « la lune », comparant « une lampe d'argent », outil « comme ». Le verbe « veille » ajoute une personnification.",
                "b) Métaphore in praesentia : comparé « sa bouche », comparant « une rose », sans outil.",
                "c) Personnification : le vent « gémit », comme un être qui souffre.",
                "d) Allégorie : la Mort, idée abstraite, est un personnage (majuscule, attribut de la faux, action de frapper).",
                "e) Métaphore in absentia : seul le comparant « les perles » est exprimé ; le comparé, les dents, est à reconstituer.",
                "f) Aucune image : c'est un comparatif qui compare deux êtres du même domaine.",
              ],
            },
            {
              level: 2,
              statement: "Voici un quatrain écrit pour l'exercice, à la manière des poètes pétrarquistes : « Mon cœur est un vaisseau perdu sur l'onde amère, / Vos yeux sont les écueils où se brisent mes voiles ; / Le vent de vos rigueurs soulève la colère / Des vagues, et la nuit m'a caché les étoiles. » 1) Relevez la métaphore filée et nommez son domaine. 2) Distinguez une métaphore in praesentia et une métaphore in absentia. 3) Interprétez l'ensemble.",
              hint: "Soulignez tous les mots qui appartiennent au monde de la mer, puis demandez-vous ce que chacun représente dans la relation amoureuse.",
              solution: [
                "1) Métaphore filée de la navigation dans la tempête : vaisseau, onde amère, écueils, voiles, vent, vagues, nuit, étoiles.",
                "2) In praesentia : « Mon cœur est un vaisseau », « Vos yeux sont les écueils », « Le vent de vos rigueurs » (comparé et comparant présents). In absentia : « la nuit m'a caché les étoiles », où le comparé (l'espoir, ce qui guidait l'amant) n'est pas exprimé.",
                "3) Correspondances : le cœur est un navire fragile, les yeux de la dame des récifs qui le brisent, sa dureté (« vos rigueurs ») un vent de tempête ; la disparition des étoiles, qui guidaient les marins, figure la perte de tout espoir.",
                "Le rejet « Des vagues », au début du dernier vers, prolonge la phrase comme une vague qui déborde, et l'adjectif « amère » rappelle à la fois le sel de la mer et l'amertume de l'amant.",
                "Résultat : une métaphore filée de la tempête qui traduit la détresse de l'amant face à une dame cruelle, motif typique du pétrarquisme.",
              ],
            },
            {
              level: 3,
              statement: "Type bac (paragraphe de commentaire). Voici quatre alexandrins écrits pour l'exercice, dans le goût baroque : « La vie est un reflet que l'onde fait trembler, / Une bulle d'un jour que le vent fait éclore ; / Et la Mort, qui nous suit sans jamais se troubler, / Tient sa faux sur nos fronts dès la première aurore. » Rédigez un paragraphe qui montre comment les images expriment la fragilité de la vie.",
              hint: "Distinguez les métaphores de la vie (deux comparants) et l'allégorie de la Mort ; cherchez aussi une opposition dans le dernier vers.",
              solution: [
                "Phrase d'idée : « Ce quatrain construit, par une série d'images, une méditation sur la fragilité de l'existence humaine. »",
                "Première analyse : « Les deux premiers vers définissent la vie par deux métaphores successives : elle est “un reflet que l'onde fait trembler”, puis “une bulle d'un jour”. Les deux comparants appartiennent au monde de l'eau et de l'air, matières instables chères à l'esthétique baroque ; ils suggèrent une existence sans consistance, qu'un simple mouvement suffit à troubler ou à faire éclater. »",
                "Deuxième analyse : « Face à cette instabilité, la Mort apparaît comme une allégorie : la majuscule, l'attribut de la faux et les actions de suivre et de tenir en font un personnage. Son calme, souligné par “sans jamais se troubler”, s'oppose au tremblement du reflet : la seule chose stable est la mort. »",
                "Troisième analyse : « Le dernier vers associe la faux à “la première aurore” : l'aurore, métaphore de la naissance, montre que la menace pèse sur l'homme dès le premier jour, et cette opposition entre le début et la fin résume la brièveté de la vie. »",
                "Phrase de bilan : « Les images de l'eau, de la bulle et de la Mort allégorique composent ainsi une vision baroque de l'existence, fragile et menacée. »",
                "Résultat : un paragraphe qui nomme chaque image avec précision (métaphores, allégorie, opposition) et en interprète les connotations.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les images poétiques.",
            statements: [
              { text: "Dans « Ses yeux brillent comme des étoiles », « étoiles » est le comparé.", true: false, why: "Les étoiles sont le comparant ; le comparé, ce dont on parle, ce sont les yeux." },
              { text: "La métaphore rapproche deux réalités sans outil de comparaison.", true: true, why: "C'est ce qui la distingue de la comparaison." },
              { text: "Toute phrase qui contient « comme » est une comparaison.", true: false, why: "« Comme » peut exprimer la cause ou signifier « en tant que »." },
              { text: "Une allégorie représente une idée abstraite sous une forme concrète, souvent personnifiée.", true: true, why: "Par exemple la Mort avec sa faux, ou la Justice avec sa balance." },
              { text: "La métaphore filée prolonge une même image sur plusieurs mots ou plusieurs vers.", true: true, why: "Elle se repère au champ lexical du comparant qui se poursuit." },
              { text: "« Il est plus grand que son frère » est une comparaison poétique.", true: false, why: "C'est un comparatif entre deux êtres du même domaine : il n'y a pas d'image." },
              { text: "Dans une métaphore in absentia, le comparé n'est pas exprimé.", true: true, why: "Le lecteur doit le reconstituer, comme les dents derrière « les perles de sa bouche »." },
            ],
          },
          quiz: [
            {
              q: "Dans « La lune, comme une lampe, veille sur le village », quel est le comparant ?",
              options: ["La lune", "Une lampe", "Comme", "Le village"],
              answer: 1,
              why: "Le comparant est ce à quoi l'on rapproche le comparé (la lune) : ici, une lampe.",
            },
            {
              q: "« Cette femme est une rose » est...",
              options: ["une comparaison", "une allégorie", "une métonymie", "une métaphore"],
              answer: 3,
              why: "Le rapprochement se fait sans outil de comparaison, avec le comparé et le comparant présents : métaphore in praesentia.",
            },
            {
              q: "Laquelle de ces phrases contient une personnification ?",
              options: ["Le vent gémit", "La pluie tombe depuis le matin", "Il fait plus froid qu'hier soir", "Le vent souffle sur la plaine"],
              answer: 0,
              why: "Gémir est une action humaine prêtée au vent ; souffler est une action propre au vent.",
            },
            {
              q: "Quelle œuvre médiévale met en scène des personnages allégoriques comme Bel Accueil ou Danger ?",
              options: ["La Chanson de Roland", "Le Roman de la Rose", "Le Testament", "Les Regrets"],
              answer: 1,
              why: "Le Roman de la Rose, de Guillaume de Lorris et Jean de Meun, est un vaste récit allégorique.",
            },
            {
              q: "Une balance qui évoque la justice, sans être personnifiée, est...",
              options: ["une métaphore filée", "une personnification", "un symbole", "une comparaison"],
              answer: 2,
              why: "Un objet concret associé par convention à une idée, sans être mis en scène comme un personnage, est un symbole.",
            },
          ],
          trap: "Se contenter de nommer la figure (« il y a une métaphore ») sans identifier le comparé et le comparant ni dire ce que l'image apporte au sens, ou prendre pour une comparaison toute phrase qui contient « comme ».",
          method: "Pour chaque image, remplissez trois cases (de quoi parle-t-on, à quoi le rapproche-t-on, qu'ont-ils en commun), puis notez les connotations du comparant, valorisantes ou inquiétantes : ce sont elles qui fournissent l'interprétation.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'analyser-poeme',
          title: 'Analyser un poème : du sens au jeu des formes',
          minutes: 35,
          objectives: [
            "Dégager le sens global d'un poème à partir du paratexte, de la situation d'énonciation et du registre.",
            "Délimiter les mouvements d'un poème et repérer les procédés qui le construisent.",
            "Relier les observations de lexique, d'images et de versification à une interprétation.",
            "Formuler un projet de lecture sur un poème.",
          ],
          course: [
            {
              heading: "Première lecture : comprendre avant d'analyser",
              paragraphs: [
                "Avant toute analyse, il faut comprendre ce que dit le poème. Lisez-le plusieurs fois, à voix basse si possible, car la poésie s'entend. Commencez par le paratexte : le nom de l'auteur, le titre du poème et du recueil, la date. Ces éléments situent le texte dans son époque (la lyrique courtoise, la Pléiade, le baroque, le classicisme) et orientent la lecture : un sonnet des Regrets de Du Bellay ne se lit pas comme une fable de La Fontaine.",
                "Identifiez ensuite la situation d'énonciation : qui parle, à qui, de quoi ? Dans un poème lyrique, le « je » est un sujet lyrique, une voix construite par le poème, qui ne se confond pas forcément avec l'auteur réel. Repérez le destinataire : une dame que l'on vouvoie, un ami que l'on tutoie, une réalité personnifiée à laquelle on s'adresse par une apostrophe (« Ô nuit »), ou le lecteur.",
                "Déterminez enfin le thème et le registre dominants. Le registre lyrique exprime les sentiments personnels ; l'élégiaque, la plainte, le regret, le deuil ; l'épique, la grandeur héroïque par l'hyperbole ; le satirique, la critique moqueuse ; le pathétique, une souffrance qui émeut ; le comique et l'ironique, le rire et le décalage. Notez votre première impression : elle sera vérifiée ou corrigée par l'analyse.",
              ],
              box: { label: "Repère", text: "Registres fréquents en poésie : lyrique (sentiments du je), élégiaque (plainte, regret), épique (grandeur, hyperbole), satirique (critique moqueuse), pathétique (souffrance qui émeut), ironique (dire autre chose que ce qu'on pense)." },
            },
            {
              heading: "Observer : un relevé organisé",
              paragraphs: [
                "Délimitez d'abord les mouvements du poème, c'est-à-dire les étapes de son sens. Ils correspondent souvent aux strophes, mais pas toujours : un connecteur (« mais », « or », « donc »), un changement de temps verbal, de destinataire ou de registre signale souvent un nouveau mouvement. Dans un sonnet, le passage des quatrains aux tercets marque fréquemment un tournant.",
                "Relevez ensuite les procédés, en les classant : le lexique (champs lexicaux, mots répétés, connotations), les images (comparaisons, métaphores, personnifications, allégories), la syntaxe (types de phrases, apostrophes, impératifs, temps verbaux, négations), la versification (mètre, rimes, place des mots à la rime et à la césure, rejets, sonorités) et la structure (strophes, refrain, chute).",
                "Un tableau à trois colonnes est l'outil le plus efficace : la citation, le procédé nommé avec précision, l'interprétation. La troisième colonne est la plus importante : un procédé qui n'est pas interprété ne sert à rien.",
              ],
            },
            {
              heading: "Le jeu des formes : pourquoi ici, pourquoi ainsi ?",
              paragraphs: [
                "En poésie, la forme produit du sens. Les mots placés à la rime sont mis en relief et associés deux à deux : rapprocher « flamme » et « âme » à la rime, c'est suggérer que l'âme brûle d'amour. Un mot placé juste avant la césure ou en fin de vers reçoit un accent ; un mot isolé en rejet surprend ; un refrain revient chargé de tout ce qui précède. Chaque observation doit répondre à la question : pourquoi ce mot est-il placé ici, pourquoi ce procédé est-il employé ainsi ?",
                "Il faut aussi éviter deux erreurs opposées. La première est la paraphrase : redire avec d'autres mots ce que dit le poème, sans observer comment il le dit. La seconde est le relevé mécanique : énumérer des allitérations ou des rimes sans dire ce qu'elles apportent. Une bonne analyse va toujours du procédé au sens : « La répétition de l'impératif “cueillez” donne à l'invitation une urgence qui traduit la hâte du poète face au temps qui passe. »",
              ],
              box: { label: "Règle", text: "Une observation d'analyse relie toujours trois éléments : une citation précise, un procédé nommé, une interprétation qui dit l'effet produit et le sens. Ni paraphrase sans procédé, ni procédé sans interprétation." },
            },
            {
              heading: "Formuler un projet de lecture",
              paragraphs: [
                "Le projet de lecture est la question à laquelle votre analyse répond. Il porte sur ce qui fait la singularité du poème et relie, si possible, le sens et la forme. On le formule par une interrogation directe ou indirecte : « Comment Ronsard transforme-t-il un compliment galant en une leçon sur le temps ? », « En quoi ce sonnet fait-il de la nostalgie de l'exilé un éloge de la petite patrie ? »",
                "Un projet trop large (« Comment le poète parle-t-il de l'amour ? ») ou purement descriptif (« Quelles sont les figures de style du poème ? ») ne permet pas d'interpréter. Un bon projet annonce déjà une tension ou un mouvement que l'analyse va éclairer, et il permet de regrouper les observations en deux ou trois axes.",
              ],
            },
          ],
          keyPoints: [
            "Lire d'abord le paratexte : auteur, titre, recueil, date, et situer le poème dans son époque.",
            "Énonciation : qui parle (le sujet lyrique), à qui (destinataire, apostrophe), de quoi.",
            "Registres : lyrique, élégiaque, épique, satirique, pathétique, ironique.",
            "Délimiter les mouvements : strophes, connecteurs, changements de temps ou de destinataire, volta.",
            "Relevé en trois colonnes : citation, procédé, interprétation ; la forme (rime, césure, rejet, refrain) produit du sens.",
            "Projet de lecture : une question sur la singularité du poème, qui relie sens et forme.",
          ],
          example: {
            statement: "Le sonnet de Ronsard « Quand vous serez bien vieille » (Sonnets pour Hélène, 1578) est écrit en alexandrins. Dans les quatrains, le poète imagine Hélène devenue vieille : le soir, à la chandelle, près du feu, elle file la laine et récite les vers de Ronsard en s'étonnant qu'il l'ait célébrée au temps de sa beauté, et sa servante, à demi endormie, se réveille au nom du poète. Dans le premier tercet, le poète se voit mort, ombre sans corps reposant sous la terre, et Hélène vieille, accroupie au foyer, regrettant d'avoir dédaigné son amour. Le dernier tercet l'invite à vivre sans attendre le lendemain et à cueillir dès aujourd'hui les roses de la vie. Menez l'analyse jusqu'au projet de lecture.",
            solution: [
              "Paratexte et énonciation : un sonnet amoureux de la Pléiade ; le poète (sujet lyrique) s'adresse à Hélène, qu'il vouvoie, par une sorte de prédiction.",
              "Mouvements : les quatrains projettent dans l'avenir une scène de vieillesse (temps du futur, décor du soir, de la chandelle et du feu) ; le premier tercet oppose le destin du poète mort et celui d'Hélène vieillie ; le dernier tercet bascule vers le présent et l'impératif.",
              "Procédés et interprétation : le futur rend la vieillesse inévitable ; le décor nocturne et le feu connotent la fin de la vie ; l'image d'Hélène qui récite les vers du poète montre que c'est la poésie qui garde la mémoire de sa beauté.",
              "La chute : l'impératif et la métaphore des « roses de la vie » reprennent le carpe diem d'Horace ; le poème passe d'une menace (vous vieillirez) à une invitation pressante (aimez maintenant).",
              "Registre : lyrique et galant, mais aussi élégiaque par la méditation sur la mort, avec une pointe de cruauté dans le portrait de la vieille femme.",
              "Réponse, projet de lecture : comment Ronsard fait-il de la vision d'une vieillesse à venir un argument pour convaincre Hélène d'aimer sans attendre, tout en affirmant le pouvoir du poète sur le temps ?",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun de ces passages écrits pour l'exercice, indiquez qui parle, à qui, et le registre dominant : a) « Ô nuit, garde mon secret, toi qui vois couler mes larmes ! » b) « Le héros s'élance ; cent ennemis tombent sous ses coups, et la terre tremble sous ses pas. » c) « Notre grand poète, si fier de son génie, compose trois vers par an, et tous trois font bâiller. »",
              hint: "Repérez les pronoms personnels et les apostrophes, puis demandez-vous quel sentiment ou quelle intention domine.",
              solution: [
                "a) Un « je » lyrique (« mon secret », « mes larmes ») s'adresse à la nuit, personnifiée par l'apostrophe « Ô nuit » et le tutoiement. Registre lyrique et élégiaque : la plainte d'une souffrance intime.",
                "b) Un narrateur extérieur raconte, sans destinataire marqué. Registre épique : le héros, le nombre « cent ennemis », la terre qui tremble sont des hyperboles qui grandissent l'action.",
                "c) Un énonciateur moqueur parle d'un poète au lecteur. Registre satirique et ironique : « grand poète » et « génie » sont démentis par la suite (« trois vers par an », « font bâiller »).",
                "Résultat : a) lyrique et élégiaque, b) épique, c) satirique et ironique.",
              ],
            },
            {
              level: 2,
              statement: "Voici un poème écrit pour l'exercice, en octosyllabes : « Petit ruisseau qui vas sans cesse, / Tu fuis toujours et ne reviens, / Et comme toi notre jeunesse / S'écoule et ne garde aucun bien. // Mais l'onde, au printemps, est nouvelle, / Et chaque avril rend ses couleurs ; / Nous seuls, quand la saison est belle, / Ne retrouvons jamais nos fleurs. » 1) Délimitez les deux mouvements et dites ce qui les sépare. 2) Relevez trois procédés et interprétez-les.",
              hint: "Observez le premier mot de la seconde strophe, puis comparez ce qui arrive à la nature et ce qui arrive aux hommes.",
              solution: [
                "1) Premier mouvement (strophe 1) : le poète s'adresse au ruisseau et le compare à la jeunesse, qui s'enfuit sans retour. Second mouvement (strophe 2) : introduit par « Mais », il oppose la nature, qui se renouvelle chaque printemps, et l'homme, qui ne retrouve jamais sa jeunesse.",
                "2) Premier procédé : l'apostrophe et le tutoiement (« Petit ruisseau », « Tu fuis ») personnifient le ruisseau ; la comparaison « comme toi notre jeunesse » fait de l'eau qui coule l'image du temps qui passe.",
                "Deuxième procédé : l'antithèse entre les deux strophes oppose le temps cyclique de la nature (« au printemps, est nouvelle », « chaque avril rend ses couleurs ») au temps linéaire de l'homme ; la mise en relief « Nous seuls » souligne que l'homme est l'exception.",
                "Troisième procédé : les négations (« ne reviens », « ne garde aucun bien », « Ne retrouvons jamais ») et la métaphore finale des « fleurs », image de la jeunesse, font de la chute une conclusion mélancolique ; à la rime, « couleurs » et « fleurs » s'associent dans une rime riche.",
                "Résultat : deux mouvements, la comparaison puis l'antithèse, qui font passer d'un constat sur la fuite du temps à une plainte élégiaque sur la condition humaine.",
              ],
            },
            {
              level: 3,
              statement: "Type bac (préparer un commentaire). À partir du poème de l'exercice précédent (« Petit ruisseau qui vas sans cesse... »), formulez un projet de lecture, puis proposez un plan en deux parties, avec deux sous-parties chacune, en indiquant pour chaque sous-partie une citation et le procédé à analyser.",
              hint: "Partez de la tension entre le ruisseau qui se renouvelle et la jeunesse qui ne revient pas ; la première partie peut aller du plus visible (le paysage), la seconde au plus profond (la méditation).",
              solution: [
                "Projet de lecture : comment ce poème fait-il d'un simple ruisseau le support d'une méditation mélancolique sur le temps qui ne revient pas ?",
                "I. Un paysage familier qui devient l'image du temps. 1) Un ruisseau personnifié : apostrophe « Petit ruisseau » et tutoiement « Tu fuis » ; la familiarité affectueuse installe un dialogue avec la nature. 2) Une comparaison qui révèle la fuite du temps : « comme toi notre jeunesse / S'écoule » ; l'enjambement prolonge la phrase comme l'eau qui coule.",
                "II. Une méditation élégiaque sur la condition humaine. 1) L'opposition entre la nature et l'homme : le connecteur « Mais » et l'antithèse entre « chaque avril rend ses couleurs » et « Nous seuls » ; la nature renaît, l'homme non. 2) Une chute mélancolique : négations « ne reviens », « Ne retrouvons jamais », métaphore des « fleurs » pour la jeunesse, rime riche « couleurs / fleurs » qui oppose ce que la nature retrouve et ce que l'homme perd.",
                "Vérification : chaque partie est formulée comme une idée, les sous-parties progressent, et chaque procédé est relié au projet de lecture.",
                "Résultat : un projet de lecture qui relie le paysage et la méditation, et un plan qui va de l'image du temps à la plainte sur la condition humaine.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'analyse d'un poème.",
            items: [
              "Lire le poème et son paratexte : auteur, recueil, date",
              "Formuler une première impression sur le sens et le registre",
              "Délimiter les mouvements du poème",
              "Relever les procédés dans un tableau",
              "Interpréter chaque procédé en le reliant au sens",
              "Formuler le projet de lecture",
            ],
          },
          quiz: [
            {
              q: "Que désigne le « je » d'un poème lyrique ?",
              options: ["L'auteur réel, dont il raconte toujours la biographie", "Le sujet lyrique, une voix construite", "Forcément le lecteur du poème"],
              answer: 1,
              why: "Le sujet lyrique est la voix qui parle dans le poème ; il ne se confond pas forcément avec l'auteur réel.",
            },
            {
              q: "Quel registre exprime la plainte, le regret ou le deuil ?",
              options: ["Épique", "Satirique", "Élégiaque", "Comique"],
              answer: 2,
              why: "L'élégie est, depuis l'Antiquité, le chant de la plainte et du regret.",
            },
            {
              q: "Qu'appelle-t-on un mouvement dans un poème ?",
              options: ["Une étape du sens", "Un vers au rythme rapide et saccadé", "Un poème où les personnages voyagent", "La rime qui termine chaque strophe"],
              answer: 0,
              why: "Un mouvement est une étape dans la progression du sens, souvent marquée par un changement (connecteur, temps, destinataire).",
            },
            {
              q: "Quelle formulation est un projet de lecture recevable ?",
              options: ["Quelles sont les rimes et les strophes de ce poème ?", "Quel est le nombre de syllabes de chaque vers ?", "Le poète parle-t-il de la nature dans ce poème qu'il a écrit ?", "En quoi le ruisseau figure-t-il la jeunesse perdue ?"],
              answer: 3,
              why: "Un projet de lecture porte sur la singularité du poème et relie sens et forme ; les autres questions sont descriptives.",
            },
            {
              q: "Pourquoi un mot placé à la rime mérite-t-il l'attention ?",
              options: ["Parce qu'il est toujours le plus long du vers", "Parce que la rime l'associe à un autre mot", "Parce qu'il ne compte pas dans le mètre"],
              answer: 1,
              why: "La rime met le mot en relief et le rapproche d'un autre mot, ce qui crée du sens.",
            },
          ],
          trap: "Paraphraser le poème en redisant son contenu avec d'autres mots, ou à l'inverse dresser un relevé mécanique de procédés sans les interpréter : l'analyse relie toujours un procédé précis à un sens.",
          method: "Après la première lecture, résumez le poème en une phrase (« Ce poème dit que... ») ; après le relevé, complétez-la par « ... et il le fait en... » : la réunion des deux phrases vous donne presque votre projet de lecture.",
        },
      ],
    },
    /* ==================================================================== */
    /* MÉTHODES : LE COMMENTAIRE ET LA DISSERTATION                         */
    /* ==================================================================== */
    {
      id: 'methodes-ecrit',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'commentaire-problematique',
          title: 'Construire une problématique et un plan de commentaire',
          minutes: 35,
          objectives: [
            "Définir l'exercice du commentaire et ce que l'on attend de lui.",
            "Regrouper les observations du brouillon en axes de lecture.",
            "Formuler une problématique adaptée à la singularité d'un texte.",
            "Construire un plan en deux ou trois parties, formulées comme des idées et organisées en progression.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un commentaire ?",
              paragraphs: [
                "Le commentaire est une interprétation écrite et organisée d'un texte, le plus souvent un extrait ou un poème. Il ne suit pas le texte ligne à ligne, comme le fait l'explication linéaire pratiquée à l'oral : il le réorganise en grandes idées, les axes, qui répondent toutes à une même question, la problématique (on dit aussi projet de lecture). Il comporte une introduction, un développement en deux ou trois parties et une conclusion.",
                "En seconde, vous vous initiez à cet exercice, qui sera l'un des deux sujets au choix de l'épreuve écrite anticipée de français, en fin de Première (un écrit de quatre heures : le commentaire d'un texte qui n'est pas au programme, ou la dissertation sur une œuvre au programme). En voie générale, le sujet de commentaire ne fournit pas de pistes : c'est à vous de construire la problématique et le plan.",
              ],
              box: { label: "Définition", text: "Commentaire : interprétation organisée d'un texte, qui répond à une problématique en deux ou trois parties (les axes), chacune divisée en sous-parties appuyées sur des citations analysées. Il se distingue de l'explication linéaire, qui suit l'ordre du texte." },
            },
            {
              heading: "Du brouillon aux axes",
              paragraphs: [
                "Le travail commence au brouillon. Après plusieurs lectures et l'étude du paratexte, relevez dans un tableau à trois colonnes la citation, le procédé et l'interprétation. Vous obtenez une liste d'observations, encore en désordre, qui suit l'ordre du texte.",
                "Il faut ensuite regrouper ces observations selon leur sens, et non selon leur nature grammaticale ou stylistique. Mettez ensemble toutes les remarques qui montrent la même chose : par exemple, toutes celles qui révèlent la cruauté d'un personnage, qu'il s'agisse d'une image, d'un temps verbal ou d'un rythme. Chaque groupe deviendra une sous-partie, et deux ou trois groupes voisins formeront une partie.",
                "C'est pourquoi un plan par procédés (I. Le lexique ; II. Les figures de style ; III. La versification) est à proscrire : il sépare la forme du sens et ne démontre rien. Une partie de commentaire est toujours une idée sur le texte, prouvée par des procédés variés.",
              ],
            },
            {
              heading: "Formuler la problématique",
              paragraphs: [
                "La problématique est la question à laquelle tout le commentaire répond. Elle porte sur la singularité du texte : ce qu'il a de particulier, de surprenant, de remarquable. Elle prend souvent la forme « Comment... ? » ou « En quoi... ? », et elle fait apparaître une tension : entre l'apparence et le sens profond, entre un genre et la manière dont l'auteur le renouvelle, entre ce qui est dit et la manière de le dire.",
                "Comparez : « Comment La Fontaine raconte-t-il l'histoire d'un loup et d'un agneau ? » est une question plate, qui appelle un résumé. « Comment ce bref récit animalier devient-il une démonstration ironique de l'injustice du pouvoir ? » fait apparaître une tension (un récit simple, une portée critique) et annonce déjà le plan. Une problématique ne se répond pas par oui ou par non, et elle ne doit pas être une simple question de cours (« Qu'est-ce qu'une fable ? »).",
              ],
              box: { label: "Règle", text: "Une bonne problématique : une question, sur la singularité du texte, souvent introduite par « Comment » ou « En quoi », qui fait apparaître une tension et à laquelle on ne peut pas répondre par oui ou non." },
            },
            {
              heading: "Construire le plan",
              paragraphs: [
                "Le plan compte deux ou trois parties, chacune divisée en deux ou trois sous-parties. Chaque partie est formulée comme une idée, par une phrase ou un groupe nominal précis : « Un procès truqué » ou « Le portrait d'un homme possédé par la richesse », et non « Les images » ou « Deuxième partie ».",
                "Les parties progressent : on va du plus évident au plus profond, par exemple du récit à sa portée critique, du portrait apparent à la satire, de l'expression d'un sentiment à la réflexion qu'il ouvre. Pour vérifier un plan, lisez à la suite la problématique et les titres des parties : ils doivent former une réponse cohérente et progressive. Vérifiez aussi que chaque sous-partie s'appuie sur au moins deux citations analysables.",
              ],
              box: { label: "À retenir", text: "Plan de commentaire : 2 ou 3 parties formulées comme des idées, 2 ou 3 sous-parties chacune, appuyées sur des citations. Progression du plus évident au plus profond. Jamais de plan par procédés." },
            },
          ],
          keyPoints: [
            "Le commentaire réorganise le texte en axes qui répondent à une problématique ; il ne le suit pas ligne à ligne.",
            "Au brouillon : tableau citation, procédé, interprétation, puis regroupement des remarques selon leur sens.",
            "Problématique : une question (« Comment... ? », « En quoi... ? ») sur la singularité du texte, qui fait apparaître une tension.",
            "Plan : 2 ou 3 parties formulées comme des idées, du plus évident au plus profond ; jamais de plan par procédés.",
            "Le commentaire est l'un des deux sujets de l'écrit anticipé de français, en fin de Première.",
          ],
          example: {
            statement: "« Le Loup et l'Agneau » de La Fontaine (Fables, livre I, 10) s'ouvre sur la morale selon laquelle la raison du plus fort est toujours la meilleure. Un agneau boit dans un ruisseau ; un loup affamé l'accuse successivement de troubler son eau, d'avoir médit de lui l'an passé, puis rejette la faute sur son frère et sur les siens ; l'agneau, qui l'appelle « Sire » et « Votre Majesté » quand le loup le tutoie, réfute chaque accusation ; le loup l'emporte et le mange « sans autre forme de procès ». Formulez une problématique et construisez un plan détaillé en deux parties.",
            solution: [
              "Repérer la singularité : un récit très court et vivant, avec un dialogue, qui illustre une morale cynique annoncée dès le début ; le lecteur sait d'avance que l'agneau va mourir.",
              "Regrouper les observations : d'un côté, ce qui rend le récit vivant (morale initiale, décor, dialogue, vouvoiement et tutoiement) ; de l'autre, ce qui en fait une critique (accusations absurdes, réfutations inutiles, vocabulaire judiciaire, ironie de la morale).",
              "Problématique : comment ce bref récit animalier devient-il une démonstration ironique de l'injustice du pouvoir ?",
              "Partie I, un récit vif et théâtralisé : 1) une mise en scène rapide (la morale initiale qui crée l'attente, le décor du ruisseau, l'entrée brutale du loup) ; 2) un dialogue inégal (les accusations du loup, la politesse de l'agneau, l'opposition du tutoiement et du vouvoiement).",
              "Partie II, une démonstration de la loi du plus fort : 1) un procès truqué (la mauvaise foi du loup, qui change d'accusation à chaque réfutation, rend la logique de l'agneau inutile) ; 2) une morale ironique (« meilleure » signifie « qui l'emporte », non « juste », et « sans autre forme de procès » révèle la parodie de justice).",
              "Réponse : problématique sur la transformation d'un récit simple en critique du pouvoir ; plan qui va du récit (I) à sa portée (II).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour le sonnet de Du Bellay « Heureux qui, comme Ulysse, a fait un beau voyage » (Les Regrets, 1558), dites si chacune de ces problématiques est recevable, et pourquoi : a) « Quelles sont les rimes de ce sonnet ? » b) « Du Bellay aime-t-il son village ? » c) « En quoi ce sonnet fait-il de la nostalgie de l'exilé un éloge de la petite patrie ? » d) « Qu'est-ce qu'un sonnet ? » e) « Comment Du Bellay détourne-t-il les grands modèles antiques pour exprimer une plainte personnelle ? »",
              hint: "Une problématique porte sur la singularité du texte, fait apparaître une tension et ne se répond ni par oui ou non, ni par une définition de cours.",
              solution: [
                "a) Non recevable : question purement descriptive, qui appelle un relevé et non une interprétation.",
                "b) Non recevable : on y répond par oui, et la question ne dit rien de la manière dont le poème est écrit.",
                "c) Recevable : elle porte sur la singularité du sonnet et fait apparaître une tension entre la plainte (la nostalgie) et l'éloge (la petite patrie).",
                "d) Non recevable : c'est une question de cours, qui pourrait être posée pour n'importe quel sonnet.",
                "e) Recevable : elle relève une tension entre les références antiques (Ulysse, la Toison d'or) et l'expression d'un sentiment intime.",
                "Résultat : seules les problématiques c) et e) sont recevables.",
              ],
            },
            {
              level: 2,
              statement: "Texte d'entraînement, écrit pour l'exercice : « Le marchand avait bâti sa maison au bord du fleuve, la plus haute de la ville. Chaque matin, du haut de sa terrasse, il comptait les barques qui passaient et calculait ce qu'elles lui rapporteraient. Il ne regardait jamais l'eau. Un printemps, le fleuve grossit. Les voisins quittèrent leurs cabanes en emportant leurs enfants ; le marchand, lui, monta sur la terrasse ses coffres, puis ses tapis, puis ses lampes d'or. Quand l'eau atteignit le dernier étage, il était assis sur ses trésors, seul, et il regardait enfin le fleuve. » Voici des observations relevées au brouillon : 1) le superlatif « la plus haute de la ville » ; 2) les imparfaits d'habitude « comptait », « calculait » ; 3) la phrase brève « Il ne regardait jamais l'eau. » ; 4) l'opposition entre les voisins qui sauvent leurs enfants et le marchand qui sauve ses biens ; 5) la gradation « ses coffres, puis ses tapis, puis ses lampes d'or » ; 6) l'adjectif « seul », isolé entre deux virgules ; 7) la chute « il regardait enfin le fleuve », qui répond à la phrase 3. Regroupez ces observations en deux axes, donnez un titre à chacun et proposez une problématique.",
              hint: "Demandez-vous quelles observations dessinent le caractère du marchand, et lesquelles montrent que le récit le punit et délivre une leçon.",
              solution: [
                "Axe I, le portrait d'un homme possédé par la richesse : observations 1 (la maison la plus haute, signe d'orgueil), 2 (l'habitude de compter et de calculer, obsession de l'argent), 3 (il ne regarde jamais l'eau, aveugle à tout ce qui n'est pas profit) et 5 (la gradation qui montre son attachement croissant à ses biens, jusqu'aux « lampes d'or »).",
                "Axe II, un récit qui punit l'avarice et délivre une leçon : observations 4 (l'opposition avec les voisins, qui sauvent ce qui compte vraiment, leurs enfants), 6 (« seul », mis en relief, qui dit le prix de son choix) et 7 (la chute, qui répond à la phrase 3 : il regarde le fleuve trop tard, quand celui-ci va l'emporter).",
                "Vérification : chaque axe est une idée sur le texte, et non une catégorie de procédés ; on passe du portrait (le plus visible) à la leçon (le plus profond).",
                "Problématique : comment ce court récit fait-il du portrait d'un marchand avare un apologue sur l'aveuglement que produit la richesse ?",
                "Résultat : deux axes, le portrait d'un homme possédé par ses biens puis la punition qui en fait un apologue, réunis par une problématique sur l'aveuglement.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Le sonnet VIII de Louise Labé (Euvres, 1555), en décasyllabes, s'ouvre sur « Je vis, je meurs » ; les quatrains, au présent et à la première personne, accumulent les contraires (brûler et se noyer, avoir chaud en endurant le froid, rire et larmoyer, sécher et verdoyer). Le premier tercet commence par « Ainsi Amour » : la locutrice explique que l'Amour la mène de façon inconstante, et que lorsqu'elle croit souffrir le plus, elle se trouve soudain hors de peine. Le dernier tercet ajoute que, lorsqu'elle croit sa joie certaine et se sent au sommet du bonheur, l'Amour la remet dans son « premier malheur ». Formulez une problématique et construisez un plan détaillé en deux parties, avec deux sous-parties chacune.",
              hint: "Observez la volta « Ainsi Amour » : les quatrains décrivent un état, les tercets en donnent la cause ; et regardez le dernier mot du poème.",
              solution: [
                "Repérer la singularité : un sonnet entièrement construit sur les contraires, dans la tradition de Pétrarque, mais dit par une voix de femme, et qui se termine en revenant à son point de départ.",
                "Problématique : comment Louise Labé fait-elle de l'accumulation des contraires l'expression d'une passion qui enferme la locutrice dans un cycle sans fin ?",
                "Partie I, un « je » déchiré par la passion : 1) une accumulation d'antithèses (« Je vis, je meurs », brûler et se noyer, chaud et froid, rire et larmoyer), héritée du pétrarquisme, qui traduit un état contradictoire ; 2) un « je » omniprésent, au présent, avec un rythme souvent binaire qui fait alterner les contraires à l'intérieur du vers.",
                "Partie II, une passion subie, sous l'empire d'Amour : 1) la volta « Ainsi Amour » révèle la cause du désordre : l'Amour, personnifié en maître, « mène » la locutrice, qui n'est plus sujet de ses actions ; 2) un mouvement circulaire : les tercets font alterner peine et joie, et le poème s'achève sur le « premier malheur », retour au point de départ qui fait de la passion une prison.",
                "Vérification : on va de l'expression d'un état (I) à sa cause et à sa signification (II) ; chaque sous-partie s'appuie sur des citations précises.",
                "Résultat : une problématique sur la passion comme cycle sans fin, et un plan qui progresse de la description du déchirement à l'analyse de sa cause.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion de méthode à sa définition.",
            pairs: [
              { left: "Problématique", right: "Question sur la singularité du texte, à laquelle tout le devoir répond" },
              { left: "Axe", right: "Grande idée sur le texte, qui forme une partie du commentaire" },
              { left: "Sous-partie", right: "Étape d'une partie, appuyée sur des citations analysées" },
              { left: "Tableau de brouillon", right: "Trois colonnes : citation, procédé, interprétation" },
              { left: "Progression", right: "Passage du plus évident au plus profond d'une partie à l'autre" },
              { left: "Explication linéaire", right: "Exercice oral qui suit l'ordre du texte" },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qui distingue le commentaire de l'explication linéaire ?",
              options: ["Il organise l'analyse en axes", "Il suit le texte ligne à ligne", "Il se fait uniquement à l'oral", "Il ne cite jamais le texte"],
              answer: 0,
              why: "L'explication linéaire suit l'ordre du texte ; le commentaire le réorganise en grandes idées.",
            },
            {
              q: "Quel titre de partie est le mieux formulé ?",
              options: ["Partie I : les figures de style du texte", "Partie I : le rythme et les sonorités du texte", "Partie I : un procès truqué", "Partie I : la versification et les rimes"],
              answer: 2,
              why: "Une partie se formule comme une idée sur le texte, pas comme une catégorie de procédés.",
            },
            {
              q: "Un plan par procédés (I. Les images ; II. Le rythme) est...",
              options: ["recommandé pour tous les textes en seconde", "obligatoire à l'épreuve anticipée de français", "à éviter, car il sépare forme et sens"],
              answer: 2,
              why: "Un tel plan ne démontre rien : chaque partie doit défendre une idée, prouvée par des procédés variés.",
            },
            {
              q: "Combien de parties compte en général un commentaire ?",
              options: ["Une seule", "Quatre ou cinq", "Autant que de strophes", "Deux ou trois"],
              answer: 3,
              why: "Le commentaire s'organise en deux ou trois parties, chacune divisée en sous-parties.",
            },
            {
              q: "Dans quel ordre organiser les parties ?",
              options: ["Du plus évident au plus profond", "Par ordre alphabétique des procédés", "Dans l'ordre des lignes du texte", "Du plus long au plus court"],
              answer: 0,
              why: "Le plan progresse : il part de ce que tout lecteur perçoit pour aller vers l'interprétation la plus fine.",
            },
          ],
          trap: "Construire un plan par procédés (I. Le lexique ; II. Les figures de style ; III. La versification) : un tel plan sépare la forme du sens et ne répond à aucune problématique ; chaque partie doit être une idée sur le texte, prouvée par des procédés variés.",
          method: "Testez votre plan en lisant à la suite, à voix basse, la problématique puis les titres des parties : ils doivent former une réponse cohérente et progressive, comme les étapes d'un raisonnement.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'commentaire-paragraphe',
          title: 'Rédiger un paragraphe de commentaire : citer et analyser',
          minutes: 30,
          objectives: [
            "Rédiger un paragraphe argumenté de commentaire : idée directrice, analyses, phrase de bilan.",
            "Citer le texte correctement : guillemets, insertion dans la phrase, coupures, références.",
            "Analyser une citation en nommant le procédé et en interprétant son effet.",
            "Employer un vocabulaire d'analyse précis et des connecteurs logiques variés.",
          ],
          course: [
            {
              heading: "La structure d'un paragraphe",
              paragraphs: [
                "Dans le développement d'un commentaire, chaque sous-partie forme un paragraphe, signalé par un retour à la ligne et un alinéa. Le paragraphe commence par une phrase qui annonce l'idée de la sous-partie ; viennent ensuite deux ou trois analyses complètes ; il se termine par une phrase de bilan, qui rappelle ce qui a été démontré et le relie à la problématique.",
                "Une analyse complète tient en trois temps : citer (un passage bref, exact, entre guillemets), nommer (le procédé, avec le mot juste), interpréter (dire l'effet produit et le sens, en lien avec l'idée du paragraphe). L'ordre peut varier, mais aucun des trois temps ne doit manquer : une citation sans analyse ne prouve rien, une analyse sans citation n'est pas fondée, et un procédé sans interprétation n'apporte rien.",
              ],
              box: { label: "À retenir", text: "Un paragraphe de commentaire : 1) phrase d'idée ; 2) deux ou trois analyses complètes (citer, nommer, interpréter), reliées par des connecteurs ; 3) phrase de bilan. Un paragraphe par sous-partie, avec un alinéa." },
            },
            {
              heading: "Citer le texte",
              paragraphs: [
                "Les citations sont brèves (quelques mots, un vers, rarement plus de deux lignes), exactes et placées entre guillemets français « ». Le mieux est de les insérer dans la syntaxe de votre phrase : « Le loup, qui arrive “à jeun”, cherche moins la justice qu'un prétexte. » On peut aussi les introduire par deux points, mais il faut éviter les citations isolées qui forment une phrase à elles seules.",
                "Quand on supprime des mots, on le signale par des points de suspension entre crochets [...]. Quand on doit modifier un mot pour l'accorder à sa phrase (changer un pronom ou un temps), on place la modification entre crochets. Pour citer plusieurs vers à la suite, on sépare les vers par une barre oblique : « Petit ruisseau qui vas sans cesse, / Tu fuis toujours ». On peut indiquer la référence entre parenthèses : (v. 3) pour un vers, (l. 5) pour une ligne.",
              ],
              box: { label: "Règle", text: "Citation : brève, exacte, entre guillemets, insérée dans la phrase. Coupure : [...]. Modification : entre crochets. Passage d'un vers au suivant : barre oblique /. Référence : (v. 3) ou (l. 5)." },
            },
            {
              heading: "Analyser : nommer et interpréter",
              paragraphs: [
                "Nommez le procédé avec précision : non pas « une figure de style », mais « une gradation », « une antithèse », « une métaphore filée », « l'imparfait d'habitude », « un rejet ». Le vocabulaire de l'analyse est votre outil principal : un procédé bien nommé montre que vous avez compris comment le texte fonctionne.",
                "Pour interpréter, variez les verbes : souligner, suggérer, traduire, mettre en relief, révéler, accentuer, opposer, dramatiser. Évitez les formules vides comme « l'auteur utilise ce procédé pour captiver le lecteur » ou « cela rend le texte plus vivant », qui pourraient s'appliquer à n'importe quel texte. L'interprétation doit être propre au passage : elle dit ce que ce procédé, à cet endroit, apporte au sens. Quand plusieurs procédés vont dans le même sens, montrez leur convergence : c'est un argument fort.",
              ],
            },
            {
              heading: "La langue du commentaire",
              paragraphs: [
                "Le commentaire se rédige au présent, dans une langue correcte et soutenue, sans abréviations, sans titres ni tirets dans le développement : tout est rédigé en phrases. On désigne avec justesse celui qui parle : l'auteur pour les choix d'écriture, le narrateur dans un récit, le sujet lyrique ou le poète dans un poème, le personnage dans une scène. On évite « je pense que » : on emploie plutôt le « nous » de modestie ou des tournures impersonnelles.",
                "Les connecteurs logiques organisent le paragraphe : d'abord, de plus, en outre, par ailleurs pour ajouter ; en effet pour justifier ; mais, cependant, pourtant pour opposer ; ainsi, donc pour conclure. Ils montrent au correcteur que vos analyses forment un raisonnement, et non une liste.",
              ],
            },
          ],
          keyPoints: [
            "Un paragraphe par sous-partie : phrase d'idée, deux ou trois analyses, phrase de bilan.",
            "Analyse complète : citer, nommer le procédé, interpréter l'effet et le sens.",
            "Citations brèves, exactes, entre guillemets, insérées dans la phrase ; [...] pour une coupure, / entre deux vers.",
            "Interpréter avec des verbes précis (souligner, suggérer, traduire) ; jamais de formule passe-partout.",
            "Rédiger au présent, sans titres ni tirets, avec des connecteurs logiques.",
          ],
          example: {
            statement: "À partir de « Le Loup et l'Agneau » de La Fontaine, rédigez le paragraphe correspondant à la sous-partie « un dialogue inégal ». Éléments du texte utilisables : l'agneau appelle le loup « Sire » et « Votre Majesté » ; le loup le tutoie ; le loup lance successivement trois accusations (troubler son eau, avoir médit de lui l'an passé, la faute de son frère et des siens) ; l'agneau répond par des arguments logiques, en faisant remarquer qu'il boit plus bas que le loup et qu'il n'était pas né l'an passé.",
            solution: [
              "Phrase d'idée : « Le dialogue, qui occupe l'essentiel de la fable, oppose deux personnages dont la parole n'a pas le même poids. »",
              "Première analyse (les marques de la relation) : « L'agneau s'adresse au loup avec une politesse extrême, en l'appelant “Sire” et “Votre Majesté”, termes réservés au roi : il reconnaît d'emblée la supériorité du loup. Celui-ci, au contraire, le tutoie avec mépris. L'opposition du vouvoiement et du tutoiement traduit ainsi un rapport de force que le récit ne fera que confirmer. »",
              "Deuxième analyse (les accusations) : « De plus, le loup multiplie les griefs : l'eau troublée, la médisance de l'an passé, puis la faute du frère et des siens. Cette succession d'accusations, qui s'élargit sans cesse, révèle qu'il ne cherche pas la vérité mais un prétexte. »",
              "Troisième analyse (les réponses) : « L'agneau, pourtant, répond à chaque fois par un argument logique et vérifiable : il boit plus bas que le loup, il n'était pas né. Mais la justesse de ses réponses ne sert à rien, puisque le loup change aussitôt d'accusation : la raison du faible est impuissante face à la force. »",
              "Phrase de bilan : « Le dialogue n'a donc que l'apparence d'un échange : il met en scène un rapport de domination qui annonce l'issue fatale et prépare la portée critique de la fable. »",
              "Réponse : un paragraphe complet, avec une phrase d'idée, trois analyses reliées par des connecteurs (de plus, pourtant, mais) et une phrase de bilan.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici le poème étudié dans une leçon précédente (écrit pour l'exercice) : « Petit ruisseau qui vas sans cesse, / Tu fuis toujours et ne reviens, / Et comme toi notre jeunesse / S'écoule et ne garde aucun bien. // Mais l'onde, au printemps, est nouvelle, / Et chaque avril rend ses couleurs ; / Nous seuls, quand la saison est belle, / Ne retrouvons jamais nos fleurs. » Corrigez ces phrases d'élèves : a) « Le poète dit que la jeunesse s'écoule et ne garde aucun bien. » b) « Le poète affirme que les hommes “ne retrouvent jamais leurs fleurs”. » c) « Il y a une antithèse. »",
              hint: "Pour chaque phrase, demandez-vous s'il manque la citation exacte, le nom du procédé ou l'interprétation.",
              solution: [
                "a) Défaut : c'est une paraphrase, sans citation ni procédé. Correction : « La comparaison “comme toi notre jeunesse / S'écoule” (v. 3-4) assimile la jeunesse à l'eau du ruisseau : elle passe sans retour, et le verbe “s'écoule”, placé au début du vers, mime ce mouvement continu. »",
                "b) Défaut : la citation est inexacte, car le texte dit « Ne retrouvons jamais nos fleurs ». Correction : « Le poète constate que les hommes ne retrouvent “jamais [leurs] fleurs” (v. 8) » ; les crochets signalent la modification, ou bien l'on cite exactement : « Nous seuls [...] / Ne retrouvons jamais nos fleurs ».",
                "c) Défaut : le procédé est nommé, mais sans citation ni interprétation. Correction : « L'antithèse entre la nature, qui renaît puisque “chaque avril rend ses couleurs” (v. 6), et l'homme, qui ne retrouve “jamais” sa jeunesse (v. 8), oppose le temps cyclique des saisons au temps sans retour de la vie humaine. »",
                "Résultat : chaque phrase corrigée cite exactement, nomme un procédé et l'interprète.",
              ],
            },
            {
              level: 2,
              statement: "À partir du texte d'entraînement du marchand (le marchand qui « comptait » les barques et « ne regardait jamais l'eau », qui monte sur sa terrasse « ses coffres, puis ses tapis, puis ses lampes d'or », et qui, à la fin, assis sur ses trésors, « seul », « regardait enfin le fleuve »), rédigez une analyse complète (citer, nommer, interpréter) pour chacun de ces trois éléments : a) la gradation ; b) l'adjectif « seul » ; c) la chute.",
              hint: "Pour chaque élément, écrivez une ou deux phrases qui contiennent obligatoirement une citation entre guillemets, le nom du procédé et un verbe d'interprétation.",
              solution: [
                "a) « La gradation “ses coffres, puis ses tapis, puis ses lampes d'or” suit un ordre de valeur croissante, souligné par la répétition de “puis” : alors que l'eau monte, le marchand ne pense qu'à sauver des objets de plus en plus précieux, ce qui révèle une obsession aveugle pour la richesse. »",
                "b) « L'adjectif “seul”, isolé entre deux virgules, est mis en relief : il rappelle par contraste les voisins partis avec leurs enfants et traduit le prix de l'avarice, qui laisse l'homme sans aucun lien humain au moment du danger. »",
                "c) « La chute “il regardait enfin le fleuve” répond à la phrase “Il ne regardait jamais l'eau” : l'opposition des adverbes “jamais” et “enfin” souligne que le marchand ne découvre la réalité qu'au moment où elle va l'engloutir, ce qui donne au récit la valeur d'une leçon. »",
                "Résultat : trois analyses complètes, chacune avec une citation, un procédé nommé (gradation, mise en relief, opposition) et une interprétation propre au texte.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Rédigez le paragraphe correspondant à la sous-partie « une accumulation d'antithèses » du commentaire du sonnet VIII de Louise Labé (Euvres, 1555). Éléments du texte utilisables : le premier vers commence par « Je vis, je meurs » et se poursuit par « je me brûle et me noie » ; un autre vers associe la chaleur extrême et le froid (« J'ai chaud extrême en endurant froidure ») ; plus loin, la locutrice dit qu'elle rit et larmoie, puis qu'elle sèche et verdoie ; la tradition de ces antithèses remonte à Pétrarque.",
              hint: "Construisez le paragraphe en trois temps (idée, analyses, bilan), regroupez les antithèses selon ce qu'elles opposent (la vie et la mort, les éléments, les émotions, la nature) et n'oubliez pas de les relier à la tradition pétrarquiste.",
              solution: [
                "Phrase d'idée : « Dès les quatrains, la locutrice se décrit à travers une accumulation de contraires qui traduit le désordre de la passion. »",
                "Première analyse : « Le poème s'ouvre sur une antithèse frappante, “Je vis, je meurs”, renforcée par la juxtaposition des deux verbes sans liaison : la vie et la mort, d'ordinaire successives, sont ici simultanées. La suite du vers, “je me brûle et me noie”, oppose le feu et l'eau : la passion fait éprouver en même temps deux souffrances incompatibles. »",
                "Deuxième analyse : « Cette logique se poursuit avec l'opposition du chaud et du froid, “J'ai chaud extrême en endurant froidure”, puis s'étend aux émotions (rire et larmoyer) et à la nature (sécher et verdoyer). La variété des domaines convoqués, le corps, les sentiments, le monde végétal, montre que la passion envahit tout l'être. »",
                "Troisième analyse : « Ces antithèses reprennent un code hérité de Pétrarque, qui disait par les contraires les contradictions de l'amour ; mais Louise Labé les fait entendre par une voix féminine et les resserre, presque à chaque vers, dans un rythme binaire qui fait alterner les contraires sans repos. »",
                "Phrase de bilan : « L'accumulation des antithèses ne relève donc pas d'un simple jeu rhétorique : elle exprime un état de déchirement permanent, qui prépare la révélation de sa cause, l'Amour, dans les tercets. »",
                "Résultat : un paragraphe complet (idée, trois analyses reliées par des connecteurs, bilan) qui cite brièvement, nomme les procédés (antithèse, juxtaposition, rythme binaire) et les interprète.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la rédaction d'un paragraphe de commentaire.",
            items: [
              "Annoncer l'idée de la sous-partie",
              "Citer un passage bref du texte",
              "Nommer le procédé employé",
              "Interpréter l'effet et le sens du procédé",
              "Enchaîner une deuxième analyse grâce à un connecteur",
              "Conclure le paragraphe par une phrase de bilan",
            ],
          },
          quiz: [
            {
              q: "Comment signale-t-on une coupure dans une citation ?",
              options: ["Par une barre oblique /", "Par des parenthèses vides ( )", "Par un astérisque *", "Par des crochets [...]"],
              answer: 3,
              why: "Les points de suspension entre crochets [...] signalent que des mots ont été supprimés.",
            },
            {
              q: "Dans une citation de poème, que signale la barre oblique / ?",
              options: ["Le passage d'un vers au suivant", "Une coupure dans la citation", "Une erreur de l'élève", "Un changement obligatoire de strophe"],
              answer: 0,
              why: "La barre oblique remplace le retour à la ligne entre deux vers cités à la suite.",
            },
            {
              q: "Quelle phrase interprète vraiment un procédé ?",
              options: ["Il y a une gradation à la ligne 6.", "L'auteur utilise une gradation afin de captiver l'attention du lecteur.", "La gradation traduit une obsession croissante.", "Ce passage est très bien écrit."],
              answer: 2,
              why: "Elle dit ce que le procédé apporte au sens de ce texte précis, au lieu d'une formule passe-partout.",
            },
            {
              q: "À quel temps rédige-t-on un commentaire ?",
              options: ["Au présent", "Au passé simple", "Au futur", "À l'imparfait"],
              answer: 0,
              why: "Le commentaire, comme toute analyse, se rédige au présent.",
            },
            {
              q: "Que contient la phrase de bilan d'un paragraphe ?",
              options: ["Une nouvelle citation, longue et complète", "L'annonce du plan général", "Le rappel de l'idée démontrée", "Un avis personnel sur l'auteur"],
              answer: 2,
              why: "Elle rappelle ce que le paragraphe a démontré et le relie à la problématique.",
            },
          ],
          trap: "Faire de la paraphrase, c'est-à-dire redire le texte avec ses propres mots (« le poète dit que... ») au lieu de le citer et d'analyser un procédé, ou à l'inverse empiler des citations sans les commenter.",
          method: "Relisez chaque paragraphe en soulignant de trois couleurs les citations, les noms de procédés et les interprétations : s'il manque une couleur dans une analyse, elle est incomplète.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'commentaire-intro-conclusion',
          title: "Rédiger l'introduction et la conclusion d'un commentaire",
          minutes: 30,
          objectives: [
            "Rédiger une introduction de commentaire en cinq étapes : amorce, présentation, situation, problématique, annonce du plan.",
            "Rédiger une conclusion qui répond à la problématique et peut s'ouvrir sur un autre texte.",
            "Rédiger une transition entre deux parties du développement.",
            "Présenter une copie selon les usages : alinéas, lignes sautées, titres d'œuvres soulignés.",
          ],
          course: [
            {
              heading: "Le rôle de l'introduction",
              paragraphs: [
                "L'introduction est la première chose que lit le correcteur : elle doit montrer en quelques lignes que vous avez compris le texte et que votre commentaire va répondre à une question précise selon un ordre clair. Elle forme un seul paragraphe, d'une dizaine de lignes environ, et se rédige entièrement au brouillon, une fois le plan établi.",
                "Elle suit cinq étapes, qui s'enchaînent sans titres ni retours à la ligne. Aucune ne doit être sacrifiée : une introduction sans problématique ou sans annonce du plan laisse le lecteur sans repères pour la suite du devoir.",
              ],
            },
            {
              heading: "Les cinq étapes de l'introduction",
              paragraphs: [
                "L'amorce situe le texte dans un contexte qui éclaire sa lecture : un mouvement littéraire (la Pléiade, le classicisme), un genre (la fable, le sonnet), un moment historique, un thème. Elle doit mener naturellement au texte. Évitez les formules creuses et universelles comme « De tout temps, les hommes... » ou « Depuis la nuit des temps... », qui ne disent rien.",
                "La présentation donne l'auteur, le titre de l'œuvre (souligné dans une copie manuscrite), la date et le genre. La situation et la description du passage indiquent où il se place (dans le recueil, dans l'œuvre) et ce qu'il fait, en une ou deux phrases, sans paraphrase détaillée ; on peut y signaler ses mouvements.",
                "Viennent ensuite la problématique, formulée en interrogation directe (« Comment... ? ») ou indirecte (« Nous nous demanderons comment... »), puis l'annonce du plan, qui énonce clairement les parties dans l'ordre : « Nous verrons d'abord que..., puis que... ». L'annonce doit reprendre fidèlement les idées des parties.",
              ],
              box: { label: "À retenir", text: "Introduction en un paragraphe : 1) amorce (contexte qui mène au texte) ; 2) présentation (auteur, œuvre, date, genre) ; 3) situation et description du passage ; 4) problématique ; 5) annonce du plan." },
            },
            {
              heading: "La conclusion",
              paragraphs: [
                "La conclusion comporte deux temps. Le bilan reprend les acquis de chaque partie, sans les recopier, et apporte une réponse nette à la problématique : c'est l'étape essentielle. Elle n'introduit aucune analyse nouvelle et ne cite plus le texte longuement.",
                "L'ouverture, facultative, élargit la réflexion par un rapprochement précis et justifié : un autre texte du même auteur, une œuvre qui traite le même thème autrement, une autre forme d'art. Une ouverture plaquée ou vague (« Ce thème est toujours d'actualité ») affaiblit la fin du devoir : mieux vaut pas d'ouverture qu'une ouverture artificielle.",
              ],
              box: { label: "Règle", text: "Conclusion : 1) bilan des parties et réponse claire à la problématique ; 2) ouverture facultative, précise et justifiée. Aucune analyse nouvelle." },
            },
            {
              heading: "Les transitions et la présentation de la copie",
              paragraphs: [
                "Entre deux parties, une transition de une à trois phrases fait le bilan de la partie qui s'achève et annonce la suivante, en montrant le lien logique entre elles : « Ce récit vif n'a pourtant rien d'un simple divertissement : sous l'apparence d'un dialogue, c'est un véritable procès qui se joue. »",
                "La présentation rend le plan visible sans titres : on saute une ou deux lignes après l'introduction, entre les parties et avant la conclusion ; chaque sous-partie commence par un alinéa. Les titres d'œuvres sont soulignés à la main (en italique à l'ordinateur), les titres de poèmes placés entre guillemets, et les citations entre guillemets.",
              ],
            },
          ],
          keyPoints: [
            "Introduction : amorce, présentation, situation du passage, problématique, annonce du plan, en un seul paragraphe.",
            "Pas d'amorce creuse (« De tout temps... ») : un contexte précis qui mène au texte.",
            "Conclusion : bilan des parties et réponse nette à la problématique, puis ouverture facultative et précise.",
            "Transition : bilan de la partie achevée et annonce de la suivante.",
            "Présentation : lignes sautées entre les grandes étapes, alinéas, titres d'œuvres soulignés, poèmes entre guillemets.",
          ],
          example: {
            statement: "Rédigez l'introduction du commentaire de « Le Loup et l'Agneau » de La Fontaine (Fables, livre I, 10, premier recueil publié en 1668), avec la problématique « comment ce bref récit animalier devient-il une démonstration ironique de l'injustice du pouvoir ? » et le plan suivant : I. Un récit vif et théâtralisé ; II. Une démonstration de la loi du plus fort.",
            solution: [
              "Amorce : « Au XVIIe siècle, l'esthétique classique assigne à la littérature le double but de plaire et d'instruire ; la fable, court récit suivi d'une leçon, réalise pleinement cet idéal. »",
              "Présentation : « Jean de La Fontaine publie en 1668 le premier recueil de ses Fables, dédié au Dauphin, dans lequel il reprend des sujets empruntés à Ésope et à Phèdre. »",
              "Situation et description : « “Le Loup et l'Agneau”, dixième fable du livre I, s'ouvre sur une morale qui affirme que la raison du plus fort est toujours la meilleure, avant de raconter la rencontre d'un loup affamé et d'un agneau qui se désaltère, et le dialogue qui les oppose jusqu'à la mort de l'agneau. »",
              "Problématique : « Nous nous demanderons comment ce bref récit animalier devient une démonstration ironique de l'injustice du pouvoir. »",
              "Annonce du plan : « Nous verrons d'abord que La Fontaine compose un récit vif et théâtralisé, puis que ce récit démontre la loi du plus fort pour mieux la dénoncer. »",
              "Réponse : ces cinq phrases, enchaînées en un seul paragraphe, forment l'introduction ; on notera que la problématique au style indirect ne prend pas de point d'interrogation.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici une introduction d'élève pour le commentaire du sonnet de Du Bellay « Heureux qui, comme Ulysse, a fait un beau voyage » : « De tout temps, les hommes ont rêvé de voyages. Joachim Du Bellay, membre de la Pléiade, séjourne à Rome de 1553 à 1557 et publie en 1558 Les Regrets, recueil de sonnets en alexandrins. Dans ce sonnet, le poète, loin de la France, envie les héros antiques revenus chez eux et affirme sa préférence pour son village angevin. Nous nous demanderons en quoi ce sonnet fait de la nostalgie de l'exilé un éloge de la petite patrie. Nous verrons d'abord comment le poète convoque les modèles antiques pour dire son regret, puis comment il oppose la simplicité de l'Anjou à la grandeur de Rome. » Identifiez les cinq étapes, repérez l'étape ratée et réécrivez-la.",
              hint: "Découpez l'introduction phrase par phrase et attribuez à chacune une des cinq étapes ; l'étape ratée est celle qui pourrait servir pour n'importe quel texte.",
              solution: [
                "Amorce : « De tout temps, les hommes ont rêvé de voyages. » Présentation : la phrase sur Du Bellay, la Pléiade, Rome et Les Regrets (1558).",
                "Situation et description : « Dans ce sonnet, le poète, loin de la France, envie les héros antiques... ». Problématique : « Nous nous demanderons en quoi... ». Annonce du plan : « Nous verrons d'abord..., puis... ».",
                "Étape ratée : l'amorce, formule creuse et universelle (« De tout temps... ») qui ne dit rien du contexte et pourrait introduire n'importe quel texte sur le voyage.",
                "Réécriture : « Au XVIe siècle, les poètes de la Pléiade veulent égaler les Anciens en imitant leurs œuvres ; Du Bellay, pourtant, se sert de ces modèles prestigieux pour exprimer une souffrance très personnelle, celle de l'exil. »",
                "Résultat : les cinq étapes sont présentes, mais l'amorce doit être remplacée par un contexte précis (la Pléiade et l'imitation des Anciens) qui mène naturellement au sonnet.",
              ],
            },
            {
              level: 2,
              statement: "Rédigez la conclusion du commentaire de « Le Loup et l'Agneau », dont le plan est : I. Un récit vif et théâtralisé (une mise en scène rapide ; un dialogue inégal) ; II. Une démonstration de la loi du plus fort (un procès truqué ; une morale ironique). La problématique était : comment ce bref récit animalier devient-il une démonstration ironique de l'injustice du pouvoir ? Proposez une ouverture précise.",
              hint: "Commencez par rappeler les acquis de la partie I, puis ceux de la partie II, avant de répondre en une phrase à la problématique ; cherchez l'ouverture dans une autre fable qui dénonce une justice injuste.",
              solution: [
                "Bilan de la partie I : « La Fontaine compose un récit bref et vivant, dont la morale initiale crée l'attente et dont le dialogue, marqué par l'opposition du tutoiement et du vouvoiement, met en scène un rapport de force. »",
                "Bilan de la partie II : « Ce dialogue tourne au procès truqué : la logique de l'agneau est impuissante face à la mauvaise foi du loup, et l'expression “sans autre forme de procès” révèle une parodie de justice. »",
                "Réponse à la problématique : « La fable démontre ainsi la loi du plus fort pour mieux la dénoncer : la morale, loin d'approuver cette loi, la constate avec une ironie amère, et le récit animalier devient une critique de tout pouvoir qui se donne l'apparence du droit. »",
                "Ouverture : « On retrouve cette dénonciation dans “Les Animaux malades de la peste” (livre VII), où l'Âne est condamné pour une faute minime tandis que le Lion et les puissants sont absous, au point que la morale affirme que les jugements de cour rendent blanc ou noir selon que l'on est puissant ou misérable. »",
                "Résultat : une conclusion en un paragraphe, qui fait le bilan, répond clairement à la problématique et s'ouvre sur une autre fable, rapprochée pour une raison précise.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Rédigez l'introduction et la transition entre les deux parties du commentaire du sonnet VIII de Louise Labé (« Je vis, je meurs »). Données : Louise Labé (vers 1524-1566), poétesse lyonnaise, publie ses Euvres en 1555, qui comprennent vingt-quatre sonnets ; le sonnet, en décasyllabes, accumule les contraires dans les quatrains, puis révèle dans les tercets que l'Amour mène la locutrice de façon inconstante, jusqu'à la ramener à son « premier malheur ». Problématique : comment Louise Labé fait-elle de l'accumulation des contraires l'expression d'une passion qui enferme la locutrice dans un cycle sans fin ? Plan : I. Un « je » déchiré par la passion ; II. Une passion subie, sous l'empire d'Amour.",
              hint: "Pour l'amorce, partez de la tradition pétrarquiste et du milieu lyonnais ; pour la transition, résumez la partie I en une phrase, puis posez la question à laquelle répond la partie II.",
              solution: [
                "Amorce : « Au XVIe siècle, la poésie amoureuse française s'inspire de Pétrarque, qui avait chanté les contradictions de l'amour ; à Lyon, ville ouverte sur l'Italie, cette tradition est reprise avec une intensité nouvelle. »",
                "Présentation : « Louise Labé publie en 1555 ses Euvres, qui réunissent notamment vingt-quatre sonnets amoureux, fait rare pour une femme à cette époque. »",
                "Situation et description : « Dans le huitième sonnet, en décasyllabes, la locutrice décrit dans les quatrains les états contradictoires que lui impose la passion, avant de révéler, dans les tercets, que c'est l'Amour qui la mène et la ramène sans cesse à son malheur. »",
                "Problématique et annonce : « Nous nous demanderons comment Louise Labé fait de l'accumulation des contraires l'expression d'une passion qui l'enferme dans un cycle sans fin. Nous montrerons d'abord que le sonnet dessine un “je” déchiré par la passion, puis que cette passion est subie, sous l'empire d'un Amour tout-puissant. »",
                "Transition entre I et II : « Le “je” du sonnet apparaît ainsi écartelé entre des états contraires qu'il ne parvient pas à concilier. Mais d'où vient ce désordre ? Les tercets en révèlent la cause : la locutrice n'est pas maîtresse de ses sentiments, elle est soumise à la volonté capricieuse de l'Amour. »",
                "Résultat : une introduction en cinq étapes, en un paragraphe, et une transition qui fait le bilan de la partie I et annonce la partie II par une question.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : l'introduction, la conclusion et la présentation du commentaire.",
            statements: [
              { text: "L'introduction se rédige en un seul paragraphe.", true: true, why: "Ses cinq étapes s'enchaînent sans retour à la ligne." },
              { text: "On peut commencer l'amorce par « De tout temps, les hommes... ».", true: false, why: "C'est une formule creuse : l'amorce doit être un contexte précis qui mène au texte." },
              { text: "La problématique figure dans l'introduction.", true: true, why: "Elle est formulée avant l'annonce du plan, qui y répond." },
              { text: "L'ouverture est une étape obligatoire de la conclusion.", true: false, why: "Elle est facultative ; mieux vaut pas d'ouverture qu'une ouverture plaquée." },
              { text: "La conclusion peut apporter une analyse nouvelle du texte.", true: false, why: "La conclusion fait le bilan et répond à la problématique ; les analyses appartiennent au développement." },
              { text: "Une transition fait le bilan d'une partie et annonce la suivante.", true: true, why: "Elle montre le lien logique entre deux parties." },
              { text: "Dans une copie manuscrite, on souligne le titre d'une œuvre.", true: true, why: "Le soulignement remplace l'italique de l'imprimé ; les titres de poèmes se mettent entre guillemets." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la première étape de l'introduction ?",
              options: ["L'amorce", "La problématique", "L'annonce du plan", "L'ouverture"],
              answer: 0,
              why: "L'amorce situe le texte dans un contexte et mène à sa présentation.",
            },
            {
              q: "Où place-t-on l'ouverture ?",
              options: ["Au début de l'introduction", "Entre deux parties", "Dans chaque paragraphe", "À la fin de la conclusion"],
              answer: 3,
              why: "L'ouverture, facultative, termine la conclusion par un rapprochement précis.",
            },
            {
              q: "Quelle amorce convient le mieux à un sonnet de Du Bellay ?",
              options: ["Ce texte est très intéressant et bien écrit.", "Depuis la nuit des temps, les êtres humains ont toujours éprouvé le besoin de voyager loin de chez eux.", "Au XVIe siècle, la Pléiade veut rivaliser avec les poètes antiques.", "Nous allons commenter un poème."],
              answer: 2,
              why: "Elle donne un contexte littéraire précis, qui mène au poème ; les autres sont creuses ou maladroites.",
            },
            {
              q: "Que doit faire avant tout la conclusion ?",
              options: ["Résumer le texte commenté depuis le début", "Citer longuement le texte", "Annoncer un nouveau plan", "Répondre à la problématique"],
              answer: 3,
              why: "Le bilan des parties doit déboucher sur une réponse nette à la question posée dans l'introduction.",
            },
            {
              q: "Que contient une transition ?",
              options: ["Une citation nouvelle et longue du texte", "Le bilan et l'annonce de la suite", "L'ouverture vers une autre œuvre du même auteur"],
              answer: 1,
              why: "La transition résume la partie qui s'achève et annonce la suivante.",
            },
          ],
          trap: "Écrire une amorce creuse et universelle (« De tout temps, les hommes... ») ou une ouverture plaquée sans rapport précis avec le texte : ces formules vides donnent une mauvaise impression dès la première ligne et à la dernière.",
          method: "Rédigez l'introduction entière au brouillon avant le développement, mais la conclusion seulement après : relisez alors les phrases de bilan de chaque paragraphe, elles fournissent la matière du bilan final.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'dissertation-initiation',
          title: "S'initier à la dissertation sur une œuvre",
          minutes: 35,
          objectives: [
            "Analyser un sujet de dissertation : mots clés, présupposés, reformulation.",
            "Formuler une problématique et choisir un type de plan : dialectique, thématique ou analytique.",
            "Construire un paragraphe argumentatif : argument, exemple précis tiré de l'œuvre, analyse.",
            "Distinguer la dissertation du commentaire.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une dissertation ?",
              paragraphs: [
                "La dissertation est une réflexion organisée et argumentée qui répond à une question portant sur la littérature. En seconde, elle porte sur une œuvre étudiée en classe ; à l'épreuve anticipée de français, en fin de Première, elle porte sur l'une des œuvres au programme et sur son parcours associé. C'est l'autre sujet au choix de l'écrit, à côté du commentaire.",
                "Elle se distingue du commentaire. Le commentaire analyse un texte précis qu'on a sous les yeux ; la dissertation discute une question, en s'appuyant sur des exemples tirés de toute l'œuvre, du parcours et de votre culture. Dans le commentaire, les parties sont des axes de lecture ; dans la dissertation, ce sont des arguments qui répondent au sujet. La structure reste la même : introduction, développement en deux ou trois parties, conclusion.",
              ],
              box: { label: "Définition", text: "Dissertation : réflexion argumentée qui répond à une question sur une œuvre ou un genre, en deux ou trois parties, chacune défendant une idée appuyée sur des exemples précis et analysés." },
            },
            {
              heading: "Analyser le sujet",
              paragraphs: [
                "Le sujet prend souvent la forme d'une question (« Les Fables de La Fontaine ne sont-elles que des leçons de morale ? »), parfois d'une citation ou d'une affirmation à discuter. Recopiez-le au brouillon et soulignez les mots clés. Définissez chacun : qu'est-ce qu'une « leçon de morale » ? Repérez les termes qui orientent le sujet : ici, la restriction « ne... que » invite à se demander si les Fables sont seulement cela, ou aussi autre chose.",
                "Cherchez ensuite les présupposés, c'est-à-dire ce que la question admet sans le dire : elle suppose que les Fables contiennent des leçons de morale, ce qui n'est pas discuté. Reformulez enfin le sujet avec vos propres mots (« Les Fables ont-elles pour seul but d'enseigner une morale, ou cherchent-elles aussi à plaire, à critiquer, à faire réfléchir ? ») : cette reformulation fait apparaître le problème.",
              ],
              box: { label: "À retenir", text: "Analyser le sujet : 1) souligner et définir les mots clés ; 2) repérer les termes qui orientent (restriction, négation, superlatif) ; 3) dégager les présupposés ; 4) reformuler pour faire apparaître le problème." },
            },
            {
              heading: "La problématique et les types de plan",
              paragraphs: [
                "La problématique formule la tension contenue dans le sujet. Elle ne se contente pas de recopier la question : elle en dégage l'enjeu, par exemple « Si les Fables délivrent bien des leçons, ne doivent-elles pas leur force à un art du récit et à une portée critique qui dépassent la simple morale ? »",
                "Le choix du plan dépend du sujet. Le plan dialectique convient aux questions fermées (« ... est-il seulement... ? », « ... faut-il... ? ») : une première partie examine la thèse proposée, une deuxième la nuance ou montre ses limites, une troisième dépasse l'opposition. Le plan thématique convient aux questions ouvertes (« Comment... ? », « Quels... ? ») : chaque partie examine un aspect de la question. Le plan analytique, plus rare, examine par exemple un phénomène, ses causes et ses conséquences.",
              ],
              box: { label: "Repère", text: "Plan dialectique : thèse, nuance ou antithèse, dépassement (questions fermées). Plan thématique : plusieurs aspects successifs (questions ouvertes). Plan analytique : phénomène, causes, conséquences." },
            },
            {
              heading: "Argumenter avec l'œuvre",
              paragraphs: [
                "Chaque sous-partie forme un paragraphe argumentatif : une phrase qui énonce l'argument, un exemple précis tiré de l'œuvre, l'analyse de cet exemple, et une phrase qui relie le tout au sujet. Un exemple précis donne le titre (par exemple « Le Corbeau et le Renard », livre I, 2), la situation, et si possible une citation courte ; il est ensuite analysé, c'est-à-dire expliqué au service de l'argument.",
                "Les erreurs les plus fréquentes sont de raconter l'œuvre au lieu de répondre à la question, de réciter le cours sans rapport avec le sujet, ou d'accumuler des exemples sans les analyser. Pour éviter cela, préparez pendant l'année un carnet d'exemples classés par thèmes, et, le jour du devoir, vérifiez que chaque paragraphe répond bien au sujet tel qu'il est posé.",
              ],
              box: { label: "Règle", text: "Paragraphe de dissertation : argument, exemple précis (titre, situation, courte citation), analyse de l'exemple, lien avec le sujet. Un exemple non analysé ne prouve rien." },
            },
          ],
          keyPoints: [
            "Dissertation : répondre à une question sur une œuvre par des arguments ; commentaire : analyser un texte précis.",
            "Analyser le sujet : mots clés, termes qui orientent (« ne... que », « seulement »), présupposés, reformulation.",
            "Problématique : la tension du sujet, formulée en une question.",
            "Plan dialectique pour une question fermée, thématique pour une question ouverte.",
            "Paragraphe : argument, exemple précis, analyse, lien avec le sujet.",
            "À l'épreuve anticipée de français : dissertation sur une œuvre au programme et son parcours associé.",
          ],
          example: {
            statement: "Sujet : « Les Fables de La Fontaine ne sont-elles que des leçons de morale ? » Analysez le sujet, formulez une problématique et proposez un plan dialectique en trois parties, avec un exemple pour chacune.",
            solution: [
              "Mots clés : « Fables » (les douze livres publiés de 1668 à 1694), « leçons de morale » (enseignements sur la conduite à tenir), et surtout la restriction « ne... que », qui demande si les Fables se réduisent à cela.",
              "Présupposé : les Fables contiennent des leçons de morale. Reformulation : les Fables ont-elles pour seul but d'instruire, ou cherchent-elles aussi à plaire et à critiquer ?",
              "Problématique : si les Fables délivrent bien des leçons, ne doivent-elles pas leur force à un art du récit et à une portée critique qui dépassent la simple morale ?",
              "Partie I, des apologues qui instruisent : la fable associe un récit et une morale, le « corps » et l'« âme » selon La Fontaine ; le premier recueil est dédié au Dauphin, pour son éducation. Exemple : « Le Corbeau et le Renard » (I, 2), où la leçon contre la flatterie est énoncée par le renard lui-même.",
              "Partie II, mais aussi des récits qui plaisent et des satires qui critiquent : vers mêlés, dialogues, humour ; satire de la cour et de la justice. Exemple : « Les Animaux malades de la peste » (VII, 1), où l'Âne est condamné pour une faute minime tandis que le Lion est absous.",
              "Partie III, instruire en plaisant et faire réfléchir : le plaisir du récit est le moyen de la leçon (« plaire et instruire »), et la morale, souvent ambiguë, laisse le lecteur juger. Exemple : « La Cigale et la Fourmi » (I, 1), sans morale explicite, qui invite à juger aussi bien l'imprévoyance de la cigale que la dureté de la fourmi.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun de ces sujets, soulignez les mots clés, dites si la question est fermée ou ouverte, et indiquez le type de plan qui convient : a) « Les Fables de La Fontaine ne sont-elles que des leçons de morale ? » b) « Comment La Fontaine rend-il ses récits vivants ? » c) « La poésie de Ronsard est-elle seulement une poésie amoureuse ? » d) « Quels visages du pouvoir les Fables de La Fontaine dessinent-elles ? »",
              hint: "Une question à laquelle on peut d'abord répondre par oui ou non appelle un plan dialectique ; une question introduite par « Comment » ou « Quels » appelle un plan thématique.",
              solution: [
                "a) Mots clés : « Fables », « leçons de morale », « ne... que ». Question fermée, avec une restriction : plan dialectique (oui, ce sont des leçons ; mais pas seulement ; dépassement).",
                "b) Mots clés : « Comment », « rendre vivants », « récits ». Question ouverte : plan thématique (par exemple le dialogue, le rythme des vers mêlés, l'humour et les interventions du narrateur).",
                "c) Mots clés : « poésie de Ronsard », « seulement », « amoureuse ». Question fermée, avec une restriction : plan dialectique (une poésie de l'amour ; mais aussi une méditation sur le temps et sur le pouvoir du poète ; dépassement).",
                "d) Mots clés : « Quels visages », « pouvoir », « Fables ». Question ouverte : plan thématique (par exemple le pouvoir du roi, le pouvoir de la force, le pouvoir de la parole et de la ruse).",
                "Résultat : a) et c) appellent un plan dialectique, b) et d) un plan thématique.",
              ],
            },
            {
              level: 2,
              statement: "Rédigez le paragraphe argumentatif qui développe l'argument suivant, dans une dissertation sur les Fables de La Fontaine : « La Fontaine dénonce la loi du plus fort. » Utilisez deux exemples : « Le Loup et l'Agneau » (I, 10), où le loup dévore l'agneau après l'avoir accusé sans raison, et « Les Animaux malades de la peste » (VII, 1), où l'Âne est condamné à la place des puissants.",
              hint: "Suivez l'ordre : argument, premier exemple et son analyse, second exemple et son analyse, phrase qui relie l'argument au sujet.",
              solution: [
                "Argument : « Loin de se contenter de leçons de prudence, La Fontaine dénonce la loi du plus fort, qui gouverne les rapports entre les puissants et les faibles. »",
                "Premier exemple et analyse : « Dans “Le Loup et l'Agneau” (I, 10), le loup accuse l'agneau de fautes imaginaires, et chaque réponse logique de sa victime le pousse seulement à changer d'accusation. Le dénouement, où il l'emporte et le mange “sans autre forme de procès”, révèle que le dialogue n'était qu'une parodie de justice : la morale initiale, selon laquelle la raison du plus fort est toujours la meilleure, est un constat ironique et amer. »",
                "Second exemple et analyse : « Dans “Les Animaux malades de la peste” (VII, 1), le Lion, qui avoue avoir dévoré des moutons et même le berger, est absous grâce aux flatteries du Renard, tandis que l'Âne, coupable d'avoir brouté un peu d'herbe, est condamné. La morale généralise la leçon : les jugements de cour dépendent du rang de l'accusé, puissant ou misérable. »",
                "Lien avec le sujet : « Ces fables ne délivrent donc pas une morale à suivre, mais une vérité amère sur la société : elles invitent le lecteur à reconnaître l'injustice plutôt qu'à l'accepter. »",
                "Résultat : un paragraphe argumentatif complet, avec un argument, deux exemples précis analysés et un lien explicite avec la question posée.",
              ],
            },
            {
              level: 3,
              statement: "Type bac (dissertation). Sujet : « Selon vous, les Fables de La Fontaine s'adressent-elles seulement aux enfants ? » Analysez le sujet, formulez une problématique et construisez un plan détaillé en trois parties, avec deux sous-parties par partie et un exemple précis pour chaque sous-partie.",
              hint: "Rappelez-vous que le premier recueil est dédié au Dauphin, alors âgé de six ans, mais pensez aussi à la satire de la cour et de la justice, et au double but « plaire et instruire ».",
              solution: [
                "Analyse : la restriction « seulement » oriente le sujet ; le présupposé est que les Fables s'adressent au moins aux enfants. Reformulation : les Fables sont-elles une littérature enfantine, ou une œuvre qui parle aussi, et peut-être surtout, aux adultes ? Problématique : comment des récits accessibles aux enfants peuvent-ils porter une réflexion qui s'adresse aux adultes ?",
                "Partie I, des récits accessibles aux enfants. 1) Une œuvre conçue pour l'éducation : le premier recueil (1668) est dédié au Dauphin, fils de Louis XIV, alors âgé de six ans ; La Fontaine dit s'y servir d'animaux pour instruire les hommes. 2) Des histoires simples et mémorables : animaux familiers, récits brefs, morales faciles à retenir, comme celle du « Lièvre et la Tortue » (VI, 10) sur l'utilité de partir à temps plutôt que de courir.",
                "Partie II, mais une critique de la société qui vise les adultes. 1) La satire du pouvoir et de la justice : « Les Animaux malades de la peste » (VII, 1) dénonce une justice qui épargne les puissants et condamne les faibles. 2) Une lucidité amère sur les rapports humains : « Le Loup et l'Agneau » (I, 10) montre la force qui se donne l'apparence du droit, ce qu'un enfant ne peut pleinement comprendre.",
                "Partie III, une œuvre pour tous les âges, qui instruit en plaisant. 1) Plusieurs niveaux de lecture : « Le Corbeau et le Renard » (I, 2) amuse l'enfant par sa ruse et apprend à l'adulte à se méfier des flatteurs de cour. 2) Une morale qui fait réfléchir : « La Cigale et la Fourmi » (I, 1), sans morale explicite, laisse le lecteur juger, ce qui fait des Fables une école du jugement, conforme à l'idéal classique de plaire et instruire.",
                "Vérification : le plan est dialectique (thèse, nuance, dépassement), chaque partie répond au sujet, et chaque sous-partie s'appuie sur une fable précise.",
                "Résultat : les Fables ne s'adressent pas seulement aux enfants ; elles proposent plusieurs niveaux de lecture et font de chaque lecteur, à tout âge, un juge du monde qu'elles représentent.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion de la dissertation à sa définition.",
            pairs: [
              { left: "Dissertation", right: "Réflexion argumentée qui répond à une question littéraire" },
              { left: "Présupposé", right: "Idée admise implicitement par la formulation du sujet" },
              { left: "Plan dialectique", right: "Thèse, nuance ou antithèse, puis dépassement" },
              { left: "Plan thématique", right: "Examen successif de plusieurs aspects de la question" },
              { left: "Exemple", right: "Référence précise à l'œuvre, analysée au service de l'argument" },
              { left: "Problématique", right: "Question qui formule la tension contenue dans le sujet" },
            ],
          },
          quiz: [
            {
              q: "En quoi la dissertation diffère-t-elle du commentaire ?",
              options: ["Elle analyse un seul extrait, ligne à ligne", "Elle suit l'ordre du texte comme l'explication orale", "Elle discute une question sur toute une œuvre"],
              answer: 2,
              why: "Le commentaire analyse un texte précis ; la dissertation répond à une question en s'appuyant sur toute l'œuvre.",
            },
            {
              q: "Dans « Les Fables ne sont-elles que des leçons de morale ? », quel élément oriente le sujet ?",
              options: ["La restriction « ne... que »", "Le verbe « être » au présent", "Le pluriel du mot « Fables »", "L'article indéfini « des »"],
              answer: 0,
              why: "La restriction invite à se demander si les Fables sont seulement des leçons de morale, ou aussi autre chose.",
            },
            {
              q: "Quel plan convient à une question fermée du type « ... est-il seulement... ? » ?",
              options: ["Le plan thématique", "Le plan chronologique", "Le plan analytique", "Le plan dialectique"],
              answer: 3,
              why: "Une question fermée appelle l'examen d'une thèse, sa nuance, puis un dépassement.",
            },
            {
              q: "Qu'est-ce qu'un bon exemple dans une dissertation ?",
              options: ["Une référence précise et analysée", "Le résumé complet d'une fable entière, du début à la fin", "Une opinion personnelle forte", "Une citation sans commentaire"],
              answer: 0,
              why: "L'exemple doit être précis (titre, situation, citation courte) et analysé au service de l'argument.",
            },
            {
              q: "À l'épreuve anticipée de français, sur quoi porte la dissertation ?",
              options: ["Sur un texte inconnu, choisi par le jury", "Sur une question d'actualité de l'année", "Sur une œuvre au programme"],
              answer: 2,
              why: "La dissertation porte sur l'une des œuvres au programme et sur son parcours associé ; le texte inconnu relève du commentaire.",
            },
          ],
          trap: "Raconter l'œuvre ou réciter le cours au lieu de répondre à la question posée, ou accumuler des exemples sans les analyser : chaque partie doit défendre une idée qui répond au sujet, et chaque exemple doit être expliqué.",
          method: "Constituez pendant la lecture de l'œuvre un carnet d'exemples classés par thèmes (le pouvoir, la justice, la flatterie, l'art du récit), avec pour chacun le titre, la situation et une citation courte : c'est la réserve où vous puiserez le jour du devoir.",
        },
      ],
    },
  ],
}
