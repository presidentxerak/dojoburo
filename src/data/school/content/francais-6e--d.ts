import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'francais-6e',
  chapters: [
    {
      id: 'lexique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'formation-mots',
          title: 'Former des mots : radical, préfixe et suffixe',
          minutes: 25,
          objectives: [
            "Identifier le radical, le préfixe et le suffixe d'un mot dérivé.",
            "Former des mots dérivés à l'aide de préfixes et de suffixes.",
            "Déduire le sens d'un mot inconnu à partir de sa formation.",
          ],
          course: [
            {
              heading: "Un mot peut se découper en morceaux",
              paragraphs: [
                "Beaucoup de mots français sont construits comme des jeux de construction. Prenez le mot « jardin ». On peut lui ajouter des morceaux pour fabriquer d'autres mots : « jardinier » (la personne qui s'occupe du jardin), « jardinage » (l'activité), « jardinet » (un petit jardin). Tous ces mots gardent une partie commune, « jardin », qui porte le sens principal.",
                "Cette partie commune s'appelle le radical. Les morceaux que l'on ajoute s'appellent des affixes : le préfixe se place avant le radical, le suffixe se place après. Le mot obtenu est un mot dérivé. Le mot de départ, sans préfixe ni suffixe, est un mot simple. Ainsi « défaire » est formé du préfixe dé- et du radical « faire », et « lavable » du radical lav- et du suffixe -able.",
                "Pour les verbes, attention : la terminaison de l'infinitif (-er, -ir, -re) n'est pas un suffixe. Dans « chanter », le radical est chant- et -er est la terminaison. On forme « chanteur » en ajoutant le suffixe -eur au radical : chant + eur.",
              ],
              box: { label: "Définition", text: "Le radical est la partie du mot qui porte le sens principal. Le préfixe se place avant le radical, le suffixe après. Un mot formé avec un préfixe ou un suffixe est un mot dérivé : re + lire = relire ; jardin + ier = jardinier." },
            },
            {
              heading: "Les préfixes changent le sens du mot",
              paragraphs: [
                "Un préfixe modifie le sens du radical, mais il ne change pas la classe grammaticale du mot : « faire » et « refaire » sont tous les deux des verbes, « poli » et « impoli » sont tous les deux des adjectifs. Chaque préfixe a un sens que l'on peut apprendre : re- ou ré- signifie « de nouveau » (relire, réécrire), pré- signifie « avant » (préhistoire, prévoir), sous- signifie « en dessous » (sous-marin, souterrain).",
                "Plusieurs préfixes servent à former le contraire d'un mot : in- (inconnu), dé- ou dés- (défaire, désobéir), mal- ou mé- (malhonnête, mécontent). Le préfixe in- change de forme selon la lettre qui suit : il devient im- devant m, b et p (immobile, imbuvable, impossible), il- devant l (illisible) et ir- devant r (irréel, irrégulier).",
              ],
              box: { label: "Repère", text: "re- / ré- : de nouveau. pré- : avant. sous- : en dessous. sur- : au-dessus ou en excès (survoler, surcharger). anti- : contre (antivol). co- : avec (copilote). in- / im- / il- / ir-, dé- / dés-, mal- / mé- : le contraire." },
            },
            {
              heading: "Les suffixes changent le sens et souvent la classe",
              paragraphs: [
                "Un suffixe modifie le sens du radical et, très souvent, il change sa classe grammaticale. Avec un verbe, on peut former un nom (laver donne lavage, chanter donne chanteur) ou un adjectif (laver donne lavable). Avec un adjectif, on peut former un nom (gentil donne gentillesse, fier donne fierté) ou un adverbe (lent donne lentement).",
                "Certains suffixes ont un sens précis. Les suffixes -eur, -euse et -ier, -ière désignent souvent une personne qui fait une action ou un métier (nageur, fermier). Le suffixe -ier sert aussi à nommer des arbres fruitiers (pommier, cerisier). Les suffixes -ette, -et et -on indiquent une petite taille, ce sont des diminutifs (maisonnette, jardinet, chaton). Le suffixe -able ou -ible signifie « qui peut être » (lavable, lisible).",
                "L'adverbe en -ment se forme souvent sur l'adjectif au féminin : lente donne lentement, douce donne doucement, heureuse donne heureusement. Le radical peut aussi changer un peu d'orthographe : on écrit « beauté » à partir de « beau », et le e final de « large » disparaît dans « largeur ».",
              ],
              box: { label: "Règle", text: "Le préfixe ne change jamais la classe du mot. Le suffixe la change souvent : verbe vers nom (lavage), verbe vers adjectif (lavable), adjectif vers nom (fierté), adjectif vers adverbe (lentement)." },
            },
            {
              heading: "Comprendre un mot inconnu grâce à sa formation",
              paragraphs: [
                "Quand vous rencontrez un mot inconnu, essayez de le découper. Cherchez d'abord le radical, c'est-à-dire le mot que vous connaissez à l'intérieur. Repérez ensuite le préfixe et le suffixe, puis additionnez leurs sens. Par exemple, « inoxydable » se découpe en in- (pas), oxyd- (comme dans « oxyder », rouiller) et -able (qui peut être) : une casserole inoxydable est une casserole qui ne peut pas rouiller.",
                "Méfiez-vous des faux découpages : dans « reine » ou « image », il n'y a ni préfixe re-, ni préfixe im-. Si vous enlevez ces lettres, il reste « ine » ou « age », qui ne veulent rien dire. Un vrai découpage laisse toujours un radical qui a un sens en rapport avec le mot.",
                "Il existe enfin une autre façon de former des mots : la composition. On assemble alors deux mots qui existent déjà, parfois reliés par un trait d'union : « porte-monnaie », « chou-fleur », « arc-en-ciel ». Ce ne sont pas des mots dérivés, mais des mots composés.",
              ],
              box: { label: "À retenir", text: "Pour comprendre un mot inconnu : 1. trouver le radical ; 2. repérer le préfixe et le suffixe ; 3. additionner leurs sens ; 4. vérifier que le sens obtenu convient à la phrase." },
            },
          ],
          keyPoints: [
            "Le radical porte le sens principal du mot ; le préfixe se place avant, le suffixe après.",
            "Un mot formé avec un préfixe ou un suffixe est un mot dérivé : re + faire = refaire, chant + eur = chanteur.",
            "Le préfixe change le sens, jamais la classe du mot ; le suffixe change souvent la classe.",
            "in- devient im- devant m, b, p, il- devant l et ir- devant r : impossible, illisible, irréel.",
            "Suffixes utiles : -eur (celui qui fait), -able (qui peut être), -ette (petit), -ment (adverbe).",
            "Un mot composé assemble deux mots existants : porte-monnaie, chou-fleur.",
          ],
          example: {
            statement: "Découpez le mot « imbattable » en radical, préfixe et suffixe, puis expliquez son sens et sa classe grammaticale.",
            solution: [
              "Chercher le radical : à l'intérieur du mot, on reconnaît le verbe « battre ». Le radical est batt-.",
              "Repérer le préfixe : im- est placé avant le radical. C'est une forme du préfixe in-, qui exprime le contraire ; il s'écrit im- parce qu'il est suivi de la lettre b.",
              "Repérer le suffixe : -able est placé après le radical. Il signifie « qui peut être ».",
              "Additionner les sens : im (pas) + batt (battre) + able (qui peut être) = « qui ne peut pas être battu ».",
              "Trouver la classe : le suffixe -able a transformé le verbe « battre » en adjectif.",
              "Réponse : im | batt | able. « Imbattable » est un adjectif qui signifie « qu'on ne peut pas battre », par exemple « une équipe imbattable ».",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque mot, indiquez le préfixe ou le suffixe, puis le radical. a) relire ; b) jardinier ; c) impoli ; d) lavable ; e) chaton ; f) défaire.",
              hint: "Cherchez d'abord le mot simple que vous connaissez à l'intérieur de chaque mot, puis regardez ce qui a été ajouté avant ou après.",
              solution: [
                "a) relire : préfixe re- + radical « lire ». Le mot signifie « lire de nouveau ».",
                "b) jardinier : radical « jardin » + suffixe -ier. C'est la personne dont le métier est de s'occuper des jardins.",
                "c) impoli : préfixe im- + radical « poli ». Le préfixe exprime le contraire ; il s'écrit im- devant p.",
                "d) lavable : radical lav- (laver) + suffixe -able. Le mot signifie « qui peut être lavé ».",
                "e) chaton : radical « chat » + suffixe -on. C'est un diminutif : un petit chat.",
                "f) défaire : préfixe dé- + radical « faire ». Le mot exprime le contraire de « faire ».",
              ],
            },
            {
              level: 2,
              statement: "1. Formez le contraire de chaque mot à l'aide d'un préfixe : possible, lisible, régulier, content, coller, obéir. 2. Formez un nom avec le suffixe -eur : chanter, nager. 3. Formez un adverbe avec le suffixe -ment : lent, doux.",
              hint: "Pour les contraires, choisissez entre in- (et ses formes im-, il-, ir-), dé- ou dés-, et mé-. Pour les adverbes, pensez à mettre d'abord l'adjectif au féminin.",
              solution: [
                "1. possible : impossible (im- devant p) ; lisible : illisible (il- devant l) ; régulier : irrégulier (ir- devant r) ; content : mécontent (préfixe mé-) ; coller : décoller (préfixe dé-) ; obéir : désobéir (dés- devant une voyelle).",
                "2. chanter : chanteur ; nager : nageur. Le suffixe -eur désigne la personne qui fait l'action.",
                "3. lent : au féminin « lente », donc lentement. doux : au féminin « douce », donc doucement.",
                "Bilan : les préfixes ont gardé la classe des mots (adjectifs et verbes), alors que les suffixes ont formé des noms et des adverbes.",
              ],
            },
            {
              level: 3,
              statement: "Défi. 1. Découpez chaque mot et donnez son sens : antivol, préhistoire, désagréable, irremplaçable. 2. Dans chaque liste, un mot n'est pas formé avec le préfixe annoncé : trouvez l'intrus et justifiez. Liste A (re-) : refaire, revoir, reine, relire. Liste B (in-) : inutile, inconnu, inviter, incapable.",
              hint: "Pour trouver l'intrus, enlevez le préfixe : s'il reste un mot ou un radical qui a un sens en rapport avec le mot, le découpage est juste.",
              solution: [
                "1. antivol : anti- (contre) + « vol » : un dispositif qui protège contre le vol.",
                "préhistoire : pré- (avant) + « histoire » : la période qui précède l'histoire, c'est-à-dire l'invention de l'écriture.",
                "désagréable : dés- (contraire) + agré- (agréer, plaire) + -able (qui peut) : qui ne plaît pas, le contraire d'« agréable ».",
                "irremplaçable : ir- (pas) + remplaç- (remplacer) + -able (qui peut être) : qu'on ne peut pas remplacer. Le préfixe s'écrit ir- devant r.",
                "2. Liste A : l'intrus est « reine ». Si l'on enlève re-, il reste « ine », qui ne veut rien dire. Les autres mots signifient bien « faire, voir, lire de nouveau ».",
                "Liste B : l'intrus est « inviter ». Si l'on enlève in-, il reste « viter », qui n'a pas de sens, et « inviter » ne signifie pas « ne pas viter ». Les autres mots signifient « pas utile, pas connu, pas capable ».",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque préfixe à son sens.",
            pairs: [
              { left: "re-", right: "de nouveau" },
              { left: "pré-", right: "avant" },
              { left: "sous-", right: "en dessous" },
              { left: "anti-", right: "contre" },
              { left: "co-", right: "avec" },
              { left: "im-", right: "le contraire, pas" },
            ],
          },
          quiz: [
            { q: "Dans le mot « jardinier », quel est le radical ?", options: ["jard", "jardin", "ier", "jardini"], answer: 1, why: "Le radical est la partie qui porte le sens principal : « jardin ». Le suffixe -ier désigne le métier." },
            { q: "Quel préfixe permet de former le contraire de « lisible » ?", options: ["ir-", "dé-", "il-", "mal-"], answer: 2, why: "Devant la lettre l, le préfixe in- devient il- : on écrit « illisible », avec deux l." },
            { q: "Quel mot n'est pas formé avec le préfixe re- ?", options: ["refaire", "revenir", "relire", "reine"], answer: 3, why: "Dans « reine », si l'on enlève re-, il reste « ine », qui n'a aucun sens : ce n'est pas un préfixe." },
            { q: "Dans « lavable », que signifie le suffixe -able ?", options: ["qui peut être", "celui qui fait", "un petit", "de nouveau"], answer: 0, why: "Lavable signifie « qui peut être lavé ». Le suffixe -able (ou -ible) exprime une possibilité." },
            { q: "« Lentement » est formé avec le suffixe -ment. De quelle classe est ce mot ?", options: ["un nom", "un adverbe", "un adjectif", "un verbe"], answer: 1, why: "Le suffixe -ment, ajouté à un adjectif au féminin (lente), forme un adverbe." },
          ],
          trap: "Découper des mots en voyant des préfixes partout : dans « reine » ou « image », les lettres re- et im- font partie du mot et ne sont pas des préfixes.",
          method: "Pour vérifier un découpage, enlevez le préfixe ou le suffixe : il doit rester un radical qui a un sens, et le sens du mot doit être la somme des morceaux (re + lire = lire de nouveau).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'synonymes-antonymes',
          title: 'Familles de mots, synonymes et antonymes',
          minutes: 25,
          objectives: [
            "Regrouper des mots en familles autour d'un même radical.",
            "Distinguer une vraie famille de mots d'une simple ressemblance de forme.",
            "Employer des synonymes et des antonymes adaptés au contexte.",
          ],
          course: [
            {
              heading: "Les familles de mots",
              paragraphs: [
                "Une famille de mots est un ensemble de mots qui ont le même radical et un lien de sens. Par exemple, « terrain », « terrestre », « enterrer », « déterrer », « atterrir » et « souterrain » appartiennent tous à la famille du mot « terre » : chacun parle, d'une façon ou d'une autre, du sol ou de la Terre.",
                "Le radical peut changer légèrement de forme à l'intérieur d'une même famille. On dit « mer », mais aussi « marin », « marée » et « maritime ». On dit « fleur », mais aussi « floral » et « floraison ». Ces petites différences viennent souvent du latin, la langue d'où vient une grande partie du français : « mare » signifiait la mer, « flos, floris » signifiait la fleur.",
              ],
              box: { label: "Définition", text: "Une famille de mots regroupe des mots formés sur le même radical et liés par le sens : terre, terrain, terrestre, enterrer, atterrir, souterrain." },
            },
            {
              heading: "Attention aux ressemblances trompeuses",
              paragraphs: [
                "Deux mots peuvent se ressembler sans appartenir à la même famille. « Terrible » ressemble à « terre », mais il vient de « terreur » : il n'a rien à voir avec le sol. De même, « chantier » n'appartient pas à la famille de « chanter », et « poison » n'appartient pas à la famille de « poisson ».",
                "Pour vérifier, posez-vous toujours la question du sens : le mot parle-t-il de la même chose que le mot de départ ? Si la réponse est non, ce n'est pas un membre de la famille, même si les lettres se ressemblent. Le dictionnaire, qui donne l'origine des mots, permet de confirmer.",
              ],
            },
            {
              heading: "Les synonymes",
              paragraphs: [
                "Des synonymes sont des mots de même classe grammaticale qui ont un sens très proche : « commencer » et « débuter » (deux verbes), « la peur » et « la frayeur » (deux noms), « content » et « joyeux » (deux adjectifs). Ils permettent d'éviter les répétitions quand on écrit.",
                "Deux synonymes n'ont presque jamais exactement le même sens. Ils peuvent différer par l'intensité : « la peur », « la frayeur » et « la terreur » vont du plus faible au plus fort. Ils peuvent aussi différer par le registre de langue : « une maison » est courant, « une baraque » est familier, « une demeure » est soutenu.",
                "Le bon synonyme dépend enfin du contexte. Le mot « grand » n'a pas le même synonyme dans « un grand arbre » (un arbre haut) et dans « un grand écrivain » (un écrivain célèbre, illustre). Il faut donc toujours relire la phrase entière avant de remplacer un mot.",
              ],
              box: { label: "Définition", text: "Les synonymes sont des mots de même classe grammaticale et de sens proche. Ils se distinguent souvent par une nuance d'intensité ou de registre (familier, courant, soutenu)." },
            },
            {
              heading: "Les antonymes",
              paragraphs: [
                "Des antonymes sont des mots de même classe grammaticale qui ont des sens contraires : « chaud » et « froid », « ouvrir » et « fermer », « la paix » et « la guerre », « avant » et « après ». Beaucoup d'antonymes se forment avec un préfixe : « possible » et « impossible », « faire » et « défaire », « honnête » et « malhonnête ».",
                "Comme pour les synonymes, l'antonyme dépend du contexte. Le contraire de « léger » est « lourd » dans « un sac léger », mais « copieux » dans « un repas léger » et « profond » dans « un sommeil léger ». Un même mot peut donc avoir plusieurs antonymes.",
              ],
              box: { label: "À retenir", text: "Synonymes : sens proche (commencer, débuter). Antonymes : sens contraire (commencer, finir). Dans les deux cas, les mots sont de la même classe, et le bon choix dépend de la phrase." },
            },
          ],
          keyPoints: [
            "Une famille de mots réunit des mots de même radical liés par le sens : terre, terrain, atterrir.",
            "Le radical peut changer de forme dans une famille : mer, marin, maritime ; fleur, floral.",
            "Une ressemblance de forme ne suffit pas : « terrible » n'est pas de la famille de « terre ».",
            "Synonymes : même classe, sens proche, avec des nuances d'intensité ou de registre.",
            "Antonymes : même classe, sens contraire ; beaucoup se forment avec un préfixe (impossible).",
            "Le bon synonyme ou le bon antonyme dépend toujours du contexte.",
          ],
          example: {
            statement: "Parmi les mots suivants, retrouvez ceux qui appartiennent à la famille de « terre » et trouvez l'intrus : terrain, terrestre, terrible, enterrer, atterrir, souterrain.",
            solution: [
              "Repérer le radical commun : tous les mots contiennent les lettres terr-.",
              "Vérifier le sens de chaque mot : un terrain est une étendue de terre ; terrestre signifie « qui vit sur la terre » ; enterrer, c'est mettre sous la terre ; atterrir, c'est se poser sur le sol ; souterrain signifie « sous la terre ».",
              "Examiner le dernier mot : « terrible » signifie « qui fait peur », « qui inspire la terreur ». Il n'a aucun lien de sens avec le sol.",
              "Réponse : terrain, terrestre, enterrer, atterrir et souterrain forment la famille de « terre ». L'intrus est « terrible », qui appartient à la famille de « terreur ».",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez un synonyme et un antonyme de chacun des mots suivants : a) content ; b) commencer ; c) vieux ; d) facile.",
              hint: "Gardez la même classe grammaticale : un adjectif a pour synonyme et pour antonyme un adjectif, un verbe un verbe.",
              solution: [
                "a) content (adjectif) : synonyme joyeux ou heureux ; antonyme triste ou mécontent.",
                "b) commencer (verbe) : synonyme débuter ; antonyme finir ou terminer.",
                "c) vieux (adjectif) : synonyme âgé ; antonyme jeune.",
                "d) facile (adjectif) : synonyme simple ; antonyme difficile.",
                "D'autres réponses sont possibles si elles respectent la classe grammaticale et le sens.",
              ],
            },
            {
              level: 2,
              statement: "Remplacez l'adjectif « grand » par un synonyme qui convient au contexte. a) un grand arbre ; b) une grande faim ; c) un grand bruit ; d) un grand écrivain. Puis donnez l'antonyme de « léger » dans : e) un sac léger ; f) un repas léger ; g) un sommeil léger.",
              hint: "Lisez chaque groupe de mots et demandez-vous ce que « grand » ou « léger » veut dire précisément ici : la taille, la force, la célébrité, le poids, la quantité, la profondeur ?",
              solution: [
                "a) un grand arbre : un arbre haut (il s'agit de la taille).",
                "b) une grande faim : une faim intense ou terrible (il s'agit de la force du besoin).",
                "c) un grand bruit : un bruit fort (il s'agit du volume du son).",
                "d) un grand écrivain : un écrivain célèbre ou illustre (il s'agit de la réputation).",
                "e) un sac léger : un sac lourd. f) un repas léger : un repas copieux. g) un sommeil léger : un sommeil profond.",
                "Conclusion : un même mot change de synonyme et d'antonyme selon le nom qu'il accompagne.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici dix mots : fleur, chanter, fleuriste, chanson, floraison, chantier, enchanter, fleurir, flotter, chanteur. 1. Formez deux familles de mots. 2. Deux mots n'appartiennent à aucune des deux familles : lesquels, et pourquoi ? 3. Écrivez une phrase qui contient un mot de la famille de « fleur » et son antonyme ou un mot de sens contraire.",
              hint: "Pour chaque mot, demandez-vous s'il parle de fleurs ou de chant. Attention : le radical de « fleur » peut aussi s'écrire flor-.",
              solution: [
                "1. Famille de « fleur » : fleur, fleuriste, floraison, fleurir. Famille de « chanter » : chanter, chanson, enchanter, chanteur.",
                "« Floraison » appartient bien à la famille de « fleur » : le radical prend la forme flor-, venue du latin. « Enchanter » vient aussi d'un mot latin qui signifiait « chanter », d'où son sens ancien de « charmer par des chants magiques ».",
                "2. Les intrus sont « chantier » et « flotter ». Un chantier est un lieu de construction, il n'a aucun rapport avec le chant ; flotter, c'est rester à la surface de l'eau, sans rapport avec les fleurs. Ils ressemblent aux autres mots seulement par leurs lettres.",
                "3. Exemple de réponse : « Au printemps, les rosiers fleurissent ; en automne, ils se fanent. » Les verbes « fleurir » et « se faner » ont des sens contraires.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Familles, synonymes et antonymes.",
            statements: [
              { text: "« Terrible » appartient à la famille du mot « terre ».", true: false, why: "Il vient de « terreur » : il signifie « qui fait peur » et n'a aucun lien avec le sol." },
              { text: "« Marin » et « mer » appartiennent à la même famille.", true: true, why: "Le radical change de forme (mer, mar-), mais le sens est le même : ce qui concerne la mer." },
              { text: "Deux synonymes ont toujours exactement le même sens.", true: false, why: "Ils ont un sens proche, avec souvent une nuance d'intensité ou de registre (peur, terreur)." },
              { text: "« Défaire » est un antonyme de « faire ».", true: true, why: "Le préfixe dé- forme ici le contraire du verbe." },
              { text: "Un nom peut être le synonyme d'un verbe.", true: false, why: "Synonymes et antonymes sont toujours de la même classe grammaticale." },
              { text: "Un même mot peut avoir plusieurs antonymes selon la phrase.", true: true, why: "Léger s'oppose à lourd (un sac), à copieux (un repas) ou à profond (un sommeil)." },
              { text: "« Baraque » et « maison » sont synonymes, mais pas du même registre.", true: true, why: "« Baraque » est familier, « maison » est courant." },
            ],
          },
          quiz: [
            { q: "Quel mot n'appartient pas à la famille de « terre » ?", options: ["terrain", "terrestre", "terrible", "souterrain"], answer: 2, why: "« Terrible » appartient à la famille de « terreur » : il n'a pas de lien de sens avec le sol." },
            { q: "Quel est un synonyme de « débuter » ?", options: ["terminer", "continuer", "arrêter", "commencer"], answer: 3, why: "Débuter et commencer sont deux verbes de sens très proche. Terminer et arrêter en sont plutôt des antonymes." },
            { q: "Quel est l'antonyme de « léger » dans « un sommeil léger » ?", options: ["lourd", "profond", "copieux", "fort"], answer: 1, why: "Un sommeil léger est facile à interrompre ; son contraire est un sommeil profond." },
            { q: "« Bouquin » est un synonyme familier de...", options: ["livre", "cahier", "journal", "bibliothèque"], answer: 0, why: "« Bouquin » est un mot familier pour désigner un livre ; « livre » est le mot courant." },
            { q: "Pourquoi « poisson » et « poison » ne sont-ils pas de la même famille ?", options: ["Leur sens n'a aucun lien", "L'un des deux est un verbe", "Ils n'ont pas le même genre", "Ils ne riment pas entre eux"], answer: 0, why: "Une famille de mots suppose un lien de sens. Une ressemblance de lettres ne suffit pas." },
          ],
          trap: "Ranger un mot dans une famille seulement parce qu'il contient les mêmes lettres : « terrible » ressemble à « terre », mais il appartient à la famille de « terreur ».",
          method: "Avant de remplacer un mot par un synonyme, relisez la phrase entière et vérifiez trois points : la même classe grammaticale, un sens qui convient au contexte et un registre adapté au texte.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'sens-propre-figure',
          title: 'Sens propre, sens figuré et usage du dictionnaire',
          minutes: 30,
          objectives: [
            "Distinguer le sens propre et le sens figuré d'un mot.",
            "Identifier le sens d'un mot polysémique grâce au contexte.",
            "Utiliser un dictionnaire pour trouver le sens, la classe grammaticale et l'orthographe d'un mot.",
          ],
          course: [
            {
              heading: "Un mot, plusieurs sens : la polysémie",
              paragraphs: [
                "Beaucoup de mots ont plusieurs sens. Une « feuille » peut être la feuille d'un arbre ou une feuille de papier. Une « souris » peut être un petit animal ou l'objet qui sert à déplacer le curseur d'un ordinateur. Le « pied » peut être celui d'une personne, celui d'une table ou le bas d'une montagne.",
                "Un mot qui a plusieurs sens est dit polysémique (du grec « poly », plusieurs, et « sêma », signe). C'est le contexte, c'est-à-dire la phrase et le texte autour du mot, qui permet de savoir quel sens est employé. Dans « Le chat chasse la souris », il s'agit de l'animal ; dans « Cliquez avec la souris », il s'agit de l'objet.",
              ],
              box: { label: "Définition", text: "Un mot polysémique est un mot qui a plusieurs sens. Le contexte permet de choisir le bon sens : la feuille de l'arbre, la feuille de papier." },
            },
            {
              heading: "Sens propre et sens figuré",
              paragraphs: [
                "Le sens propre est le premier sens d'un mot, souvent le plus ancien et le plus concret. Le sens figuré vient d'une image : on transporte le mot dans un autre domaine, souvent plus abstrait. Dans « Le lion dévore une gazelle », le verbe « dévorer » est au sens propre : le lion mange sa proie avec avidité. Dans « Léa dévore un roman », il est au sens figuré : Léa lit le livre très vite, avec passion.",
                "La langue de tous les jours est pleine de sens figurés. « Avoir un cœur de pierre », c'est être insensible (une pierre ne ressent rien). « Une pluie de cadeaux » désigne un grand nombre de cadeaux. « Être dans la lune », c'est être distrait. Pour comprendre une expression figurée, demandez-vous quelle image elle contient et ce que cette image veut dire.",
              ],
              box: { label: "À retenir", text: "Sens propre : le sens premier, concret (le lion dévore sa proie). Sens figuré : un sens imagé, souvent abstrait (Léa dévore un roman)." },
            },
            {
              heading: "Trouver un mot dans le dictionnaire",
              paragraphs: [
                "Le dictionnaire range les mots dans l'ordre alphabétique. Quand deux mots commencent par la même lettre, on regarde la deuxième lettre, puis la troisième : « luge » vient avant « lune », car g vient avant n. En haut de chaque page, des mots repères indiquent le premier et le dernier mot de la page : ils permettent de trouver la bonne page très vite.",
                "On ne cherche pas un mot sous la forme où on le lit dans le texte, mais sous sa forme de base. Un verbe se cherche à l'infinitif : « ils couraient » se trouve à « courir ». Un nom se cherche au singulier : « chevaux » se trouve à « cheval ». Un adjectif se cherche au masculin singulier : « belles » se trouve à « beau ».",
              ],
              box: { label: "Règle", text: "Dans le dictionnaire : le verbe est à l'infinitif (couraient, courir), le nom au singulier (chevaux, cheval), l'adjectif au masculin singulier (belles, beau)." },
            },
            {
              heading: "Lire un article de dictionnaire",
              paragraphs: [
                "L'article d'un dictionnaire commence par l'entrée, c'est-à-dire le mot écrit en gras. Viennent ensuite, souvent, sa prononciation (écrite avec des signes spéciaux, l'alphabet phonétique), sa classe grammaticale et son genre en abrégé, puis son étymologie, c'est-à-dire son origine (par exemple « du latin »).",
                "Les différents sens sont ensuite numérotés : le sens propre vient généralement en premier, les sens figurés après, signalés par l'abréviation « fig. ». Chaque sens est accompagné d'un exemple, souvent écrit en italique. L'article peut aussi indiquer des synonymes, des contraires et le registre de langue (« fam. » pour familier).",
              ],
              box: { label: "Repère", text: "Abréviations courantes : n. m. (nom masculin), n. f. (nom féminin), adj. (adjectif), v. (verbe), adv. (adverbe), fig. (sens figuré), fam. (familier), syn. (synonyme), contr. (contraire)." },
            },
          ],
          keyPoints: [
            "Un mot polysémique a plusieurs sens ; le contexte permet de choisir le bon.",
            "Le sens propre est le sens premier et concret ; le sens figuré est un sens imagé.",
            "Le dictionnaire suit l'ordre alphabétique, lettre après lettre ; les mots repères guident la recherche.",
            "On cherche le verbe à l'infinitif, le nom au singulier, l'adjectif au masculin singulier.",
            "Un article donne la classe, le genre, l'origine, les sens numérotés et des exemples.",
          ],
          example: {
            statement: "1. Dans les phrases suivantes, le verbe « briller » est-il employé au sens propre ou au sens figuré ? a) Les étoiles brillent dans le ciel. b) Lucas a brillé lors de son exposé. 2. Sous quelle forme chercherez-vous « brillèrent » dans le dictionnaire ?",
            solution: [
              "Rappeler le sens propre de « briller » : émettre ou refléter de la lumière.",
              "Phrase a) : les étoiles produisent réellement de la lumière. Le verbe est employé au sens propre.",
              "Phrase b) : Lucas n'émet pas de lumière ! Le verbe signifie qu'il a été remarquable, qu'il s'est fait remarquer par sa réussite. C'est une image : le verbe est employé au sens figuré.",
              "Question 2 : « brillèrent » est une forme conjuguée (passé simple). Un verbe se cherche à l'infinitif.",
              "Réponse : a) sens propre ; b) sens figuré. On cherche « brillèrent » à l'entrée « briller ».",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez si le mot placé entre guillemets est employé au sens propre ou au sens figuré. a) Il a un « cœur » d'or. b) Le médecin écoute le « cœur » du patient. c) Une « vague » de froid traverse le pays. d) Une « vague » a emporté le château de sable. e) Ce matin, il pleut des « cordes ».",
              hint: "Pour chaque phrase, demandez-vous si l'on parle de la chose réelle et concrète, ou si l'on utilise une image.",
              solution: [
                "a) Sens figuré : le cœur n'est pas réellement en or ; l'image signifie que la personne est très généreuse.",
                "b) Sens propre : il s'agit de l'organe qui fait circuler le sang.",
                "c) Sens figuré : il n'y a pas d'eau ; l'image désigne une arrivée soudaine et importante de froid.",
                "d) Sens propre : il s'agit d'une vraie masse d'eau de la mer.",
                "e) Sens figuré : il ne tombe pas de cordes ; l'expression signifie qu'il pleut très fort, en longs filets d'eau.",
              ],
            },
            {
              level: 2,
              statement: "1. Écrivez la forme sous laquelle vous chercheriez chacun de ces mots dans le dictionnaire : chevaux, finissaient, belles, yeux, prirent, nouvelles (dans « de nouvelles chaussures »). 2. Rangez ces mots dans l'ordre alphabétique : lune, lumière, lutin, luge, lustre.",
              hint: "Pour la question 1, demandez-vous d'abord si le mot est un nom, un verbe ou un adjectif. Pour la question 2, les deux premières lettres sont identiques : comparez la troisième.",
              solution: [
                "1. chevaux : nom au pluriel, on cherche « cheval ». finissaient : verbe conjugué, on cherche l'infinitif « finir ». belles : adjectif au féminin pluriel, on cherche « beau ».",
                "yeux : nom au pluriel, on cherche « œil ». prirent : verbe au passé simple, on cherche « prendre ». nouvelles : adjectif au féminin pluriel, on cherche « nouveau ».",
                "2. Tous les mots commencent par lu-. On compare la troisième lettre : g (luge), m (lumière), n (lune), s (lustre), t (lutin).",
                "Réponse : luge, lumière, lune, lustre, lutin.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici un article de dictionnaire rédigé pour l'exercice : « plume n. f. (du latin pluma). 1. Chacun des éléments qui couvrent le corps des oiseaux. 2. Petite pièce de métal pointue fixée à un porte-plume ou à un stylo, qui sert à écrire à l'encre. 3. Fig. Manière d'écrire d'un écrivain. Avoir une plume élégante. » a) Quels sont la classe et le genre du mot ? b) D'où vient-il ? c) Quel sens est employé dans chacune de ces phrases : « Le paon fait la roue avec ses plumes. » ; « Ce journaliste a une plume vive et drôle. » ; « J'ai changé la plume de mon stylo. » d) Lequel de ces sens est le sens propre ? Justifiez.",
              hint: "Les abréviations se trouvent juste après l'entrée ; l'origine est entre parenthèses. Pour la question c, remplacez « plume » par chacune des trois définitions et voyez laquelle convient.",
              solution: [
                "a) L'abréviation « n. f. » indique que « plume » est un nom féminin.",
                "b) L'étymologie entre parenthèses indique qu'il vient du latin « pluma ».",
                "c) « Le paon fait la roue avec ses plumes » : sens 1, les plumes de l'oiseau. « Ce journaliste a une plume vive et drôle » : sens 3, sa manière d'écrire. « J'ai changé la plume de mon stylo » : sens 2, la pointe qui sert à écrire.",
                "d) Le sens propre est le sens 1 : c'est le sens premier et concret, il est placé en premier. Le sens 3 est un sens figuré, comme l'indique l'abréviation « Fig. » : on passe de l'objet qui sert à écrire à la façon d'écrire.",
                "Bilan : le mot « plume » est polysémique, et le contexte de chaque phrase permet de choisir le bon sens.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour trouver le sens de « couraient » dans le dictionnaire.",
            items: [
              "Mettre le mot à sa forme de base : l'infinitif « courir »",
              "Ouvrir le dictionnaire à la lettre C",
              "Se guider avec les mots repères en haut des pages",
              "Repérer l'entrée « courir » écrite en gras",
              "Lire les différents sens numérotés",
              "Choisir le sens qui convient à la phrase de départ",
            ],
          },
          quiz: [
            { q: "Dans « Léa dévore un roman », le verbe « dévorer » est employé...", options: ["au sens propre", "au sens figuré", "dans un sens familier"], answer: 1, why: "Léa ne mange pas le livre : elle le lit avec passion. C'est une image, donc un sens figuré." },
            { q: "Sous quelle forme cherche-t-on « yeux » dans le dictionnaire ?", options: ["yeux", "yeu", "œil", "œils"], answer: 2, why: "Un nom se cherche au singulier : le singulier de « yeux » est « œil »." },
            { q: "Que signifie l'abréviation « n. f. » dans un dictionnaire ?", options: ["nom féminin", "nom figuré", "nombre fixe", "nom familier"], answer: 0, why: "« n. f. » signifie nom féminin ; le sens figuré s'abrège « fig. » et le registre familier « fam. »." },
            { q: "Comment appelle-t-on un mot qui a plusieurs sens ?", options: ["dérivé", "étymologique", "polysémique", "antonyme"], answer: 2, why: "Un mot polysémique a plusieurs sens, comme « feuille » ou « souris »." },
            { q: "Dans le dictionnaire, quel mot vient en premier ?", options: ["lutin", "lune", "lustre", "luge"], answer: 3, why: "Les quatre mots commencent par lu- ; la troisième lettre g de « luge » vient avant n, s et t." },
          ],
          trap: "Chercher un mot dans le dictionnaire sous la forme lue dans le texte (« chevaux », « finissaient ») au lieu de sa forme de base (« cheval », « finir »).",
          method: "Quand un mot a plusieurs sens dans le dictionnaire, remplacez le mot de votre phrase par chaque définition : celle qui donne une phrase claire et logique est la bonne.",
        },
      ],
    },
    {
      id: 'aventure',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'schema-narratif',
          title: "Le schéma narratif d'un récit d'aventures",
          minutes: 30,
          objectives: [
            "Identifier les cinq étapes du schéma narratif dans un récit d'aventures.",
            "Repérer l'élément perturbateur et les péripéties d'un récit.",
            "Résumer un récit en suivant ses grandes étapes.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un récit d'aventures ?",
              paragraphs: [
                "Un récit d'aventures raconte l'histoire d'un héros qui quitte son monde habituel pour partir vers l'inconnu : la mer, une île, la jungle, le désert, un pays lointain. Il y rencontre des dangers, des obstacles et des surprises. Le lecteur se demande sans cesse ce qui va arriver : c'est le suspense, qui donne envie de tourner les pages.",
                "Ce genre a donné de nombreux romans célèbres : Robinson Crusoé de Daniel Defoe (1719), L'Île au trésor de Robert Louis Stevenson (1883), Le Tour du monde en quatre-vingts jours de Jules Verne (1872). Mais le goût de l'aventure est bien plus ancien : l'Odyssée, attribuée au poète grec Homère, raconte déjà le long et dangereux voyage de retour d'Ulysse.",
              ],
              box: { label: "Définition", text: "Le récit d'aventures raconte le voyage d'un héros vers l'inconnu, ponctué de dangers et d'obstacles, et entretient le suspense chez le lecteur." },
            },
            {
              heading: "Les cinq étapes du schéma narratif",
              paragraphs: [
                "La plupart des récits suivent une même organisation, appelée schéma narratif. La situation initiale présente les personnages, le lieu et l'époque ; tout est calme et stable. Elle est souvent écrite à l'imparfait. L'élément perturbateur (on dit aussi élément déclencheur) est un événement qui vient rompre cet équilibre et lance l'aventure. Il est souvent introduit par un indicateur de temps comme « un jour », « soudain » ou « un matin », et raconté au passé simple.",
                "Les péripéties sont les actions et les obstacles qui se succèdent : le héros voyage, affronte des dangers, échoue, recommence. Dans un récit d'aventures, c'est la partie la plus longue et la plus mouvementée. L'élément de résolution est l'événement qui met fin aux péripéties : le héros trouve le trésor, échappe à ses ennemis, atteint son but. Enfin, la situation finale présente un nouvel équilibre : la vie est de nouveau stable, mais souvent différente de celle du début.",
              ],
              box: { label: "Repère", text: "1. Situation initiale (équilibre, imparfait). 2. Élément perturbateur (« un jour », « soudain »). 3. Péripéties (actions, obstacles). 4. Élément de résolution (fin des péripéties). 5. Situation finale (nouvel équilibre)." },
            },
            {
              heading: "Un exemple : Le Tour du monde en quatre-vingts jours",
              paragraphs: [
                "Situation initiale : à Londres, Phileas Fogg, un gentleman anglais très méthodique, mène une vie parfaitement réglée, entre son domicile et son club. Élément perturbateur : au club, il parie avec d'autres membres qu'il peut faire le tour du monde en quatre-vingts jours, et part le soir même avec son domestique, Passepartout.",
                "Péripéties : les voyageurs traversent l'Inde à dos d'éléphant, où ils sauvent une jeune femme, Aouda, d'une mort atroce ; ils sont poursuivis par le détective Fix, qui prend Fogg pour un voleur de banque ; leur train est attaqué en Amérique ; à leur arrivée en Angleterre, Fix fait arrêter Fogg, qui est ensuite libéré, mais il arrive à Londres avec quelques minutes de retard et se croit ruiné.",
                "Élément de résolution : Passepartout découvre qu'ils ont en réalité un jour d'avance, car en voyageant vers l'est, ils ont gagné un jour sans s'en rendre compte. Fogg court à son club et y arrive juste à temps. Situation finale : il a gagné son pari et il épouse Aouda. Le gentleman froid du début a découvert l'amour : l'aventure l'a transformé.",
              ],
            },
            {
              heading: "À quoi sert le schéma narratif ?",
              paragraphs: [
                "Le schéma narratif est un outil pour comprendre un récit : il permet de repérer ce qui change entre le début et la fin, et de voir comment l'histoire avance. Comparez toujours la situation initiale et la situation finale : ce qui a changé dit souvent le sens de l'aventure.",
                "C'est aussi un outil pour résumer : une phrase par étape suffit pour raconter l'essentiel d'une histoire, au présent et sans détails. C'est enfin un outil pour écrire : avant de rédiger votre propre récit, vous pouvez prévoir chacune des cinq étapes au brouillon.",
              ],
              box: { label: "À retenir", text: "Pour résumer un récit : une phrase par étape du schéma narratif, au présent, avec seulement les actions essentielles." },
            },
          ],
          keyPoints: [
            "Le récit d'aventures entraîne un héros vers l'inconnu et ses dangers, et crée du suspense.",
            "Situation initiale : présentation des personnages, du lieu et de l'époque, souvent à l'imparfait.",
            "Élément perturbateur : l'événement qui lance l'aventure (« un jour », « soudain »).",
            "Péripéties : les actions et obstacles successifs, partie la plus longue du récit d'aventures.",
            "Élément de résolution puis situation finale : la fin des péripéties et le nouvel équilibre.",
            "Comparer le début et la fin permet de comprendre ce que l'aventure a changé.",
          ],
          example: {
            statement: "Lisez ce récit écrit pour l'exercice, puis retrouvez les cinq étapes du schéma narratif. « Tom était mousse sur un bateau de pêche à Saint-Malo ; chaque jour, il nettoyait le pont et rêvait de voyages. Un matin, il trouva sur la plage une bouteille qui contenait une vieille carte. Il s'embarqua sur un navire marchand, affronta une terrible tempête, puis échappa de justesse à des pirates. Sur une île déserte, un vieil ermite lui montra enfin la grotte où dormait le coffre. Revenu à Saint-Malo, Tom acheta son propre bateau et devint capitaine. »",
            solution: [
              "Situation initiale : « Tom était mousse [...] et rêvait de voyages ». Elle présente le héros, le lieu (Saint-Malo) et ses habitudes, à l'imparfait.",
              "Élément perturbateur : « Un matin, il trouva [...] une vieille carte ». L'indicateur de temps « Un matin » et le passé simple signalent l'événement qui lance l'aventure.",
              "Péripéties : il s'embarque, affronte une tempête, échappe à des pirates. Ce sont les obstacles successifs.",
              "Élément de résolution : l'ermite lui montre la grotte du coffre. Cet événement met fin à la quête.",
              "Situation finale : de retour à Saint-Malo, Tom devient capitaine. Le mousse rêveur du début est devenu un marin accompli : l'aventure l'a transformé.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici les cinq étapes d'un récit écrit pour l'exercice, données dans le désordre. Associez chaque phrase à son étape du schéma narratif. a) Grâce à la boussole de son grand-père, Inès retrouva le chemin du campement. b) Inès vivait paisiblement dans un petit village au bord du désert. c) De retour chez elle, elle raconta son aventure à toute sa famille. d) Un jour, une tempête de sable l'égara loin du village. e) Elle marcha des heures sous le soleil, manqua d'eau et dut fuir un scorpion.",
              hint: "Cherchez d'abord la phrase à l'imparfait qui décrit une vie calme, puis celle qui commence par un indicateur de temps annonçant un événement.",
              solution: [
                "b) Situation initiale : la vie paisible d'Inès, à l'imparfait.",
                "d) Élément perturbateur : « Un jour », la tempête de sable rompt l'équilibre et lance l'aventure.",
                "e) Péripéties : la marche, le manque d'eau et le scorpion sont des obstacles successifs.",
                "a) Élément de résolution : la boussole lui permet de retrouver son chemin, ce qui met fin aux dangers.",
                "c) Situation finale : Inès est rentrée chez elle et partage son aventure.",
                "Ordre du récit : b, d, e, a, c.",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce texte écrit pour l'exercice. « Le jeune Malik passait ses étés chez son oncle, gardien d'un phare sur une île bretonne. Une nuit, la lampe du phare s'éteignit alors qu'un voilier approchait des rochers. Malik grimpa les cent marches dans le noir, trouva le fusible grillé, mais n'avait pas de pièce de rechange. Il courut alors au cabanon, fouilla les caisses et revint, essoufflé, avec une lampe à pétrole. Il la plaça devant la vitre et agita les bras. Le voilier vira juste à temps. » 1. Quelle est la situation initiale ? À quel temps est-elle écrite ? 2. Quel est l'élément perturbateur ? Quel indicateur de temps l'introduit ? 3. Citez deux péripéties. 4. Quel est l'élément de résolution ?",
              hint: "Repérez le passage de l'imparfait au passé simple : c'est souvent là que l'aventure commence.",
              solution: [
                "1. Situation initiale : Malik passe ses étés chez son oncle, gardien de phare sur une île bretonne. Elle est écrite à l'imparfait (« passait »), le temps des habitudes et de la description.",
                "2. Élément perturbateur : la lampe du phare s'éteint alors qu'un voilier approche des rochers. Il est introduit par l'indicateur de temps « Une nuit » et raconté au passé simple (« s'éteignit »).",
                "3. Péripéties (deux au choix) : Malik grimpe les cent marches dans le noir ; il découvre le fusible grillé sans pièce de rechange ; il court au cabanon et fouille les caisses.",
                "4. Élément de résolution : la lampe à pétrole placée devant la vitre permet au voilier de virer juste à temps.",
                "Remarque : le texte s'arrête sur la résolution ; la situation finale n'est pas écrite, le lecteur l'imagine (le voilier est sauvé).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici le début et la fin d'un récit. Situation initiale : « Léo et sa sœur Jade passaient leurs vacances dans une vieille maison au bord d'une forêt. » Situation finale : « Le soir, autour du feu, Léo et Jade décidèrent de ne plus jamais avoir peur de la forêt. » Imaginez les trois étapes manquantes (élément perturbateur, deux péripéties, élément de résolution) en une ou deux phrases chacune, au passé simple.",
              hint: "Demandez-vous ce qui a changé entre le début et la fin : les enfants n'ont plus peur de la forêt. Votre aventure doit donc les obliger à y entrer et à surmonter leur peur.",
              solution: [
                "Analyser le changement : au début, la forêt est seulement un décor ; à la fin, les enfants décident de ne plus en avoir peur. L'aventure doit donc les faire entrer dans la forêt et les confronter à leur peur.",
                "Élément perturbateur (exemple) : « Un après-midi, leur chien Biscuit s'échappa et disparut entre les arbres. »",
                "Péripéties (exemple) : « Les enfants s'enfoncèrent dans la forêt en l'appelant. Ils traversèrent un ruisseau glacé, puis la nuit tomba et un hurlement retentit derrière eux. »",
                "Élément de résolution (exemple) : « En suivant des aboiements, ils découvrirent Biscuit coincé dans un terrier ; ils le libérèrent et retrouvèrent le chemin grâce à la lueur de la maison. »",
                "Vérification : chaque étape est au passé simple, les péripéties sont des obstacles, et la résolution explique la fin (les enfants ont surmonté leur peur). Toute autre histoire qui respecte ces critères est juste.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du Tour du monde en quatre-vingts jours.",
            items: [
              "Phileas Fogg mène une vie parfaitement réglée à Londres",
              "Il parie qu'il fera le tour du monde en quatre-vingts jours",
              "En Inde, il sauve la jeune Aouda",
              "En Angleterre, il est arrêté à cause du détective Fix",
              "Il découvre qu'il a gagné un jour en voyageant vers l'est",
              "Il gagne son pari et épouse Aouda",
            ],
          },
          quiz: [
            { q: "Quelle étape vient juste après la situation initiale ?", options: ["les péripéties", "l'élément perturbateur", "l'élément de résolution", "la situation finale"], answer: 1, why: "L'élément perturbateur rompt l'équilibre de la situation initiale et lance l'aventure." },
            { q: "Quel temps est le plus souvent employé dans la situation initiale d'un récit au passé ?", options: ["le passé simple", "le futur", "l'imparfait", "le présent de l'impératif"], answer: 2, why: "L'imparfait sert à décrire le cadre, les personnages et leurs habitudes avant l'événement." },
            { q: "Quel indicateur de temps annonce souvent l'élément perturbateur ?", options: ["Chaque jour", "Soudain", "D'habitude", "Autrefois"], answer: 1, why: "« Soudain » marque une rupture ; les autres expressions décrivent des habitudes." },
            { q: "Dans quelle étape le héros affronte-t-il la plupart des obstacles ?", options: ["les péripéties", "la situation initiale", "la situation finale"], answer: 0, why: "Les péripéties sont la suite des actions et des obstacles ; c'est la partie la plus longue d'un récit d'aventures." },
            { q: "Qui a écrit Le Tour du monde en quatre-vingts jours ?", options: ["Daniel Defoe", "Robert Louis Stevenson", "Homère", "Jules Verne"], answer: 3, why: "Jules Verne a publié ce roman en 1872. Defoe a écrit Robinson Crusoé et Stevenson L'Île au trésor." },
          ],
          trap: "Confondre l'élément perturbateur et les péripéties : l'élément perturbateur est un seul événement, celui qui lance l'aventure ; les péripéties sont tous les obstacles qui suivent.",
          method: "Pour repérer les étapes, suivez les temps et les indicateurs de temps : l'imparfait installe la situation initiale, et le premier passé simple introduit par « un jour » ou « soudain » signale souvent l'élément perturbateur.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'heros-epreuves',
          title: 'Le héros et ses épreuves',
          minutes: 30,
          objectives: [
            "Identifier les qualités du héros d'un récit d'aventures.",
            "Repérer les épreuves que le héros affronte et ce qu'elles révèlent de lui.",
            "Distinguer les personnages qui aident le héros de ceux qui s'opposent à lui.",
            "Expliquer comment l'aventure transforme le héros.",
          ],
          course: [
            {
              heading: "Qui est le héros d'un récit d'aventures ?",
              paragraphs: [
                "Le héros est le personnage principal : c'est lui que l'on suit du début à la fin. Il poursuit un but, qu'on appelle aussi une quête : trouver un trésor, rentrer chez lui, gagner un pari, sauver quelqu'un. Ce but le pousse à partir et à continuer malgré les dangers.",
                "Le héros d'aventures possède des qualités qui l'aident à réussir : le courage, l'endurance (la capacité à supporter la fatigue et la souffrance), l'ingéniosité (l'art de trouver des solutions), la ruse ou la fidélité à ses amis. Mais ce n'est pas un être parfait : il a peur, il doute, il fait des erreurs. Ces faiblesses le rendent humain et permettent au lecteur de s'identifier à lui. Dans L'Île au trésor, le héros, Jim Hawkins, n'est qu'un jeune garçon.",
              ],
              box: { label: "Définition", text: "Le héros est le personnage principal d'un récit. Il poursuit un but (sa quête) et montre des qualités, comme le courage ou la ruse, sans être pour autant parfait." },
            },
            {
              heading: "Les épreuves du héros",
              paragraphs: [
                "Les épreuves sont les obstacles que le héros doit surmonter. Certaines viennent de la nature : une tempête, un naufrage, le désert, le froid. D'autres viennent d'adversaires : des pirates, des monstres, des ennemis. D'autres enfin sont des épreuves intérieures : la peur, la solitude, le doute, la tentation d'abandonner ou de trahir.",
                "Chaque épreuve révèle une qualité du héros. Dans l'Odyssée, Ulysse est prisonnier avec ses compagnons dans la caverne du Cyclope Polyphème : il lui fait croire qu'il s'appelle « Personne », lui crève son œil unique, puis s'échappe en se cachant sous le ventre des béliers. Cette épreuve révèle sa ruse. Plus tard, pour entendre le chant des Sirènes sans en mourir, il bouche les oreilles de ses compagnons avec de la cire et se fait attacher au mât : c'est l'intelligence qui triomphe du danger.",
                "Dans Robinson Crusoé, le héros, seul survivant d'un naufrage, vit pendant de longues années sur une île déserte. Il construit un abri, cultive la terre, élève des chèvres : ses épreuves sont la faim, la solitude et la peur, et elles révèlent son ingéniosité et sa ténacité.",
              ],
              box: { label: "À retenir", text: "Trois sortes d'épreuves : la nature (tempête, naufrage), les adversaires (pirates, monstres) et les épreuves intérieures (peur, solitude, tentation). Chaque épreuve révèle une qualité du héros." },
            },
            {
              heading: "Ceux qui aident, ceux qui s'opposent",
              paragraphs: [
                "Autour du héros, certains personnages l'aident : on les appelle des adjuvants. Passepartout, le domestique de Phileas Fogg, le suit fidèlement autour du monde ; Vendredi devient le compagnon de Robinson sur son île. Un objet peut aussi jouer ce rôle : une carte, une boussole, une arme.",
                "D'autres personnages s'opposent au héros : ce sont des opposants. Le détective Fix ralentit sans cesse Phileas Fogg ; le Cyclope Polyphème veut dévorer Ulysse et ses compagnons. Certains personnages sont plus difficiles à classer : dans L'Île au trésor, Long John Silver, le cuisinier du navire, est d'abord sympathique et rassurant, avant de se révéler le chef des pirates.",
              ],
              box: { label: "Repère", text: "Adjuvant : personnage ou objet qui aide le héros (Passepartout, une boussole). Opposant : personnage ou obstacle qui l'empêche d'atteindre son but (Fix, le Cyclope)." },
            },
            {
              heading: "L'aventure transforme le héros",
              paragraphs: [
                "Le héros ne revient presque jamais de l'aventure tel qu'il était parti. Ses épreuves lui ont appris quelque chose sur le monde et sur lui-même : il est devenu plus courageux, plus sage, plus mûr. On dit que l'aventure est une initiation, c'est-à-dire un passage d'un état à un autre, souvent de l'enfance vers l'âge adulte.",
                "Jim Hawkins, simple garçon d'auberge au début de L'Île au trésor, apprend à agir seul et à faire face au danger. Phileas Fogg, l'homme froid et méthodique, découvre l'amour en épousant Aouda. Ulysse retrouve son île d'Ithaque après vingt ans d'absence, dix ans de guerre à Troie et dix ans d'errance, plus sage et plus éprouvé qu'à son départ.",
              ],
            },
          ],
          keyPoints: [
            "Le héros est le personnage principal ; il poursuit un but, sa quête.",
            "Ses qualités : courage, endurance, ingéniosité, ruse, fidélité ; il a aussi des faiblesses.",
            "Trois sortes d'épreuves : la nature, les adversaires, les épreuves intérieures.",
            "Chaque épreuve révèle une qualité : la ruse d'Ulysse face au Cyclope.",
            "Adjuvants (Passepartout, Vendredi) et opposants (Fix, Polyphème) entourent le héros.",
            "L'aventure est une initiation : le héros en revient transformé.",
          ],
          example: {
            statement: "Lisez ce passage écrit pour l'exercice. « La pirogue d'Awa se retourna dans les rapides. La jeune fille parvint à s'agripper à une branche, le cœur battant. Elle aurait voulu crier, mais personne ne pouvait l'entendre. Elle respira profondément, se hissa sur la berge et, avec sa corde, ramena la pirogue vers elle. Un vieux pêcheur, qui avait tout vu, l'aida à vider l'eau. » 1. Quelle épreuve Awa affronte-t-elle ? 2. Quelles qualités révèle-t-elle ? 3. Quel personnage est un adjuvant ?",
            solution: [
              "1. Repérer l'épreuve : la pirogue se retourne dans les rapides. C'est une épreuve de la nature. S'y ajoute une épreuve intérieure : la peur (« le cœur battant ») et la solitude (« personne ne pouvait l'entendre »).",
              "2. Repérer les actions du personnage, qui révèlent ses qualités : elle « respira profondément », ce qui montre son sang-froid et son courage face à la peur ; elle utilise sa corde pour récupérer la pirogue, ce qui montre son ingéniosité.",
              "3. Repérer qui aide : le vieux pêcheur l'aide à vider l'eau. C'est un adjuvant. La corde, qui lui sert à sauver la pirogue, joue aussi un rôle d'objet adjuvant.",
              "Réponse : Awa affronte les rapides et sa propre peur ; elle révèle son courage, son sang-froid et son ingéniosité ; le vieux pêcheur est un adjuvant.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque épreuve dans la bonne catégorie : épreuve de la nature, adversaire ou épreuve intérieure. a) un naufrage ; b) la peur de l'obscurité dans une grotte ; c) un combat contre des pirates ; d) la traversée d'un désert sans eau ; e) la tentation de trahir ses amis pour de l'or ; f) un cyclope qui garde l'entrée d'une caverne.",
              hint: "Demandez-vous d'où vient le danger : de la nature, d'un être qui s'oppose au héros, ou de l'intérieur du héros lui-même.",
              solution: [
                "Épreuves de la nature : a) le naufrage et d) la traversée du désert sans eau.",
                "Adversaires : c) les pirates et f) le cyclope.",
                "Épreuves intérieures : b) la peur de l'obscurité et e) la tentation de trahir.",
                "Remarque : une même scène peut combiner plusieurs épreuves, par exemple un naufrage suivi de la peur de la solitude.",
              ],
            },
            {
              level: 2,
              statement: "Voici le résumé d'un épisode de l'Odyssée, attribuée à Homère. Ulysse et ses compagnons sont enfermés dans la caverne du Cyclope Polyphème, un géant qui dévore plusieurs d'entre eux. Ulysse lui fait boire du vin et lui dit s'appeler « Personne ». Quand le géant s'endort, Ulysse lui crève son œil unique avec un pieu durci au feu. Polyphème appelle les autres Cyclopes à l'aide en criant que « Personne » l'attaque : ils repartent sans l'aider. Au matin, Ulysse et ses compagnons sortent cachés sous le ventre des béliers. 1. Quelle épreuve Ulysse affronte-t-il ? 2. Quelle qualité révèle-t-il ? Justifiez par deux actions. 3. Expliquez pourquoi la ruse du nom « Personne » fonctionne.",
              hint: "Pour la question 3, imaginez ce que les autres Cyclopes comprennent quand Polyphème crie que « Personne » l'attaque.",
              solution: [
                "1. Ulysse affronte un adversaire, le Cyclope, un géant qui dévore ses compagnons. C'est aussi une épreuve intérieure : il doit garder son sang-froid alors que la mort le menace.",
                "2. Il révèle sa ruse, c'est-à-dire son intelligence au service de la tromperie. Première action : il enivre le Cyclope avec du vin pour l'endormir. Deuxième action : il s'échappe caché sous le ventre des béliers, que le Cyclope aveugle laisse sortir.",
                "3. Quand Polyphème crie que « Personne » l'attaque, les autres Cyclopes comprennent que personne ne l'attaque. Ils pensent donc qu'il n'est pas en danger et repartent. Le faux nom transforme l'appel au secours en phrase qui ne veut rien dire.",
                "Conclusion : cet épisode montre que le héros d'aventures ne triomphe pas seulement par la force, mais aussi par l'intelligence.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lisez ces deux extraits d'un même récit, écrits pour l'exercice. Début : « Noé n'osait jamais lever la main en classe. Quand son cousin lui proposa de partir en randonnée en montagne, il refusa d'abord, puis accepta en tremblant. » Fin : « Au refuge, ce fut Noé qui prit la parole pour expliquer aux secouristes où se trouvait son cousin blessé. Il parlait d'une voix ferme, sans hésiter. » En quelques lignes, montrez que l'aventure a transformé le héros, en vous appuyant sur des indices précis des deux extraits.",
              hint: "Comparez le Noé du début et celui de la fin : sa façon de parler, son attitude face aux autres, son courage. Citez un mot ou une expression de chaque extrait.",
              solution: [
                "Au début, Noé est timide et peureux : il « n'osait jamais lever la main », refuse d'abord l'aventure et accepte « en tremblant ».",
                "À la fin, il fait preuve d'assurance et de responsabilité : c'est lui qui « prit la parole » devant des adultes, « d'une voix ferme, sans hésiter », pour sauver son cousin blessé.",
                "Entre les deux, on devine des épreuves : l'accident du cousin oblige Noé à agir seul et à surmonter sa peur.",
                "Paragraphe rédigé possible : « Au début du récit, Noé est un garçon timide qui n'ose jamais lever la main et qui accepte la randonnée en tremblant. À la fin, il prend la parole devant les secouristes d'une voix ferme, sans hésiter. L'accident de son cousin l'a obligé à surmonter sa peur et à agir seul : l'aventure a été pour lui une initiation, dont il ressort plus courageux et plus sûr de lui. »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque personnage à son rôle dans le récit.",
            pairs: [
              { left: "Ulysse", right: "Héros rusé qui cherche à rentrer à Ithaque" },
              { left: "Polyphème", right: "Cyclope qui retient Ulysse prisonnier" },
              { left: "Passepartout", right: "Domestique fidèle de Phileas Fogg" },
              { left: "Fix", right: "Détective qui poursuit Phileas Fogg" },
              { left: "Vendredi", right: "Compagnon de Robinson Crusoé sur son île" },
              { left: "Long John Silver", right: "Cuisinier du navire et chef des pirates" },
            ],
          },
          quiz: [
            { q: "Comment appelle-t-on un personnage qui aide le héros ?", options: ["un opposant", "un narrateur", "un adjuvant", "un figurant"], answer: 2, why: "L'adjuvant aide le héros à atteindre son but ; l'opposant cherche à l'en empêcher." },
            { q: "Quelle ruse Ulysse utilise-t-il face au Cyclope Polyphème ?", options: ["Il lui promet un trésor fabuleux en échange", "Il dit s'appeler « Personne »", "Il se cache dans un tonneau de vin", "Il appelle les dieux à son secours"], answer: 1, why: "Grâce à ce faux nom, les autres Cyclopes croient que personne n'attaque Polyphème et ne viennent pas l'aider." },
            { q: "Parmi ces épreuves, laquelle est une épreuve intérieure ?", options: ["une tempête", "un combat contre des pirates", "un naufrage", "la peur de la solitude"], answer: 3, why: "La peur vient du héros lui-même ; la tempête et le naufrage viennent de la nature, les pirates sont des adversaires." },
            { q: "Dans L'Île au trésor, qui est Long John Silver ?", options: ["un cuisinier qui mène les pirates", "le père du jeune héros, Jim Hawkins", "le capitaine honnête du navire", "un ermite abandonné sur l'île"], answer: 0, why: "Silver est le cuisinier du navire ; d'abord sympathique, il se révèle le chef des pirates." },
            { q: "Pourquoi dit-on que l'aventure est souvent une initiation ?", options: ["Parce que le héros ne change jamais", "Parce que le héros en revient transformé", "Parce qu'elle se passe toujours à l'école", "Parce qu'elle commence toujours par un pari"], answer: 1, why: "L'initiation est un passage d'un état à un autre : les épreuves rendent le héros plus mûr, plus sage ou plus courageux." },
          ],
          trap: "Croire que le héros d'aventures est parfait et n'a jamais peur : ses faiblesses font partie du récit, et c'est en les surmontant qu'il se transforme.",
          method: "Pour analyser un héros, faites un tableau à trois colonnes : l'épreuve, ce que fait le héros, la qualité que cela révèle. Justifiez chaque qualité par une action précise du texte.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ecrire-aventure',
          title: "Écrire un épisode d'aventures",
          minutes: 35,
          objectives: [
            "Construire un épisode d'aventures en suivant le schéma narratif.",
            "Employer l'imparfait et le passé simple dans un récit au passé.",
            "Créer du suspense à l'aide de connecteurs temporels et de descriptions.",
            "Relire et améliorer son texte à l'aide d'une grille de critères.",
          ],
          course: [
            {
              heading: "Préparer son épisode au brouillon",
              paragraphs: [
                "Avant d'écrire, prenez quelques minutes pour préparer votre histoire au brouillon. Répondez à quelques questions simples : qui est le héros, et quelles sont ses qualités et ses faiblesses ? Où et quand se passe l'histoire ? Quel est son but ? Quel danger va-t-il rencontrer ? Qui va l'aider, qui va s'opposer à lui ?",
                "Notez ensuite, en quelques mots, les cinq étapes du schéma narratif : la situation initiale, l'élément perturbateur, deux ou trois péripéties, l'élément de résolution et la situation finale. Ce plan vous évite de vous perdre en route et de terminer votre histoire trop vite. Un épisode d'aventures doit surtout développer les péripéties : c'est là que se trouvent l'action et le suspense.",
              ],
              box: { label: "Repère", text: "Au brouillon : le héros (qualités, faiblesses), le lieu et l'époque, le but, les dangers, les adjuvants et les opposants, puis une ligne pour chaque étape du schéma narratif." },
            },
            {
              heading: "Bien choisir ses temps : imparfait et passé simple",
              paragraphs: [
                "Un récit d'aventures s'écrit le plus souvent au passé, avec deux temps qui travaillent ensemble. L'imparfait sert à décrire le décor et les personnages, et à raconter les habitudes : « La mer était calme et le vent soufflait doucement. » Il installe l'arrière-plan. Le passé simple sert à raconter les actions principales, celles qui font avancer l'histoire : « Soudain, une vague frappa le navire. » Il met les événements au premier plan.",
                "À la troisième personne, le passé simple des verbes du 1er groupe se termine par -a au singulier et -èrent au pluriel : il marcha, ils marchèrent. Ceux du 2e groupe se terminent par -it et -irent : il finit, ils finirent. Pour le 3e groupe, il faut apprendre les formes : il prit, ils prirent ; il vit, ils virent ; il courut, ils coururent ; il vint, ils vinrent.",
              ],
              box: { label: "Règle", text: "Imparfait : décor, description, habitudes (le vent soufflait). Passé simple : actions principales et soudaines (une vague frappa le navire). 3e personne du 1er groupe : -a, -èrent." },
            },
            {
              heading: "Créer du suspense",
              paragraphs: [
                "Le suspense naît de l'attente : le lecteur sent qu'un danger approche, mais ne sait pas encore lequel. Pour le créer, retardez la découverte du danger : un bruit inconnu, une ombre, une odeur étrange précèdent l'apparition du monstre ou des pirates. Décrivez ce que le héros entend, voit, sent ou touche, et ce qu'il ressent : son cœur bat, ses mains tremblent.",
                "Les connecteurs temporels rythment le récit : « soudain » et « tout à coup » introduisent un événement inattendu ; « alors », « aussitôt » et « à ce moment-là » enchaînent les actions ; « enfin » annonce la fin d'un épisode. Dans les moments d'action, préférez les phrases courtes, qui donnent un rythme rapide. Vous pouvez aussi terminer un paragraphe sur une menace, pour donner envie de lire la suite.",
                "Le dialogue rend la scène vivante. Les paroles des personnages s'écrivent entre guillemets ; à chaque changement de personnage qui parle, on va à la ligne et l'on commence par un tiret. Variez les verbes de parole : s'écria, murmura, répondit, ordonna, supplia.",
              ],
            },
            {
              heading: "Relire et améliorer son texte",
              paragraphs: [
                "Un bon texte se travaille en plusieurs fois. Relisez d'abord pour vérifier l'histoire : les cinq étapes sont-elles présentes ? Les péripéties sont-elles assez développées ? La fin est-elle claire ? Relisez ensuite pour vérifier la langue : les temps (imparfait pour le décor, passé simple pour les actions), les accords du verbe avec son sujet, la ponctuation du dialogue.",
                "Chassez enfin les répétitions : remplacez un nom répété par un pronom (il, elle, le, la) ou par un synonyme (le navire, le bateau, le voilier). Remplacez les verbes trop vagues comme « faire », « aller » ou « il y a » par des verbes précis : au lieu de « il est allé sur l'île », écrivez « il nagea jusqu'à l'île » ou « il accosta sur l'île ».",
              ],
              box: { label: "À retenir", text: "Grille de relecture : 1. les cinq étapes ; 2. imparfait et passé simple ; 3. accords sujet-verbe ; 4. ponctuation du dialogue ; 5. pas de répétitions, des verbes précis." },
            },
          ],
          keyPoints: [
            "Préparer au brouillon : héros, lieu, but, dangers, alliés, puis les cinq étapes du schéma narratif.",
            "Imparfait pour le décor et les descriptions ; passé simple pour les actions principales.",
            "Passé simple, 3e personne, 1er groupe : -a et -èrent (il marcha, ils marchèrent).",
            "Le suspense naît de l'attente : retarder le danger, décrire les sensations, faire des phrases courtes.",
            "Connecteurs : soudain, tout à coup (surprise) ; alors, aussitôt (enchaînement) ; enfin (fin).",
            "Relire pour l'histoire, puis pour la langue ; chasser les répétitions et les verbes vagues.",
          ],
          example: {
            statement: "Améliorez ce début d'épisode d'aventures, trop plat : « Le bateau était sur la mer. Il y a eu une tempête. Le bateau a coulé. Paul est allé sur une île. »",
            solution: [
              "Repérer les défauts : les phrases sont toutes construites de la même façon, le mot « bateau » est répété, « il y a eu » et « est allé » sont vagues, il n'y a ni sensation ni suspense, et le passé composé remplace le passé simple attendu dans un récit.",
              "Enrichir la situation initiale à l'imparfait : « Le voilier glissait sur une mer d'huile, et Paul, accoudé au bastingage, regardait l'horizon. »",
              "Retarder et annoncer le danger : « Peu à peu, le ciel s'assombrit et un vent froid se leva. »",
              "Raconter l'action au passé simple, avec un connecteur et des phrases courtes : « Soudain, une vague énorme frappa la coque. Le mât craqua. L'eau envahit le pont. »",
              "Remplacer le verbe vague par un verbe précis et finir sur une ouverture : « Accroché à une planche, Paul nagea des heures avant d'échouer sur une plage inconnue. Derrière les arbres, quelque chose bougeait. »",
              "Texte amélioré : « Le voilier glissait sur une mer d'huile, et Paul, accoudé au bastingage, regardait l'horizon. Peu à peu, le ciel s'assombrit et un vent froid se leva. Soudain, une vague énorme frappa la coque. Le mât craqua. L'eau envahit le pont. Accroché à une planche, Paul nagea des heures avant d'échouer sur une plage inconnue. Derrière les arbres, quelque chose bougeait. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez chaque verbe entre parenthèses à l'imparfait ou au passé simple, selon qu'il décrit le décor ou raconte une action. « Le soleil (briller) sur la mer quand soudain le navire (heurter) un rocher. Les marins (crier) de peur. Le capitaine (donner) aussitôt l'ordre de mettre les canots à l'eau. Jim (prendre) la carte au trésor et (sauter) dans le premier canot. »",
              hint: "Le décor qui dure s'écrit à l'imparfait ; les actions soudaines qui font avancer l'histoire s'écrivent au passé simple. Attention au verbe « prendre », du 3e groupe.",
              solution: [
                "« Le soleil brillait » : imparfait, car c'est le décor, une action qui dure en arrière-plan.",
                "« le navire heurta un rocher » : passé simple, car c'est une action soudaine introduite par « soudain ».",
                "« Les marins crièrent » : passé simple, 3e personne du pluriel d'un verbe du 1er groupe, terminaison -èrent.",
                "« Le capitaine donna » : passé simple, terminaison -a.",
                "« Jim prit la carte et sauta » : passé simple ; « prendre » donne « il prit » (3e groupe), « sauter » donne « il sauta » (1er groupe).",
                "Texte corrigé : « Le soleil brillait sur la mer quand soudain le navire heurta un rocher. Les marins crièrent de peur. Le capitaine donna aussitôt l'ordre de mettre les canots à l'eau. Jim prit la carte au trésor et sauta dans le premier canot. »",
              ],
            },
            {
              level: 2,
              statement: "Complétez ce texte avec les connecteurs suivants, chacun employé une fois : Enfin, Soudain, Aussitôt, Pendant des heures. « Marie naviguait seule sur la rivière. ___, le vent se leva et une branche heurta la barque. ___, Marie saisit les rames pour s'éloigner de la rive. ___, elle lutta contre le courant, les bras douloureux. ___, elle aperçut les lumières du village. » Puis expliquez le rôle de chaque connecteur.",
              hint: "Cherchez quel connecteur annonce un événement inattendu, lequel une réaction immédiate, lequel une durée et lequel la fin de l'épisode.",
              solution: [
                "« Soudain, le vent se leva » : « soudain » introduit l'événement inattendu qui rompt le calme.",
                "« Aussitôt, Marie saisit les rames » : « aussitôt » marque une réaction immédiate.",
                "« Pendant des heures, elle lutta contre le courant » : ce connecteur exprime la durée de l'effort et allonge la péripétie.",
                "« Enfin, elle aperçut les lumières du village » : « enfin » annonce la fin de l'épisode et le soulagement.",
                "Texte complété : « Marie naviguait seule sur la rivière. Soudain, le vent se leva et une branche heurta la barque. Aussitôt, Marie saisit les rames pour s'éloigner de la rive. Pendant des heures, elle lutta contre le courant, les bras douloureux. Enfin, elle aperçut les lumières du village. »",
              ],
            },
            {
              level: 3,
              statement: "Défi. Écrivez un épisode d'aventures d'une quinzaine de lignes à partir de cette situation : « Sam, douze ans, a découvert dans le grenier de sa grand-mère une carte qui mène à une grotte au bord de la mer. Un soir, à marée basse, il décide d'y entrer seul. » Contraintes : écrire à la troisième personne, à l'imparfait et au passé simple ; utiliser au moins trois connecteurs temporels ; décrire au moins deux sensations ; faire apparaître un adjuvant ou un opposant ; terminer par une situation finale.",
              hint: "Faites d'abord votre plan au brouillon en cinq lignes, une par étape du schéma narratif. Pensez à la marée : c'est un danger tout trouvé qui peut créer du suspense.",
              solution: [
                "Plan possible. Situation initiale : Sam entre dans la grotte à la lumière de sa lampe. Élément perturbateur : la mer commence à remonter. Péripéties : sa lampe faiblit ; il se perd ; un bruit l'effraie. Résolution : un phoque le guide vers une sortie. Situation finale : Sam rentre chez sa grand-mère, la carte à la main.",
                "Exemple de texte : « La grotte était humide et silencieuse. Sam avançait lentement, sa lampe à la main ; l'odeur des algues lui piquait le nez. Il suivit le tracé de la carte et découvrit, gravée dans la roche, une étrange flèche. Soudain, il entendit un grondement sourd derrière lui : la mer remontait ! L'eau glacée lui mouilla bientôt les chevilles. Il courut vers l'entrée, mais le passage était déjà inondé. Alors, sa lampe se mit à clignoter, puis s'éteignit. »",
                "Suite : « Dans le noir, Sam sentit son cœur battre à tout rompre. Tout à coup, un souffle bruyant résonna tout près. Il tendit sa lampe, qui se ralluma un instant : un phoque le regardait de ses grands yeux noirs. L'animal plongea dans une galerie que Sam n'avait pas vue. Sam le suivit en nageant et déboucha enfin sur une petite plage, sous les étoiles. Le soir même, assis près de sa grand-mère, il lui raconta tout. Elle sourit, et lui dit que cette carte avait appartenu à son propre père. »",
                "Vérification avec la grille : les cinq étapes sont présentes ; l'imparfait décrit (« était », « avançait ») et le passé simple raconte (« suivit », « courut ») ; les connecteurs « soudain », « alors », « tout à coup » et « enfin » rythment le récit ; les sensations sont l'odeur des algues, l'eau glacée et le cœur qui bat ; le phoque est un adjuvant, la marée un obstacle ; la fin présente une situation finale. Tout texte qui respecte ces contraintes est juste.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Écrire un récit d'aventures.",
            statements: [
              { text: "Dans un récit au passé, l'imparfait sert à décrire le décor.", true: true, why: "L'imparfait installe l'arrière-plan : le paysage, le temps qu'il fait, les habitudes." },
              { text: "« Il marcha » est un verbe à l'imparfait.", true: false, why: "C'est le passé simple ; à l'imparfait, on écrit « il marchait »." },
              { text: "« Ils crièrent » est au passé simple.", true: true, why: "Les verbes du 1er groupe se terminent par -èrent à la 3e personne du pluriel du passé simple." },
              { text: "Pour créer du suspense, il faut révéler le danger dès la première phrase.", true: false, why: "Le suspense naît de l'attente : il vaut mieux retarder la découverte du danger." },
              { text: "Le connecteur « soudain » introduit souvent un événement inattendu.", true: true, why: "Il marque une rupture dans le récit, comme « tout à coup »." },
              { text: "Le brouillon est inutile quand on a déjà une bonne idée.", true: false, why: "Le plan au brouillon permet d'organiser les étapes et d'éviter une fin trop rapide." },
              { text: "Remplacer un nom répété par un pronom ou un synonyme améliore le texte.", true: true, why: "Cela évite les répétitions : le navire, le bateau, il." },
            ],
          },
          quiz: [
            { q: "Quelle est la forme du verbe « sauter » au passé simple, à la 3e personne du pluriel ?", options: ["ils sautaient", "ils sautèrent", "ils sautent", "ils sauteront"], answer: 1, why: "Au passé simple, les verbes du 1er groupe prennent la terminaison -èrent au pluriel ; « ils sautaient » est à l'imparfait." },
            { q: "Quel temps choisir pour décrire le décor dans un récit au passé ?", options: ["le passé simple", "le futur simple", "l'imparfait"], answer: 2, why: "L'imparfait sert aux descriptions et à l'arrière-plan ; le passé simple sert aux actions principales." },
            { q: "Quel connecteur annonce la fin d'un épisode ?", options: ["Enfin", "Soudain", "Tout à coup", "Aussitôt"], answer: 0, why: "« Enfin » marque l'aboutissement ; « soudain » et « tout à coup » introduisent un événement inattendu, « aussitôt » une réaction immédiate." },
            { q: "Pour créer du suspense, il vaut mieux...", options: ["révéler tout de suite ce qui menace le héros", "supprimer toutes les descriptions", "raconter la fin dès le début", "retarder la découverte du danger"], answer: 3, why: "Le suspense naît de l'attente : un bruit, une ombre ou une odeur annoncent le danger avant qu'il apparaisse." },
            { q: "Dans un dialogue, que fait-on à chaque changement de personnage qui parle ?", options: ["On écrit en majuscules", "On va à la ligne", "On change de temps", "On supprime la ponctuation"], answer: 1, why: "On va à la ligne et l'on commence par un tiret, pour que le lecteur sache qui parle." },
          ],
          trap: "Écrire tout le récit à l'imparfait, ou tout au passé simple, ou passer au passé composé en cours de route : l'imparfait décrit le décor, le passé simple raconte les actions.",
          method: "Relisez votre texte trois fois, avec un seul objectif à chaque lecture : d'abord l'histoire (les cinq étapes), ensuite les temps des verbes, enfin les répétitions et la ponctuation.",
        },
      ],
    },
  ],
}
