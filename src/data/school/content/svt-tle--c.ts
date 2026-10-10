import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'svt-tle',
  chapters: [
    /* ==================================================================== */
    /* COMPORTEMENTS, MOUVEMENT ET SYSTÈME NERVEUX                            */
    /* ==================================================================== */
    {
      id: 'mouvement-systeme-nerveux',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'reflexe-myotatique',
          title: 'Le réflexe myotatique',
          minutes: 35,
          objectives: [
            "Identifier les éléments de l'arc réflexe myotatique : récepteur, neurone sensoriel, centre nerveux, motoneurone, effecteur.",
            "Expliquer le codage du message nerveux en fréquence de potentiels d'action le long d'une fibre nerveuse.",
            "Décrire le fonctionnement d'une synapse chimique et le codage du message en concentration de neurotransmetteur.",
            "Calculer une vitesse de conduction ou un délai synaptique à partir d'enregistrements.",
          ],
          course: [
            {
              heading: "Un réflexe : une réponse involontaire, rapide et stéréotypée",
              paragraphs: [
                "Lorsque le médecin frappe le tendon situé sous la rotule avec un marteau, la jambe se tend sans que le patient le décide : c'est le réflexe rotulien. Le choc étire brièvement le quadriceps, muscle de la face avant de la cuisse, et ce muscle se contracte en réponse à son propre étirement. On appelle ce type de réponse un réflexe myotatique (du grec mus, le muscle, et tasis, l'étirement).",
                "Ce réflexe est involontaire, très rapide (quelques dizaines de millisecondes), et toujours identique pour un même stimulus. Il joue un rôle essentiel dans le maintien de la posture : quand le corps penche vers l'avant en position debout, les muscles du mollet sont étirés et se contractent de façon réflexe, ce qui redresse le corps sans que l'on y pense. D'autres réflexes myotatiques sont testés en médecine, comme le réflexe achilléen (percussion du tendon d'Achille, contraction du triceps sural et extension du pied).",
                "Un réflexe absent, faible ou exagéré renseigne le médecin sur l'état des nerfs et de la moelle épinière : le test des réflexes est un outil de diagnostic simple.",
              ],
              box: { label: "Définition", text: "Le réflexe myotatique est la contraction réflexe d'un muscle en réponse à son propre étirement. Il est involontaire, rapide, stéréotypé, et participe au maintien de la posture." },
            },
            {
              heading: "L'arc réflexe : cinq éléments en chaîne",
              paragraphs: [
                "Le récepteur est le fuseau neuromusculaire, une structure sensible à l'étirement située à l'intérieur même du muscle. Étiré, il fait naître un message nerveux dans un neurone sensoriel. Le corps cellulaire de ce neurone se trouve dans le ganglion de la racine dorsale du nerf rachidien ; sa fibre entre dans la moelle épinière par cette racine dorsale.",
                "Le centre nerveux est la moelle épinière. Dans sa substance grise, la fibre du neurone sensoriel établit directement une synapse avec un motoneurone, dont le corps cellulaire est situé dans la corne ventrale. Le message est transmis au motoneurone, dont l'axone sort par la racine ventrale et rejoint le muscle par le nerf. L'effecteur est le muscle étiré lui-même, qui se contracte.",
                "Comme il n'existe qu'une seule synapse entre le neurone sensoriel et le motoneurone dans le centre nerveux, le réflexe myotatique est dit monosynaptique. C'est ce qui explique sa rapidité. En parallèle, le neurone sensoriel active un interneurone inhibiteur qui freine le motoneurone du muscle antagoniste : le muscle antagoniste se relâche, ce qui permet le mouvement. Ce circuit-là, avec deux synapses, est polysynaptique.",
              ],
              box: { label: "À retenir", text: "Arc réflexe myotatique : fuseau neuromusculaire (récepteur) → neurone sensoriel (racine dorsale) → moelle épinière (centre nerveux, une synapse) → motoneurone (racine ventrale) → muscle étiré (effecteur)." },
            },
            {
              heading: "Le message nerveux le long d'une fibre : un codage en fréquence",
              paragraphs: [
                "Au repos, la membrane d'un neurone est polarisée : l'intérieur est négatif par rapport à l'extérieur. Cette différence de potentiel, le potentiel de repos, vaut environ -70 mV. Lorsqu'une stimulation est suffisante pour atteindre un seuil, la membrane se dépolarise brutalement puis se repolarise : c'est le potentiel d'action, qui atteint environ +30 mV et dure environ 1 ms.",
                "Le potentiel d'action obéit à la loi du tout ou rien : en dessous du seuil, rien ne se propage ; au-dessus, son amplitude est toujours la même. Il se propage le long de l'axone sans s'affaiblir, d'autant plus vite que la fibre est épaisse et entourée de myéline (plusieurs dizaines de mètres par seconde pour les fibres du réflexe myotatique).",
                "Puisque l'amplitude ne varie pas, l'intensité de la stimulation est codée par la fréquence des potentiels d'action : plus le muscle est étiré fortement, plus le fuseau émet de potentiels d'action par seconde. Le message nerveux est donc une suite de potentiels d'action identiques, codé en fréquence.",
              ],
              box: { label: "Propriété", text: "Le long d'une fibre nerveuse, le message est formé de potentiels d'action d'amplitude constante. L'intensité du stimulus est codée par leur fréquence." },
            },
            {
              heading: "La synapse : un relais chimique codé en concentration",
              paragraphs: [
                "Une synapse est la zone de contact entre deux neurones, ou entre un neurone et une cellule musculaire (on parle alors de jonction neuromusculaire, ou plaque motrice). Les deux cellules ne se touchent pas : elles sont séparées par une fente synaptique de quelques dizaines de nanomètres.",
                "Quand un potentiel d'action arrive à l'extrémité de l'axone (bouton présynaptique), il déclenche l'exocytose de vésicules contenant un neurotransmetteur, libéré dans la fente. Ce neurotransmetteur se fixe sur des récepteurs spécifiques de la membrane postsynaptique, ce qui modifie le potentiel de cette membrane et peut faire naître un nouveau potentiel d'action. À la jonction neuromusculaire, le neurotransmetteur est l'acétylcholine ; elle est ensuite rapidement dégradée par une enzyme, l'acétylcholinestérase, ce qui met fin au signal.",
                "Plus la fréquence des potentiels d'action présynaptiques est élevée, plus la quantité de neurotransmetteur libérée est grande : au niveau de la synapse, le message est codé en concentration de neurotransmetteur. Le passage par la synapse prend un temps appelé délai synaptique, de l'ordre de 0,5 ms. La transmission synaptique est unidirectionnelle : du neurone présynaptique vers la cellule postsynaptique.",
              ],
              box: { label: "À retenir", text: "Codage électrique en fréquence de potentiels d'action le long des fibres, codage chimique en concentration de neurotransmetteur dans la fente synaptique. À la jonction neuromusculaire, le neurotransmetteur est l'acétylcholine." },
            },
          ],
          keyPoints: [
            "Réflexe myotatique : contraction d'un muscle en réponse à son propre étirement, involontaire et rapide ; il assure le maintien de la posture.",
            "Récepteur : fuseau neuromusculaire. Centre nerveux : moelle épinière. Effecteur : le muscle étiré.",
            "Une seule synapse centrale entre neurone sensoriel et motoneurone : le réflexe est monosynaptique.",
            "Le muscle antagoniste est relâché grâce à un interneurone inhibiteur (circuit polysynaptique).",
            "Potentiel d'action : amplitude constante (tout ou rien), environ 1 ms ; le message est codé en fréquence.",
            "Synapse chimique : exocytose d'un neurotransmetteur, codage en concentration, délai synaptique d'environ 0,5 ms.",
          ],
          example: {
            statement: "On stimule électriquement le neurone sensoriel d'un réflexe myotatique et on enregistre la réponse dans le motoneurone. La distance entre l'électrode de stimulation et l'entrée dans la moelle épinière est de 0,60 m, et la réponse apparaît dans le corps cellulaire du motoneurone 10,5 ms après la stimulation. La vitesse de conduction de la fibre sensorielle est de 60 m/s. Calculez le délai synaptique et dites ce qu'il révèle sur le nombre de synapses.",
            solution: [
              "Temps de conduction dans la fibre sensorielle : t = d ÷ v = 0,60 ÷ 60 = 0,010 s, soit 10 ms.",
              "Le temps restant est le temps de passage dans la moelle : 10,5 - 10 = 0,5 ms.",
              "Un délai synaptique dure de l'ordre de 0,5 ms : ce temps correspond au franchissement d'une seule synapse.",
              "Conclusion : le délai synaptique mesuré est de 0,5 ms, ce qui confirme que le réflexe myotatique est monosynaptique (une seule synapse entre neurone sensoriel et motoneurone).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les éléments suivants dans l'ordre du trajet du message nerveux lors du réflexe achilléen : motoneurone, triceps sural (contraction), fuseau neuromusculaire du triceps sural, moelle épinière, neurone sensoriel. Précisez pour chacun son rôle (récepteur, conducteur, centre nerveux, effecteur).",
              hint: "Le message part toujours du récepteur situé dans le muscle étiré et revient au même muscle.",
              solution: [
                "1. Fuseau neuromusculaire du triceps sural : récepteur sensible à l'étirement.",
                "2. Neurone sensoriel : conducteur du message vers la moelle épinière (entrée par la racine dorsale).",
                "3. Moelle épinière : centre nerveux, où se fait la synapse avec le motoneurone.",
                "4. Motoneurone : conducteur du message vers le muscle (sortie par la racine ventrale).",
                "5. Triceps sural : effecteur, qui se contracte.",
                "Le muscle étiré est donc à la fois le siège du récepteur et l'effecteur.",
              ],
            },
            {
              level: 2,
              statement: "On enregistre l'activité d'une fibre sensorielle issue d'un fuseau neuromusculaire pour trois étirements du muscle. Étirement faible : 8 potentiels d'action en 0,2 s. Étirement moyen : 20 potentiels d'action en 0,2 s. Étirement fort : 36 potentiels d'action en 0,2 s. Tous les potentiels d'action ont une amplitude de 100 mV. Calculez la fréquence dans chaque cas et expliquez comment l'intensité de l'étirement est codée.",
              hint: "Une fréquence s'exprime en hertz : nombre d'événements divisé par la durée en secondes.",
              solution: [
                "Étirement faible : 8 ÷ 0,2 = 40 Hz.",
                "Étirement moyen : 20 ÷ 0,2 = 100 Hz.",
                "Étirement fort : 36 ÷ 0,2 = 180 Hz.",
                "L'amplitude reste de 100 mV quelle que soit l'intensité : elle ne porte pas l'information (loi du tout ou rien).",
                "Seule la fréquence augmente avec l'étirement : le message nerveux est codé en fréquence de potentiels d'action.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Le curare est une substance qui se fixe sur les récepteurs à l'acétylcholine de la membrane des cellules musculaires sans les activer. Document 1 : chez un animal traité au curare, la stimulation du nerf moteur déclenche toujours des potentiels d'action dans l'axone du motoneurone, mais le muscle ne se contracte plus. Document 2 : la stimulation électrique directe du muscle traité provoque sa contraction. Montrez, à partir de ces documents et de vos connaissances, à quel niveau agit le curare et expliquez ses effets sur le réflexe myotatique.",
              hint: "Éliminez successivement les éléments de la chaîne qui fonctionnent encore : nerf, muscle, puis concluez sur ce qui reste.",
              solution: [
                "Document 1 : le motoneurone conduit toujours des potentiels d'action, donc le curare n'empêche pas la propagation du message dans la fibre nerveuse.",
                "Document 2 : le muscle stimulé directement se contracte, donc le curare n'empêche pas la cellule musculaire de se contracter.",
                "Le seul élément de la chaîne qui ne fonctionne plus est donc la transmission entre motoneurone et muscle : la jonction neuromusculaire.",
                "Or je sais qu'à cette synapse l'acétylcholine libérée se fixe sur des récepteurs postsynaptiques pour déclencher un potentiel d'action musculaire. Le curare occupe ces récepteurs sans les activer : l'acétylcholine ne peut plus s'y fixer, aucun potentiel d'action ne naît dans la fibre musculaire.",
                "Le curare agit donc comme un antagoniste de l'acétylcholine au niveau de la jonction neuromusculaire.",
                "Conséquence : lors d'un étirement, le fuseau, le neurone sensoriel et le motoneurone fonctionnent, mais le muscle ne se contracte pas. Le réflexe myotatique est aboli, comme tous les mouvements (paralysie).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du réflexe rotulien, de la percussion à l'extension de la jambe.",
            items: [
              "La percussion du tendon étire le quadriceps.",
              "Les fuseaux neuromusculaires émettent des potentiels d'action.",
              "Le neurone sensoriel conduit le message jusqu'à la moelle épinière.",
              "Une synapse transmet le message au motoneurone du quadriceps.",
              "Le motoneurone conduit des potentiels d'action jusqu'au muscle.",
              "L'acétylcholine est libérée à la jonction neuromusculaire.",
              "Le quadriceps se contracte et la jambe se tend.",
            ],
          },
          quiz: [
            {
              q: "Quel est le récepteur du réflexe myotatique ?",
              options: ["Le tendon percuté par le marteau", "Le fuseau neuromusculaire", "La peau du genou", "La moelle épinière"],
              answer: 1,
              why: "Le fuseau neuromusculaire, situé dans le muscle, est sensible à l'étirement du muscle.",
            },
            {
              q: "Pourquoi dit-on que le réflexe myotatique est monosynaptique ?",
              options: ["Parce qu'il ne met en jeu qu'un seul muscle", "Parce qu'il ne fait intervenir qu'un seul neurone", "Parce qu'il n'y a qu'une synapse centrale entre neurone sensoriel et motoneurone", "Parce qu'il ne met en jeu qu'un seul potentiel d'action, du récepteur jusqu'au muscle effecteur"],
              answer: 2,
              why: "Dans la moelle épinière, le neurone sensoriel est relié directement au motoneurone par une seule synapse.",
            },
            {
              q: "Lorsqu'un étirement devient plus fort, que modifie-t-il dans le message de la fibre sensorielle ?",
              options: ["La fréquence des potentiels d'action", "L'amplitude des potentiels d'action", "La durée de chaque potentiel d'action", "Le sens de propagation"],
              answer: 0,
              why: "L'amplitude est constante (tout ou rien) : l'intensité est codée par la fréquence.",
            },
            {
              q: "Quel est le neurotransmetteur de la jonction neuromusculaire ?",
              options: ["La dopamine", "La noradrénaline", "Le GABA", "L'acétylcholine"],
              answer: 3,
              why: "Le motoneurone libère de l'acétylcholine, qui se fixe sur les récepteurs de la fibre musculaire.",
            },
            {
              q: "Comment le message est-il codé au niveau d'une synapse chimique ?",
              options: ["En amplitude des potentiels d'action postsynaptiques", "En concentration de neurotransmetteur", "En vitesse de propagation", "En nombre de neurones"],
              answer: 1,
              why: "Plus la fréquence présynaptique est élevée, plus il y a de neurotransmetteur libéré dans la fente.",
            },
          ],
          trap: "Croire que l'intensité d'un stimulus est codée par l'amplitude des potentiels d'action : leur amplitude est constante, c'est leur fréquence qui varie le long de la fibre, puis la concentration de neurotransmetteur à la synapse.",
          method: "Pour schématiser un arc réflexe, partez du muscle étiré, dessinez la coupe de moelle épinière avec ses racines dorsale et ventrale, puis fléchez le trajet du message en nommant chaque élément et son rôle (récepteur, conducteur, centre, effecteur).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'mouvement-volontaire',
          title: 'Le cerveau et le mouvement volontaire',
          minutes: 35,
          objectives: [
            "Localiser les aires motrices du cortex cérébral et décrire leur organisation somatotopique.",
            "Expliquer le trajet du message nerveux moteur, du cortex jusqu'aux motoneurones de la moelle épinière.",
            "Expliquer le rôle intégrateur du motoneurone : sommation des potentiels postsynaptiques excitateurs et inhibiteurs.",
            "Mettre en évidence la plasticité cérébrale des cartes motrices.",
          ],
          course: [
            {
              heading: "Les aires motrices du cortex",
              paragraphs: [
                "Un mouvement volontaire, comme saisir un stylo, est décidé et commandé par le cerveau. L'imagerie cérébrale (IRM fonctionnelle) montre qu'au moment d'un mouvement, certaines zones du cortex cérébral s'activent : ce sont les aires motrices. L'aire motrice primaire est située dans la partie arrière du lobe frontal, juste en avant du sillon central (scissure de Rolando), sur la circonvolution frontale ascendante.",
                "D'autres aires motrices, en avant de l'aire primaire, participent à la préparation et à la planification du mouvement. Des observations médicales le confirment : une lésion de l'aire motrice primaire, par exemple lors d'un accident vasculaire cérébral (AVC), provoque une paralysie d'une partie du corps.",
              ],
              box: { label: "Repère", text: "L'aire motrice primaire occupe la circonvolution frontale ascendante, en avant du sillon central. Elle commande les mouvements volontaires." },
            },
            {
              heading: "Une carte du corps : la somatotopie",
              paragraphs: [
                "Chaque région de l'aire motrice primaire commande une partie précise du corps : c'est l'organisation somatotopique. On peut la représenter par un homonculus moteur, petit personnage dessiné le long du cortex, des pieds (en haut, près de la ligne médiane) jusqu'au visage et à la langue (en bas, sur le côté).",
                "L'homonculus est déformé : la main, les doigts, les lèvres et la langue occupent une surface de cortex très grande, alors que le tronc ou la cuisse occupent une petite surface. La surface consacrée à une partie du corps n'est pas proportionnelle à sa taille mais à la précision et à la finesse des mouvements qu'elle peut réaliser.",
                "Les commandes sont croisées : l'hémisphère gauche commande les muscles du côté droit du corps et inversement. En effet, la plupart des fibres des neurones moteurs du cortex changent de côté (décussation) au niveau du bulbe rachidien, à la base de l'encéphale. Un AVC dans l'hémisphère droit peut ainsi paralyser le côté gauche du corps.",
              ],
              box: { label: "À retenir", text: "Somatotopie : une région du cortex moteur correspond à une région du corps. La surface est proportionnelle à la précision des mouvements. La commande est controlatérale (croisée)." },
            },
            {
              heading: "Du cortex à la moelle : le motoneurone, voie finale commune",
              paragraphs: [
                "Les neurones moteurs du cortex possèdent de très longs axones qui descendent dans la moelle épinière. Ils font synapse, directement ou par l'intermédiaire d'interneurones, avec les motoneurones de la moelle épinière. Ce sont les mêmes motoneurones que ceux du réflexe myotatique : tout message vers le muscle passe par eux. On dit que le motoneurone est la voie finale commune des mouvements réflexes et volontaires.",
                "Un motoneurone reçoit sur son corps cellulaire et ses dendrites des milliers de synapses, venant du cortex, des neurones sensoriels et de nombreux interneurones. Certaines synapses sont excitatrices : leur neurotransmetteur provoque une légère dépolarisation de la membrane, un potentiel postsynaptique excitateur (PPSE). D'autres sont inhibitrices : elles provoquent une hyperpolarisation, un potentiel postsynaptique inhibiteur (PPSI). Ces potentiels postsynaptiques sont d'amplitude variable et ne se propagent pas comme des potentiels d'action.",
              ],
            },
            {
              heading: "L'intégration : la sommation des messages",
              paragraphs: [
                "Le motoneurone additionne en permanence tous les PPSE et PPSI qu'il reçoit : c'est l'intégration. La sommation est spatiale lorsque des messages arrivent en même temps par des synapses différentes ; elle est temporelle lorsque des potentiels d'action se succèdent rapidement à une même synapse, avant que le potentiel postsynaptique précédent ait disparu.",
                "Le résultat de cette sommation est évalué au niveau du segment initial de l'axone (le cône d'émergence). Si la dépolarisation y atteint le seuil, le motoneurone émet des potentiels d'action, d'autant plus fréquents que la dépolarisation est forte. Sinon, il reste silencieux. Ainsi, le motoneurone traduit l'ensemble des informations reçues en un message unique, codé en fréquence, vers le muscle.",
              ],
              box: { label: "Définition", text: "L'intégration est la sommation, par un neurone, des potentiels postsynaptiques excitateurs (PPSE) et inhibiteurs (PPSI) qu'il reçoit. Si le seuil est atteint au segment initial de l'axone, des potentiels d'action naissent." },
            },
            {
              heading: "La plasticité des cartes motrices",
              paragraphs: [
                "La carte motrice n'est pas figée. Chez des musiciens qui pratiquent intensément depuis l'enfance, l'imagerie montre que les territoires corticaux associés aux doigts sont plus étendus que chez les non-musiciens. L'apprentissage et l'entraînement modifient le nombre et l'efficacité des connexions entre neurones : c'est la plasticité cérébrale.",
                "Cette plasticité permet aussi une récupération partielle après une lésion : après un AVC, une rééducation prolongée peut amener des régions voisines du cortex à prendre en charge la commande des muscles paralysés. Elle diminue avec l'âge mais persiste toute la vie, ce qui explique la diversité des cartes motrices d'une personne à l'autre et l'intérêt d'entretenir son activité.",
              ],
              box: { label: "À retenir", text: "Plasticité cérébrale : capacité du cerveau à remanier ses connexions et ses cartes en fonction de l'apprentissage, de l'entraînement ou d'une lésion. Chaque cerveau est donc unique." },
            },
          ],
          keyPoints: [
            "L'aire motrice primaire est en avant du sillon central, dans le lobe frontal.",
            "Somatotopie : chaque zone du cortex moteur commande une partie du corps ; la surface dépend de la précision des mouvements.",
            "La commande est croisée : les fibres changent de côté au niveau du bulbe rachidien.",
            "Le motoneurone médullaire est la voie finale commune des mouvements réflexes et volontaires.",
            "Le motoneurone intègre PPSE et PPSI par sommation spatiale et temporelle ; au-delà du seuil, il émet des potentiels d'action.",
            "La plasticité cérébrale remanie les cartes motrices au cours de l'apprentissage et après une lésion.",
          ],
          example: {
            statement: "Un patient présente, après un AVC, une paralysie de la main droite, tandis que sa jambe droite et tout son côté gauche fonctionnent. Indiquez l'hémisphère et la région du cortex probablement touchés, en justifiant.",
            solution: [
              "La commande motrice est controlatérale : les muscles du côté droit sont commandés par l'hémisphère gauche.",
              "La paralysie touche un mouvement volontaire : la lésion concerne l'aire motrice primaire, en avant du sillon central.",
              "Seule la main est atteinte : d'après la somatotopie, la lésion est limitée à la zone du cortex moteur qui commande la main, située sur la face latérale de l'hémisphère, entre la zone du bras et celle du visage.",
              "Conclusion : l'AVC a touché la région « main » de l'aire motrice primaire de l'hémisphère gauche.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Définissez les termes suivants en une phrase chacun : aire motrice primaire, somatotopie, potentiel postsynaptique excitateur, intégration.",
              hint: "Pour chaque terme, indiquez « ce que c'est » puis « où » ou « à quoi cela sert ».",
              solution: [
                "Aire motrice primaire : région du cortex cérébral, située en avant du sillon central, qui commande les mouvements volontaires.",
                "Somatotopie : correspondance entre chaque région de l'aire motrice et une partie précise du corps.",
                "Potentiel postsynaptique excitateur (PPSE) : légère dépolarisation de la membrane d'un neurone postsynaptique provoquée par un neurotransmetteur excitateur.",
                "Intégration : sommation par un neurone de l'ensemble des PPSE et PPSI qu'il reçoit, qui détermine s'il émet ou non des potentiels d'action.",
              ],
            },
            {
              level: 2,
              statement: "Un motoneurone a un potentiel de repos de -70 mV et un seuil de -50 mV. Il reçoit trois synapses : S1 et S2 excitatrices, produisant chacune un PPSE de +8 mV, et S3 inhibitrice, produisant un PPSI de -6 mV. Les effets s'additionnent. Indiquez si un potentiel d'action naît dans les cas suivants : a) S1 seule ; b) S1 et S2 simultanément ; c) S1 stimulée trois fois très rapidement ; d) S1, S2 et S3 simultanément ; e) S1 stimulée trois fois rapidement en même temps que S2.",
              hint: "Il faut une dépolarisation d'au moins 20 mV (de -70 à -50 mV). Calculez la somme algébrique dans chaque cas.",
              solution: [
                "Il faut atteindre -50 mV, soit une dépolarisation de 20 mV à partir de -70 mV.",
                "a) S1 seule : +8 mV, potentiel -62 mV : pas de potentiel d'action.",
                "b) S1 + S2 (sommation spatiale) : +16 mV, potentiel -54 mV : pas de potentiel d'action.",
                "c) S1 trois fois (sommation temporelle) : +24 mV, potentiel -46 mV : le seuil est dépassé, un potentiel d'action naît.",
                "d) S1 + S2 + S3 : +8 + 8 - 6 = +10 mV, potentiel -60 mV : pas de potentiel d'action, l'inhibition éloigne du seuil.",
                "e) 3 × 8 + 8 = +32 mV, potentiel -38 mV : potentiel d'action (sommation à la fois temporelle et spatiale).",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Document 1 : chez des violonistes ayant commencé avant 12 ans, l'étendue du territoire cortical associé aux doigts de la main gauche (celle qui joue sur les cordes) est nettement plus grande que chez des non-musiciens ; pour la main droite (qui tient l'archet), la différence est faible. Document 2 : chez un patient ayant subi un AVC, la zone du cortex activée lors du mouvement de la main paralysée s'est déplacée vers des régions voisines après plusieurs mois de rééducation, en même temps que le mouvement réapparaissait partiellement. Montrez que ces documents illustrent une même propriété du cerveau et expliquez-la.",
              hint: "Comparez main gauche et main droite dans le document 1 : qu'est-ce qui diffère dans leur usage ? Puis cherchez le point commun avec le document 2.",
              solution: [
                "Document 1 : la main gauche des violonistes réalise des mouvements fins et répétés des doigts, beaucoup plus que la main droite. Seul son territoire cortical est agrandi : l'agrandissement est lié à l'entraînement de cette main et non à un caractère général des musiciens.",
                "On en déduit que l'usage intensif et précoce d'une partie du corps augmente la surface de cortex qui lui est consacrée.",
                "Document 2 : après la lésion, la commande de la main est progressivement prise en charge par des régions corticales voisines, et la récupération motrice accompagne ce déplacement : la rééducation a remodelé la carte motrice.",
                "Or je sais que les connexions entre neurones (nombre de synapses, efficacité) peuvent se modifier en fonction de l'activité : c'est la plasticité cérébrale.",
                "Conclusion : les deux documents illustrent la plasticité cérébrale. Les cartes motrices ne sont pas figées : elles se remanient sous l'effet de l'apprentissage (document 1) et permettent une récupération partielle après une lésion (document 2). Chaque individu possède ainsi des cartes motrices qui lui sont propres.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : le cortex moteur et le motoneurone.",
            statements: [
              { text: "L'hémisphère gauche commande les mouvements volontaires du côté droit du corps.", true: true, why: "Les fibres motrices changent de côté au niveau du bulbe rachidien : la commande est croisée." },
              { text: "Sur l'homonculus moteur, la surface d'une partie du corps est proportionnelle à sa taille réelle.", true: false, why: "Elle est proportionnelle à la précision des mouvements : la main et la bouche sont très étendues." },
              { text: "Les mouvements réflexes et volontaires d'un muscle passent par les mêmes motoneurones.", true: true, why: "Le motoneurone de la moelle est la voie finale commune." },
              { text: "Un PPSE a toujours la même amplitude, comme un potentiel d'action.", true: false, why: "Les potentiels postsynaptiques ont une amplitude variable, qui dépend de la quantité de neurotransmetteur." },
              { text: "Une synapse inhibitrice éloigne la membrane du motoneurone de son seuil.", true: true, why: "Elle provoque une hyperpolarisation (PPSI)." },
              { text: "La carte motrice d'un adulte est fixée une fois pour toutes.", true: false, why: "La plasticité cérébrale persiste toute la vie, même si elle diminue avec l'âge." },
              { text: "Plusieurs PPSE arrivant en même temps par des synapses différentes s'additionnent : c'est la sommation spatiale.", true: true, why: "La sommation temporelle concerne, elle, des messages répétés sur une même synapse." },
            ],
          },
          quiz: [
            {
              q: "Où se situe l'aire motrice primaire ?",
              options: ["Dans le lobe occipital, à l'arrière du crâne", "Dans le cervelet", "En arrière du sillon central, dans le lobe pariétal", "En avant du sillon central, dans le lobe frontal"],
              answer: 3,
              why: "L'aire motrice primaire occupe la circonvolution frontale ascendante, juste en avant du sillon central.",
            },
            {
              q: "Pourquoi la main occupe-t-elle une grande surface sur l'homonculus moteur ?",
              options: ["Parce qu'elle réalise des mouvements fins et précis", "Parce qu'elle contient beaucoup de muscles volumineux", "Parce qu'elle est proche du cerveau", "Parce qu'elle est utilisée par réflexe"],
              answer: 0,
              why: "La surface corticale reflète la précision des mouvements, non la taille ou la force des muscles.",
            },
            {
              q: "Deux potentiels d'action arrivent très rapprochés à la même synapse excitatrice. Leurs effets s'additionnent par :",
              options: ["sommation spatiale", "sommation temporelle", "décussation", "inhibition"],
              answer: 1,
              why: "La sommation temporelle additionne des potentiels postsynaptiques successifs produits par une même synapse.",
            },
            {
              q: "Où le motoneurone « décide-t-il » d'émettre ou non un potentiel d'action ?",
              options: ["Dans la fente synaptique", "Au bouton synaptique de son axone", "Au segment initial de l'axone", "Dans la fibre musculaire"],
              answer: 2,
              why: "C'est au segment initial de l'axone (cône d'émergence) que la somme des potentiels est comparée au seuil.",
            },
            {
              q: "Que signifie l'expression « plasticité cérébrale » ?",
              options: ["La capacité du cerveau à remanier ses connexions", "La souplesse mécanique du tissu nerveux", "La régénération des neurones détruits par un AVC", "Le croisement des voies motrices"],
              answer: 0,
              why: "La plasticité désigne le remaniement des connexions et des cartes corticales selon l'expérience, l'apprentissage ou une lésion.",
            },
          ],
          trap: "Confondre potentiel postsynaptique et potentiel d'action : un PPSE ou un PPSI est local, d'amplitude variable et ne se propage pas, alors qu'un potentiel d'action a une amplitude constante et se propage le long de l'axone.",
          method: "Dans un exercice de sommation, posez toujours le calcul : potentiel de repos + somme algébrique des PPSE (positifs) et PPSI (négatifs), puis comparez au seuil. Précisez ensuite s'il s'agit de sommation spatiale, temporelle, ou des deux.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'cerveau-fragile',
          title: 'Le cerveau, un organe fragile à préserver',
          minutes: 30,
          objectives: [
            "Expliquer comment des substances exogènes perturbent le fonctionnement des synapses (agonistes, antagonistes, recapture).",
            "Décrire le rôle du système de récompense et les mécanismes de l'addiction.",
            "Identifier des atteintes du cerveau (lésions, maladies neurodégénératives) et leurs conséquences sur le mouvement.",
            "Argumenter sur les comportements qui préservent le cerveau.",
          ],
          course: [
            {
              heading: "Des substances qui agissent sur les synapses",
              paragraphs: [
                "Le fonctionnement du système nerveux repose sur les synapses chimiques, où un neurotransmetteur se fixe sur des récepteurs spécifiques. Des molécules venues de l'extérieur de l'organisme (substances exogènes : médicaments, drogues, alcool, toxines) peuvent perturber cette transmission parce qu'elles ressemblent au neurotransmetteur ou agissent sur ses étapes.",
                "Une molécule agoniste se fixe sur le récepteur et l'active, comme le ferait le neurotransmetteur : la nicotine active certains récepteurs de l'acétylcholine, le THC du cannabis active les récepteurs cannabinoïdes, la morphine et l'héroïne activent les récepteurs des opioïdes. Une molécule antagoniste se fixe sur le récepteur sans l'activer et empêche le neurotransmetteur d'agir : le curare bloque les récepteurs de l'acétylcholine à la jonction neuromusculaire et provoque une paralysie.",
                "D'autres substances agissent sur l'élimination du neurotransmetteur. La cocaïne bloque la recapture de la dopamine par le neurone présynaptique : la dopamine s'accumule dans la fente et stimule plus longtemps les récepteurs. L'alcool, lui, agit sur plusieurs systèmes à la fois : il renforce notamment l'effet du GABA, principal neurotransmetteur inhibiteur, ce qui explique le ralentissement des réflexes et la mauvaise coordination des mouvements.",
              ],
              box: { label: "Définition", text: "Un agoniste se fixe sur le récepteur d'un neurotransmetteur et l'active. Un antagoniste se fixe sur ce récepteur sans l'activer et bloque l'action du neurotransmetteur." },
            },
            {
              heading: "Le système de récompense et l'addiction",
              paragraphs: [
                "Le cerveau possède un système de récompense : des neurones à dopamine situés dans l'aire tegmentale ventrale (dans le mésencéphale) projettent vers le noyau accumbens et le cortex préfrontal. Il s'active lors de situations agréables et utiles à la survie (manger, boire, interactions sociales) et renforce les comportements correspondants : on a envie de les répéter.",
                "Les substances addictives augmentent toutes, directement ou indirectement, la libération ou l'action de la dopamine dans ce circuit, beaucoup plus fortement que les récompenses naturelles. Leur consommation répétée modifie le cerveau : les récepteurs deviennent moins nombreux ou moins sensibles, si bien qu'il faut des doses plus fortes pour obtenir le même effet (tolérance) et que l'arrêt provoque un malaise (syndrome de sevrage).",
                "L'addiction se définit par une perte de contrôle : un usage compulsif qui se poursuit malgré ses conséquences néfastes. Certaines addictions n'impliquent aucune substance (jeux d'argent, par exemple) mais mettent en jeu le même système. Le cortex préfrontal, qui participe au contrôle des comportements, achève sa maturation tardivement, au début de l'âge adulte : l'adolescence est donc une période de vulnérabilité particulière.",
              ],
              box: { label: "À retenir", text: "Système de récompense : neurones dopaminergiques de l'aire tegmentale ventrale vers le noyau accumbens et le cortex préfrontal. Les drogues le suractivent ; leur usage répété entraîne tolérance, dépendance et perte de contrôle." },
            },
            {
              heading: "Lésions et maladies du cerveau",
              paragraphs: [
                "Les neurones détruits sont très peu remplacés chez l'adulte. Un AVC (obstruction ou rupture d'un vaisseau sanguin cérébral) prive une région du cerveau d'oxygène : les neurones meurent en quelques minutes, ce qui peut provoquer paralysie ou troubles du langage selon la région touchée. Un traumatisme crânien (chute, accident de la route ou de sport) peut avoir les mêmes conséquences.",
                "Certaines maladies dites neurodégénératives détruisent progressivement des populations de neurones. Dans la maladie de Parkinson, les neurones à dopamine d'une région appelée substance noire disparaissent : les mouvements deviennent lents, raides, accompagnés de tremblements au repos. Un traitement par la L-DOPA, précurseur de la dopamine, compense partiellement ce déficit.",
              ],
            },
            {
              heading: "Préserver son cerveau",
              paragraphs: [
                "Connaître le fonctionnement des synapses permet de comprendre les recommandations de santé publique : éviter ou limiter les substances psychoactives (alcool, tabac, cannabis et autres drogues), en particulier pendant l'adolescence et la grossesse (l'alcool consommé pendant la grossesse peut provoquer des lésions cérébrales définitives chez l'enfant).",
                "D'autres comportements protègent le cerveau : porter un casque à vélo, à trottinette ou à moto pour limiter les traumatismes, dormir suffisamment (le sommeil participe à la consolidation des apprentissages), pratiquer une activité physique régulière et maintenir une activité intellectuelle et sociale, qui entretiennent la plasticité cérébrale.",
              ],
              box: { label: "À retenir", text: "Le cerveau est un organe fragile : ses neurones se renouvellent très peu. On le préserve en évitant les substances psychoactives, en se protégeant des traumatismes et en entretenant sommeil, activité physique et apprentissages." },
            },
          ],
          keyPoints: [
            "Des substances exogènes perturbent les synapses : agonistes (nicotine, THC, morphine), antagonistes (curare), blocage de la recapture (cocaïne).",
            "L'alcool renforce notamment l'effet inhibiteur du GABA : réflexes ralentis, coordination altérée.",
            "Système de récompense : neurones à dopamine de l'aire tegmentale ventrale vers le noyau accumbens et le cortex préfrontal.",
            "Addiction : perte de contrôle, tolérance et sevrage, liés à des modifications durables des synapses.",
            "AVC, traumatismes et maladies neurodégénératives (Parkinson : perte des neurones à dopamine) détruisent des neurones peu remplacés.",
          ],
          example: {
            statement: "Une molécule X a une forme proche de celle de la dopamine. Dans une expérience, on ajoute X dans une culture de neurones possédant des récepteurs à la dopamine : les neurones postsynaptiques se dépolarisent, même sans dopamine. Si l'on ajoute ensuite une molécule Y, la dopamine n'a plus aucun effet. Qualifiez X et Y.",
            solution: [
              "X provoque, en l'absence de dopamine, la même réponse que la dopamine : elle se fixe sur les récepteurs et les active.",
              "X est donc un agoniste de la dopamine.",
              "Y empêche la dopamine d'agir : elle occupe les récepteurs sans déclencher de réponse.",
              "Y est donc un antagoniste de la dopamine.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque substance, indiquez son mode d'action sur la synapse : a) la nicotine ; b) le curare ; c) la cocaïne ; d) le THC du cannabis.",
              hint: "Distinguez trois cas : la molécule active le récepteur, le bloque, ou empêche l'élimination du neurotransmetteur.",
              solution: [
                "a) Nicotine : agoniste de certains récepteurs de l'acétylcholine (récepteurs dits nicotiniques).",
                "b) Curare : antagoniste des récepteurs de l'acétylcholine à la jonction neuromusculaire, d'où la paralysie.",
                "c) Cocaïne : bloque la recapture de la dopamine, qui s'accumule dans la fente synaptique.",
                "d) THC : agoniste des récepteurs cannabinoïdes.",
              ],
            },
            {
              level: 2,
              statement: "On mesure la concentration de dopamine dans la fente synaptique de neurones du noyau accumbens chez un rat. Sans traitement, après une stimulation, la concentration atteint 100 unités puis revient à 10 unités en 0,5 s. Avec cocaïne, elle atteint 300 unités et met plus de 3 s à revenir à 10 unités. Calculez de combien la concentration maximale est multipliée et expliquez ces résultats.",
              hint: "Pensez à ce qui fait habituellement baisser la concentration de dopamine dans la fente.",
              solution: [
                "Concentration maximale : 300 ÷ 100 = 3, elle est multipliée par 3 avec cocaïne.",
                "La durée de retour à la valeur basale passe de 0,5 s à plus de 3 s : elle est multipliée par plus de 6.",
                "Habituellement, la dopamine est éliminée de la fente par recapture dans le neurone présynaptique.",
                "La cocaïne bloque ce transporteur : la dopamine reste plus longtemps et en plus grande quantité dans la fente.",
                "Les récepteurs du neurone postsynaptique sont donc stimulés plus fort et plus longtemps : le système de récompense est suractivé, ce qui explique l'effet euphorisant et le risque d'addiction.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Document 1 : chez des personnes consommant régulièrement une drogue depuis plusieurs années, l'imagerie montre une quantité de récepteurs à la dopamine dans le noyau accumbens plus faible que chez des personnes non consommatrices. Document 2 : ces personnes déclarent avoir besoin de doses de plus en plus fortes pour ressentir le même effet, et ressentir un malaise intense à l'arrêt. Document 3 : chez l'adolescent, le cortex préfrontal, impliqué dans le contrôle des comportements, n'a pas achevé sa maturation. Expliquez la mise en place d'une addiction et la vulnérabilité des adolescents.",
              hint: "Reliez la diminution du nombre de récepteurs à la notion de tolérance, puis le malaise à l'arrêt à la notion de dépendance.",
              solution: [
                "La drogue augmente fortement l'action de la dopamine dans le système de récompense (aire tegmentale ventrale vers noyau accumbens), qui renforce le comportement de consommation.",
                "Document 1 : en réponse à cette stimulation excessive et répétée, les neurones du noyau accumbens réduisent leur nombre de récepteurs à la dopamine.",
                "Document 2 : avec moins de récepteurs, une même dose produit un effet plus faible : c'est la tolérance, qui pousse à augmenter les doses. Sans drogue, la stimulation du système de récompense devient insuffisante : c'est le syndrome de sevrage, qui traduit une dépendance.",
                "Document 3 : le cortex préfrontal permet de contrôler les comportements et de résister à une envie. Chez l'adolescent, son immaturité rend ce contrôle moins efficace face à un système de récompense très réactif.",
                "Conclusion : l'addiction résulte de modifications durables des synapses du système de récompense (tolérance, dépendance) qui conduisent à une perte de contrôle de la consommation ; l'adolescent y est plus vulnérable car son cortex préfrontal n'est pas mature.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque substance ou maladie à son effet sur le système nerveux.",
            pairs: [
              { left: "Curare", right: "Antagoniste de l'acétylcholine à la jonction neuromusculaire" },
              { left: "Cocaïne", right: "Blocage de la recapture de la dopamine" },
              { left: "Nicotine", right: "Agoniste de récepteurs de l'acétylcholine" },
              { left: "Alcool", right: "Renforcement de l'effet inhibiteur du GABA" },
              { left: "Maladie de Parkinson", right: "Perte des neurones à dopamine de la substance noire" },
              { left: "THC du cannabis", right: "Agoniste des récepteurs cannabinoïdes" },
            ],
          },
          quiz: [
            {
              q: "Une molécule qui se fixe sur le récepteur d'un neurotransmetteur sans l'activer est :",
              options: ["un agoniste", "un antagoniste", "un neurotransmetteur", "une enzyme de dégradation"],
              answer: 1,
              why: "L'antagoniste occupe le récepteur et empêche le neurotransmetteur d'agir.",
            },
            {
              q: "Quel neurotransmetteur est au centre du système de récompense ?",
              options: ["L'acétylcholine", "Le GABA", "La dopamine", "Le glutamate"],
              answer: 2,
              why: "Les neurones de l'aire tegmentale ventrale libèrent de la dopamine dans le noyau accumbens et le cortex préfrontal.",
            },
            {
              q: "Qu'appelle-t-on tolérance à une drogue ?",
              options: ["Le malaise physique et psychique ressenti à l'arrêt de la consommation", "L'absence d'effet dès la première prise", "La disparition totale de l'envie", "La nécessité d'augmenter les doses pour obtenir le même effet"],
              answer: 3,
              why: "La tolérance s'explique notamment par la diminution du nombre ou de la sensibilité des récepteurs.",
            },
            {
              q: "Dans la maladie de Parkinson, quels neurones disparaissent ?",
              options: ["Les neurones à dopamine de la substance noire", "Les motoneurones de la moelle épinière", "Les neurones sensoriels des fuseaux", "Les neurones de l'aire motrice primaire"],
              answer: 0,
              why: "La perte des neurones dopaminergiques de la substance noire perturbe le contrôle des mouvements.",
            },
            {
              q: "Pourquoi l'adolescence est-elle une période de vulnérabilité face aux addictions ?",
              options: ["Parce que le système de récompense n'existe pas encore", "Parce que le cortex préfrontal n'a pas achevé sa maturation", "Parce que les synapses n'utilisent pas encore de neurotransmetteurs", "Parce que le cerveau ne présente plus de plasticité"],
              answer: 1,
              why: "Le cortex préfrontal, qui contrôle les comportements, mûrit jusqu'au début de l'âge adulte.",
            },
          ],
          trap: "Dire qu'une drogue « fabrique du plaisir » sans préciser le mécanisme : il faut nommer la synapse, le neurotransmetteur et le mode d'action (agoniste, antagoniste ou blocage de la recapture).",
          method: "Pour analyser l'effet d'une substance, suivez les étapes de la transmission synaptique (libération, fixation sur le récepteur, élimination par dégradation ou recapture) et demandez-vous à laquelle elle intervient : le vocabulaire juste en découle.",
        },
      ],
    },
    /* ==================================================================== */
    /* PRODUIRE LE MOUVEMENT : CONTRACTION ET ÉNERGIE                         */
    /* ==================================================================== */
    {
      id: 'contraction-musculaire',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'cellule-musculaire',
          title: 'La cellule musculaire et la contraction',
          minutes: 35,
          objectives: [
            "Décrire l'organisation d'une fibre musculaire striée squelettique, des myofibrilles aux sarcomères.",
            "Expliquer le raccourcissement du sarcomère par le glissement des filaments d'actine et de myosine.",
            "Expliquer le rôle des ions calcium et de l'ATP dans le cycle de la contraction.",
            "Exploiter des électronographies et des mesures de sarcomères.",
          ],
          course: [
            {
              heading: "Du muscle à la fibre musculaire",
              paragraphs: [
                "Un muscle squelettique, comme le biceps, est attaché aux os par des tendons. Il est formé de faisceaux, eux-mêmes constitués de cellules très particulières : les fibres musculaires. Une fibre musculaire est une cellule géante, de quelques dizaines de micromètres de diamètre mais pouvant mesurer plusieurs centimètres de long, et elle possède de nombreux noyaux (elle est plurinucléée), car elle provient de la fusion de nombreuses cellules au cours du développement.",
                "Son cytoplasme est presque entièrement occupé par des myofibrilles, longs cylindres parallèles orientés dans l'axe de la fibre. Au microscope, les myofibrilles présentent une alternance régulière de bandes sombres et de bandes claires, alignées d'une myofibrille à l'autre : c'est pourquoi on parle de muscle strié. La fibre contient aussi de nombreuses mitochondries et un réseau de membranes, le réticulum sarcoplasmique, qui stocke des ions calcium (Ca²⁺).",
              ],
              box: { label: "Repère", text: "Muscle → faisceaux → fibres musculaires (cellules plurinucléées) → myofibrilles → sarcomères → filaments d'actine et de myosine." },
            },
            {
              heading: "Le sarcomère, unité contractile",
              paragraphs: [
                "Une myofibrille est une succession d'unités identiques, les sarcomères, longs d'environ 2 à 3 µm au repos. Un sarcomère est délimité par deux stries Z. Il contient deux types de filaments protéiques : des filaments fins d'actine, accrochés aux stries Z, et des filaments épais de myosine, au centre, qui chevauchent en partie les filaments d'actine.",
                "Cette disposition explique les bandes visibles au microscope électronique. La bande sombre A correspond à toute la longueur des filaments de myosine (avec la zone où ils chevauchent l'actine). Les bandes claires I, de part et d'autre des stries Z, ne contiennent que de l'actine. Au centre de la bande A, la zone H, plus claire, ne contient que de la myosine.",
                "En comparant des sarcomères au repos et contractés, on constate que le sarcomère raccourcit, que les bandes I et la zone H raccourcissent, mais que la bande A garde la même longueur. Les filaments ne raccourcissent donc pas : ils glissent les uns par rapport aux autres, l'actine étant tirée vers le centre du sarcomère. C'est le modèle du glissement des filaments.",
              ],
              box: { label: "Propriété", text: "Lors de la contraction, le sarcomère raccourcit : les bandes I et la zone H diminuent, la bande A reste constante. Les filaments d'actine glissent entre les filaments de myosine, sans que les filaments eux-mêmes raccourcissent." },
            },
            {
              heading: "Le moteur moléculaire : le cycle actine-myosine",
              paragraphs: [
                "Chaque molécule de myosine possède une tête capable de se fixer sur l'actine et d'hydrolyser l'ATP (ATP → ADP + Pi), ce qui libère de l'énergie. Le cycle se déroule ainsi : la tête de myosine, chargée de l'énergie de l'hydrolyse d'un ATP, se fixe sur l'actine en formant un complexe actine-myosine ; elle libère l'ADP et le phosphate en pivotant, ce qui tire le filament d'actine vers le centre du sarcomère ; la fixation d'un nouvel ATP détache la tête de l'actine ; l'hydrolyse de cet ATP redresse la tête, prête pour un nouveau cycle.",
                "Des milliers de têtes de myosine répètent ce cycle de façon non synchrone, un peu comme des rameurs qui tirent chacun à leur rythme sur une corde : le filament d'actine avance de façon continue. Sans ATP, les têtes restent accrochées à l'actine : c'est ce qui explique la rigidité cadavérique, qui apparaît après la mort quand l'ATP est épuisé.",
              ],
              box: { label: "À retenir", text: "L'ATP sert à la fois à fournir l'énergie du pivotement (par son hydrolyse) et à détacher la myosine de l'actine. Sans ATP, pas de contraction ni de relâchement." },
            },
            {
              heading: "Le déclenchement par le calcium",
              paragraphs: [
                "Au repos, les sites de fixation de la myosine sur l'actine sont masqués par des protéines régulatrices : le cycle ne peut pas démarrer. Lorsque le motoneurone libère de l'acétylcholine à la jonction neuromusculaire, un potentiel d'action naît dans la membrane de la fibre musculaire et se propage jusqu'au cœur de la cellule par des invaginations de la membrane.",
                "Ce potentiel d'action provoque la libération des ions Ca²⁺ stockés dans le réticulum sarcoplasmique. Le calcium se fixe sur les protéines régulatrices associées à l'actine, ce qui démasque les sites de fixation : les têtes de myosine peuvent se lier à l'actine et la contraction commence. Quand les potentiels d'action cessent, le calcium est repompé activement dans le réticulum (ce pompage consomme aussi de l'ATP) : les sites sont de nouveau masqués et le muscle se relâche.",
                "Des anomalies de ces protéines provoquent des maladies, les myopathies. Dans la myopathie de Duchenne, une protéine qui relie l'appareil contractile à la membrane, la dystrophine, est absente : les fibres s'abîment à chaque contraction et dégénèrent progressivement.",
              ],
              box: { label: "À retenir", text: "Potentiel d'action musculaire → libération de Ca²⁺ par le réticulum sarcoplasmique → démasquage des sites de l'actine → cycles actine-myosine consommant de l'ATP → glissement des filaments → raccourcissement des sarcomères." },
            },
          ],
          keyPoints: [
            "La fibre musculaire est une cellule géante plurinucléée remplie de myofibrilles.",
            "Le sarcomère, entre deux stries Z, est l'unité contractile : actine (filaments fins) et myosine (filaments épais).",
            "Contraction : bandes I et zone H raccourcissent, bande A constante ; les filaments glissent sans raccourcir.",
            "Les têtes de myosine hydrolysent l'ATP et tirent l'actine vers le centre du sarcomère.",
            "Le Ca²⁺ libéré par le réticulum sarcoplasmique déclenche la contraction ; son repompage permet le relâchement.",
            "Sans ATP, la myosine reste fixée à l'actine : c'est la rigidité cadavérique.",
          ],
          example: {
            statement: "Sur des électronographies, un sarcomère au repos mesure 2,6 µm avec une bande A de 1,6 µm. Contracté, il mesure 2,0 µm. Calculez la longueur totale des bandes I avant et après contraction, sachant que la bande A ne change pas, et interprétez.",
            solution: [
              "La longueur du sarcomère est la somme de la bande A et des deux demi-bandes I situées à ses extrémités : L = A + I (I désignant la longueur totale de bande claire dans le sarcomère).",
              "Au repos : I = 2,6 - 1,6 = 1,0 µm.",
              "Contracté : I = 2,0 - 1,6 = 0,4 µm.",
              "Le sarcomère a raccourci de 0,6 µm, exactement autant que les bandes I, alors que la bande A (longueur des filaments de myosine) est inchangée.",
              "Conclusion : la myosine ne raccourcit pas ; ce sont les filaments d'actine qui glissent vers le centre du sarcomère en s'enfonçant entre les filaments de myosine.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Légendez un sarcomère en répondant aux questions : a) Quelles structures délimitent le sarcomère ? b) Quelle bande contient seulement des filaments d'actine ? c) Quelle bande correspond à la longueur des filaments de myosine ? d) Quelle zone, au centre, ne contient que de la myosine ?",
              hint: "Rappelez-vous : I comme « clair » et seulement actine, A comme la longueur de la myosine.",
              solution: [
                "a) Le sarcomère est délimité par deux stries Z, sur lesquelles sont ancrés les filaments d'actine.",
                "b) Les bandes claires I ne contiennent que de l'actine.",
                "c) La bande sombre A correspond à la longueur des filaments de myosine.",
                "d) La zone H, au centre de la bande A, ne contient que de la myosine.",
              ],
            },
            {
              level: 2,
              statement: "On place des fibres musculaires isolées, dont la membrane a été rendue perméable, dans différentes solutions. Solution 1 : ATP sans Ca²⁺ : pas de contraction, fibre souple. Solution 2 : Ca²⁺ sans ATP : pas de contraction, fibre rigide. Solution 3 : ATP et Ca²⁺ : contraction. Interprétez chaque résultat.",
              hint: "Rappelez le rôle du calcium (démasquer les sites de l'actine) et les deux rôles de l'ATP (énergie et détachement).",
              solution: [
                "Solution 1 : sans Ca²⁺, les sites de fixation de la myosine sur l'actine restent masqués ; la myosine ne peut pas se lier à l'actine, la fibre est relâchée et souple.",
                "Solution 2 : le Ca²⁺ démasque les sites, les têtes de myosine se fixent sur l'actine ; mais sans ATP, elles ne peuvent ni pivoter de nouveau ni se détacher. Les complexes actine-myosine restent bloqués : la fibre est rigide (comme dans la rigidité cadavérique).",
                "Solution 3 : avec Ca²⁺ et ATP, les cycles de fixation, pivotement, détachement se répètent : les filaments glissent et la fibre se contracte.",
                "Conclusion : le Ca²⁺ est le déclencheur de la contraction et l'ATP en est la source d'énergie, indispensable aussi au détachement de la myosine.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Dans un sarcomère, chaque filament d'actine mesure 1,0 µm et chaque filament de myosine 1,6 µm. Les filaments d'actine sont ancrés sur les stries Z. a) Calculez la longueur du sarcomère lorsque la zone H mesure 0,4 µm. b) Calculez la longueur minimale théorique du sarcomère, atteinte quand les extrémités des filaments d'actine des deux côtés se rejoignent au centre. c) Expliquez pourquoi un sarcomère trop étiré, au-delà de 3,6 µm, ne peut plus développer de force.",
              hint: "Faites un schéma à l'échelle : de chaque strie Z part un filament d'actine de 1,0 µm vers le centre, la myosine de 1,6 µm est centrée.",
              solution: [
                "a) La zone H est la partie centrale de la myosine non recouverte par l'actine : les deux filaments d'actine s'arrêtent chacun à 0,2 µm du centre. La demi-longueur du sarcomère vaut donc 1,0 + 0,2 = 1,2 µm, et le sarcomère mesure 2 × 1,2 = 2,4 µm.",
                "b) Quand les extrémités des filaments d'actine se rejoignent au centre, la zone H est nulle : la demi-longueur vaut 1,0 µm et le sarcomère mesure 2 × 1,0 = 2,0 µm.",
                "c) Pour qu'il y ait chevauchement, une partie de l'actine doit recouvrir la myosine. La myosine s'étend de 0,8 µm de part et d'autre du centre. Si le sarcomère mesure 3,6 µm, chaque demi-sarcomère mesure 1,8 µm et l'actine s'étend de 1,8 µm à 0,8 µm du centre : son extrémité touche juste celle de la myosine, sans chevauchement.",
                "Au-delà de 3,6 µm, actine et myosine ne se recouvrent plus du tout : les têtes de myosine ne peuvent se fixer sur aucune actine, aucun cycle n'a lieu et la force est nulle.",
                "Conclusion : la force produite dépend du chevauchement entre actine et myosine, ce qui confirme que la contraction repose sur l'interaction et le glissement de ces deux filaments.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes qui conduisent de l'ordre nerveux à la contraction.",
            items: [
              "Le motoneurone libère de l'acétylcholine à la jonction neuromusculaire.",
              "Un potentiel d'action se propage le long de la membrane de la fibre musculaire.",
              "Le réticulum sarcoplasmique libère des ions calcium.",
              "Le calcium démasque les sites de fixation de la myosine sur l'actine.",
              "Les têtes de myosine se fixent sur l'actine et pivotent grâce à l'énergie de l'ATP.",
              "Les filaments d'actine glissent vers le centre du sarcomère, qui raccourcit.",
            ],
          },
          quiz: [
            {
              q: "Lors de la contraction, quelle partie du sarcomère garde la même longueur ?",
              options: ["La bande I", "La zone H", "La bande A", "Le sarcomère entier"],
              answer: 2,
              why: "La bande A correspond à la longueur des filaments de myosine, qui ne raccourcissent pas.",
            },
            {
              q: "Quel est le rôle direct des ions calcium dans la contraction ?",
              options: ["Rendre accessibles les sites de fixation de la myosine sur l'actine", "Fournir directement l'énergie nécessaire au pivotement des têtes de myosine", "Détacher la myosine de l'actine", "Propager le potentiel d'action le long du nerf"],
              answer: 0,
              why: "Le Ca²⁺ se fixe sur les protéines régulatrices de l'actine et démasque les sites de liaison.",
            },
            {
              q: "Pourquoi un muscle devient-il rigide après la mort ?",
              options: ["Le calcium est totalement absent", "Les filaments d'actine se dissolvent", "L'acétylcholine s'accumule", "L'ATP manque et la myosine ne se détache plus de l'actine"],
              answer: 3,
              why: "La fixation d'un ATP est nécessaire au détachement de la tête de myosine.",
            },
            {
              q: "Où les ions calcium sont-ils stockés dans la fibre musculaire au repos ?",
              options: ["Dans les noyaux", "Dans le réticulum sarcoplasmique", "Dans les mitochondries uniquement", "Dans les stries Z"],
              answer: 1,
              why: "Le réticulum sarcoplasmique libère le calcium lors du potentiel d'action et le repompe lors du relâchement.",
            },
            {
              q: "Qu'est-ce qui raccourcit lors de la contraction ?",
              options: ["Les filaments de myosine", "Les filaments d'actine", "Les sarcomères", "Les têtes de myosine"],
              answer: 2,
              why: "Les sarcomères raccourcissent parce que les filaments glissent, sans changer eux-mêmes de longueur.",
            },
          ],
          trap: "Écrire que les filaments d'actine ou de myosine « se contractent » ou « raccourcissent » : ce sont les sarcomères qui raccourcissent, par glissement des filaments les uns par rapport aux autres.",
          method: "Pour exploiter une électronographie de sarcomère, mesurez toujours trois longueurs (sarcomère, bande A, bande I ou zone H) au repos et en contraction, puis présentez-les dans un tableau : la constance de la bande A est l'argument du glissement.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'origine-atp',
          title: 'L\'origine de l\'ATP : respiration et fermentation',
          minutes: 35,
          objectives: [
            "Expliquer que la contraction consomme de l'ATP et que les réserves d'ATP de la fibre sont très faibles.",
            "Décrire les étapes de la respiration cellulaire (glycolyse, cycle de Krebs, chaîne respiratoire) et leur localisation.",
            "Comparer le rendement énergétique de la respiration et de la fermentation lactique.",
            "Relier les types de fibres musculaires et la phosphocréatine aux efforts réalisés.",
          ],
          course: [
            {
              heading: "L'ATP, monnaie énergétique de la cellule",
              paragraphs: [
                "L'adénosine triphosphate (ATP) est la molécule qui fournit directement l'énergie aux têtes de myosine et aux pompes à calcium. Son hydrolyse (ATP + H₂O → ADP + Pi) libère de l'énergie utilisable par la cellule. Or une fibre musculaire ne contient que très peu d'ATP : ses réserves suffisent seulement à quelques secondes de contraction intense. Pourtant, la concentration d'ATP reste presque constante pendant un effort : l'ATP est donc régénéré en permanence à partir d'ADP et de phosphate.",
                "Cette régénération utilise l'énergie contenue dans des molécules organiques, principalement le glucose (provenant du sang ou des réserves de glycogène du muscle) et les acides gras (provenant des réserves de lipides). Trois voies coexistent : la phosphocréatine, la fermentation lactique et la respiration cellulaire.",
              ],
              box: { label: "Formule", text: "ATP + H₂O → ADP + Pi + énergie utilisable par la cellule. La régénération de l'ATP (ADP + Pi → ATP) nécessite au contraire un apport d'énergie." },
            },
            {
              heading: "La respiration cellulaire : trois étapes",
              paragraphs: [
                "La glycolyse se déroule dans le cytoplasme : une molécule de glucose (6 carbones) est transformée en deux molécules de pyruvate (3 carbones). Elle produit 2 ATP et réduit des transporteurs d'électrons, notés R (qui deviennent RH₂). Elle ne nécessite pas de dioxygène.",
                "En présence de dioxygène, le pyruvate entre dans la mitochondrie. Dans la matrice mitochondriale, il est entièrement oxydé au cours d'une série de réactions, le cycle de Krebs : son carbone est libéré sous forme de CO₂, ce qui produit un peu d'ATP (2 par glucose) et surtout de nombreux transporteurs réduits RH₂.",
                "Les RH₂ sont ensuite réoxydés au niveau de la chaîne respiratoire, un ensemble de protéines de la membrane interne de la mitochondrie (les crêtes). Les électrons passent de protéine en protéine jusqu'au dioxygène, accepteur final, qui est réduit en eau. L'énergie libérée permet la synthèse d'une grande quantité d'ATP par l'ATP synthase.",
                "Bilan global : C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O, avec la production d'environ 36 ATP par molécule de glucose (valeur retenue dans les manuels ; les estimations récentes donnent plutôt une trentaine). La respiration explique pourquoi un muscle en effort consomme du dioxygène et rejette du dioxyde de carbone. Les acides gras sont aussi oxydés dans la mitochondrie, uniquement par cette voie.",
              ],
              box: { label: "À retenir", text: "Respiration : glycolyse (cytoplasme, 2 ATP) → cycle de Krebs (matrice mitochondriale, CO₂ et RH₂) → chaîne respiratoire (membrane interne, O₂ réduit en H₂O, beaucoup d'ATP). Rendement : environ 36 ATP par glucose." },
            },
            {
              heading: "La fermentation lactique",
              paragraphs: [
                "Lorsque l'apport de dioxygène est insuffisant pour un effort intense et bref, ou dans les fibres pauvres en mitochondries, le pyruvate issu de la glycolyse n'entre pas dans la mitochondrie. Il est réduit en lactate dans le cytoplasme, grâce aux RH₂ produits par la glycolyse, qui sont ainsi réoxydés en R. Ce recyclage des transporteurs est indispensable : sans lui, la glycolyse s'arrêterait faute de R.",
                "Bilan : C₆H₁₂O₆ → 2 C₃H₆O₃ (lactate), avec seulement 2 ATP par glucose, ceux de la glycolyse. La fermentation est rapide mais peu rentable : le lactate contient encore beaucoup d'énergie. Il est en grande partie réutilisé ensuite, par le cœur, d'autres muscles ou le foie. Contrairement à une idée répandue, le lactate n'est pas la cause des courbatures, qui résultent de microlésions des fibres musculaires.",
              ],
              box: { label: "Formule", text: "Fermentation lactique : glucose → 2 lactate, 2 ATP par glucose, dans le cytoplasme, sans dioxygène. Respiration : environ 36 ATP par glucose, soit un rendement environ 18 fois supérieur." },
            },
            {
              heading: "Phosphocréatine et types de fibres",
              paragraphs: [
                "Au tout début d'un effort ou lors d'un effort explosif (un saut, un sprint de quelques secondes), l'ATP est régénéré immédiatement grâce à la phosphocréatine, une molécule riche en énergie stockée dans la fibre : phosphocréatine + ADP → créatine + ATP. Cette voie est très rapide mais ses réserves s'épuisent en quelques secondes.",
                "Tous les muscles ne contiennent pas les mêmes fibres. Les fibres de type I, dites lentes, sont riches en mitochondries, en myoglobine (qui leur donne une couleur rouge) et entourées de nombreux capillaires : elles fonctionnent surtout par respiration, se fatiguent peu et servent aux efforts d'endurance et au maintien de la posture. Les fibres de type II, rapides, sont plus pauvres en mitochondries mais riches en glycogène : elles produisent beaucoup de force rapidement, en grande partie par fermentation, et se fatiguent vite.",
                "La proportion des deux types de fibres varie selon les muscles et les individus, en partie pour des raisons génétiques, et l'entraînement modifie les propriétés des fibres (par exemple, l'entraînement en endurance augmente le nombre de mitochondries).",
              ],
            },
          ],
          keyPoints: [
            "La contraction consomme de l'ATP ; le muscle en contient très peu et doit le régénérer en permanence.",
            "Respiration : glycolyse (cytoplasme), cycle de Krebs (matrice), chaîne respiratoire (membrane interne mitochondriale), O₂ accepteur final.",
            "Respiration : C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O, environ 36 ATP par glucose.",
            "Fermentation lactique : glucose → 2 lactate, 2 ATP par glucose, sans O₂, dans le cytoplasme.",
            "Phosphocréatine : régénération immédiate de l'ATP, mais seulement quelques secondes.",
            "Fibres I (lentes, mitochondries, endurance) et fibres II (rapides, glycogène, force, fatigables).",
          ],
          example: {
            statement: "Un muscle doit régénérer 72 ATP. Combien de molécules de glucose doit-il dégrader s'il utilise uniquement la respiration (36 ATP par glucose) ? uniquement la fermentation lactique (2 ATP par glucose) ? Concluez.",
            solution: [
              "Par respiration : 72 ÷ 36 = 2 molécules de glucose.",
              "Par fermentation lactique : 72 ÷ 2 = 36 molécules de glucose.",
              "La fermentation consomme 36 ÷ 2 = 18 fois plus de glucose pour la même quantité d'ATP.",
              "Conclusion : la respiration a un rendement environ 18 fois supérieur ; la fermentation épuise vite les réserves de glucose et de glycogène, ce qui explique qu'elle ne puisse soutenir que des efforts brefs.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez où se déroule chaque étape et si elle nécessite du dioxygène : a) glycolyse ; b) cycle de Krebs ; c) chaîne respiratoire ; d) réduction du pyruvate en lactate.",
              hint: "Seules deux localisations sont possibles : le cytoplasme ou la mitochondrie (matrice ou membrane interne).",
              solution: [
                "a) Glycolyse : cytoplasme ; ne nécessite pas de dioxygène.",
                "b) Cycle de Krebs : matrice mitochondriale ; dépend du dioxygène (il ne fonctionne que si la chaîne respiratoire réoxyde les RH₂).",
                "c) Chaîne respiratoire : membrane interne de la mitochondrie ; nécessite du dioxygène, accepteur final des électrons.",
                "d) Réduction du pyruvate en lactate (fermentation) : cytoplasme ; sans dioxygène.",
              ],
            },
            {
              level: 2,
              statement: "On place une suspension de cellules musculaires dans un bioréacteur relié à une sonde à dioxygène. Entre t = 0 et t = 2 min, la concentration en O₂ passe de 8,0 à 7,6 mg/L. On ajoute du glucose à t = 2 min : entre 2 et 4 min, elle passe de 7,6 à 6,0 mg/L. Calculez la consommation de dioxygène (en mg/L/min) avant et après l'ajout de glucose et interprétez.",
              hint: "Consommation = diminution de concentration ÷ durée.",
              solution: [
                "Avant l'ajout : (8,0 - 7,6) ÷ 2 = 0,4 ÷ 2 = 0,2 mg/L/min.",
                "Après l'ajout : (7,6 - 6,0) ÷ 2 = 1,6 ÷ 2 = 0,8 mg/L/min.",
                "La consommation de dioxygène est multipliée par 0,8 ÷ 0,2 = 4 après l'ajout de glucose.",
                "Interprétation : les cellules utilisent le glucose comme source d'énergie par respiration ; l'oxydation du glucose dans les mitochondries consomme du dioxygène (accepteur final de la chaîne respiratoire). La faible consommation initiale correspond à l'utilisation des réserves des cellules.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Document 1 : un muscle de marathonien contient environ 80 % de fibres de type I ; un muscle de sprinteur environ 70 % de fibres de type II. Document 2 : les fibres de type I possèdent beaucoup plus de mitochondries et moins de glycogène que les fibres de type II. Document 3 : au cours d'un sprint de 100 m, la concentration sanguine de lactate augmente fortement ; au cours d'un footing lent, elle varie peu. Expliquez, à partir des documents et de vos connaissances, comment la composition des muscles est adaptée à ces deux types d'effort.",
              hint: "Associez chaque type de fibre à une voie métabolique, puis chaque effort à la voie qui le soutient.",
              solution: [
                "Les fibres de type I, riches en mitochondries (document 2), régénèrent leur ATP surtout par respiration : cycle de Krebs et chaîne respiratoire ont lieu dans les mitochondries. Elles ont un rendement élevé (environ 36 ATP par glucose) et se fatiguent peu.",
                "Les fibres de type II, pauvres en mitochondries mais riches en glycogène, régénèrent leur ATP en grande partie par fermentation lactique : rapide, mais seulement 2 ATP par glucose, d'où une consommation importante de glycogène et une fatigue rapide.",
                "Document 3 : le sprint s'accompagne d'une forte production de lactate, signe d'une fermentation intense ; le footing lent, d'une faible production, signe que la respiration suffit.",
                "Le muscle du sprinteur, riche en fibres II (document 1), est adapté à un effort bref et intense, soutenu par la phosphocréatine puis par la fermentation.",
                "Le muscle du marathonien, riche en fibres I, est adapté à un effort long, soutenu par la respiration, qui exploite efficacement le glucose et les acides gras en consommant du dioxygène.",
                "Conclusion : la proportion de fibres de type I et II, liée à leurs voies métaboliques, adapte chaque muscle à un type d'effort ; elle dépend en partie de la génétique et est modifiée par l'entraînement.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque élément à sa caractéristique dans la production d'ATP.",
            pairs: [
              { left: "Glycolyse", right: "Glucose → 2 pyruvate dans le cytoplasme, 2 ATP" },
              { left: "Cycle de Krebs", right: "Oxydation du pyruvate dans la matrice, libération de CO₂" },
              { left: "Chaîne respiratoire", right: "Réoxydation des RH₂ sur la membrane interne, O₂ réduit en eau" },
              { left: "Fermentation lactique", right: "Pyruvate réduit en lactate, 2 ATP par glucose au total" },
              { left: "Phosphocréatine", right: "Régénération immédiate de l'ATP pendant quelques secondes" },
              { left: "Fibre de type I", right: "Riche en mitochondries, adaptée à l'endurance" },
            ],
          },
          quiz: [
            {
              q: "Où se déroule la glycolyse ?",
              options: ["Dans la matrice mitochondriale", "Sur la membrane interne de la mitochondrie", "Dans le cytoplasme", "Dans le noyau"],
              answer: 2,
              why: "La glycolyse, commune à la respiration et à la fermentation, a lieu dans le cytoplasme.",
            },
            {
              q: "Quel est l'accepteur final des électrons de la chaîne respiratoire ?",
              options: ["Le dioxygène", "Le pyruvate", "Le dioxyde de carbone", "Le glucose"],
              answer: 0,
              why: "Le dioxygène est réduit en eau à la fin de la chaîne respiratoire.",
            },
            {
              q: "Combien d'ATP la fermentation lactique produit-elle par molécule de glucose ?",
              options: ["0", "36", "18", "2"],
              answer: 3,
              why: "Seule la glycolyse produit de l'ATP dans la fermentation : 2 ATP par glucose.",
            },
            {
              q: "Quel est le rôle de la transformation du pyruvate en lactate ?",
              options: ["Produire beaucoup d'ATP supplémentaire", "Réoxyder les transporteurs RH₂ pour que la glycolyse continue", "Fournir du dioxygène à la cellule", "Stocker le glucose sous forme de glycogène"],
              answer: 1,
              why: "Sans réoxydation des RH₂ en R, la glycolyse s'arrêterait faute de transporteurs disponibles.",
            },
            {
              q: "Quelle voie régénère l'ATP le plus rapidement au début d'un sprint ?",
              options: ["La respiration", "L'oxydation des acides gras", "La phosphocréatine", "Le cycle de Krebs"],
              answer: 2,
              why: "La phosphocréatine cède directement son phosphate à l'ADP, mais ses réserves ne durent que quelques secondes.",
            },
          ],
          trap: "Croire que la respiration cellulaire se résume à « respirer » ou qu'elle se déroule entièrement dans la mitochondrie : la glycolyse, première étape, a lieu dans le cytoplasme, et c'est la chaîne respiratoire qui consomme le dioxygène.",
          method: "Construisez un tableau comparatif à double entrée (voie, localisation, besoin en O₂, produits, ATP par glucose, type d'effort) et apprenez-le en le refaisant de mémoire : c'est aussi la meilleure base pour un schéma bilan au bac.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'regulation-glycemie',
          title: 'Le contrôle de la glycémie et le diabète',
          minutes: 35,
          objectives: [
            "Expliquer que la glycémie est un paramètre régulé autour d'une valeur de consigne d'environ 1 g/L.",
            "Décrire le rôle du pancréas, de l'insuline et du glucagon, et celui du foie, des muscles et du tissu adipeux.",
            "Distinguer les causes du diabète de type 1 et du diabète de type 2.",
            "Exploiter des courbes de glycémie et d'insulinémie.",
          ],
          course: [
            {
              heading: "La glycémie, un paramètre régulé",
              paragraphs: [
                "Le glucose est la principale source d'énergie des cellules, en particulier des cellules musculaires en effort et des neurones. Il circule dans le sang : sa concentration, la glycémie, reste chez une personne en bonne santé proche de 1 g/L (soit environ 5,5 mmol/L), malgré des apports discontinus (les repas) et des consommations variables (effort, jeûne nocturne). Après un repas, elle s'élève modérément puis revient à sa valeur initiale en deux heures environ.",
                "Ce maintien résulte d'un système de régulation : des capteurs détectent l'écart à une valeur de référence, des messagers transmettent l'information, et des effecteurs agissent pour corriger l'écart. C'est une boucle de rétroaction négative, car la réponse s'oppose à la variation qui l'a déclenchée.",
              ],
              box: { label: "Définition", text: "La glycémie est la concentration de glucose dans le sang. Elle est maintenue autour de 1 g/L par un système de régulation utilisant deux hormones pancréatiques, l'insuline et le glucagon." },
            },
            {
              heading: "Le pancréas, capteur et glande endocrine",
              paragraphs: [
                "Le pancréas contient des amas de cellules endocrines, les îlots de Langerhans, dispersés parmi les cellules qui produisent le suc digestif. Les îlots contiennent deux types de cellules qui jouent à la fois le rôle de capteurs de la glycémie et de producteurs d'hormones. Les cellules β sécrètent de l'insuline lorsque la glycémie augmente. Les cellules α sécrètent du glucagon lorsque la glycémie diminue.",
                "Ces hormones, libérées dans le sang, n'agissent que sur les cellules qui possèdent des récepteurs spécifiques : ce sont leurs cellules cibles. On le montre par des expériences historiques : un chien dont on retire le pancréas présente une glycémie très élevée et du glucose dans ses urines, alors que la greffe d'un fragment de pancréas sous la peau, simplement relié à la circulation sanguine, rétablit une glycémie normale. Le pancréas agit donc par voie sanguine, c'est-à-dire de manière hormonale.",
              ],
            },
            {
              heading: "Stocker et libérer le glucose : insuline et glucagon",
              paragraphs: [
                "L'insuline est une hormone hypoglycémiante. Elle favorise l'entrée du glucose dans les cellules musculaires et adipeuses, son stockage sous forme de glycogène dans le foie et les muscles (glycogénogenèse) et sa transformation en lipides dans le tissu adipeux. Elle freine aussi la libération de glucose par le foie.",
                "Le glucagon est une hormone hyperglycémiante. Il agit surtout sur le foie, où il stimule l'hydrolyse du glycogène en glucose (glycogénolyse) et la libération de ce glucose dans le sang. Il stimule aussi la fabrication de glucose à partir d'autres molécules (néoglucogenèse).",
                "Le foie joue un rôle central : c'est le principal organe capable de libérer du glucose dans le sang. Les muscles stockent eux aussi du glycogène, mais ils l'utilisent pour leur propre contraction et ne le libèrent pas dans le sang, car il leur manque l'enzyme nécessaire. Pendant un effort, les muscles prélèvent du glucose dans le sang : la glycémie tend à baisser, la sécrétion de glucagon augmente et le foie compense.",
              ],
              box: { label: "À retenir", text: "Insuline (cellules β) : hypoglycémiante, stockage du glucose (glycogène, lipides). Glucagon (cellules α) : hyperglycémiant, libération de glucose par le foie. Le foie est l'organe qui stocke et libère le glucose sanguin." },
            },
            {
              heading: "Les diabètes",
              paragraphs: [
                "Le diabète est défini par une hyperglycémie chronique : une glycémie à jeun supérieure ou égale à 1,26 g/L, mesurée à deux reprises. À long terme, l'excès de glucose abîme les vaisseaux sanguins et les nerfs (atteintes des yeux, des reins, du cœur, des pieds). On distingue deux principaux types de diabète.",
                "Le diabète de type 1 apparaît généralement chez l'enfant ou le jeune adulte. C'est une maladie auto-immune : des lymphocytes T détruisent les cellules β des îlots de Langerhans, qui ne produisent plus d'insuline. Le traitement repose sur l'apport d'insuline par injections ou par une pompe, ajusté à l'alimentation et à l'activité physique.",
                "Le diabète de type 2, de loin le plus fréquent, apparaît plutôt chez l'adulte. Les cellules cibles répondent mal à l'insuline : c'est l'insulinorésistance. Le pancréas sécrète d'abord davantage d'insuline pour compenser, puis sa sécrétion peut devenir insuffisante. Il résulte de l'association d'une prédisposition génétique (plusieurs gènes) et de facteurs environnementaux : surpoids, sédentarité, alimentation déséquilibrée. La prévention et le traitement passent d'abord par l'activité physique et l'alimentation, puis par des médicaments et parfois l'insuline.",
              ],
              box: { label: "Repère", text: "Diabète : glycémie à jeun ≥ 1,26 g/L à deux reprises. Type 1 : destruction auto-immune des cellules β, insuline absente. Type 2 : insulinorésistance des cellules cibles, facteurs génétiques et environnementaux." },
            },
          ],
          keyPoints: [
            "La glycémie est maintenue autour de 1 g/L par une boucle de rétroaction négative.",
            "Les îlots de Langerhans du pancréas sont à la fois capteurs et glandes endocrines.",
            "Insuline (cellules β) : hypoglycémiante ; entrée du glucose dans les cellules, glycogénogenèse, lipogenèse.",
            "Glucagon (cellules α) : hyperglycémiant ; glycogénolyse et néoglucogenèse dans le foie.",
            "Le foie libère du glucose dans le sang ; les muscles gardent leur glycogène pour eux.",
            "Diabète (glycémie à jeun ≥ 1,26 g/L) : type 1 auto-immun sans insuline, type 2 par insulinorésistance.",
          ],
          example: {
            statement: "La glycémie à jeun d'une personne est mesurée à 7,5 mmol/L lors de deux analyses. La masse molaire du glucose est de 180 g/mol. Convertissez cette valeur en g/L et dites si elle correspond à un diabète.",
            solution: [
              "Masse de glucose par litre = concentration molaire × masse molaire = 7,5 × 10⁻³ mol/L × 180 g/mol.",
              "7,5 × 180 = 1 350, soit 1 350 × 10⁻³ g/L = 1,35 g/L.",
              "Le seuil du diabète est une glycémie à jeun ≥ 1,26 g/L à deux reprises.",
              "1,35 g/L ≥ 1,26 g/L, mesurée deux fois : cette personne est diabétique (le type de diabète reste à déterminer par d'autres examens).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez : l'insuline est sécrétée par les cellules ... des îlots de Langerhans quand la glycémie ... ; elle est ... . Le glucagon est sécrété par les cellules ... quand la glycémie ... ; il agit surtout sur ... en stimulant la ... .",
              hint: "Associez β à « baisser la glycémie » et α au glucagon.",
              solution: [
                "L'insuline est sécrétée par les cellules β des îlots de Langerhans quand la glycémie augmente ; elle est hypoglycémiante.",
                "Le glucagon est sécrété par les cellules α quand la glycémie diminue ; il agit surtout sur le foie en stimulant la glycogénolyse (et la néoglucogenèse), c'est-à-dire la libération de glucose dans le sang.",
              ],
            },
            {
              level: 2,
              statement: "Un adulte possède environ 5 L de sang et une glycémie de 1 g/L. a) Calculez la masse de glucose présente dans son sang. b) Un muscle en effort consomme environ 1 g de glucose par minute. Combien de temps ce glucose sanguin suffirait-il sans aucun apport ? c) Le foie d'un adulte contient environ 100 g de glycogène. Expliquez pourquoi la glycémie reste pourtant stable pendant un effort de 30 minutes.",
              hint: "Masse = concentration × volume ; puis comparez les réserves sanguines et hépatiques.",
              solution: [
                "a) m = 1 g/L × 5 L = 5 g de glucose dans le sang.",
                "b) 5 g ÷ 1 g/min = 5 min : le glucose sanguin seul serait épuisé en 5 minutes environ.",
                "c) Pendant l'effort, la baisse de la glycémie stimule la sécrétion de glucagon par les cellules α. Le glucagon provoque l'hydrolyse du glycogène hépatique et la libération de glucose dans le sang.",
                "Avec environ 100 g de glycogène, le foie peut fournir les 30 g environ nécessaires (30 min × 1 g/min) sans épuiser ses réserves. Les muscles utilisent aussi leur propre glycogène et des acides gras.",
                "Conclusion : la glycémie reste stable grâce à la régulation hormonale qui mobilise les réserves du foie.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. On réalise un test d'hyperglycémie provoquée (ingestion de 75 g de glucose à jeun) chez trois personnes. Personne A : glycémie 0,9 g/L à jeun, maximum 1,4 g/L à 45 min, retour à 1,0 g/L à 2 h ; insulinémie qui augmente fortement puis redescend. Personne B : glycémie 1,5 g/L à jeun, plus de 3 g/L à 2 h ; insulinémie quasi nulle tout au long du test. Personne C : glycémie 1,35 g/L à jeun, 2,4 g/L à 2 h ; insulinémie plus élevée que celle de A à tous les temps. Identifiez la situation de chaque personne et expliquez.",
              hint: "Pour chaque personne, regardez d'abord la glycémie à jeun (seuil 1,26 g/L), puis demandez-vous si l'insuline est absente ou présente mais inefficace.",
              solution: [
                "Personne A : glycémie à jeun normale (0,9 g/L), augmentation modérée puis retour à la normale en 2 h, accompagnée d'une sécrétion d'insuline : la régulation fonctionne, la personne n'est pas diabétique.",
                "Personne B : glycémie à jeun de 1,5 g/L ≥ 1,26 g/L (hyperglycémie, à confirmer par une seconde mesure) et très forte hyperglycémie au cours du test. L'insulinémie est quasi nulle : les cellules β ne produisent plus d'insuline. Cela correspond à un diabète de type 1, dû à la destruction auto-immune des cellules β.",
                "Personne C : glycémie à jeun de 1,35 g/L ≥ 1,26 g/L et hyperglycémie prolongée, alors que l'insuline est présente en quantité supérieure à la normale. L'insuline est donc produite mais n'agit pas efficacement sur ses cellules cibles : c'est une insulinorésistance, caractéristique du diabète de type 2.",
                "Conclusion : A a une régulation normale ; B présente un profil de diabète de type 1 (défaut de production d'insuline) ; C présente un profil de diabète de type 2 (défaut d'action de l'insuline). Le diagnostic doit être confirmé par une seconde mesure à jeun.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la glycémie et le diabète.",
            statements: [
              { text: "L'insuline fait baisser la glycémie.", true: true, why: "Elle favorise l'entrée et le stockage du glucose dans les cellules : elle est hypoglycémiante." },
              { text: "Les muscles libèrent leur glycogène dans le sang quand la glycémie baisse.", true: false, why: "Les muscles utilisent leur glycogène pour eux-mêmes ; c'est le foie qui libère du glucose dans le sang." },
              { text: "Le glucagon agit principalement sur le foie.", true: true, why: "Il y stimule la glycogénolyse et la néoglucogenèse." },
              { text: "Dans le diabète de type 2, le pancréas ne produit jamais d'insuline.", true: false, why: "Le défaut principal est l'insulinorésistance ; l'insuline est souvent présente, au moins au début." },
              { text: "Le diabète de type 1 est une maladie auto-immune.", true: true, why: "Des lymphocytes T détruisent les cellules β des îlots de Langerhans." },
              { text: "Le diabète de type 2 s'explique uniquement par l'alimentation.", true: false, why: "Il associe une prédisposition génétique à plusieurs facteurs de l'environnement (sédentarité, surpoids, alimentation)." },
              { text: "La régulation de la glycémie est une boucle de rétroaction négative.", true: true, why: "La réponse hormonale s'oppose à l'écart et ramène la glycémie vers sa valeur de référence." },
            ],
          },
          quiz: [
            {
              q: "Quelles cellules sécrètent l'insuline ?",
              options: ["Les cellules α des îlots de Langerhans", "Les hépatocytes", "Les cellules β des îlots de Langerhans", "Les cellules adipeuses"],
              answer: 2,
              why: "Les cellules β détectent l'élévation de la glycémie et sécrètent l'insuline.",
            },
            {
              q: "Quel organe est le principal fournisseur de glucose au sang entre les repas ?",
              options: ["Le foie", "Le muscle", "Le pancréas", "L'intestin"],
              answer: 0,
              why: "Le foie hydrolyse son glycogène et libère le glucose dans le sang, sous l'effet du glucagon.",
            },
            {
              q: "À partir de quelle glycémie à jeun, mesurée deux fois, parle-t-on de diabète ?",
              options: ["0,70 g/L", "1,00 g/L", "2,00 g/L", "1,26 g/L"],
              answer: 3,
              why: "Le seuil retenu est une glycémie à jeun supérieure ou égale à 1,26 g/L (7 mmol/L) à deux reprises.",
            },
            {
              q: "Qu'est-ce que l'insulinorésistance ?",
              options: ["L'absence totale de sécrétion d'insuline par le pancréas endocrine", "Une mauvaise réponse des cellules cibles à l'insuline", "La destruction du foie par l'insuline", "Un excès de glucagon"],
              answer: 1,
              why: "Les cellules cibles répondent moins à l'insuline : c'est le défaut principal du diabète de type 2.",
            },
            {
              q: "Comment nomme-t-on la formation de glycogène à partir de glucose ?",
              options: ["Glycogénolyse", "Néoglucogenèse hépatique", "Glycolyse", "Glycogénogenèse"],
              answer: 3,
              why: "La glycogénogenèse, stimulée par l'insuline, stocke le glucose sous forme de glycogène.",
            },
          ],
          trap: "Confondre glycogène, glucagon et glycogénolyse : le glycogène est la molécule de réserve, le glucagon l'hormone hyperglycémiante, la glycogénolyse l'hydrolyse du glycogène en glucose.",
          method: "Face à un test d'hyperglycémie provoquée, lisez d'abord la glycémie à jeun (comparée à 1,26 g/L), puis la vitesse de retour à la normale, et enfin l'insulinémie : insuline absente oriente vers le type 1, insuline présente mais inefficace vers le type 2.",
        },
      ],
    },
    /* ==================================================================== */
    /* COMPORTEMENTS ET STRESS                                                */
    /* ==================================================================== */
    {
      id: 'comportements-et-stress',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'stress-aigu',
          title: 'Le stress aigu : une réponse adaptative',
          minutes: 35,
          objectives: [
            "Définir le stress aigu comme la réponse de l'organisme à un agent stresseur.",
            "Décrire les deux voies de la réponse : la voie nerveuse sympathique avec l'adrénaline, et l'axe hypothalamo-hypophyso-corticosurrénalien avec le cortisol.",
            "Expliquer le retour à l'état initial par le rétrocontrôle négatif du cortisol et la notion de résilience.",
            "Montrer que le stress aigu met en jeu le système nerveux, le système endocrinien et l'ensemble de l'organisme.",
          ],
          course: [
            {
              heading: "Agents stresseurs et stress aigu",
              paragraphs: [
                "Un agent stresseur est un facteur, physique (froid, blessure, effort), psychologique (examen, prise de parole) ou social (conflit), qui perturbe ou menace l'équilibre de l'organisme. Le stress désigne l'ensemble des réponses que l'organisme met en place face à cet agent. Lorsque la situation est brève, on parle de stress aigu : le cœur accélère, la respiration s'intensifie, la vigilance augmente, puis tout revient à la normale quand la situation est passée.",
                "Le physiologiste Hans Selye a décrit au XXᵉ siècle un syndrome général d'adaptation en trois phases : une phase d'alarme (mobilisation rapide), une phase de résistance (l'organisme maintient sa mobilisation) et, si l'agent stresseur persiste trop longtemps, une phase d'épuisement. Le stress aigu correspond surtout à la phase d'alarme : c'est une réponse adaptative, qui fournit rapidement de l'énergie aux muscles et au cerveau pour faire face au danger ou le fuir.",
              ],
              box: { label: "Définition", text: "Le stress aigu est l'ensemble des réponses physiologiques et comportementales, rapides et transitoires, déclenchées par un agent stresseur. Il est adaptatif : il prépare l'organisme à agir." },
            },
            {
              heading: "La perception de la situation par le cerveau",
              paragraphs: [
                "Les informations sensorielles (vue, audition...) parviennent au cerveau, où elles sont évaluées par le système limbique, un ensemble de structures impliquées dans les émotions et la mémoire. L'amygdale, en particulier, attribue rapidement une valeur de danger à la situation. Elle active alors l'hypothalamus, situé à la base du cerveau, qui déclenche les deux voies de la réponse.",
                "D'autres régions modulent cette évaluation : l'hippocampe, impliqué dans la mémoire, compare la situation aux expériences passées, et le cortex préfrontal permet une analyse plus réfléchie. C'est pourquoi une même situation (parler en public, par exemple) peut être très stressante pour une personne et peu stressante pour une autre.",
              ],
            },
            {
              heading: "La réponse rapide : système nerveux sympathique et adrénaline",
              paragraphs: [
                "En quelques secondes, l'hypothalamus active le système nerveux sympathique, qui commande de façon involontaire de nombreux organes. Des neurones sympathiques stimulent en particulier la partie centrale des glandes surrénales, la médullosurrénale, qui libère dans le sang de l'adrénaline (et de la noradrénaline).",
                "L'adrénaline agit sur de nombreuses cellules cibles : le cœur bat plus vite et plus fort, la pression artérielle augmente, les bronches se dilatent et la ventilation s'accélère, le sang est redirigé vers les muscles squelettiques, et le foie libère du glucose par glycogénolyse, ce qui élève la glycémie. Ensemble, ces effets apportent plus de dioxygène et de glucose aux muscles et au cerveau : l'organisme est prêt à l'action.",
              ],
              box: { label: "À retenir", text: "Voie rapide (secondes) : amygdale → hypothalamus → système nerveux sympathique → médullosurrénale → adrénaline → cœur, ventilation, glycémie, vigilance en hausse." },
            },
            {
              heading: "La réponse plus lente : l'axe du cortisol",
              paragraphs: [
                "En parallèle, l'hypothalamus sécrète une neurohormone, la CRH (corticolibérine), qui stimule l'hypophyse antérieure. Celle-ci sécrète l'ACTH (corticotrophine), transportée par le sang jusqu'à la partie périphérique des glandes surrénales, la corticosurrénale, qui libère du cortisol. C'est l'axe hypothalamo-hypophyso-corticosurrénalien (axe HHC, ou axe corticotrope). Plusieurs étapes hormonales se succèdent : le cortisol atteint son maximum quelques dizaines de minutes après le début du stress.",
                "Le cortisol est hyperglycémiant : il stimule la production de glucose par le foie à partir d'autres molécules (néoglucogenèse) et la mobilisation des réserves. Il entretient ainsi l'apport d'énergie après la réponse immédiate. À forte concentration, il diminue aussi les réactions inflammatoires et immunitaires.",
              ],
              box: { label: "À retenir", text: "Voie lente (minutes) : hypothalamus (CRH) → hypophyse antérieure (ACTH) → corticosurrénale (cortisol) → hyperglycémie, mobilisation des réserves, effet anti-inflammatoire." },
            },
            {
              heading: "Le retour à l'équilibre : rétrocontrôle et résilience",
              paragraphs: [
                "Le cortisol exerce un rétrocontrôle négatif : il se fixe sur des récepteurs de l'hypothalamus et de l'hypophyse, et de l'hippocampe qui freine l'hypothalamus, ce qui diminue la sécrétion de CRH et d'ACTH, donc sa propre sécrétion. Quand l'agent stresseur disparaît, ce rétrocontrôle ramène rapidement l'organisme à son état initial.",
                "La capacité d'un individu à faire face à un agent stresseur et à retrouver son équilibre s'appelle la résilience. Elle varie selon les personnes : elle dépend de facteurs génétiques, de l'histoire personnelle, de l'environnement et du soutien social. Le stress aigu est donc une réponse intégrée qui associe système nerveux, système endocrinien et de nombreux organes : c'est une vision globale de l'organisme.",
              ],
              box: { label: "Définition", text: "La résilience est la capacité de l'organisme à faire face à un agent stresseur et à revenir à un état d'équilibre. Le rétrocontrôle négatif exercé par le cortisol en est un mécanisme physiologique essentiel." },
            },
          ],
          keyPoints: [
            "Agent stresseur : facteur physique, psychologique ou social qui menace l'équilibre de l'organisme.",
            "Stress aigu : réponse rapide, transitoire et adaptative (phase d'alarme du syndrome général d'adaptation).",
            "L'amygdale (système limbique) évalue le danger et active l'hypothalamus.",
            "Voie rapide : système nerveux sympathique, médullosurrénale, adrénaline.",
            "Voie lente : CRH (hypothalamus), ACTH (hypophyse), cortisol (corticosurrénale), hyperglycémiant.",
            "Le cortisol exerce un rétrocontrôle négatif sur l'hypothalamus et l'hypophyse ; la résilience est la capacité à revenir à l'équilibre.",
          ],
          example: {
            statement: "Avant un oral, la fréquence cardiaque d'un élève passe de 70 à 98 battements par minute en moins d'une minute, et sa cortisolémie, mesurée dans la salive, augmente nettement 20 minutes plus tard. Calculez l'augmentation relative de la fréquence cardiaque et expliquez le décalage entre les deux réponses.",
            solution: [
              "Augmentation relative : (98 - 70) ÷ 70 = 28 ÷ 70 = 0,40, soit +40 %.",
              "L'accélération cardiaque, presque immédiate, est due à la voie rapide : l'hypothalamus active le système nerveux sympathique, qui stimule directement le cœur et provoque la libération d'adrénaline par la médullosurrénale.",
              "L'élévation du cortisol passe par une cascade hormonale : CRH (hypothalamus), puis ACTH (hypophyse), puis cortisol (corticosurrénale), chaque hormone devant être sécrétée et transportée par le sang.",
              "Conclusion : la fréquence cardiaque augmente de 40 % en quelques secondes grâce à la voie nerveuse et à l'adrénaline, tandis que la voie hormonale du cortisol, à plusieurs étapes, agit avec un délai de plusieurs minutes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des hormones suivantes, indiquez l'organe qui la sécrète et son organe cible ou son effet principal : CRH, ACTH, cortisol, adrénaline.",
              hint: "Suivez l'axe du haut vers le bas : hypothalamus, hypophyse, surrénale ; puis traitez l'adrénaline à part.",
              solution: [
                "CRH : sécrétée par l'hypothalamus ; cible : l'hypophyse antérieure, qu'elle stimule.",
                "ACTH : sécrétée par l'hypophyse antérieure ; cible : la corticosurrénale, qu'elle stimule.",
                "Cortisol : sécrété par la corticosurrénale ; effets : hyperglycémie (néoglucogenèse), mobilisation des réserves, effet anti-inflammatoire, rétrocontrôle négatif sur l'hypothalamus et l'hypophyse.",
                "Adrénaline : sécrétée par la médullosurrénale sous l'effet du système nerveux sympathique ; effets : accélération cardiaque, dilatation des bronches, libération de glucose par le foie.",
              ],
            },
            {
              level: 2,
              statement: "On mesure la cortisolémie d'une personne qui subit une situation stressante entre t = 0 et t = 10 min. Valeurs : 10 unités à t = 0 ; 18 à t = 15 min ; 25 à t = 30 min ; 17 à t = 60 min ; 11 à t = 90 min. Décrivez l'évolution, calculez l'augmentation maximale en pourcentage et expliquez le retour à la valeur initiale.",
              hint: "Augmentation relative = (valeur maximale - valeur initiale) ÷ valeur initiale. Pour le retour, pensez à l'effet du cortisol sur l'hypothalamus et l'hypophyse.",
              solution: [
                "Description : la cortisolémie augmente après le début du stress, atteint un maximum de 25 unités à t = 30 min, puis diminue pour revenir presque à la valeur initiale (11 unités) à t = 90 min.",
                "Augmentation maximale : (25 - 10) ÷ 10 = 1,5, soit +150 %.",
                "Le maximum est atteint après la fin de l'agent stresseur (t = 10 min) : la voie du cortisol est une cascade hormonale lente (CRH, ACTH, cortisol).",
                "Le retour à la normale s'explique par le rétrocontrôle négatif : le cortisol agit sur l'hypothalamus et l'hypophyse, réduit la sécrétion de CRH et d'ACTH, donc sa propre production, une fois l'agent stresseur disparu.",
                "Conclusion : il s'agit d'une réponse de stress aigu, transitoire et régulée.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. La dexaméthasone est une molécule de synthèse qui agit comme le cortisol sur ses récepteurs. Document 1 : chez une personne en bonne santé, une prise de dexaméthasone le soir entraîne le lendemain matin une forte diminution de la concentration sanguine d'ACTH et de cortisol. Document 2 : chez certains patients soumis à un stress prolongé, la même prise ne fait presque pas baisser la cortisolémie. Expliquez le résultat du document 1, puis proposez une hypothèse expliquant le document 2.",
              hint: "La dexaméthasone « imite » le cortisol : quel effet le cortisol a-t-il sur l'hypothalamus et l'hypophyse ?",
              solution: [
                "Le cortisol exerce un rétrocontrôle négatif : en se fixant sur ses récepteurs de l'hypothalamus et de l'hypophyse, il diminue la sécrétion de CRH et d'ACTH.",
                "Document 1 : la dexaméthasone, qui agit comme le cortisol, active ce rétrocontrôle. La sécrétion d'ACTH baisse, donc la corticosurrénale est moins stimulée et sécrète moins de cortisol. La baisse simultanée de l'ACTH et du cortisol montre que le rétrocontrôle fonctionne.",
                "Document 2 : la dexaméthasone ne fait presque pas baisser le cortisol, donc le rétrocontrôle négatif est inefficace chez ces patients.",
                "Hypothèse : chez ces patients, l'hypothalamus, l'hypophyse ou l'hippocampe possèdent moins de récepteurs fonctionnels au cortisol, ou ces récepteurs répondent moins bien, ce qui empêche le frein de s'exercer.",
                "Conclusion : un rétrocontrôle négatif efficace est nécessaire au retour à l'équilibre après un stress ; son altération maintient une cortisolémie élevée, comme dans le stress chronique.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la voie lente du stress aigu, de la perception du danger au retour à l'équilibre.",
            items: [
              "L'amygdale évalue la situation comme dangereuse.",
              "L'hypothalamus sécrète de la CRH.",
              "L'hypophyse antérieure sécrète de l'ACTH.",
              "La corticosurrénale libère du cortisol dans le sang.",
              "Le cortisol augmente la glycémie et mobilise les réserves.",
              "Le cortisol freine l'hypothalamus et l'hypophyse par rétrocontrôle négatif.",
            ],
          },
          quiz: [
            {
              q: "Quelle glande libère l'adrénaline lors d'un stress aigu ?",
              options: ["La médullosurrénale", "La corticosurrénale", "L'hypophyse", "Le pancréas"],
              answer: 0,
              why: "La médullosurrénale, partie centrale de la surrénale, est stimulée par le système nerveux sympathique.",
            },
            {
              q: "Quelle hormone l'hypophyse sécrète-t-elle dans l'axe du stress ?",
              options: ["La CRH", "Le cortisol", "L'ACTH", "L'insuline"],
              answer: 2,
              why: "L'ACTH, sécrétée par l'hypophyse antérieure sous l'effet de la CRH, stimule la corticosurrénale.",
            },
            {
              q: "Quelle structure du système limbique attribue une valeur de danger à une situation ?",
              options: ["Le cervelet", "L'amygdale", "Le bulbe rachidien", "L'aire motrice primaire"],
              answer: 1,
              why: "L'amygdale évalue la charge émotionnelle et active l'hypothalamus.",
            },
            {
              q: "Comment le cortisol limite-t-il sa propre sécrétion ?",
              options: ["En détruisant l'hypophyse", "En stimulant la CRH", "En bloquant l'adrénaline", "Par rétrocontrôle négatif sur l'hypothalamus et l'hypophyse"],
              answer: 3,
              why: "En se fixant sur leurs récepteurs, il réduit la sécrétion de CRH et d'ACTH.",
            },
            {
              q: "Pourquoi le stress aigu est-il qualifié d'adaptatif ?",
              options: ["Parce qu'il dure toute la vie", "Parce qu'il empêche toute émotion", "Parce qu'il fournit énergie et vigilance pour faire face", "Parce qu'il diminue la glycémie"],
              answer: 2,
              why: "Adrénaline et cortisol augmentent l'apport de glucose et de dioxygène aux muscles et au cerveau.",
            },
          ],
          trap: "Confondre les deux parties de la glande surrénale : la médullosurrénale (centrale) libère l'adrénaline sous commande nerveuse, la corticosurrénale (périphérique) libère le cortisol sous l'effet de l'ACTH.",
          method: "Apprenez le stress aigu sous la forme d'un schéma fonctionnel unique à deux colonnes (voie rapide nerveuse, voie lente hormonale) partant de l'amygdale et de l'hypothalamus, avec les effets en bas et la flèche de rétrocontrôle en rouge : refaites-le de mémoire jusqu'à ce qu'il soit exact.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'stress-chronique',
          title: 'Le stress chronique et sa prise en charge',
          minutes: 30,
          objectives: [
            "Expliquer que le stress chronique résulte d'une exposition prolongée à des agents stresseurs et d'un dérèglement du rétrocontrôle.",
            "Décrire les effets d'un excès durable de cortisol sur le cerveau, notamment l'hippocampe, et sur l'organisme.",
            "Expliquer le mode d'action des benzodiazépines sur les synapses à GABA et leurs limites.",
            "Argumenter sur l'intérêt des prises en charge non médicamenteuses.",
          ],
          course: [
            {
              heading: "Du stress aigu au stress chronique",
              paragraphs: [
                "Lorsque les agents stresseurs sont prolongés ou répétés (surcharge de travail, harcèlement, conflits, précarité, maladie), la réponse de stress ne s'arrête plus : on parle de stress chronique. Il correspond aux phases de résistance prolongée puis d'épuisement décrites par Hans Selye. La réponse, adaptative à court terme, devient alors néfaste pour la santé.",
                "Le stress chronique se caractérise par une concentration de cortisol élevée de façon durable. Or l'hippocampe possède de nombreux récepteurs au cortisol et participe au rétrocontrôle négatif de l'axe hypothalamo-hypophyso-corticosurrénalien. Exposés longtemps à un excès de cortisol, ses neurones perdent des connexions et l'hippocampe peut diminuer de volume.",
                "Un hippocampe altéré exerce moins bien son rôle de frein : le rétrocontrôle devient moins efficace, le cortisol reste élevé et abîme davantage l'hippocampe. Il s'installe un cercle vicieux qui entretient le stress, même lorsque l'agent stresseur diminue.",
              ],
              box: { label: "À retenir", text: "Stress chronique : agent stresseur prolongé → cortisol durablement élevé → altération de l'hippocampe → rétrocontrôle négatif moins efficace → cortisol encore plus élevé (cercle vicieux)." },
            },
            {
              heading: "Les effets délétères du stress chronique",
              paragraphs: [
                "Sur le cerveau, le stress chronique perturbe la mémoire et l'apprentissage (liés à l'hippocampe), augmente l'activité de l'amygdale, ce qui renforce l'anxiété, et altère le fonctionnement du cortex préfrontal, ce qui rend plus difficile la prise de décision. Il est associé à des troubles du sommeil, de l'humeur, à l'anxiété et à la dépression.",
                "Sur le reste de l'organisme, l'excès durable de cortisol diminue l'efficacité du système immunitaire (infections plus fréquentes, cicatrisation plus lente), favorise l'hypertension artérielle et les maladies cardiovasculaires, et perturbe le métabolisme (glycémie élevée, accumulation de graisse abdominale), ce qui augmente le risque de diabète de type 2. Le stress chronique montre ainsi que systèmes nerveux, endocrinien et immunitaire fonctionnent en interaction.",
              ],
            },
            {
              heading: "La prise en charge médicamenteuse : les benzodiazépines",
              paragraphs: [
                "Le GABA (acide gamma-aminobutyrique) est le principal neurotransmetteur inhibiteur du cerveau. En se fixant sur son récepteur, il ouvre un canal qui laisse entrer des ions chlorure (Cl⁻) dans le neurone postsynaptique : la membrane s'hyperpolarise et le neurone devient moins excitable.",
                "Les benzodiazépines sont des médicaments anxiolytiques. Elles se fixent sur le récepteur du GABA, sur un site différent de celui du GABA, et renforcent son effet : en présence de GABA, le canal s'ouvre plus souvent, l'inhibition est plus forte. L'activité de neurones impliqués dans l'anxiété, notamment dans l'amygdale, diminue. Elles n'agissent pas seules : sans GABA, elles n'ouvrent pas le canal.",
                "Leur usage est limité dans le temps car elles présentent des effets indésirables : somnolence, troubles de la mémoire et de l'attention, risque de chute, et surtout tolérance et dépendance, avec des symptômes de sevrage à l'arrêt. Elles soulagent les symptômes mais ne suppriment pas les causes du stress.",
              ],
              box: { label: "Propriété", text: "Les benzodiazépines se fixent sur le récepteur du GABA et renforcent l'effet inhibiteur du GABA (entrée de Cl⁻, hyperpolarisation). Efficaces contre l'anxiété, elles exposent à la tolérance et à la dépendance : leur prescription est courte." },
            },
            {
              heading: "Les approches non médicamenteuses",
              paragraphs: [
                "D'autres prises en charge agissent sur les causes et sur la plasticité du cerveau : identifier et réduire les agents stresseurs, pratiquer une activité physique régulière, préserver un sommeil suffisant, entretenir des relations sociales de soutien. Des techniques comme la relaxation, la cohérence cardiaque ou la méditation de pleine conscience aident à diminuer la réponse de stress.",
                "Les psychothérapies, en particulier les thérapies cognitives et comportementales, aident à modifier l'évaluation des situations et les réactions face aux agents stresseurs. Plusieurs études ont associé ces pratiques à une baisse de la cortisolémie et à des modifications de l'activité de structures comme l'amygdale ou l'hippocampe, ce qui illustre la plasticité cérébrale.",
              ],
              box: { label: "À retenir", text: "Prise en charge du stress chronique : agir sur les causes, activité physique, sommeil, soutien social, relaxation, méditation, psychothérapies. Les médicaments sont un appoint temporaire." },
            },
          ],
          keyPoints: [
            "Stress chronique : exposition prolongée ou répétée à des agents stresseurs, cortisol durablement élevé.",
            "L'excès de cortisol altère l'hippocampe, ce qui affaiblit le rétrocontrôle négatif : cercle vicieux.",
            "Effets : troubles de la mémoire, anxiété, dépression, sommeil perturbé, immunité affaiblie, risques cardiovasculaires et métaboliques.",
            "Le GABA est le principal neurotransmetteur inhibiteur ; il fait entrer des ions Cl⁻ et hyperpolarise le neurone.",
            "Les benzodiazépines renforcent l'effet du GABA ; elles exposent à la tolérance et à la dépendance.",
            "Activité physique, sommeil, soutien social, méditation et psychothérapies agissent sur les causes et la plasticité cérébrale.",
          ],
          example: {
            statement: "Une étude compare la cortisolémie matinale de deux groupes d'adultes : un groupe soumis depuis plusieurs mois à une forte surcharge de travail (moyenne 24 unités) et un groupe témoin (moyenne 15 unités). Calculez l'écart relatif et expliquez pourquoi cette élévation peut se maintenir dans le temps.",
            solution: [
              "Écart relatif : (24 - 15) ÷ 15 = 9 ÷ 15 = 0,60, soit une cortisolémie supérieure de 60 % dans le groupe exposé.",
              "L'agent stresseur, prolongé, stimule en permanence l'axe hypothalamo-hypophyso-corticosurrénalien : le cortisol reste élevé.",
              "Or l'hippocampe, riche en récepteurs au cortisol, est altéré par cet excès durable ; il participe normalement au rétrocontrôle négatif.",
              "Conclusion : le rétrocontrôle devenant moins efficace, la sécrétion de cortisol est moins freinée : l'élévation de 60 % s'auto-entretient, ce qui caractérise le stress chronique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les situations suivantes en stress aigu ou stress chronique, en justifiant : a) un sprint pour attraper un bus ; b) un harcèlement subi pendant plusieurs mois ; c) une prise de parole de cinq minutes devant la classe ; d) une surcharge de travail permanente depuis un an.",
              hint: "Le critère est la durée ou la répétition de l'agent stresseur, et la possibilité d'un retour rapide à l'équilibre.",
              solution: [
                "a) Stress aigu : agent stresseur bref, retour rapide à l'équilibre.",
                "b) Stress chronique : agent stresseur prolongé et répété.",
                "c) Stress aigu : situation courte, la réponse s'arrête après la prise de parole.",
                "d) Stress chronique : agent stresseur permanent, sans possibilité de récupération.",
              ],
            },
            {
              level: 2,
              statement: "On enregistre un neurone de l'amygdale. Le potentiel de repos est de -70 mV. L'application de GABA seul provoque une hyperpolarisation de 4 mV. L'application d'une benzodiazépine seule ne modifie pas le potentiel. L'application simultanée de GABA et de benzodiazépine provoque une hyperpolarisation de 10 mV. Donnez la valeur du potentiel dans chaque cas et interprétez.",
              hint: "Une hyperpolarisation rend le potentiel plus négatif : soustrayez la valeur au potentiel de repos.",
              solution: [
                "GABA seul : -70 - 4 = -74 mV : le GABA, en ouvrant les canaux à Cl⁻, hyperpolarise le neurone (effet inhibiteur).",
                "Benzodiazépine seule : -70 mV : elle n'a aucun effet en l'absence de GABA, elle n'ouvre pas le canal par elle-même.",
                "GABA et benzodiazépine : -70 - 10 = -80 mV : l'hyperpolarisation est 10 ÷ 4 = 2,5 fois plus importante qu'avec le GABA seul.",
                "Interprétation : la benzodiazépine renforce l'effet du GABA en se fixant sur son récepteur ; le neurone de l'amygdale, plus éloigné de son seuil, devient moins excitable, ce qui réduit l'anxiété.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Document 1 : chez des rats soumis chaque jour, pendant trois semaines, à un agent stresseur, les neurones de l'hippocampe présentent moins de ramifications (dendrites) que chez des rats témoins, et la cortisolémie reste élevée même les jours sans stresseur. Document 2 : chez ces rats stressés, l'accès à une roue d'exercice pendant la même période limite la perte de ramifications et la cortisolémie est plus proche de celle des témoins. Document 3 : chez l'humain, les benzodiazépines prises plusieurs mois entraînent une tolérance et une dépendance. À partir de ces documents et de vos connaissances, expliquez les conséquences du stress chronique sur le cerveau et argumentez sur les modes de prise en charge.",
              hint: "Reliez la perte de ramifications de l'hippocampe à son rôle dans le rétrocontrôle, puis comparez une approche qui agit sur les symptômes et une approche qui agit sur la plasticité.",
              solution: [
                "Document 1 : le stress répété réduit les ramifications des neurones de l'hippocampe. Or l'hippocampe participe au rétrocontrôle négatif de l'axe du cortisol : altéré, il freine moins l'hypothalamus, ce qui explique que la cortisolémie reste élevée même sans stresseur. Le cercle vicieux du stress chronique s'est installé.",
                "Document 2 : l'activité physique limite la perte de ramifications et ramène la cortisolémie vers la normale : elle préserve la plasticité de l'hippocampe et donc l'efficacité du rétrocontrôle.",
                "Document 3 : les benzodiazépines, qui renforcent l'effet inhibiteur du GABA, réduisent l'anxiété, mais leur usage prolongé provoque tolérance et dépendance ; elles ne traitent pas la cause et doivent rester de courte durée.",
                "Argumentation : une prise en charge efficace associe la réduction des agents stresseurs et des pratiques non médicamenteuses (activité physique, sommeil, relaxation, psychothérapie), qui agissent sur la plasticité cérébrale, à un traitement médicamenteux éventuel, limité dans le temps.",
                "Conclusion : le stress chronique altère l'hippocampe et dérègle le rétrocontrôle ; l'activité physique et les approches non médicamenteuses peuvent limiter ces effets, les médicaments n'étant qu'un appoint temporaire.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : stress chronique et prise en charge.",
            statements: [
              { text: "Dans le stress chronique, la cortisolémie reste élevée de façon durable.", true: true, why: "L'agent stresseur prolongé et l'affaiblissement du rétrocontrôle maintiennent le cortisol élevé." },
              { text: "Un excès de cortisol renforce l'hippocampe et améliore la mémoire.", true: false, why: "Il altère les neurones de l'hippocampe et perturbe la mémoire." },
              { text: "Le GABA est le principal neurotransmetteur inhibiteur du cerveau.", true: true, why: "Il fait entrer des ions Cl⁻ et hyperpolarise le neurone postsynaptique." },
              { text: "Une benzodiazépine ouvre le canal du récepteur au GABA même en l'absence de GABA.", true: false, why: "Elle renforce seulement l'effet du GABA ; seule, elle n'ouvre pas le canal." },
              { text: "Les benzodiazépines peuvent être prises sans risque pendant des années.", true: false, why: "Elles exposent à la tolérance et à la dépendance : leur prescription est limitée dans le temps." },
              { text: "L'activité physique régulière fait partie de la prise en charge du stress chronique.", true: true, why: "Elle diminue la réponse de stress et favorise la plasticité de structures comme l'hippocampe." },
              { text: "Le stress chronique peut affaiblir le système immunitaire.", true: true, why: "Un excès durable de cortisol diminue les réactions immunitaires." },
            ],
          },
          quiz: [
            {
              q: "Quelle structure, riche en récepteurs au cortisol, participe au rétrocontrôle et est altérée par le stress chronique ?",
              options: ["Le cervelet", "La moelle épinière", "Le cortex moteur", "L'hippocampe"],
              answer: 3,
              why: "L'hippocampe freine normalement l'axe du cortisol ; l'excès durable de cortisol l'altère.",
            },
            {
              q: "Quel est l'effet du GABA sur le neurone postsynaptique ?",
              options: ["Une dépolarisation qui déclenche un potentiel d'action", "Une hyperpolarisation qui l'inhibe", "La libération d'adrénaline", "La destruction de ses récepteurs"],
              answer: 1,
              why: "Le GABA ouvre des canaux à Cl⁻ : l'entrée de ces ions hyperpolarise la membrane.",
            },
            {
              q: "Comment agissent les benzodiazépines ?",
              options: ["Elles renforcent l'effet du GABA sur son récepteur", "Elles bloquent la libération du cortisol par la corticosurrénale", "Elles remplacent l'acétylcholine", "Elles détruisent les neurones de l'amygdale"],
              answer: 0,
              why: "Fixées sur le récepteur du GABA, elles augmentent l'ouverture du canal en présence de GABA.",
            },
            {
              q: "Pourquoi le stress chronique peut-il s'auto-entretenir ?",
              options: ["Parce que l'adrénaline est stockée dans le cerveau", "Parce que la CRH disparaît", "Parce que le rétrocontrôle négatif du cortisol devient moins efficace", "Parce que l'amygdale cesse de fonctionner"],
              answer: 2,
              why: "L'hippocampe altéré freine moins l'axe du cortisol, qui reste élevé : c'est un cercle vicieux.",
            },
            {
              q: "Quel est un inconvénient majeur des benzodiazépines prises longtemps ?",
              options: ["Une hyperactivité de l'amygdale", "La tolérance et la dépendance", "Une hausse de la glycémie", "La paralysie des muscles"],
              answer: 1,
              why: "L'organisme s'habitue au médicament (tolérance) et son arrêt provoque un sevrage (dépendance).",
            },
          ],
          trap: "Présenter le stress comme toujours néfaste : le stress aigu est une réponse adaptative ; c'est sa prolongation, avec un cortisol durablement élevé et un rétrocontrôle déréglé, qui devient délétère.",
          method: "Pour une question sur le stress chronique, construisez votre réponse en trois temps : le mécanisme (cortisol élevé, hippocampe altéré, cercle vicieux), les conséquences (cerveau et organisme), puis la prise en charge en distinguant ce qui agit sur les symptômes et ce qui agit sur les causes.",
        },
      ],
    },
    /* ==================================================================== */
    /* PRÉPARER L'ÉPREUVE DU BAC                                              */
    /* ==================================================================== */
    {
      id: 'bac-svt',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'question-de-synthese',
          title: 'L\'exercice de synthèse : mobiliser ses connaissances',
          minutes: 30,
          objectives: [
            "Analyser le sujet de l'exercice 1 : repérer les mots-clés, la consigne et le problème posé.",
            "Sélectionner les connaissances utiles et construire un plan logique.",
            "Rédiger un texte argumenté avec introduction, développement structuré et conclusion, accompagné d'un schéma.",
          ],
          course: [
            {
              heading: "L'épreuve écrite et l'exercice 1",
              paragraphs: [
                "L'épreuve écrite de spécialité SVT dure 3 h 30 et compte pour 15 points ; les 5 points restants viennent de l'évaluation des compétences expérimentales (ECE). L'écrit comporte deux exercices. L'exercice 1, sur 7 points, évalue votre capacité à mobiliser vos connaissances pour répondre à une question scientifique, sous la forme d'un texte argumenté. Il peut s'appuyer sur un court document de contexte, mais la réponse repose d'abord sur ce que vous savez.",
                "Le correcteur attend une réponse exacte, complète sur les notions demandées, organisée et rédigée en phrases, illustrée lorsque c'est utile par un schéma. Ce n'est pas une récitation du cours : seules les connaissances qui répondent à la question rapportent des points, et un développement hors sujet n'en rapporte aucun.",
              ],
              box: { label: "Repère", text: "Épreuve écrite : 3 h 30, 15 points (exercice 1 sur 7 points, exercice 2 sur 8 points). ECE : 5 points. L'exercice 1 attend un texte argumenté et structuré qui mobilise les connaissances." },
            },
            {
              heading: "Analyser le sujet",
              paragraphs: [
                "Lisez le sujet plusieurs fois. Soulignez le verbe de consigne (« expliquer » demande des mécanismes et des relations de cause à effet ; « présenter » ou « décrire » demande d'exposer de façon organisée ; « montrer que » demande d'apporter des arguments pour établir une idée). Entourez les mots-clés et délimitez le sujet : quel organe, quel processus, quelle échelle (organisme, organe, cellule, molécule) ?",
                "Reformulez ensuite le sujet sous la forme d'une question, le problème. Par exemple, pour le sujet « Expliquer comment la cellule musculaire produit le mouvement à partir de l'énergie chimique », le problème devient : comment l'énergie du glucose est-elle convertie en ATP, puis l'ATP utilisé pour faire raccourcir les sarcomères ? Notez au brouillon toutes les notions qui vous viennent, puis rayez celles qui ne répondent pas au problème.",
              ],
            },
            {
              heading: "Construire le plan",
              paragraphs: [
                "Organisez les notions retenues en deux ou trois parties qui suivent une logique claire : chronologique (étapes successives d'un processus), d'échelle (de l'organe à la molécule), ou de cause à conséquence. Chaque partie répond à une sous-question du problème et contient une idée directrice, des arguments (notions précises, exemples, observations ou expériences connues) et une phrase de conclusion partielle.",
                "Prévoyez le schéma dès le brouillon. Un schéma bilan fonctionnel (titre, légendes, flèches dont le sens est expliqué, code couleur) peut synthétiser toute la réponse. Il ne remplace pas le texte mais le complète, et il doit être cité dans la rédaction.",
              ],
              box: { label: "Règle", text: "Un bon plan : 2 ou 3 parties, une idée directrice par partie, des arguments précis (notions, exemples), une conclusion partielle, et un schéma annoncé dans le texte." },
            },
            {
              heading: "Rédiger : introduction, développement, conclusion",
              paragraphs: [
                "L'introduction, en quelques lignes, présente le contexte, définit les termes importants du sujet, pose le problème sous forme de question et annonce le plan. Le développement suit le plan, avec des titres ou des paragraphes nettement séparés et des connecteurs logiques (or, donc, ainsi, en effet, c'est pourquoi). Utilisez le vocabulaire scientifique exact et des valeurs quand vous les connaissez.",
                "La conclusion répond clairement au problème posé en introduction, en résumant les idées essentielles ; elle peut ouvrir brièvement sur une question liée. Gardez une dizaine de minutes pour relire : vérifiez le vocabulaire (par exemple, ne pas confondre potentiel d'action et potentiel postsynaptique), les légendes du schéma et l'orthographe des termes scientifiques.",
              ],
              box: { label: "À retenir", text: "Introduction (définir, problème, annonce du plan) → développement structuré (idées, arguments, connecteurs, schéma) → conclusion (réponse au problème)." },
            },
          ],
          keyPoints: [
            "L'exercice 1 (7 points) évalue la mobilisation des connaissances dans un texte argumenté.",
            "Analyser le sujet : verbe de consigne, mots-clés, limites, puis formuler le problème.",
            "Trier au brouillon : ne garder que les notions qui répondent au problème.",
            "Plan en 2 ou 3 parties logiques, chacune avec idée directrice, arguments et conclusion partielle.",
            "Introduction avec définitions et problème, conclusion qui y répond, schéma bilan cité dans le texte.",
          ],
          example: {
            statement: "Sujet : « Expliquer comment un étirement du muscle provoque sa contraction réflexe. » Proposez une introduction et un plan détaillé.",
            solution: [
              "Analyse : le verbe « expliquer » attend des mécanismes ; le sujet porte sur le réflexe myotatique, de l'étirement à la contraction. Hors sujet : le mouvement volontaire, l'origine de l'ATP en détail.",
              "Introduction : le maintien de la posture repose sur des réflexes. Le réflexe myotatique est la contraction d'un muscle en réponse à son propre étirement. Problème : comment l'information d'étirement est-elle transmise et transformée en contraction ? Nous verrons le circuit nerveux mis en jeu, puis la nature du message nerveux et sa transmission.",
              "Partie 1 : l'arc réflexe. Fuseau neuromusculaire (récepteur), neurone sensoriel (racine dorsale), moelle épinière et synapse unique avec le motoneurone (réflexe monosynaptique), motoneurone (racine ventrale), muscle étiré (effecteur) ; relâchement de l'antagoniste par un interneurone inhibiteur.",
              "Partie 2 : le message nerveux. Potentiels d'action d'amplitude constante, codage en fréquence le long des fibres ; synapse chimique, codage en concentration de neurotransmetteur ; jonction neuromusculaire et acétylcholine, déclenchement de la contraction.",
              "Schéma bilan : coupe de moelle épinière, muscle et fuseau, trajet du message fléché, légendes. Conclusion : un circuit monosynaptique et un double codage électrique et chimique assurent une réponse rapide et involontaire, essentielle à la posture.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun des sujets suivants, soulignez le verbe de consigne et indiquez ce qu'il attend : a) « Présenter les étapes de la respiration cellulaire. » b) « Expliquer comment l'organisme répond à un stress aigu. » c) « Montrer que le motoneurone est un intégrateur. »",
              hint: "Distinguez exposer (présenter), donner des mécanismes et des causes (expliquer), apporter des arguments pour prouver (montrer que).",
              solution: [
                "a) « Présenter » : exposer de façon organisée les étapes (glycolyse, cycle de Krebs, chaîne respiratoire), avec leur localisation et leurs produits.",
                "b) « Expliquer » : décrire les mécanismes et les liens de cause à effet (perception par l'amygdale, voies nerveuse et hormonale, effets, rétrocontrôle).",
                "c) « Montrer que » : apporter des arguments (réception de PPSE et PPSI, sommation spatiale et temporelle, seuil au segment initial de l'axone) qui établissent la propriété annoncée.",
              ],
            },
            {
              level: 2,
              statement: "Sujet : « Expliquer comment la glycémie est maintenue autour de 1 g/L. » Un élève a noté au brouillon : insuline, glucagon, cellules α et β, glycogène hépatique, diabète de type 1, diabète de type 2, fermentation lactique, foie, muscles, rétrocontrôle négatif, sarcomère. Triez ces notions (à garder ou à écarter) et proposez un plan en deux parties.",
              hint: "Le sujet porte sur le fonctionnement normal de la régulation : les maladies et le muscle en contraction sont-ils au cœur de la question ?",
              solution: [
                "À garder : insuline, glucagon, cellules α et β, glycogène hépatique, foie, muscles (stockage du glycogène, prélèvement du glucose), rétrocontrôle négatif.",
                "À écarter : fermentation lactique et sarcomère (hors sujet) ; les diabètes ne sont pas demandés, ils peuvent au plus faire l'objet d'une ouverture en conclusion.",
                "Partie 1 : quand la glycémie augmente (après un repas), les cellules β sécrètent l'insuline, hypoglycémiante : entrée du glucose dans les cellules, glycogénogenèse dans le foie et les muscles, lipogenèse.",
                "Partie 2 : quand la glycémie diminue (jeûne, effort), les cellules α sécrètent le glucagon, hyperglycémiant : glycogénolyse et néoglucogenèse dans le foie, libération de glucose dans le sang.",
                "Fil conducteur et conclusion : les îlots de Langerhans sont à la fois capteurs et effecteurs d'une boucle de rétroaction négative qui maintient la glycémie autour de 1 g/L.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Sujet : « Expliquer comment un mouvement volontaire est commandé, de son origine dans le cerveau jusqu'à la contraction du muscle. » Rédigez l'introduction complète, le plan détaillé (idées et arguments de chaque partie) et décrivez le schéma bilan que vous réaliseriez.",
              hint: "Suivez le trajet du message dans l'ordre : cortex, voie descendante, motoneurone, jonction neuromusculaire, fibre musculaire.",
              solution: [
                "Introduction : un mouvement volontaire, comme saisir un objet, résulte d'une décision. Il est commandé par le système nerveux et réalisé par les muscles squelettiques. Problème : comment le message nerveux né dans le cerveau parvient-il au muscle et provoque-t-il sa contraction ? Nous verrons l'origine corticale de la commande, son trajet et son intégration, puis la transmission au muscle et la contraction.",
                "Partie 1 : l'origine corticale. Aire motrice primaire en avant du sillon central ; somatotopie (homonculus moteur, surface liée à la précision) ; commande croisée par décussation au niveau du bulbe ; plasticité des cartes motrices.",
                "Partie 2 : le trajet et l'intégration. Axones des neurones corticaux dans la moelle épinière ; synapses avec les motoneurones ; PPSE et PPSI, sommation spatiale et temporelle ; potentiels d'action codés en fréquence si le seuil est atteint ; motoneurone voie finale commune.",
                "Partie 3 : la contraction. Jonction neuromusculaire, libération d'acétylcholine, potentiel d'action musculaire, libération de Ca²⁺ par le réticulum sarcoplasmique, cycles actine-myosine consommant de l'ATP, glissement des filaments et raccourcissement des sarcomères.",
                "Schéma bilan : coupe du cerveau avec l'aire motrice, voie descendante croisant au niveau du bulbe, coupe de moelle avec le motoneurone recevant synapses excitatrices et inhibitrices, muscle avec un sarcomère agrandi ; flèches du message, code couleur (nerveux, chimique), titre et légendes.",
                "Conclusion : le mouvement volontaire résulte d'une commande corticale somatotopique, intégrée par le motoneurone, puis convertie en contraction grâce à la jonction neuromusculaire, au calcium et à l'ATP.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la démarche pour traiter l'exercice 1.",
            items: [
              "Lire le sujet et souligner le verbe de consigne et les mots-clés.",
              "Formuler le problème sous forme de question.",
              "Noter au brouillon les connaissances, puis écarter celles qui sont hors sujet.",
              "Construire un plan en deux ou trois parties logiques.",
              "Rédiger l'introduction, le développement et le schéma bilan.",
              "Rédiger une conclusion qui répond au problème.",
              "Relire le vocabulaire, les légendes et l'orthographe.",
            ],
          },
          quiz: [
            {
              q: "Sur combien de points l'exercice 1 de l'épreuve écrite de spécialité SVT est-il noté ?",
              options: ["5 points", "8 points", "7 points", "15 points"],
              answer: 2,
              why: "L'écrit est noté sur 15 points : 7 pour l'exercice 1, 8 pour l'exercice 2.",
            },
            {
              q: "Que doit contenir l'introduction ?",
              options: ["La réponse détaillée au sujet", "Un résumé de l'ensemble du chapitre, avec tous les exemples du cours", "Le schéma bilan", "Le contexte, les définitions, le problème et l'annonce du plan"],
              answer: 3,
              why: "L'introduction pose le cadre et le problème ; la réponse est construite dans le développement.",
            },
            {
              q: "Que demande le verbe « expliquer » ?",
              options: ["Des mécanismes et des relations de cause à effet", "Une simple liste de mots-clés", "Un dessin d'observation", "Une opinion personnelle"],
              answer: 0,
              why: "Expliquer, c'est montrer comment et pourquoi, en reliant causes et conséquences.",
            },
            {
              q: "Que faire d'une notion juste mais qui ne répond pas au problème posé ?",
              options: ["La développer longuement pour montrer ses connaissances", "L'écarter, ou au plus l'évoquer en ouverture", "La placer dans l'introduction", "La mettre dans le schéma uniquement"],
              answer: 1,
              why: "Les connaissances hors sujet ne rapportent pas de points et nuisent à la clarté.",
            },
            {
              q: "Quel est le rôle du schéma bilan ?",
              options: ["Compléter et synthétiser le texte", "Remplacer entièrement la rédaction", "Décorer la copie", "Remplacer l'introduction"],
              answer: 0,
              why: "Le schéma synthétise la réponse ; il est cité dans le texte mais ne le remplace pas.",
            },
          ],
          trap: "Réciter tout le chapitre sans répondre au problème : une copie longue mais non organisée, qui mêle notions utiles et hors sujet, est moins bien notée qu'une réponse courte, exacte et structurée.",
          method: "Au brouillon, écrivez le problème en haut de la page et, pour chaque notion envisagée, demandez-vous : « Est-ce que cela aide à répondre à cette question ? » Ne gardez que les réponses positives, puis classez-les en parties.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'raisonnement-documents',
          title: 'L\'exercice sur documents : construire un raisonnement',
          minutes: 35,
          objectives: [
            "Identifier le problème scientifique posé et les informations utiles de chaque document.",
            "Exploiter un document : extraire des données chiffrées, comparer à un témoin, interpréter avec ses connaissances.",
            "Mettre en relation les documents pour construire un raisonnement qui répond au problème.",
            "Rédiger une réponse argumentée selon la démarche « je constate, or je sais, donc je déduis ».",
          ],
          course: [
            {
              heading: "Ce qu'évalue l'exercice 2",
              paragraphs: [
                "L'exercice 2, sur 8 points, évalue votre capacité à pratiquer un raisonnement scientifique pour résoudre un problème, à partir d'un ensemble de documents (expériences, graphiques, tableaux, images, schémas). Le problème est posé dans l'énoncé ; vous devez y répondre en exploitant les documents et en les reliant à vos connaissances. Le sujet peut proposer des questions intermédiaires ou une consigne unique.",
                "Ce qui est noté, c'est la démarche : la pertinence des informations extraites, la justesse des interprétations, la mise en relation des documents et la cohérence de la réponse finale. Une paraphrase des documents (« le document 1 montre une courbe qui monte ») sans interprétation rapporte peu de points.",
              ],
              box: { label: "Repère", text: "Exercice 2 (8 points) : résoudre un problème scientifique à partir de documents et de connaissances. On évalue la démarche autant que la réponse finale." },
            },
            {
              heading: "Exploiter chaque document",
              paragraphs: [
                "Commencez par identifier ce que montre le document : titre, axes et unités d'un graphique, conditions expérimentales, présence d'un témoin. Puis extrayez seulement l'information utile au problème, avec des valeurs chiffrées : « la concentration passe de 10 à 25 unités en 30 min », plutôt que « elle augmente ».",
                "Comparez toujours l'expérience au témoin : c'est l'écart entre les deux qui permet de conclure sur le facteur testé. Formulez ensuite l'interprétation en mobilisant vos connaissances. La démarche « je constate que (information), or je sais que (connaissance), donc j'en déduis que (interprétation) » garantit qu'aucune étape n'est oubliée.",
              ],
              box: { label: "Méthode", text: "Je constate que (données chiffrées, comparaison au témoin)... Or je sais que (connaissance du cours)... Donc j'en déduis que (interprétation qui répond à une partie du problème)." },
            },
            {
              heading: "Mettre en relation et conclure",
              paragraphs: [
                "Les documents se complètent : l'un montre souvent un phénomène, un autre son mécanisme, un troisième sa cause. Mettre en relation, c'est utiliser l'information de l'un pour éclairer l'autre (« le document 2 explique le résultat du document 1, car... »). L'ordre de traitement n'est pas forcément celui de la numérotation : suivez la logique du raisonnement.",
                "Terminez par une synthèse qui répond explicitement au problème posé, en reprenant les principaux arguments issus des documents. Un court schéma bilan peut être demandé ou valorisé. Méfiez-vous des conclusions trop larges : un document obtenu chez le rat, ou sur quelques individus, ne permet pas de tout généraliser à l'humain.",
              ],
            },
            {
              heading: "Lire les verbes de consigne",
              paragraphs: [
                "Chaque verbe de consigne attend un travail précis. Décrire : dire ce que montre le document, avec des valeurs, sans expliquer. Comparer : dégager ressemblances et différences, de façon chiffrée. Interpréter ou expliquer : donner une cause, un mécanisme, grâce aux connaissances. Déduire : tirer une conséquence logique d'une observation. Montrer que : apporter les arguments qui établissent l'idée donnée. Mettre en relation : relier les informations de plusieurs documents.",
                "Dans les questions à choix multiple éventuelles, lisez toutes les propositions avant de répondre et vérifiez chacune par rapport au document : une proposition peut être juste en général mais non démontrée par le document.",
              ],
            },
          ],
          keyPoints: [
            "L'exercice 2 (8 points) évalue un raisonnement scientifique à partir de documents et de connaissances.",
            "Extraire seulement l'information utile, avec des valeurs chiffrées et la comparaison au témoin.",
            "Démarche : je constate que... or je sais que... donc j'en déduis que...",
            "Mettre en relation les documents, dans l'ordre logique du raisonnement.",
            "Finir par une synthèse qui répond explicitement au problème, sans généraliser abusivement.",
          ],
          example: {
            statement: "Problème : l'activité physique régulière aide-t-elle à contrôler la glycémie ? Document A : chez des personnes atteintes de diabète de type 2, la glycémie à jeun moyenne passe de 1,50 g/L à 1,32 g/L après 12 semaines d'activité physique régulière ; dans un groupe témoin sans activité, elle reste à 1,49 g/L. Document B : après l'entraînement, la quantité de transporteurs de glucose dans la membrane des cellules musculaires est plus élevée. Exploitez les documents.",
            solution: [
              "Je constate (document A) que la glycémie à jeun du groupe actif baisse de 1,50 à 1,32 g/L, soit 0,18 g/L de moins (environ -12 %), alors que celle du témoin reste stable (1,49 g/L) : la baisse est donc due à l'activité physique.",
              "Je constate (document B) que l'entraînement augmente le nombre de transporteurs de glucose dans la membrane des cellules musculaires.",
              "Or je sais que le diabète de type 2 est caractérisé par une insulinorésistance : les cellules cibles prélèvent mal le glucose sanguin.",
              "Donc j'en déduis que l'activité physique, en augmentant la quantité de transporteurs, permet aux muscles de prélever davantage de glucose dans le sang, ce qui fait baisser la glycémie (le document B explique le document A).",
              "Conclusion : l'activité physique régulière aide à contrôler la glycémie ; chez ces patients, la glycémie reste toutefois supérieure à 1,26 g/L, l'activité physique est donc un élément du traitement et non un remède complet.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Transformez ces phrases d'élèves en extractions d'information correctes : a) « Le graphique montre que ça monte. » b) « Avec le médicament, c'est mieux. » Données : la fréquence des potentiels d'action passe de 20 Hz à 80 Hz quand l'étirement passe de 2 à 8 mm ; avec le médicament, la glycémie à jeun moyenne est de 1,05 g/L contre 1,40 g/L chez les témoins sans médicament.",
              hint: "Nommez la grandeur, donnez les valeurs avec leurs unités et faites la comparaison explicite.",
              solution: [
                "a) La fréquence des potentiels d'action augmente de 20 Hz à 80 Hz (elle est multipliée par 4) lorsque l'étirement passe de 2 à 8 mm.",
                "b) Avec le médicament, la glycémie à jeun moyenne est de 1,05 g/L, contre 1,40 g/L chez les témoins sans médicament, soit 0,35 g/L de moins (exactement 25 % de moins).",
              ],
            },
            {
              level: 2,
              statement: "Problème : le calcium est-il nécessaire à la contraction ? Document : des fibres musculaires perméabilisées, toutes placées en présence d'ATP, sont plongées dans des solutions de concentrations croissantes en Ca²⁺. Force mesurée : 0 % de la force maximale à 0,1 µmol/L ; 10 % à 1 µmol/L ; 60 % à 3 µmol/L ; 100 % à 10 µmol/L ; 100 % à 30 µmol/L. Exploitez ce document en utilisant la démarche « je constate, or je sais, donc ».",
              hint: "Repérez la valeur sans effet, la zone où la force augmente et le plateau ; puis rappelez le rôle du calcium.",
              solution: [
                "Je constate qu'en présence d'ATP, la force est nulle à 0,1 µmol/L de Ca²⁺, augmente de 10 % à 100 % entre 1 et 10 µmol/L, puis reste maximale (plateau à 100 %) au-delà de 10 µmol/L.",
                "L'ATP étant présent dans tous les cas, la différence de force est due au calcium.",
                "Or je sais que le Ca²⁺ libéré par le réticulum sarcoplasmique démasque les sites de fixation de la myosine sur l'actine.",
                "Donc j'en déduis que le calcium est nécessaire à la contraction : plus il est concentré, plus de sites sont démasqués et plus de têtes de myosine forment des liaisons avec l'actine, jusqu'à ce que tous les sites soient accessibles (plateau).",
                "Réponse au problème : oui, le calcium est indispensable à la contraction ; la force dépend de sa concentration jusqu'à une valeur maximale.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Problème : comment expliquer les troubles moteurs d'un patient ? Document 1 : le patient présente des mouvements lents, une raideur et des tremblements au repos ; sa force musculaire et ses réflexes myotatiques sont normaux. Document 2 : l'imagerie montre une forte diminution de l'activité des neurones à dopamine de la substance noire par rapport à un sujet sain. Document 3 : un traitement par la L-DOPA, molécule que les neurones transforment en dopamine, améliore nettement ses mouvements. Construisez un raisonnement qui répond au problème en mettant en relation les trois documents.",
              hint: "Utilisez d'abord le document 1 pour éliminer certaines causes (muscle, réflexe), puis les documents 2 et 3 pour identifier et confirmer la cause.",
              solution: [
                "Document 1 : je constate que la force musculaire et les réflexes myotatiques sont normaux. Or je sais que le réflexe met en jeu le récepteur, les neurones sensoriel et moteur, la moelle épinière et le muscle. Donc ces éléments fonctionnent : les troubles ne viennent ni du muscle, ni de l'arc réflexe, mais de la commande cérébrale des mouvements.",
                "Document 2 : je constate que l'activité des neurones à dopamine de la substance noire est fortement diminuée par rapport au sujet sain. Or je sais que la disparition de ces neurones caractérise la maladie de Parkinson, une maladie neurodégénérative qui perturbe le contrôle des mouvements. Donc le patient présente probablement cette maladie.",
                "Document 3 : je constate que la L-DOPA, transformée en dopamine, améliore les mouvements. Donc le déficit en dopamine est bien la cause des troubles : compenser ce déficit corrige en partie les symptômes.",
                "Mise en relation : le document 1 localise le problème dans le cerveau, le document 2 identifie une perte de neurones à dopamine, et le document 3 confirme le lien de cause à effet entre ce déficit et les troubles.",
                "Conclusion : les troubles moteurs du patient s'expliquent par la dégénérescence des neurones à dopamine de la substance noire (maladie de Parkinson), qui perturbe la commande cérébrale du mouvement ; le traitement par la L-DOPA compense partiellement ce déficit sans arrêter la maladie.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque verbe de consigne à ce qu'il attend.",
            pairs: [
              { left: "Décrire", right: "Dire ce que montre le document, avec des valeurs, sans expliquer" },
              { left: "Comparer", right: "Dégager ressemblances et différences, de façon chiffrée" },
              { left: "Interpréter", right: "Donner une cause ou un mécanisme grâce aux connaissances" },
              { left: "Déduire", right: "Tirer une conséquence logique d'une observation" },
              { left: "Montrer que", right: "Apporter les arguments qui établissent l'idée donnée" },
              { left: "Mettre en relation", right: "Relier les informations de plusieurs documents" },
            ],
          },
          quiz: [
            {
              q: "Sur combien de points l'exercice 2 est-il noté ?",
              options: ["7 points", "8 points", "5 points", "15 points"],
              answer: 1,
              why: "L'exercice 2 compte pour 8 des 15 points de l'écrit.",
            },
            {
              q: "Pourquoi faut-il comparer une expérience à un témoin ?",
              options: ["Pour isoler l'effet du seul facteur testé", "Pour obtenir plus de valeurs", "Pour remplir la copie", "Parce que le témoin donne toujours la bonne réponse"],
              answer: 0,
              why: "Seul l'écart entre expérience et témoin, qui ne diffèrent que par un facteur, permet de conclure sur ce facteur.",
            },
            {
              q: "Quelle formulation est une bonne extraction d'information ?",
              options: ["« La courbe monte beaucoup. »", "« Le document montre un graphique. »", "« C'est normal d'après le cours. »", "« La glycémie passe de 1,0 à 1,4 g/L en 45 min. »"],
              answer: 3,
              why: "Une bonne extraction nomme la grandeur, donne des valeurs avec leurs unités et une durée.",
            },
            {
              q: "Que manque-t-il à la phrase « La glycémie baisse, donc l'insuline est efficace » ?",
              options: ["Une unité de temps", "Le nom du document", "La connaissance qui relie l'observation à la conclusion", "Une question à choix multiple"],
              answer: 2,
              why: "Il faut un « or je sais que... » (l'insuline est hypoglycémiante) pour justifier la déduction.",
            },
            {
              q: "Un document obtenu chez le rat permet-il de conclure directement pour l'humain ?",
              options: ["Oui, toujours", "Non, il faut nuancer la généralisation", "Oui, si le document contient un graphique", "Non, il faut l'ignorer"],
              answer: 1,
              why: "Un résultat animal est un argument, mais sa transposition à l'humain doit être formulée avec prudence.",
            },
          ],
          trap: "Paraphraser les documents sans les interpréter, ou au contraire réciter le cours sans s'appuyer sur les documents : chaque argument doit associer une donnée extraite et une connaissance.",
          method: "Au brouillon, faites un tableau à trois colonnes pour chaque document (je constate, or je sais, donc j'en déduis), puis reliez les lignes par des flèches pour faire apparaître les mises en relation avant de rédiger.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ece-svt',
          title: 'L\'évaluation des compétences expérimentales',
          minutes: 30,
          objectives: [
            "Connaître le déroulement et les attendus de l'évaluation des compétences expérimentales (ECE).",
            "Mettre en œuvre un protocole en respectant les règles de sécurité et de manipulation.",
            "Communiquer des résultats sous une forme adaptée : tableau, graphique, dessin d'observation, image légendée.",
            "Exploiter les résultats pour répondre au problème posé.",
          ],
          course: [
            {
              heading: "Le déroulement de l'ECE",
              paragraphs: [
                "L'évaluation des compétences expérimentales se déroule en classe de terminale, au laboratoire, et dure 1 heure. Elle compte pour 5 points sur les 20 de la note de spécialité SVT. Chaque candidat reçoit un sujet issu d'une banque nationale, portant sur le programme : par exemple observer des cellules au microscope, mesurer des échanges gazeux par ExAO, comparer des séquences avec un logiciel, réaliser une dissection ou une coloration.",
                "Le sujet présente une situation et un problème, des ressources (matériel, protocole, fiches techniques) et des étapes à suivre. Des appels à l'examinateur sont prévus à certains moments pour qu'il vérifie votre travail ou vos résultats. Si une manipulation échoue, l'examinateur peut fournir des résultats de secours, ce qui vous permet de poursuivre : vous perdez seulement les points de la réalisation.",
              ],
              box: { label: "Repère", text: "ECE : 1 heure au laboratoire, 5 points sur 20 en spécialité SVT. Un problème, des ressources, des étapes, des appels à l'examinateur." },
            },
            {
              heading: "Mettre en œuvre le protocole",
              paragraphs: [
                "Lisez entièrement le sujet et les fiches techniques avant de toucher au matériel, et organisez votre paillasse. Respectez les consignes de sécurité : blouse, gants ou lunettes si demandé, manipulation prudente des colorants et des objets tranchants, élimination des déchets dans les récipients prévus.",
                "Au microscope, commencez toujours par le plus faible grossissement, faites la mise au point, centrez la zone intéressante, puis passez à un grossissement plus fort en n'utilisant que la vis micrométrique. Le grossissement total est le produit des grossissements de l'objectif et de l'oculaire : un objectif × 40 et un oculaire × 10 donnent un grossissement de × 400. Avec un logiciel ou l'ExAO, vérifiez les réglages (unités, durée d'acquisition) avant de lancer la mesure.",
              ],
              box: { label: "Formule", text: "Grossissement total = grossissement de l'objectif × grossissement de l'oculaire. Taille réelle = taille mesurée sur l'image ÷ grossissement (ou à l'aide de l'échelle)." },
            },
            {
              heading: "Communiquer ses résultats",
              paragraphs: [
                "La forme de communication doit être adaptée au résultat. Un tableau convient pour des valeurs à comparer : titre, colonnes avec grandeurs et unités. Un graphique convient pour une grandeur qui varie avec une autre : titre, axes orientés et légendés avec unités, variable contrôlée en abscisse, points placés avec soin.",
                "Un dessin d'observation se fait au crayon à papier, avec un trait net, un titre précisant l'objet et le grossissement ou une échelle, et des légendes alignées reliées par des traits tracés à la règle, sans flèches. Une capture d'image est légendée et titrée. Dans tous les cas, ne représentez que ce que vous observez réellement.",
              ],
              box: { label: "Règle", text: "Tout résultat communiqué porte un titre et des unités. Un dessin d'observation : crayon, titre, grossissement ou échelle, légendes reliées par des traits à la règle, sans flèches." },
            },
            {
              heading: "Exploiter les résultats",
              paragraphs: [
                "La dernière étape consiste à utiliser vos résultats pour répondre au problème posé. Décrivez les résultats en les comparant au témoin, interprétez-les avec vos connaissances, puis rédigez une conclusion qui répond clairement à la question, en restant prudent si les résultats sont incomplets.",
                "Si vos résultats ne sont pas ceux attendus, ne les modifiez pas : présentez ce que vous avez réellement obtenu, proposez une explication possible (erreur de manipulation, durée trop courte, matériel défaillant) et indiquez comment l'expérience pourrait être améliorée. L'honnêteté et l'esprit critique font partie des compétences évaluées.",
              ],
            },
          ],
          keyPoints: [
            "ECE : 1 heure au laboratoire, 5 points sur 20 de la note de spécialité.",
            "Lire tout le sujet avant de manipuler, respecter la sécurité, appeler l'examinateur aux moments prévus.",
            "Microscope : faible grossissement d'abord ; grossissement total = objectif × oculaire.",
            "Tableau, graphique, dessin ou image : toujours un titre et des unités ; dessin au crayon, légendes à la règle.",
            "Exploiter : comparer au témoin, interpréter, conclure sur le problème, avec un regard critique.",
          ],
          example: {
            statement: "Au microscope, avec un objectif × 40 et un oculaire × 10, une fibre musculaire apparaît sur la photographie avec un diamètre de 24 mm. Calculez le grossissement total et le diamètre réel de la fibre en micromètres.",
            solution: [
              "Grossissement total = 40 × 10 = 400.",
              "Taille réelle = taille sur l'image ÷ grossissement = 24 mm ÷ 400 = 0,06 mm.",
              "Conversion : 1 mm = 1 000 µm, donc 0,06 mm = 60 µm.",
              "Le diamètre réel de la fibre est de 60 µm, une valeur cohérente avec le diamètre d'une fibre musculaire (quelques dizaines de micromètres).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un élève observe des cellules avec un objectif × 10 et un oculaire × 10, puis avec un objectif × 40 et le même oculaire. a) Calculez le grossissement total dans chaque cas. b) Par quel grossissement doit-il commencer et pourquoi ? c) Quelle vis doit-il utiliser au fort grossissement ?",
              hint: "Multipliez les grossissements ; puis pensez au champ observé et au risque d'écraser la lame.",
              solution: [
                "a) Objectif × 10 : 10 × 10 = 100. Objectif × 40 : 40 × 10 = 400.",
                "b) Il commence au plus faible grossissement (× 100) : le champ observé est plus large, ce qui permet de repérer et de centrer la zone intéressante, et la mise au point est plus facile.",
                "c) Au fort grossissement, il n'utilise que la vis micrométrique, pour affiner la mise au point sans risquer d'écraser la lame avec l'objectif.",
              ],
            },
            {
              level: 2,
              statement: "Par ExAO, on mesure la concentration en dioxygène d'une suspension de levures. Valeurs (mg/L) : t = 0 min : 8,0 ; t = 1 min : 8,0 ; t = 2 min (ajout de glucose) : 8,0 ; t = 3 min : 7,2 ; t = 4 min : 6,4 ; t = 5 min : 5,6. Indiquez la forme de communication la plus adaptée et ses éléments obligatoires, puis calculez la vitesse de consommation de dioxygène après l'ajout de glucose et interprétez.",
              hint: "Une grandeur qui varie au cours du temps se représente sur un graphique ; la vitesse est la variation de concentration divisée par la durée.",
              solution: [
                "Forme adaptée : un graphique, car la concentration varie au cours du temps. Éléments : titre, temps (min) en abscisse, concentration en O₂ (mg/L) en ordonnée, axes gradués, indication de l'ajout de glucose à t = 2 min.",
                "Avant l'ajout, la concentration reste à 8,0 mg/L : consommation nulle ou non détectable.",
                "Après l'ajout : (8,0 - 5,6) ÷ (5 - 2) = 2,4 ÷ 3 = 0,8 mg/L/min.",
                "Interprétation : en présence de glucose, les levures consomment du dioxygène : elles réalisent la respiration cellulaire, au cours de laquelle le dioxygène est l'accepteur final de la chaîne respiratoire mitochondriale.",
              ],
            },
            {
              level: 3,
              statement: "Type ECE. Problème : les fibres musculaires d'un muscle de cuisse de poulet et d'un muscle de blanc de poulet contiennent-elles la même quantité de mitochondries ? Un élève réalise une coloration spécifique des mitochondries et compte, au même grossissement, le nombre moyen de mitochondries colorées par champ : cuisse 46, blanc 12. Mais il remarque que la coloration du blanc est moins réussie (préparation plus épaisse). a) Présentez ces résultats sous une forme adaptée. b) Exploitez-les pour répondre au problème. c) Portez un regard critique sur la fiabilité du résultat et proposez une amélioration.",
              hint: "Pour la partie critique, demandez-vous si la différence observée peut venir de la technique et non du muscle.",
              solution: [
                "a) Un tableau à deux colonnes : titre « Nombre moyen de mitochondries colorées par champ au grossissement × 400 selon le muscle de poulet » ; lignes « cuisse » (46) et « blanc » (12).",
                "b) Le muscle de cuisse présente 46 ÷ 12 ≈ 3,8 fois plus de mitochondries par champ que le blanc. Or les mitochondries sont le siège du cycle de Krebs et de la chaîne respiratoire. Donc les fibres de la cuisse semblent davantage adaptées à la respiration (fibres de type I, efforts prolongés), celles du blanc davantage à la fermentation (fibres de type II).",
                "c) Regard critique : la préparation du blanc, plus épaisse et moins bien colorée, peut conduire à sous-estimer le nombre de mitochondries ; la différence pourrait donc être en partie due à la technique.",
                "Amélioration : refaire des préparations de même épaisseur, avec le même temps de coloration, compter sur plusieurs champs et plusieurs préparations, et calculer une moyenne pour chaque muscle.",
                "Conclusion : les résultats suggèrent que le muscle de cuisse contient plus de mitochondries que le blanc, mais la conclusion doit être confirmée par une expérience mieux contrôlée.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : réussir l'ECE.",
            statements: [
              { text: "Au microscope, on commence toujours par le plus fort grossissement.", true: false, why: "On commence par le plus faible : champ plus large, repérage et mise au point plus faciles." },
              { text: "Un objectif × 40 et un oculaire × 10 donnent un grossissement total de × 400.", true: true, why: "Le grossissement total est le produit des deux." },
              { text: "Un dessin d'observation se légende avec des flèches de couleur.", true: false, why: "Les légendes sont reliées par des traits tracés à la règle, sans flèches." },
              { text: "Si la manipulation échoue, on peut obtenir des résultats de secours pour poursuivre.", true: true, why: "L'examinateur peut les fournir : seuls les points de la réalisation sont perdus." },
              { text: "Si les résultats ne sont pas ceux attendus, il vaut mieux les corriger pour qu'ils correspondent au cours.", true: false, why: "On présente les résultats réels et on propose une explication et une amélioration : c'est l'esprit critique." },
              { text: "Un graphique doit avoir un titre, des axes légendés et des unités.", true: true, why: "Sans ces éléments, le résultat n'est pas lisible et la communication est pénalisée." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la durée de l'ECE de SVT ?",
              options: ["1 heure", "30 minutes", "2 heures", "3 h 30"],
              answer: 0,
              why: "L'ECE dure 1 heure ; 3 h 30 est la durée de l'épreuve écrite.",
            },
            {
              q: "Quelle forme convient le mieux pour montrer l'évolution d'une concentration au cours du temps ?",
              options: ["Un dessin d'observation", "Un texte", "Un graphique", "Une capture d'écran sans titre"],
              answer: 2,
              why: "Un graphique montre la variation d'une grandeur en fonction d'une autre.",
            },
            {
              q: "Une cellule mesure 12 mm sur une photographie prise au grossissement × 400. Quelle est sa taille réelle ?",
              options: ["4 800 µm", "3 µm", "300 µm", "30 µm"],
              answer: 3,
              why: "12 mm ÷ 400 = 0,03 mm, soit 30 µm.",
            },
            {
              q: "Au fort grossissement, quelle vis du microscope utilise-t-on ?",
              options: ["La vis macrométrique", "La vis micrométrique", "Les deux en alternance", "Aucune"],
              answer: 1,
              why: "La vis micrométrique affine la mise au point sans risque d'écraser la lame.",
            },
            {
              q: "Combien de points l'ECE apporte-t-elle sur les 20 de la note de spécialité SVT ?",
              options: ["8 points", "7 points", "5 points", "10 points"],
              answer: 2,
              why: "L'ECE compte pour 5 points, l'épreuve écrite pour 15 points.",
            },
          ],
          trap: "Oublier les unités et le titre d'un tableau ou d'un graphique, ou légender un dessin avec des flèches : ces oublis de communication coûtent des points même quand la manipulation est réussie.",
          method: "Dès la première lecture du sujet, surlignez les appels à l'examinateur et notez l'heure à laquelle chaque étape doit être terminée : en une heure, gérer son temps est aussi important que bien manipuler.",
        },
      ],
    },
  ],
}
