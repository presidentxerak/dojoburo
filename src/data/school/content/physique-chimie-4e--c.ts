import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'physique-chimie-4e',
  chapters: [
    /* ================================================================== */
    /* L'ÉNERGIE ET SES CONVERSIONS                                        */
    /* ================================================================== */
    {
      id: 'energie-conversions',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'sources-formes-energie',
          title: 'Sources et formes d\'énergie',
          minutes: 30,
          objectives: [
            "Identifier les sources d'énergie et distinguer les sources renouvelables des sources non renouvelables.",
            "Citer les principales formes d'énergie.",
            "Associer une forme d'énergie à une situation de la vie courante.",
            "Citer l'unité de l'énergie, le joule.",
          ],
          course: [
            {
              heading: "Qu'est-ce que l'énergie ?",
              paragraphs: [
                "L'énergie est ce qui permet d'agir : mettre un objet en mouvement, le chauffer, l'éclairer, faire fonctionner un appareil ou faire vivre un être vivant. Une voiture a besoin d'énergie pour rouler, une lampe pour éclairer, et votre corps pour marcher, penser ou garder sa température.",
                "L'énergie se mesure en joules, de symbole J. Pour vous faire une idée, soulever une pomme d'environ 100 g d'une hauteur d'un mètre demande à peu près 1 J. C'est une petite quantité : on utilise donc souvent le kilojoule (1 kJ = 1 000 J). Sur les emballages des aliments, la valeur énergétique est d'ailleurs indiquée en kilojoules (kJ) et en kilocalories (kcal).",
              ],
              box: { label: "Définition", text: "L'énergie est ce qui permet de produire un mouvement, une élévation de température, de la lumière ou de faire fonctionner un appareil. Son unité est le joule (J). 1 kJ = 1 000 J." },
            },
            {
              heading: "Les sources d'énergie",
              paragraphs: [
                "Une source d'énergie est un réservoir naturel dans lequel on prélève de l'énergie : le Soleil, le vent, l'eau des rivières, le bois, le pétrole, le charbon, le gaz naturel ou l'uranium.",
                "Une source est renouvelable lorsqu'elle se reconstitue rapidement, à l'échelle d'une vie humaine : le Soleil, le vent, les cours d'eau, les marées, la chaleur de la Terre (géothermie) et la biomasse (le bois, à condition de replanter les forêts).",
                "Une source est non renouvelable lorsque ses stocks sont limités et ne se reconstituent pas à l'échelle humaine. Le pétrole, le charbon et le gaz naturel sont des combustibles fossiles : ils se sont formés à partir de restes d'êtres vivants pendant des millions d'années. Leur combustion libère du dioxyde de carbone, un gaz à effet de serre. L'uranium, utilisé dans les centrales nucléaires, est aussi une source non renouvelable : c'est un minerai extrait du sous-sol en quantité limitée.",
              ],
              box: { label: "À retenir", text: "Renouvelables : Soleil, vent, eau (rivières, marées), géothermie, biomasse. Non renouvelables : pétrole, charbon, gaz naturel (fossiles) et uranium." },
            },
            {
              heading: "Les formes d'énergie",
              paragraphs: [
                "L'énergie existe sous plusieurs formes. L'énergie cinétique est liée au mouvement : une voiture qui roule, le vent, l'eau d'une rivière. L'énergie de position est liée à la hauteur d'un objet : l'eau retenue derrière un barrage, un skieur en haut d'une piste. La somme de ces deux énergies s'appelle l'énergie mécanique.",
                "L'énergie chimique est stockée dans la matière et libérée par des transformations chimiques : dans les aliments, l'essence, le bois, une pile. L'énergie électrique est transportée par le courant électrique. L'énergie thermique est liée à la température d'un corps : l'eau chaude d'un radiateur en possède beaucoup.",
                "L'énergie lumineuse est transportée par la lumière, celle du Soleil ou d'une lampe. Enfin, l'énergie nucléaire est contenue dans les noyaux des atomes : elle est libérée dans les centrales nucléaires et au cœur du Soleil.",
              ],
              box: { label: "À retenir", text: "Les formes d'énergie : cinétique (mouvement), de position (hauteur), chimique, électrique, thermique, lumineuse, nucléaire. Énergie mécanique = énergie cinétique + énergie de position." },
            },
            {
              heading: "Ne pas confondre source et forme",
              paragraphs: [
                "Une source est l'endroit où l'on prend l'énergie ; une forme est la manière dont cette énergie se présente. Le Soleil est une source : il nous envoie de l'énergie lumineuse. Le pétrole est une source : il contient de l'énergie chimique. Le vent est une source : il possède de l'énergie cinétique.",
                "L'électricité n'est pas une source d'énergie : on la produit dans des centrales ou avec des éoliennes et des panneaux solaires, à partir d'une vraie source (uranium, gaz, vent, Soleil...). On dit que l'électricité est une énergie secondaire.",
              ],
            },
          ],
          keyPoints: [
            "L'énergie permet de produire un mouvement, de chauffer, d'éclairer ou de faire fonctionner un appareil. Son unité est le joule (J).",
            "Une source d'énergie est un réservoir naturel où l'on prélève de l'énergie.",
            "Renouvelables : Soleil, vent, eau, géothermie, biomasse. Non renouvelables : pétrole, charbon, gaz naturel, uranium.",
            "Formes d'énergie : cinétique, de position, chimique, électrique, thermique, lumineuse, nucléaire.",
            "Énergie mécanique = énergie cinétique + énergie de position.",
            "L'électricité n'est pas une source : elle est produite à partir d'une source.",
          ],
          example: {
            statement: "Pour chacune des sources suivantes, dites si elle est renouvelable ou non, et donnez la forme d'énergie qu'elle fournit : a) le vent ; b) le charbon ; c) l'eau retenue derrière un barrage ; d) le Soleil.",
            solution: [
              "a) Le vent se reforme sans cesse : source renouvelable. C'est de l'air en mouvement, il possède de l'énergie cinétique.",
              "b) Le charbon est un combustible fossile, formé en des millions d'années : source non renouvelable. Il contient de l'énergie chimique, libérée quand on le brûle.",
              "c) L'eau du barrage est renouvelée par la pluie et les rivières : source renouvelable. Comme elle est en hauteur, elle possède de l'énergie de position.",
              "d) Le Soleil brillera encore pendant des milliards d'années : source renouvelable. Il nous envoie de l'énergie lumineuse.",
              "Réponse : vent (renouvelable, cinétique) ; charbon (non renouvelable, chimique) ; eau du barrage (renouvelable, de position) ; Soleil (renouvelable, lumineuse).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les sources d'énergie suivantes en deux colonnes, renouvelables et non renouvelables : le pétrole, le vent, le bois d'une forêt replantée, l'uranium, le Soleil, le gaz naturel, les marées.",
              hint: "Demandez-vous pour chaque source si elle se reconstitue rapidement, à l'échelle d'une vie humaine, ou si ses stocks sont limités dans le sous-sol.",
              solution: [
                "Le vent, le Soleil et les marées se renouvellent en permanence.",
                "Le bois se renouvelle si l'on replante les arbres : c'est de la biomasse.",
                "Le pétrole et le gaz naturel sont des combustibles fossiles, formés en des millions d'années : leurs stocks sont limités.",
                "L'uranium est un minerai extrait du sous-sol en quantité limitée.",
                "Réponse : renouvelables : vent, bois d'une forêt replantée, Soleil, marées ; non renouvelables : pétrole, uranium, gaz naturel.",
              ],
            },
            {
              level: 2,
              statement: "Nommez la forme d'énergie principale présente dans chaque situation : a) une boule de bowling qui roule ; b) un sandwich ; c) un rocher posé en haut d'une falaise ; d) l'eau chaude d'un radiateur ; e) le courant qui circule dans le fil d'un chargeur ; f) la lumière d'une lampe ; g) le combustible d'une centrale nucléaire.",
              hint: "Cherchez ce qui caractérise chaque situation : un mouvement, une hauteur, une température, un aliment ou un combustible, un courant, de la lumière, des noyaux d'atomes.",
              solution: [
                "a) La boule est en mouvement : énergie cinétique.",
                "b) Le sandwich est un aliment : énergie chimique.",
                "c) Le rocher est en hauteur : énergie de position.",
                "d) L'eau est chaude : énergie thermique.",
                "e) Le courant transporte de l'énergie électrique.",
                "f) La lampe émet de l'énergie lumineuse.",
                "g) Le combustible nucléaire contient de l'énergie nucléaire, stockée dans les noyaux des atomes d'uranium.",
                "Réponse : a) cinétique ; b) chimique ; c) de position ; d) thermique ; e) électrique ; f) lumineuse ; g) nucléaire.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici la production d'électricité d'un pays imaginaire en une année (données fictives) : nucléaire 60 % ; hydraulique 12 % ; éolien 10 % ; solaire 6 % ; gaz naturel 8 % ; charbon 1 % ; bioénergies (bois, déchets végétaux) 3 %. 1) Vérifiez que le total fait 100 %. 2) Calculez la part d'électricité produite à partir de sources renouvelables, puis celle produite à partir de sources non renouvelables. 3) Le pays veut atteindre 40 % de renouvelable : de combien de points la part renouvelable doit-elle augmenter ? 4) Un élève affirme : « Le nucléaire rejette très peu de dioxyde de carbone, donc c'est une source renouvelable. » Corrigez son raisonnement.",
              hint: "Rangez d'abord chaque source dans la bonne catégorie, puis additionnez les pourcentages. Pour la question 4, rappelez-vous la définition d'une source renouvelable : elle ne parle pas de pollution.",
              solution: [
                "1) 60 + 12 + 10 + 6 + 8 + 1 + 3 = 100 : le total fait bien 100 %.",
                "2) Sources renouvelables : hydraulique, éolien, solaire et bioénergies. Part renouvelable : 12 + 10 + 6 + 3 = 31 %.",
                "Sources non renouvelables : nucléaire (uranium), gaz naturel et charbon. Part non renouvelable : 60 + 8 + 1 = 69 %. Vérification : 31 + 69 = 100.",
                "3) 40 - 31 = 9 : la part renouvelable doit augmenter de 9 points.",
                "4) Une source est renouvelable si elle se reconstitue rapidement à l'échelle humaine. L'uranium est un minerai dont les stocks sont limités : le nucléaire n'est donc pas renouvelable, même s'il rejette peu de dioxyde de carbone. Il ne faut pas confondre « renouvelable » et « peu émetteur de dioxyde de carbone ».",
                "Réponse : 31 % de renouvelable et 69 % de non renouvelable ; il manque 9 points pour atteindre 40 % ; le nucléaire est peu émetteur de dioxyde de carbone mais non renouvelable.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque situation à la forme d'énergie qui la caractérise.",
            pairs: [
              { left: "Un vélo qui roule", right: "Énergie cinétique" },
              { left: "L'eau retenue en haut d'un barrage", right: "Énergie de position" },
              { left: "Une barre de céréales", right: "Énergie chimique" },
              { left: "Une tasse de thé brûlant", right: "Énergie thermique" },
              { left: "Les rayons du Soleil", right: "Énergie lumineuse" },
              { left: "Les noyaux d'uranium", right: "Énergie nucléaire" },
            ],
          },
          quiz: [
            {
              q: "Quelle est l'unité de l'énergie ?",
              options: ["Le watt", "Le joule", "Le volt", "Le newton"],
              answer: 1,
              why: "L'énergie se mesure en joules (J). Le watt mesure une puissance, le volt une tension et le newton une force.",
            },
            {
              q: "Laquelle de ces sources d'énergie est renouvelable ?",
              options: ["Le charbon", "Le gaz naturel", "L'uranium", "Le vent"],
              answer: 3,
              why: "Le vent se reforme sans cesse. Le charbon, le gaz naturel et l'uranium ont des stocks limités dans le sous-sol.",
            },
            {
              q: "Quelle forme d'énergie possède une voiture qui roule ?",
              options: ["De l'énergie cinétique", "De l'énergie de position", "De l'énergie lumineuse"],
              answer: 0,
              why: "L'énergie cinétique est liée au mouvement : tout objet qui se déplace en possède.",
            },
            {
              q: "Pourquoi le pétrole est-il une source non renouvelable ?",
              options: ["Parce qu'il pollue", "Parce qu'il est liquide", "Parce qu'il s'est formé en des millions d'années", "Parce qu'il est plus cher que les autres sources d'énergie"],
              answer: 2,
              why: "Le pétrole s'est formé très lentement à partir de restes d'êtres vivants : ses stocks ne se reconstituent pas à l'échelle humaine.",
            },
            {
              q: "Sous quelle forme l'énergie est-elle stockée dans une pile ?",
              options: ["Thermique", "Chimique", "Nucléaire", "Cinétique"],
              answer: 1,
              why: "Une pile contient des espèces chimiques qui réagissent entre elles : elle stocke de l'énergie chimique et la convertit en énergie électrique.",
            },
          ],
          trap: "Confondre source et forme d'énergie, ou croire que l'électricité est une source : l'électricité est produite à partir d'une vraie source (vent, Soleil, uranium, gaz...), elle n'existe pas en réserve dans la nature.",
          method: "Pour classer une source, posez-vous une seule question : se reconstitue-t-elle rapidement, à l'échelle d'une vie humaine ? Pour trouver une forme d'énergie, cherchez ce qui caractérise la situation : mouvement, hauteur, température, combustible ou aliment, courant, lumière.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'chaine-energetique',
          title: 'Conversions d\'énergie et chaîne énergétique',
          minutes: 30,
          objectives: [
            "Identifier la conversion d'énergie réalisée par un appareil.",
            "Distinguer un réservoir d'énergie, un convertisseur et un transfert d'énergie.",
            "Représenter une chaîne énergétique en respectant les conventions.",
          ],
          course: [
            {
              heading: "Convertir l'énergie",
              paragraphs: [
                "Une conversion d'énergie est la transformation d'une forme d'énergie en une autre. L'appareil qui la réalise s'appelle un convertisseur. Une lampe convertit l'énergie électrique en énergie lumineuse, un panneau photovoltaïque convertit l'énergie lumineuse en énergie électrique, un radiateur électrique convertit l'énergie électrique en énergie thermique.",
                "Un moteur électrique convertit l'énergie électrique en énergie mécanique (il met un objet en mouvement). À l'inverse, un alternateur ou une dynamo de vélo convertit l'énergie mécanique en énergie électrique. Une éolienne convertit l'énergie cinétique du vent en énergie électrique.",
              ],
              box: { label: "Définition", text: "Un convertisseur est un objet qui transforme une forme d'énergie en une ou plusieurs autres formes. Exemples : lampe, moteur, alternateur, panneau photovoltaïque, radiateur." },
            },
            {
              heading: "Réservoirs et transferts",
              paragraphs: [
                "Un réservoir d'énergie est un objet qui stocke de l'énergie : une pile ou une batterie (énergie chimique), le réservoir d'essence d'une voiture (énergie chimique), l'eau retenue par un barrage (énergie de position), le Soleil (énergie nucléaire, libérée sous forme de lumière).",
                "Un transfert d'énergie est le passage de l'énergie d'un objet à un autre. L'énergie peut être transférée par le courant électrique (transfert électrique), par la chaleur (transfert thermique), par la lumière (transfert par rayonnement) ou par un mouvement (transfert mécanique, par exemple quand un axe en rotation entraîne une roue).",
              ],
            },
            {
              heading: "Représenter une chaîne énergétique",
              paragraphs: [
                "Une chaîne énergétique est un schéma qui montre le trajet de l'énergie, du réservoir jusqu'à l'utilisation. Les conventions sont les suivantes : un réservoir est dessiné dans une ellipse (un ovale), un convertisseur dans un rectangle, et chaque transfert est une flèche sur laquelle on écrit la forme d'énergie transférée.",
                "Exemple de la lampe de poche : Pile (ellipse) → énergie électrique → Lampe (rectangle) → énergie lumineuse → Environnement. La lampe chauffe aussi un peu : on ajoute donc une seconde flèche, énergie thermique → Environnement. L'environnement (l'air, la pièce) reçoit l'énergie à la sortie de la chaîne.",
                "Un convertisseur fournit presque toujours plusieurs formes d'énergie : celle que l'on souhaite, appelée énergie utile, et une autre, souvent thermique, que l'on n'a pas cherché à produire. Sur la chaîne, on représente toutes les flèches de sortie.",
              ],
              box: { label: "Règle", text: "Réservoir : ellipse. Convertisseur : rectangle. Transfert : flèche portant le nom de la forme d'énergie transférée. On lit la chaîne de gauche à droite, du réservoir vers l'environnement." },
            },
            {
              heading: "Des chaînes à plusieurs convertisseurs",
              paragraphs: [
                "Une chaîne peut comporter plusieurs convertisseurs à la suite. Dans un barrage hydroélectrique, l'eau retenue en hauteur (énergie de position) descend dans une conduite et prend de la vitesse (énergie cinétique). Elle fait tourner une turbine (énergie mécanique), qui entraîne un alternateur : celui-ci produit l'énergie électrique envoyée sur le réseau.",
                "Votre corps est aussi un convertisseur. Quand vous pédalez sur un vélo équipé d'une dynamo, l'énergie chimique de vos aliments est convertie par vos muscles en énergie mécanique ; la dynamo la convertit en énergie électrique, et la lampe du vélo en énergie lumineuse.",
              ],
            },
          ],
          keyPoints: [
            "Une conversion d'énergie transforme une forme d'énergie en une autre ; l'objet qui la réalise est un convertisseur.",
            "Un réservoir stocke de l'énergie : pile, batterie, carburant, eau d'un barrage.",
            "Un transfert est le passage de l'énergie d'un objet à un autre (électrique, thermique, par rayonnement, mécanique).",
            "Chaîne énergétique : réservoir dans une ellipse, convertisseur dans un rectangle, flèche portant la forme d'énergie.",
            "Un convertisseur fournit l'énergie utile et, en plus, souvent de l'énergie thermique.",
          ],
          example: {
            statement: "Un ventilateur est branché sur une prise. Ses pales tournent et brassent l'air, et son moteur devient tiède. Décrivez la chaîne énergétique du ventilateur.",
            solution: [
              "Le ventilateur reçoit de l'énergie électrique par le cordon branché sur la prise : c'est l'énergie d'entrée.",
              "Le convertisseur est le moteur du ventilateur : on le dessine dans un rectangle.",
              "Le moteur fait tourner les pales : il fournit de l'énergie mécanique (cinétique), c'est l'énergie utile.",
              "Le moteur devient tiède : il fournit aussi de l'énergie thermique à l'air de la pièce.",
              "Chaîne : Réseau électrique → énergie électrique → Moteur (rectangle) → énergie mécanique → pales et air ; et Moteur → énergie thermique → Environnement.",
              "Réponse : le moteur convertit l'énergie électrique en énergie mécanique (utile) et en énergie thermique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez la conversion d'énergie principale réalisée par chaque convertisseur, sous la forme « forme reçue → forme fournie » : a) un panneau photovoltaïque ; b) un radiateur électrique ; c) une éolienne ; d) une pile ; e) un moteur électrique.",
              hint: "Demandez-vous ce que l'appareil reçoit (lumière, vent, courant...) et ce qu'on attend de lui (chauffer, éclairer, tourner, produire du courant).",
              solution: [
                "a) Panneau photovoltaïque : énergie lumineuse → énergie électrique.",
                "b) Radiateur électrique : énergie électrique → énergie thermique.",
                "c) Éolienne : énergie cinétique (du vent) → énergie électrique.",
                "d) Pile : énergie chimique → énergie électrique.",
                "e) Moteur électrique : énergie électrique → énergie mécanique (avec un peu d'énergie thermique).",
                "Réponse : voir les cinq conversions ci-dessus.",
              ],
            },
            {
              level: 2,
              statement: "Une lampe de poche « à manivelle » fonctionne sans pile : on tourne une manivelle avec la main, ce qui fait tourner une petite dynamo reliée à une lampe. 1) Quel est le réservoir d'énergie au départ de la chaîne ? 2) Nommez les convertisseurs. 3) Écrivez la chaîne énergétique complète, en nommant la forme d'énergie de chaque flèche.",
              hint: "Votre bras tourne la manivelle : d'où vient l'énergie de vos muscles ? Pensez ensuite à ce que fait la dynamo, puis la lampe.",
              solution: [
                "1) L'énergie vient du corps de la personne : l'énergie chimique de ses aliments, stockée dans ses muscles. Le réservoir est donc la personne (ses muscles).",
                "2) Les convertisseurs sont les muscles (énergie chimique → énergie mécanique), la dynamo (énergie mécanique → énergie électrique) et la lampe (énergie électrique → énergie lumineuse).",
                "3) Chaîne : Muscles → énergie mécanique → Dynamo → énergie électrique → Lampe → énergie lumineuse → Environnement.",
                "La dynamo et la lampe fournissent aussi de l'énergie thermique à l'environnement.",
                "Réponse : réservoir : les muscles (énergie chimique) ; convertisseurs : muscles, dynamo, lampe ; chaîne : chimique → mécanique → électrique → lumineuse (avec de l'énergie thermique en plus).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Dans certaines centrales hydroélectriques, il y a deux lacs, l'un en haut d'une montagne, l'autre en bas. Le jour, l'eau du lac du haut descend et fait tourner une turbine reliée à un alternateur. La nuit, quand on a besoin de moins d'électricité, une pompe électrique remonte l'eau du lac du bas vers le lac du haut. 1) Écrivez la chaîne énergétique de la production de jour (deux convertisseurs). 2) Écrivez la chaîne énergétique du pompage de nuit. 3) Expliquez pourquoi on peut dire que le lac du haut sert de « batterie géante ».",
              hint: "Le jour, cherchez la forme d'énergie de l'eau en hauteur, puis de l'eau qui descend vite. La nuit, la pompe reçoit de l'énergie électrique : qu'en fait-elle ?",
              solution: [
                "1) Jour : Lac du haut (ellipse, énergie de position) → l'eau descend et prend de la vitesse → énergie cinétique → Turbine (rectangle) → énergie mécanique → Alternateur (rectangle) → énergie électrique → Réseau. La turbine et l'alternateur fournissent aussi de l'énergie thermique.",
                "2) Nuit : Réseau → énergie électrique → Pompe (rectangle) → énergie mécanique de l'eau, qui monte → Lac du haut (ellipse), où l'eau stocke de l'énergie de position. La pompe chauffe aussi un peu : énergie thermique vers l'environnement.",
                "3) La nuit, on convertit de l'énergie électrique en énergie de position stockée dans le lac du haut ; le jour, on reconvertit cette énergie de position en énergie électrique. Le lac stocke de l'énergie pour la rendre plus tard, comme une batterie qu'on charge puis qu'on décharge.",
                "Réponse : jour : position → cinétique → turbine → mécanique → alternateur → électrique ; nuit : électrique → pompe → position ; le lac du haut est un réservoir que l'on remplit et vide selon les besoins.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le trajet de l'énergie, du barrage jusqu'à la maison.",
            items: [
              "L'eau est retenue en hauteur derrière le barrage (énergie de position).",
              "L'eau descend dans une conduite et prend de la vitesse (énergie cinétique).",
              "L'eau fait tourner la turbine (énergie mécanique).",
              "La turbine entraîne l'alternateur, qui produit de l'énergie électrique.",
              "Les lignes électriques transportent l'énergie électrique jusqu'à la maison.",
              "Une lampe de la maison convertit l'énergie électrique en énergie lumineuse.",
            ],
          },
          quiz: [
            {
              q: "Dans une chaîne énergétique, comment représente-t-on un convertisseur ?",
              options: ["Par une ellipse", "Par une flèche", "Par un rectangle", "Par un cercle barré"],
              answer: 2,
              why: "Par convention, le convertisseur est dans un rectangle, le réservoir dans une ellipse, et le transfert est une flèche.",
            },
            {
              q: "Quelle conversion réalise un panneau photovoltaïque ?",
              options: ["Lumineuse → électrique", "Électrique → lumineuse", "Thermique → électrique", "Chimique → lumineuse"],
              answer: 0,
              why: "Le panneau photovoltaïque reçoit la lumière du Soleil et produit un courant électrique.",
            },
            {
              q: "Lequel de ces objets est un réservoir d'énergie ?",
              options: ["Une lampe", "Le moteur d'une perceuse", "Une batterie de téléphone", "Un alternateur de voiture"],
              answer: 2,
              why: "Une batterie stocke de l'énergie chimique. La lampe, le moteur et l'alternateur sont des convertisseurs.",
            },
            {
              q: "Que convertit un moteur électrique ?",
              options: ["De l'énergie mécanique en énergie électrique", "De l'énergie électrique en énergie mécanique", "De l'énergie chimique en énergie électrique"],
              answer: 1,
              why: "Le moteur reçoit de l'énergie électrique et met un objet en mouvement. C'est l'alternateur qui fait la conversion inverse.",
            },
            {
              q: "Quelle forme d'énergie une lampe fournit-elle en plus de l'énergie lumineuse ?",
              options: ["De l'énergie nucléaire", "De l'énergie chimique", "De l'énergie de position", "De l'énergie thermique"],
              answer: 3,
              why: "Une lampe chauffe : elle fournit aussi de l'énergie thermique à l'environnement.",
            },
          ],
          trap: "Oublier les sorties secondaires d'un convertisseur, ou mélanger les symboles : une chaîne n'est complète que si l'on dessine aussi la flèche d'énergie thermique, et le convertisseur va dans un rectangle, pas dans une ellipse.",
          method: "Pour construire une chaîne, répondez à trois questions dans l'ordre : d'où vient l'énergie (le réservoir) ? Quel appareil la transforme (le convertisseur) ? Que fournit-il, en énergie utile et en énergie thermique (les flèches de sortie) ?",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'conservation-energie',
          title: 'La conservation de l\'énergie',
          minutes: 30,
          objectives: [
            "Utiliser la conservation de l'énergie.",
            "Distinguer l'énergie utile de l'énergie dissipée.",
            "Réaliser le bilan énergétique d'un convertisseur.",
            "Comparer deux convertisseurs grâce à la part d'énergie utile qu'ils fournissent.",
          ],
          course: [
            {
              heading: "L'énergie ne se crée pas et ne disparaît pas",
              paragraphs: [
                "L'énergie ne peut être ni créée ni détruite : elle peut seulement être convertie d'une forme à une autre ou transférée d'un objet à un autre. C'est le principe de conservation de l'énergie. Un appareil ne « fabrique » donc jamais d'énergie : il transforme celle qu'il reçoit.",
                "Prenons une balle que l'on lâche. En haut, elle possède de l'énergie de position. Pendant la chute, cette énergie de position diminue et l'énergie cinétique augmente : l'énergie change de forme. Au rebond, la balle chauffe un peu, fait du bruit et se déforme : une partie de l'énergie est transférée à l'air et au sol. C'est pour cela qu'elle ne remonte jamais aussi haut qu'au départ.",
              ],
              box: { label: "Propriété", text: "Conservation de l'énergie : l'énergie ne se crée pas et ne disparaît pas. Elle est seulement convertie ou transférée. L'énergie totale se conserve." },
            },
            {
              heading: "Énergie utile et énergie dissipée",
              paragraphs: [
                "Un convertisseur reçoit de l'énergie et en fournit sous plusieurs formes. L'énergie utile est celle que l'on souhaite obtenir : la lumière pour une lampe, le mouvement pour un moteur. L'énergie dissipée (on dit souvent « perdue ») est le reste : le plus souvent de l'énergie thermique, parfois aussi un peu d'énergie sonore, qui part dans l'environnement.",
                "L'énergie dissipée n'a pas disparu : elle a chauffé l'air ou l'appareil. Elle est simplement inutile pour ce que l'on voulait faire, et on ne peut presque jamais la récupérer.",
              ],
            },
            {
              heading: "Le bilan énergétique",
              paragraphs: [
                "Faire le bilan énergétique d'un convertisseur, c'est écrire que toute l'énergie reçue se retrouve en sortie : énergie reçue = énergie utile + énergie dissipée. On peut ainsi calculer une énergie inconnue si l'on connaît les deux autres.",
                "Exemple (données fictives) : une lampe à incandescence reçoit 100 J d'énergie électrique et fournit 5 J d'énergie lumineuse. L'énergie dissipée vaut 100 - 5 = 95 J d'énergie thermique. Une lampe à LED qui reçoit aussi 100 J fournit 30 J d'énergie lumineuse et ne dissipe que 70 J.",
                "Pour comparer deux appareils, on calcule la part de l'énergie reçue qui est utile : 5 sur 100, soit 5 %, pour la lampe à incandescence, et 30 sur 100, soit 30 %, pour la lampe à LED. Plus cette part est grande, plus l'appareil est efficace. On appelle cette part le rendement du convertisseur.",
              ],
              box: { label: "Formule", text: "Bilan énergétique : énergie reçue = énergie utile + énergie dissipée. Part utile (en %) = énergie utile ÷ énergie reçue × 100." },
            },
            {
              heading: "Économiser l'énergie",
              paragraphs: [
                "Comme l'énergie dissipée est inutile, on cherche à la réduire en choisissant des convertisseurs efficaces : lampes à LED plutôt qu'à incandescence, appareils bien étiquetés. On peut aussi limiter les transferts thermiques non voulus, par exemple en isolant les murs et les fenêtres d'une maison pour que l'énergie thermique du chauffage ne parte pas vers l'extérieur.",
              ],
              box: { label: "À retenir", text: "Un convertisseur efficace transforme une grande part de l'énergie reçue en énergie utile. Réduire l'énergie dissipée, c'est consommer moins d'énergie pour le même service." },
            },
          ],
          keyPoints: [
            "L'énergie ne se crée pas et ne disparaît pas : elle est convertie ou transférée.",
            "Énergie utile : celle que l'on souhaite obtenir. Énergie dissipée : le reste, souvent thermique.",
            "Bilan : énergie reçue = énergie utile + énergie dissipée.",
            "Part utile (%) = énergie utile ÷ énergie reçue × 100 ; plus elle est grande, plus le convertisseur est efficace.",
            "Une balle ne remonte jamais aussi haut : une partie de son énergie est transférée à l'air et au sol.",
          ],
          example: {
            statement: "Le moteur électrique d'une perceuse reçoit 500 J d'énergie électrique et fournit 400 J d'énergie mécanique (données fictives). 1) Quelle est l'énergie utile ? 2) Calculez l'énergie dissipée et donnez sa forme principale. 3) Calculez la part d'énergie utile.",
            solution: [
              "1) On veut faire tourner le foret : l'énergie utile est l'énergie mécanique, soit 400 J.",
              "2) Bilan : énergie reçue = énergie utile + énergie dissipée, donc énergie dissipée = 500 - 400 = 100 J.",
              "Le moteur chauffe : cette énergie est dissipée surtout sous forme thermique (avec un peu d'énergie sonore, car la perceuse fait du bruit).",
              "3) Part utile = 400 ÷ 500 × 100 = 80 %.",
              "Réponse : énergie utile 400 J ; énergie dissipée 100 J, surtout thermique ; part utile 80 %.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une lampe reçoit 60 J d'énergie électrique et fournit 9 J d'énergie lumineuse (données fictives). 1) Calculez l'énergie dissipée. 2) Sous quelle forme est-elle dissipée ?",
              hint: "Écrivez le bilan : énergie reçue = énergie utile + énergie dissipée.",
              solution: [
                "1) Énergie dissipée = énergie reçue - énergie utile = 60 - 9 = 51 J.",
                "2) La lampe chauffe l'air autour d'elle : l'énergie est dissipée sous forme thermique.",
                "Réponse : 51 J dissipés sous forme d'énergie thermique.",
              ],
            },
            {
              level: 2,
              statement: "Deux mixeurs reçoivent chacun 2 000 J d'énergie électrique (données fictives). Le mixeur A dissipe 300 J d'énergie thermique et 100 J d'énergie sonore. Le mixeur B fournit 1 500 J d'énergie mécanique. 1) Calculez l'énergie utile du mixeur A. 2) Calculez l'énergie dissipée par le mixeur B. 3) Calculez la part d'énergie utile de chaque mixeur et dites lequel est le plus efficace.",
              hint: "Pour le mixeur A, additionnez d'abord les deux énergies dissipées. Pour comparer, ramenez chaque énergie utile à un pourcentage de l'énergie reçue.",
              solution: [
                "1) Mixeur A : énergie dissipée = 300 + 100 = 400 J, donc énergie utile = 2 000 - 400 = 1 600 J.",
                "2) Mixeur B : énergie dissipée = 2 000 - 1 500 = 500 J.",
                "3) Part utile de A = 1 600 ÷ 2 000 × 100 = 80 %. Part utile de B = 1 500 ÷ 2 000 × 100 = 75 %.",
                "80 % > 75 % : le mixeur A transforme une plus grande part de l'énergie reçue en mouvement.",
                "Réponse : A fournit 1 600 J utiles, B dissipe 500 J ; A (80 %) est plus efficace que B (75 %).",
              ],
            },
            {
              level: 3,
              statement: "Défi. On lâche une balle sans vitesse. Au départ, elle possède 20 J d'énergie de position et pas d'énergie cinétique (données fictives). Juste avant de toucher le sol, son énergie cinétique vaut 19 J et son énergie de position est nulle. Juste après le rebond, son énergie cinétique vaut 14 J. Au plus haut de sa remontée, son énergie de position vaut 13 J. 1) Pendant la chute, quelle énergie a été dissipée, et pourquoi ? 2) Calculez l'énergie dissipée pendant le choc avec le sol et citez deux formes qu'elle a pu prendre. 3) Calculez l'énergie dissipée pendant la remontée. 4) Calculez l'énergie totale dissipée entre le départ et le plus haut point de la remontée de deux façons, et vérifiez que vos résultats concordent. 5) Ce résultat contredit-il la conservation de l'énergie ?",
              hint: "À chaque étape, comparez l'énergie avant et après : la différence a été transférée à l'environnement. Au départ et au plus haut point, la balle est immobile, son énergie cinétique est nulle.",
              solution: [
                "1) Au départ, la balle a 20 J ; juste avant le sol, elle en a 19 J. 20 - 19 = 1 J a été dissipé, à cause des frottements de l'air : il a été transféré à l'air sous forme thermique.",
                "2) Pendant le choc : 19 - 14 = 5 J dissipés. Ils ont pu prendre la forme d'énergie thermique (la balle et le sol chauffent un peu) et d'énergie sonore (le bruit du rebond).",
                "3) Pendant la remontée : 14 - 13 = 1 J dissipé par les frottements de l'air.",
                "4) Première façon : 1 + 5 + 1 = 7 J. Seconde façon : 20 - 13 = 7 J. Les deux résultats concordent.",
                "5) Non : l'énergie de la balle a diminué, mais les 7 J n'ont pas disparu. Ils ont été transférés à l'air et au sol. L'énergie totale (balle et environnement) s'est conservée.",
                "Réponse : 1 J dissipé à la descente, 5 J au choc, 1 J à la remontée, soit 7 J au total, transférés à l'environnement ; la conservation de l'énergie est respectée.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? La conservation de l'énergie.",
            statements: [
              { text: "Une centrale électrique crée de l'énergie.", true: false, why: "Elle convertit l'énergie d'une source (uranium, gaz, eau...) en énergie électrique : l'énergie ne se crée pas." },
              { text: "L'énergie dissipée par une lampe a disparu.", true: false, why: "Elle a été transférée à l'air sous forme thermique : elle existe toujours, mais elle n'est pas utile." },
              { text: "Énergie reçue = énergie utile + énergie dissipée.", true: true, why: "C'est le bilan énergétique d'un convertisseur, conséquence de la conservation de l'énergie." },
              { text: "Un convertisseur peut fournir plus d'énergie qu'il n'en reçoit.", true: false, why: "C'est impossible : l'énergie fournie au total est égale à l'énergie reçue, jamais plus." },
              { text: "L'énergie dissipée est le plus souvent de l'énergie thermique.", true: true, why: "Les appareils chauffent : les frottements et le passage du courant produisent de l'énergie thermique." },
              { text: "Une lampe à LED transforme une plus grande part de l'énergie reçue en lumière qu'une lampe à incandescence.", true: true, why: "La lampe à incandescence dissipe la plus grande partie de l'énergie reçue sous forme thermique." },
            ],
          },
          quiz: [
            {
              q: "Que dit le principe de conservation de l'énergie ?",
              options: ["L'énergie se crée dans les centrales", "L'énergie ne se crée pas et ne disparaît pas", "L'énergie disparaît peu à peu quand un objet s'arrête"],
              answer: 1,
              why: "L'énergie est seulement convertie ou transférée : la quantité totale reste la même.",
            },
            {
              q: "Un moteur reçoit 800 J et fournit 600 J d'énergie mécanique. Quelle est l'énergie dissipée ?",
              options: ["1 400 J", "600 J", "200 J", "800 J"],
              answer: 2,
              why: "Énergie dissipée = 800 - 600 = 200 J.",
            },
            {
              q: "Quelle est l'énergie utile d'un radiateur électrique ?",
              options: ["L'énergie thermique", "L'énergie lumineuse", "L'énergie électrique", "L'énergie cinétique"],
              answer: 0,
              why: "On veut qu'un radiateur chauffe : pour lui, l'énergie thermique est utile, et non dissipée.",
            },
            {
              q: "Une lampe reçoit 200 J et fournit 40 J de lumière. Quelle est sa part d'énergie utile ?",
              options: ["40 %", "5 %", "80 %", "20 %"],
              answer: 3,
              why: "Part utile = 40 ÷ 200 × 100 = 20 %.",
            },
            {
              q: "Pourquoi une balle qui rebondit remonte-t-elle de moins en moins haut ?",
              options: ["Parce que la Terre l'attire de plus en plus","Parce qu'une partie de son énergie est transférée à l'air et au sol", "Parce que son énergie disparaît un peu plus à chaque rebond sur le sol"],
              answer: 1,
              why: "À chaque rebond et pendant le trajet, une partie de l'énergie part dans l'environnement (chaleur, son). Elle ne disparaît pas.",
            },
          ],
          trap: "Croire que l'énergie dissipée a disparu, ou qu'elle est toujours thermique et toujours inutile : elle est transférée à l'environnement, et pour un radiateur, l'énergie thermique est justement l'énergie utile.",
          method: "Dans un bilan, écrivez d'abord la phrase « énergie reçue = énergie utile + énergie dissipée », remplacez par les valeurs connues, puis calculez l'inconnue. Vérifiez enfin que la somme des énergies de sortie redonne bien l'énergie reçue.",
        },
      ],
    },
    /* ================================================================== */
    /* LA LUMIÈRE                                                          */
    /* ================================================================== */
    {
      id: 'lumiere',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'propagation-lumiere',
          title: 'La propagation rectiligne de la lumière',
          minutes: 30,
          objectives: [
            "Distinguer une source primaire de lumière d'un objet diffusant.",
            "Exploiter la propagation rectiligne de la lumière dans le vide et dans un milieu transparent et homogène.",
            "Utiliser le modèle du rayon lumineux.",
            "Expliquer la formation des ombres et des éclipses.",
          ],
          course: [
            {
              heading: "Sources de lumière et objets diffusants",
              paragraphs: [
                "Une source primaire de lumière produit elle-même la lumière qu'elle émet : le Soleil et les autres étoiles, une flamme, une lampe allumée, un écran de téléphone allumé. Un objet diffusant ne produit pas de lumière : il renvoie dans toutes les directions une partie de la lumière qu'il reçoit. La Lune, un livre, un mur ou votre visage sont des objets diffusants.",
                "Pour voir un objet, il faut que de la lumière venant de cet objet entre dans votre œil, qui est un récepteur de lumière. Vous voyez une lampe parce qu'elle envoie sa lumière vers vos yeux ; vous voyez la Lune parce qu'elle diffuse vers la Terre la lumière qu'elle reçoit du Soleil. Dans une pièce totalement noire, sans aucune source, on ne voit rien du tout.",
              ],
              box: { label: "Définition", text: "Source primaire : objet qui produit sa propre lumière (Soleil, flamme, lampe allumée). Objet diffusant : objet qui renvoie dans toutes les directions la lumière qu'il reçoit (Lune, livre, mur)." },
            },
            {
              heading: "La lumière se propage en ligne droite",
              paragraphs: [
                "Dans le vide et dans un milieu transparent et homogène (dont la composition est la même partout), comme l'air calme, l'eau pure ou le verre, la lumière se propage en ligne droite. On dit que sa propagation est rectiligne.",
                "On le vérifie facilement. Un faisceau laser éclairant un peu de fumée ou de poussière trace une ligne droite. Les rayons du Soleil qui passent entre les nuages ou entre les arbres d'une forêt forment des traits droits. Si l'on perce trois cartons et que l'on veut voir une lampe à travers les trois trous, il faut que les trous soient parfaitement alignés.",
                "Dans un milieu non homogène, par exemple de l'air dont la température varie beaucoup au-dessus d'une route brûlante, la lumière peut se courber légèrement : c'est l'origine des mirages. Au collège, on travaille toujours dans des milieux homogènes.",
              ],
              box: { label: "Propriété", text: "Dans le vide et dans un milieu transparent et homogène, la lumière se propage en ligne droite." },
            },
            {
              heading: "Le modèle du rayon lumineux",
              paragraphs: [
                "Pour représenter le trajet de la lumière, on utilise un modèle : le rayon lumineux. C'est une ligne droite tracée à la règle, munie d'une flèche qui indique le sens de propagation, de la source vers l'objet ou vers l'œil.",
                "Un faisceau lumineux est un ensemble de rayons. On le représente par ses deux rayons extrêmes. Un faisceau peut être divergent (les rayons s'écartent, comme pour une lampe de poche), convergent (les rayons se rapprochent) ou parallèle (comme les rayons du Soleil qui arrivent sur Terre, venant de très loin).",
              ],
              box: { label: "À retenir", text: "Un rayon lumineux se représente par une droite fléchée, dans le sens de propagation de la lumière. Un faisceau se représente par ses deux rayons extrêmes." },
            },
            {
              heading: "Ombres et éclipses",
              paragraphs: [
                "Un objet opaque ne laisse pas passer la lumière. Éclairé par une source, il présente une partie éclairée et une partie sombre, appelée ombre propre. Derrière lui, la lumière ne parvient pas dans une zone de l'espace appelée cône d'ombre ; sur un écran placé derrière, on observe l'ombre portée. Pour la construire, on trace les rayons qui partent de la source et frôlent les bords de l'objet.",
                "Les éclipses s'expliquent de la même façon. Lors d'une éclipse de Lune, la Terre se place entre le Soleil et la Lune, et la Lune entre dans le cône d'ombre de la Terre : elle s'assombrit. Lors d'une éclipse de Soleil, c'est la Lune qui passe entre le Soleil et la Terre : son ombre portée tombe sur une petite région de la Terre, d'où le Soleil est caché.",
              ],
              box: { label: "Définition", text: "Ombre propre : partie non éclairée de l'objet. Ombre portée : zone sombre sur l'écran. Cône d'ombre : région de l'espace, derrière l'objet, qui ne reçoit pas de lumière de la source." },
            },
          ],
          keyPoints: [
            "Une source primaire produit sa lumière ; un objet diffusant renvoie la lumière qu'il reçoit dans toutes les directions.",
            "Pour voir un objet, de la lumière venant de lui doit entrer dans l'œil.",
            "Dans le vide et dans un milieu transparent et homogène, la lumière se propage en ligne droite.",
            "Un rayon lumineux se représente par une droite fléchée ; un faisceau, par ses deux rayons extrêmes.",
            "Ombre propre sur l'objet, ombre portée sur l'écran, cône d'ombre derrière l'objet.",
            "Éclipse de Lune : la Lune est dans l'ombre de la Terre. Éclipse de Soleil : l'ombre de la Lune tombe sur la Terre.",
          ],
          example: {
            statement: "Dans une pièce sombre, une petite lampe éclaire une balle posée devant un mur blanc. Décrivez ce que l'on observe sur la balle et sur le mur, puis expliquez pourquoi l'ombre sur le mur est un disque sombre bien délimité.",
            solution: [
              "La lampe est une source primaire ; la balle et le mur sont des objets diffusants : on les voit parce qu'ils renvoient vers nos yeux une partie de la lumière de la lampe.",
              "La moitié de la balle tournée vers la lampe est éclairée ; l'autre moitié est sombre : c'est l'ombre propre de la balle.",
              "Sur le mur, une zone sombre apparaît derrière la balle : c'est l'ombre portée.",
              "La lumière se propage en ligne droite : les rayons qui partent de la lampe et frôlent le bord de la balle délimitent un cône d'ombre. Aucun rayon ne peut contourner la balle pour atteindre l'intérieur de ce cône.",
              "Réponse : on observe l'ombre propre sur la balle et l'ombre portée sur le mur ; l'ombre portée a la forme d'un disque car elle est délimitée par les rayons rectilignes qui frôlent le contour de la balle.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les objets suivants en sources primaires et en objets diffusants : le Soleil, la Lune, une bougie allumée, une feuille de papier, l'écran allumé d'une tablette, un nuage, une étoile, un vélo.",
              hint: "Demandez-vous si l'objet produit lui-même la lumière ou s'il ne fait que renvoyer celle qu'il reçoit. Que se passe-t-il si on l'enferme dans une pièce noire ?",
              solution: [
                "Le Soleil et les étoiles produisent leur propre lumière : sources primaires.",
                "La bougie allumée et l'écran allumé produisent leur lumière : sources primaires.",
                "La Lune, la feuille, le nuage et le vélo ne font que renvoyer la lumière reçue (du Soleil ou d'une lampe) : dans le noir, on ne les verrait pas.",
                "Réponse : sources primaires : Soleil, bougie allumée, écran allumé, étoile ; objets diffusants : Lune, feuille de papier, nuage, vélo.",
              ],
            },
            {
              level: 2,
              statement: "Au même moment, au soleil, un bâton vertical de 1,2 m de haut a une ombre de 1,8 m de long, et une tour verticale a une ombre de 36 m de long (données fictives). Les rayons du Soleil arrivent parallèles entre eux. 1) Expliquez pourquoi l'ombre de la tour est proportionnelle à sa hauteur. 2) Calculez la hauteur de la tour.",
              hint: "Les rayons étant parallèles, le rapport entre la longueur de l'ombre et la hauteur est le même pour le bâton et pour la tour. Calculez ce rapport avec le bâton.",
              solution: [
                "1) Les rayons du Soleil sont parallèles et se propagent en ligne droite : ils arrivent avec la même inclinaison sur le bâton et sur la tour. L'ombre est donc toujours la même fraction de la hauteur.",
                "2) Pour le bâton : longueur de l'ombre ÷ hauteur = 1,8 ÷ 1,2 = 1,5. L'ombre est 1,5 fois plus longue que l'objet.",
                "Pour la tour : hauteur = 36 ÷ 1,5 = 24 m.",
                "Vérification : 24 × 1,5 = 36 m, c'est bien la longueur de l'ombre.",
                "Réponse : la tour mesure 24 m.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Pour un théâtre d'ombres, on place une lampe très petite (considérée comme un point), une figurine plate de 5 cm de haut à 20 cm de la lampe, et un écran à 60 cm de la lampe. La figurine est parallèle à l'écran. 1) Faites un schéma en traçant les deux rayons qui frôlent le haut et le bas de la figurine. 2) L'écran est 3 fois plus loin de la lampe que la figurine : expliquez pourquoi l'ombre portée est 3 fois plus haute que la figurine, puis donnez sa hauteur. 3) À quelle distance de la lampe faut-il placer la figurine pour obtenir une ombre de 20 cm de haut ? 4) Avec une grosse lampe, les bords de l'ombre deviennent flous. Proposez une explication.",
              hint: "Tous les rayons partent du même point : l'écart entre les deux rayons qui frôlent la figurine augmente proportionnellement à la distance à la lampe. Pour la question 3, cherchez combien de fois l'ombre doit être plus grande que la figurine.",
              solution: [
                "1) On dessine la lampe (un point), la figurine (un segment vertical) et l'écran ; on trace à la règle deux rayons fléchés partant de la lampe et passant par le haut et par le bas de la figurine, jusqu'à l'écran. L'ombre portée est la partie de l'écran comprise entre ces deux rayons.",
                "2) Les deux rayons partent du même point et sont des droites : leur écart grandit régulièrement avec la distance à la lampe. À 20 cm, l'écart vaut 5 cm (la hauteur de la figurine) ; à 60 cm, soit 3 fois plus loin, il est 3 fois plus grand : 5 × 3 = 15 cm.",
                "3) On veut une ombre de 20 cm, soit 20 ÷ 5 = 4 fois la hauteur de la figurine. L'écran doit donc être 4 fois plus loin de la lampe que la figurine : 60 ÷ 4 = 15 cm. Il faut placer la figurine à 15 cm de la lampe.",
                "4) Une grosse lampe n'est pas un point : chaque partie de la lampe donne sa propre ombre, un peu décalée. Au bord, certaines zones de l'écran reçoivent la lumière d'une partie seulement de la lampe : elles sont à moitié éclairées (on parle de pénombre), d'où des bords flous.",
                "Réponse : ombre de 15 cm ; figurine à 15 cm de la lampe pour une ombre de 20 cm ; bords flous dus à la taille de la lampe (pénombre).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? La propagation de la lumière.",
            statements: [
              { text: "La Lune est une source primaire de lumière.", true: false, why: "La Lune ne produit pas de lumière : elle diffuse celle qu'elle reçoit du Soleil." },
              { text: "On voit un livre parce que de la lumière part de nos yeux vers lui.", true: false, why: "C'est l'inverse : le livre diffuse de la lumière, qui entre dans nos yeux." },
              { text: "Dans l'air calme, la lumière se propage en ligne droite.", true: true, why: "L'air calme est un milieu transparent et homogène : la propagation y est rectiligne." },
              { text: "La lumière peut se propager dans le vide.", true: true, why: "La lumière du Soleil traverse le vide de l'espace pour arriver jusqu'à nous." },
              { text: "L'ombre portée se trouve sur l'objet éclairé.", true: false, why: "Sur l'objet, c'est l'ombre propre ; l'ombre portée est sur l'écran ou le sol, derrière l'objet." },
              { text: "Lors d'une éclipse de Lune, la Lune se trouve dans l'ombre de la Terre.", true: true, why: "La Terre est alors entre le Soleil et la Lune, qui entre dans son cône d'ombre." },
              { text: "Un rayon lumineux se dessine à main levée, avec une courbe.", true: false, why: "Il se trace à la règle : c'est une droite, munie d'une flèche indiquant le sens de propagation." },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces objets est une source primaire de lumière ?",
              options: ["Une bougie allumée", "La Lune", "Un miroir", "Une feuille blanche"],
              answer: 0,
              why: "La bougie produit elle-même sa lumière. La Lune, le miroir et la feuille renvoient la lumière qu'ils reçoivent.",
            },
            {
              q: "Dans quel milieu la lumière se propage-t-elle en ligne droite ?",
              options: ["Seulement dans l'air, jamais dans l'eau ni dans le verre", "Dans un milieu transparent et homogène", "Seulement dans le vide", "Dans tous les milieux, même dans un mur"],
              answer: 1,
              why: "La propagation est rectiligne dans le vide et dans tout milieu transparent et homogène (air calme, eau, verre).",
            },
            {
              q: "Comment appelle-t-on la zone sombre qui apparaît sur un écran derrière un objet éclairé ?",
              options: ["L'ombre propre", "La pénombre", "Le faisceau", "L'ombre portée"],
              answer: 3,
              why: "L'ombre portée est sur l'écran ; l'ombre propre est la partie non éclairée de l'objet lui-même.",
            },
            {
              q: "Que se passe-t-il lors d'une éclipse de Soleil ?",
              options: ["La Terre passe entre le Soleil et la Lune", "Le Soleil s'éteint un instant", "La Lune passe entre le Soleil et la Terre"],
              answer: 2,
              why: "La Lune cache le Soleil : son ombre portée tombe sur une région de la Terre.",
            },
            {
              q: "Comment représente-t-on un rayon lumineux ?",
              options: ["Par une ligne ondulée sans flèche", "Par une droite fléchée", "Par un point lumineux", "Par un cercle"],
              answer: 1,
              why: "Un rayon lumineux se modélise par une droite, avec une flèche dans le sens de propagation.",
            },
          ],
          trap: "Croire que l'on voit grâce à quelque chose qui part de l'œil, ou que la Lune brille par elle-même : c'est toujours la lumière venant de l'objet qui entre dans l'œil, et la Lune ne fait que diffuser la lumière du Soleil.",
          method: "Pour construire une ombre, placez d'abord la source, puis tracez à la règle les rayons qui partent de la source et frôlent les bords de l'objet, jusqu'à l'écran : l'ombre portée est la zone de l'écran comprise entre ces rayons.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'vitesse-lumiere',
          title: 'La vitesse de la lumière et l\'année-lumière',
          minutes: 30,
          objectives: [
            "Citer la valeur de la vitesse de la lumière dans le vide.",
            "Relier la distance parcourue par la lumière à la durée de propagation.",
            "Utiliser l'année-lumière comme unité de distance.",
            "Exprimer de très grandes distances à l'aide des puissances de dix.",
          ],
          course: [
            {
              heading: "Une vitesse immense, mais pas infinie",
              paragraphs: [
                "Quand on allume une lampe, la pièce semble éclairée instantanément. Pourtant, la lumière met un peu de temps à se propager. En 1676, l'astronome danois Ole Rømer l'a montré en observant un satellite de Jupiter, dont les éclipses semblaient en avance ou en retard selon la distance entre la Terre et Jupiter.",
                "Dans le vide, la lumière se propage à 299 792 458 m/s. On retient la valeur arrondie : environ 300 000 km/s, soit 3 × 10⁸ m/s. Dans l'air, elle est presque aussi rapide. Dans l'eau, elle est plus lente (environ 225 000 km/s), et dans le verre encore un peu plus (environ 200 000 km/s).",
                "Pour vous en faire une idée : le tour de la Terre mesure environ 40 000 km. En une seule seconde, la lumière pourrait donc en faire environ 300 000 ÷ 40 000 = 7,5 fois le tour.",
              ],
              box: { label: "Repère", text: "Vitesse de la lumière dans le vide (et presque dans l'air) : c ≈ 300 000 km/s = 3 × 10⁸ m/s. C'est la plus grande vitesse possible." },
            },
            {
              heading: "Calculer une distance ou une durée",
              paragraphs: [
                "Comme pour tout mouvement, la vitesse v, la distance d et la durée t sont liées par v = d ÷ t. On en déduit d = v × t et t = d ÷ v. Il faut utiliser des unités qui vont ensemble : si la vitesse est en km/s, la distance est en km et la durée en s.",
                "Exemple : le Soleil est à environ 150 000 000 km de la Terre. Sa lumière met t = 150 000 000 ÷ 300 000 = 500 s pour nous parvenir, soit 8 min 20 s. La Lune est à environ 384 000 km : sa lumière met t = 384 000 ÷ 300 000 = 1,28 s.",
              ],
              box: { label: "Formule", text: "v = d ÷ t, donc d = v × t et t = d ÷ v. Avec v en km/s, d est en km et t en s." },
            },
            {
              heading: "L'année-lumière, une unité de distance",
              paragraphs: [
                "Les distances entre les étoiles sont si grandes que le kilomètre ne suffit plus. Les astronomes utilisent l'année-lumière (symbole al) : c'est la distance parcourue par la lumière dans le vide en une année.",
                "Calculons-la. Une année dure environ 365,25 × 24 × 3 600 ≈ 31 557 600 s. En une année, la lumière parcourt donc environ 300 000 × 31 557 600 ≈ 9,47 × 10¹² km. Avec la valeur exacte de la vitesse, on obtient 1 al ≈ 9,46 × 10¹² km, soit près de 9 500 milliards de kilomètres.",
                "Attention : malgré son nom, l'année-lumière n'est pas une durée, c'est une distance. L'étoile la plus proche du Soleil, Proxima du Centaure, est à environ 4,2 al ; l'étoile Sirius, la plus brillante de notre ciel nocturne, à environ 8,6 al ; la galaxie d'Andromède à environ 2,5 millions d'al.",
              ],
              box: { label: "Définition", text: "L'année-lumière (al) est la distance parcourue par la lumière dans le vide en une année : 1 al ≈ 9,46 × 10¹² km. C'est une distance, pas une durée." },
            },
            {
              heading: "Voir loin, c'est voir dans le passé",
              paragraphs: [
                "Puisque la lumière met du temps à arriver, nous voyons toujours les objets tels qu'ils étaient au moment où leur lumière est partie. Nous voyons le Soleil tel qu'il était il y a environ 8 minutes, et Proxima du Centaure telle qu'elle était il y a environ 4,2 ans. La lumière de la galaxie d'Andromède que nous recevons ce soir est partie il y a environ 2,5 millions d'années.",
              ],
            },
          ],
          keyPoints: [
            "Dans le vide, la lumière se propage à environ 300 000 km/s, soit 3 × 10⁸ m/s.",
            "d = v × t et t = d ÷ v, avec des unités cohérentes (km, s, km/s).",
            "La lumière du Soleil met environ 8 min 20 s pour arriver sur Terre.",
            "L'année-lumière est la distance parcourue par la lumière en un an : 1 al ≈ 9,46 × 10¹² km.",
            "L'année-lumière est une distance, pas une durée.",
            "Un objet situé à N années-lumière est vu tel qu'il était il y a N années.",
          ],
          example: {
            statement: "Jupiter est à environ 778 000 000 km du Soleil. Calculez la durée que met la lumière du Soleil pour atteindre Jupiter. Exprimez-la en secondes, puis en minutes.",
            solution: [
              "On cherche une durée : t = d ÷ v.",
              "Données : d = 778 000 000 km et v = 300 000 km/s (les unités sont cohérentes).",
              "t = 778 000 000 ÷ 300 000 ≈ 2 593 s.",
              "En minutes : 2 593 ÷ 60 ≈ 43,2 min.",
              "Réponse : la lumière du Soleil met environ 2 600 s, soit environ 43 minutes, pour atteindre Jupiter.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "La lumière du Soleil met 8 min 20 s pour arriver sur Terre. 1) Convertissez cette durée en secondes. 2) Calculez la distance entre le Soleil et la Terre, en prenant v = 300 000 km/s.",
              hint: "1 min = 60 s. Ensuite, utilisez d = v × t avec t en secondes.",
              solution: [
                "1) 8 min = 8 × 60 = 480 s, donc 8 min 20 s = 480 + 20 = 500 s.",
                "2) d = v × t = 300 000 × 500 = 150 000 000 km.",
                "Réponse : le Soleil est à environ 150 000 000 km (150 millions de km) de la Terre.",
              ],
            },
            {
              level: 2,
              statement: "Des astronautes des missions Apollo ont déposé des réflecteurs sur la Lune. Depuis la Terre, on envoie vers eux une brève impulsion laser, qui revient après 2,56 s (valeur arrondie). On prend v = 300 000 km/s. 1) Quelle distance la lumière a-t-elle parcourue pendant ces 2,56 s ? 2) Déduisez-en la distance entre la Terre et la Lune.",
              hint: "La lumière fait un aller et un retour : la distance Terre-Lune est la moitié de la distance totale parcourue.",
              solution: [
                "1) Distance parcourue (aller et retour) : d = v × t = 300 000 × 2,56 = 768 000 km.",
                "2) La lumière a fait l'aller et le retour : distance Terre-Lune = 768 000 ÷ 2 = 384 000 km.",
                "Réponse : la Lune est à environ 384 000 km de la Terre.",
              ],
            },
            {
              level: 3,
              statement: "Défi. L'étoile Sirius est à environ 8,6 années-lumière de la Terre. On prend 1 al = 9,46 × 10¹² km. 1) Exprimez cette distance en kilomètres, avec une puissance de dix. 2) Un élève dit : « Sirius est à 8,6 années-lumière, donc elle a 8,6 ans. » Corrigez-le, puis dites ce que l'on voit réellement en regardant Sirius. 3) Une sonde spatiale voyage à 17 km/s (c'est à peu près la vitesse de la sonde Voyager 1). Combien de fois la lumière est-elle plus rapide que cette sonde ? 4) Déduisez-en, sans calculer de distance, la durée approximative du voyage de la sonde jusqu'à Sirius.",
              hint: "Pour la question 4 : la lumière met 8,6 ans pour aller jusqu'à Sirius. Une sonde qui va N fois moins vite met N fois plus de temps.",
              solution: [
                "1) d = 8,6 × 9,46 × 10¹² = 81,356 × 10¹² km ≈ 8,1 × 10¹³ km.",
                "2) L'année-lumière est une distance, pas une durée : 8,6 al ne dit rien sur l'âge de l'étoile. Cela signifie que la lumière met environ 8,6 ans pour venir de Sirius jusqu'à nous : nous voyons Sirius telle qu'elle était il y a environ 8,6 ans.",
                "3) 300 000 ÷ 17 ≈ 17 647 : la lumière est environ 17 600 fois plus rapide que la sonde.",
                "4) La lumière met 8,6 ans ; la sonde met environ 17 647 fois plus de temps : 8,6 × 17 647 ≈ 151 800 ans.",
                "Réponse : Sirius est à environ 8,1 × 10¹³ km ; on la voit telle qu'elle était il y a 8,6 ans ; la sonde mettrait environ 150 000 ans pour l'atteindre.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Rangez ces objets du plus proche au plus lointain de la Terre.",
            items: [
              "La Lune (environ 1,3 seconde-lumière)",
              "Le Soleil (environ 8 minutes-lumière)",
              "La planète Jupiter",
              "L'étoile Proxima du Centaure (environ 4,2 al)",
              "L'étoile Sirius (environ 8,6 al)",
              "Le centre de notre galaxie, la Voie lactée",
              "La galaxie d'Andromède (environ 2,5 millions d'al)",
            ],
          },
          quiz: [
            {
              q: "Quelle est la vitesse de la lumière dans le vide, arrondie ?",
              options: ["340 m/s", "300 000 km/h", "300 000 km/s", "3 000 km/s"],
              answer: 2,
              why: "La lumière parcourt environ 300 000 km chaque seconde. 340 m/s est la vitesse du son dans l'air.",
            },
            {
              q: "Qu'est-ce qu'une année-lumière ?",
              options: ["Une distance", "Une durée", "Une vitesse", "Une quantité de lumière"],
              answer: 0,
              why: "C'est la distance parcourue par la lumière dans le vide en une année, environ 9,46 × 10¹² km.",
            },
            {
              q: "Combien de temps la lumière du Soleil met-elle pour arriver sur Terre ?",
              options: ["Moins d'une seconde", "Environ 8 heures", "Environ 1 an", "Environ 8 minutes"],
              answer: 3,
              why: "t = 150 000 000 ÷ 300 000 = 500 s, soit 8 min 20 s.",
            },
            {
              q: "Quelle formule permet de calculer une durée de propagation ?",
              options: ["t = d × v", "t = d ÷ v", "t = v ÷ d"],
              answer: 1,
              why: "De v = d ÷ t, on déduit t = d ÷ v.",
            },
            {
              q: "Une galaxie est à 2,5 millions d'années-lumière. Que voit-on en l'observant ?",
              options: ["Son état actuel, au moment même où on la regarde", "Son état futur, dans 2,5 millions d'années", "Son état d'il y a 2,5 millions d'années"],
              answer: 2,
              why: "Sa lumière a voyagé 2,5 millions d'années avant de nous atteindre : on voit le passé de cette galaxie.",
            },
          ],
          trap: "Prendre l'année-lumière pour une durée, ou mélanger les unités dans le calcul (une vitesse en km/s avec une durée en minutes) : l'année-lumière est une distance, et la durée doit être convertie en secondes avant de multiplier par 300 000 km/s.",
          method: "Avant tout calcul, écrivez la formule, puis vérifiez que les unités vont ensemble (km, s et km/s). Contrôlez ensuite l'ordre de grandeur : quelques secondes pour la Lune, quelques minutes pour le Soleil, des années pour les étoiles.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'couleurs',
          title: 'Lumières colorées et couleur des objets',
          minutes: 35,
          objectives: [
            "Décrire la décomposition de la lumière blanche par un prisme.",
            "Expliquer la synthèse additive des lumières colorées.",
            "Prévoir la lumière transmise par un filtre coloré.",
            "Expliquer la couleur d'un objet éclairé en lumière blanche ou colorée.",
          ],
          course: [
            {
              heading: "La lumière blanche, un mélange de couleurs",
              paragraphs: [
                "Au XVIIe siècle, Isaac Newton fait passer la lumière du Soleil à travers un prisme de verre. Sur un écran, il obtient une bande de couleurs, du rouge au violet en passant par l'orange, le jaune, le vert et le bleu. Cette bande s'appelle le spectre de la lumière blanche. Les couleurs s'y succèdent sans interruption : on dit que le spectre est continu.",
                "La lumière blanche est donc un mélange de lumières colorées. Le prisme ne crée pas les couleurs : il les sépare. Un arc-en-ciel se forme de la même manière, quand la lumière du Soleil traverse des gouttes de pluie qui la décomposent.",
                "Une lumière qui contient plusieurs couleurs est dite polychromatique, comme la lumière blanche. La lumière d'un laser ne contient qu'une seule couleur : elle est monochromatique, et un prisme ne la décompose pas.",
              ],
              box: { label: "À retenir", text: "La lumière blanche est un mélange de lumières colorées. Un prisme la décompose en un spectre continu, du rouge au violet." },
            },
            {
              heading: "La synthèse additive",
              paragraphs: [
                "On peut aussi faire l'inverse : superposer des lumières colorées sur un écran blanc. Avec trois projecteurs rouge, vert et bleu, on observe : rouge + vert = jaune ; vert + bleu = cyan (un bleu clair) ; rouge + bleu = magenta (un rose violacé) ; rouge + vert + bleu = blanc. C'est la synthèse additive. Le rouge, le vert et le bleu sont les trois couleurs primaires de la synthèse additive.",
                "Les écrans de téléphones, d'ordinateurs et de télévisions utilisent ce principe. Chaque point de l'écran (un pixel) contient trois minuscules sources, rouge, verte et bleue. En les allumant plus ou moins fort, l'écran fabrique toutes les couleurs : un pixel où seuls le rouge et le vert sont allumés paraît jaune.",
              ],
              box: { label: "Règle", text: "Synthèse additive : rouge + vert = jaune ; vert + bleu = cyan ; rouge + bleu = magenta ; rouge + vert + bleu = blanc." },
            },
            {
              heading: "Les filtres colorés",
              paragraphs: [
                "Un filtre coloré est une plaque transparente teintée. Il laisse passer les lumières de sa couleur et absorbe les autres. Éclairé en lumière blanche, un filtre rouge ne laisse passer que le rouge ; éclairé en lumière verte, il ne laisse rien passer : derrière lui, c'est le noir.",
                "Un filtre jaune laisse passer le rouge et le vert (dont le mélange donne du jaune) et absorbe le bleu. Un filtre cyan laisse passer le vert et le bleu ; un filtre magenta laisse passer le rouge et le bleu. Un filtre n'ajoute jamais de couleur : il ne peut qu'en retirer.",
              ],
              box: { label: "Propriété", text: "Un filtre coloré transmet les lumières de sa couleur et absorbe les autres. Il ne crée aucune couleur." },
            },
            {
              heading: "La couleur des objets",
              paragraphs: [
                "Un objet coloré éclairé diffuse les lumières de sa couleur et absorbe les autres. En lumière blanche, une tomate paraît rouge parce qu'elle diffuse le rouge et absorbe le vert et le bleu. Un objet blanc diffuse toutes les couleurs ; un objet noir les absorbe toutes.",
                "La couleur que l'on voit dépend donc aussi de la lumière qui éclaire l'objet. Éclairée en lumière verte, la tomate n'a plus de rouge à diffuser : elle absorbe le vert et paraît noire. Une feuille blanche éclairée en lumière rouge paraît rouge, puisqu'elle diffuse toute la lumière qu'elle reçoit. C'est pour cela que les couleurs changent sur une scène de concert éclairée par des projecteurs colorés.",
              ],
              box: { label: "À retenir", text: "Un objet diffuse les lumières de sa couleur et absorbe les autres. S'il ne reçoit aucune lumière de sa couleur, il paraît noir. Un objet blanc prend la couleur de la lumière qui l'éclaire." },
            },
          ],
          keyPoints: [
            "La lumière blanche est un mélange de lumières colorées ; un prisme la décompose en un spectre continu.",
            "La lumière d'un laser est monochromatique : elle ne contient qu'une couleur.",
            "Synthèse additive : rouge + vert = jaune ; vert + bleu = cyan ; rouge + bleu = magenta ; rouge + vert + bleu = blanc.",
            "Un filtre transmet les lumières de sa couleur et absorbe les autres.",
            "Un objet diffuse les lumières de sa couleur et absorbe les autres ; sans lumière de sa couleur, il paraît noir.",
          ],
          example: {
            statement: "Sur une scène, un chanteur porte un t-shirt rouge et un pantalon blanc (couleurs vues en lumière blanche). On l'éclaire avec un projecteur vert. De quelle couleur le public voit-il le t-shirt et le pantalon ?",
            solution: [
              "Le t-shirt rouge diffuse seulement le rouge et absorbe le vert et le bleu.",
              "Éclairé en vert, il reçoit uniquement du vert, qu'il absorbe : il ne diffuse rien vers le public, il paraît noir.",
              "Le pantalon blanc diffuse toutes les couleurs qu'il reçoit.",
              "Éclairé en vert, il diffuse le vert : il paraît vert.",
              "Réponse : le t-shirt paraît noir et le pantalon paraît vert.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Sur un écran blanc, on superpose des lumières colorées. Quelle couleur obtient-on dans chaque cas ? a) rouge + vert ; b) rouge + bleu ; c) vert + bleu ; d) rouge + vert + bleu.",
              hint: "Appliquez la règle de la synthèse additive du cours. Les trois couleurs primaires ensemble redonnent la lumière blanche.",
              solution: [
                "a) Rouge + vert = jaune.",
                "b) Rouge + bleu = magenta.",
                "c) Vert + bleu = cyan.",
                "d) Rouge + vert + bleu = blanc.",
                "Réponse : jaune, magenta, cyan, blanc.",
              ],
            },
            {
              level: 2,
              statement: "On éclaire un filtre avec une lumière, et on observe la lumière qui sort. Prévoyez la couleur obtenue dans chaque cas : a) filtre rouge éclairé en lumière blanche ; b) filtre bleu éclairé en lumière rouge ; c) filtre jaune éclairé en lumière blanche ; d) filtre jaune éclairé en lumière bleue ; e) filtre cyan éclairé en lumière verte.",
              hint: "Rappelez-vous ce que chaque filtre laisse passer : jaune (rouge et vert), cyan (vert et bleu). Cherchez ensuite ce qui reste de la lumière qui arrive.",
              solution: [
                "a) Le filtre rouge garde le rouge de la lumière blanche : on obtient du rouge.",
                "b) Le filtre bleu ne laisse passer que le bleu ; la lumière rouge est absorbée : on obtient du noir (pas de lumière).",
                "c) Le filtre jaune laisse passer le rouge et le vert de la lumière blanche : on obtient du jaune.",
                "d) Le filtre jaune absorbe le bleu : on obtient du noir.",
                "e) Le filtre cyan laisse passer le vert : on obtient du vert.",
                "Réponse : a) rouge ; b) noir ; c) jaune ; d) noir ; e) vert.",
              ],
            },
            {
              level: 3,
              statement: "Défi. 1) Un pixel d'écran doit afficher du magenta. Quelles sources du pixel faut-il allumer ? Et pour afficher du blanc ? Et du noir ? 2) On place un filtre jaune puis, juste derrière, un filtre cyan devant une lampe blanche. Quelle couleur sort ? Justifiez étape par étape. 3) Une banane (jaune en lumière blanche) est éclairée successivement en lumière rouge, en lumière verte, puis en lumière bleue. Quelle couleur paraît-elle avoir à chaque fois ? On admet qu'elle diffuse le rouge et le vert et qu'elle absorbe le bleu.",
              hint: "Pour les écrans, pensez synthèse additive. Pour les filtres superposés, suivez la lumière : le premier filtre retire certaines couleurs, le second en retire d'autres parmi celles qui restent.",
              solution: [
                "1) Magenta = rouge + bleu : on allume les sources rouge et bleue. Blanc = rouge + vert + bleu : on allume les trois. Noir : on n'allume aucune source.",
                "2) La lumière blanche contient du rouge, du vert et du bleu. Le filtre jaune laisse passer le rouge et le vert et absorbe le bleu. Il reste rouge et vert. Le filtre cyan laisse passer le vert et le bleu : il absorbe le rouge. Il ne reste que le vert : la lumière qui sort est verte.",
                "3) En lumière rouge, la banane diffuse le rouge : elle paraît rouge. En lumière verte, elle diffuse le vert : elle paraît verte. En lumière bleue, elle absorbe le bleu : elle paraît noire.",
                "Réponse : 1) rouge et bleu pour le magenta, les trois pour le blanc, aucune pour le noir ; 2) vert ; 3) rouge, puis verte, puis noire.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque situation à la couleur observée.",
            pairs: [
              { left: "Lumière rouge + lumière verte", right: "Jaune" },
              { left: "Lumière verte + lumière bleue", right: "Cyan" },
              { left: "Lumière rouge + lumière bleue", right: "Magenta" },
              { left: "Rouge + vert + bleu", right: "Blanc" },
              { left: "Tomate éclairée en lumière verte", right: "Noir" },
              { left: "Filtre rouge éclairé en lumière blanche", right: "Rouge" },
            ],
          },
          quiz: [
            {
              q: "Que fait un prisme à la lumière blanche ?",
              options: ["Il la colore en rouge", "Il la décompose en ses couleurs", "Il la transforme en lumière laser"],
              answer: 1,
              why: "La lumière blanche contient toutes les couleurs ; le prisme les sépare, il ne les crée pas.",
            },
            {
              q: "Quelle couleur obtient-on en superposant une lumière rouge et une lumière verte ?",
              options: ["Du marron", "Du blanc", "Du jaune", "Du cyan"],
              answer: 2,
              why: "En synthèse additive, rouge + vert = jaune.",
            },
            {
              q: "Un objet vert est éclairé en lumière rouge. Quelle couleur paraît-il avoir ?",
              options: ["Noir", "Vert", "Rouge", "Jaune"],
              answer: 0,
              why: "L'objet vert absorbe le rouge et ne reçoit pas de vert à diffuser : il paraît noir.",
            },
            {
              q: "Que laisse passer un filtre jaune ?",
              options: ["Seulement le bleu", "Le rouge et le bleu", "Le vert et le bleu", "Le rouge et le vert"],
              answer: 3,
              why: "Le jaune est le mélange du rouge et du vert : le filtre jaune transmet ces deux lumières et absorbe le bleu.",
            },
            {
              q: "Pourquoi une feuille blanche paraît-elle bleue en lumière bleue ?",
              options: ["Parce qu'elle absorbe le bleu", "Parce qu'elle est en réalité bleue, mais on ne le voit pas en lumière blanche", "Parce qu'elle diffuse toute la lumière qu'elle reçoit"],
              answer: 2,
              why: "Un objet blanc diffuse toutes les couleurs : éclairé en bleu, il renvoie du bleu.",
            },
          ],
          trap: "Mélanger les lumières comme des peintures : en superposant des lumières, rouge + vert donne du jaune (et non du marron), et les trois lumières primaires ensemble donnent du blanc (et non du noir).",
          method: "Pour prévoir une couleur, décomposez toujours en rouge, vert et bleu : écrivez ce que contient la lumière qui arrive, rayez ce que le filtre ou l'objet absorbe, et regardez ce qui reste. S'il ne reste rien, c'est noir.",
        },
      ],
    },
    /* ================================================================== */
    /* LE SON                                                              */
    /* ================================================================== */
    {
      id: 'son',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'propagation-son',
          title: 'Production et propagation du son',
          minutes: 30,
          objectives: [
            "Décrire comment un son est produit par la vibration d'un objet.",
            "Décrire les conditions de propagation d'un son.",
            "Expliquer pourquoi le son ne se propage pas dans le vide.",
            "Identifier l'émetteur, le milieu de propagation et le récepteur d'un signal sonore.",
          ],
          course: [
            {
              heading: "Un son naît d'une vibration",
              paragraphs: [
                "Tout son est produit par un objet qui vibre, c'est-à-dire qui effectue des allers-retours très rapides autour de sa position. Cet objet est la source sonore (ou l'émetteur). Quand on pince une corde de guitare, elle vibre ; quand on frappe un tambour, sa peau vibre ; dans un haut-parleur, c'est une membrane qui vibre.",
                "Votre voix aussi est produite par une vibration : celle de vos cordes vocales, dans la gorge. Posez les doigts sur votre cou en parlant : vous sentez la vibration. Si l'on pose des grains de riz sur un tambour et qu'on le frappe, les grains sautent. Et si l'on bloque la vibration, par exemple en posant la main sur une cymbale, le son s'arrête aussitôt.",
              ],
              box: { label: "Définition", text: "Un son est produit par la vibration d'un objet, appelé source sonore ou émetteur. Sans vibration, il n'y a pas de son." },
            },
            {
              heading: "Le son a besoin de matière pour se propager",
              paragraphs: [
                "Le son se propage dans les gaz (l'air), dans les liquides (un plongeur entend le moteur d'un bateau) et dans les solides (l'oreille collée à une table, on entend très bien un doigt qui gratte l'autre bout). Ces milieux sont des milieux matériels.",
                "Le son ne se propage pas dans le vide. On le montre avec une expérience : on place une sonnerie qui fonctionne sous une cloche en verre, puis on retire l'air de la cloche avec une pompe. Le son devient de plus en plus faible, jusqu'à presque disparaître, alors qu'on voit toujours le marteau frapper la sonnerie. La lumière, elle, traverse le vide.",
                "Dans l'espace, où règne le vide, il n'y a donc aucun son : les explosions des films de science-fiction sont silencieuses en réalité. Les astronautes communiquent par radio, car les ondes radio, comme la lumière, se propagent dans le vide.",
              ],
              box: { label: "Propriété", text: "Le son a besoin d'un milieu matériel (gaz, liquide ou solide) pour se propager. Il ne se propage pas dans le vide, contrairement à la lumière." },
            },
            {
              heading: "Comment le son voyage",
              paragraphs: [
                "Quand la source vibre, elle pousse les particules d'air qui la touchent ; celles-ci poussent leurs voisines, qui poussent les suivantes, et ainsi de suite. La vibration se transmet de proche en proche, comme une rangée de dominos qui tombent ou comme une « ola » dans un stade : chaque spectateur reste à sa place, mais la vague fait le tour du stade.",
                "La matière ne se déplace donc pas avec le son : chaque particule d'air vibre seulement autour de sa position. Ce qui voyage, c'est la vibration. Le son part dans toutes les directions autour de la source, et il s'affaiblit à mesure qu'on s'éloigne d'elle.",
              ],
            },
            {
              heading: "Recevoir un son",
              paragraphs: [
                "Un récepteur sonore capte la vibration : l'oreille ou un microphone. Dans l'oreille, le pavillon recueille le son, qui suit le conduit auditif et fait vibrer le tympan, une fine membrane. De petits os, les osselets, transmettent cette vibration à la cochlée, où des cellules ciliées la transforment en messages nerveux. Le nerf auditif conduit ces messages au cerveau, qui les interprète.",
                "Le niveau sonore se mesure en décibels (dB) avec un sonomètre. Une exposition prolongée à partir d'environ 85 dB est dangereuse pour l'audition, et vers 120 dB le son devient douloureux. Les cellules ciliées détruites ne se réparent pas : une perte d'audition due au bruit est définitive. Protégez vos oreilles au concert et limitez le volume de vos écouteurs.",
              ],
              box: { label: "À retenir", text: "Chaîne de transmission d'un son : émetteur (objet qui vibre) → milieu matériel (air, eau, solide) → récepteur (oreille, microphone)." },
            },
          ],
          keyPoints: [
            "Un son est produit par un objet qui vibre : la source sonore.",
            "Le son se propage dans les gaz, les liquides et les solides, mais pas dans le vide.",
            "La vibration se transmet de proche en proche ; la matière, elle, ne voyage pas avec le son.",
            "Émetteur → milieu matériel → récepteur (oreille, microphone).",
            "Niveau sonore en décibels (dB) : danger à partir d'environ 85 dB en exposition prolongée, douleur vers 120 dB.",
          ],
          example: {
            statement: "Dans un film de science-fiction, on entend un grand bruit lorsqu'un vaisseau spatial explose loin dans l'espace, devant les yeux d'astronautes placés dans un autre vaisseau. Cette scène est-elle réaliste ? Justifiez.",
            solution: [
              "Pour qu'un son soit entendu, il faut un émetteur qui vibre, un milieu matériel pour transmettre la vibration, et un récepteur.",
              "Entre les deux vaisseaux, il y a le vide de l'espace : il n'y a pas de matière pour transmettre la vibration.",
              "Le son de l'explosion ne peut donc pas parvenir jusqu'aux astronautes.",
              "En revanche, la lumière se propage dans le vide : les astronautes peuvent voir l'explosion.",
              "Réponse : la scène n'est pas réaliste ; l'explosion serait visible mais silencieuse.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque source sonore, nommez la partie qui vibre : a) une guitare ; b) un tambour ; c) la voix humaine ; d) un haut-parleur ; e) une abeille qui bourdonne.",
              hint: "Cherchez la partie de l'objet qui fait des allers-retours rapides quand le son est émis.",
              solution: [
                "a) Guitare : les cordes.",
                "b) Tambour : la peau (la membrane tendue).",
                "c) Voix : les cordes vocales.",
                "d) Haut-parleur : la membrane.",
                "e) Abeille : les ailes, qui battent très vite.",
                "Réponse : cordes, peau, cordes vocales, membrane, ailes.",
              ],
            },
            {
              level: 2,
              statement: "On place une sonnerie électrique en marche sous une cloche en verre reliée à une pompe à vide. 1) Au début, la cloche contient de l'air : qu'entend-on ? 2) On pompe l'air progressivement : comment le son évolue-t-il ? 3) Quand presque tout l'air est retiré, on voit toujours le marteau frapper la sonnerie. Que peut-on en conclure sur la propagation du son et sur celle de la lumière ? 4) On laisse l'air rentrer. Que se passe-t-il ?",
              hint: "Le son a besoin d'un milieu matériel. Demandez-vous ce qui reste entre la sonnerie et la paroi de la cloche quand on retire l'air.",
              solution: [
                "1) Au début, on entend nettement la sonnerie : l'air transmet la vibration jusqu'à la paroi de la cloche, puis jusqu'à l'oreille.",
                "2) Plus on retire d'air, plus le son devient faible : il y a de moins en moins de matière pour transmettre la vibration.",
                "3) Le son ne se propage pas dans le vide, alors que la lumière s'y propage, puisqu'on continue de voir le marteau.",
                "4) L'air revient, la vibration peut de nouveau se propager : on entend de nouveau la sonnerie.",
                "Réponse : le son a besoin d'un milieu matériel pour se propager ; la lumière, elle, se propage dans le vide.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Sur la Lune, il n'y a pratiquement pas d'atmosphère : on considère que c'est le vide. Deux astronautes portent des scaphandres dont les casques sont remplis d'air. Ils se tiennent à 5 m l'un de l'autre. 1) L'un crie très fort : l'autre peut-il l'entendre sans radio ? Justifiez. 2) Ils s'approchent et collent leurs casques l'un contre l'autre. Le premier parle : le second peut-il l'entendre ? Décrivez le trajet du son en nommant chaque milieu traversé. 3) Expliquez pourquoi ils s'entendent parfaitement avec leur radio, en décrivant ce qui se passe dans le casque de celui qui écoute.",
              hint: "Repérez où il y a de la matière et où il y a du vide. Un solide peut transmettre une vibration. La radio utilise des ondes qui, comme la lumière, traversent le vide.",
              solution: [
                "1) Non. La voix fait vibrer l'air du casque, puis le casque, mais entre les deux astronautes il y a le vide : la vibration ne peut pas se propager jusqu'au second casque.",
                "2) Oui, le son peut passer, même s'il est affaibli. Trajet : cordes vocales du premier astronaute → air de son casque → paroi solide de son casque → paroi solide du second casque (les deux sont en contact) → air du second casque → oreille du second astronaute. À aucun moment le son ne traverse le vide.",
                "3) La radio envoie des ondes radio, qui se propagent dans le vide comme la lumière. Dans le casque de celui qui écoute, un récepteur les capte et fait vibrer la membrane d'un petit haut-parleur ; celle-ci fait vibrer l'air du casque, et ce son parvient à l'oreille.",
                "Réponse : sans contact ni radio, ils ne s'entendent pas ; casques collés, le son passe par les solides ; la radio traverse le vide, puis un haut-parleur recrée le son dans l'air du casque.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot à sa définition.",
            pairs: [
              { left: "Source sonore", right: "Objet qui vibre et émet un son" },
              { left: "Milieu matériel", right: "Gaz, liquide ou solide qui transmet le son" },
              { left: "Vide", right: "Absence de matière : le son ne s'y propage pas" },
              { left: "Tympan", right: "Membrane de l'oreille mise en vibration par le son" },
              { left: "Récepteur sonore", right: "Oreille ou microphone qui capte le son" },
              { left: "Décibel (dB)", right: "Unité du niveau sonore" },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qui produit un son ?",
              options: ["La lumière d'un objet", "Le déplacement de l'air sur une longue distance", "La couleur d'un objet", "Un objet qui vibre"],
              answer: 3,
              why: "Tout son est produit par la vibration d'un objet : corde, membrane, cordes vocales...",
            },
            {
              q: "Dans lequel de ces milieux le son ne peut-il pas se propager ?",
              options: ["Le vide", "L'eau", "L'acier", "L'air"],
              answer: 0,
              why: "Le son a besoin de matière pour se propager. Dans le vide, il n'y en a pas.",
            },
            {
              q: "Lorsqu'on retire l'air d'une cloche contenant une sonnerie, on voit encore le marteau. Pourquoi ?",
              options: ["Parce que le son est plus rapide", "Parce que la cloche en verre laisse passer le son mais pas l'air", "Parce que la lumière se propage dans le vide", "Parce que le marteau s'arrête"],
              answer: 2,
              why: "Le son ne traverse pas le vide, mais la lumière, si : on voit le marteau sans l'entendre.",
            },
            {
              q: "Quand un son se propage dans l'air, qu'est-ce qui voyage de la source jusqu'à l'oreille ?",
              options: ["La vibration", "Les particules d'air", "La source sonore", "Le tympan"],
              answer: 0,
              why: "Chaque particule d'air vibre sur place et pousse sa voisine : c'est la vibration qui voyage, pas la matière.",
            },
            {
              q: "Quel organe de l'oreille vibre en premier quand un son y arrive ?",
              options: ["La cochlée", "Le nerf auditif", "Les cordes vocales", "Le tympan"],
              answer: 3,
              why: "Le son, recueilli par le pavillon et le conduit auditif, fait d'abord vibrer le tympan, puis les osselets et la cochlée.",
            },
          ],
          trap: "Croire que l'air se déplace avec le son, de la source jusqu'à l'oreille, ou que le son peut traverser le vide comme la lumière : seule la vibration voyage, de proche en proche, et elle a besoin de matière.",
          method: "Pour expliquer si un son peut être entendu, suivez son trajet étape par étape : qui vibre (émetteur) ? Quels milieux traverse-t-il (y a-t-il du vide quelque part) ? Qui le reçoit (récepteur) ? S'il manque un maillon, il n'y a pas de son entendu.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'frequence-audible',
          title: 'Fréquence et domaine audible',
          minutes: 30,
          objectives: [
            "Définir la fréquence d'un son et citer son unité, le hertz.",
            "Calculer la fréquence d'une vibration à partir d'un nombre de vibrations et d'une durée.",
            "Relier la hauteur d'un son, grave ou aigu, à sa fréquence.",
            "Citer les limites du domaine audible de l'être humain et distinguer infrasons, sons audibles et ultrasons.",
          ],
          course: [
            {
              heading: "La fréquence d'un son",
              paragraphs: [
                "La fréquence d'un son est le nombre de vibrations effectuées par la source en une seconde. Une vibration est un aller-retour complet de l'objet qui vibre. La fréquence se note f et s'exprime en hertz (Hz), du nom du physicien allemand Heinrich Hertz : 1 Hz correspond à une vibration par seconde.",
                "Pour calculer une fréquence, on divise le nombre de vibrations par la durée en secondes. Par exemple, une corde qui effectue 880 vibrations en 2 s a une fréquence f = 880 ÷ 2 = 440 Hz. Pour les grandes valeurs, on utilise le kilohertz : 1 kHz = 1 000 Hz, donc 3 kHz = 3 000 Hz.",
              ],
              box: { label: "Définition", text: "La fréquence f d'un son est le nombre de vibrations de la source par seconde. Unité : le hertz (Hz). f = nombre de vibrations ÷ durée (en s). 1 kHz = 1 000 Hz." },
            },
            {
              heading: "Sons graves et sons aigus",
              paragraphs: [
                "La fréquence fixe la hauteur du son. Plus la fréquence est basse, plus le son est grave (une grosse caisse, une contrebasse) ; plus elle est élevée, plus le son est aigu (un sifflet, une flûte piccolo). Les musiciens accordent leurs instruments sur un la de fréquence 440 Hz, donné par un diapason.",
                "Sur une guitare, une corde plus courte (quand on appuie sur une case), plus tendue ou plus fine vibre plus vite : elle donne un son plus aigu. Une corde longue, détendue ou épaisse donne un son plus grave.",
                "Attention à ne pas confondre la hauteur et le niveau sonore. Grave ou aigu dépend de la fréquence ; fort ou faible dépend de l'amplitude de la vibration et se mesure en décibels. Un son peut être à la fois grave et fort (un orage), ou aigu et faible (le bourdonnement d'un moustique au loin).",
              ],
              box: { label: "Règle", text: "Plus la fréquence est élevée, plus le son est aigu. Plus elle est basse, plus le son est grave. La hauteur (grave ou aigu) ne dit rien du niveau sonore (fort ou faible)." },
            },
            {
              heading: "Le domaine audible",
              paragraphs: [
                "L'oreille humaine n'entend pas toutes les fréquences. Elle perçoit les sons de fréquence comprise entre environ 20 Hz et 20 000 Hz (20 kHz) : c'est le domaine audible. Avec l'âge, on perd surtout l'audition des sons aigus, et la limite haute descend souvent bien en dessous de 20 000 Hz.",
                "Les sons de fréquence inférieure à 20 Hz sont des infrasons : ils sont produits par exemple lors des séismes ou des orages, et les éléphants s'en servent pour communiquer à grande distance. Les sons de fréquence supérieure à 20 000 Hz sont des ultrasons : les chauves-souris et les dauphins en émettent pour se repérer, et le chien en entend certains (d'où les sifflets à ultrasons pour chiens, silencieux pour nous).",
                "Les ultrasons ont de nombreuses applications : l'échographie médicale, qui permet de voir l'intérieur du corps, ou le sonar des bateaux, qui mesure la profondeur de l'eau.",
              ],
              box: { label: "À retenir", text: "Infrasons : f < 20 Hz. Sons audibles par l'être humain : de 20 Hz à 20 000 Hz environ. Ultrasons : f > 20 000 Hz." },
            },
          ],
          keyPoints: [
            "La fréquence est le nombre de vibrations par seconde ; elle s'exprime en hertz (Hz).",
            "f = nombre de vibrations ÷ durée en secondes ; 1 kHz = 1 000 Hz.",
            "Fréquence élevée : son aigu. Fréquence basse : son grave.",
            "Domaine audible humain : de 20 Hz à 20 000 Hz environ ; il se réduit avec l'âge.",
            "Infrasons : moins de 20 Hz. Ultrasons : plus de 20 000 Hz.",
            "Hauteur (grave ou aigu) et niveau sonore (fort ou faible) sont deux choses différentes.",
          ],
          example: {
            statement: "Une corde de guitare effectue 1 650 vibrations en 5 s (données fictives). 1) Calculez sa fréquence. 2) Ce son est-il audible par l'être humain ? 3) Est-il plus grave ou plus aigu que le la du diapason (440 Hz) ?",
            solution: [
              "1) f = nombre de vibrations ÷ durée = 1 650 ÷ 5 = 330 Hz.",
              "2) 330 Hz est compris entre 20 Hz et 20 000 Hz : le son est audible.",
              "3) 330 Hz < 440 Hz : la fréquence est plus basse, le son est plus grave que le la du diapason.",
              "Réponse : f = 330 Hz ; son audible ; plus grave que le la à 440 Hz.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque son en infrason, son audible ou ultrason : a) 5 Hz ; b) 440 Hz ; c) 3 kHz ; d) 18 000 Hz ; e) 35 kHz ; f) 150 000 Hz.",
              hint: "Convertissez d'abord les kHz en Hz (1 kHz = 1 000 Hz), puis comparez à 20 Hz et à 20 000 Hz.",
              solution: [
                "a) 5 Hz < 20 Hz : infrason.",
                "b) 440 Hz est entre 20 Hz et 20 000 Hz : son audible.",
                "c) 3 kHz = 3 000 Hz : son audible.",
                "d) 18 000 Hz < 20 000 Hz : son audible.",
                "e) 35 kHz = 35 000 Hz > 20 000 Hz : ultrason.",
                "f) 150 000 Hz > 20 000 Hz : ultrason.",
                "Réponse : infrason : a ; sons audibles : b, c, d ; ultrasons : e, f.",
              ],
            },
            {
              level: 2,
              statement: "Trois sources vibrent (données fictives). A : une grande membrane effectue 30 vibrations en 2 s. B : un diapason effectue 4 400 vibrations en 10 s. C : la membrane d'un émetteur effectue 2 500 vibrations en 0,1 s. 1) Calculez la fréquence de chaque source. 2) Classez-les du son le plus grave au plus aigu. 3) Laquelle un être humain peut-il entendre ?",
              hint: "Utilisez f = nombre de vibrations ÷ durée. Diviser par 0,1 revient à multiplier par 10.",
              solution: [
                "1) A : f = 30 ÷ 2 = 15 Hz. B : f = 4 400 ÷ 10 = 440 Hz. C : f = 2 500 ÷ 0,1 = 25 000 Hz.",
                "2) 15 Hz < 440 Hz < 25 000 Hz : du plus grave au plus aigu, A, puis B, puis C.",
                "3) A (15 Hz) est un infrason et C (25 000 Hz) un ultrason : seule B (440 Hz) est dans le domaine audible.",
                "Réponse : A : 15 Hz, B : 440 Hz, C : 25 000 Hz ; ordre A, B, C ; seule B est audible.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un test d'audition donne les résultats suivants (données fictives) : Paul, 13 ans, entend de 20 Hz à 19 000 Hz ; son grand-père Henri, 72 ans, entend de 20 Hz à 9 000 Hz. 1) La membrane d'un haut-parleur effectue 60 000 vibrations en 4 s. Calculez la fréquence du son émis. Qui l'entend ? 2) Qui entend un son de 12 kHz ? Et un son de 6 kHz ? 3) Un sifflet pour chien émet un son de 25 kHz. Paul et Henri l'entendent-ils ? Comment appelle-t-on ce son ? 4) Proposez une explication à la différence entre Paul et Henri.",
              hint: "Convertissez toutes les fréquences dans la même unité (Hz), puis comparez-les aux limites de chaque personne.",
              solution: [
                "1) f = 60 000 ÷ 4 = 15 000 Hz. Paul entend jusqu'à 19 000 Hz : il entend ce son. Henri n'entend que jusqu'à 9 000 Hz : il ne l'entend pas.",
                "2) 12 kHz = 12 000 Hz : Paul l'entend (12 000 < 19 000), Henri non (12 000 > 9 000). 6 kHz = 6 000 Hz : tous les deux l'entendent (6 000 < 9 000).",
                "3) 25 kHz = 25 000 Hz, plus que 20 000 Hz : c'est un ultrason. Ni Paul ni Henri ne l'entendent, mais le chien, lui, l'entend.",
                "4) Avec l'âge, l'oreille perd surtout la capacité d'entendre les sons aigus : la limite haute du domaine audible d'Henri a beaucoup baissé.",
                "Réponse : 15 000 Hz, entendu par Paul seulement ; 12 kHz : Paul seulement, 6 kHz : les deux ; 25 kHz est un ultrason inaudible pour eux ; l'audition des aigus diminue avec l'âge.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Fréquence et domaine audible.",
            statements: [
              { text: "Un son aigu est forcément un son fort.", true: false, why: "Aigu dépend de la fréquence ; fort dépend du niveau sonore. Un son peut être aigu et faible." },
              { text: "Une fréquence de 1 Hz correspond à une vibration par seconde.", true: true, why: "C'est la définition du hertz." },
              { text: "L'être humain entend les sons de 20 Hz à 20 000 Hz environ.", true: true, why: "C'est le domaine audible humain, qui se réduit avec l'âge pour les aigus." },
              { text: "Les ultrasons sont des sons très graves.", true: false, why: "Les ultrasons ont une fréquence supérieure à 20 000 Hz : ils sont plus aigus que ce que nous entendons." },
              { text: "Plus la fréquence d'un son est élevée, plus il est aigu.", true: true, why: "La hauteur d'un son dépend de sa fréquence : haute fréquence, son aigu." },
              { text: "Une corde de guitare plus courte donne un son plus grave.", true: false, why: "Une corde plus courte vibre plus vite : sa fréquence augmente, le son est plus aigu." },
              { text: "Les chauves-souris utilisent des ultrasons pour se repérer.", true: true, why: "Elles émettent des ultrasons et écoutent leur écho pour localiser obstacles et proies." },
            ],
          },
          quiz: [
            {
              q: "Quelle est l'unité de la fréquence ?",
              options: ["Le hertz", "Le décibel", "Le mètre par seconde", "Le joule"],
              answer: 0,
              why: "La fréquence s'exprime en hertz (Hz). Le décibel mesure le niveau sonore.",
            },
            {
              q: "Une membrane effectue 200 vibrations en 4 s. Quelle est sa fréquence ?",
              options: ["800 Hz", "204 Hz", "0,02 Hz", "50 Hz"],
              answer: 3,
              why: "f = 200 ÷ 4 = 50 Hz.",
            },
            {
              q: "Quel son est le plus aigu ?",
              options: ["Un son de 100 Hz", "Un son de 440 Hz", "Un son de 2 000 Hz", "Un son de 1 500 Hz"],
              answer: 2,
              why: "Plus la fréquence est élevée, plus le son est aigu : 2 000 Hz est la plus grande fréquence proposée.",
            },
            {
              q: "Comment appelle-t-on un son de fréquence 10 Hz ?",
              options: ["Un infrason", "Un ultrason", "Un son audible"],
              answer: 0,
              why: "10 Hz est inférieur à 20 Hz, la limite basse du domaine audible : c'est un infrason.",
            },
            {
              q: "Quelles sont les limites approximatives du domaine audible humain ?",
              options: ["De 0 Hz à 1 000 Hz", "De 200 Hz à 2 000 Hz", "De 2 Hz à 200 000 Hz", "De 20 Hz à 20 000 Hz"],
              answer: 3,
              why: "L'oreille humaine perçoit les sons entre environ 20 Hz et 20 000 Hz.",
            },
          ],
          trap: "Confondre la hauteur d'un son et son niveau sonore : « aigu » ne veut pas dire « fort ». Autre erreur fréquente : oublier de convertir les kilohertz en hertz avant de comparer à 20 000 Hz.",
          method: "Pour classer un son, écrivez sa fréquence en hertz, puis placez-la sur un axe gradué avec deux repères, 20 Hz et 20 000 Hz : à gauche les infrasons, au milieu les sons audibles, à droite les ultrasons.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'vitesse-son',
          title: 'La vitesse du son et ses applications : écho, sonar',
          minutes: 35,
          objectives: [
            "Citer l'ordre de grandeur de la vitesse du son dans l'air, dans l'eau et dans les solides.",
            "Relier la distance parcourue par un son à la durée de propagation.",
            "Exploiter le phénomène d'écho pour calculer une distance.",
            "Expliquer le principe du sonar et de l'échographie.",
          ],
          course: [
            {
              heading: "La vitesse du son dépend du milieu",
              paragraphs: [
                "Le son se propage beaucoup moins vite que la lumière. Dans l'air, à une température de 15 à 20 °C, sa vitesse est d'environ 340 m/s (elle augmente un peu avec la température). Dans l'eau, elle est d'environ 1 500 m/s, et dans l'acier d'environ 5 000 à 6 000 m/s. En général, le son va plus vite dans les liquides et dans les solides que dans les gaz.",
                "La lumière, elle, parcourt environ 300 000 000 m/s : elle est près d'un million de fois plus rapide que le son dans l'air (300 000 000 ÷ 340 ≈ 880 000). C'est pourquoi, lors d'un orage, on voit l'éclair avant d'entendre le tonnerre, alors qu'ils sont produits au même moment.",
              ],
              box: { label: "Repère", text: "Vitesse du son : environ 340 m/s dans l'air, 1 500 m/s dans l'eau, 5 000 à 6 000 m/s dans l'acier. Aucune propagation dans le vide." },
            },
            {
              heading: "Calculer une distance ou une durée",
              paragraphs: [
                "On utilise les mêmes relations que pour tout mouvement : d = v × t et t = d ÷ v, avec d en mètres, t en secondes et v en mètres par seconde.",
                "Application à l'orage : la lumière de l'éclair nous parvient presque instantanément, mais le tonnerre met du temps. Si l'on compte 6 s entre l'éclair et le tonnerre, l'orage est à d = 340 × 6 = 2 040 m, soit environ 2 km. D'où une règle pratique : le son parcourt environ 1 km en 3 s, donc on divise le nombre de secondes par 3 pour obtenir la distance en kilomètres.",
              ],
              box: { label: "Formule", text: "d = v × t et t = d ÷ v (d en m, t en s, v en m/s). Orage : distance en km ≈ nombre de secondes ÷ 3." },
            },
            {
              heading: "L'écho",
              paragraphs: [
                "Quand un son rencontre un obstacle (une falaise, un mur, une montagne), il est en partie renvoyé, comme une balle qui rebondit : c'est la réflexion du son. Le son renvoyé, entendu après le son direct, s'appelle un écho.",
                "Attention : pour revenir, le son fait un aller jusqu'à l'obstacle puis un retour. La durée mesurée correspond à la distance aller-retour. La distance jusqu'à l'obstacle est donc d = v × t ÷ 2. Par exemple, si l'écho revient 2 s après un cri devant une falaise, celle-ci est à 340 × 2 ÷ 2 = 340 m.",
                "L'oreille distingue l'écho du son direct seulement si le retard est d'au moins un dixième de seconde environ, donc si l'obstacle est à plus de 17 m environ. Plus près, l'écho se mélange au son direct et le prolonge : c'est ce qui se passe dans une salle vide.",
              ],
              box: { label: "Formule", text: "Écho : distance de l'obstacle d = v × t ÷ 2, où t est la durée de l'aller-retour." },
            },
            {
              heading: "Sonar, écholocation et échographie",
              paragraphs: [
                "Un sonar, placé sous un bateau, émet une brève impulsion d'ultrasons vers le fond. L'onde se réfléchit sur le fond (ou sur un banc de poissons, un sous-marin) et revient vers le bateau, où un récepteur mesure la durée de l'aller-retour. Avec une vitesse de 1 500 m/s dans l'eau, l'appareil calcule la profondeur : d = 1 500 × t ÷ 2.",
                "Les chauves-souris et les dauphins utilisent le même principe : ils émettent des ultrasons et écoutent les échos pour repérer les obstacles et leurs proies. C'est l'écholocation. En médecine, l'échographie envoie des ultrasons dans le corps ; leurs échos sur les organes permettent de construire une image, sans rayons X. On l'utilise notamment pour suivre un bébé pendant la grossesse.",
              ],
              box: { label: "À retenir", text: "Sonar, écholocation et échographie reposent sur l'écho d'ultrasons : on mesure la durée de l'aller-retour pour en déduire une distance." },
            },
          ],
          keyPoints: [
            "Vitesse du son : environ 340 m/s dans l'air, 1 500 m/s dans l'eau, plusieurs milliers de m/s dans les solides.",
            "La lumière est près d'un million de fois plus rapide que le son dans l'air.",
            "d = v × t ; orage : distance en km ≈ secondes ÷ 3.",
            "Un écho est un son réfléchi par un obstacle ; distance de l'obstacle : d = v × t ÷ 2.",
            "Le sonar mesure une profondeur grâce à l'écho d'ultrasons dans l'eau.",
          ],
          example: {
            statement: "Le sonar d'un bateau émet une impulsion d'ultrasons vers le fond. L'écho revient 0,4 s plus tard. La vitesse du son dans l'eau est 1 500 m/s. Calculez la profondeur de l'eau sous le bateau.",
            solution: [
              "Les ultrasons font un aller (du bateau au fond) et un retour (du fond au bateau) en 0,4 s.",
              "Distance totale parcourue : 1 500 × 0,4 = 600 m.",
              "La profondeur correspond à l'aller seulement : 600 ÷ 2 = 300 m.",
              "On peut aussi écrire directement : d = v × t ÷ 2 = 1 500 × 0,4 ÷ 2 = 300 m.",
              "Réponse : la profondeur est de 300 m.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pendant un orage, Nora compte 9 s entre l'éclair et le tonnerre. On prend 340 m/s pour la vitesse du son dans l'air. 1) Calculez la distance entre Nora et l'orage. 2) Vérifiez votre résultat avec la règle pratique « secondes ÷ 3 ».",
              hint: "La lumière de l'éclair arrive presque instantanément : seule la durée de trajet du son compte. Utilisez d = v × t.",
              solution: [
                "1) d = v × t = 340 × 9 = 3 060 m, soit environ 3 km.",
                "2) Règle pratique : 9 ÷ 3 = 3 km. Les deux résultats concordent.",
                "Réponse : l'orage est à environ 3 km (3 060 m).",
              ],
            },
            {
              level: 2,
              statement: "1) Face à une falaise, Tom crie et entend l'écho 1,5 s plus tard. Calculez la distance entre Tom et la falaise (v = 340 m/s). 2) Léa se place à 34 m d'un grand mur et frappe dans ses mains. Au bout de combien de temps entend-elle l'écho ? 3) Sachant que l'oreille sépare l'écho du son direct à partir d'environ 0,1 s de retard, Léa entend-elle un écho distinct ?",
              hint: "Le son fait l'aller et le retour. Pour la question 2, calculez d'abord la distance totale parcourue, puis utilisez t = d ÷ v.",
              solution: [
                "1) Distance aller-retour : 340 × 1,5 = 510 m. Distance de la falaise : 510 ÷ 2 = 255 m.",
                "2) Distance aller-retour : 2 × 34 = 68 m. Durée : t = 68 ÷ 340 = 0,2 s.",
                "3) 0,2 s > 0,1 s : Léa entend un écho distinct.",
                "Réponse : la falaise est à 255 m ; l'écho revient au bout de 0,2 s ; Léa entend un écho distinct.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Sur une voie ferrée désaffectée, Léo frappe un rail en acier avec un marteau. Inès, à 1 020 m de là, entend deux sons : l'un arrive par le rail, l'autre par l'air (données fictives arrondies : v dans l'air = 340 m/s ; v dans l'acier = 5 100 m/s). 1) Lequel des deux sons arrive en premier ? Justifiez sans calcul. 2) Calculez la durée de propagation de chaque son. 3) Calculez l'écart de temps entre les deux sons. 4) Sur une autre portion de voie, Inès mesure un écart de 1,4 s entre les deux sons. Sachant que l'écart est proportionnel à la distance, à quelle distance se trouve Léo ?",
              hint: "Le son est plus rapide dans les solides que dans l'air. Pour la question 4, comparez 1,4 s à l'écart trouvé à la question 3.",
              solution: [
                "1) Le son se propage beaucoup plus vite dans l'acier (5 100 m/s) que dans l'air (340 m/s) : le son transmis par le rail arrive en premier.",
                "2) Dans l'acier : t = d ÷ v = 1 020 ÷ 5 100 = 0,2 s. Dans l'air : t = 1 020 ÷ 340 = 3 s.",
                "3) Écart : 3 - 0,2 = 2,8 s.",
                "4) 1,4 s est la moitié de 2,8 s. L'écart étant proportionnel à la distance, Léo est à la moitié de 1 020 m : 1 020 ÷ 2 = 510 m.",
                "Vérification : 510 ÷ 340 = 1,5 s et 510 ÷ 5 100 = 0,1 s ; 1,5 - 0,1 = 1,4 s.",
                "Réponse : le son du rail arrive en premier ; durées 0,2 s (acier) et 3 s (air) ; écart 2,8 s ; dans le second cas, Léo est à 510 m.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le fonctionnement d'un sonar.",
            items: [
              "Le sonar, sous le bateau, émet une brève impulsion d'ultrasons.",
              "Les ultrasons se propagent dans l'eau vers le fond.",
              "Ils se réfléchissent sur le fond.",
              "L'écho remonte vers le bateau.",
              "Le récepteur capte l'écho et mesure la durée de l'aller-retour.",
              "L'appareil calcule la profondeur avec d = v × t ÷ 2.",
            ],
          },
          quiz: [
            {
              q: "Quelle est la vitesse approximative du son dans l'air ?",
              options: ["3 m/s", "300 000 km/s", "1 500 m/s", "340 m/s"],
              answer: 3,
              why: "Dans l'air à température ordinaire, le son se propage à environ 340 m/s. 1 500 m/s est sa vitesse dans l'eau.",
            },
            {
              q: "Dans quel milieu le son est-il le plus rapide ?",
              options: ["L'air", "L'eau", "L'acier", "Le vide"],
              answer: 2,
              why: "Le son va plus vite dans les solides : environ 5 000 à 6 000 m/s dans l'acier. Dans le vide, il ne se propage pas.",
            },
            {
              q: "On compte 6 s entre un éclair et le tonnerre. À quelle distance environ est l'orage ?",
              options: ["2 km", "6 km", "18 km", "340 m"],
              answer: 0,
              why: "d = 340 × 6 = 2 040 m, soit environ 2 km (6 ÷ 3 = 2).",
            },
            {
              q: "Un écho revient 1 s après un cri. À quelle distance est l'obstacle ?",
              options: ["340 m", "170 m", "680 m", "34 m"],
              answer: 1,
              why: "Le son fait l'aller et le retour : d = 340 × 1 ÷ 2 = 170 m.",
            },
            {
              q: "Quelles ondes un sonar utilise-t-il ?",
              options: ["La lumière visible", "Les infrasons", "Les rayons X", "Les ultrasons"],
              answer: 3,
              why: "Le sonar émet des ultrasons dans l'eau et mesure la durée de leur écho.",
            },
          ],
          trap: "Oublier de diviser par 2 dans un calcul d'écho : la durée mesurée correspond à l'aller et au retour, alors que la distance cherchée n'est que l'aller.",
          method: "Dans un problème d'écho, faites un petit schéma avec une flèche aller et une flèche retour : il vous rappellera de diviser par 2. Vérifiez ensuite l'ordre de grandeur : un écho qui revient au bout d'une seconde correspond à un obstacle à 170 m dans l'air et à 750 m dans l'eau.",
        },
      ],
    },
  ],
}
