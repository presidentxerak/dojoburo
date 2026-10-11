import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'svt-2nde',
  chapters: [
    /* ==================================================================== */
    /* PROCRÉATION ET SEXUALITÉ HUMAINE                                      */
    /* ==================================================================== */
    {
      id: 'procreation-sexualite',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'appareils-sexuels',
          title: "Les appareils sexuels : structure et fonctions",
          minutes: 30,
          objectives: [
            "Identifier les organes des appareils sexuels féminin et masculin et indiquer leur fonction.",
            "Distinguer les gonades, les voies génitales et les organes génitaux externes.",
            "Relier la structure du testicule et de l'ovaire à la double production de gamètes et d'hormones.",
            "Décrire les grandes étapes de la mise en place des appareils sexuels chez l'embryon.",
          ],
          course: [
            {
              heading: "Un plan d'organisation commun aux deux sexes",
              paragraphs: [
                "Chez l'être humain, la reproduction est sexuée : un nouvel individu naît de la rencontre de deux cellules reproductrices, les gamètes, un spermatozoïde produit par un homme et un ovocyte produit par une femme. Les appareils sexuels (ou appareils génitaux) assurent la production de ces gamètes, leur rencontre et, chez la femme, le développement de l'embryon puis du fœtus pendant la grossesse.",
                "Les deux appareils suivent le même plan en trois parties. Les gonades (testicules chez l'homme, ovaires chez la femme) produisent les gamètes et des hormones sexuelles. Les voies génitales conduisent les gamètes : épididymes et canaux déférents chez l'homme, trompes, utérus et vagin chez la femme. Enfin, les organes génitaux externes permettent l'accouplement : le pénis chez l'homme, la vulve, avec le clitoris, chez la femme. Des glandes annexes complètent l'appareil masculin.",
              ],
              box: { label: "Définition", text: "Les gonades sont les organes qui produisent les gamètes et les hormones sexuelles : les testicules chez l'homme, les ovaires chez la femme. Les gamètes (spermatozoïdes, ovocytes) sont les cellules reproductrices : ils ne contiennent qu'un chromosome de chaque paire, soit 23 chromosomes au lieu de 46." },
            },
            {
              heading: "L'appareil sexuel masculin",
              paragraphs: [
                "Les deux testicules sont logés hors de l'abdomen, dans le scrotum (les bourses), où la température est inférieure de quelques degrés (environ 2 à 3 °C) à celle du corps, ce qui favorise la production des spermatozoïdes. Chaque testicule est formé de centaines de tubes séminifères très fins et enroulés. Dans leur paroi, des cellules se divisent sans arrêt depuis la puberté et se transforment en spermatozoïdes : c'est la spermatogenèse, qui dure un peu plus de deux mois et produit chaque jour un très grand nombre de spermatozoïdes. Entre les tubes, de petits amas de cellules, les cellules interstitielles (ou cellules de Leydig), sécrètent la testostérone dans le sang.",
                "Les spermatozoïdes quittent le testicule par l'épididyme, un long canal enroulé où ils achèvent leur maturation et deviennent mobiles, puis empruntent le canal déférent (ou spermiducte), qui remonte dans l'abdomen. Les vésicules séminales et la prostate ajoutent leurs sécrétions, riches en nutriments comme le fructose, qui forment avec les spermatozoïdes le sperme. Les canaux déférents rejoignent l'urètre, qui traverse la prostate puis le pénis : l'urètre est donc commun aux voies urinaires et génitales, mais l'urine et le sperme n'y passent jamais en même temps.",
                "Le pénis contient des tissus érectiles qui se gorgent de sang lors de l'excitation sexuelle : c'est l'érection, qui permet l'accouplement. L'émission du sperme par l'urètre est l'éjaculation ; un éjaculat de quelques millilitres contient en général de plusieurs dizaines à quelques centaines de millions de spermatozoïdes.",
              ],
              box: { label: "Repère", text: "Trajet des spermatozoïdes : tube séminifère (dans le testicule), épididyme, canal déférent, urètre, puis sortie par le pénis. Les vésicules séminales et la prostate ajoutent le liquide séminal au passage." },
            },
            {
              heading: "L'appareil sexuel féminin",
              paragraphs: [
                "Les deux ovaires, de la taille d'une amande, sont situés dans l'abdomen, de part et d'autre de l'utérus. Dès la naissance, chaque ovaire contient un stock de follicules, petites structures qui renferment chacune un ovocyte entouré de cellules. Ce stock, de l'ordre de un à deux millions de follicules à la naissance, ne se renouvelle pas et diminue tout au long de la vie. De la puberté à la ménopause (vers 50 ans en moyenne), un follicule arrive en général à maturité à chaque cycle et libère son ovocyte : c'est l'ovulation. Les cellules des follicules sécrètent les hormones ovariennes : les œstrogènes puis, après l'ovulation, la progestérone.",
                "L'ovocyte libéré est capté par le pavillon de la trompe (ou oviducte). C'est dans la trompe que peut avoir lieu la fécondation, si des spermatozoïdes sont présents. L'embryon descend ensuite vers l'utérus, organe creux et musclé dont la paroi comprend un muscle épais, le myomètre, et une muqueuse interne, l'endomètre (ou muqueuse utérine). L'embryon s'implante dans l'endomètre environ une semaine après la fécondation : c'est la nidation.",
                "L'utérus s'ouvre vers le bas par le col de l'utérus, qui produit un mucus, la glaire cervicale, puis par le vagin, organe de l'accouplement qui reçoit le pénis et par lequel naît l'enfant lors de l'accouchement. Les organes génitaux externes forment la vulve : grandes et petites lèvres, ouverture du vagin, ouverture de l'urètre (chez la femme, voies urinaires et génitales sont séparées) et clitoris. Le clitoris est un organe érectile dont seule une petite partie est visible : il se prolonge à l'intérieur du corps, et son rôle est le plaisir sexuel.",
              ],
              box: { label: "À retenir", text: "Trajet de l'ovocyte : ovaire (ovulation), pavillon puis trompe (lieu de la fécondation), utérus (nidation de l'embryon dans l'endomètre). Les spermatozoïdes déposés dans le vagin font le chemin inverse : col, utérus, trompe." },
            },
            {
              heading: "La mise en place des appareils sexuels",
              paragraphs: [
                "Le sexe génétique est fixé dès la fécondation : un embryon porte le plus souvent une paire XX ou une paire XY de chromosomes sexuels. Pendant les premières semaines, l'embryon possède des gonades indifférenciées et deux paires de canaux qui pourraient former des voies génitales masculines ou féminines. Chez l'embryon XY, un gène du chromosome Y, le gène SRY, déclenche vers la septième semaine la transformation des gonades en testicules. Ceux-ci sécrètent de la testostérone, qui oriente les voies génitales et les organes externes vers le type masculin, et l'hormone antimüllérienne, qui fait disparaître les canaux qui auraient formé l'utérus et les trompes. En l'absence de SRY, les gonades deviennent des ovaires et l'appareil se développe selon le type féminin.",
                "À la naissance, les appareils sexuels sont donc en place, mais ils ne fonctionnent pas encore : ils ne produisent ni gamètes ni hormones sexuelles en quantité importante. Ils deviennent fonctionnels à la puberté (leçon suivante). Il existe aussi des variations du développement sexuel, dans lesquelles chromosomes, gonades et organes ne correspondent pas aux deux types habituels : elles rappellent que le sexe biologique se construit par étapes successives.",
              ],
            },
          ],
          keyPoints: [
            "Gonades : testicules et ovaires, qui produisent les gamètes et les hormones sexuelles.",
            "Testicule : tubes séminifères (spermatozoïdes, production continue depuis la puberté) et cellules interstitielles (testostérone).",
            "Trajet des spermatozoïdes : testicule, épididyme, canal déférent, urètre ; vésicules séminales et prostate ajoutent le liquide séminal.",
            "Femme : ovaires (follicules, ovocytes, œstrogènes, progestérone), trompes (fécondation), utérus (nidation dans l'endomètre), col, vagin, vulve.",
            "Le stock de follicules est constitué avant la naissance et ne se renouvelle pas, alors que la production de spermatozoïdes est continue.",
            "Chez l'embryon XY, le gène SRY déclenche la formation des testicules ; sans SRY, les gonades deviennent des ovaires.",
          ],
          example: {
            statement: "Décrivez le trajet d'un spermatozoïde depuis son lieu de production jusqu'au lieu de la fécondation, en nommant chaque organe traversé.",
            solution: [
              "Production : le spermatozoïde est formé dans la paroi d'un tube séminifère du testicule.",
              "Maturation : il passe dans l'épididyme, où il devient mobile.",
              "Conduction chez l'homme : il emprunte le canal déférent, reçoit les sécrétions des vésicules séminales et de la prostate, puis gagne l'urètre, qui traverse le pénis.",
              "Dépôt : lors de l'éjaculation, le sperme est déposé dans le vagin.",
              "Remontée chez la femme : le spermatozoïde franchit le col de l'utérus (si la glaire le permet), traverse la cavité utérine et pénètre dans une trompe.",
              "Réponse : tube séminifère, épididyme, canal déférent, urètre, puis vagin, col, utérus et trompe, lieu de la fécondation.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque fonction, nommez l'organe qui l'assure et précisez s'il appartient à l'appareil masculin ou féminin : a) produire les ovocytes ; b) accueillir l'embryon lors de la nidation ; c) servir de lieu à la fécondation ; d) produire la testostérone ; e) assurer la maturation et la mobilité des spermatozoïdes ; f) ajouter au sperme un liquide riche en fructose.",
              hint: "Suivez le trajet des gamètes dans chaque appareil et demandez-vous ce qui se passe à chaque étape.",
              solution: [
                "a) L'ovaire, plus précisément les follicules qu'il contient (appareil féminin).",
                "b) L'utérus, plus précisément sa muqueuse, l'endomètre (appareil féminin).",
                "c) La trompe (appareil féminin).",
                "d) Le testicule, par ses cellules interstitielles (appareil masculin).",
                "e) L'épididyme (appareil masculin).",
                "f) Les vésicules séminales (appareil masculin).",
              ],
            },
            {
              level: 2,
              statement: "Expériences classiques réalisées chez le rat (résultats simplifiés). Expérience 1 : un rat adulte est castré (ablation des deux testicules) ; il devient stérile, son comportement sexuel disparaît et ses vésicules séminales et sa prostate s'atrophient. Expérience 2 : on injecte régulièrement de la testostérone à un rat castré ; ses glandes annexes retrouvent leur taille et son comportement sexuel réapparaît, mais il reste stérile. a) Que montre l'expérience 1 ? b) Que montre l'expérience 2 ? c) Pourquoi le rat de l'expérience 2 reste-t-il stérile ? d) Concluez sur les deux fonctions du testicule.",
              hint: "Comparez ce que l'injection d'hormone rétablit et ce qu'elle ne rétablit pas : une hormone peut remplacer une sécrétion, pas une production de cellules.",
              solution: [
                "a) Sans testicules, le rat est stérile, ses glandes annexes régressent et son comportement sexuel disparaît : les testicules sont nécessaires à la fertilité, au maintien des glandes annexes et au comportement sexuel.",
                "b) La testostérone seule suffit à rétablir les glandes annexes et le comportement : le testicule agit sur eux par l'intermédiaire de cette hormone, transportée par le sang.",
                "c) Les spermatozoïdes sont produits dans les tubes séminifères des testicules ; sans testicules, aucun spermatozoïde n'est fabriqué, et l'hormone ne peut pas remplacer cette production de cellules.",
                "d) Conclusion : le testicule a une double fonction, la production des gamètes (spermatozoïdes) et la sécrétion d'une hormone (la testostérone).",
              ],
            },
            {
              level: 3,
              statement: "Mme A. a des cycles réguliers de 28 jours et des règles normales ; ses analyses montrent qu'elle ovule chaque mois. Pourtant, après une infection génitale non traitée il y a quelques années, elle n'arrive pas à avoir d'enfant, et un examen d'imagerie révèle que ses deux trompes sont obstruées. Mme B., elle, a subi l'ablation de ses deux ovaires lors d'une opération. a) Expliquez pourquoi Mme A. est infertile alors qu'elle ovule. b) Expliquez pourquoi elle a toujours des règles. c) Mme B. peut-elle encore produire des ovocytes ? Aura-t-elle encore des règles ? Justifiez à l'aide des fonctions de l'ovaire.",
              hint: "Distinguez ce qui dépend du passage des gamètes (les trompes) et ce qui dépend des hormones ovariennes (le fonctionnement de l'utérus).",
              solution: [
                "a) La fécondation a lieu dans la trompe. Si les deux trompes sont obstruées, les spermatozoïdes ne peuvent pas rejoindre l'ovocyte : il n'y a pas de fécondation, même si l'ovulation est normale.",
                "b) Les ovaires de Mme A. fonctionnent normalement et sécrètent les œstrogènes et la progestérone. Ce sont ces hormones qui règlent l'épaississement puis l'élimination de l'endomètre : les règles ne dépendent pas des trompes.",
                "c) L'ovaire produit les ovocytes et les hormones ovariennes. Sans ovaires, Mme B. ne produit plus d'ovocytes : elle est stérile.",
                "Elle ne sécrète plus non plus d'œstrogènes ni de progestérone : son endomètre n'est plus stimulé, et elle n'a plus de règles. Un traitement hormonal peut compenser certains effets de l'absence d'hormones, mais pas l'absence d'ovocytes.",
                "Conclusion : l'ovaire, comme le testicule, a une double fonction, gamètes et hormones ; les trompes assurent la rencontre des gamètes.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque organe à sa fonction.",
            pairs: [
              { left: "Testicule", right: "Produit les spermatozoïdes et la testostérone" },
              { left: "Épididyme", right: "Maturation et mobilité des spermatozoïdes" },
              { left: "Prostate", right: "Ajoute une partie du liquide séminal" },
              { left: "Ovaire", right: "Produit les ovocytes, les œstrogènes et la progestérone" },
              { left: "Trompe", right: "Lieu de la fécondation" },
              { left: "Endomètre", right: "Muqueuse où s'implante l'embryon" },
            ],
          },
          quiz: [
            {
              q: "Où a lieu la fécondation chez la femme ?",
              options: ["Dans la cavité de l'utérus", "Dans la trompe", "Dans l'ovaire", "Dans le vagin"],
              answer: 1,
              why: "L'ovocyte libéré par l'ovaire est capté par la trompe, où il peut rencontrer les spermatozoïdes ; l'embryon descend ensuite vers l'utérus.",
            },
            {
              q: "Quelles cellules sécrètent la testostérone ?",
              options: ["Les spermatozoïdes au cours de leur formation", "Les cellules de la prostate", "Les cellules de l'épididyme", "Les cellules interstitielles du testicule"],
              answer: 3,
              why: "Les cellules interstitielles (de Leydig), situées entre les tubes séminifères, sécrètent la testostérone dans le sang.",
            },
            {
              q: "Quel conduit est commun aux voies urinaires et génitales chez l'homme ?",
              options: ["L'urètre", "La vessie", "Le canal déférent", "L'uretère"],
              answer: 0,
              why: "L'urètre conduit l'urine hors de la vessie et reçoit aussi le sperme par les canaux déférents ; l'uretère relie le rein à la vessie.",
            },
            {
              q: "Quelle affirmation sur les ovaires est exacte ?",
              options: ["Ils fabriquent de nouveaux follicules toute la vie", "Ils libèrent des millions d'ovocytes à chaque cycle", "Leur stock de follicules existe dès la naissance", "Ils ne sécrètent aucune hormone"],
              answer: 2,
              why: "Le stock de follicules est constitué avant la naissance et ne se renouvelle pas ; en général, un seul ovocyte est libéré par cycle.",
            },
            {
              q: "Quel gène déclenche la formation des testicules chez l'embryon ?",
              options: ["Un gène du chromosome X", "Le gène SRY du chromosome Y", "Un gène de l'ADN mitochondrial", "Aucun gène : seule la testostérone agit"],
              answer: 1,
              why: "Le gène SRY, porté par le chromosome Y, oriente les gonades indifférenciées vers la formation de testicules, qui sécrètent ensuite la testostérone.",
            },
          ],
          trap: "Confondre l'urètre, qui conduit l'urine et le sperme hors du corps, avec l'uretère, qui conduit l'urine du rein à la vessie ; ou placer la fécondation dans l'utérus, alors qu'elle a lieu dans la trompe.",
          method: "Dessinez de mémoire un schéma légendé de chaque appareil, comparez-le à celui du manuel, puis suivez au doigt le trajet des gamètes en nommant chaque organe : le nom sur lequel vous hésitez est celui qu'il faut revoir.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'puberte-hormones',
          title: "La puberté et la régulation hormonale",
          minutes: 35,
          objectives: [
            "Décrire les transformations de la puberté et expliquer leur déclenchement hormonal.",
            "Expliquer le contrôle de la sécrétion de testostérone par l'hypothalamus et l'hypophyse, et le rôle du rétrocontrôle négatif.",
            "Décrire les cycles ovarien et utérin et expliquer leur synchronisation par les hormones ovariennes.",
            "Exploiter des courbes de concentrations hormonales pour situer l'ovulation dans le cycle.",
          ],
          course: [
            {
              heading: "La puberté : des organes qui deviennent fonctionnels",
              paragraphs: [
                "La puberté est la période de transition entre l'enfance et l'âge adulte au cours de laquelle les appareils sexuels deviennent fonctionnels. Elle débute en général entre 8 et 13 ans chez les filles et entre 9 et 14 ans chez les garçons, et dure plusieurs années. Elle s'accompagne d'une forte croissance en taille et de l'apparition des caractères sexuels secondaires : chez les filles, développement des seins, élargissement du bassin, pilosité pubienne et axillaire ; chez les garçons, augmentation du volume des testicules et du pénis, pilosité du visage et du corps, mue de la voix, développement musculaire.",
                "Les premières règles marquent chez la fille le début du fonctionnement cyclique de l'appareil sexuel ; chez le garçon, les premières éjaculations signalent la production de spermatozoïdes. Ces transformations sont dues à l'augmentation de la sécrétion d'hormones sexuelles par les gonades : la testostérone chez le garçon, les œstrogènes chez la fille. Les gonades ne s'activent pas seules : la puberté est déclenchée par le cerveau, lorsque l'hypothalamus se met à sécréter par pulsations une hormone appelée GnRH, qui stimule l'hypophyse.",
              ],
              box: { label: "Définition", text: "Une hormone est une molécule sécrétée par une glande (ou un groupe de cellules) dans le sang, qui la transporte jusqu'à des cellules cibles éloignées, porteuses de récepteurs spécifiques, dont elle modifie le fonctionnement." },
            },
            {
              heading: "Chez l'homme : une production continue sous contrôle du cerveau",
              paragraphs: [
                "L'hypothalamus, situé à la base du cerveau, sécrète par pulsations la GnRH (gonadolibérine). Elle agit sur une glande voisine, l'hypophyse, qui sécrète alors deux hormones appelées gonadostimulines : la LH et la FSH. Chez l'homme, la LH stimule les cellules interstitielles du testicule, qui produisent la testostérone ; la FSH, avec la testostérone, permet la production des spermatozoïdes dans les tubes séminifères.",
                "La testostérone agit à son tour sur l'hypothalamus et l'hypophyse : quand sa concentration augmente, elle freine la sécrétion de GnRH et de LH ; quand elle diminue, ce frein se relâche et la sécrétion reprend. C'est un rétrocontrôle négatif. Il maintient la concentration de testostérone dans le sang à peu près stable chez l'homme adulte (malgré des variations au cours de la journée), comme un thermostat maintient la température d'une pièce. La production de spermatozoïdes est ainsi continue de la puberté jusqu'à un âge avancé, même si elle diminue avec les années.",
              ],
              box: { label: "Définition", text: "Rétrocontrôle : action en retour d'une hormone sur les organes qui commandent sa propre sécrétion. Il est négatif quand l'hormone freine sa propre production (il stabilise sa concentration), positif quand elle l'amplifie." },
            },
            {
              heading: "Chez la femme : des cycles ovariens et utérins",
              paragraphs: [
                "De la puberté à la ménopause, l'appareil sexuel féminin fonctionne par cycles d'environ 28 jours en moyenne (de 21 à 35 jours selon les femmes et les périodes de la vie). Par convention, le jour 1 du cycle est le premier jour des règles. Le cycle ovarien comprend trois temps : la phase folliculaire, pendant laquelle plusieurs follicules grossissent puis un seul, le plus souvent, atteint la maturité ; l'ovulation, vers le milieu du cycle (jour 14 pour un cycle de 28 jours), quand ce follicule mûr libère son ovocyte ; la phase lutéale, pendant laquelle le follicule vide se transforme en corps jaune.",
                "Pendant la phase folliculaire, les follicules sécrètent des œstrogènes de plus en plus abondants. Après l'ovulation, le corps jaune sécrète de la progestérone et des œstrogènes. En l'absence de fécondation, il dégénère au bout d'environ 14 jours et ses sécrétions chutent. La phase lutéale dure ainsi environ 14 jours de façon assez constante, alors que la durée de la phase folliculaire varie : c'est elle qui explique que des cycles soient plus courts ou plus longs.",
                "Le cycle utérin suit le cycle ovarien. Sous l'effet des œstrogènes, l'endomètre s'épaissit et se vascularise ; sous l'effet de la progestérone, en phase lutéale, il se creuse de glandes et forme la dentelle utérine, prête à accueillir un embryon. Quand le corps jaune dégénère, la chute des hormones provoque la destruction de la couche superficielle de l'endomètre, éliminée avec un peu de sang : ce sont les règles, qui ouvrent un nouveau cycle. Le col varie aussi : autour de l'ovulation, la glaire cervicale devient fluide et laisse passer les spermatozoïdes ; le reste du temps, elle forme un réseau serré qui les bloque.",
              ],
            },
            {
              heading: "La régulation des cycles par l'hypothalamus et l'hypophyse",
              paragraphs: [
                "Comme chez l'homme, l'hypothalamus sécrète la GnRH, qui stimule la sécrétion de FSH et de LH par l'hypophyse. La FSH stimule la croissance des follicules, qui produisent des œstrogènes. Pendant la plus grande partie du cycle, les hormones ovariennes exercent un rétrocontrôle négatif sur l'hypothalamus et l'hypophyse : les sécrétions de LH et de FSH restent modérées.",
                "À la fin de la phase folliculaire, le follicule mûr produit beaucoup d'œstrogènes. Au-delà d'un seuil de concentration maintenu pendant environ deux jours, le rétrocontrôle devient positif : l'hypophyse libère brutalement une grande quantité de LH. Ce pic de LH déclenche l'ovulation dans les 36 heures environ qui suivent son début. En phase lutéale, la progestérone associée aux œstrogènes rétablit un rétrocontrôle négatif. Si un embryon s'implante, il sécrète une hormone, l'hCG, qui maintient le corps jaune en activité : les hormones ovariennes restent élevées et les règles ne surviennent pas. C'est l'hCG que détectent les tests de grossesse.",
              ],
              box: { label: "À retenir", text: "Hypothalamus (GnRH), puis hypophyse (LH, FSH), puis gonades (testostérone ; œstrogènes et progestérone), puis organes cibles. Les hormones des gonades agissent en retour sur l'hypothalamus et l'hypophyse : rétrocontrôle négatif, sauf avant l'ovulation, où il devient positif et provoque le pic de LH." },
            },
          ],
          keyPoints: [
            "Puberté : déclenchée par la sécrétion pulsatile de GnRH par l'hypothalamus ; les gonades produisent gamètes et hormones, les caractères sexuels secondaires apparaissent.",
            "Commande : hypothalamus (GnRH), hypophyse (LH et FSH), gonades.",
            "Homme : la LH stimule la sécrétion de testostérone ; FSH et testostérone permettent la spermatogenèse ; rétrocontrôle négatif, production continue.",
            "Femme : cycle ovarien (phase folliculaire, ovulation, phase lutéale d'environ 14 jours) et cycle utérin (règles, épaississement, dentelle utérine).",
            "Œstrogènes très élevés en fin de phase folliculaire : rétrocontrôle positif, pic de LH, ovulation.",
            "Sans fécondation, le corps jaune dégénère, les hormones chutent et les règles surviennent ; en cas de grossesse, l'hCG de l'embryon maintient le corps jaune.",
          ],
          example: {
            statement: "Une femme a des cycles réguliers de 32 jours. Ses dernières règles ont commencé le 3 mars. Estimez le jour du cycle et la date de son ovulation, puis la date probable de ses prochaines règles.",
            solution: [
              "Rappel : c'est la phase lutéale qui dure environ 14 jours, de l'ovulation à la fin du cycle ; la phase folliculaire, elle, varie.",
              "Prochaines règles : elles commencent le jour 33, qui devient le jour 1 du cycle suivant, soit 32 jours après le 3 mars. Mars compte 31 jours : 3 + 32 = 35, et 35 - 31 = 4. Les prochaines règles sont prévues le 4 avril.",
              "Jour de l'ovulation : 32 - 14 = 18. L'ovulation a lieu vers le jour 18 du cycle (la phase lutéale couvre alors les jours 19 à 32, soit 14 jours).",
              "Date de l'ovulation : le jour 1 est le 3 mars, donc le jour 18 est le 3 + 17 = 20 mars.",
              "Réponse : ovulation vers le 18e jour du cycle, le 20 mars ; prochaines règles vers le 4 avril. Ce n'est qu'une estimation, car la durée des cycles peut varier d'un mois à l'autre.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des hormones suivantes, indiquez l'organe qui la sécrète et un de ses effets : a) GnRH ; b) LH chez l'homme ; c) FSH chez la femme ; d) testostérone ; e) œstrogènes ; f) progestérone.",
              hint: "Placez les hormones sur la chaîne de commande hypothalamus, hypophyse, gonades, organes cibles.",
              solution: [
                "a) GnRH : sécrétée par l'hypothalamus ; elle stimule la sécrétion de LH et de FSH par l'hypophyse.",
                "b) LH : sécrétée par l'hypophyse ; chez l'homme, elle stimule la sécrétion de testostérone par les cellules interstitielles du testicule.",
                "c) FSH : sécrétée par l'hypophyse ; chez la femme, elle stimule la croissance des follicules ovariens.",
                "d) Testostérone : sécrétée par les testicules ; elle permet la spermatogenèse, le développement des caractères sexuels secondaires masculins et exerce un rétrocontrôle négatif.",
                "e) Œstrogènes : sécrétés par les follicules puis le corps jaune ; ils font épaissir l'endomètre et rendent la glaire cervicale fluide autour de l'ovulation.",
                "f) Progestérone : sécrétée par le corps jaune ; elle transforme l'endomètre en dentelle utérine prête pour la nidation.",
              ],
            },
            {
              level: 2,
              statement: "Chez un rat mâle adulte, on mesure la concentration sanguine de LH avant et après castration (ablation des testicules) : elle passe de 1 à 6 unités arbitraires en quelques semaines. On injecte ensuite chaque jour de la testostérone au rat castré : la LH redescend à environ 1 unité (données fictives). a) Expliquez l'augmentation de la LH après la castration. b) Expliquez l'effet des injections. c) Nommez le mécanisme mis en évidence et dites quel est son intérêt pour l'organisme.",
              hint: "Demandez-vous quelle hormone, produite par les testicules, freinait normalement l'hypothalamus et l'hypophyse.",
              solution: [
                "a) Les testicules produisent la testostérone, qui freine normalement la sécrétion de GnRH et de LH. Après la castration, il n'y a plus de testostérone : le frein disparaît et l'hypophyse sécrète beaucoup plus de LH (de 1 à 6 unités).",
                "b) La testostérone injectée rétablit le frein : la sécrétion de LH diminue et revient à sa valeur initiale.",
                "c) Il s'agit d'un rétrocontrôle négatif de la testostérone sur l'hypothalamus et l'hypophyse.",
                "Intérêt : ce mécanisme maintient la concentration de testostérone à peu près stable ; si elle augmente, la LH diminue et la sécrétion de testostérone baisse ; si elle diminue, la LH augmente et la relance.",
              ],
            },
            {
              level: 3,
              statement: "Concentrations plasmatiques mesurées chez une femme au cycle régulier de 28 jours (données simplifiées). Œstradiol (principal œstrogène) : faible du jour 1 au jour 6, en forte hausse du jour 7 au jour 12, pic au jour 12, puis baisse ; deuxième hausse, modérée, du jour 16 au jour 24, puis chute. LH : faible tout le cycle, sauf un pic très marqué au jour 13. Progestérone : presque nulle jusqu'au jour 14, élevée du jour 16 au jour 25, puis chute jusqu'au jour 28. a) Situez l'ovulation et justifiez. b) Expliquez l'origine du pic de LH. c) Quelle structure ovarienne sécrète la progestérone entre les jours 16 et 25 ? d) Expliquez ce qui se passe dans l'utérus au jour 1 du cycle suivant. e) Comment ces courbes seraient-elles modifiées après le jour 20 si une grossesse débutait ?",
              hint: "Lisez les courbes dans l'ordre chronologique et cherchez les relations de cause à effet entre les pics successifs.",
              solution: [
                "a) L'ovulation a lieu vers le jour 14 : elle suit le pic de LH du jour 13, qui la déclenche, et précède la montée de la progestérone, qui n'apparaît qu'une fois le corps jaune formé.",
                "b) Le pic d'œstradiol du jour 12 dépasse le seuil au-delà duquel le rétrocontrôle des œstrogènes devient positif : l'hypothalamus et l'hypophyse sont stimulés et l'hypophyse libère massivement de la LH.",
                "c) Après l'ovulation, le follicule vide devient le corps jaune, qui sécrète la progestérone (et une partie de l'œstradiol) entre les jours 16 et 25.",
                "d) En l'absence de fécondation, le corps jaune dégénère : la progestérone et l'œstradiol chutent à partir du jour 25. Privé de ces hormones, l'endomètre perd sa couche superficielle, éliminée avec du sang : ce sont les règles, qui marquent le jour 1 du cycle suivant.",
                "e) En cas de grossesse, l'embryon implanté sécrète l'hCG, qui maintient le corps jaune : la progestérone et l'œstradiol resteraient élevés au lieu de chuter, et les règles ne surviendraient pas.",
                "Conclusion : les cycles ovarien et utérin sont synchronisés par les hormones ovariennes, elles-mêmes contrôlées par l'hypothalamus et l'hypophyse.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les événements d'un cycle féminin de 28 jours sans fécondation, en commençant par le jour 1.",
            items: [
              "Règles : élimination de la couche superficielle de l'endomètre",
              "Croissance d'un follicule et hausse de la sécrétion d'œstrogènes",
              "Concentration d'œstrogènes très élevée : rétrocontrôle positif",
              "Pic de LH sécrété par l'hypophyse",
              "Ovulation : libération de l'ovocyte",
              "Le corps jaune sécrète progestérone et œstrogènes : dentelle utérine",
              "Dégénérescence du corps jaune et chute des hormones ovariennes",
            ],
          },
          quiz: [
            {
              q: "Quelle glande sécrète la LH et la FSH ?",
              options: ["L'hypothalamus", "L'ovaire", "L'hypophyse", "La thyroïde"],
              answer: 2,
              why: "L'hypophyse, stimulée par la GnRH de l'hypothalamus, sécrète les deux gonadostimulines, LH et FSH.",
            },
            {
              q: "Que déclenche le pic de LH ?",
              options: ["L'ovulation", "Le début des règles", "La formation de nouveaux follicules", "La dégénérescence du corps jaune"],
              answer: 0,
              why: "Le pic de LH, provoqué par le rétrocontrôle positif des œstrogènes, déclenche l'ovulation dans les heures qui suivent.",
            },
            {
              q: "Chez l'homme, quel est l'effet d'une hausse de la testostérone sur la sécrétion de LH ?",
              options: ["Elle l'augmente fortement", "Elle n'a aucun effet", "Elle la rend cyclique", "Elle la diminue"],
              answer: 3,
              why: "La testostérone exerce un rétrocontrôle négatif sur l'hypothalamus et l'hypophyse : plus il y en a, moins la LH est sécrétée.",
            },
            {
              q: "Quelle structure ovarienne sécrète la progestérone après l'ovulation ?",
              options: ["Le follicule en croissance", "Le corps jaune", "L'ovocyte libéré", "Le pavillon de la trompe"],
              answer: 1,
              why: "Après l'ovulation, le follicule vide se transforme en corps jaune, qui sécrète la progestérone et des œstrogènes.",
            },
            {
              q: "Pourquoi les règles surviennent-elles en fin de cycle sans fécondation ?",
              options: ["Parce que la LH atteint un pic", "Parce que l'ovocyte est éliminé par le vagin", "Parce que les hormones ovariennes chutent", "Parce que l'hypothalamus cesse de fonctionner"],
              answer: 2,
              why: "Le corps jaune dégénère, la progestérone et les œstrogènes chutent, et l'endomètre, privé de ces hormones, se désagrège.",
            },
          ],
          trap: "Croire que l'ovulation a toujours lieu le 14e jour : c'est la phase lutéale qui dure environ 14 jours, et dans un cycle de 32 jours l'ovulation se situe vers le 18e jour. Autre confusion : attribuer les règles à l'élimination de l'ovocyte, alors qu'elles résultent de la chute des hormones ovariennes.",
          method: "Pour exploiter des courbes hormonales, lisez-les dans l'ordre chronologique et écrivez chaque relation sous la forme « A, donc B » : pic d'œstrogènes, donc pic de LH ; pic de LH, donc ovulation ; ovulation, donc corps jaune et montée de la progestérone.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'contraception-pma',
          title: "Maîtriser sa procréation : contraception et aide médicale à la procréation",
          minutes: 35,
          objectives: [
            "Expliquer le mode d'action des principales méthodes contraceptives, en particulier de la pilule combinée.",
            "Distinguer contraception, contraception d'urgence et interruption volontaire de grossesse.",
            "Identifier les principales causes d'infertilité chez la femme et chez l'homme.",
            "Décrire les techniques d'aide médicale à la procréation (insémination artificielle, FIV, ICSI) et leurs indications.",
          ],
          course: [
            {
              heading: "La contraception hormonale : agir sur la régulation des cycles",
              paragraphs: [
                "La contraception regroupe les méthodes qui empêchent temporairement et de façon réversible la survenue d'une grossesse. Les méthodes hormonales utilisent des molécules de synthèse proches des hormones ovariennes. La pilule combinée, la plus utilisée, associe un œstrogène et un progestatif de synthèse, pris chaque jour selon un schéma précis (par exemple 21 comprimés suivis de 7 jours sans hormones).",
                "Ces hormones de synthèse maintiennent dans le sang une concentration stable qui exerce un rétrocontrôle négatif permanent sur l'hypothalamus et l'hypophyse : la sécrétion de LH et de FSH reste faible, aucun follicule n'arrive à maturité, il n'y a pas de pic de LH et donc pas d'ovulation. De plus, le progestatif rend la glaire cervicale épaisse, imperméable aux spermatozoïdes, et l'endomètre peu favorable à la nidation. Les saignements de la semaine sans hormones ne sont pas de vraies règles : ils sont dus à l'arrêt de l'apport d'hormones.",
                "D'autres méthodes reposent sur le même principe : la pilule progestative (progestatif seul), l'implant placé sous la peau du bras, le patch, l'anneau vaginal ou le dispositif intra-utérin (DIU) hormonal. Leur efficacité dépend beaucoup de la régularité de l'utilisation : un oubli de pilule peut suffire à permettre une ovulation. Le choix d'une méthode se fait avec un professionnel de santé (médecin, sage-femme), qui vérifie les contre-indications.",
              ],
              box: { label: "Propriété", text: "La pilule combinée bloque l'ovulation : ses hormones de synthèse exercent un rétrocontrôle négatif sur l'hypothalamus et l'hypophyse, ce qui empêche le pic de LH. Elle épaissit aussi la glaire cervicale et modifie l'endomètre." },
            },
            {
              heading: "Méthodes mécaniques, contraception d'urgence et IVG",
              paragraphs: [
                "Le préservatif externe (dit masculin), qui recouvre le pénis, et le préservatif interne (dit féminin), placé dans le vagin, empêchent les spermatozoïdes d'atteindre l'utérus. Ce sont les seules méthodes qui protègent aussi des infections sexuellement transmissibles (IST). Le DIU au cuivre, placé dans l'utérus par un professionnel de santé, rend le milieu toxique pour les spermatozoïdes et s'oppose à la nidation ; il peut rester en place plusieurs années.",
                "En cas de rapport non protégé ou d'accident de contraception (oubli de pilule, préservatif déchiré), la contraception d'urgence doit être utilisée le plus tôt possible. La pilule d'urgence au lévonorgestrel se prend dans les 72 heures (3 jours), celle à l'ulipristal dans les 120 heures (5 jours) ; elles retardent ou bloquent l'ovulation et sont d'autant plus efficaces qu'elles sont prises tôt. En France, elles sont délivrées en pharmacie sans ordonnance et gratuitement, de façon anonyme pour les mineures. Un DIU au cuivre posé dans les 5 jours est aussi une contraception d'urgence très efficace.",
                "La contraception d'urgence n'interrompt pas une grossesse déjà implantée. L'interruption volontaire de grossesse (IVG), elle, met fin à une grossesse débutée. En France, elle est autorisée depuis la loi Veil de 1975 ; depuis 2022, elle peut être pratiquée jusqu'à la fin de la quatorzième semaine de grossesse, par méthode médicamenteuse ou instrumentale, et depuis 2024 la Constitution garantit la liberté des femmes d'y recourir.",
              ],
              box: { label: "Repère", text: "Contraception : empêche la grossesse. Contraception d'urgence : après un rapport à risque, le plus tôt possible (dans les 72 h ou 120 h selon la pilule). IVG : interrompt une grossesse débutée. Seuls les préservatifs protègent aussi des IST." },
            },
            {
              heading: "L'infertilité et ses causes",
              paragraphs: [
                "On parle d'infertilité lorsqu'un couple n'obtient pas de grossesse après environ douze mois de rapports sexuels réguliers sans contraception. Selon l'Organisation mondiale de la santé, environ une personne sur six dans le monde y est confrontée au cours de sa vie. Les causes peuvent être féminines, masculines, partagées par les deux partenaires, ou rester inexpliquées.",
                "Chez la femme, les causes fréquentes sont l'absence ou l'irrégularité de l'ovulation (troubles hormonaux), l'obstruction des trompes (souvent après une IST non traitée, comme une infection à chlamydia), l'endométriose ou une glaire cervicale défavorable ; la fertilité diminue aussi nettement avec l'âge, surtout après 35 ans, car le stock de follicules s'épuise. Chez l'homme, on trouve des spermatozoïdes trop peu nombreux, peu mobiles ou anormaux, ou une obstruction des voies génitales. Le tabac, l'alcool et certaines expositions toxiques réduisent la fertilité des deux sexes. Un spermogramme et un suivi des cycles orientent le diagnostic.",
              ],
            },
            {
              heading: "Les techniques d'aide médicale à la procréation (AMP)",
              paragraphs: [
                "L'aide médicale à la procréation (AMP), aussi appelée procréation médicalement assistée (PMA), regroupe des techniques qui aident à obtenir une grossesse. La stimulation ovarienne utilise des hormones pour provoquer ou améliorer l'ovulation. L'insémination artificielle consiste à déposer, au moment de l'ovulation, des spermatozoïdes préparés au laboratoire directement dans l'utérus : la fécondation se fait ensuite naturellement dans la trompe. Elle convient quand la glaire est défavorable ou quand les spermatozoïdes sont un peu moins nombreux ou moins mobiles, à condition que les trompes soient perméables.",
                "La fécondation in vitro (FIV) se déroule en plusieurs étapes : stimulation ovarienne pour obtenir plusieurs follicules mûrs, ponction des ovocytes dans les ovaires, mise en contact des ovocytes et des spermatozoïdes au laboratoire, culture des embryons pendant quelques jours, puis transfert d'un ou deux embryons dans l'utérus. La FIV contourne les trompes : c'est la solution en cas de trompes obstruées. La première naissance après FIV a eu lieu en 1978 au Royaume-Uni (Louise Brown), la première en France en 1982 (Amandine).",
                "Lorsque les spermatozoïdes sont très peu nombreux ou très peu mobiles, on pratique une ICSI (injection intracytoplasmique de spermatozoïde) : un seul spermatozoïde est injecté directement dans l'ovocyte à l'aide d'une micropipette. Les embryons non transférés peuvent être congelés. En France, l'AMP est encadrée par les lois de bioéthique : depuis la loi de 2021, elle est ouverte aux couples formés d'un homme et d'une femme, aux couples de femmes et aux femmes non mariées, et peut faire appel à un don de gamètes. Ses taux de réussite restent limités et diminuent avec l'âge de la femme : plusieurs tentatives sont souvent nécessaires.",
              ],
              box: { label: "Définition", text: "FIV : fécondation réalisée au laboratoire après ponction des ovocytes, suivie du transfert d'embryons dans l'utérus. ICSI : variante de la FIV dans laquelle un spermatozoïde est injecté dans l'ovocyte. Insémination artificielle : dépôt de spermatozoïdes dans l'utérus, la fécondation se faisant naturellement dans la trompe." },
            },
          ],
          keyPoints: [
            "La pilule combinée (œstrogène et progestatif de synthèse) exerce un rétrocontrôle négatif : pas de pic de LH, donc pas d'ovulation.",
            "Le progestatif épaissit la glaire cervicale et rend l'endomètre peu favorable à la nidation.",
            "Seuls les préservatifs, externe ou interne, protègent à la fois de la grossesse et des IST.",
            "Contraception d'urgence : le plus tôt possible, dans les 72 h ou 120 h selon la pilule, sans ordonnance en pharmacie. Elle n'est pas une IVG.",
            "Infertilité : pas de grossesse après environ 12 mois ; causes féminines, masculines, mixtes ou inexpliquées.",
            "AMP : insémination artificielle (trompes perméables), FIV (contourne les trompes), ICSI (spermatozoïdes très peu nombreux ou peu mobiles).",
          ],
          example: {
            statement: "Une jeune femme sous pilule combinée a oublié de prendre plusieurs comprimés de suite. Expliquez pourquoi une grossesse devient possible.",
            solution: [
              "Rappel du mode d'action : prise chaque jour, la pilule maintient dans le sang une concentration stable d'hormones de synthèse, qui exerce un rétrocontrôle négatif sur l'hypothalamus et l'hypophyse.",
              "Conséquence habituelle : la LH et la FSH restent basses, aucun follicule ne mûrit, il n'y a pas de pic de LH, donc pas d'ovulation.",
              "Effet de l'oubli : sans comprimés, la concentration des hormones de synthèse diminue en quelques jours et le frein sur l'hypothalamus et l'hypophyse se relâche.",
              "La FSH et la LH augmentent : un follicule peut reprendre sa croissance, sécréter beaucoup d'œstrogènes et provoquer un pic de LH, donc une ovulation. La glaire cervicale peut aussi redevenir perméable.",
              "Réponse : après plusieurs oublis, l'ovulation n'est plus bloquée et une fécondation devient possible ; il faut suivre les consignes de la notice, demander conseil en pharmacie et envisager une contraception d'urgence en cas de rapport récent.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "L'indice de Pearl mesure l'efficacité d'une méthode contraceptive : c'est le nombre de grossesses observées pour 100 femmes utilisant la méthode pendant un an. Données fictives : 2 000 femmes utilisent la méthode A pendant un an et 18 grossesses surviennent ; 500 femmes utilisent la méthode B pendant un an et 40 grossesses surviennent. a) Calculez l'indice de Pearl de chaque méthode. b) Laquelle est la plus efficace ? c) Proposez une raison pour laquelle l'efficacité réelle d'une pilule est inférieure à son efficacité théorique.",
              hint: "Ramenez le nombre de grossesses à 100 femmes par un produit en croix : indice = grossesses ÷ nombre de femmes × 100.",
              solution: [
                "a) Méthode A : 18 ÷ 2 000 × 100 = 0,9. Méthode B : 40 ÷ 500 × 100 = 8.",
                "b) Plus l'indice de Pearl est faible, moins il y a de grossesses, donc plus la méthode est efficace : la méthode A (0,9) est plus efficace que la méthode B (8).",
                "c) Dans la vie réelle, des comprimés sont oubliés ou pris en retard, un vomissement peut empêcher leur absorption, et certains médicaments réduisent leur efficacité : l'utilisation n'est pas toujours parfaite.",
                "Résultat : indices 0,9 et 8 ; la méthode A est la plus efficace.",
              ],
            },
            {
              level: 2,
              statement: "Chez une femme sans contraception, la LH présente un pic au 14e jour du cycle et la progestérone est élevée du 16e au 26e jour. Chez la même femme sous pilule combinée, la LH reste basse et constante pendant tout le cycle, et sa progestérone naturelle reste presque nulle (données simplifiées). a) Quelle conclusion tirer de l'absence de pic de LH ? b) Que signifie l'absence de progestérone naturelle en seconde partie de cycle ? c) Expliquez le mécanisme par lequel la pilule produit ces effets.",
              hint: "Rappelez-vous quelle structure ovarienne sécrète la progestérone, et dans quelle condition elle se forme.",
              solution: [
                "a) Le pic de LH déclenche l'ovulation ; sans pic de LH, il n'y a pas d'ovulation.",
                "b) La progestérone naturelle est sécrétée par le corps jaune, qui se forme à partir du follicule après l'ovulation. Son absence confirme qu'aucune ovulation n'a eu lieu.",
                "c) Les hormones de synthèse de la pilule, présentes en permanence, exercent un rétrocontrôle négatif sur l'hypothalamus et l'hypophyse : la sécrétion de GnRH, de LH et de FSH reste faible, aucun follicule ne mûrit et le rétrocontrôle positif qui provoque le pic de LH ne se produit jamais.",
                "Conclusion : la pilule combinée est contraceptive avant tout parce qu'elle bloque l'ovulation.",
              ],
            },
            {
              level: 3,
              statement: "Pour chacun des trois couples suivants, proposez la technique d'AMP la plus adaptée et justifiez. Couple 1 : la femme a les deux trompes obstruées ; le spermogramme de l'homme est normal. Couple 2 : la femme ovule normalement et ses trompes sont perméables ; les spermatozoïdes de l'homme sont un peu moins mobiles que la normale. Couple 3 : l'homme produit très peu de spermatozoïdes, presque immobiles ; la femme ne présente pas d'anomalie. Expliquez enfin pourquoi une FIV commence par une stimulation ovarienne.",
              hint: "Pour chaque couple, repérez l'obstacle à la fécondation, puis choisissez la technique la plus simple qui le contourne.",
              solution: [
                "Couple 1 : l'obstacle est l'obstruction des trompes, qui empêche la rencontre des gamètes. L'insémination artificielle ne servirait à rien, car la fécondation devrait toujours se faire dans la trompe. Il faut une FIV, qui réalise la fécondation au laboratoire puis place l'embryon directement dans l'utérus.",
                "Couple 2 : les trompes sont perméables et l'ovulation normale ; seule la mobilité des spermatozoïdes est un peu réduite. Une insémination artificielle, qui dépose des spermatozoïdes sélectionnés directement dans l'utérus au moment de l'ovulation, raccourcit leur trajet : c'est la technique la plus simple adaptée.",
                "Couple 3 : les spermatozoïdes sont trop peu nombreux et trop peu mobiles pour féconder seuls un ovocyte, même au laboratoire. Il faut une ICSI : un spermatozoïde est injecté directement dans l'ovocyte.",
                "Stimulation ovarienne : naturellement, un seul ovocyte est libéré par cycle. Les hormones administrées font mûrir plusieurs follicules à la fois, ce qui permet de ponctionner plusieurs ovocytes, d'obtenir plusieurs embryons et d'augmenter les chances de réussite.",
                "Résultat : FIV pour le couple 1, insémination artificielle pour le couple 2, ICSI pour le couple 3.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque méthode à son mode d'action.",
            pairs: [
              { left: "Pilule combinée", right: "Bloque l'ovulation par rétrocontrôle négatif" },
              { left: "Préservatif", right: "Barrière contre les spermatozoïdes et les IST" },
              { left: "DIU au cuivre", right: "Toxique pour les spermatozoïdes, s'oppose à la nidation" },
              { left: "Pilule d'urgence", right: "Retarde ou bloque l'ovulation après un rapport à risque" },
              { left: "FIV", right: "Fécondation au laboratoire, puis transfert d'embryons" },
              { left: "ICSI", right: "Injection d'un spermatozoïde dans l'ovocyte" },
            ],
          },
          quiz: [
            {
              q: "Comment la pilule combinée empêche-t-elle principalement une grossesse ?",
              options: ["En bloquant l'ovulation", "En tuant les spermatozoïdes dans le vagin", "En provoquant des règles chaque semaine", "En détruisant les follicules de l'ovaire"],
              answer: 0,
              why: "Par rétrocontrôle négatif sur l'hypothalamus et l'hypophyse, elle empêche le pic de LH et donc l'ovulation.",
            },
            {
              q: "Quelle méthode protège aussi des IST ?",
              options: ["La pilule progestative", "Le DIU au cuivre", "Le préservatif", "L'implant hormonal"],
              answer: 2,
              why: "Le préservatif empêche le contact entre les muqueuses et les liquides sexuels ; les méthodes hormonales et le DIU n'ont aucun effet sur les IST.",
            },
            {
              q: "Dans quel délai maximal la pilule d'urgence au lévonorgestrel doit-elle être prise ?",
              options: ["24 heures", "72 heures", "7 jours", "Jusqu'aux prochaines règles"],
              answer: 1,
              why: "Elle doit être prise le plus tôt possible et au plus tard 72 heures après le rapport ; celle à l'ulipristal peut l'être jusqu'à 120 heures.",
            },
            {
              q: "Quelle technique est indiquée quand les deux trompes sont obstruées ?",
              options: ["L'insémination artificielle", "La stimulation ovarienne seule", "La pilule d'urgence", "La fécondation in vitro"],
              answer: 3,
              why: "La FIV réalise la fécondation au laboratoire et place l'embryon dans l'utérus, sans passer par les trompes.",
            },
            {
              q: "En quoi consiste l'ICSI ?",
              options: ["Déposer des spermatozoïdes dans l'utérus", "Stimuler les ovaires par des hormones de synthèse", "Injecter un spermatozoïde dans un ovocyte", "Congeler des embryons pour plus tard"],
              answer: 2,
              why: "L'ICSI est une variante de la FIV : un seul spermatozoïde est injecté dans l'ovocyte, ce qui permet une fécondation même avec très peu de spermatozoïdes.",
            },
          ],
          trap: "Confondre la contraception d'urgence et l'IVG : la pilule d'urgence agit sur l'ovulation, avant toute fécondation, et n'interrompt pas une grossesse implantée. Autre erreur fréquente : penser que la pilule protège des IST.",
          method: "Pour chaque méthode, posez trois questions : à quelle étape agit-elle (ovulation, rencontre des gamètes, nidation) ? Protège-t-elle des IST ? De quoi dépend son efficacité ? Un tableau à trois colonnes construit de mémoire fait une excellente fiche de révision.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'sexualite-ist',
          title: "Sexualité, plaisir et prévention des IST",
          minutes: 30,
          objectives: [
            "Expliquer que la sexualité humaine ne se réduit pas à la procréation et que le plaisir repose notamment sur le système de récompense.",
            "Identifier les principales IST, la nature de leurs agents et leurs conséquences.",
            "Argumenter sur les moyens de prévention des IST : préservatif, vaccination, dépistage.",
            "Expliquer la place du consentement et du respect dans la vie affective et sexuelle.",
          ],
          course: [
            {
              heading: "Une sexualité qui ne se réduit pas à la procréation",
              paragraphs: [
                "Chez l'être humain, l'activité sexuelle est largement dissociée de la reproduction : la plupart des rapports sexuels n'ont ni pour but ni pour effet une grossesse, et la contraception permet de choisir le moment d'avoir un enfant. La sexualité a des dimensions biologiques, affectives, psychologiques, culturelles et sociales : elle s'inscrit dans des relations, des émotions et des normes qui varient selon les sociétés et les époques.",
                "Le plaisir sexuel repose en partie sur des mécanismes biologiques. Les stimulations sensorielles (le toucher de zones érogènes, par exemple) sont transmises au cerveau, où elles activent le système de récompense : un ensemble de neurones reliant des aires profondes du cerveau, dont l'aire tegmentale ventrale et le noyau accumbens, qui communiquent notamment grâce à une molécule, la dopamine. L'activation de ce circuit procure une sensation de plaisir et incite à renouveler le comportement. Le même système intervient dans d'autres activités agréables (manger, jouer, réussir) ; il est détourné par les drogues, ce qui explique en partie les addictions.",
                "Chez l'humain, le cerveau joue un rôle majeur : l'apprentissage, l'imaginaire, l'histoire personnelle et le contexte (confiance, désir partagé) modulent profondément le plaisir. Le comportement sexuel humain n'est donc pas un simple réflexe commandé par les hormones, contrairement à celui de nombreux mammifères chez qui l'accouplement n'a lieu qu'en période de chaleurs, lorsque la femelle est fécondable.",
              ],
              box: { label: "Définition", text: "Système de récompense : réseau de neurones du cerveau dont l'activation, liée notamment à la libération de dopamine, produit une sensation de plaisir et renforce le comportement qui l'a provoquée." },
            },
            {
              heading: "Consentement, respect et diversité",
              paragraphs: [
                "Une relation sexuelle suppose le consentement libre et éclairé de chaque partenaire, à chaque moment : il peut être retiré à tout instant, et il ne peut pas être obtenu par la contrainte, la menace ou la surprise, ni donné par une personne dont la conscience est altérée (alcool, drogue, sommeil). Tout acte sexuel imposé est une violence, punie par la loi. La loi française protège particulièrement les mineurs ; en cas de violence ou de doute, il est possible de se confier à un adulte de confiance, à l'infirmière ou à l'infirmier scolaire, ou d'appeler le 119 (Allô enfance en danger), numéro gratuit.",
                "L'orientation sexuelle (attirance pour des personnes de l'autre sexe, du même sexe ou des deux) et l'identité de genre font partie de la diversité humaine. En France, les discriminations fondées sur l'orientation sexuelle ou l'identité de genre sont interdites par la loi. Le respect de soi et des autres, la communication entre partenaires et l'accès à une information fiable sont au cœur de la santé sexuelle, que l'Organisation mondiale de la santé décrit comme un état de bien-être physique, émotionnel, mental et social lié à la sexualité.",
              ],
              box: { label: "Règle", text: "Sans le consentement libre, éclairé et réversible de chaque partenaire, il n'y a pas de relation sexuelle acceptable : un acte imposé est une violence punie par la loi." },
            },
            {
              heading: "Les infections sexuellement transmissibles (IST)",
              paragraphs: [
                "Les IST sont des infections dues à des microorganismes transmis lors de rapports sexuels (vaginaux, anaux ou bucco-génitaux), par contact avec les muqueuses ou avec les liquides corporels (sperme, sécrétions vaginales, sang). Certaines se transmettent aussi par le sang ou de la mère à l'enfant pendant la grossesse ou l'accouchement. Beaucoup restent longtemps sans symptôme : une personne infectée peut se sentir en bonne santé et transmettre l'infection sans le savoir.",
                "Les IST bactériennes se soignent par des antibiotiques. L'infection à Chlamydia trachomatis, très fréquente chez les jeunes et souvent silencieuse, peut, non traitée, abîmer les trompes et provoquer une infertilité ; la gonococcie et la syphilis sont aussi d'origine bactérienne. Les IST virales ne se soignent pas par antibiotiques. Le VIH (virus de l'immunodéficience humaine) détruit peu à peu certaines cellules immunitaires et conduit, sans traitement, au sida. Les papillomavirus humains (HPV) peuvent causer des verrues génitales et des cancers, dont celui du col de l'utérus. Le virus de l'hépatite B atteint le foie, et celui de l'herpès génital provoque des poussées récidivantes.",
              ],
              box: { label: "Repère", text: "IST bactériennes (chlamydia, gonocoque, syphilis) : traitées par antibiotiques. IST virales (VIH, HPV, hépatite B, herpès) : aucun antibiotique n'agit ; des traitements contrôlent certaines d'entre elles, et des vaccins existent contre les HPV et l'hépatite B." },
            },
            {
              heading: "Se protéger et se faire dépister",
              paragraphs: [
                "Le préservatif, externe ou interne, utilisé dès le début et jusqu'à la fin de chaque rapport, est le seul moyen de contraception qui protège aussi des IST ; en France, il est gratuit en pharmacie pour les moins de 26 ans. Deux vaccinations sont recommandées : contre les HPV, pour les filles et les garçons à partir de 11 ans (une campagne de vaccination est proposée au collège, en classe de 5e) ; contre l'hépatite B, en général dès la petite enfance.",
                "Le dépistage est essentiel, puisque beaucoup d'IST sont silencieuses. Il se fait par prise de sang, prélèvement ou analyse d'urine, chez un médecin, dans un laboratoire ou dans un centre gratuit d'information, de dépistage et de diagnostic (CeGIDD), où il est gratuit. Pour le VIH, il existe aussi des tests rapides et des autotests vendus en pharmacie. Un test n'est fiable qu'après un certain délai suivant la prise de risque : 6 semaines pour le test VIH de laboratoire, 3 mois pour un autotest.",
                "Après une prise de risque vis-à-vis du VIH (rapport non protégé, préservatif rompu), un traitement post-exposition (TPE) peut être prescrit, par exemple aux urgences : il doit commencer le plus tôt possible, idéalement dans les 4 heures et au plus tard dans les 48 heures. Une personne séropositive qui suit un traitement efficace, avec une charge virale indétectable, ne transmet pas le VIH à ses partenaires. Enfin, la prophylaxie préexposition (PrEP) est un traitement préventif proposé aux personnes très exposées au VIH.",
              ],
            },
          ],
          keyPoints: [
            "La sexualité humaine est en grande partie dissociée de la procréation ; elle a des dimensions biologiques, affectives et sociales.",
            "Le plaisir repose notamment sur le système de récompense du cerveau, qui fait intervenir la dopamine.",
            "Le consentement libre, éclairé et réversible de chaque partenaire est indispensable ; tout acte imposé est une violence punie par la loi.",
            "IST bactériennes (chlamydia, gonocoque, syphilis) : antibiotiques. IST virales (VIH, HPV, hépatite B, herpès) : aucun antibiotique efficace.",
            "Beaucoup d'IST sont silencieuses : seul un dépistage, fait après le bon délai, permet de savoir.",
            "Prévention : préservatif, vaccination contre les HPV et l'hépatite B, dépistage, TPE dans les 48 h après un risque d'exposition au VIH.",
          ],
          example: {
            statement: "Un jeune homme a eu un rapport sexuel sans préservatif avec une partenaire dont il ne connaît pas le statut. Il n'a aucun symptôme et en conclut qu'il n'a rien attrapé. Que lui répondez-vous, en argumentant ?",
            solution: [
              "Constat : son raisonnement est faux, car l'absence de symptôme ne prouve pas l'absence d'infection.",
              "Argument 1 : beaucoup d'IST, comme l'infection à chlamydia ou l'infection récente par le VIH, restent longtemps sans symptôme, tout en étant transmissibles.",
              "Argument 2 : s'il est infecté sans le savoir, il peut contaminer d'autres partenaires et subir des complications (infertilité, atteinte du foie, évolution vers le sida).",
              "Conduite à tenir : si le rapport date de moins de 48 heures, il peut consulter aux urgences pour évaluer l'intérêt d'un traitement post-exposition au VIH ; dans tous les cas, il doit se faire dépister (CeGIDD, médecin, laboratoire) en respectant les délais de fiabilité des tests.",
              "Prévention : utiliser le préservatif à chaque rapport tant que les deux partenaires n'ont pas fait de dépistage.",
              "Réponse : ne pas avoir de symptôme ne veut pas dire ne pas être infecté ; seul un dépistage permet de le savoir.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les IST suivantes selon la nature de leur agent (bactérie ou virus) et indiquez si un antibiotique peut les soigner : infection à chlamydia, infection par le VIH, syphilis, herpès génital, infection à papillomavirus (HPV), gonococcie, hépatite B.",
              hint: "Les antibiotiques n'agissent que sur les bactéries : classer l'agent revient à répondre à la seconde question.",
              solution: [
                "IST dues à une bactérie : infection à chlamydia, syphilis, gonococcie. Un antibiotique peut les soigner.",
                "IST dues à un virus : infection par le VIH, herpès génital, infection à HPV, hépatite B. Aucun antibiotique n'agit sur elles.",
                "Pour les IST virales, des médicaments antiviraux contrôlent certaines infections (VIH, herpès, hépatite B) sans toujours les guérir, et des vaccins protègent contre les HPV et l'hépatite B.",
              ],
            },
            {
              level: 2,
              statement: "En 1954, les chercheurs James Olds et Peter Milner implantent une électrode dans certaines régions profondes du cerveau de rats. En appuyant sur un levier, le rat déclenche lui-même une petite stimulation électrique de la région visée. Les rats appuient sur le levier de façon répétée, des centaines de fois par heure, parfois au détriment de l'alimentation. Lorsque l'électrode est placée dans d'autres régions du cerveau, ils cessent rapidement d'appuyer. a) Que montre cette expérience ? b) Reliez-la à la notion de système de récompense. c) Pourquoi ce résultat ne suffit-il pas à expliquer la sexualité humaine ?",
              hint: "Demandez-vous pourquoi un animal répète un comportement, et comparez ce que montrent les deux emplacements de l'électrode.",
              solution: [
                "a) Les rats répètent volontairement un comportement qui stimule certaines régions précises du cerveau, et pas d'autres : la stimulation de ces régions est recherchée, elle agit comme une récompense.",
                "b) Ces régions appartiennent au système de récompense. Leur activation, qui fait intervenir la dopamine, produit une sensation de plaisir et renforce le comportement qui l'a provoquée : le rat appuie encore et encore.",
                "c) Chez l'humain, le plaisir sexuel dépend aussi de l'apprentissage, des émotions, de l'imaginaire, de la relation avec le partenaire et du contexte culturel. Le système de récompense en est une base biologique, mais il ne résume pas la sexualité humaine.",
                "Conclusion : l'expérience met en évidence un circuit cérébral du plaisir, qui intervient notamment dans la sexualité.",
              ],
            },
            {
              level: 3,
              statement: "Situation : Léa, 17 ans, a eu il y a 20 heures un rapport au cours duquel le préservatif s'est déchiré. Elle n'utilise pas d'autre contraception. Son partenaire ne connaît pas son propre statut vis-à-vis des IST. a) À quels deux risques Léa est-elle exposée ? b) Quelles démarches lui conseillez-vous, par ordre d'urgence, et dans quels délais ? c) Pourquoi un test de dépistage du VIH fait le lendemain ne serait-il pas concluant ? d) Quelles mesures de prévention peut-elle envisager pour l'avenir ?",
              hint: "Classez les démarches selon leur délai maximal : certaines ne sont efficaces que dans les heures ou les jours qui suivent le rapport.",
              solution: [
                "a) Léa est exposée à un risque de grossesse non désirée et à un risque d'IST, puisque le statut de son partenaire est inconnu.",
                "b) Première urgence : la contraception d'urgence, à prendre le plus tôt possible. À 20 heures du rapport, elle est encore dans les délais (72 heures pour le lévonorgestrel, 120 heures pour l'ulipristal) ; elle l'obtient en pharmacie, sans ordonnance, gratuitement et de façon anonyme.",
                "Deuxième urgence : consulter rapidement (urgences, CeGIDD) pour évaluer le risque d'exposition au VIH ; si un traitement post-exposition est indiqué, il doit débuter au plus tard 48 heures après le rapport.",
                "Ensuite : faire un dépistage des IST, en respectant les délais de fiabilité des tests, et consulter en cas de symptôme.",
                "c) Juste après une contamination, le virus et les anticorps ne sont pas encore détectables : un test fait le lendemain pourrait être négatif alors qu'il y a infection. Le test de laboratoire n'est fiable qu'à partir de 6 semaines (3 mois pour un autotest).",
                "d) Pour l'avenir : une contraception régulière choisie avec un professionnel de santé, le préservatif à chaque rapport contre les IST (jusqu'à un dépistage des deux partenaires), et la vaccination contre les HPV si elle n'a pas été faite.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Démêlez les idées reçues sur la sexualité et les IST.",
            statements: [
              { text: "On peut être porteur d'une IST sans avoir aucun symptôme.", true: true, why: "Beaucoup d'IST, comme l'infection à chlamydia, sont longtemps silencieuses : seul un dépistage permet de savoir." },
              { text: "La pilule contraceptive protège des IST.", true: false, why: "La pilule bloque l'ovulation mais n'empêche aucun contact avec les microorganismes : seul le préservatif protège des IST." },
              { text: "Une infection à chlamydia non traitée peut rendre infertile.", true: true, why: "Elle peut abîmer et obstruer les trompes, empêchant la rencontre des gamètes." },
              { text: "Les antibiotiques guérissent l'infection par le VIH.", true: false, why: "Le VIH est un virus : les antibiotiques n'ont aucun effet. Les traitements antirétroviraux le contrôlent sans le faire disparaître." },
              { text: "Il existe un vaccin contre les papillomavirus, recommandé aux filles et aux garçons.", true: true, why: "La vaccination contre les HPV est recommandée à partir de 11 ans pour tous et prévient notamment des cancers." },
              { text: "Un test VIH fait le lendemain d'une prise de risque suffit à être rassuré.", true: false, why: "Il faut attendre un délai (6 semaines pour le test de laboratoire) pour qu'une infection soit détectable." },
              { text: "Un consentement donné une fois vaut pour tous les rapports suivants.", true: false, why: "Le consentement se donne à chaque fois et peut être retiré à tout moment." },
            ],
          },
          quiz: [
            {
              q: "Quelle molécule joue un rôle central dans le système de récompense ?",
              options: ["L'insuline", "La testostérone", "L'hCG", "La dopamine"],
              answer: 3,
              why: "Les neurones du système de récompense libèrent notamment de la dopamine, associée à la sensation de plaisir.",
            },
            {
              q: "Quelle IST est due à une bactérie ?",
              options: ["L'infection par les papillomavirus", "L'infection à chlamydia", "L'infection par le VIH", "L'hépatite B"],
              answer: 1,
              why: "Chlamydia trachomatis est une bactérie, ce qui explique que cette infection se soigne par antibiotiques ; les trois autres sont virales.",
            },
            {
              q: "Quel est le seul moyen de contraception qui protège aussi des IST ?",
              options: ["L'implant", "Le DIU hormonal", "Le préservatif", "La pilule combinée"],
              answer: 2,
              why: "Le préservatif forme une barrière entre les muqueuses et les liquides sexuels ; les autres méthodes n'ont aucune action sur les microorganismes.",
            },
            {
              q: "Dans quel délai maximal un traitement post-exposition au VIH doit-il être commencé ?",
              options: ["48 heures", "Deux semaines", "Un mois", "Trois mois"],
              answer: 0,
              why: "Le TPE doit débuter le plus tôt possible, idéalement dans les 4 heures et au plus tard 48 heures après la prise de risque.",
            },
            {
              q: "Pourquoi le dépistage est-il important même sans symptôme ?",
              options: ["Parce que les IST guérissent seules", "Parce que beaucoup d'IST sont silencieuses", "Parce que le dépistage remplace le préservatif", "Parce que seules les femmes sont concernées"],
              answer: 1,
              why: "Une IST silencieuse peut être transmise et provoquer des complications : le dépistage permet de la traiter et d'éviter de la transmettre.",
            },
          ],
          trap: "Croire qu'en l'absence de symptôme on n'a pas d'IST, ou qu'une contraception hormonale protège des IST : seul le préservatif protège, et seul un dépistage fait après le bon délai permet de savoir.",
          method: "Classez les IST dans un tableau à deux colonnes, bactéries et virus : la colonne indique aussitôt si un antibiotique peut soigner. Ajoutez pour chacune une conséquence grave et un moyen de prévention (préservatif, vaccin, dépistage).",
        },
      ],
    },

    /* ==================================================================== */
    /* MICROORGANISMES ET SANTÉ                                              */
    /* ==================================================================== */
    {
      id: 'microorganismes-sante',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'microbiote',
          title: "Le microbiote humain",
          minutes: 30,
          objectives: [
            "Définir le microbiote humain et identifier ses principales localisations.",
            "Expliquer la mise en place et l'évolution du microbiote au cours de la vie.",
            "Expliquer les relations de symbiose entre l'organisme et son microbiote, et leurs bénéfices pour la santé.",
            "Relier certains déséquilibres du microbiote (dysbioses) à des problèmes de santé, en distinguant corrélation et causalité.",
          ],
          course: [
            {
              heading: "Un écosystème qui nous habite",
              paragraphs: [
                "Le corps humain héberge d'innombrables microorganismes : surtout des bactéries, mais aussi des archées, des champignons microscopiques comme les levures, et des virus. L'ensemble des microorganismes qui vivent de façon durable dans un milieu donné de l'organisme forme un microbiote. Il en existe plusieurs : le microbiote intestinal, de loin le plus abondant, mais aussi les microbiotes de la peau, de la bouche, des voies respiratoires et du vagin.",
                "Selon des estimations récentes, le microbiote intestinal compte de l'ordre de 40 000 milliards de bactéries (environ 4 × 10¹³), soit à peu près autant que le nombre de cellules du corps humain (environ 3 × 10¹³). Il réunit chez chaque personne plusieurs centaines d'espèces bactériennes, surtout dans le côlon, où les conditions leur sont favorables (absence de dioxygène, nourriture abondante). Sa composition est propre à chacun, un peu comme une empreinte, tout en partageant un noyau d'espèces fréquentes chez la plupart des individus.",
              ],
              box: { label: "Définition", text: "Microbiote : ensemble des microorganismes (bactéries, archées, champignons, virus) qui vivent durablement dans un milieu donné de l'organisme, comme l'intestin, la peau ou la bouche. Sa composition diffère d'un individu à l'autre." },
            },
            {
              heading: "Un microbiote qui se construit et évolue",
              paragraphs: [
                "Le fœtus se développe dans un milieu considéré comme pratiquement dépourvu de microorganismes. La colonisation commence massivement à la naissance : un enfant né par voie basse reçoit d'abord des bactéries du vagin et de l'intestin de sa mère, un enfant né par césarienne surtout des bactéries de la peau et de l'environnement. L'allaitement, l'alimentation, les contacts et l'environnement enrichissent ensuite le microbiote, qui se diversifie avec la diversification alimentaire et se stabilise vers l'âge de 2 à 3 ans.",
                "À l'âge adulte, le microbiote reste relativement stable, mais il est influencé par l'alimentation (une alimentation riche en fibres végétales favorise sa diversité), la prise de médicaments, en particulier d'antibiotiques, les infections, le mode de vie et le vieillissement. Après un traitement antibiotique, il se reconstitue en général en quelques semaines, mais parfois de façon incomplète.",
              ],
            },
            {
              heading: "Une symbiose bénéfique",
              paragraphs: [
                "Entre l'être humain et son microbiote s'établit une association durable à bénéfices réciproques : une symbiose (on parle aussi de mutualisme). Les bactéries trouvent dans l'intestin un abri, une température stable et une nourriture abondante. En retour, elles rendent plusieurs services à leur hôte.",
                "D'abord, elles participent à la digestion : elles dégradent des fibres végétales, comme la cellulose, que nos propres enzymes ne savent pas digérer, et produisent des acides gras à chaîne courte qui nourrissent les cellules de la paroi intestinale et fournissent un peu d'énergie. Ensuite, elles produisent certaines vitamines, comme la vitamine K et des vitamines du groupe B. Enfin, elles exercent un effet barrière : en occupant l'espace, en consommant les nutriments disponibles, voire en produisant des substances antibactériennes, elles empêchent des bactéries pathogènes de s'installer.",
                "Le microbiote participe aussi à la maturation du système immunitaire : des souris élevées sans aucun microorganisme (souris axéniques) ont un système immunitaire intestinal moins développé et sont plus sensibles à certaines infections. Le microbiote de la peau et celui du vagin, dominé par des lactobacilles qui acidifient le milieu, protègent eux aussi contre des pathogènes.",
              ],
              box: { label: "À retenir", text: "Le microbiote intestinal dégrade des fibres que nos enzymes ne digèrent pas, produit des vitamines (K, groupe B), protège contre les pathogènes par effet barrière et contribue à la maturation du système immunitaire. En échange, il trouve abri et nourriture : c'est une symbiose." },
            },
            {
              heading: "Quand l'équilibre est rompu : la dysbiose",
              paragraphs: [
                "Un déséquilibre durable de la composition du microbiote est appelé dysbiose. Un traitement antibiotique, qui détruit aussi des bactéries utiles, peut en être la cause : une bactérie pathogène peu sensible à l'antibiotique, comme Clostridioides difficile, profite alors de la place libérée et provoque des diarrhées parfois graves. Dans les formes qui récidivent, on peut pratiquer une transplantation de microbiote fécal : on introduit dans l'intestin du malade le microbiote d'un donneur sain, ce qui restaure l'effet barrière.",
                "Des dysbioses sont aussi associées à des maladies inflammatoires de l'intestin, à l'obésité, au diabète de type 2 ou à des allergies. Pour beaucoup de ces maladies, la recherche étudie encore si la dysbiose en est une cause, une conséquence, ou les deux : une association statistique ne suffit pas à prouver une relation de cause à effet. Préserver son microbiote passe par une alimentation variée et riche en fibres et par un usage raisonné des antibiotiques.",
              ],
              box: { label: "Définition", text: "Dysbiose : déséquilibre durable de la composition ou du fonctionnement d'un microbiote, souvent accompagné d'une diminution de sa diversité." },
            },
          ],
          keyPoints: [
            "Microbiote : ensemble des microorganismes vivant durablement dans un milieu de l'organisme (intestin, peau, bouche, vagin).",
            "Microbiote intestinal : environ 4 × 10¹³ bactéries, autant que nos cellules ; composition propre à chacun.",
            "Colonisation dès la naissance (mode d'accouchement, allaitement, alimentation), puis stabilisation vers 2 à 3 ans.",
            "Symbiose : digestion des fibres, production de vitamines (K, groupe B), effet barrière, maturation du système immunitaire.",
            "Dysbiose : déséquilibre durable, par exemple après des antibiotiques (infections à Clostridioides difficile).",
            "Une association n'est pas une causalité : le rôle des dysbioses dans certaines maladies est encore étudié.",
          ],
          example: {
            statement: "Après une semaine d'antibiotiques pris pour une infection respiratoire, un patient souffre de diarrhée. Proposez une explication fondée sur le rôle du microbiote intestinal.",
            solution: [
              "Rappel : le microbiote intestinal vit en symbiose avec nous ; il participe à la digestion et exerce un effet barrière contre les pathogènes.",
              "Effet de l'antibiotique : il ne tue pas seulement les bactéries responsables de l'infection respiratoire ; il détruit aussi une partie des bactéries de l'intestin, qui y sont exposées.",
              "Conséquences : la diversité du microbiote diminue (dysbiose) ; la digestion de certaines fibres est perturbée et l'effet barrière s'affaiblit.",
              "Une bactérie pathogène peu sensible à l'antibiotique, comme Clostridioides difficile, peut alors se multiplier dans la place libérée et provoquer une diarrhée.",
              "Réponse : la diarrhée s'explique par une dysbiose provoquée par l'antibiotique, qui a réduit les fonctions digestives et protectrices du microbiote ; il faut consulter si elle est sévère ou persistante.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Selon des estimations récentes, le microbiote intestinal d'un adulte compte environ 3,8 × 10¹³ bactéries et son corps environ 3,0 × 10¹³ cellules humaines. a) Calculez le rapport entre le nombre de bactéries et le nombre de cellules humaines, arrondi au dixième. b) On suppose (données fictives) qu'un traitement antibiotique détruit 30 % des bactéries intestinales. Combien en reste-t-il ? Exprimez le résultat en notation scientifique, puis en milliards.",
              hint: "Pour diviser deux nombres écrits avec la même puissance de 10, divisez simplement les nombres qui la précèdent. Retirer 30 %, c'est multiplier par 0,7.",
              solution: [
                "a) Rapport = (3,8 × 10¹³) ÷ (3,0 × 10¹³) = 3,8 ÷ 3,0 ≈ 1,27, soit environ 1,3.",
                "Il y a donc à peu près 1,3 bactérie intestinale pour une cellule humaine : les deux nombres sont du même ordre de grandeur.",
                "b) Il reste 70 % des bactéries : 3,8 × 10¹³ × 0,7 = 2,66 × 10¹³ bactéries.",
                "En milliards : 1 milliard = 10⁹, donc 2,66 × 10¹³ = 2,66 × 10⁴ milliards = 26 600 milliards de bactéries.",
                "Résultat : rapport d'environ 1,3 ; il resterait environ 2,7 × 10¹³ bactéries, soit 26 600 milliards.",
              ],
            },
            {
              level: 2,
              statement: "Expériences sur des souris (données fictives, inspirées de travaux sur les souris axéniques). Deux lots de souris reçoivent la même nourriture, en même quantité. Lot 1 : souris axéniques, élevées sans aucun microorganisme. Lot 2 : souris conventionnelles, porteuses d'un microbiote. Après quelques semaines, les souris du lot 1 ont 40 % de masse grasse en moins que celles du lot 2. Quand on transfère le microbiote de souris conventionnelles à des souris axéniques, leur masse grasse augmente nettement en deux semaines, sans qu'elles mangent davantage. Par ailleurs, une bactérie pathogène rend malades les souris axéniques à une dose bien plus faible que les souris conventionnelles. a) Que montre la comparaison des deux lots ? b) Pourquoi l'expérience de transfert renforce-t-elle la conclusion ? c) Quel rôle du microbiote la dernière observation met-elle en évidence ?",
              hint: "Repérez la seule différence entre les lots, puis demandez-vous ce qu'ajoute une expérience où l'on apporte le facteur étudié.",
              solution: [
                "a) Les deux lots ne diffèrent que par la présence du microbiote, et la nourriture est identique. Les souris porteuses d'un microbiote stockent plus de graisse : le microbiote permet de tirer davantage d'énergie des mêmes aliments, notamment en dégradant des fibres que l'hôte ne digère pas.",
                "b) Une simple comparaison montre une association. Le transfert montre que l'apport du microbiote suffit à augmenter la masse grasse sans changer la nourriture : c'est un argument en faveur d'une relation de cause à effet.",
                "c) Les souris sans microbiote tombent malades plus facilement : le microbiote protège contre les pathogènes, par effet barrière et en participant à la maturation du système immunitaire.",
                "Conclusion : le microbiote intervient dans la digestion et dans la protection de l'organisme, ce qui illustre une relation de symbiose.",
              ],
            },
            {
              level: 3,
              statement: "Document (données fictives). M. D., 70 ans, reçoit pendant 10 jours un antibiotique à large spectre pour une pneumonie. Une semaine plus tard, il souffre de diarrhées sévères ; l'analyse des selles révèle une forte proportion de Clostridioides difficile, bactérie peu sensible à l'antibiotique utilisé. Le nombre d'espèces bactériennes détectées dans ses selles est passé de 300 avant le traitement à 90 après. Malgré un traitement adapté, l'infection récidive deux fois. On réalise alors une transplantation de microbiote fécal : quelques semaines plus tard, 250 espèces sont détectées et les diarrhées ont disparu. a) Calculez le pourcentage de diminution du nombre d'espèces après l'antibiotique. b) Expliquez l'apparition de l'infection. c) Expliquez l'efficacité de la transplantation. d) Montrez que ce cas illustre la notion de symbiose.",
              hint: "Pourcentage de diminution = (valeur de départ - valeur d'arrivée) ÷ valeur de départ × 100. Pensez ensuite à l'effet barrière.",
              solution: [
                "a) Diminution = (300 - 90) ÷ 300 × 100 = 210 ÷ 300 × 100 = 70 %. Le nombre d'espèces a diminué de 70 %.",
                "b) L'antibiotique à large spectre a détruit de nombreuses espèces du microbiote intestinal : c'est une dysbiose. L'effet barrière s'est affaibli, et Clostridioides difficile, peu sensible à l'antibiotique, a pu se multiplier dans la place libérée et provoquer les diarrhées.",
                "c) La transplantation apporte le microbiote diversifié d'un donneur sain : le nombre d'espèces remonte à 250. Ces bactéries réoccupent l'espace et consomment les nutriments, ce qui rétablit l'effet barrière et empêche Clostridioides difficile de proliférer.",
                "d) Le microbiote tire de l'intestin abri et nourriture, et protège en retour son hôte contre les pathogènes. Quand il est détruit, l'hôte tombe malade ; quand il est restauré, la santé revient : c'est bien une association à bénéfices réciproques.",
                "Conclusion : diminution de 70 % des espèces, infection due à la perte de l'effet barrière, guérison grâce à sa restauration.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque terme à sa définition.",
            pairs: [
              { left: "Microbiote", right: "Ensemble des microorganismes d'un milieu de l'organisme" },
              { left: "Symbiose", right: "Association durable à bénéfices réciproques" },
              { left: "Dysbiose", right: "Déséquilibre durable du microbiote" },
              { left: "Effet barrière", right: "Occupation de l'espace qui empêche l'installation des pathogènes" },
              { left: "Souris axénique", right: "Animal élevé sans aucun microorganisme" },
              { left: "Transplantation fécale", right: "Apport du microbiote d'un donneur sain" },
            ],
          },
          quiz: [
            {
              q: "Combien de bactéries le microbiote intestinal compte-t-il environ ?",
              options: ["Quelques milliers", "Environ un million", "De l'ordre de 4 × 10¹³", "Autant que d'étoiles dans l'Univers"],
              answer: 2,
              why: "Les estimations récentes donnent de l'ordre de 4 × 10¹³ bactéries, soit à peu près autant que de cellules humaines.",
            },
            {
              q: "Quand la colonisation du tube digestif par le microbiote commence-t-elle massivement ?",
              options: ["À la naissance", "À la puberté", "Vers l'âge de 10 ans", "Au moment de la fécondation"],
              answer: 0,
              why: "Le fœtus vit dans un milieu presque dépourvu de microorganismes ; la colonisation massive débute à la naissance, selon le mode d'accouchement puis l'alimentation.",
            },
            {
              q: "Quel rôle le microbiote intestinal ne joue-t-il pas ?",
              options: ["Dégrader des fibres végétales", "Produire de la vitamine K", "Produire l'insuline du sang", "Limiter l'installation de pathogènes"],
              answer: 2,
              why: "L'insuline est une hormone produite par le pancréas ; les trois autres rôles sont bien assurés par le microbiote.",
            },
            {
              q: "Pourquoi un traitement antibiotique peut-il favoriser une infection intestinale ?",
              options: ["Il apporte des bactéries pathogènes dans l'intestin", "Il transforme les bactéries utiles en bactéries pathogènes", "Il bloque la digestion des protéines par l'estomac", "Il libère de la place en détruisant des bactéries utiles"],
              answer: 3,
              why: "En détruisant une partie du microbiote, l'antibiotique affaiblit l'effet barrière, et une bactérie peu sensible peut proliférer.",
            },
            {
              q: "Une étude montre que les personnes obèses ont, en moyenne, un microbiote moins diversifié. Que peut-on conclure ?",
              options: ["La dysbiose est forcément la cause de l'obésité", "Les deux sont associés, sans causalité prouvée", "L'obésité est forcément la cause de la dysbiose", "Le microbiote ne joue aucun rôle dans la santé"],
              answer: 1,
              why: "Une association statistique ne dit pas lequel des deux phénomènes cause l'autre ; il faut des expériences, comme les transferts de microbiote, pour l'établir.",
            },
          ],
          trap: "Considérer toutes les bactéries comme nuisibles : la grande majorité des bactéries de notre microbiote nous sont utiles, et les détruire sans nécessité (antibiotiques inutiles) peut favoriser l'installation de pathogènes.",
          method: "Pour analyser une expérience sur le microbiote, repérez le lot témoin et la seule différence entre les lots, puis formulez la conclusion en une phrase « Le microbiote est nécessaire à... ». Méfiez-vous des simples corrélations : seule une expérience où l'on apporte ou retire le microbiote montre une cause.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'agents-pathogenes',
          title: "Agents pathogènes et maladies infectieuses",
          minutes: 35,
          objectives: [
            "Distinguer les grands types d'agents pathogènes : bactéries, virus, champignons et parasites.",
            "Identifier les modes de transmission des maladies infectieuses, dont la transmission vectorielle.",
            "Expliquer le cycle d'une maladie vectorielle, le paludisme, et les moyens de lutte associés.",
            "Argumenter sur les mesures de prévention individuelles et collectives : hygiène, vaccination, lutte contre les vecteurs.",
          ],
          course: [
            {
              heading: "Les agents pathogènes",
              paragraphs: [
                "La très grande majorité des microorganismes sont inoffensifs, voire utiles. Un agent pathogène est un microorganisme ou un parasite capable de provoquer une maladie chez son hôte. Une maladie infectieuse résulte de la pénétration et de la multiplication d'un agent pathogène dans l'organisme : c'est l'infection. On distingue quatre grands types d'agents pathogènes.",
                "Les bactéries sont des cellules sans noyau (procaryotes) de quelques micromètres, qui se multiplient par division ; elles causent par exemple la tuberculose, le tétanos, la salmonellose ou la maladie de Lyme. Les virus ne sont pas des cellules : beaucoup plus petits (de quelques dizaines à quelques centaines de nanomètres), ils sont formés d'un matériel génétique (ADN ou ARN) entouré d'une coque de protéines, parfois d'une enveloppe, et ne se multiplient qu'à l'intérieur d'une cellule qu'ils détournent ; ils causent la grippe, la rougeole, le Covid-19 ou le sida.",
                "Les champignons microscopiques provoquent des mycoses, de la peau ou des muqueuses par exemple. Les parasites eucaryotes, unicellulaires comme le Plasmodium du paludisme ou pluricellulaires comme certains vers intestinaux, vivent aux dépens de leur hôte.",
              ],
              box: { label: "Définition", text: "Agent pathogène : microorganisme ou parasite capable de provoquer une maladie. Un virus n'est pas une cellule : c'est un parasite obligatoire, qui ne se multiplie qu'à l'intérieur des cellules qu'il infecte." },
            },
            {
              heading: "Les modes de transmission",
              paragraphs: [
                "La transmission peut être directe, d'une personne à une autre : par contact (peau, muqueuses, rapports sexuels), par les gouttelettes et aérosols émis en toussant, en éternuant ou en parlant (grippe, rougeole, tuberculose), ou par le sang. Elle peut être indirecte : par l'eau ou les aliments contaminés (choléra, salmonellose), par des objets ou des mains souillés. Elle peut enfin être vectorielle : un animal, le vecteur, transporte l'agent pathogène d'un hôte à un autre, le plus souvent en piquant. Les moustiques, les tiques et les puces sont des vecteurs fréquents.",
                "Selon son extension, on parle d'épidémie quand le nombre de cas augmente nettement dans une région pendant une période donnée, de pandémie quand l'épidémie s'étend à plusieurs continents (comme le Covid-19 à partir de 2020), et d'endémie quand la maladie est présente en permanence dans une région (comme le paludisme dans une grande partie de l'Afrique subsaharienne). Le changement climatique et les échanges mondiaux modifient la répartition de certains vecteurs : le moustique tigre, capable de transmettre la dengue, le chikungunya et le zika, s'est installé dans la majorité des départements de France métropolitaine.",
              ],
              box: { label: "Repère", text: "Transmission directe (contact, gouttelettes, sang), indirecte (eau, aliments, objets) ou vectorielle (par un animal vecteur, souvent un insecte piqueur ou une tique)." },
            },
            {
              heading: "Une maladie vectorielle : le paludisme",
              paragraphs: [
                "Le paludisme (ou malaria) est dû à un parasite unicellulaire du genre Plasmodium, dont l'espèce la plus dangereuse est Plasmodium falciparum. Il est transmis par la piqûre de moustiques femelles du genre Anopheles (les anophèles), qui prennent des repas de sang. Selon l'Organisation mondiale de la santé, il provoque chaque année plus de 200 millions de cas et plus d'un demi-million de décès, surtout chez les jeunes enfants en Afrique subsaharienne.",
                "Le cycle du parasite passe par deux hôtes. Lors de la piqûre, l'anophèle infecté injecte avec sa salive des formes du parasite, qui gagnent le foie par le sang et s'y multiplient. Les parasites libérés envahissent ensuite les globules rouges, s'y multiplient et les font éclater, ce qui provoque les accès de fièvre caractéristiques, une anémie et, dans les formes graves, des atteintes du cerveau. Certains parasites se transforment en formes sexuées : quand un autre anophèle pique la personne malade, il les absorbe avec le sang ; le parasite se reproduit dans le moustique, puis gagne ses glandes salivaires, prêt à infecter une nouvelle personne.",
              ],
              box: { label: "À retenir", text: "Paludisme : agent pathogène, Plasmodium (parasite unicellulaire) ; vecteur, l'anophèle femelle ; cycle : moustique, foie, globules rouges (fièvre), puis de nouveau moustique. Il ne se transmet pas d'une personne à une autre par simple contact." },
            },
            {
              heading: "Prévenir les maladies infectieuses",
              paragraphs: [
                "La lutte contre une maladie vectorielle agit sur chaque maillon du cycle : se protéger des piqûres (moustiquaires imprégnées d'insecticide, répulsifs, vêtements couvrants), réduire les populations de vecteurs (suppression des eaux stagnantes où pondent les moustiques, insecticides), traiter rapidement les malades pour qu'ils ne contaminent plus de moustiques et, pour les voyageurs, prendre un traitement préventif. Depuis 2021, l'OMS recommande aussi un vaccin contre le paludisme pour les jeunes enfants des zones les plus touchées.",
                "Pour la maladie de Lyme, due à une bactérie (Borrelia) transmise par les tiques, on se protège en forêt avec des vêtements couvrants et on inspecte sa peau au retour pour retirer rapidement les tiques. Contre les maladies infectieuses en général, les mesures d'hygiène (lavage des mains, eau potable, cuisson et conservation des aliments, port du masque en période d'épidémie) limitent la transmission. La vaccination protège la personne vaccinée et, quand une grande partie de la population l'est, freine la circulation de l'agent pathogène et protège aussi les personnes qui ne peuvent pas être vaccinées : c'est la protection collective.",
                "Enfin, les traitements (antibiotiques contre les bactéries, antiviraux contre certains virus, antiparasitaires) soignent les malades et réduisent la contagion.",
              ],
              box: { label: "Règle", text: "Prévenir, c'est rompre la chaîne de transmission : agir sur l'agent pathogène (traitement), sur le mode de transmission (hygiène, moustiquaires, préservatif) ou sur l'hôte réceptif (vaccination)." },
            },
          ],
          keyPoints: [
            "Agent pathogène : microorganisme ou parasite capable de provoquer une maladie ; quatre types : bactéries, virus, champignons, parasites.",
            "Un virus n'est pas une cellule : il ne se multiplie qu'à l'intérieur d'une cellule hôte.",
            "Transmission directe (contact, gouttelettes, sang), indirecte (eau, aliments, objets) ou vectorielle (moustiques, tiques).",
            "Épidémie, pandémie, endémie selon l'extension de la maladie dans l'espace et dans le temps.",
            "Paludisme : Plasmodium transmis par l'anophèle femelle ; multiplication dans le foie puis les globules rouges ; accès de fièvre.",
            "Prévention : hygiène, vaccination (protection individuelle et collective), lutte contre les vecteurs, traitement des malades.",
          ],
          example: {
            statement: "Le paludisme est une maladie vectorielle. Justifiez cette affirmation en identifiant l'agent pathogène, le vecteur et l'hôte humain, puis expliquez pourquoi une personne malade ne contamine pas directement son entourage.",
            solution: [
              "Définition : une maladie vectorielle est transmise d'un hôte à un autre par un animal, le vecteur.",
              "Agent pathogène : Plasmodium, un parasite unicellulaire, responsable de la maladie.",
              "Vecteur : l'anophèle femelle, moustique qui transporte le parasite et l'injecte lors d'une piqûre.",
              "Hôte humain : le parasite s'y multiplie dans le foie puis dans les globules rouges, ce qui provoque les accès de fièvre.",
              "Absence de contagion directe : le parasite vit dans le foie et le sang, et doit passer par le moustique pour accomplir son cycle et atteindre une autre personne ; le simple contact ne suffit pas.",
              "Réponse : le paludisme est une maladie vectorielle car Plasmodium passe de l'humain à l'humain par l'intermédiaire de l'anophèle ; sans moustique vecteur, pas de transmission.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque maladie, indiquez le type d'agent pathogène (bactérie, virus, champignon ou parasite) et le mode de transmission principal : a) grippe ; b) paludisme ; c) choléra ; d) maladie de Lyme ; e) mycose des pieds ; f) rougeole.",
              hint: "Distinguez transmission directe, indirecte et vectorielle ; un animal intermédiaire signale une transmission vectorielle.",
              solution: [
                "a) Grippe : virus ; transmission directe par les gouttelettes et aérosols (toux, éternuements) et par les mains.",
                "b) Paludisme : parasite unicellulaire (Plasmodium) ; transmission vectorielle par l'anophèle femelle.",
                "c) Choléra : bactérie ; transmission indirecte par l'eau ou les aliments contaminés.",
                "d) Maladie de Lyme : bactérie (Borrelia) ; transmission vectorielle par la tique.",
                "e) Mycose des pieds : champignon microscopique ; transmission par contact, direct ou indirect (sols humides, serviettes partagées).",
                "f) Rougeole : virus ; transmission directe par les gouttelettes et aérosols, maladie très contagieuse.",
              ],
            },
            {
              level: 2,
              statement: "Pour chacune des mesures de lutte contre le paludisme suivantes, indiquez sur quel maillon de la chaîne de transmission elle agit et expliquez comment elle réduit la transmission : a) dormir sous une moustiquaire imprégnée d'insecticide ; b) vider les récipients d'eau stagnante autour des habitations ; c) traiter rapidement les malades par un médicament antipaludique ; d) vacciner les jeunes enfants.",
              hint: "Les maillons sont l'agent pathogène, le vecteur et l'hôte humain : chaque mesure en vise au moins un.",
              solution: [
                "a) Moustiquaire imprégnée : elle agit sur le contact entre le vecteur et l'hôte. Elle empêche les piqûres pendant la nuit, moment où les anophèles piquent, et l'insecticide tue les moustiques qui s'y posent.",
                "b) Suppression des eaux stagnantes : elle agit sur le vecteur. Les larves de moustiques se développent dans l'eau ; sans gîtes de ponte, la population d'anophèles diminue.",
                "c) Traitement rapide des malades : il agit sur l'agent pathogène. En éliminant Plasmodium du sang, il soigne la personne et empêche qu'un moustique qui la pique s'infecte, ce qui coupe le cycle.",
                "d) Vaccination : elle agit sur l'hôte humain, qui devient moins réceptif ; les enfants vaccinés font moins de formes graves et le nombre de malades diminue.",
                "Conclusion : les mesures sont complémentaires, car elles coupent la chaîne de transmission à des endroits différents.",
              ],
            },
            {
              level: 3,
              statement: "Données fictives. Dans une population sans aucune protection, chaque personne atteinte d'une maladie contagieuse en contamine en moyenne 3 autres, et chaque « génération » de contaminations dure 5 jours. Au jour 0, 100 personnes sont malades. a) Calculez le nombre de nouveaux cas aux générations 1, 2, 3 et 4. b) Combien de personnes auront été contaminées au total au bout de 20 jours, en comptant les 100 premières ? c) Des mesures d'hygiène et une vaccination ramènent le nombre moyen de contaminations par malade à 0,5. Calculez de nouveau les nouveaux cas aux générations 1 à 4 (arrondis à l'unité) et comparez. d) Expliquez pourquoi la vaccination d'une grande partie de la population protège aussi les personnes non vaccinées.",
              hint: "À chaque génération, le nombre de nouveaux cas est multiplié par le nombre moyen de contaminations par malade ; 20 jours correspondent à 4 générations.",
              solution: [
                "a) Génération 1 : 100 × 3 = 300 ; génération 2 : 300 × 3 = 900 ; génération 3 : 900 × 3 = 2 700 ; génération 4 : 2 700 × 3 = 8 100.",
                "b) 20 jours = 4 générations de 5 jours. Total : 100 + 300 + 900 + 2 700 + 8 100 = 12 100 personnes contaminées.",
                "c) Avec 0,5 : génération 1 : 100 × 0,5 = 50 ; génération 2 : 25 ; génération 3 : 12,5, soit environ 13 ; génération 4 : 6,25, soit environ 6. Total en 20 jours : environ 100 + 50 + 25 + 13 + 6 = 194 personnes.",
                "Comparaison : quand chaque malade contamine plus d'une personne, l'épidémie s'emballe (12 100 cas) ; quand il en contamine moins d'une, le nombre de nouveaux cas diminue à chaque génération et l'épidémie s'éteint (environ 194 cas).",
                "d) Une personne vaccinée ne tombe pas malade ou transmet beaucoup moins l'agent pathogène. Plus il y a de personnes vaccinées, plus chaque malade rencontre de personnes protégées et moins il contamine de monde : la circulation diminue, et les personnes non vaccinées, comme les nourrissons ou les malades fragiles, sont moins exposées. C'est la protection collective.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le cycle du paludisme, en commençant par la piqûre qui infecte une personne saine.",
            items: [
              "Un anophèle femelle infecté pique une personne et injecte le parasite avec sa salive",
              "Le parasite gagne le foie par le sang et s'y multiplie",
              "Les parasites libérés envahissent les globules rouges",
              "Les globules rouges éclatent : accès de fièvre",
              "Un autre anophèle pique la personne malade et absorbe des formes sexuées du parasite",
              "Le parasite se reproduit dans le moustique et gagne ses glandes salivaires",
            ],
          },
          quiz: [
            {
              q: "Quelle caractéristique distingue les virus des bactéries ?",
              options: ["Les virus sont plus grands", "Les virus ne sont pas des cellules", "Les virus ont un noyau", "Les virus sont toujours inoffensifs"],
              answer: 1,
              why: "Les bactéries sont des cellules ; les virus, formés d'un matériel génétique et d'une coque de protéines, ne peuvent se multiplier que dans une cellule hôte.",
            },
            {
              q: "Quel est le vecteur du paludisme ?",
              options: ["La tique des forêts", "La puce du rat", "Le moustique tigre", "L'anophèle femelle"],
              answer: 3,
              why: "Plasmodium est transmis par la piqûre des anophèles femelles ; la tique transmet la maladie de Lyme et le moustique tigre, par exemple, la dengue.",
            },
            {
              q: "Comment le choléra se transmet-il principalement ?",
              options: ["Par l'eau et les aliments contaminés", "Par la piqûre d'un moustique ou d'une tique", "Par les rapports sexuels uniquement", "Par l'hérédité"],
              answer: 0,
              why: "Le choléra est une maladie bactérienne à transmission indirecte, par l'eau ou les aliments souillés : l'accès à l'eau potable est la meilleure prévention.",
            },
            {
              q: "Où Plasmodium se multiplie-t-il en premier dans le corps humain après la piqûre ?",
              options: ["Dans les globules rouges", "Dans le foie", "Dans l'estomac", "Dans les poumons"],
              answer: 1,
              why: "Les parasites injectés gagnent d'abord le foie, où ils se multiplient, avant d'envahir les globules rouges.",
            },
            {
              q: "Comment appelle-t-on une maladie présente en permanence dans une région ?",
              options: ["Une épidémie", "Une pandémie", "Une endémie", "Une contagion"],
              answer: 2,
              why: "Une endémie est la présence permanente d'une maladie dans une région ; une épidémie est une hausse nette et temporaire du nombre de cas.",
            },
          ],
          trap: "Croire qu'un virus est une petite bactérie et qu'il se soigne par antibiotiques : un virus n'est pas une cellule, il ne se multiplie que dans les cellules qu'il infecte, et les antibiotiques n'ont aucun effet sur lui. Autre confusion : prendre le moustique, simple vecteur, pour l'agent pathogène du paludisme.",
          method: "Pour chaque maladie infectieuse, remplissez la même fiche : agent pathogène (type et nom), mode de transmission, symptômes, prévention, traitement. Pour une maladie vectorielle, dessinez le cycle et inscrivez sur chaque flèche la mesure qui le coupe.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'antibiotiques-resistances',
          title: "Les antibiotiques et les résistances bactériennes",
          minutes: 30,
          objectives: [
            "Expliquer le mode d'action des antibiotiques et leurs limites, notamment leur inefficacité contre les virus.",
            "Exploiter un antibiogramme pour choisir un antibiotique adapté.",
            "Expliquer l'apparition de bactéries résistantes par mutation et sélection naturelle.",
            "Argumenter sur le bon usage des antibiotiques, enjeu de santé publique.",
          ],
          course: [
            {
              heading: "Les antibiotiques, des molécules contre les bactéries",
              paragraphs: [
                "Un antibiotique est une molécule qui tue les bactéries (effet bactéricide) ou bloque leur multiplication (effet bactériostatique), sans léser les cellules humaines. Il agit sur une cible propre aux bactéries, absente de nos cellules : la paroi bactérienne (la pénicilline empêche sa construction), les ribosomes bactériens, différents des nôtres, ou certaines enzymes qui agissent sur l'ADN bactérien. C'est pourquoi les antibiotiques n'ont aucun effet sur les virus, qui n'ont ni paroi ni ribosomes propres : ils sont inutiles contre la grippe, le rhume ou les angines virales.",
                "En 1928, le médecin britannique Alexander Fleming remarque qu'une moisissure, Penicillium, qui a contaminé une boîte de culture, empêche la croissance des bactéries autour d'elle. La substance responsable, la pénicilline, n'est purifiée et produite en grande quantité qu'au début des années 1940, grâce notamment aux travaux de Howard Florey et Ernst Chain, et sauve d'innombrables vies pendant la Seconde Guerre mondiale. Beaucoup d'antibiotiques sont, comme elle, produits naturellement par des champignons ou des bactéries du sol, qui éliminent ainsi leurs concurrents ; d'autres sont obtenus par synthèse chimique.",
              ],
              box: { label: "Définition", text: "Antibiotique : molécule qui tue les bactéries ou bloque leur multiplication en agissant sur une cible propre aux bactéries (paroi, ribosomes, enzymes). Un antibiotique est sans effet sur les virus." },
            },
            {
              heading: "L'antibiogramme : choisir le bon antibiotique",
              paragraphs: [
                "Toutes les bactéries ne sont pas sensibles aux mêmes antibiotiques. Pour choisir un traitement efficace, le laboratoire peut réaliser un antibiogramme. On étale la bactérie prélevée chez le malade sur une gélose nutritive, dans une boîte de Petri, puis on dépose des pastilles de papier imprégnées chacune d'un antibiotique différent. Après une incubation d'environ 24 heures, les bactéries ont formé un tapis, sauf autour des pastilles dont l'antibiotique est efficace : une zone claire, la zone d'inhibition, apparaît.",
                "Plus le diamètre de la zone d'inhibition est grand, plus la bactérie est sensible à l'antibiotique. On compare ce diamètre à des valeurs de référence propres à chaque antibiotique : au-dessus d'un diamètre critique, la souche est dite sensible ; en dessous, elle est résistante (une catégorie intermédiaire existe pour certains antibiotiques). Le médecin choisit alors un antibiotique auquel la bactérie est sensible, de préférence à spectre étroit, c'est-à-dire actif sur un nombre limité de types de bactéries, pour préserver le microbiote.",
              ],
              box: { label: "Repère", text: "Antibiogramme : grande zone d'inhibition autour d'une pastille (diamètre supérieur ou égal au diamètre critique) = bactérie sensible à cet antibiotique ; zone absente ou trop petite = bactérie résistante." },
            },
            {
              heading: "Comment apparaissent les bactéries résistantes",
              paragraphs: [
                "Une bactérie est résistante à un antibiotique quand elle peut survivre et se multiplier en sa présence. Cette résistance a une origine génétique. Lors de chaque division, l'ADN bactérien est copié avec de rares erreurs, les mutations, qui surviennent au hasard, que l'antibiotique soit présent ou non. Certaines, très rares, rendent la bactérie résistante, par exemple en modifiant la cible de l'antibiotique, en produisant une enzyme qui le détruit ou en le rejetant hors de la cellule. Les bactéries peuvent aussi recevoir des gènes de résistance venus d'autres bactéries, même d'espèces différentes, grâce à de petites molécules d'ADN échangées appelées plasmides : c'est un transfert horizontal de gènes.",
                "En présence de l'antibiotique, les bactéries sensibles meurent, tandis que les rares bactéries résistantes survivent et se multiplient. Comme une bactérie peut se diviser toutes les 20 minutes dans de bonnes conditions, les résistantes deviennent vite majoritaires : la population entière est désormais résistante. C'est un exemple de sélection naturelle observable en quelques jours. Ce n'est donc pas l'antibiotique qui crée la mutation, et ce n'est pas le patient qui devient résistant : c'est la population de bactéries qui change.",
              ],
              box: { label: "À retenir", text: "Résistance = mutation aléatoire préexistante (ou gène reçu d'une autre bactérie) + sélection par l'antibiotique, qui élimine les bactéries sensibles et laisse les résistantes se multiplier. Plus on utilise d'antibiotiques, plus on sélectionne de résistances." },
            },
            {
              heading: "Un enjeu de santé publique",
              paragraphs: [
                "L'usage massif, et souvent inutile, des antibiotiques chez l'humain et chez les animaux d'élevage a favorisé la sélection de bactéries résistantes, parfois à plusieurs antibiotiques à la fois (bactéries multirésistantes). Certaines infections deviennent difficiles, voire impossibles, à traiter. Une étude internationale publiée en 2022 dans la revue The Lancet a estimé qu'en 2019 environ 1,27 million de décès dans le monde étaient directement dus à des bactéries résistantes. L'OMS considère l'antibiorésistance comme l'une des principales menaces pour la santé mondiale.",
                "Chacun peut agir : ne prendre un antibiotique que sur prescription médicale, jamais contre une infection virale, en respectant la dose et la durée prescrites, et ne pas garder ni partager les restes d'un traitement. En France, la campagne de l'Assurance maladie « Les antibiotiques, c'est pas automatique », lancée en 2002, a contribué à réduire les prescriptions.",
                "À l'échelle collective, on limite les antibiotiques en élevage, on renforce l'hygiène à l'hôpital (lavage des mains) pour éviter la diffusion des bactéries résistantes, on développe la vaccination, qui évite des infections, et on cherche de nouveaux traitements. Cette approche globale, qui relie santé humaine, santé animale et environnement, est appelée « Une seule santé » (One Health).",
              ],
            },
          ],
          keyPoints: [
            "Un antibiotique tue les bactéries ou bloque leur multiplication en visant une cible propre aux bactéries (paroi, ribosomes).",
            "Les antibiotiques sont inefficaces contre les virus (grippe, rhume, Covid-19).",
            "Antibiogramme : plus la zone d'inhibition est grande, plus la bactérie est sensible ; on compare son diamètre au diamètre critique.",
            "Résistance : mutation aléatoire préexistante ou gène reçu par plasmide, puis sélection naturelle par l'antibiotique.",
            "C'est la population bactérienne qui devient résistante, pas le patient.",
            "Bon usage : sur prescription, jamais contre un virus, dose et durée respectées ; approche « Une seule santé ».",
          ],
          example: {
            statement: "Un antibiogramme est réalisé sur une bactérie isolée chez un patient atteint d'une infection urinaire (données fictives). Diamètres mesurés des zones d'inhibition : antibiotique A, 6 mm (diamètre de la pastille elle-même, aucune zone claire) ; B, 25 mm ; C, 14 mm. Diamètres critiques : A, 17 mm ; B, 19 mm ; C, 20 mm. La souche est sensible si le diamètre mesuré est supérieur ou égal au diamètre critique. Quel antibiotique le médecin doit-il prescrire ?",
            solution: [
              "Méthode : pour chaque antibiotique, comparer le diamètre mesuré au diamètre critique.",
              "Antibiotique A : 6 mm < 17 mm, et aucune zone claire n'entoure la pastille : la bactérie est résistante à A.",
              "Antibiotique B : 25 mm ≥ 19 mm : la bactérie est sensible à B.",
              "Antibiotique C : 14 mm < 20 mm : malgré une petite zone claire, la bactérie est classée résistante à C.",
              "Réponse : le médecin doit prescrire l'antibiotique B, le seul auquel la bactérie est sensible.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des situations suivantes, dites si un antibiotique est utile et justifiez : a) une grippe ; b) une angine due à un streptocoque (bactérie), confirmée par un test rapide ; c) un rhume ; d) une infection urinaire due à la bactérie Escherichia coli ; e) le Covid-19.",
              hint: "Identifiez d'abord la nature de l'agent pathogène : bactérie ou virus.",
              solution: [
                "a) Grippe : due à un virus ; un antibiotique est inutile.",
                "b) Angine à streptocoque : due à une bactérie ; un antibiotique est utile. Le test rapide permet de distinguer cette angine des angines virales, plus fréquentes.",
                "c) Rhume : dû à des virus ; un antibiotique est inutile.",
                "d) Infection urinaire à Escherichia coli : due à une bactérie ; un antibiotique est utile, choisi si besoin grâce à un antibiogramme.",
                "e) Covid-19 : dû à un virus (un coronavirus) ; un antibiotique est inutile contre lui.",
                "Remarque : lors d'une infection virale, le médecin peut prescrire un antibiotique s'il diagnostique une surinfection bactérienne, mais jamais contre le virus lui-même.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Une population de 10⁸ bactéries contient une seule bactérie résistante à un antibiotique. On ajoute l'antibiotique : toutes les bactéries sensibles sont tuées. La bactérie résistante se divise toutes les 30 minutes. a) Quelle proportion de la population initiale était résistante ? Donnez-la en puissance de 10, puis en pourcentage. b) Combien de bactéries résistantes y a-t-il au bout de 5 heures ? c) Quelle est alors la proportion de bactéries résistantes dans la population ? d) La mutation de résistance est-elle apparue à cause de l'antibiotique ? Justifiez.",
              hint: "Une division toutes les 30 minutes : comptez le nombre de divisions en 5 heures ; à chaque division, le nombre de bactéries double.",
              solution: [
                "a) Proportion = 1 ÷ 10⁸ = 10⁻⁸, soit 10⁻⁸ × 100 = 10⁻⁶ % = 0,000001 %.",
                "b) En 5 heures, il y a 5 × 2 = 10 divisions. Le nombre de bactéries résistantes est multiplié par 2¹⁰ = 1 024 : il y a 1 024 bactéries résistantes.",
                "c) Toutes les bactéries sensibles ont été tuées : la population n'est plus formée que de bactéries résistantes, soit 100 %.",
                "d) Non : la bactérie résistante était déjà présente avant l'ajout de l'antibiotique. La mutation est apparue au hasard ; l'antibiotique a seulement éliminé les bactéries sensibles et permis aux résistantes de se multiplier sans concurrence.",
                "Résultat : la proportion de résistantes passe de 10⁻⁶ % à 100 % ; c'est une sélection naturelle.",
              ],
            },
            {
              level: 3,
              statement: "Expérience des Lederberg (1952), résultats simplifiés. Des bactéries jamais exposées à un antibiotique, la streptomycine, sont étalées sur une boîte sans antibiotique (boîte 1) : environ 200 colonies se forment, chacune issue d'une seule bactérie. On presse sur cette boîte un tampon de velours stérile, puis on le presse sur une boîte contenant de la streptomycine (boîte 2) : chaque colonie y dépose quelques bactéries, à la même position. Sur la boîte 2, seules 3 colonies se développent. On prélève alors, sur la boîte 1, les colonies situées aux mêmes positions que ces 3 colonies et on les cultive avec de la streptomycine : elles se développent. Des colonies prélevées ailleurs sur la boîte 1 ne se développent pas en présence de streptomycine. a) Que peut-on dire des 3 colonies de la boîte 2 ? b) Les bactéries prélevées sur la boîte 1 ont-elles été en contact avec la streptomycine ? Que montre leur résistance ? c) Concluez sur l'origine des résistances et sur le rôle de l'antibiotique. d) Expliquez pourquoi un usage excessif des antibiotiques à l'hôpital favorise l'apparition de bactéries multirésistantes.",
              hint: "Le tampon conserve les positions : une colonie de la boîte 2 et la colonie de la boîte 1 placée au même endroit sont issues des mêmes bactéries.",
              solution: [
                "a) Les 3 colonies de la boîte 2 se développent malgré la streptomycine : elles sont formées de bactéries résistantes à cet antibiotique.",
                "b) Non : les colonies de la boîte 1 n'ont jamais été en contact avec la streptomycine. Pourtant, celles qui occupent les mêmes positions sont résistantes : leur résistance existait donc avant toute exposition à l'antibiotique.",
                "c) Les résistances proviennent de mutations survenues au hasard, avant et indépendamment de l'antibiotique. L'antibiotique ne provoque pas la résistance : il révèle et sélectionne les bactéries déjà résistantes en éliminant les sensibles.",
                "d) À l'hôpital, de nombreux antibiotiques différents sont utilisés sur une population bactérienne très grande. Chaque traitement élimine les bactéries sensibles et favorise celles qui portent des résistances ; des bactéries peuvent accumuler plusieurs résistances, par mutations successives ou par échange de plasmides, et devenir multirésistantes, puis se transmettre d'un patient à l'autre si l'hygiène est insuffisante.",
                "Conclusion : la résistance résulte d'une variation préexistante suivie d'une sélection naturelle par l'antibiotique ; limiter les antibiotiques limite cette sélection.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos idées sur les antibiotiques et les résistances.",
            statements: [
              { text: "Les antibiotiques soignent la grippe.", true: false, why: "La grippe est due à un virus, qui n'a aucune des cibles visées par les antibiotiques." },
              { text: "Une mutation de résistance peut exister avant tout contact avec l'antibiotique.", true: true, why: "Les mutations surviennent au hasard ; l'expérience des Lederberg montre que des bactéries jamais exposées peuvent être résistantes." },
              { text: "C'est le corps du patient qui devient résistant aux antibiotiques.", true: false, why: "Ce sont les populations de bactéries qui deviennent résistantes, par sélection des bactéries résistantes." },
              { text: "Une bactérie peut recevoir un gène de résistance d'une autre bactérie.", true: true, why: "Les plasmides, petites molécules d'ADN, peuvent passer d'une bactérie à une autre, même d'une autre espèce." },
              { text: "Plus la zone d'inhibition d'un antibiogramme est grande, plus la bactérie est résistante.", true: false, why: "C'est l'inverse : une grande zone d'inhibition signifie que l'antibiotique empêche la croissance, donc que la bactérie est sensible." },
              { text: "L'usage d'antibiotiques dans les élevages contribue à l'antibiorésistance.", true: true, why: "Il sélectionne des bactéries résistantes chez les animaux, qui peuvent ensuite se transmettre à l'humain : d'où l'approche « Une seule santé »." },
              { text: "La pénicilline a été découverte par Alexander Fleming en 1928.", true: true, why: "Fleming a observé qu'une moisissure, Penicillium, empêchait la croissance des bactéries ; la pénicilline n'a été produite en masse qu'au début des années 1940." },
            ],
          },
          quiz: [
            {
              q: "Pourquoi un antibiotique n'agit-il pas contre un virus ?",
              options: ["Les virus se multiplient trop vite pour être atteints", "Les virus sont tous devenus résistants", "Les antibiotiques ne passent pas dans le sang", "Les virus n'ont ni paroi ni ribosomes propres"],
              answer: 3,
              why: "Les antibiotiques visent des structures propres aux bactéries, comme la paroi ou les ribosomes bactériens, que les virus ne possèdent pas.",
            },
            {
              q: "Sur un antibiogramme, quand une bactérie est-elle sensible à un antibiotique ?",
              options: ["Quand aucune zone claire n'entoure la pastille", "Quand sa zone d'inhibition est assez large", "Quand des colonies poussent jusque sur la pastille", "Quand la gélose change de couleur"],
              answer: 1,
              why: "Une bactérie est sensible quand le diamètre de la zone d'inhibition atteint au moins le diamètre critique de l'antibiotique.",
            },
            {
              q: "Quelle est l'origine d'une résistance à un antibiotique ?",
              options: ["Une adaptation volontaire de chaque bactérie au médicament", "Une mutation provoquée par l'antibiotique lui-même", "Une mutation aléatoire ou un plasmide reçu", "Un affaiblissement du système immunitaire du patient"],
              answer: 2,
              why: "La résistance vient d'une mutation survenue au hasard ou d'un gène reçu d'une autre bactérie ; l'antibiotique ne fait que sélectionner les bactéries résistantes.",
            },
            {
              q: "Qui a découvert la pénicilline, et quand ?",
              options: ["Alexander Fleming, en 1928", "Louis Pasteur, dans les années 1880", "Robert Koch, à la fin du XIXe siècle", "Edward Jenner, en 1796"],
              answer: 0,
              why: "Alexander Fleming a découvert l'effet de la pénicilline en 1928 ; Jenner est connu pour la première vaccination, Pasteur et Koch pour leurs travaux sur les microbes.",
            },
            {
              q: "Quel comportement favorise l'antibiorésistance ?",
              options: ["Respecter la durée prescrite du traitement", "Prendre un antibiotique contre un rhume", "Se laver les mains à l'hôpital", "Faire réaliser un antibiogramme"],
              answer: 1,
              why: "Un antibiotique pris contre un virus ne soigne rien et sélectionne inutilement des bactéries résistantes, notamment dans le microbiote.",
            },
          ],
          trap: "Dire que « le patient s'habitue à l'antibiotique » ou que « l'antibiotique fait muter les bactéries » : les mutations sont aléatoires et préexistantes, l'antibiotique ne fait que sélectionner les bactéries résistantes, et c'est la population bactérienne qui devient résistante.",
          method: "Pour expliquer une résistance, rédigez toujours en trois temps : 1) une variabilité existe déjà dans la population (mutation aléatoire ou plasmide) ; 2) l'antibiotique élimine les bactéries sensibles ; 3) les résistantes survivent, se multiplient et deviennent majoritaires. C'est le schéma de la sélection naturelle.",
        },
      ],
    },
  ],
}
