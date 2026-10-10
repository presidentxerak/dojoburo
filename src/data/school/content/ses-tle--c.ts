import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'ses-tle',
  chapters: [
    /* ==================================================================== */
    /* LES MUTATIONS DU TRAVAIL ET DE L'EMPLOI                               */
    /* ==================================================================== */
    {
      id: 'travail-et-emploi',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'organisation-du-travail',
          title: 'Les modèles d\'organisation du travail',
          minutes: 30,
          objectives: [
            "Distinguer les notions de travail, d'activité, de statut d'emploi (salarié, non-salarié) et de chômage.",
            "Comprendre les principales caractéristiques des modèles d'organisation taylorien (division horizontale et verticale du travail, relation hiérarchique stricte) et post-taylorien (flexibilité, recomposition des tâches, management participatif).",
            "Analyser les effets positifs et négatifs de l'évolution des formes de l'organisation du travail sur les conditions de travail.",
          ],
          course: [
            {
              heading: "Travail, emploi, activité et chômage",
              paragraphs: [
                "Le travail désigne toute activité humaine de production de biens ou de services, qu'elle soit rémunérée ou non. Préparer le repas familial, aider bénévolement dans une association ou réparer sa propre voiture, c'est travailler. L'emploi est plus restreint : c'est un travail rémunéré, exercé dans un cadre juridique et social reconnu, qui donne un statut et, le plus souvent, des droits (protection sociale, congés, retraite).",
                "On distingue deux grands statuts d'emploi. Les salariés travaillent pour un employeur, auquel les lie un contrat de travail qui crée un lien de subordination : l'employeur fixe les tâches, contrôle leur exécution et peut sanctionner. Le contrat peut être à durée indéterminée (CDI, la norme d'emploi), à durée déterminée (CDD), ou prendre la forme d'une mission d'intérim. Les non-salariés (ou indépendants) travaillent à leur compte : agriculteurs exploitants, artisans, commerçants, professions libérales, micro-entrepreneurs. Ils ne sont subordonnés à personne mais supportent seuls le risque économique.",
                "La population active regroupe les actifs occupés (ceux qui ont un emploi) et les chômeurs. Les autres personnes sont inactives : élèves et étudiants qui ne travaillent pas, retraités, personnes au foyer. Le Bureau international du travail (BIT) donne une définition précise du chômage, qui permet les comparaisons internationales. Les frontières entre emploi, chômage et inactivité sont pourtant de plus en plus floues : une personne qui souhaite travailler mais ne cherche plus d'emploi n'est pas comptée comme chômeuse (elle appartient au halo autour du chômage), et une personne à temps partiel qui voudrait travailler davantage est en sous-emploi.",
              ],
              box: { label: "Définition", text: "Chômeur au sens du BIT : personne de 15 ans ou plus qui, au cours d'une semaine de référence, n'a pas travaillé ne serait-ce qu'une heure, est disponible pour travailler dans les deux semaines et a recherché activement un emploi dans les quatre semaines précédentes (ou a trouvé un emploi qui commence dans les trois mois)." },
            },
            {
              heading: "Le modèle taylorien et le fordisme",
              paragraphs: [
                "À la fin du XIXe siècle, l'ingénieur américain Frederick W. Taylor propose une « organisation scientifique du travail » (OST), exposée dans The Principles of Scientific Management (1911). Il s'agit de supprimer la « flânerie » des ouvriers et les savoir-faire empiriques en étudiant scientifiquement chaque poste : on chronomètre les gestes pour définir la meilleure manière de faire (the one best way) et le temps nécessaire à chaque opération.",
                "L'OST repose sur une double division du travail. La division horizontale décompose la fabrication en tâches simples, parcellisées et répétitives, confiées à des ouvriers spécialisés (OS) qui n'ont pas besoin d'une longue formation. La division verticale sépare la conception du travail, confiée au bureau des méthodes (ingénieurs, techniciens), de son exécution par les ouvriers. La relation hiérarchique est stricte : contremaîtres et chefs d'atelier contrôlent le respect des consignes, et un salaire au rendement stimule l'effort.",
                "Henry Ford prolonge ces principes dans ses usines automobiles. En 1913, il introduit la chaîne de montage mobile : le produit défile devant des ouvriers qui restent à leur poste, ce qui impose la cadence. La standardisation des pièces et des modèles permet une production de masse à coût réduit. En 1914, Ford instaure le « five dollars day », un salaire journalier nettement supérieur à la moyenne, pour fidéliser des ouvriers qui quittaient massivement ses usines. Le fordisme associe ainsi production de masse, gains de productivité élevés et consommation de masse, rendue possible par la hausse des salaires.",
              ],
              box: { label: "À retenir", text: "Modèle taylorien : division horizontale (tâches parcellisées) + division verticale (conception séparée de l'exécution) + hiérarchie stricte + salaire au rendement. Le fordisme y ajoute la chaîne de montage, la standardisation et des salaires élevés qui soutiennent la consommation de masse." },
            },
            {
              heading: "Les modèles post-tayloriens",
              paragraphs: [
                "À partir de la fin des années 1960, le modèle taylorien-fordien montre ses limites. Le travail répétitif provoque absentéisme, turn-over, malfaçons et grèves d'ouvriers spécialisés. Les gains de productivité ralentissent. Surtout, la demande change : les consommateurs veulent des produits plus variés et de meilleure qualité, ce que la production de masse standardisée, rigide et coûteuse en stocks, satisfait mal.",
                "Les entreprises adoptent alors des organisations dites post-tayloriennes, dont le toyotisme, développé au Japon par l'ingénieur Taiichi Ohno chez Toyota, est l'exemple le plus connu. Il repose sur le juste-à-temps (produire ce qui est demandé, au moment où c'est demandé, avec des stocks minimaux, grâce à des étiquettes appelées kanban), sur la recherche de la qualité totale (objectif des « cinq zéros » : zéro stock, zéro défaut, zéro panne, zéro délai, zéro papier) et sur la polyvalence des salariés, qui peuvent arrêter la ligne en cas de défaut.",
                "Ces organisations recherchent la flexibilité, c'est-à-dire la capacité à s'adapter rapidement aux variations de la demande, et recomposent les tâches. L'élargissement des tâches confie à un salarié plusieurs tâches de même niveau (rotation entre postes). L'enrichissement des tâches ajoute au travail d'exécution des responsabilités de réglage, de contrôle de la qualité ou d'organisation. Le management participatif associe les salariés aux décisions, par exemple dans des cercles de qualité ou des équipes autonomes chargées d'un ensemble cohérent de tâches.",
              ],
              box: { label: "Définition", text: "Le post-taylorisme désigne les formes d'organisation du travail qui cherchent la flexibilité et la qualité par la recomposition des tâches (élargissement, enrichissement), la polyvalence, le travail en équipe et le management participatif." },
            },
            {
              heading: "Des effets ambivalents sur les conditions de travail",
              paragraphs: [
                "Les organisations post-tayloriennes ont des effets positifs : les tâches sont moins monotones, les salariés disposent de davantage d'autonomie, mobilisent et développent leurs compétences, et leur avis est davantage pris en compte. Le travail peut alors devenir plus riche et plus valorisant.",
                "Elles ont aussi des effets négatifs. Le travail en flux tendus et la chasse aux temps morts intensifient le travail. L'autonomie est souvent une « autonomie contrôlée » : les salariés choisissent comment travailler, mais leurs résultats sont étroitement mesurés par des indicateurs. Les sociologues Michel Gollac et Serge Volkoff ont montré que de nombreux salariés cumulent des contraintes industrielles (cadence d'une machine, normes de production) et des contraintes marchandes (demande immédiate des clients), ce qui accroît le stress et les troubles musculosquelettiques.",
                "Enfin, le taylorisme n'a pas disparu. Il s'est étendu à certains services : on parle de néo-taylorisme pour la restauration rapide, les centres d'appels (scripts imposés, durée des appels chronométrée) ou les entrepôts logistiques où les préparateurs de commandes suivent les instructions d'un logiciel. Les modèles d'organisation coexistent donc, selon les secteurs et les entreprises.",
              ],
            },
          ],
          keyPoints: [
            "Le travail est toute activité productive ; l'emploi est un travail rémunéré qui donne un statut (salarié ou non-salarié).",
            "Chômeur BIT : sans emploi la semaine de référence, disponible dans les deux semaines, en recherche active ; les frontières avec l'emploi et l'inactivité sont floues.",
            "Taylor (OST) : division horizontale et verticale du travail, chronométrage, hiérarchie stricte, salaire au rendement.",
            "Ford : chaîne de montage mobile (1913), standardisation, production de masse, salaires élevés (1914).",
            "Post-taylorisme (toyotisme) : juste-à-temps, qualité totale, polyvalence, élargissement et enrichissement des tâches, management participatif.",
            "Effets ambivalents : plus d'autonomie et de compétences, mais intensification du travail, stress et autonomie contrôlée ; le néo-taylorisme persiste dans les services.",
          ],
          example: {
            statement: "Dans un centre d'appels, chaque téléconseiller suit un script rédigé par le service qualité, la durée de chaque appel est chronométrée par le logiciel, et le nombre d'appels traités par heure est affiché en temps réel. Montrez que cette organisation relève du néo-taylorisme.",
            solution: [
              "Rappel : le modèle taylorien repose sur la division verticale et horizontale du travail, le contrôle des temps et une hiérarchie qui vérifie le respect des consignes. On parle de néo-taylorisme quand ces principes s'appliquent hors de l'industrie, notamment dans les services.",
              "Division verticale : le script est conçu par le service qualité, et le téléconseiller se contente de l'appliquer. La conception est séparée de l'exécution.",
              "Division horizontale : le téléconseiller réalise une tâche étroite et répétitive (répondre à un type d'appel), sans maîtriser l'ensemble du service rendu au client.",
              "Contrôle des temps : le chronométrage de chaque appel et l'affichage du nombre d'appels par heure rappellent le chronométrage des gestes de l'OST et imposent une cadence, comme la chaîne de montage.",
              "Conclusion : on retrouve les principes tayloriens dans une activité de service, ce qui justifie de parler de néo-taylorisme. Les contraintes marchandes (attente des clients) s'y ajoutent aux contraintes techniques (logiciel), ce qui peut accroître le stress.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque personne parmi les actifs occupés (en précisant salarié ou non-salarié), les chômeurs au sens du BIT ou les inactifs. (a) Léa, 24 ans, infirmière en CDI à l'hôpital. (b) Marc, 41 ans, plombier installé à son compte. (c) Inès, 30 ans, sans emploi, disponible immédiatement, a envoyé des candidatures la semaine dernière. (d) Paul, 70 ans, retraité, bénévole trois jours par semaine dans une association. (e) Sami, 19 ans, étudiant qui ne travaille pas et ne cherche pas d'emploi. (f) Nora, 45 ans, sans emploi, voudrait travailler mais n'a fait aucune démarche depuis six mois.",
              hint: "Vérifiez d'abord si la personne a un emploi rémunéré, puis, si ce n'est pas le cas, si elle remplit les trois conditions du BIT (sans emploi, disponible, recherche active).",
              solution: [
                "(a) Léa a un emploi rémunéré avec un contrat de travail : active occupée, salariée.",
                "(b) Marc travaille à son compte : actif occupé, non-salarié (indépendant).",
                "(c) Inès est sans emploi, disponible et en recherche active : chômeuse au sens du BIT.",
                "(d) Paul travaille, mais son travail bénévole n'est pas un emploi : il est inactif (retraité).",
                "(e) Sami ne travaille pas et ne cherche pas d'emploi : inactif.",
                "(f) Nora souhaite travailler mais ne recherche pas activement : elle n'est pas chômeuse au sens du BIT. Elle est inactive et appartient au halo autour du chômage, ce qui illustre le flou des frontières entre chômage et inactivité.",
              ],
            },
            {
              level: 2,
              statement: "Données simplifiées : dans un atelier automobile, l'assemblage d'un châssis demandait 12 heures de travail avant l'introduction de la chaîne de montage, et 1,5 heure après. (1) Calculez la productivité horaire du travail (en châssis par heure) avant et après. (2) Calculez le coefficient multiplicateur et le taux de variation de la productivité. (3) Expliquez pourquoi un tel gain a pu permettre à la fois une baisse du prix des voitures et une hausse des salaires.",
              hint: "La productivité horaire est la production divisée par le nombre d'heures de travail. Le coefficient multiplicateur est la valeur d'arrivée divisée par la valeur de départ.",
              solution: [
                "(1) Avant : 1 ÷ 12 ≈ 0,083 châssis par heure. Après : 1 ÷ 1,5 ≈ 0,667 châssis par heure.",
                "(2) Coefficient multiplicateur = (1 ÷ 1,5) ÷ (1 ÷ 12) = 12 ÷ 1,5 = 8. La productivité horaire a été multipliée par 8.",
                "Taux de variation = (8 - 1) × 100 = + 700 %. Vérification : 0,083 × 8 ≈ 0,667.",
                "(3) Avec les mêmes heures de travail, on produit 8 fois plus : le coût de main-d'œuvre par voiture baisse fortement. Une partie de ces gains de productivité peut être transmise aux consommateurs par une baisse des prix, et une autre aux ouvriers par une hausse des salaires, tout en préservant les profits.",
                "Réponse : la productivité est multipliée par 8 (+ 700 %). Le partage de ces gains entre prix, salaires et profits est au cœur du compromis fordiste : des salaires plus élevés et des prix plus bas élargissent la consommation de masse, qui écoule la production de masse.",
              ],
            },
            {
              level: 3,
              statement: "Épreuve composée, partie 1 (mobilisation des connaissances, 4 points) : Montrez que les organisations post-tayloriennes du travail ont des effets ambivalents sur les conditions de travail.",
              hint: "Construisez deux paragraphes : un sur les effets positifs, un sur les effets négatifs. Dans chacun, définissez, expliquez le mécanisme et donnez un exemple précis.",
              solution: [
                "Introduction brève : les organisations post-tayloriennes (toyotisme, équipes autonomes) recomposent les tâches et cherchent la flexibilité. Elles modifient les conditions de travail, c'est-à-dire l'environnement physique, organisationnel et psychologique dans lequel s'exerce le travail, dans deux directions opposées.",
                "Effets positifs (affirmation) : elles peuvent améliorer les conditions de travail. Explication : l'élargissement et surtout l'enrichissement des tâches réduisent la monotonie du travail parcellisé ; la polyvalence et le management participatif donnent plus d'autonomie et développent les compétences. Illustration : un opérateur qui règle sa machine, contrôle la qualité et propose des améliorations dans un cercle de qualité exerce un travail plus riche que l'OS taylorien.",
                "Effets négatifs (affirmation) : elles peuvent aussi dégrader les conditions de travail. Explication : le juste-à-temps supprime les temps morts et intensifie le travail ; l'autonomie est contrôlée par des indicateurs de résultats ; les salariés cumulent contraintes industrielles et contraintes marchandes (analyses de Gollac et Volkoff). Illustration : stress, troubles musculosquelettiques, sentiment d'urgence permanente.",
                "Conclusion : les effets dépendent de la façon dont l'organisation est mise en œuvre ; les gains d'autonomie s'accompagnent souvent d'une intensification du travail, d'où leur caractère ambivalent.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Division horizontale", right: "Décomposer la production en tâches simples et répétitives" },
              { left: "Division verticale", right: "Séparer ceux qui conçoivent le travail de ceux qui l'exécutent" },
              { left: "Chaîne de montage", right: "Faire défiler le produit devant des ouvriers à poste fixe" },
              { left: "Juste-à-temps", right: "Produire à la demande avec des stocks minimaux" },
              { left: "Élargissement des tâches", right: "Confier plusieurs tâches de même niveau au même salarié" },
              { left: "Enrichissement des tâches", right: "Ajouter des tâches de contrôle ou de décision au travail d'exécution" },
            ],
          },
          quiz: [
            {
              q: "Quelle caractéristique relève de la division verticale du travail dans le modèle taylorien ?",
              options: [
                "La décomposition de la fabrication en tâches simples et répétitives",
                "Le versement d'un salaire au rendement à chaque ouvrier",
                "La séparation entre les tâches de conception et celles d'exécution",
                "Le travail en équipes autonomes chargées d'assembler un module complet du produit",
              ],
              answer: 2,
              why: "La division verticale sépare ceux qui conçoivent (bureau des méthodes) de ceux qui exécutent. La décomposition en tâches simples relève de la division horizontale.",
            },
            {
              q: "Que désigne le juste-à-temps dans le modèle toyotiste ?",
              options: [
                "Produire ce qui est demandé, au moment où c'est demandé, avec des stocks minimaux",
                "Chronométrer chaque geste de l'ouvrier pour fixer le temps nécessaire à chaque opération",
                "Faire défiler les pièces devant des ouvriers immobiles grâce à un convoyeur",
                "Payer les ouvriers à la pièce pour qu'ils travaillent plus vite",
              ],
              answer: 0,
              why: "Le juste-à-temps consiste à produire en fonction de la demande effective, en flux tendus, ce qui réduit les stocks. Le chronométrage et le convoyeur relèvent du modèle taylorien et fordien.",
            },
            {
              q: "Selon les critères du BIT, laquelle de ces personnes est au chômage ?",
              options: [
                "Une étudiante qui ne cherche pas d'emploi pendant ses études",
                "Un retraité qui fait du bénévolat trois jours par semaine",
                "Un salarié en CDD qui a travaillé dix heures la semaine dernière",
                "Une personne sans emploi, disponible, qui postule activement",
              ],
              answer: 3,
              why: "Le chômeur BIT est sans emploi, disponible et en recherche active. Le salarié qui a travaillé au moins une heure est actif occupé ; l'étudiante et le retraité sont inactifs.",
            },
            {
              q: "Qu'appelle-t-on l'enrichissement des tâches ?",
              options: [
                "L'ajout de tâches de même niveau, comme surveiller deux machines au lieu d'une",
                "L'ajout de responsabilités de contrôle ou de réglage au travail d'exécution",
                "La hausse du salaire versée aux ouvriers en contrepartie de l'acceptation de cadences plus élevées",
              ],
              answer: 1,
              why: "L'enrichissement est une recomposition verticale : on confie à l'exécutant des tâches de contrôle, de réglage ou de décision. L'ajout de tâches de même niveau est un élargissement.",
            },
            {
              q: "Quel effet négatif est souvent associé aux organisations post-tayloriennes ?",
              options: [
                "La disparition de toute forme de contrôle hiérarchique",
                "L'intensification du travail et la hausse du stress",
                "Le retour à une stricte séparation entre conception et exécution",
                "La suppression de la polyvalence des salariés",
              ],
              answer: 1,
              why: "Le travail en flux tendus et le contrôle par les résultats intensifient le travail. Le contrôle ne disparaît pas : il change de forme (autonomie contrôlée).",
            },
          ],
          trap: "Confondre travail et emploi : le bénévole ou la personne qui s'occupe de son foyer travaillent, mais n'occupent pas un emploi et sont donc comptés parmi les inactifs. Autre confusion fréquente : croire que le taylorisme a disparu, alors qu'il persiste sous forme de néo-taylorisme dans les services.",
          method: "Pour chaque modèle d'organisation, construisez une fiche en quatre lignes identiques (division du travail, rôle de la hiérarchie, mode de rémunération, effets sur les conditions de travail) : la comparaison taylorisme et post-taylorisme devient immédiate, et vous disposez d'un plan tout prêt pour une question de mobilisation des connaissances.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'numerique-et-emploi',
          title: 'Le numérique et la qualité des emplois',
          minutes: 30,
          objectives: [
            "Connaître les principaux descripteurs de la qualité des emplois (conditions de travail, niveau de salaire, sécurité économique, horizon de carrière, potentiel de formation, variété des tâches).",
            "Comprendre comment le numérique brouille les frontières du travail (télétravail, temps de travail et hors travail) et transforme les relations d'emploi.",
            "Expliquer pourquoi le numérique accroît les risques de polarisation des emplois.",
          ],
          course: [
            {
              heading: "La qualité des emplois",
              paragraphs: [
                "Tous les emplois ne se valent pas. Pour comparer leur qualité, on utilise plusieurs descripteurs : les conditions de travail (pénibilité physique, horaires, intensité, autonomie), le niveau de salaire, la sécurité économique (stabilité du contrat, protection contre le licenciement, droits sociaux), l'horizon de carrière (possibilités de promotion), le potentiel de formation (possibilité d'acquérir de nouvelles compétences) et la variété des tâches.",
                "La norme d'emploi qui s'est imposée pendant les Trente Glorieuses est le CDI à temps plein. Les formes particulières d'emploi (CDD, intérim, contrats aidés, apprentissage) et le temps partiel subi offrent en général une sécurité économique plus faible. Un emploi de préparateur de commandes en intérim, payé au voisinage du SMIC, répétitif et sans perspective de promotion, cumule ainsi plusieurs faiblesses, alors qu'un emploi d'ingénieur en CDI cumule souvent les avantages : salaire élevé, autonomie, formation continue et perspectives de carrière.",
              ],
              box: { label: "À retenir", text: "Six descripteurs de la qualité des emplois : conditions de travail, niveau de salaire, sécurité économique, horizon de carrière, potentiel de formation, variété des tâches. Un emploi peut être bon sur un critère et mauvais sur un autre : il faut les examiner ensemble." },
            },
            {
              heading: "Le numérique brouille les frontières du travail",
              paragraphs: [
                "Les outils numériques (ordinateur portable, messagerie, visioconférence, smartphone) rendent le travail possible hors des locaux de l'entreprise et hors des horaires habituels. Le télétravail, défini par le Code du travail comme un travail qui aurait pu être exécuté dans les locaux de l'employeur mais qui est effectué ailleurs, de façon volontaire, grâce aux technologies de l'information, s'est fortement développé depuis la crise sanitaire de 2020, surtout chez les cadres.",
                "Le télétravail présente des avantages (moins de temps de transport, davantage d'autonomie, meilleure conciliation avec la vie familiale), mais il brouille la frontière entre lieu de travail et domicile, et entre temps de travail et temps hors travail. Les salariés peuvent être sollicités le soir ou le week-end, ce qui allonge de fait la durée du travail et accroît la fatigue ; le travail à distance peut aussi isoler du collectif de travail. Pour limiter ces risques, la loi du 8 août 2016 a créé un droit à la déconnexion, que les entreprises de 50 salariés et plus doivent organiser.",
              ],
              box: { label: "Repère", text: "Droit à la déconnexion : prévu par la loi du 8 août 2016 (entrée en vigueur le 1er janvier 2017), il doit faire l'objet d'une négociation ou d'une charte dans les entreprises de 50 salariés et plus, afin de garantir le respect des temps de repos et de la vie personnelle." },
            },
            {
              heading: "Le numérique transforme les relations d'emploi",
              paragraphs: [
                "Les plateformes numériques mettent en relation des clients et des travailleurs pour une prestation précise : transport de personnes, livraison de repas, petites tâches en ligne. La plupart de ces travailleurs ont juridiquement un statut d'indépendant, souvent celui de micro-entrepreneur : ils ne sont pas salariés, n'ont pas de contrat de travail et ne bénéficient ni de l'assurance chômage, ni des congés payés, ni de la protection contre le licenciement.",
                "Pourtant, la plateforme fixe souvent le prix de la course, attribue les missions par un algorithme, note les travailleurs et peut les déconnecter. Ces travailleurs sont donc économiquement dépendants, parfois dans une situation proche de la subordination : la frontière entre salariat et indépendance se brouille. La Cour de cassation a ainsi requalifié en contrat de travail la relation entre une plateforme de livraison et un coursier (arrêt Take Eat Easy, 2018) puis entre Uber et un chauffeur (2020). Une directive européenne adoptée en 2024 prévoit une présomption de salariat lorsque la plateforme exerce un contrôle sur le travail.",
                "Le numérique rend aussi plus floues les frontières entre emploi, chômage et inactivité : une personne peut cumuler une recherche d'emploi et de petites missions ponctuelles, ou exercer une activité réduite tout en restant inscrite comme demandeuse d'emploi.",
              ],
            },
            {
              heading: "Le numérique et la polarisation des emplois",
              paragraphs: [
                "Le numérique automatise d'abord les tâches routinières, c'est-à-dire répétitives et faciles à décrire par une suite d'instructions, qu'elles soient manuelles (assemblage, tri) ou cognitives (saisie comptable, guichet bancaire, secrétariat simple). Or ces tâches sont surtout concentrées dans des emplois de qualification intermédiaire : employés administratifs, ouvriers qualifiés de l'industrie.",
                "Les emplois très qualifiés, fondés sur des tâches abstraites (concevoir, analyser, décider, innover), sont au contraire complémentaires du numérique et se développent. Les emplois peu qualifiés de services, fondés sur des tâches manuelles non routinières qui demandent adaptation et contact humain (aide à domicile, nettoyage, livraison, restauration), sont difficiles à automatiser et se maintiennent ou progressent.",
                "Il en résulte une polarisation des emplois : la part des emplois intermédiaires recule, tandis que progressent les deux extrémités de l'échelle des qualifications. Cette polarisation concerne aussi la qualité des emplois : les emplois qualifiés cumulent salaire, autonomie et formation, tandis que beaucoup d'emplois peu qualifiés restent mal payés, instables et peu évolutifs. Le progrès technique n'est donc pas neutre : il détruit certains emplois et en crée d'autres, ce que Schumpeter appelait la destruction créatrice, mais les emplois créés ne sont ni les mêmes, ni accessibles aux mêmes personnes.",
              ],
              box: { label: "Définition", text: "Polarisation des emplois : recul de la part des emplois de qualification intermédiaire, souvent riches en tâches routinières automatisables, au profit des emplois très qualifiés et des emplois peu qualifiés non routiniers." },
            },
          ],
          keyPoints: [
            "Qualité de l'emploi : conditions de travail, salaire, sécurité économique, horizon de carrière, potentiel de formation, variété des tâches.",
            "Le télétravail brouille les frontières entre lieu de travail et domicile, temps de travail et hors travail ; droit à la déconnexion depuis la loi de 2016.",
            "Les plateformes emploient des indépendants économiquement dépendants : la frontière entre salariat et indépendance se brouille (requalifications en 2018 et 2020).",
            "Le numérique automatise surtout les tâches routinières, concentrées dans les emplois intermédiaires.",
            "Polarisation : recul des emplois intermédiaires, progression des emplois très qualifiés et des emplois peu qualifiés non routiniers.",
          ],
          example: {
            statement: "Document (données fictives) : répartition des emplois d'un pays selon le niveau de qualification. En 1995 : peu qualifiés 30 %, intermédiaires 45 %, très qualifiés 25 %. En 2020 : peu qualifiés 33 %, intermédiaires 36 %, très qualifiés 31 %. Calculez les variations et montrez que le document illustre une polarisation des emplois.",
            solution: [
              "Les données sont des parts (pourcentages de répartition) : leurs variations s'expriment en points de pourcentage.",
              "Peu qualifiés : 33 - 30 = + 3 points. Intermédiaires : 36 - 45 = - 9 points. Très qualifiés : 31 - 25 = + 6 points.",
              "Vérification : 3 - 9 + 6 = 0. La somme des variations est nulle, ce qui est normal puisque chaque année les parts totalisent 100 %.",
              "Interprétation : la part des emplois intermédiaires recule nettement, au profit des deux extrémités de l'échelle des qualifications, surtout des emplois très qualifiés. C'est la définition de la polarisation.",
              "Explication : le numérique automatise les tâches routinières, concentrées dans les emplois intermédiaires, alors qu'il est complémentaire des tâches abstraites des emplois qualifiés et peine à remplacer les tâches manuelles non routinières. Réponse : - 9 points pour les emplois intermédiaires, + 3 et + 6 points aux extrémités : le document illustre une polarisation.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, indiquez le descripteur de la qualité de l'emploi principalement concerné. (a) Un salarié en CDD de trois mois ne sait pas si son contrat sera renouvelé. (b) Une caissière répète les mêmes gestes toute la journée. (c) Un livreur gagne moins, par heure travaillée, que le salaire minimum horaire. (d) Un apprenti alterne entre l'entreprise et un centre de formation. (e) Un employé de banque peut devenir directeur d'agence en quelques années.",
              hint: "Reprenez la liste des six descripteurs : conditions de travail, niveau de salaire, sécurité économique, horizon de carrière, potentiel de formation, variété des tâches.",
              solution: [
                "(a) Sécurité économique : l'emploi est instable.",
                "(b) Variété des tâches (faible), qui touche aussi les conditions de travail (monotonie, gestes répétitifs).",
                "(c) Niveau de salaire : la rémunération horaire est faible.",
                "(d) Potentiel de formation : l'emploi permet d'acquérir des compétences et un diplôme.",
                "(e) Horizon de carrière : l'emploi offre des perspectives de promotion.",
              ],
            },
            {
              level: 2,
              statement: "Un livreur de plateforme, micro-entrepreneur, reçoit 4,50 € par course et réalise en moyenne 3 courses par heure. Il travaille 35 heures par semaine. Il verse 22 % de son chiffre d'affaires en cotisations sociales et paie 40 € de frais par semaine (vélo, téléphone, assurance). (1) Calculez son chiffre d'affaires hebdomadaire. (2) Calculez son revenu net hebdomadaire, puis son revenu net par heure. (3) Citez trois protections dont il ne bénéficie pas par rapport à un salarié.",
              hint: "Chiffre d'affaires = prix par course × courses par heure × heures. Retirez ensuite les cotisations (22 % du chiffre d'affaires) puis les frais.",
              solution: [
                "(1) Chiffre d'affaires = 4,50 × 3 × 35 = 13,50 × 35 = 472,50 € par semaine.",
                "(2) Cotisations = 0,22 × 472,50 = 103,95 €. Revenu net = 472,50 - 103,95 - 40 = 328,55 € par semaine.",
                "Revenu net horaire = 328,55 ÷ 35 ≈ 9,39 € par heure. Vérification : 9,39 × 35 ≈ 328,65, cohérent à l'arrondi près.",
                "(3) Comme indépendant, il ne bénéficie ni des congés payés, ni de l'assurance chômage, ni de la protection contre le licenciement (la plateforme peut le déconnecter) ; le salaire minimum ne s'applique pas et les temps d'attente entre deux courses ne sont pas rémunérés.",
                "Réponse : 472,50 € de chiffre d'affaires, 328,55 € de revenu net, soit environ 9,39 € par heure, sans les protections attachées au salariat.",
              ],
            },
            {
              level: 3,
              statement: "Épreuve composée, partie 1 (mobilisation des connaissances, 4 points) : Montrez que le numérique transforme les relations d'emploi.",
              hint: "Distinguez la relation salariale elle-même (télétravail, contrôle, déconnexion) et l'apparition de relations d'emploi nouvelles (plateformes, indépendants dépendants).",
              solution: [
                "Introduction : la relation d'emploi est le lien juridique et économique entre un travailleur et celui pour qui il travaille ; dans le salariat, elle repose sur un contrat de travail et un lien de subordination. Le numérique la transforme de deux façons.",
                "Premier argument : il transforme la relation salariale. Le télétravail permet de travailler hors des locaux de l'employeur ; le contrôle passe moins par la présence physique que par les résultats et les outils numériques ; la frontière entre temps de travail et temps personnel s'efface, ce qui a conduit le législateur à créer en 2016 un droit à la déconnexion.",
                "Second argument : il fait naître des relations d'emploi hybrides. Les plateformes font travailler des indépendants (souvent micro-entrepreneurs) qui supportent les risques sans les protections du salariat, mais dont le prix, les missions et l'évaluation sont fixés par un algorithme. Cette dépendance économique proche de la subordination a conduit la Cour de cassation à requalifier certaines relations en contrat de travail (2018, 2020), et l'Union européenne à adopter en 2024 une directive prévoyant une présomption de salariat.",
                "Conclusion : le numérique brouille la frontière entre salariat et indépendance, et entre travail et hors travail ; le droit cherche à s'adapter à ces nouvelles relations d'emploi.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Le numérique et l'emploi.",
            statements: [
              { text: "Le numérique détruit d'abord les emplois les moins qualifiés.", true: false, why: "Il automatise surtout les tâches routinières, concentrées dans les emplois intermédiaires ; beaucoup d'emplois peu qualifiés de services sont non routiniers." },
              { text: "La polarisation des emplois désigne le recul des emplois de qualification intermédiaire.", true: true, why: "Les deux extrémités de l'échelle des qualifications progressent pendant que le milieu recule." },
              { text: "Un livreur de plateforme micro-entrepreneur bénéficie de l'assurance chômage comme un salarié.", true: false, why: "En tant qu'indépendant, il n'a pas de contrat de travail et ne cotise pas à l'assurance chômage des salariés." },
              { text: "Le droit à la déconnexion a été créé par une loi de 2016.", true: true, why: "La loi du 8 août 2016 l'a instauré, avec une entrée en vigueur au 1er janvier 2017." },
              { text: "Un emploi en CDI à temps plein est forcément un emploi de bonne qualité.", true: false, why: "La sécurité économique n'est qu'un descripteur : un CDI peut être mal payé, pénible ou sans perspective de carrière." },
              { text: "Le télétravail peut allonger de fait la durée du travail.", true: true, why: "Les sollicitations hors des horaires habituels effacent la frontière entre travail et hors travail." },
            ],
          },
          quiz: [
            {
              q: "Quelles tâches le numérique automatise-t-il le plus facilement ?",
              options: [
                "Les tâches abstraites de conception et de décision",
                "Les tâches routinières, faciles à décrire par des instructions",
                "Les tâches manuelles non routinières qui exigent du contact humain",
              ],
              answer: 1,
              why: "Une tâche routinière peut être codée en une suite d'instructions et confiée à une machine ou à un logiciel.",
            },
            {
              q: "Lequel de ces éléments n'est pas un descripteur de la qualité de l'emploi ?",
              options: [
                "Le potentiel de formation",
                "L'horizon de carrière",
                "La sécurité économique",
                "La taille de la commune où se trouve l'entreprise",
              ],
              answer: 3,
              why: "Les six descripteurs sont les conditions de travail, le salaire, la sécurité économique, l'horizon de carrière, le potentiel de formation et la variété des tâches.",
            },
            {
              q: "Pourquoi dit-on que les plateformes brouillent la frontière entre salariat et indépendance ?",
              options: [
                "Parce que leurs travailleurs, juridiquement indépendants, dépendent de la plateforme pour les prix, les missions et l'évaluation",
                "Parce que tous leurs travailleurs ont un contrat de travail à durée déterminée",
                "Parce que leurs travailleurs fixent librement leurs prix, choisissent leurs clients et négocient chaque mission avec eux sans aucun intermédiaire",
              ],
              answer: 0,
              why: "Le statut est celui d'un indépendant, mais le contrôle exercé par l'algorithme rapproche la situation d'une subordination.",
            },
            {
              q: "Dans un document, la part des emplois intermédiaires passe de 45 % à 36 %. Comment exprimer cette variation ?",
              options: [
                "Une baisse de 9 %",
                "Une baisse de 20 %, soit 9 points de pourcentage de recul relatif",
                "Une baisse de 9 points de pourcentage",
                "Une hausse de 9 points de pourcentage",
              ],
              answer: 2,
              why: "On soustrait deux parts : 36 - 45 = - 9 points. En taux de variation, le recul serait de 20 %, mais ce n'est pas la même mesure.",
            },
            {
              q: "Qu'est-ce que le télétravail selon le Code du travail ?",
              options: [
                "Un travail qui aurait pu être fait dans les locaux de l'employeur, effectué ailleurs volontairement grâce aux outils numériques",
                "Tout travail réalisé à l'aide d'un ordinateur ou d'un téléphone, quel que soit le lieu, le statut du travailleur ou l'accord de l'employeur",
                "Le travail des indépendants qui exercent à leur domicile",
              ],
              answer: 0,
              why: "La définition légale repose sur trois éléments : un travail réalisable dans les locaux, effectué hors de ceux-ci, de façon volontaire, au moyen des technologies de l'information.",
            },
          ],
          trap: "Croire que le numérique supprime surtout les emplois les moins qualifiés : ce sont d'abord les tâches routinières, nombreuses dans les emplois intermédiaires, qui sont automatisées. Autre erreur : confondre baisse en pourcentage et baisse en points quand on compare des parts.",
          method: "Pour une question sur la polarisation, raisonnez toujours en tâches et non en métiers : demandez-vous si la tâche est routinière ou non, manuelle ou abstraite. Ce classement en deux critères vous permet d'expliquer pourquoi un emploi est menacé ou protégé par le numérique.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'travail-et-integration',
          title: 'Le travail, source d\'intégration sociale ?',
          minutes: 30,
          objectives: [
            "Comprendre que le travail est source d'intégration sociale.",
            "Expliquer comment certaines évolutions de l'emploi (précarisation, taux persistant de chômage élevé, polarisation de la qualité des emplois) peuvent affaiblir le pouvoir intégrateur du travail.",
            "Mobiliser les analyses d'Émile Durkheim, de Robert Castel et de Serge Paugam.",
          ],
          course: [
            {
              heading: "Pourquoi le travail intègre",
              paragraphs: [
                "L'intégration sociale désigne le processus par lequel un individu est relié aux autres membres de la société, partage ses normes et ses valeurs et y trouve une place reconnue. Une société intégrée est une société où ces liens sont solides et où règne une forte cohésion.",
                "Dans De la division du travail social (1893), Émile Durkheim montre que, dans les sociétés modernes, la division du travail crée une solidarité organique : chacun exerce une fonction spécialisée et dépend des autres, comme les organes d'un corps. Le travail rend les individus complémentaires et donc interdépendants.",
                "Le travail intègre par plusieurs canaux. Il procure un revenu, qui donne une autonomie et permet de participer à la consommation. Il confère une identité et un statut social : à la question « Que faites-vous dans la vie ? », on répond par sa profession. Il est un lieu de sociabilité (collègues, collectifs de travail, syndicats). Enfin, en France, l'emploi ouvre l'accès à des droits sociaux : assurance maladie, retraite, assurance chômage sont largement financées par des cotisations assises sur les salaires.",
              ],
              box: { label: "À retenir", text: "Le travail intègre par quatre canaux : le revenu (autonomie, consommation), l'identité et le statut social, la sociabilité, et les droits sociaux attachés à l'emploi." },
            },
            {
              heading: "La société salariale et ses fragilités",
              paragraphs: [
                "Le sociologue Robert Castel, dans Les métamorphoses de la question sociale (1995), décrit la société salariale qui s'est construite pendant les Trente Glorieuses : le salariat, autrefois synonyme de dépendance et de misère, devient la condition majoritaire et s'accompagne de protections (CDI, droit du travail, sécurité sociale). L'emploi stable devient le principal support de l'intégration.",
                "Castel montre que l'intégration repose sur deux axes : l'insertion par le travail et l'insertion dans des réseaux de relations (famille, voisinage). Il distingue notamment une zone d'intégration (emploi stable et relations solides), une zone de vulnérabilité (travail précaire et relations fragiles) et une zone de désaffiliation (absence de travail et isolement relationnel). Avec la montée du chômage et de la précarité depuis la fin des années 1970, une partie de la population glisse de la zone d'intégration vers les zones de vulnérabilité ou de désaffiliation.",
              ],
              box: { label: "Définition", text: "Désaffiliation (Robert Castel) : processus de rupture progressive des liens qui rattachent l'individu à la société, par la perte du travail et l'affaiblissement des relations sociales. Le mot insiste sur un parcours, plutôt que sur un état d'exclusion." },
            },
            {
              heading: "Les évolutions de l'emploi qui affaiblissent l'intégration",
              paragraphs: [
                "La précarisation de l'emploi (CDD, intérim, temps partiel subi) fragilise l'intégration : il est plus difficile de se projeter, d'obtenir un logement ou un crédit, et de s'insérer durablement dans un collectif de travail. Le chômage, surtout de longue durée (plus d'un an), prive de revenu, de statut et de sociabilité. Dès les années 1930, l'enquête de Paul Lazarsfeld, Marie Jahoda et Hans Zeisel sur Les chômeurs de Marienthal, un village autrichien frappé par la fermeture de son usine, montrait la désorganisation du temps, le repli sur soi et la résignation qui accompagnent le chômage de masse.",
                "Serge Paugam, dans Le salarié de la précarité (2000), montre que l'intégration professionnelle repose sur deux dimensions : le rapport au travail (la satisfaction tirée de l'activité elle-même, la reconnaissance) et le rapport à l'emploi (la stabilité et la protection). En les croisant, il obtient quatre types d'intégration professionnelle.",
                "La polarisation de la qualité des emplois accentue ces écarts : une partie des salariés cumule un emploi stable, bien payé et valorisant, tandis qu'une autre partie enchaîne des emplois instables, mal payés et peu reconnus. L'existence de travailleurs pauvres montre que l'emploi lui-même ne garantit plus toujours une intégration complète.",
              ],
              box: { label: "Repère", text: "Typologie de Paugam : intégration assurée (satisfait du travail, emploi stable) ; intégration incertaine (satisfait, emploi instable) ; intégration laborieuse (insatisfait, emploi stable) ; intégration disqualifiante (insatisfait, emploi instable)." },
            },
            {
              heading: "Un pouvoir intégrateur affaibli mais pas disparu",
              paragraphs: [
                "Le travail reste une valeur centrale : les personnes en emploi précaire ou au chômage aspirent le plus souvent à un emploi stable, ce qui montre que la norme d'intégration par le travail demeure. L'emploi conditionne toujours l'essentiel des revenus et des droits sociaux.",
                "Le travail peut toutefois aussi être une source de souffrance : le psychiatre Christophe Dejours, dans Souffrance en France (1998), analyse les effets de la peur de perdre son emploi et de la pression au travail. Par ailleurs, d'autres instances participent à l'intégration (famille, école, associations, État social par les minima sociaux). Pour conclure, il est plus juste de parler d'un affaiblissement inégal du pouvoir intégrateur du travail, qui touche surtout les moins qualifiés, les jeunes et les salariés précaires, que d'une disparition.",
              ],
            },
          ],
          keyPoints: [
            "Durkheim (1893) : la division du travail crée une solidarité organique fondée sur l'interdépendance.",
            "Le travail intègre par le revenu, l'identité et le statut, la sociabilité et les droits sociaux.",
            "Castel : société salariale ; zones d'intégration, de vulnérabilité et de désaffiliation.",
            "Paugam : rapport au travail (satisfaction) et rapport à l'emploi (stabilité) donnent quatre types d'intégration : assurée, incertaine, laborieuse, disqualifiante.",
            "Précarisation, chômage de longue durée et polarisation de la qualité des emplois affaiblissent le pouvoir intégrateur du travail, surtout pour les moins qualifiés et les jeunes.",
          ],
          example: {
            statement: "Classez ces salariés dans la typologie de Serge Paugam. (a) Julie, infirmière en CDI, passionnée par son métier. (b) Karim, ouvrier en CDI depuis vingt ans sur une ligne de conditionnement, qui juge son travail ennuyeux et peu reconnu. (c) Anaïs, journaliste pigiste enthousiaste, sans contrat stable. (d) Théo, intérimaire en entrepôt, qui n'aime pas son travail et change de mission chaque mois.",
            solution: [
              "Méthode : pour chaque personne, on regarde le rapport au travail (est-elle satisfaite de son activité ?) puis le rapport à l'emploi (son emploi est-il stable et protégé ?).",
              "(a) Julie : satisfaite et emploi stable, donc intégration assurée.",
              "(b) Karim : emploi stable mais insatisfait, donc intégration laborieuse.",
              "(c) Anaïs : satisfaite mais emploi instable, donc intégration incertaine.",
              "(d) Théo : insatisfait et emploi instable, donc intégration disqualifiante, la forme la plus fragile.",
              "Conclusion : l'emploi ne suffit pas à garantir une intégration pleine ; il faut à la fois un emploi stable et un travail qui procure satisfaction et reconnaissance.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez par quel canal le travail intègre l'individu dans chacune de ces situations. (a) Grâce à son salaire, Lucas a pu louer son premier appartement. (b) Après son arrêt maladie, Sofia a été indemnisée par l'Assurance maladie. (c) Chaque vendredi, Medhi déjeune avec les collègues de son service. (d) Claire se présente toujours en disant « je suis architecte ».",
              hint: "Les quatre canaux sont le revenu, l'identité et le statut social, la sociabilité et les droits sociaux.",
              solution: [
                "(a) Le revenu : il donne une autonomie matérielle.",
                "(b) Les droits sociaux : la protection sociale est en grande partie liée à l'emploi et financée par des cotisations.",
                "(c) La sociabilité : le travail crée des liens avec les collègues.",
                "(d) L'identité et le statut social : la profession sert à se définir et à être reconnu.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives : dans un pays, sur 25 millions de salariés, 3,5 millions sont en CDD ou en intérim. Parmi les 2,4 millions de salariés âgés de 15 à 24 ans, 1,2 million sont en CDD ou en intérim. (1) Calculez la part des contrats temporaires chez l'ensemble des salariés, puis chez les 15-24 ans. (2) Combien de fois plus fréquents sont les contrats temporaires chez les jeunes ? (3) Que peut-on en déduire sur leur intégration professionnelle selon Paugam ?",
              hint: "Part = effectif concerné ÷ effectif total × 100. Pour comparer, divisez une part par l'autre.",
              solution: [
                "(1) Ensemble : 3,5 ÷ 25 × 100 = 14 %. Jeunes de 15 à 24 ans : 1,2 ÷ 2,4 × 100 = 50 %.",
                "(2) 50 ÷ 14 ≈ 3,6 : les contrats temporaires sont environ 3,6 fois plus fréquents chez les jeunes salariés que chez l'ensemble des salariés.",
                "(3) Un salarié jeune sur deux a un emploi instable : son rapport à l'emploi est fragile. S'il est satisfait de son travail, son intégration est incertaine ; s'il ne l'est pas, elle est disqualifiante.",
                "Réponse : 14 % contre 50 %, soit un rapport d'environ 3,6 ; la précarité de l'emploi fragilise particulièrement l'intégration professionnelle des jeunes.",
              ],
            },
            {
              level: 3,
              statement: "Épreuve composée, partie 3 (raisonnement s'appuyant sur un dossier documentaire). Document 1 (données fictives) : la part des chômeurs de longue durée parmi les chômeurs est passée de 30 % à 40 % en dix ans. Document 2 (données fictives) : 60 % des salariés en contrat temporaire déclarent ne pas pouvoir faire de projets à long terme, contre 20 % des salariés en CDI. À l'aide de ces documents et de vos connaissances, vous montrerez que certaines évolutions de l'emploi affaiblissent le pouvoir intégrateur du travail.",
              hint: "Rappelez d'abord pourquoi le travail intègre, puis consacrez une partie au chômage persistant et une partie à la précarisation, en exploitant chaque document par un chiffre.",
              solution: [
                "Introduction : le travail est source d'intégration sociale par le revenu, l'identité, la sociabilité et les droits sociaux qu'il procure (Durkheim, Castel). Mais deux évolutions de l'emploi fragilisent ce rôle : la persistance d'un chômage de longue durée et la précarisation de l'emploi.",
                "Partie 1, le chômage de longue durée. Affirmation : il prive durablement des supports de l'intégration. Explication : sans emploi, l'individu perd son revenu d'activité, son statut et ses relations de travail ; plus le chômage dure, plus il risque de glisser vers la désaffiliation décrite par Castel, comme l'avaient montré les chômeurs de Marienthal. Illustration : selon le document 1, la part des chômeurs de longue durée est passée de 30 % à 40 %, soit une hausse de 10 points en dix ans.",
                "Partie 2, la précarisation. Affirmation : un emploi instable intègre moins qu'un emploi stable. Explication : selon Paugam, le rapport à l'emploi est une dimension de l'intégration professionnelle ; un salarié en contrat temporaire connaît au mieux une intégration incertaine. Il peut difficilement se projeter, accéder au logement ou au crédit. Illustration : selon le document 2, 60 % des salariés en contrat temporaire ne peuvent pas faire de projets à long terme, soit trois fois plus que les salariés en CDI (60 ÷ 20 = 3).",
                "Conclusion : chômage persistant et précarisation affaiblissent le pouvoir intégrateur du travail, de façon inégale selon les qualifications et l'âge ; le travail reste cependant une norme centrale, à laquelle aspirent ceux qui en sont privés.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion ou situation à ce qui lui correspond.",
            pairs: [
              { left: "Intégration assurée", right: "Travail satisfaisant et emploi stable" },
              { left: "Intégration laborieuse", right: "Travail insatisfaisant mais emploi stable" },
              { left: "Intégration incertaine", right: "Travail satisfaisant mais emploi instable" },
              { left: "Intégration disqualifiante", right: "Travail insatisfaisant et emploi instable" },
              { left: "Solidarité organique", right: "Lien fondé sur l'interdépendance née de la division du travail" },
              { left: "Désaffiliation", right: "Perte du travail et isolement relationnel, selon Castel" },
            ],
          },
          quiz: [
            {
              q: "Selon Durkheim, quel type de solidarité la division du travail crée-t-elle dans les sociétés modernes ?",
              options: [
                "Une solidarité mécanique fondée sur la ressemblance des individus",
                "Une solidarité familiale fondée sur la parenté",
                "Une solidarité organique fondée sur l'interdépendance",
              ],
              answer: 2,
              why: "La spécialisation rend les individus complémentaires : chacun dépend des autres, comme les organes d'un corps.",
            },
            {
              q: "Quelles sont les deux dimensions de l'intégration professionnelle selon Serge Paugam ?",
              options: [
                "Le rapport au travail et le rapport à l'emploi",
                "Le niveau de salaire et le niveau de diplôme",
                "La taille de l'entreprise et le secteur d'activité",
                "L'ancienneté et l'âge du salarié",
              ],
              answer: 0,
              why: "Paugam croise la satisfaction tirée du travail et la stabilité de l'emploi pour obtenir quatre types d'intégration.",
            },
            {
              q: "Un ouvrier en CDI qui s'ennuie dans son travail et ne se sent pas reconnu connaît une intégration :",
              options: [
                "assurée",
                "incertaine",
                "disqualifiante",
                "laborieuse",
              ],
              answer: 3,
              why: "L'emploi est stable mais le rapport au travail est insatisfaisant : c'est l'intégration laborieuse.",
            },
            {
              q: "Que désigne la société salariale chez Robert Castel ?",
              options: [
                "Une société où le salariat, devenu majoritaire, est associé à des protections et à des droits",
                "Une société où tous les revenus sont des salaires versés par l'État",
                "Une société où le salariat recule au profit du travail indépendant, devenu la forme d'emploi majoritaire et la mieux protégée",
              ],
              answer: 0,
              why: "Pendant les Trente Glorieuses, le salariat se généralise et s'accompagne de protections (CDI, sécurité sociale), ce qui en fait le support principal de l'intégration.",
            },
            {
              q: "Laquelle de ces évolutions affaiblit le pouvoir intégrateur du travail ?",
              options: [
                "La généralisation de la sécurité sociale après 1945",
                "La hausse de la part des chômeurs de longue durée",
                "La baisse du nombre de contrats temporaires",
              ],
              answer: 1,
              why: "Le chômage de longue durée prive durablement de revenu, de statut et de sociabilité, et peut conduire à la désaffiliation.",
            },
          ],
          trap: "Confondre intégration incertaine et intégration laborieuse : l'incertaine combine satisfaction au travail et emploi instable, la laborieuse combine emploi stable et travail insatisfaisant. Autre erreur : conclure que le travail n'intègre plus du tout, alors qu'il s'agit d'un affaiblissement inégal.",
          method: "Pour retenir la typologie de Paugam, dessinez un tableau à double entrée : en ligne le rapport au travail (satisfait, insatisfait), en colonne le rapport à l'emploi (stable, instable). Placez les quatre types dans les quatre cases et entraînez-vous à y classer des cas concrets.",
        },
      ],
    },

    /* ==================================================================== */
    /* L'ENGAGEMENT POLITIQUE                                                */
    /* ==================================================================== */
    {
      id: 'engagement-politique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'formes-de-l-engagement',
          title: 'Les formes de l\'engagement politique',
          minutes: 30,
          objectives: [
            "Comprendre que l'engagement politique prend des formes variées (vote, militantisme, engagement associatif, consommation engagée).",
            "Identifier la diversité et les transformations des objets de l'action collective (conflits du travail, nouveaux enjeux de mobilisation, luttes minoritaires).",
            "Distinguer les acteurs de l'action collective (partis politiques, syndicats, associations, groupements) et comprendre la transformation de ses répertoires.",
          ],
          course: [
            {
              heading: "Qu'est-ce que l'engagement politique ?",
              paragraphs: [
                "L'engagement politique désigne l'ensemble des activités par lesquelles des individus cherchent à peser sur le fonctionnement de la société et sur les décisions des pouvoirs publics. Il peut être individuel (voter, signer une pétition) ou collectif (militer dans un parti, faire grève, manifester). Dans ce dernier cas, on parle d'action collective : une action concertée de plusieurs individus en vue d'atteindre des objectifs communs.",
                "Le vote est la forme la plus répandue de participation politique, mais il n'est pas systématique : l'abstention progresse et beaucoup d'électeurs votent de façon intermittente, selon l'enjeu de l'élection. Le militantisme est un engagement durable et actif dans une organisation (parti, syndicat) : distribuer des tracts, organiser des réunions, faire campagne. L'engagement associatif passe par des associations, souvent créées sous le régime de la loi du 1er juillet 1901, qui défendent une cause (environnement, droits humains, aide aux plus démunis). La consommation engagée consiste à utiliser ses achats comme un moyen d'action : boycotter une marque, ou au contraire privilégier les produits du commerce équitable ou locaux (on parle parfois de « buycott »).",
                "On distingue souvent la participation conventionnelle, encadrée par les institutions (voter, adhérer à un parti, contacter un élu), et la participation non conventionnelle, qui passe par la protestation (manifestation, grève, pétition, boycott, occupation, désobéissance civile). La seconde n'est pas marginale : elle concerne une part importante des citoyens, et les deux formes se cumulent souvent chez les mêmes personnes.",
              ],
              box: { label: "Définition", text: "Engagement politique : participation active d'individus à la vie publique en vue d'influencer les décisions collectives. Ses formes vont du vote au militantisme, de l'engagement associatif à la consommation engagée." },
            },
            {
              heading: "Les acteurs de l'action collective",
              paragraphs: [
                "Les partis politiques cherchent à conquérir et à exercer le pouvoir : ils sélectionnent des candidats, élaborent des programmes et participent aux élections. Les syndicats, légalisés en France par la loi Waldeck-Rousseau de 1884, défendent les intérêts professionnels des salariés (ou des employeurs) : ils négocient avec le patronat et l'État, organisent des grèves et siègent dans des organismes paritaires.",
                "Les associations se mobilisent pour une cause et interviennent auprès des pouvoirs publics (Greenpeace, Médecins sans frontières, associations de consommateurs). Les groupes d'intérêt, ou lobbies, défendent les intérêts d'un secteur auprès des décideurs. Enfin, des groupements plus informels apparaissent : collectifs, coordinations ou mouvements nés sur les réseaux sociaux, comme le mouvement des « gilets jaunes » en 2018, qui s'est construit largement en dehors des partis et des syndicats.",
                "Les organisations traditionnelles connaissent un affaiblissement : les partis comptent peu d'adhérents, et le taux de syndicalisation en France est d'environ un salarié sur dix. L'engagement ne disparaît pas pour autant : il devient plus ponctuel, plus distancié, centré sur une cause précise plutôt que sur une adhésion durable à une organisation.",
              ],
            },
            {
              heading: "Des objets de mobilisation qui se diversifient",
              paragraphs: [
                "Pendant longtemps, les conflits du travail ont été l'objet principal de l'action collective : salaires, durée du travail, conditions de travail, défense de l'emploi. Ils restent importants, comme le montrent les grandes mobilisations contre les réformes des retraites, mais ils ne sont plus les seuls.",
                "Depuis la fin des années 1960, de nouveaux mouvements sociaux (expression du sociologue Alain Touraine) portent sur des enjeux qui dépassent le monde du travail : environnement, paix, féminisme, cadre de vie. Le politiste Ronald Inglehart les relie à la diffusion de valeurs post-matérialistes (qualité de vie, autonomie, expression de soi) chez des générations qui ont grandi dans la prospérité. Leurs acteurs sont souvent plus diplômés et issus des classes moyennes.",
                "Les luttes minoritaires sont menées par des groupes qui réclament l'égalité des droits et la reconnaissance : mouvement des droits civiques aux États-Unis dans les années 1950-1960, mobilisations antiracistes, mobilisations pour les droits des personnes homosexuelles, qui ont obtenu en France le PACS (1999) puis l'ouverture du mariage aux couples de même sexe (2013). Le mot « minoritaire » renvoie ici à une position dominée dans la société, et non nécessairement à un petit nombre.",
              ],
            },
            {
              heading: "Les répertoires de l'action collective",
              paragraphs: [
                "L'historien et sociologue Charles Tilly appelle répertoire d'action collective l'ensemble limité des moyens d'action qu'un groupe connaît et peut utiliser à une époque donnée. Les répertoires changent lentement, avec les transformations de l'État et de l'économie.",
                "Tilly distingue un répertoire local et patronné, dominant jusqu'au milieu du XIXe siècle (émeutes frumentaires, charivaris, appels à un notable pour qu'il intercède auprès des autorités), et un répertoire national et autonome, qui s'impose ensuite avec l'État-nation et l'industrialisation : grève, manifestation de rue, pétition, réunion publique, menés par des organisations permanentes qui s'adressent directement à l'État.",
                "Depuis la fin du XXe siècle, les répertoires se transforment encore : actions transnationales (forums et mobilisations à l'échelle mondiale), recherche de la médiatisation par des actions spectaculaires, recours au droit et aux tribunaux, occupations de lieux, et surtout usage du numérique (pétitions en ligne, mobilisations organisées sur les réseaux sociaux, mots-dièse comme #MeToo en 2017). Ces nouveaux moyens s'ajoutent aux anciens plus qu'ils ne les remplacent.",
              ],
              box: { label: "Définition", text: "Répertoire d'action collective (Charles Tilly) : ensemble des moyens d'action disponibles pour un groupe à une époque donnée. On passe d'un répertoire local et patronné à un répertoire national et autonome, puis à des formes transnationales, médiatiques et numériques." },
            },
          ],
          keyPoints: [
            "L'engagement politique prend des formes variées : vote, militantisme, engagement associatif, consommation engagée.",
            "Participation conventionnelle (vote, adhésion) et non conventionnelle (manifestation, grève, boycott) se cumulent souvent.",
            "Acteurs : partis, syndicats (loi de 1884), associations (loi de 1901), groupes d'intérêt et groupements informels.",
            "Objets : conflits du travail, nouveaux mouvements sociaux (environnement, féminisme), luttes minoritaires.",
            "Tilly : répertoire local et patronné, puis national et autonome ; aujourd'hui des formes transnationales, juridiques et numériques s'y ajoutent.",
          ],
          example: {
            statement: "Classez les actions suivantes selon leur forme d'engagement et dites si elles relèvent de la participation conventionnelle ou non conventionnelle : (a) voter aux élections municipales ; (b) refuser d'acheter les produits d'une entreprise accusée de faire travailler des enfants ; (c) distribuer chaque semaine les tracts d'un parti ; (d) participer à une grève pour les salaires ; (e) donner de son temps à une association de défense des sans-abri.",
            solution: [
              "(a) Vote : participation conventionnelle, la plus répandue.",
              "(b) Consommation engagée (boycott) : participation non conventionnelle, l'achat devient un moyen de pression.",
              "(c) Militantisme partisan : participation conventionnelle, car elle passe par une organisation intégrée au jeu institutionnel.",
              "(d) Action collective sur un conflit du travail, menée par un moyen du répertoire national et autonome (la grève) : participation non conventionnelle.",
              "(e) Engagement associatif : il vise à peser sur la prise en charge d'un problème public, par l'aide directe et l'interpellation des pouvoirs publics.",
              "Conclusion : un même citoyen peut combiner plusieurs de ces formes ; l'engagement politique ne se réduit pas au vote.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque organisation ou mouvement à sa catégorie d'acteur (parti politique, syndicat, association, groupement informel) : (a) une organisation qui présente des candidats à l'élection présidentielle ; (b) une organisation qui négocie les salaires dans une branche professionnelle ; (c) une organisation loi 1901 qui défend les droits des consommateurs ; (d) un collectif d'habitants créé sur un réseau social pour s'opposer à la fermeture d'une maternité.",
              hint: "Demandez-vous quel est le but principal de chaque acteur : conquérir le pouvoir, défendre des intérêts professionnels, défendre une cause, ou se mobiliser ponctuellement sans structure durable.",
              solution: [
                "(a) Parti politique : il cherche à conquérir et exercer le pouvoir par les élections.",
                "(b) Syndicat : il défend les intérêts professionnels et négocie avec les employeurs.",
                "(c) Association : elle défend une cause, ici les droits des consommateurs.",
                "(d) Groupement informel : une mobilisation ponctuelle, sans organisation permanente, typique des formes récentes d'action collective.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives d'une enquête auprès de 1 600 personnes : 1 040 déclarent avoir voté à la dernière élection, 480 avoir signé une pétition dans l'année, 240 avoir participé à une manifestation, 64 être adhérents d'un parti. (1) Calculez le pourcentage de répondants concernés par chaque forme. (2) Combien de fois la signature de pétitions est-elle plus fréquente que l'adhésion à un parti ? (3) Que montrent ces résultats sur les formes de l'engagement ?",
              hint: "Pourcentage = effectif concerné ÷ 1 600 × 100.",
              solution: [
                "(1) Vote : 1 040 ÷ 1 600 × 100 = 65 %. Pétition : 480 ÷ 1 600 × 100 = 30 %. Manifestation : 240 ÷ 1 600 × 100 = 15 %. Adhésion à un parti : 64 ÷ 1 600 × 100 = 4 %.",
                "(2) 30 ÷ 4 = 7,5 : dans cette enquête, la signature de pétitions est 7,5 fois plus fréquente que l'adhésion à un parti.",
                "(3) Le vote reste la forme la plus répandue, mais la participation non conventionnelle (pétition, manifestation) concerne une part importante des répondants, alors que le militantisme partisan est rare. Cela illustre un engagement plus ponctuel et distancié, moins centré sur l'adhésion durable aux organisations.",
              ],
            },
            {
              level: 3,
              statement: "Épreuve composée, partie 1 (mobilisation des connaissances, 4 points) : Montrez que les répertoires de l'action collective se sont transformés.",
              hint: "Définissez la notion de répertoire avec Tilly, puis présentez deux transformations en les datant et en les illustrant.",
              solution: [
                "Introduction : selon Charles Tilly, un répertoire d'action collective est l'ensemble des moyens d'action dont dispose un groupe à une époque donnée. Ces répertoires évoluent avec les transformations de l'État et de la société.",
                "Première transformation : du répertoire local et patronné au répertoire national et autonome. Jusqu'au milieu du XIXe siècle, les actions sont locales (émeutes frumentaires, charivaris) et passent par l'intercession d'un notable. Avec la construction de l'État-nation et l'industrialisation, s'imposent la grève, la manifestation et la pétition, menées par des organisations permanentes (syndicats, partis) qui s'adressent directement à l'État.",
                "Seconde transformation : depuis la fin du XXe siècle, de nouvelles formes s'ajoutent. Les mobilisations deviennent transnationales, recherchent la médiatisation par des actions spectaculaires, recourent au droit (actions en justice contre l'État ou des entreprises) et utilisent le numérique : pétitions en ligne, mobilisations organisées sur les réseaux sociaux, comme le mouvement #MeToo en 2017 ou celui des gilets jaunes en 2018.",
                "Conclusion : les répertoires se transforment par ajout plus que par remplacement : grève et manifestation restent centrales, mais elles coexistent avec des formes plus individualisées et numériques.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les formes de l'engagement politique.",
            statements: [
              { text: "L'engagement politique se limite au vote et à l'adhésion à un parti.", true: false, why: "Il comprend aussi le militantisme syndical, l'engagement associatif, la manifestation, la pétition et la consommation engagée." },
              { text: "Boycotter une marque pour des raisons éthiques est une forme de consommation engagée.", true: true, why: "L'achat ou le refus d'achat devient un moyen de pression politique." },
              { text: "La grève et la manifestation appartiennent au répertoire national et autonome décrit par Tilly.", true: true, why: "Ces moyens s'imposent à partir du milieu du XIXe siècle avec l'État-nation et les organisations permanentes." },
              { text: "Les nouveaux mouvements sociaux portent principalement sur les salaires.", true: false, why: "Ils portent sur des enjeux qualitatifs (environnement, féminisme, paix), liés aux valeurs post-matérialistes." },
              { text: "En France, environ un salarié sur dix est syndiqué.", true: true, why: "Le taux de syndicalisation est faible, ce qui n'empêche pas les syndicats de jouer un rôle important dans la négociation." },
              { text: "Une lutte minoritaire est forcément menée par un petit nombre de personnes.", true: false, why: "« Minoritaire » renvoie à une position dominée dans la société, pas nécessairement à un petit effectif." },
              { text: "Les mobilisations numériques ont fait disparaître les manifestations de rue.", true: false, why: "Les nouveaux moyens s'ajoutent aux anciens : les répertoires se transforment surtout par ajout." },
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces actions relève de la participation non conventionnelle ?",
              options: [
                "Voter à une élection législative",
                "Adhérer à un parti politique",
                "Écrire à son député",
                "Participer à une manifestation",
              ],
              answer: 3,
              why: "La manifestation est une action protestataire, hors des procédures institutionnelles ; les trois autres actions passent par les institutions.",
            },
            {
              q: "Que désigne le répertoire d'action collective selon Charles Tilly ?",
              options: [
                "La liste des organisations autorisées par la loi à manifester dans l'espace public",
                "L'ensemble des moyens d'action disponibles pour un groupe à une époque donnée",
                "Le programme électoral d'un parti politique",
              ],
              answer: 1,
              why: "Un répertoire est un ensemble limité de moyens d'action connus et utilisables, qui évolue lentement avec la société.",
            },
            {
              q: "À quel courant d'analyse renvoient les valeurs post-matérialistes ?",
              options: [
                "Aux travaux de Ronald Inglehart",
                "Aux travaux de Mancur Olson sur le passager clandestin",
                "À la loi Waldeck-Rousseau de 1884 sur les syndicats",
              ],
              answer: 0,
              why: "Inglehart explique l'essor de valeurs comme la qualité de vie et l'autonomie chez les générations élevées dans la prospérité.",
            },
            {
              q: "Lequel de ces mouvements est un exemple de lutte minoritaire ?",
              options: [
                "Une grève pour une hausse des salaires dans une usine automobile",
                "Le mouvement pour les droits civiques aux États-Unis",
                "Une campagne d'un parti pour l'élection présidentielle",
                "Une négociation de branche entre syndicats et patronat",
              ],
              answer: 1,
              why: "Les luttes minoritaires sont menées par des groupes en position dominée qui réclament l'égalité des droits et la reconnaissance.",
            },
            {
              q: "Quelle évolution caractérise l'engagement politique contemporain ?",
              options: [
                "La disparition complète du vote",
                "Un engagement plus ponctuel, centré sur des causes",
                "La hausse continue des adhésions aux partis et aux syndicats",
              ],
              answer: 1,
              why: "Les adhésions aux organisations reculent, mais l'engagement se maintient sous des formes plus ponctuelles et distanciées.",
            },
          ],
          trap: "Assimiler la baisse des adhésions aux partis et aux syndicats à un recul de l'engagement politique : l'engagement change de forme (pétitions, manifestations, associations, consommation engagée) plus qu'il ne disparaît.",
          method: "Pour une question sur les transformations de l'action collective, organisez votre réponse selon trois entrées : les objets (pourquoi on se mobilise), les acteurs (qui se mobilise) et les répertoires (comment on se mobilise). Pour chacune, opposez un exemple ancien et un exemple récent.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'paradoxe-action-collective',
          title: 'Le paradoxe de l\'action collective et les déterminants de l\'engagement',
          minutes: 35,
          objectives: [
            "Expliquer le paradoxe de l'action collective et la stratégie du passager clandestin.",
            "Comprendre pourquoi, malgré ce paradoxe, les individus s'engagent (incitations sélectives, rétributions symboliques, structure des opportunités politiques).",
            "Montrer que l'engagement politique dépend de variables sociodémographiques (catégorie socioprofessionnelle, diplôme, âge et génération, sexe).",
          ],
          course: [
            {
              heading: "Le paradoxe de l'action collective selon Olson",
              paragraphs: [
                "Dans La logique de l'action collective (1965), l'économiste américain Mancur Olson part d'un constat : un intérêt commun ne suffit pas à provoquer une mobilisation. Il raisonne avec l'hypothèse d'un individu rationnel qui compare les coûts et les avantages de son engagement.",
                "L'objectif d'une action collective est souvent un bien collectif : une fois obtenu, il profite à tous les membres du groupe, qu'ils aient participé ou non. Une hausse de salaire négociée après une grève s'applique à tous les salariés de l'entreprise, y compris ceux qui n'ont pas fait grève. Or participer a un coût (salaire perdu, temps, risque de sanction). L'individu rationnel a donc intérêt à laisser les autres agir et à profiter du résultat sans en payer le prix : c'est la stratégie du passager clandestin (free rider).",
                "Si tous raisonnent ainsi, personne ne se mobilise et le bien collectif n'est pas obtenu, alors qu'il aurait profité à tous : c'est le paradoxe de l'action collective. Olson ajoute que le problème est plus aigu dans les grands groupes, où la contribution de chacun paraît négligeable et où l'abstention passe inaperçue, que dans les petits groupes, où chacun voit que son absence compte.",
              ],
              box: { label: "Définition", text: "Passager clandestin (Olson) : individu qui bénéficie d'un bien collectif sans participer au coût de son obtention. Le paradoxe de l'action collective : des individus rationnels qui ont un intérêt commun peuvent ne pas se mobiliser." },
            },
            {
              heading: "Pourquoi les individus s'engagent malgré tout",
              paragraphs: [
                "Olson propose lui-même une solution : les incitations sélectives, c'est-à-dire des avantages réservés aux participants ou des sanctions pour ceux qui ne participent pas. Un syndicat peut offrir à ses adhérents une aide juridique, des réductions ou une assurance ; aux États-Unis, la pratique du closed shop réservait certaines embauches aux syndiqués. Les incitations négatives prennent la forme de pressions ou de réprobation envers les non-grévistes.",
                "Le politiste Daniel Gaxie a montré, à la fin des années 1970, que le militantisme procure des rétributions symboliques : estime et reconnaissance, sociabilité et amitiés, sentiment d'être utile et de défendre ses valeurs, acquisition de compétences (prendre la parole, organiser), voire accès à des postes ou à des mandats. Le coût de l'engagement est alors compensé par ce qu'il apporte à l'individu.",
                "Enfin, l'engagement dépend du contexte politique. La structure des opportunités politiques désigne le degré d'ouverture du système politique aux revendications : un pouvoir divisé ou affaibli, l'approche d'une élection, la présence d'alliés parmi les élus, une faible répression rendent la mobilisation plus probable et plus efficace. À l'inverse, un régime répressif ou une majorité solide la découragent.",
              ],
              box: { label: "À retenir", text: "Trois réponses au paradoxe d'Olson : les incitations sélectives (avantages réservés aux participants, sanctions des non-participants), les rétributions symboliques du militantisme (Gaxie) et la structure des opportunités politiques (contexte favorable ou non)." },
            },
            {
              heading: "Le diplôme et la catégorie socioprofessionnelle",
              paragraphs: [
                "L'engagement politique n'est pas réparti au hasard. Le diplôme est la variable la plus discriminante : plus on est diplômé, plus on vote, on signe des pétitions, on manifeste et on milite. Le diplôme donne un sentiment de compétence politique, c'est-à-dire le sentiment d'être légitime pour s'exprimer et de comprendre les enjeux. Daniel Gaxie a parlé de « cens caché » (1978) : même si le suffrage est universel, les moins diplômés s'excluent d'eux-mêmes de la participation, comme si un cens invisible subsistait.",
                "La catégorie socioprofessionnelle joue aussi : les cadres et les professions intellectuelles supérieures participent davantage que les ouvriers et les employés. Les formes diffèrent toutefois : le syndicalisme est plus implanté dans la fonction publique et dans les grandes entreprises, et l'engagement associatif est plus fréquent chez les catégories moyennes et supérieures.",
              ],
            },
            {
              heading: "L'âge, la génération et le sexe",
              paragraphs: [
                "Il faut distinguer l'effet d'âge et l'effet de génération. L'effet d'âge tient à la position dans le cycle de vie : les jeunes, peu installés (études, mobilité, emploi précaire), votent de façon plus intermittente ; la participation électorale augmente ensuite avec l'âge, avant de reculer aux âges très avancés. L'effet de génération tient au contexte dans lequel une génération a été socialisée : les générations nées après la guerre, socialisées autour de Mai 1968, ont davantage recours à la protestation ; les jeunes générations actuelles privilégient l'engagement ponctuel, associatif ou numérique, et s'investissent fortement sur l'environnement.",
                "Le sexe est aussi une variable explicative. Les Françaises n'ont obtenu le droit de vote qu'en 1944 et l'ont exercé pour la première fois en 1945. L'écart de participation électorale entre hommes et femmes s'est aujourd'hui largement réduit, mais les femmes restent moins présentes aux postes de responsabilité des partis et des syndicats, ce qui s'explique par une socialisation différenciée et par l'inégal partage des tâches domestiques. La loi du 6 juin 2000 sur la parité a imposé des candidatures paritaires pour plusieurs élections.",
              ],
            },
          ],
          keyPoints: [
            "Olson (1965) : un bien collectif profite à tous ; l'individu rationnel peut être passager clandestin, d'où le paradoxe de l'action collective.",
            "Incitations sélectives : avantages réservés aux participants ou sanctions pour les non-participants.",
            "Rétributions symboliques du militantisme (Gaxie) : reconnaissance, sociabilité, compétences, postes.",
            "Structure des opportunités politiques : un contexte ouvert ou un pouvoir affaibli favorisent la mobilisation.",
            "Le diplôme est la variable la plus discriminante (sentiment de compétence politique, « cens caché ») ; la PCS, l'âge, la génération et le sexe jouent aussi.",
          ],
          example: {
            statement: "Dans une entreprise de 100 salariés, une grève d'une journée pourrait obtenir une prime de 300 € par an versée à tous les salariés. Faire grève coûte à chaque gréviste une journée de salaire, soit 100 €. La direction accordera la prime si au moins 60 salariés font grève. Expliquez pourquoi un salarié rationnel, au sens d'Olson, peut décider de ne pas faire grève, et ce qui peut le pousser à participer quand même.",
            solution: [
              "Pour le groupe, la grève est avantageuse : si elle réussit, chaque gréviste gagne 300 - 100 = 200 € net, et chaque non-gréviste 300 €.",
              "Raisonnement individuel : si au moins 60 autres salariés font grève, la prime est obtenue sans lui ; en s'abstenant, il gagne 300 € au lieu de 200 €. S'il y a moins de 59 autres grévistes, sa participation ne suffit pas, et faire grève lui fait perdre 100 € pour rien.",
              "Sa participation ne change le résultat que dans un cas très particulier (exactement 59 autres grévistes). Dans presque tous les cas, il a intérêt à ne pas faire grève : c'est la stratégie du passager clandestin.",
              "Si chacun raisonne ainsi, il y a moins de 60 grévistes et personne n'obtient la prime : c'est le paradoxe de l'action collective.",
              "Ce qui peut le pousser à participer : des incitations sélectives (aide juridique du syndicat réservée aux adhérents, pression des collègues), des rétributions symboliques (sentiment de solidarité, reconnaissance), ou un contexte favorable (direction fragilisée par des commandes urgentes, ce qui relève de la structure des opportunités).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez si chaque situation illustre une incitation sélective, une rétribution symbolique ou la structure des opportunités politiques. (a) Un syndicat offre à ses adhérents une assistance juridique gratuite. (b) Une militante se sent reconnue et a noué de solides amitiés dans son parti. (c) Une association multiplie les actions à l'approche d'une élection, quand les candidats cherchent des soutiens. (d) Les non-grévistes d'un atelier sont mis à l'écart par leurs collègues.",
              hint: "Une incitation sélective est un avantage ou une sanction réservé à certains ; une rétribution symbolique est une satisfaction tirée de l'engagement lui-même ; la structure des opportunités dépend du contexte politique.",
              solution: [
                "(a) Incitation sélective positive : l'avantage est réservé aux adhérents.",
                "(b) Rétribution symbolique : reconnaissance et sociabilité tirées du militantisme (Gaxie).",
                "(c) Structure des opportunités politiques : la période électorale rend les décideurs plus réceptifs.",
                "(d) Incitation sélective négative : une sanction sociale vise ceux qui ne participent pas.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives : dans une enquête, 400 personnes sans diplôme ou titulaires du seul brevet, dont 60 ont signé une pétition dans l'année ; 500 bacheliers, dont 125 ont signé une pétition ; 600 diplômés du supérieur, dont 270 ont signé une pétition. (1) Calculez le taux de signature de chaque groupe. (2) Calculez l'écart en points et le rapport entre les diplômés du supérieur et les moins diplômés. (3) Calculez le taux de signature de l'ensemble des répondants. (4) Interprétez.",
              hint: "Le taux d'ensemble n'est pas la moyenne simple des trois taux : rapportez le total des signataires au total des répondants.",
              solution: [
                "(1) Moins diplômés : 60 ÷ 400 × 100 = 15 %. Bacheliers : 125 ÷ 500 × 100 = 25 %. Diplômés du supérieur : 270 ÷ 600 × 100 = 45 %.",
                "(2) Écart : 45 - 15 = 30 points de pourcentage. Rapport : 45 ÷ 15 = 3 ; les diplômés du supérieur signent trois fois plus souvent que les moins diplômés.",
                "(3) Total des signataires : 60 + 125 + 270 = 455. Total des répondants : 400 + 500 + 600 = 1 500. Taux d'ensemble : 455 ÷ 1 500 × 100 ≈ 30,3 %. (La moyenne simple des trois taux, 28,3 %, serait fausse car les groupes n'ont pas la même taille.)",
                "(4) La participation croît avec le diplôme. Le diplôme donne un sentiment de compétence politique et des ressources (aisance à l'écrit, information) qui facilitent l'engagement ; les moins diplômés s'excluent davantage, ce que Gaxie appelle le « cens caché ».",
              ],
            },
            {
              level: 3,
              statement: "Épreuve composée, partie 3. Document 1 (données fictives) : taux de participation au premier tour d'une élection selon l'âge : 18-24 ans, 55 % ; 25-34 ans, 60 % ; 35-59 ans, 75 % ; 60-74 ans, 85 %. Document 2 (données fictives) : part des responsables de partis et de syndicats qui sont des femmes : 30 %. À l'aide de ces documents et de vos connaissances, vous montrerez que l'engagement politique dépend de variables sociodémographiques.",
              hint: "Prévoyez au moins trois variables : le diplôme (connaissances), l'âge ou la génération (document 1) et le sexe (document 2). Pour chacune, affirmation, explication, illustration.",
              solution: [
                "Introduction : l'engagement politique (vote, militantisme, protestation) n'est pas réparti au hasard ; sa probabilité et sa forme varient selon des variables sociodémographiques comme le diplôme, la PCS, l'âge et le sexe.",
                "Premier argument, le diplôme et la PCS : les plus diplômés et les cadres participent davantage, car ils disposent d'un sentiment de compétence politique et de ressources (information, aisance à l'oral). Daniel Gaxie parle de « cens caché » pour désigner l'auto-exclusion des moins diplômés.",
                "Deuxième argument, l'âge : selon le document 1, la participation passe de 55 % chez les 18-24 ans à 85 % chez les 60-74 ans, soit 30 points d'écart. Effet d'âge : les jeunes, moins installés, votent de façon intermittente. Il faut le distinguer d'un effet de génération : les jeunes générations privilégient des formes plus ponctuelles (pétitions, manifestations pour le climat).",
                "Troisième argument, le sexe : selon le document 2, les femmes ne représentent que 30 % des responsables de partis et de syndicats, alors qu'elles sont environ la moitié de la population. La socialisation différenciée et l'inégal partage des tâches domestiques limitent leur accès aux responsabilités militantes, même si l'écart de participation électorale s'est réduit et si la loi de 2000 sur la parité a favorisé leur présence parmi les élus.",
                "Conclusion : l'engagement politique dépend de ressources inégalement réparties selon le diplôme, l'âge et le sexe ; ces variables expliquent à la fois le niveau et la forme de la participation.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le raisonnement d'Olson sur le paradoxe de l'action collective.",
            items: [
              "Les membres d'un groupe ont un intérêt commun.",
              "L'objectif visé est un bien collectif qui profitera à tous, participants ou non.",
              "Participer à l'action a un coût pour chaque individu.",
              "Chaque individu rationnel a intérêt à laisser les autres agir à sa place.",
              "Si tous raisonnent ainsi, la mobilisation n'a pas lieu.",
              "Des incitations sélectives réservées aux participants peuvent lever le paradoxe.",
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'un passager clandestin au sens d'Olson ?",
              options: [
                "Un militant qui change souvent de parti politique au cours de sa vie, au gré des élections",
                "Un individu qui profite d'un bien collectif sans contribuer à son obtention",
                "Un électeur qui vote sans être inscrit sur les listes électorales",
              ],
              answer: 1,
              why: "Le bien collectif profite à tous ; l'individu rationnel peut en bénéficier sans supporter le coût de la mobilisation.",
            },
            {
              q: "Selon Olson, dans quel type de groupe le paradoxe de l'action collective est-il le plus fort ?",
              options: [
                "Dans les grands groupes",
                "Dans les petits groupes",
                "Dans les groupes composés uniquement de cadres",
              ],
              answer: 0,
              why: "Dans un grand groupe, la contribution de chacun paraît négligeable et l'abstention passe inaperçue.",
            },
            {
              q: "Une adhérente reste dans son syndicat pour l'estime de ses collègues et les amitiés qu'elle y a nouées. Il s'agit :",
              options: [
                "d'une incitation sélective négative",
                "de la structure des opportunités politiques de son pays",
                "d'une rétribution symbolique du militantisme",
                "de la stratégie du passager clandestin",
              ],
              answer: 2,
              why: "Daniel Gaxie appelle rétributions symboliques les satisfactions tirées de l'engagement lui-même : reconnaissance, sociabilité, sentiment d'utilité.",
            },
            {
              q: "Quelle est la variable sociodémographique la plus discriminante pour expliquer la participation politique ?",
              options: [
                "La région de résidence",
                "Le mois de naissance",
                "La taille du logement",
                "Le niveau de diplôme",
              ],
              answer: 3,
              why: "Le diplôme donne un sentiment de compétence politique et des ressources qui favorisent toutes les formes de participation.",
            },
            {
              q: "Les jeunes votent moins que leurs aînés parce qu'ils sont moins installés dans la vie (études, emploi, logement). Il s'agit d'un :",
              options: [
                "effet de génération",
                "effet d'âge",
                "effet de structure",
              ],
              answer: 1,
              why: "L'effet d'âge tient à la position dans le cycle de vie et s'atténue en vieillissant ; l'effet de génération tient au contexte de socialisation et persiste.",
            },
          ],
          trap: "Croire qu'Olson affirme que personne ne se mobilise : il montre qu'un intérêt commun ne suffit pas et que la mobilisation doit être expliquée, notamment par les incitations sélectives. Autre erreur : confondre effet d'âge (position dans le cycle de vie) et effet de génération (contexte de socialisation).",
          method: "Face à un document sur la participation selon l'âge, posez-vous systématiquement la question : l'écart disparaîtra-t-il quand les jeunes vieilliront (effet d'âge) ou les accompagnera-t-il toute leur vie (effet de génération) ? Seules des données suivant les mêmes générations dans le temps permettent de trancher.",
        },
      ],
    },

    /* ==================================================================== */
    /* REGARDS CROISÉS : JUSTICE SOCIALE ET ENVIRONNEMENT                    */
    /* ==================================================================== */
    {
      id: 'regards-croises',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'mesurer-les-inegalites',
          title: 'Mesurer les inégalités : courbe de Lorenz et indice de Gini',
          minutes: 35,
          objectives: [
            "Connaître les grandes tendances d'évolution des inégalités économiques depuis le début du XXe siècle.",
            "Comprendre que les inégalités économiques et sociales présentent un caractère multiforme et cumulatif.",
            "Interpréter les principaux outils de mesure statique des inégalités : rapport interquantile, courbe de Lorenz, coefficient de Gini, part du top 1 %.",
            "Interpréter un outil de mesure dynamique : la corrélation entre le revenu des parents et celui des enfants.",
          ],
          course: [
            {
              heading: "Des inégalités multiformes et cumulatives",
              paragraphs: [
                "Une inégalité est une différence d'accès à des ressources socialement valorisées (revenu, patrimoine, diplôme, santé, pouvoir) qui se traduit par des avantages et des désavantages et place les individus dans une hiérarchie. Les inégalités économiques portent sur les revenus et le patrimoine ; les inégalités sociales portent sur l'accès à l'éducation, à la santé, au logement, à la culture ou au pouvoir, et sur l'espérance de vie.",
                "Le patrimoine (ensemble des biens possédés : logement, placements, entreprises) est beaucoup plus inégalement réparti que le revenu, car il s'accumule au fil du temps et se transmet par héritage. Il produit en outre des revenus (loyers, dividendes, intérêts) qui accroissent les écarts.",
                "Les inégalités sont multiformes, car elles touchent de nombreux domaines, et cumulatives, car elles se renforcent mutuellement. Un faible revenu oblige à se loger dans des quartiers moins favorisés, où l'accès aux meilleurs établissements scolaires est plus difficile ; un diplôme plus faible conduit à des emplois moins bien payés, plus pénibles et plus exposés au chômage, avec des effets sur la santé. Les avantages s'accumulent de la même façon aux autres extrémités de l'échelle sociale.",
              ],
              box: { label: "Définition", text: "Inégalités cumulatives : les inégalités dans un domaine (revenu, diplôme, logement, santé) entraînent et renforcent des inégalités dans d'autres domaines, si bien que avantages et désavantages tendent à se concentrer sur les mêmes personnes." },
            },
            {
              heading: "Les grandes tendances depuis le début du XXe siècle",
              paragraphs: [
                "Les travaux de Thomas Piketty et de ses coauteurs, fondés sur les données fiscales et synthétisés dans Le Capital au XXIe siècle (2013), montrent qu'au début du XXe siècle les inégalités de revenus et surtout de patrimoine étaient très élevées dans les pays industrialisés : une petite élite détenait l'essentiel des fortunes.",
                "Entre 1914 et 1945, les inégalités reculent fortement : les guerres détruisent une partie des patrimoines, l'inflation et la crise des années 1930 érodent les fortunes, et l'impôt progressif sur le revenu et sur les successions se développe. Pendant les Trente Glorieuses, les inégalités restent relativement faibles, grâce à la croissance, à la hausse des salaires et à l'essor de la protection sociale.",
                "Depuis les années 1980, les inégalités de revenus et de patrimoine remontent dans la plupart des pays développés, mais de façon très inégale : la hausse est forte aux États-Unis et au Royaume-Uni, notamment pour la part des revenus captée par les 1 % les plus aisés, et plus modérée en France et dans d'autres pays d'Europe continentale, où la redistribution reste importante. Au niveau mondial, les inégalités entre pays ont diminué grâce à la croissance de pays émergents comme la Chine et l'Inde.",
              ],
            },
            {
              heading: "Les mesures statiques : quantiles, Lorenz, Gini, top 1 %",
              paragraphs: [
                "On classe la population par revenu croissant et on la découpe en groupes de même effectif. Les déciles (D1 à D9) la partagent en dix groupes : D1 est le revenu au-dessous duquel se situent les 10 % les plus modestes, D9 celui au-dessus duquel se situent les 10 % les plus aisés, et D5 est la médiane. Le rapport interdécile D9 ÷ D1 compare ces deux seuils. Le rapport S80 ÷ S20 compare la masse des revenus perçus par les 20 % les plus aisés à celle des 20 % les plus modestes. La part du top 1 % mesure la part du revenu (ou du patrimoine) total détenue par le centième le plus riche, ce qui renseigne sur le haut de la distribution, que les déciles décrivent mal.",
                "La courbe de Lorenz représente, en abscisse, la part cumulée de la population classée par revenu croissant et, en ordonnée, la part cumulée du revenu qu'elle reçoit. Si les revenus étaient parfaitement égaux, les 20 % les plus modestes recevraient 20 % du revenu, les 50 % en recevraient 50 % : la courbe serait la diagonale, appelée droite d'égalité parfaite. Plus la courbe s'éloigne de cette diagonale (plus elle est « creusée »), plus la répartition est inégalitaire.",
                "Le coefficient (ou indice) de Gini mesure cet écart : c'est le rapport entre la surface comprise entre la diagonale et la courbe de Lorenz et la surface totale du triangle situé sous la diagonale. Il varie de 0 (égalité parfaite) à 1 (inégalité maximale : une seule personne reçoit tout). C'est un indicateur synthétique, utile pour comparer des pays ou des périodes, mais il ne dit pas où se situent les inégalités : deux courbes de Lorenz différentes peuvent donner le même Gini.",
              ],
              box: { label: "Formule", text: "Rapport interdécile = D9 ÷ D1. Rapport S80/S20 = revenus perçus par les 20 % les plus aisés ÷ revenus perçus par les 20 % les plus modestes. Indice de Gini = surface entre la diagonale et la courbe de Lorenz ÷ surface sous la diagonale, compris entre 0 et 1." },
            },
            {
              heading: "La mesure dynamique : du revenu des parents à celui des enfants",
              paragraphs: [
                "Les mesures statiques décrivent les inégalités à un moment donné. Une mesure dynamique regarde comment elles se transmettent d'une génération à l'autre : on calcule la corrélation (ou l'élasticité) entre le revenu des parents et celui de leurs enfants devenus adultes.",
                "Une élasticité de 0 signifie que le revenu des enfants ne dépend pas de celui des parents ; une élasticité de 1 signifie que les écarts se reproduisent intégralement. Avec une élasticité de 0,4, un écart de 10 % entre les revenus de deux familles se traduit, en moyenne, par un écart de 4 % entre les revenus de leurs enfants. Plus l'élasticité est élevée, plus la mobilité intergénérationnelle est faible et plus l'égalité des chances est éloignée.",
                "L'économiste Alan Krueger a popularisé en 2012 la « courbe de Gatsby le magnifique » : les pays où les inégalités de revenus sont les plus fortes (coefficient de Gini élevé) sont souvent aussi ceux où la transmission des revenus entre générations est la plus forte. Les inégalités d'aujourd'hui tendent ainsi à devenir les inégalités de demain.",
              ],
              box: { label: "À retenir", text: "Mesures statiques : D9/D1, S80/S20, courbe de Lorenz, Gini, part du top 1 %. Mesure dynamique : corrélation ou élasticité entre revenu des parents et revenu des enfants ; plus elle est forte, moins la société est mobile." },
            },
          ],
          keyPoints: [
            "Les inégalités sont multiformes (revenu, patrimoine, santé, éducation...) et cumulatives (elles se renforcent entre elles).",
            "Forte baisse des inégalités de 1914 à 1945, stabilité pendant les Trente Glorieuses, remontée depuis les années 1980, surtout aux États-Unis.",
            "D9/D1 compare deux seuils ; S80/S20 compare deux masses de revenus ; le top 1 % éclaire le sommet de la distribution.",
            "Plus la courbe de Lorenz s'éloigne de la diagonale, plus la répartition est inégalitaire ; le Gini varie de 0 (égalité) à 1.",
            "L'élasticité intergénérationnelle des revenus mesure la transmission des inégalités ; elle est plus forte dans les pays plus inégalitaires (courbe de Gatsby).",
          ],
          example: {
            statement: "Dans un pays (données fictives), le premier décile de niveau de vie annuel est de 11 000 € et le neuvième décile de 39 600 €. Calculez le rapport interdécile et rédigez une phrase qui l'interprète correctement.",
            solution: [
              "Le rapport interdécile se calcule par D9 ÷ D1.",
              "D9 ÷ D1 = 39 600 ÷ 11 000 = 3,6. Vérification : 11 000 × 3,6 = 39 600.",
              "Lecture des déciles : 10 % des personnes ont un niveau de vie inférieur à 11 000 € par an, et 10 % ont un niveau de vie supérieur à 39 600 €.",
              "Interprétation : le niveau de vie minimal des 10 % les plus aisés est 3,6 fois plus élevé que le niveau de vie maximal des 10 % les plus modestes.",
              "Attention : il ne faut pas écrire que les riches gagnent 3,6 fois plus que les pauvres en moyenne. D9 et D1 sont des seuils, pas des moyennes. Réponse : D9/D1 = 3,6.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans un pays (données fictives), la population est répartie en cinq quintiles par revenu croissant. Les parts du revenu total perçues sont : 1er quintile 8 %, 2e 13 %, 3e 17 %, 4e 23 %, 5e 39 %. (1) Calculez le rapport S80/S20. (2) Calculez les parts cumulées du revenu. (3) Rédigez une phrase interprétant le point de la courbe de Lorenz d'abscisse 40 %.",
              hint: "S80/S20 = part du dernier quintile ÷ part du premier. Pour les parts cumulées, additionnez progressivement les parts.",
              solution: [
                "(1) S80/S20 = 39 ÷ 8 ≈ 4,9 : les 20 % les plus aisés perçoivent une masse de revenus environ 4,9 fois plus élevée que les 20 % les plus modestes.",
                "(2) Parts cumulées : 8 % ; 8 + 13 = 21 % ; 21 + 17 = 38 % ; 38 + 23 = 61 % ; 61 + 39 = 100 %. Vérification : le dernier cumul vaut bien 100 %.",
                "(3) Le point d'abscisse 40 % a pour ordonnée 21 % : les 40 % les plus modestes perçoivent 21 % du revenu total, alors qu'ils en recevraient 40 % en situation d'égalité parfaite.",
              ],
            },
            {
              level: 2,
              statement: "Sur la courbe de Lorenz des revenus d'un pays A (données fictives), le point d'abscisse 50 % a pour ordonnée 25 %, et le point d'abscisse 90 % a pour ordonnée 70 %. (1) Interprétez ces deux points. (2) Quelle part du revenu reçoivent les 10 % les plus aisés ? (3) Quelle part reçoivent les 40 % situés entre la médiane et le neuvième décile ? (4) Le coefficient de Gini du pays A est de 0,40 et celui d'un pays B de 0,28. Lequel est le plus inégalitaire, et comment sa courbe de Lorenz se situe-t-elle ?",
              hint: "Une part d'un groupe situé entre deux points se calcule par différence des parts cumulées.",
              solution: [
                "(1) Les 50 % les plus modestes reçoivent 25 % du revenu total ; les 90 % les plus modestes en reçoivent 70 %.",
                "(2) Les 10 % les plus aisés reçoivent 100 - 70 = 30 % du revenu total, soit trois fois leur poids dans la population.",
                "(3) Les 40 % situés entre la médiane et D9 reçoivent 70 - 25 = 45 % du revenu total.",
                "Vérification : 25 + 45 + 30 = 100 %.",
                "(4) Le pays A, dont le Gini (0,40) est plus élevé, est le plus inégalitaire. Sa courbe de Lorenz est plus éloignée de la diagonale que celle du pays B (elle est plus creusée).",
              ],
            },
            {
              level: 3,
              statement: "Épreuve composée, partie 2 (étude d'un document). Document (données fictives) : part du revenu total perçue par les 1 % les plus aisés. Pays A : 20 % en 1910, 9 % en 1950, 8 % en 1980, 11 % en 2020. Pays B : 18 % en 1910, 11 % en 1950, 10 % en 1980, 19 % en 2020. Questions : (1) Rédigez une phrase donnant la signification de la valeur 19 %. (2) À l'aide du document et de vos connaissances, comparez l'évolution des inégalités dans les deux pays et proposez des explications.",
              hint: "Distinguez deux périodes : avant 1980 et après 1980. Calculez des écarts en points et, si utile, un coefficient multiplicateur.",
              solution: [
                "(1) Selon ce document, en 2020, dans le pays B, les 1 % les plus aisés percevaient 19 % du revenu total, soit 19 fois leur poids dans la population.",
                "(2) Première période, de 1910 à 1980 : forte baisse dans les deux pays. Pays A : 8 - 20 = - 12 points ; pays B : 10 - 18 = - 8 points. Cette baisse s'explique par les destructions de patrimoines lors des guerres, l'inflation et la crise des années 1930, puis par l'essor de l'impôt progressif et de la protection sociale.",
                "Seconde période, de 1980 à 2020 : les inégalités remontent dans les deux pays, mais de façon très différente. Pays A : + 3 points (de 8 % à 11 %) ; pays B : + 9 points, la part du top 1 % étant multipliée par 1,9 (19 ÷ 10).",
                "Explications : la remontée générale tient à la mondialisation, au progrès technique favorable aux plus qualifiés, à la forte hausse des très hautes rémunérations et des revenus du patrimoine, et à la baisse de la progressivité de l'impôt dans certains pays. L'écart entre A et B peut s'expliquer par des politiques de redistribution plus fortes en A.",
                "Conclusion : on retrouve l'évolution en U décrite par les travaux de Piketty : baisse au XXe siècle jusqu'aux années 1970-1980, puis remontée, plus marquée dans certains pays (le profil du pays B rappelle celui des États-Unis) que dans d'autres.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de construction d'une courbe de Lorenz.",
            items: [
              "Classer les individus par revenu croissant.",
              "Découper la population en groupes de même effectif (par exemple des déciles).",
              "Calculer la part du revenu total reçue par chaque groupe.",
              "Cumuler les parts de population et les parts de revenu.",
              "Placer les points : population cumulée en abscisse, revenu cumulé en ordonnée.",
              "Comparer la courbe obtenue à la droite d'égalité parfaite.",
            ],
          },
          quiz: [
            {
              q: "Que vaut le coefficient de Gini en situation d'égalité parfaite ?",
              options: [
                "1",
                "0,5",
                "0",
                "100",
              ],
              answer: 2,
              why: "Le Gini varie de 0 (égalité parfaite, courbe de Lorenz confondue avec la diagonale) à 1 (une seule personne reçoit tout le revenu).",
            },
            {
              q: "Le rapport D9/D1 vaut 3,4. Quelle interprétation est correcte ?",
              options: [
                "Les 10 % les plus riches gagnent en moyenne 3,4 fois plus que les 10 % les plus pauvres",
                "Les 10 % les plus riches reçoivent 3,4 % du revenu total",
                "Le revenu médian est 3,4 fois plus élevé que le revenu moyen",
                "Le revenu plancher des 10 % les plus aisés est 3,4 fois le revenu plafond des 10 % les plus modestes",
              ],
              answer: 3,
              why: "D9 et D1 sont des seuils : le rapport compare le revenu minimal des plus aisés au revenu maximal des plus modestes, pas des moyennes.",
            },
            {
              q: "Pourquoi le patrimoine est-il plus inégalement réparti que le revenu ?",
              options: [
                "Parce qu'il s'accumule dans le temps et se transmet par héritage",
                "Parce qu'il n'est jamais soumis à l'impôt en France",
                "Parce qu'il ne comprend que les biens immobiliers des ménages, toujours très concentrés",
              ],
              answer: 0,
              why: "Le patrimoine est un stock qui s'accumule et se transmet ; il génère en outre des revenus qui accroissent les écarts.",
            },
            {
              q: "Une élasticité intergénérationnelle des revenus élevée signifie que :",
              options: [
                "les revenus des enfants ne dépendent pas de ceux de leurs parents",
                "les revenus moyens augmentent fortement et régulièrement d'une génération à l'autre",
                "les écarts de revenus entre parents se transmettent largement aux enfants",
              ],
              answer: 2,
              why: "Plus l'élasticité est proche de 1, plus les écarts se reproduisent, et plus la mobilité intergénérationnelle est faible.",
            },
            {
              q: "Quelle période a connu la plus forte baisse des inégalités de patrimoine dans les pays développés ?",
              options: [
                "Les années 1990-2010",
                "La fin du XIXe siècle",
                "Les années 1980",
                "La période 1914-1945",
              ],
              answer: 3,
              why: "Guerres, inflation, crise des années 1930 et essor de l'impôt progressif ont fortement réduit les grandes fortunes entre 1914 et 1945.",
            },
          ],
          trap: "Interpréter D9/D1 comme un rapport entre revenus moyens des riches et des pauvres : c'est un rapport entre deux seuils. Autre erreur : croire qu'un même coefficient de Gini signifie une même répartition, alors que deux courbes de Lorenz différentes peuvent donner le même Gini.",
          method: "Pour lire un point de la courbe de Lorenz, utilisez toujours la même phrase type : « les X % les plus modestes perçoivent Y % du revenu total ». Pour un groupe situé au milieu ou en haut de la distribution, calculez une différence de parts cumulées, puis vérifiez que la somme des parts fait 100 %.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'conceptions-justice-sociale',
          title: 'Les conceptions de la justice sociale et l\'action des pouvoirs publics',
          minutes: 35,
          objectives: [
            "Distinguer l'égalité des droits, l'égalité des chances et l'égalité des situations.",
            "Comprendre ce qui est considéré comme juste selon différentes conceptions de la justice sociale (utilitarisme, libertarisme, égalitarisme libéral, égalitarisme strict).",
            "Identifier les instruments de l'action des pouvoirs publics en matière de justice sociale (fiscalité, protection sociale, services collectifs, lutte contre les discriminations).",
            "Analyser les débats que suscite cette action, sous contrainte de financement : efficacité, légitimité, effets pervers.",
          ],
          course: [
            {
              heading: "Trois formes d'égalité",
              paragraphs: [
                "La justice sociale désigne l'ensemble des principes qui permettent de juger si la répartition des ressources, des droits et des positions dans une société est juste. Toutes les conceptions de la justice sociale ne visent pas la même forme d'égalité.",
                "L'égalité des droits signifie que tous ont les mêmes droits et devoirs devant la loi (« Les hommes naissent et demeurent libres et égaux en droits », article 1er de la Déclaration des droits de l'homme et du citoyen de 1789). L'égalité des chances signifie que chacun doit avoir la même probabilité d'accéder aux positions sociales les plus valorisées, quelle que soit son origine sociale, son sexe ou son lieu de naissance : les inégalités de résultat ne sont acceptables que si elles proviennent des efforts et des mérites. L'égalité des situations vise à réduire directement les écarts de revenus, de patrimoine ou de conditions de vie.",
                "Ces formes peuvent entrer en tension : l'égalité des droits n'assure pas l'égalité des chances (un enfant d'ouvrier a les mêmes droits qu'un enfant de cadre, mais pas les mêmes chances d'obtenir un diplôme de grande école), et l'égalité des chances peut produire de fortes inégalités de situations. Pour corriger ces écarts, on recourt parfois à l'équité, qui consiste à traiter inégalement des situations inégales, par exemple en donnant plus de moyens aux écoles des quartiers défavorisés.",
              ],
              box: { label: "Définition", text: "Égalité des droits : mêmes droits pour tous devant la loi. Égalité des chances : même probabilité d'accéder aux positions sociales, quelle que soit l'origine. Égalité des situations : réduction des écarts de ressources et de conditions de vie." },
            },
            {
              heading: "Quatre conceptions de la justice sociale",
              paragraphs: [
                "L'utilitarisme, fondé par Jeremy Bentham à la fin du XVIIIe siècle et développé par John Stuart Mill, juge juste la situation qui maximise la somme des bien-être (ou utilités) des individus. Les inégalités sont acceptables si elles augmentent le bien-être total. Une redistribution des riches vers les pauvres peut se justifier, car un euro supplémentaire apporte plus de satisfaction à un pauvre qu'à un riche ; mais on reproche à l'utilitarisme de pouvoir sacrifier une minorité au nom du bien-être collectif.",
                "Le libertarisme, défendu notamment par le philosophe Robert Nozick dans Anarchie, État et utopie (1974), juge juste toute répartition issue d'acquisitions et d'échanges libres et légitimes. Chacun est propriétaire de lui-même et des fruits de son travail ; la redistribution par l'impôt est une atteinte à la liberté. Seule l'égalité des droits compte, et l'État doit se limiter à des fonctions régaliennes (État minimal).",
                "L'égalitarisme libéral de John Rawls, exposé dans Théorie de la justice (1971), part d'une expérience de pensée : quels principes choisiraient des individus placés derrière un « voile d'ignorance », qui ne sauraient pas quelle place ils occuperont dans la société ? Rawls en déduit deux principes : chacun doit disposer des libertés fondamentales les plus étendues compatibles avec celles des autres ; les inégalités ne sont justes que si elles sont attachées à des positions ouvertes à tous dans une juste égalité des chances et si elles profitent aux plus défavorisés (principe de différence).",
                "L'égalitarisme strict, porté par des courants socialistes et communistes, considère que seules l'égalité des situations et la satisfaction égale des besoins sont justes : les inégalités de revenus et de patrimoine sont illégitimes, car elles proviennent largement de l'héritage, du hasard ou des rapports de domination. On lui objecte le risque de décourager l'effort et l'initiative.",
              ],
            },
            {
              heading: "Les instruments de l'action publique",
              paragraphs: [
                "La fiscalité peut réduire les inégalités. Un impôt est progressif quand son taux moyen augmente avec le revenu (c'est le cas de l'impôt sur le revenu en France, calculé par tranches), proportionnel quand son taux est le même pour tous, et régressif quand il pèse proportionnellement plus sur les bas revenus : c'est le cas de la TVA rapportée au revenu, car les ménages modestes consomment une plus grande part de leurs ressources.",
                "La protection sociale verse des prestations selon trois logiques. La logique d'assurance (retraites, allocations chômage) verse des revenus de remplacement en contrepartie de cotisations. La logique d'assistance verse des prestations sous condition de ressources, financées par l'impôt, comme le revenu de solidarité active (RSA). La logique universelle verse des prestations à tous ceux qui remplissent un critère, sans condition de cotisation (prise en charge des soins par l'Assurance maladie, prestations familiales). La redistribution est verticale quand elle va des plus aisés vers les plus modestes, horizontale quand elle couvre un risque (des bien-portants vers les malades, des actifs vers les retraités).",
                "Les services collectifs (éducation, santé, transports publics) sont fournis gratuitement ou à un prix inférieur à leur coût : ils réduisent les inégalités d'accès. Enfin, la lutte contre les discriminations passe par la loi (sanctions des discriminations à l'embauche), par des autorités comme le Défenseur des droits, créé en 2011, et par des mesures de discrimination positive, qui accordent des avantages ciblés à des groupes désavantagés (moyens supplémentaires de l'éducation prioritaire, loi sur la parité de 2000).",
              ],
              box: { label: "Règle", text: "Impôt progressif : le taux moyen d'imposition augmente avec le revenu. Impôt proportionnel : taux identique pour tous. Impôt régressif : il pèse proportionnellement plus sur les revenus modestes." },
            },
            {
              heading: "Une action sous contrainte et en débat",
              paragraphs: [
                "L'action des pouvoirs publics s'exerce sous contrainte de financement : les dépenses sociales sont financées par des prélèvements obligatoires (impôts et cotisations) ou par l'emprunt, qui accroît la dette publique. Il faut donc arbitrer entre des objectifs concurrents.",
                "Elle fait d'abord l'objet de débats sur son efficacité : réduit-elle effectivement les inégalités ? Les études de l'Insee montrent que la redistribution diminue nettement le rapport entre le niveau de vie des plus aisés et celui des plus modestes, mais le non-recours (des personnes éligibles ne demandent pas les prestations) et la complexité des dispositifs limitent cette efficacité.",
                "Elle fait aussi l'objet de débats sur sa légitimité : une forte redistribution suppose le consentement à l'impôt, qui peut s'éroder quand les contribuables jugent l'impôt trop lourd ou mal utilisé (contestations fiscales, évasion fiscale). Enfin, on s'interroge sur ses effets pervers : des prestations mal conçues peuvent créer des désincitations au travail (trappes à inactivité, quand reprendre un emploi fait perdre des aides), et une fiscalité trop lourde peut inciter à l'exil fiscal ou à l'optimisation. Les défenseurs de la redistribution répondent qu'elle soutient la demande, améliore la santé et l'éducation et renforce la cohésion sociale.",
              ],
              box: { label: "À retenir", text: "Trois débats : l'efficacité (l'action réduit-elle vraiment les inégalités ?), la légitimité (les citoyens consentent-ils à l'impôt ?), les effets pervers (désincitations au travail, évasion fiscale, stigmatisation)." },
            },
          ],
          keyPoints: [
            "Trois formes d'égalité : des droits, des chances, des situations ; l'équité traite inégalement des situations inégales.",
            "Utilitarisme (Bentham, Mill) : maximiser la somme des bien-être. Libertarisme (Nozick) : respecter la liberté et la propriété, État minimal.",
            "Égalitarisme libéral (Rawls, 1971) : libertés égales, juste égalité des chances, inégalités acceptables si elles profitent aux plus défavorisés.",
            "Égalitarisme strict : seule l'égalité des situations est juste.",
            "Instruments : fiscalité (progressive, proportionnelle, régressive), protection sociale (assurance, assistance, universalité), services collectifs, lutte contre les discriminations.",
            "Débats : contrainte de financement, efficacité, légitimité (consentement à l'impôt), effets pervers (désincitations).",
          ],
          example: {
            statement: "Un gouvernement envisage de relever l'impôt sur le revenu des 10 % les plus aisés pour financer une hausse du RSA. Comment chacune des quatre grandes conceptions de la justice sociale jugerait-elle cette mesure ?",
            solution: [
              "Utilitarisme : la mesure est juste si elle augmente la somme des bien-être. Comme un euro apporte plus de satisfaction à une personne modeste qu'à une personne aisée, le transfert peut accroître le bien-être total, à condition de ne pas trop décourager l'activité.",
              "Libertarisme : la mesure est injuste, car elle prélève par la contrainte une partie de revenus légitimement acquis. Seule une aide volontaire (charité) serait acceptable.",
              "Égalitarisme libéral (Rawls) : la mesure est juste si elle améliore la situation des plus défavorisés, ce qui est son objectif ; Rawls accepte les inégalités de revenus, mais seulement dans la mesure où elles profitent aussi aux plus modestes.",
              "Égalitarisme strict : la mesure va dans le bon sens, car elle réduit les écarts de situations, mais elle est insuffisante : il faudrait aller vers une égalisation des revenus.",
              "Conclusion : une même mesure est jugée très différemment selon la conception de la justice retenue ; c'est ce qui explique les débats sur la redistribution.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez quelle forme d'égalité (droits, chances, situations) chaque mesure cherche principalement à réaliser. (a) L'ouverture du droit de vote aux femmes en 1944. (b) L'attribution de moyens supplémentaires aux écoles de l'éducation prioritaire. (c) Le versement d'une allocation qui complète les revenus des ménages pauvres jusqu'à un minimum garanti. (d) L'interdiction de refuser une embauche en raison de l'origine du candidat.",
              hint: "Demandez-vous si la mesure modifie la loi pour tous, si elle agit sur les conditions de départ de la compétition sociale, ou si elle agit directement sur les ressources.",
              solution: [
                "(a) Égalité des droits : les femmes obtiennent les mêmes droits politiques que les hommes.",
                "(b) Égalité des chances : on corrige les inégalités de départ des élèves, par une mesure d'équité.",
                "(c) Égalité des situations : on réduit directement les écarts de revenus.",
                "(d) Égalité des chances : chacun doit pouvoir accéder à un emploi selon ses compétences, quelle que soit son origine (c'est aussi une application de l'égalité des droits).",
              ],
            },
            {
              level: 2,
              statement: "Deux ménages ont un revenu annuel de 20 000 € et de 100 000 €. On compare deux impôts. Impôt A : taux unique de 20 %. Impôt B : 0 % sur la part du revenu jusqu'à 10 000 €, 20 % sur la part comprise entre 10 000 € et 50 000 €, 40 % sur la part au-delà de 50 000 €. (1) Calculez l'impôt payé et le taux moyen de chaque ménage avec chaque impôt. (2) Calculez le rapport entre les revenus après impôt des deux ménages dans chaque cas, et comparez au rapport avant impôt. (3) Concluez.",
              hint: "Pour l'impôt B, découpez le revenu en tranches et appliquez à chaque tranche son taux, puis additionnez.",
              solution: [
                "(1) Impôt A : 20 % × 20 000 = 4 000 € ; 20 % × 100 000 = 20 000 €. Taux moyen de 20 % pour les deux : l'impôt est proportionnel.",
                "Impôt B, ménage à 20 000 € : 0 € sur les 10 000 premiers euros, puis 20 % × 10 000 = 2 000 €. Total : 2 000 €, taux moyen 2 000 ÷ 20 000 = 10 %.",
                "Impôt B, ménage à 100 000 € : 0 € sur 10 000, 20 % × 40 000 = 8 000 €, 40 % × 50 000 = 20 000 €. Total : 28 000 €, taux moyen 28 000 ÷ 100 000 = 28 %. Le taux moyen augmente avec le revenu : l'impôt est progressif.",
                "(2) Avant impôt : 100 000 ÷ 20 000 = 5. Après impôt A : 80 000 ÷ 16 000 = 5. Après impôt B : 72 000 ÷ 18 000 = 4.",
                "(3) L'impôt proportionnel laisse l'écart relatif inchangé (rapport de 5) ; l'impôt progressif le réduit (rapport de 4). Réponse : seul l'impôt progressif réduit les inégalités de revenu.",
              ],
            },
            {
              level: 3,
              statement: "Épreuve composée, partie 1 (mobilisation des connaissances, 4 points) : Montrez que l'action des pouvoirs publics en faveur de la justice sociale fait l'objet de débats.",
              hint: "Rappelez en introduction les instruments de cette action, puis développez deux ou trois débats (efficacité, légitimité, effets pervers) avec un exemple chacun.",
              solution: [
                "Introduction : pour rendre la société plus juste, les pouvoirs publics utilisent la fiscalité, la protection sociale, les services collectifs et la lutte contre les discriminations. Cette action, financée par des prélèvements obligatoires, est contestée sur plusieurs plans.",
                "Débat sur l'efficacité : la redistribution réduit les écarts de niveau de vie, mais le non-recours aux prestations, la complexité des dispositifs et le poids des impôts régressifs comme la TVA en limitent la portée ; on peut aussi se demander si les services collectifs profitent réellement aux plus modestes (les plus favorisés font des études plus longues, donc bénéficient davantage de l'enseignement supérieur gratuit).",
                "Débat sur la légitimité : la redistribution suppose le consentement à l'impôt. Il s'affaiblit lorsque les contribuables jugent les prélèvements excessifs ou injustement répartis, ce qui se traduit par des contestations fiscales ou par l'évasion fiscale. Le débat oppose aussi les conceptions de la justice : un libertarien juge toute redistribution illégitime, un rawlsien la juge nécessaire si elle profite aux plus défavorisés.",
                "Débat sur les effets pervers : des prestations mal articulées avec les revenus du travail peuvent créer des trappes à inactivité ; une fiscalité très progressive pourrait décourager l'effort ou l'investissement, selon ses critiques.",
                "Conclusion : la justice sociale est un objectif partagé, mais ses moyens, son coût et ses effets restent discutés.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque conception ou forme d'égalité à son principe.",
            pairs: [
              { left: "Utilitarisme", right: "Maximiser la somme des bien-être individuels" },
              { left: "Libertarisme", right: "Respecter la propriété de soi et limiter l'État au minimum" },
              { left: "Égalitarisme libéral", right: "N'accepter que les inégalités qui profitent aux plus défavorisés" },
              { left: "Égalitarisme strict", right: "Rechercher l'égalité des situations" },
              { left: "Égalité des droits", right: "Les mêmes droits et devoirs pour tous devant la loi" },
              { left: "Égalité des chances", right: "La même probabilité d'accéder aux positions sociales, quelle que soit l'origine" },
            ],
          },
          quiz: [
            {
              q: "Quel auteur a formulé le principe de différence et l'expérience du voile d'ignorance ?",
              options: [
                "Robert Nozick",
                "Jeremy Bentham",
                "John Stuart Mill",
                "John Rawls",
              ],
              answer: 3,
              why: "Dans Théorie de la justice (1971), John Rawls imagine des individus derrière un voile d'ignorance et en déduit le principe de différence.",
            },
            {
              q: "Pour un libertarien comme Nozick, une répartition des revenus est juste si :",
              options: [
                "elle maximise le bien-être total de la société",
                "elle profite aux plus défavorisés",
                "elle résulte d'acquisitions et d'échanges libres et légitimes",
                "elle est parfaitement égalitaire, chacun recevant exactement la même part du revenu national",
              ],
              answer: 2,
              why: "Le libertarisme juge les procédures et non les résultats : une répartition issue d'échanges libres est juste, même très inégale.",
            },
            {
              q: "Un impôt dont le taux moyen augmente avec le revenu est :",
              options: [
                "progressif",
                "proportionnel",
                "régressif",
              ],
              answer: 0,
              why: "La progressivité se définit par un taux moyen croissant avec la base imposable, comme pour l'impôt sur le revenu en France.",
            },
            {
              q: "Le RSA, versé sous condition de ressources et financé par l'impôt, relève de la logique :",
              options: [
                "d'assurance, car il est financé par des cotisations sociales versées par les salariés",
                "d'assistance",
                "universelle, car il est versé à toute la population sans aucune condition",
              ],
              answer: 1,
              why: "L'assistance verse des prestations aux personnes dont les ressources sont insuffisantes, sans contrepartie de cotisations.",
            },
            {
              q: "Qu'appelle-t-on une trappe à inactivité ?",
              options: [
                "Un impôt qui pèse davantage sur les revenus les plus faibles",
                "La baisse du consentement à l'impôt chez les ménages les plus aisés, qui choisissent alors l'exil fiscal",
                "Une situation où reprendre un emploi n'augmente guère le revenu, à cause de la perte des aides",
              ],
              answer: 2,
              why: "C'est un effet pervers possible de la redistribution : le gain financier à reprendre un emploi est trop faible pour inciter à le faire.",
            },
          ],
          trap: "Confondre égalité des chances et égalité des situations : la première vise des conditions de départ équitables et accepte des résultats inégaux, la seconde vise directement à réduire les écarts de résultats. Autre erreur : présenter Rawls comme un égalitariste strict, alors qu'il accepte les inégalités qui profitent aux plus défavorisés.",
          method: "Pour chaque conception de la justice, retenez une fiche de trois lignes : l'auteur et l'œuvre, ce qui est juste, la position sur la redistribution. Face à une mesure concrète, appliquez successivement les quatre fiches : vous obtenez une analyse nuancée, attendue au bac.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'environnement-agenda',
          title: 'L\'environnement : acteurs et mise à l\'agenda',
          minutes: 30,
          objectives: [
            "Comprendre qu'une diversité d'acteurs (pouvoirs publics, ONG, entreprises, experts, partis, mouvements citoyens) participe à la construction des questions environnementales comme problème public et à leur mise à l'agenda politique.",
            "Comprendre que ces acteurs entretiennent des relations de coopération et de conflit.",
            "Comprendre que l'action publique pour l'environnement articule différentes échelles (locale, nationale, européenne, mondiale).",
            "Expliquer pourquoi les négociations internationales sur l'environnement sont contraintes par des stratégies de passager clandestin et par les inégalités de développement.",
          ],
          course: [
            {
              heading: "Construire un problème public et le mettre à l'agenda",
              paragraphs: [
                "Une situation ne devient pas d'elle-même un problème public. Elle le devient lorsque des acteurs parviennent à la faire reconnaître comme un problème qui exige une intervention des pouvoirs publics. Cette construction passe par plusieurs opérations : nommer et définir le problème, le rendre visible, en identifier les causes et les responsables, proposer des solutions. La pollution de l'air des villes a longtemps été considérée comme le prix normal du progrès, avant d'être reconnue comme un problème de santé publique.",
                "L'agenda politique désigne l'ensemble des problèmes qui font l'objet d'une attention et d'une action de la part des autorités publiques. La mise à l'agenda est le processus par lequel un problème public y entre. Le politiste Philippe Garraud a distingué plusieurs modèles : la mobilisation (des groupes font pression), l'offre politique (des partis s'emparent du sujet pour gagner des voix), la médiatisation (les médias imposent le sujet, souvent après une catastrophe), l'anticipation (les autorités agissent d'elles-mêmes, souvent sur avis d'experts) et l'action corporatiste silencieuse (des groupes d'intérêt agissent discrètement auprès des décideurs).",
              ],
              box: { label: "Définition", text: "Problème public : situation reconnue comme appelant une action des pouvoirs publics, à la suite d'un travail de définition et de mobilisation par des acteurs. Mise à l'agenda : processus par lequel ce problème entre dans les préoccupations et l'action des autorités publiques." },
            },
            {
              heading: "Une diversité d'acteurs, entre coopération et conflit",
              paragraphs: [
                "Les experts jouent un rôle central dans la question climatique : le Groupe d'experts intergouvernemental sur l'évolution du climat (GIEC), créé en 1988 par l'Organisation météorologique mondiale et le Programme des Nations unies pour l'environnement, synthétise les connaissances scientifiques dans des rapports d'évaluation. Les ONG (Greenpeace, le WWF, le Réseau Action Climat) alertent l'opinion, mènent des actions spectaculaires, font pression sur les décideurs et engagent des actions en justice. Les mouvements citoyens, comme les grèves scolaires pour le climat lancées en 2018 par la jeune Suédoise Greta Thunberg, mobilisent la jeunesse. Les partis écologistes portent la question dans le débat électoral, et les autres partis l'intègrent progressivement à leurs programmes.",
                "Les entreprises sont des acteurs ambivalents : certaines investissent dans les technologies propres et en font un argument commercial, d'autres pratiquent le lobbying pour retarder des réglementations coûteuses, voire l'écoblanchiment (présenter comme écologiques des pratiques qui ne le sont guère). Les pouvoirs publics, enfin, arbitrent entre ces intérêts et décident.",
                "Ces acteurs coopèrent : des ONG et des experts participent aux conférences internationales, l'État organise des concertations comme le Grenelle de l'environnement (2007) ou la Convention citoyenne pour le climat (2019-2020), qui a réuni des citoyens tirés au sort. Ils s'affrontent aussi : des ONG ont attaqué l'État en justice dans « l'Affaire du siècle », et le tribunal administratif de Paris a reconnu en 2021 une carence fautive de l'État dans la lutte contre le réchauffement climatique.",
              ],
            },
            {
              heading: "Une action publique à plusieurs échelles",
              paragraphs: [
                "À l'échelle mondiale, la Convention-cadre des Nations unies sur les changements climatiques, adoptée au Sommet de la Terre de Rio en 1992, organise des conférences annuelles (les COP). Le protocole de Kyoto (1997) a fixé des objectifs chiffrés de réduction des émissions aux seuls pays industrialisés. L'accord de Paris (COP21, 2015) engage tous les pays à contenir le réchauffement nettement en dessous de 2 °C par rapport à l'ère préindustrielle et à poursuivre les efforts pour le limiter à 1,5 °C, chaque pays fixant ses propres contributions.",
                "À l'échelle européenne, l'Union européenne fixe des normes communes et a créé en 2005 un marché de quotas d'émission (SEQE-UE) ; le Pacte vert pour l'Europe, présenté en 2019, vise la neutralité climatique en 2050. À l'échelle nationale, la Charte de l'environnement, intégrée au bloc de constitutionnalité en 2005, et des lois comme la loi Climat et résilience de 2021 fixent le cadre. À l'échelle locale, les collectivités agissent sur les transports, l'urbanisme, les déchets ou la rénovation des bâtiments, par exemple à travers des plans climat. Ces échelles s'articulent : les engagements mondiaux sont traduits en objectifs européens, puis en lois nationales, appliquées localement.",
              ],
              box: { label: "Repère", text: "1988 : création du GIEC. 1992 : Sommet de la Terre de Rio. 1997 : protocole de Kyoto. 2005 : marché européen de quotas (SEQE-UE) et Charte de l'environnement. 2015 : accord de Paris (COP21)." },
            },
            {
              heading: "Des négociations contraintes par le passager clandestin et les inégalités",
              paragraphs: [
                "Un climat stable a les caractéristiques d'un bien commun : personne ne peut être exclu de ses bénéfices (non-exclusion), mais la capacité de l'atmosphère à absorber les gaz à effet de serre est limitée et s'épuise à mesure qu'on l'utilise (rivalité). Chaque pays profite des efforts des autres sans avoir à en supporter le coût. Il est donc tenté par une stratégie de passager clandestin : laisser les autres réduire leurs émissions et continuer à émettre. Si tous raisonnent ainsi, les efforts sont insuffisants. Les États-Unis n'ont ainsi jamais ratifié le protocole de Kyoto et se sont retirés à plusieurs reprises de l'accord de Paris.",
                "Les négociations se heurtent aussi aux inégalités de développement. Les pays développés ont émis l'essentiel des gaz à effet de serre accumulés depuis la révolution industrielle, tandis que les pays en développement revendiquent leur droit à la croissance et sont souvent les plus exposés aux conséquences du réchauffement. Le principe des « responsabilités communes mais différenciées », affirmé à Rio en 1992, cherche à répartir l'effort en conséquence, et les pays riches se sont engagés à financer l'adaptation et la transition des pays pauvres, engagements dont le montant et le respect font l'objet de vives discussions.",
              ],
              box: { label: "À retenir", text: "Le climat est un bien commun : chaque État est tenté de profiter des efforts des autres (passager clandestin). Les inégalités de développement compliquent le partage de l'effort (responsabilités communes mais différenciées)." },
            },
          ],
          keyPoints: [
            "Un problème public est construit par des acteurs qui le définissent, le rendent visible, désignent des responsables et proposent des solutions.",
            "Mise à l'agenda (Garraud) : mobilisation, offre politique, médiatisation, anticipation, action corporatiste silencieuse.",
            "Acteurs : pouvoirs publics, ONG, entreprises, experts (GIEC, 1988), partis, mouvements citoyens, entre coopération et conflit.",
            "Échelles : mondiale (Rio 1992, Kyoto 1997, Paris 2015), européenne (SEQE-UE 2005, Pacte vert), nationale, locale.",
            "Le climat est un bien commun : passager clandestin et inégalités de développement freinent les accords internationaux.",
          ],
          example: {
            statement: "En prenant l'exemple du changement climatique, montrez que l'action publique pour l'environnement articule plusieurs échelles.",
            solution: [
              "Idée générale : le changement climatique est un problème mondial, mais les décisions et leur mise en œuvre se répartissent entre plusieurs niveaux de pouvoir, qui s'emboîtent.",
              "Échelle mondiale : l'accord de Paris (2015) fixe l'objectif de contenir le réchauffement nettement sous 2 °C et demande à chaque pays de présenter ses contributions nationales.",
              "Échelle européenne : l'Union européenne fixe un objectif de neutralité climatique en 2050 (Pacte vert) et utilise des instruments communs, comme le marché de quotas d'émission créé en 2005.",
              "Échelle nationale : la France traduit ces objectifs dans des lois, comme la loi Climat et résilience de 2021, et dans sa fiscalité.",
              "Échelle locale : les régions, intercommunalités et communes agissent sur les transports en commun, les pistes cyclables, la rénovation des bâtiments publics, par des plans climat.",
              "Conclusion : chaque échelle a ses compétences ; l'efficacité de l'action dépend de leur articulation, car un objectif mondial n'a d'effet que s'il est décliné jusqu'au niveau local.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque action, identifiez le type d'acteur (pouvoirs publics, ONG, entreprise, experts, parti, mouvement citoyen) et l'échelle concernée. (a) Le GIEC publie un rapport d'évaluation sur le climat. (b) Une métropole crée une zone où les véhicules les plus polluants sont interdits. (c) Une ONG mène une action spectaculaire devant le siège d'une compagnie pétrolière. (d) Des lycéens font grève le vendredi pour réclamer des mesures climatiques. (e) Un constructeur automobile fait pression à Bruxelles pour assouplir une norme d'émissions.",
              hint: "Distinguez bien qui agit (le type d'acteur) et à quel niveau de décision l'action s'adresse ou s'applique (local, national, européen, mondial).",
              solution: [
                "(a) Experts, échelle mondiale : le GIEC est un organisme intergouvernemental.",
                "(b) Pouvoirs publics, échelle locale : une collectivité territoriale réglemente la circulation.",
                "(c) ONG : une action de médiatisation qui vise l'opinion et l'entreprise, à l'échelle nationale ou mondiale.",
                "(d) Mouvement citoyen : une mobilisation de jeunes, souvent coordonnée à l'échelle mondiale mais visible localement.",
                "(e) Entreprise, échelle européenne : il s'agit de lobbying auprès des institutions de l'Union européenne.",
              ],
            },
            {
              level: 2,
              statement: "Deux pays, A et B, choisissent de réduire ou non leurs émissions. Gains de chaque pays (en unités de bien-être, A puis B) : les deux réduisent : (3 ; 3). A réduit, B ne réduit pas : (0 ; 4). A ne réduit pas, B réduit : (4 ; 0). Aucun ne réduit : (1 ; 1). (1) Quel est le meilleur choix de A si B réduit ? Si B ne réduit pas ? (2) Quelle issue obtient-on si chaque pays raisonne ainsi ? (3) Expliquez en quoi cette situation illustre la stratégie du passager clandestin et ce qu'elle implique pour les négociations climatiques.",
              hint: "Comparez, pour chaque choix possible de B, le gain de A selon qu'il réduit ou non. Faites de même pour B.",
              solution: [
                "(1) Si B réduit : A gagne 3 en réduisant et 4 en ne réduisant pas, il préfère ne pas réduire. Si B ne réduit pas : A gagne 0 en réduisant et 1 en ne réduisant pas, il préfère encore ne pas réduire. Ne pas réduire est donc toujours le meilleur choix individuel de A ; la situation est symétrique pour B.",
                "(2) Aucun pays ne réduit : chacun obtient 1, alors que la coopération leur aurait donné 3 chacun. L'issue est collectivement défavorable.",
                "(3) Chaque pays espère profiter des efforts de l'autre sans en payer le coût : c'est la stratégie du passager clandestin, qui s'explique par le caractère de bien commun du climat.",
                "Implication : pour obtenir la coopération, il faut modifier les gains, par exemple par des engagements contraignants, des sanctions (taxe carbone aux frontières), des mécanismes de transparence et de suivi, ou des aides financières qui rendent l'effort acceptable. Réponse : sans mécanisme contraignant, l'issue est (1 ; 1), moins bonne que (3 ; 3).",
              ],
            },
            {
              level: 3,
              statement: "Épreuve composée, partie 1 (mobilisation des connaissances, 4 points) : Montrez que la mise à l'agenda des questions environnementales résulte de relations de coopération et de conflit entre des acteurs variés.",
              hint: "Définissez la mise à l'agenda, puis organisez la réponse en deux temps : la coopération entre acteurs, puis le conflit, chaque fois avec un exemple daté.",
              solution: [
                "Introduction : la mise à l'agenda est le processus par lequel un problème public, ici une question environnementale, entre dans les préoccupations et l'action des autorités. Elle résulte de l'action de nombreux acteurs : pouvoirs publics, experts, ONG, entreprises, partis et mouvements citoyens.",
                "Coopération : les acteurs peuvent unir leurs efforts. Les experts du GIEC, créé en 1988, fournissent aux gouvernements des diagnostics partagés ; ONG, entreprises et syndicats participent à des concertations organisées par l'État, comme le Grenelle de l'environnement (2007) ; la Convention citoyenne pour le climat (2019-2020) a associé des citoyens tirés au sort à l'élaboration de propositions, dont certaines ont été reprises dans la loi Climat et résilience de 2021.",
                "Conflit : les acteurs s'opposent aussi. Les ONG et les mouvements citoyens (grèves scolaires pour le climat depuis 2018) font pression sur des pouvoirs publics jugés trop lents ; certaines entreprises pratiquent le lobbying pour freiner des réglementations ; des ONG ont attaqué l'État en justice (Affaire du siècle), et le tribunal administratif de Paris a reconnu en 2021 une carence fautive de l'État.",
                "Conclusion : la place d'une question environnementale dans l'agenda dépend des rapports de force et des alliances entre ces acteurs.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces étapes de la prise en charge internationale de l'environnement.",
            items: [
              "Conférence des Nations unies sur l'environnement à Stockholm (1972)",
              "Rapport Brundtland, qui popularise le développement durable (1987)",
              "Création du GIEC (1988)",
              "Sommet de la Terre de Rio et Convention-cadre sur les changements climatiques (1992)",
              "Protocole de Kyoto (1997)",
              "Accord de Paris lors de la COP21 (2015)",
            ],
          },
          quiz: [
            {
              q: "Que désigne la mise à l'agenda politique ?",
              options: [
                "Le processus par lequel un problème entre dans les préoccupations et l'action des autorités publiques",
                "Le calendrier officiel des conférences internationales sur le climat publié chaque année par l'Organisation des Nations unies",
                "La liste des lois votées par le Parlement au cours d'une session",
              ],
              answer: 0,
              why: "L'agenda politique rassemble les problèmes auxquels les autorités accordent leur attention ; la mise à l'agenda est le processus d'entrée dans cet agenda.",
            },
            {
              q: "Quel est le rôle principal du GIEC ?",
              options: [
                "Voter des sanctions contre les pays qui polluent",
                "Fixer le prix du carbone sur le marché européen",
                "Synthétiser les connaissances scientifiques sur le climat",
                "Représenter les ONG environnementales lors des conférences internationales",
              ],
              answer: 2,
              why: "Le GIEC, créé en 1988, évalue et synthétise l'état des connaissances scientifiques ; il ne prend pas de décisions politiques.",
            },
            {
              q: "Pourquoi le climat est-il considéré comme un bien commun ?",
              options: [
                "Parce qu'il appartient juridiquement à l'Organisation des Nations unies, qui en fixe les règles d'usage pour tous les États membres",
                "Parce qu'il est exclusif et non rival",
                "Parce que sa préservation ne coûte rien aux États",
                "Parce qu'on ne peut exclure personne de ses bénéfices et que la capacité d'absorption de l'atmosphère s'épuise",
              ],
              answer: 3,
              why: "Un bien commun est non excluable et rival : chacun en profite, mais son usage par les uns réduit ce qui reste pour les autres.",
            },
            {
              q: "Quel principe, affirmé à Rio en 1992, tient compte des inégalités de développement dans la lutte contre le changement climatique ?",
              options: [
                "Le principe pollueur-payeur appliqué de façon identique à tous les pays",
                "Les responsabilités communes mais différenciées",
                "La souveraineté absolue des États sur leurs émissions",
              ],
              answer: 1,
              why: "Ce principe reconnaît que tous les pays doivent agir, mais que les pays développés, principaux émetteurs historiques, doivent faire davantage.",
            },
            {
              q: "Lequel de ces exemples illustre une relation de conflit entre acteurs de la question environnementale ?",
              options: [
                "La participation d'experts à une conférence internationale",
                "Une concertation entre l'État, des ONG et des entreprises",
                "La remise d'un rapport d'évaluation scientifique",
                "Une action en justice d'ONG contre l'État",
              ],
              answer: 3,
              why: "Dans l'Affaire du siècle, des ONG ont attaqué l'État pour inaction climatique ; les autres exemples relèvent de la coopération.",
            },
          ],
          trap: "Croire qu'un problème environnemental devient public du seul fait de sa gravité : il faut que des acteurs le construisent comme tel et parviennent à l'imposer à l'agenda. Autre erreur : réduire l'action publique à l'échelle nationale, alors qu'elle articule les échelles mondiale, européenne, nationale et locale.",
          method: "Préparez un tableau à trois colonnes (acteur, exemple daté, relation de coopération ou de conflit) pour les six types d'acteurs du programme. Un exemple précis et daté par acteur suffit à nourrir n'importe quel sujet sur la mise à l'agenda.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'instruments-environnement',
          title: 'Réglementation, taxation, marché de quotas',
          minutes: 35,
          objectives: [
            "Expliquer pourquoi la pollution est une externalité négative que le marché ne corrige pas spontanément.",
            "Connaître les principaux instruments dont disposent les pouvoirs publics pour faire face aux externalités négatives sur l'environnement : réglementation, marchés de quotas d'émission, taxation, subvention à l'innovation verte.",
            "Comprendre que ces différents instruments présentent des avantages et des limites.",
            "Comprendre que leur mise en œuvre peut se heurter à des dysfonctionnements de l'action publique.",
          ],
          course: [
            {
              heading: "La pollution, une externalité négative",
              paragraphs: [
                "Il y a externalité lorsque l'activité d'un agent a un effet sur le bien-être d'autres agents sans que cet effet passe par le marché, c'est-à-dire sans compensation monétaire. L'externalité est négative quand l'effet est défavorable : une usine qui rejette des fumées nuit à la santé des riverains, et les émissions de gaz à effet de serre contribuent au réchauffement qui affecte toute l'humanité, sans que le pollueur paie pour ces dommages.",
                "Le pollueur ne supporte qu'un coût privé, inférieur au coût social (coût privé + coût des dommages infligés aux autres). Il produit et pollue donc davantage que ce qui serait souhaitable pour la collectivité : c'est une défaillance du marché. L'objectif de l'action publique est d'internaliser l'externalité, c'est-à-dire de faire en sorte que le pollueur prenne en compte le coût de ses dommages dans ses décisions.",
              ],
              box: { label: "Définition", text: "Externalité négative : effet défavorable de l'activité d'un agent sur le bien-être d'autres agents, sans compensation monétaire. Internaliser l'externalité : faire supporter au pollueur le coût des dommages qu'il cause." },
            },
            {
              heading: "La réglementation et la subvention à l'innovation verte",
              paragraphs: [
                "La réglementation consiste à imposer des normes : interdiction d'un produit, plafond d'émission par entreprise ou par véhicule, obligation d'utiliser une technologie. Le protocole de Montréal (1987) a ainsi organisé l'interdiction progressive des CFC, gaz qui détruisaient la couche d'ozone, avec un succès reconnu ; les normes européennes d'émission des véhicules en sont un autre exemple.",
                "Ses avantages : elle est simple à comprendre, son résultat environnemental est connu à l'avance, et elle est indispensable pour les substances très dangereuses, qu'il faut interdire plutôt que taxer. Ses limites : elle impose souvent le même effort à tous, quel que soit son coût, ce qui rend la dépollution coûteuse ; elle n'incite pas à faire mieux que la norme ; elle suppose des contrôles et des sanctions efficaces, et peut être affaiblie par le lobbying des secteurs concernés.",
                "La subvention à l'innovation verte (crédits d'impôt pour la recherche, aides à la rénovation énergétique, bonus à l'achat de véhicules peu émetteurs) encourage le développement et la diffusion de technologies propres. Elle se justifie car l'innovation produit des externalités positives (les connaissances profitent à d'autres). Ses limites : elle coûte de l'argent public et peut créer des effets d'aubaine, quand elle finance des achats qui auraient eu lieu de toute façon.",
              ],
            },
            {
              heading: "La taxation : donner un prix à la pollution",
              paragraphs: [
                "L'économiste Arthur Cecil Pigou a proposé, dans The Economics of Welfare (1920), de taxer le pollueur d'un montant égal au dommage qu'il cause : c'est la taxe pigouvienne, qui applique le principe pollueur-payeur. La taxe augmente le coût de la pollution : chaque entreprise compare ce qu'il lui en coûte de réduire ses émissions au montant de la taxe, et réduit ses émissions tant que c'est moins cher que de payer la taxe. Les réductions se font ainsi d'abord là où elles coûtent le moins.",
                "Avantages : la taxe incite en permanence à réduire les émissions, elle rapporte des recettes à l'État (qui peuvent financer la transition ou être redistribuées aux ménages) et elle laisse chacun libre de s'adapter.",
                "Limites : il est difficile d'évaluer le dommage pour fixer le bon taux, et on ne connaît pas à l'avance la quantité de pollution qui sera évitée. Une taxe sur l'énergie pèse proportionnellement plus sur les ménages modestes et ruraux, qui dépensent une plus grande part de leur revenu en carburant et en chauffage : elle peut être régressive et mal acceptée. En France, la hausse programmée de la contribution climat-énergie (taxe carbone créée en 2014) a été gelée fin 2018, après la mobilisation des gilets jaunes. Enfin, une taxe nationale peut pousser les entreprises à produire dans des pays moins exigeants : ce sont les fuites de carbone.",
              ],
              box: { label: "Règle", text: "Avec une taxe de t euros par tonne émise, une entreprise réduit ses émissions tant que le coût de réduction d'une tonne est inférieur à t, et paie la taxe sur les tonnes restantes. Le prix est fixé, la quantité d'émissions qui en résulte ne l'est pas." },
            },
            {
              heading: "Le marché de quotas d'émission",
              paragraphs: [
                "Le marché de quotas s'inspire des travaux de Ronald Coase, qui dans The Problem of Social Cost (1960) a montré que l'attribution de droits de propriété peut permettre de régler certaines externalités par la négociation. Les pouvoirs publics fixent un plafond total d'émissions et le répartissent en quotas (un quota autorise l'émission d'une tonne de CO2), distribués gratuitement ou vendus aux enchères. Chaque entreprise doit restituer autant de quotas qu'elle a émis de tonnes. Celles qui réduisent leurs émissions à faible coût revendent leurs quotas en trop à celles pour qui c'est plus coûteux : un prix du carbone se forme sur le marché.",
                "Avantages : la quantité totale d'émissions est garantie par le plafond, et l'objectif est atteint au moindre coût, puisque les réductions se font là où elles sont les moins chères. L'Union européenne a créé en 2005 le système d'échange de quotas d'émission (SEQE-UE), qui couvre la production d'électricité, l'industrie lourde et l'aviation intra-européenne.",
                "Limites : si le plafond est trop généreux, le prix s'effondre et n'incite plus à réduire les émissions, comme ce fut le cas pendant une grande partie des années 2010, jusqu'à la réforme qui a créé une réserve de stabilité du marché ; le prix est volatil, ce qui rend les investissements incertains ; le risque de fuites de carbone a conduit l'Union européenne à mettre en place un mécanisme d'ajustement carbone aux frontières, qui fait payer le carbone contenu dans certaines importations.",
                "Plus largement, l'action publique peut se heurter à des dysfonctionnements : influence des lobbies (capture du régulateur), manque d'information sur les coûts de dépollution, difficultés de coordination entre échelles, refus social de mesures jugées injustes, ou effet rebond, quand des équipements plus économes conduisent à les utiliser davantage, ce qui annule une partie des gains.",
              ],
              box: { label: "À retenir", text: "Taxe : on fixe le prix de la pollution, la quantité s'ajuste. Marché de quotas : on fixe la quantité (le plafond), le prix s'ajuste. Réglementation : on impose une norme. Subvention : on encourage l'innovation verte." },
            },
          ],
          keyPoints: [
            "La pollution est une externalité négative : le coût social dépasse le coût privé, le marché produit trop de pollution.",
            "Réglementation : simple et sûre pour les substances dangereuses, mais coûteuse, peu incitative au-delà de la norme et exposée au lobbying.",
            "Taxe pigouvienne (Pigou, 1920) : prix fixé, incitation permanente, recettes publiques ; mais taux difficile à fixer, effets régressifs, fuites de carbone.",
            "Marché de quotas (inspiré de Coase, 1960 ; SEQE-UE en 2005) : quantité fixée, objectif atteint au moindre coût ; mais prix instable et parfois trop bas.",
            "Subvention à l'innovation verte : encourage les technologies propres, mais coûteuse et sujette aux effets d'aubaine.",
            "Dysfonctionnements possibles : lobbying, manque d'information, acceptabilité sociale, effet rebond.",
          ],
          example: {
            statement: "Deux entreprises émettent chacune 100 tonnes de CO2. Réduire une tonne coûte 20 € à l'entreprise A et 60 € à l'entreprise B (coûts constants). L'État veut réduire les émissions totales de 100 tonnes. Comparez le coût total de cette réduction (1) avec une norme imposant à chaque entreprise de réduire de 50 tonnes, (2) avec un marché de quotas où chaque entreprise reçoit 50 quotas et où le prix du quota s'établit à 40 €.",
            solution: [
              "(1) Norme : A réduit de 50 tonnes, pour un coût de 50 × 20 = 1 000 € ; B réduit de 50 tonnes, pour 50 × 60 = 3 000 €. Coût total pour la société : 4 000 €.",
              "(2) Marché de quotas : chaque entreprise ne peut émettre que 50 tonnes, sauf à acheter des quotas. Pour A, réduire une tonne coûte 20 €, moins que le prix du quota (40 €) : A a intérêt à réduire ses émissions de 100 tonnes et à vendre ses 50 quotas inutiles.",
              "Pour B, réduire une tonne coûte 60 €, plus que le prix du quota : B préfère acheter 50 quotas à A pour continuer à émettre 100 tonnes, sans réduire.",
              "Coût de réduction pour la société : 100 × 20 = 2 000 €. Les 50 quotas échangés (50 × 40 = 2 000 €) sont un transfert de B vers A, pas un coût pour la société. Bilan : A dépense 2 000 € et reçoit 2 000 €, coût net nul ; B paie 2 000 € au lieu de 3 000 € avec la norme.",
              "Vérification de l'objectif : émissions totales = 0 (A) + 100 (B) = 100 tonnes, soit bien une réduction de 100 tonnes.",
              "Conclusion : le même objectif environnemental est atteint pour 2 000 € au lieu de 4 000 €, car la réduction se fait là où elle coûte le moins. C'est l'avantage principal du marché de quotas sur une norme uniforme.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Identifiez l'instrument de politique environnementale (réglementation, taxation, marché de quotas, subvention à l'innovation verte) utilisé dans chaque cas. (a) L'interdiction progressive des CFC par le protocole de Montréal. (b) La contribution climat-énergie ajoutée au prix des carburants. (c) Une aide publique à l'achat d'un véhicule électrique. (d) L'obligation pour une centrale électrique européenne de restituer un quota par tonne de CO2 émise, quota qu'elle peut acheter à d'autres entreprises.",
              hint: "Demandez-vous si l'État impose une règle, fixe un prix, fixe une quantité échangeable, ou finance un comportement vertueux.",
              solution: [
                "(a) Réglementation : une interdiction pure et simple.",
                "(b) Taxation : un prix est ajouté à chaque tonne de carbone émise.",
                "(c) Subvention à l'innovation verte : l'État encourage la diffusion d'une technologie moins émettrice.",
                "(d) Marché de quotas : c'est le principe du SEQE-UE, avec un plafond d'émissions et des quotas échangeables.",
              ],
            },
            {
              level: 2,
              statement: "On reprend les deux entreprises de l'exemple : chacune émet 100 tonnes de CO2 ; réduire une tonne coûte 20 € à A et 60 € à B. L'État instaure cette fois une taxe de 50 € par tonne émise. (1) Quelle décision prend chaque entreprise ? (2) Calculez les émissions totales, le coût de réduction et les recettes fiscales. (3) Que se passerait-il avec une taxe de 70 € par tonne ? (4) Quelle limite de la taxe ces calculs illustrent-ils ?",
              hint: "Une entreprise réduit une tonne si cela lui coûte moins cher que de payer la taxe sur cette tonne.",
              solution: [
                "(1) A : réduire coûte 20 €, moins que la taxe de 50 € ; A réduit ses émissions de 100 tonnes. B : réduire coûte 60 €, plus que 50 € ; B ne réduit pas et paie la taxe sur ses 100 tonnes.",
                "(2) Émissions totales : 0 + 100 = 100 tonnes (réduction de 100 tonnes). Coût de réduction : 100 × 20 = 2 000 € (supporté par A). Recettes fiscales : 100 × 50 = 5 000 € (payés par B).",
                "(3) Avec une taxe de 70 € : les deux entreprises ont intérêt à réduire (20 < 70 et 60 < 70). Émissions : 0 tonne ; coût de réduction : 2 000 + 6 000 = 8 000 € ; recettes : 0 €.",
                "(4) Selon le taux, la quantité d'émissions évitée varie fortement (100 tonnes avec 50 €, 200 tonnes avec 70 €) : avec une taxe, l'État fixe le prix mais ne maîtrise pas la quantité. Pour atteindre un objectif précis, il doit connaître les coûts de réduction des entreprises, ce qui est difficile.",
              ],
            },
            {
              level: 3,
              statement: "Épreuve composée, partie 1 (mobilisation des connaissances, 4 points) : Montrez que la taxation et le marché de quotas d'émission présentent chacun des avantages et des limites pour lutter contre le changement climatique.",
              hint: "Présentez d'abord le principe commun aux deux instruments (donner un prix au carbone), puis consacrez un paragraphe à chacun, avec avantages et limites illustrés.",
              solution: [
                "Introduction : les émissions de gaz à effet de serre sont une externalité négative. Taxation et marché de quotas cherchent à l'internaliser en donnant un prix au carbone, mais de façon différente : la taxe fixe le prix, le marché fixe la quantité.",
                "La taxation : avantages, elle incite chaque émetteur à réduire ses émissions tant que cela coûte moins que la taxe, donc là où c'est le moins cher, et elle procure des recettes publiques qui peuvent compenser les ménages modestes. Limites, le taux est difficile à fixer, la quantité de pollution évitée est incertaine, la taxe sur l'énergie peut être régressive et mal acceptée (gel de la taxe carbone française fin 2018 après la mobilisation des gilets jaunes), et elle peut provoquer des fuites de carbone.",
                "Le marché de quotas : avantages, le plafond garantit la quantité totale d'émissions et l'échange de quotas permet d'atteindre l'objectif au moindre coût (SEQE-UE depuis 2005). Limites, un plafond trop généreux fait chuter le prix, qui n'incite plus à réduire (prix très bas pendant une grande partie des années 2010) ; le prix est volatil et le risque de fuites de carbone impose des corrections, comme le mécanisme d'ajustement carbone aux frontières.",
                "Conclusion : aucun instrument n'est parfait ; les pouvoirs publics les combinent, avec la réglementation et les subventions à l'innovation verte.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les instruments de la politique environnementale.",
            statements: [
              { text: "Avec une taxe carbone, l'État connaît à l'avance la quantité d'émissions qui sera évitée.", true: false, why: "La taxe fixe un prix ; la quantité évitée dépend des coûts de réduction des entreprises, mal connus de l'État." },
              { text: "Un marché de quotas fixe la quantité totale d'émissions autorisées.", true: true, why: "Le plafond fixe la quantité ; c'est le prix du quota qui s'ajuste sur le marché." },
              { text: "Une taxe sur les carburants pèse proportionnellement plus sur les ménages modestes.", true: true, why: "Ils consacrent une plus grande part de leur revenu à l'énergie : la taxe peut être régressive." },
              { text: "La réglementation est toujours l'instrument le moins coûteux pour atteindre un objectif.", true: false, why: "Une norme uniforme impose le même effort à tous, même là où réduire coûte cher : elle est souvent plus coûteuse qu'un instrument de marché." },
              { text: "Le marché européen de quotas d'émission existe depuis 2005.", true: true, why: "Le SEQE-UE a été lancé en 2005 ; il couvre notamment l'électricité et l'industrie lourde." },
              { text: "Un prix du quota très bas incite fortement les entreprises à réduire leurs émissions.", true: false, why: "Si le quota est bon marché, il est plus rentable d'en acheter que de réduire ses émissions." },
              { text: "L'interdiction est adaptée aux substances très dangereuses.", true: true, why: "Quand le dommage est grave et certain, comme pour les CFC, il vaut mieux interdire que taxer." },
            ],
          },
          quiz: [
            {
              q: "Quel économiste a proposé de taxer le pollueur à hauteur du dommage qu'il cause ?",
              options: [
                "Ronald Coase",
                "John Maynard Keynes",
                "Arthur Cecil Pigou",
              ],
              answer: 2,
              why: "Dans The Economics of Welfare (1920), Pigou propose une taxe égale au dommage marginal : c'est la taxe pigouvienne.",
            },
            {
              q: "Quel est l'avantage principal d'un marché de quotas par rapport à une norme uniforme ?",
              options: [
                "Atteindre l'objectif d'émissions au moindre coût",
                "Garantir un prix du carbone stable et prévisible pour toutes les entreprises",
                "Rapporter obligatoirement des recettes fiscales à l'État",
                "Interdire immédiatement les substances les plus dangereuses",
              ],
              answer: 0,
              why: "L'échange de quotas concentre les réductions là où elles coûtent le moins. Le prix, lui, est souvent instable.",
            },
            {
              q: "Qu'est-ce qu'une fuite de carbone ?",
              options: [
                "Une fuite de gaz dans une installation industrielle",
                "Un quota d'émission perdu par une entreprise",
                "La hausse des émissions due à l'utilisation accrue d'équipements devenus plus économes en énergie et donc moins chers à utiliser",
                "Le déplacement de la production vers des pays aux règles environnementales moins strictes",
              ],
              answer: 3,
              why: "Une politique climatique exigeante peut inciter des entreprises à produire ailleurs, ce qui déplace les émissions sans les réduire. La troisième proposition décrit l'effet rebond.",
            },
            {
              q: "Pourquoi la pollution est-elle une défaillance du marché ?",
              options: [
                "Parce que l'État fixe le prix des biens polluants",
                "Parce que le pollueur ne paie pas le coût des dommages qu'il cause aux autres",
                "Parce que les entreprises polluantes sont toujours en situation de monopole sur leur marché national",
              ],
              answer: 1,
              why: "Le coût privé est inférieur au coût social : le marché conduit à trop de pollution, c'est une externalité négative.",
            },
            {
              q: "Une aide publique finance l'achat d'une pompe à chaleur qu'un ménage aurait achetée de toute façon. C'est :",
              options: [
                "une fuite de carbone",
                "un effet rebond",
                "un effet d'aubaine",
                "une taxe pigouvienne",
              ],
              answer: 2,
              why: "Il y a effet d'aubaine quand une subvention finance un comportement qui aurait eu lieu sans elle : la dépense publique ne change rien.",
            },
          ],
          trap: "Croire que l'achat de quotas par une entreprise est un coût pour la société : c'est un transfert entre entreprises ; le coût pour la société est celui des réductions d'émissions. Autre confusion fréquente : la taxe fixe le prix, le marché de quotas fixe la quantité, et non l'inverse.",
          method: "Pour comparer les instruments, construisez un tableau à quatre lignes (réglementation, taxe, quotas, subvention) et trois colonnes (principe, avantages, limites), avec un exemple réel par ligne. Dans un calcul, raisonnez toujours tonne par tonne : l'entreprise réduit si cela lui coûte moins que la taxe ou le prix du quota.",
        },
      ],
    },

    /* ==================================================================== */
    /* PRÉPARER L'ÉPREUVE DU BAC                                             */
    /* ==================================================================== */
    {
      id: 'bac-ses',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'dissertation-ses',
          title: 'La dissertation appuyée sur un dossier documentaire',
          minutes: 35,
          objectives: [
            "Analyser un sujet de dissertation et formuler une problématique.",
            "Construire un plan cohérent et rédiger des paragraphes argumentés (affirmation, explication, illustration).",
            "Exploiter un dossier documentaire sans le paraphraser, et rédiger une introduction et une conclusion complètes.",
          ],
          course: [
            {
              heading: "L'épreuve et ses attendus",
              paragraphs: [
                "L'épreuve écrite de spécialité SES dure 4 heures et est affectée du coefficient 16. Le candidat choisit entre deux sujets : une dissertation s'appuyant sur un dossier documentaire, ou une épreuve composée en trois parties. La dissertation porte sur une question, accompagnée d'un dossier de quelques documents (tableaux statistiques, graphiques, extraits de textes).",
                "On attend du candidat qu'il réponde à la question posée, qu'il construise une argumentation organisée autour d'une problématique qu'il élabore lui-même, qu'il mobilise ses connaissances et les informations utiles du dossier, et qu'il rédige avec le vocabulaire précis des sciences économiques et sociales, dans un plan équilibré. Les documents sont un appui : une copie qui se contente de les résumer, sans connaissances personnelles, ne répond pas aux attentes, et une copie qui les ignore non plus.",
              ],
              box: { label: "Repère", text: "Épreuve écrite de SES : 4 heures, coefficient 16, au choix une dissertation s'appuyant sur un dossier documentaire ou une épreuve composée (mobilisation des connaissances, étude d'un document, raisonnement s'appuyant sur un dossier documentaire)." },
            },
            {
              heading: "Analyser le sujet et construire le plan",
              paragraphs: [
                "Commencez par définir chaque terme du sujet, y compris les petits mots. Repérez la forme de la question : « Comment expliquer... ? » ou « Quels sont... ? » appellent un plan analytique, qui présente des causes, des facteurs ou des effets sans les discuter ; « Dans quelle mesure... ? » ou « ... est-il encore... ? » appellent un plan qui discute, en montrant d'abord en quoi l'affirmation est vraie, puis ses limites. Délimitez le sujet dans le temps et dans l'espace (France, pays développés, période récente).",
                "La problématique est la question précise, formulée par vous, qui guide toute la copie : elle fait apparaître l'enjeu ou la tension contenue dans le sujet. Le plan comporte deux ou trois parties, chacune divisée en deux ou trois sous-parties ; chaque partie défend une idée directrice, et le passage de l'une à l'autre est annoncé par une phrase de transition. Un plan équilibré vaut mieux qu'une accumulation d'arguments.",
              ],
              box: { label: "Règle", text: "« Comment expliquer... ? », « Quels sont... ? » : plan analytique (causes, facteurs, effets). « Dans quelle mesure... ? », « ... est-il encore... ? » : plan qui discute (oui, en effet... ; mais, cependant...)." },
            },
            {
              heading: "Rédiger des paragraphes argumentés et exploiter le dossier",
              paragraphs: [
                "Chaque sous-partie se rédige en un paragraphe construit selon la démarche AEI. Affirmation : une phrase énonce l'idée. Explication : on développe le mécanisme, avec les notions et les auteurs du programme. Illustration : on appuie l'idée sur une donnée tirée d'un document ou sur un exemple précis tiré de vos connaissances.",
                "Pour exploiter un document, ne le paraphrasez pas : sélectionnez une donnée utile, rendez-la parlante (calculez un écart en points, un rapport, un taux de variation) et citez le document entre parenthèses, par exemple (document 2). Au brouillon, un tableau d'exploitation qui indique, pour chaque document, l'idée qu'il illustre et la partie du plan où l'utiliser, garantit que tous les documents servent et que chaque partie est nourrie.",
              ],
            },
            {
              heading: "L'introduction et la conclusion",
              paragraphs: [
                "L'introduction comporte quatre moments : une accroche (un fait, un événement ou une donnée précise en lien direct avec le sujet), la définition des termes du sujet, la problématique, puis l'annonce du plan. Elle se rédige entièrement au brouillon.",
                "La conclusion répond clairement à la problématique en reprenant les étapes du raisonnement (bilan), puis peut proposer une ouverture vers une question voisine, sans introduire d'argument nouveau. Gardez du temps pour la relire : à titre indicatif, beaucoup de candidats consacrent environ une heure à une heure et quart au travail au brouillon, et réservent un quart d'heure à la relecture.",
              ],
              box: { label: "À retenir", text: "Introduction : accroche, définitions, problématique, annonce du plan. Développement : 2 ou 3 parties, paragraphes AEI, documents cités et exploités. Conclusion : bilan qui répond à la problématique, ouverture facultative." },
            },
          ],
          keyPoints: [
            "Épreuve de 4 heures, coefficient 16 : dissertation ou épreuve composée, au choix.",
            "Définir tous les termes du sujet et repérer la forme de la question pour choisir le type de plan.",
            "La problématique fait apparaître l'enjeu du sujet et guide tout le développement.",
            "Paragraphe AEI : affirmation, explication (mécanisme, notions, auteurs), illustration (donnée chiffrée ou exemple).",
            "Exploiter les documents sans paraphraser : sélectionner, calculer, citer « (document n) ».",
            "Introduction en quatre moments ; conclusion qui répond à la problématique.",
          ],
          example: {
            statement: "Analysez le sujet « Dans quelle mesure le travail est-il encore source d'intégration sociale ? » : définissez les termes, formulez une problématique et proposez un plan détaillé.",
            solution: [
              "Définitions : le travail est une activité de production rémunérée ou non, l'emploi en est la forme rémunérée et encadrée ; l'intégration sociale est le processus qui relie l'individu aux autres et lui donne une place reconnue. « Dans quelle mesure » invite à discuter, et « encore » invite à prendre en compte les évolutions récentes.",
              "Problématique : si le travail a été, avec la société salariale, le principal support de l'intégration, les évolutions de l'emploi depuis la fin des années 1970 ne fragilisent-elles pas ce rôle, au point de rendre l'intégration par le travail inégale ?",
              "Partie 1, le travail reste une source essentielle d'intégration : A. il procure revenu, identité et sociabilité (Durkheim, solidarité organique) ; B. il donne accès aux droits sociaux et demeure une norme valorisée.",
              "Partie 2, mais son pouvoir intégrateur s'affaiblit pour une partie des actifs : A. chômage de longue durée et risque de désaffiliation (Castel) ; B. précarisation et polarisation de la qualité des emplois, qui multiplient les formes d'intégration incertaine ou disqualifiante (Paugam).",
              "Réponse : le travail intègre encore, mais de façon de plus en plus inégale selon la qualification, l'âge et le statut d'emploi. C'est cette conclusion nuancée que le plan doit établir.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Sujet : « Comment expliquer l'engagement politique dans les sociétés démocratiques ? » (1) Quel type de plan ce sujet appelle-t-il ? (2) Définissez l'expression « engagement politique ». (3) Proposez deux grandes parties.",
              hint: "Observez la forme de la question : « Comment expliquer » demande des facteurs explicatifs, pas une discussion pour ou contre.",
              solution: [
                "(1) « Comment expliquer » appelle un plan analytique : on présente les facteurs de l'engagement, sans chercher à discuter sa réalité.",
                "(2) L'engagement politique désigne l'ensemble des activités par lesquelles des individus cherchent à peser sur les décisions collectives : vote, militantisme, engagement associatif, consommation engagée.",
                "(3) Partie 1 : l'engagement s'explique, malgré le paradoxe de l'action collective (Olson), par des incitations sélectives, des rétributions symboliques et la structure des opportunités politiques. Partie 2 : il dépend aussi de variables sociodémographiques (diplôme, PCS, âge et génération, sexe).",
              ],
            },
            {
              level: 2,
              statement: "Document 2 (données fictives) : en 2022, 45 % des diplômés du supérieur déclarent avoir signé une pétition au cours de l'année, contre 15 % des personnes sans diplôme. Rédigez un paragraphe argumenté (AEI) montrant que le diplôme influence l'engagement politique.",
              hint: "Votre paragraphe doit commencer par l'idée, expliquer le mécanisme avec une notion du programme, puis exploiter la donnée en la transformant (écart ou rapport) et en citant le document.",
              solution: [
                "Affirmation : le niveau de diplôme est l'une des variables qui expliquent le mieux l'engagement politique.",
                "Explication : le diplôme procure un sentiment de compétence politique, c'est-à-dire le sentiment d'être capable de comprendre les enjeux et légitime pour s'exprimer, ainsi que des ressources (information, aisance à l'écrit et à l'oral). À l'inverse, les moins diplômés tendent à s'exclure eux-mêmes de la participation, ce que Daniel Gaxie appelle le « cens caché ».",
                "Illustration : ainsi, en 2022, 45 % des diplômés du supérieur ont signé une pétition, contre 15 % des personnes sans diplôme, soit un écart de 30 points et une pratique trois fois plus fréquente (document 2).",
                "Le paragraphe est complet : une idée, un mécanisme fondé sur une notion et un auteur, une donnée transformée et sourcée.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation : « Dans quelle mesure le marché de quotas d'émission est-il un instrument efficace pour lutter contre le changement climatique ? » Rédigez l'introduction complète et donnez le plan détaillé.",
              hint: "Votre introduction doit contenir une accroche exacte, la définition du marché de quotas et de l'efficacité, une problématique et l'annonce de deux parties qui discutent.",
              solution: [
                "Accroche : depuis 2005, les plus grandes installations industrielles et électriques de l'Union européenne doivent restituer un quota pour chaque tonne de CO2 qu'elles émettent, dans le cadre du système d'échange de quotas d'émission (SEQE-UE).",
                "Définitions : un marché de quotas fixe un plafond total d'émissions, réparti en quotas échangeables ; le prix du quota se forme par l'offre et la demande. Un instrument est efficace s'il atteint l'objectif fixé (réduire les émissions) au moindre coût.",
                "Problématique : en fixant la quantité d'émissions et en laissant le marché répartir l'effort, le marché de quotas permet-il réellement de réduire les émissions, ou son efficacité dépend-elle de conditions qui ne sont pas toujours réunies ?",
                "Annonce du plan : nous verrons d'abord que le marché de quotas présente des atouts réels pour lutter contre le changement climatique (I), avant de montrer que son efficacité reste limitée et doit être complétée par d'autres instruments (II).",
                "Plan détaillé. I. Un instrument potentiellement efficace : A. le plafond garantit la quantité totale d'émissions ; B. l'échange permet d'atteindre l'objectif au moindre coût, les réductions se faisant là où elles sont les moins chères.",
                "II. Une efficacité limitée : A. un plafond trop généreux fait chuter le prix, qui n'incite plus à réduire les émissions (prix très bas dans les années 2010) ; B. volatilité du prix, fuites de carbone et champ limité aux grands émetteurs imposent de le combiner avec la réglementation, la taxation et la subvention à l'innovation verte.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du travail de dissertation.",
            items: [
              "Analyser et définir les termes du sujet",
              "Mobiliser ses connaissances et exploiter les documents au brouillon",
              "Formuler la problématique",
              "Construire le plan détaillé",
              "Rédiger l'introduction au brouillon",
              "Rédiger la copie au propre, du développement à la conclusion",
              "Relire la copie",
            ],
          },
          quiz: [
            {
              q: "Combien de temps dure l'épreuve écrite de spécialité SES ?",
              options: [
                "3 heures",
                "4 heures",
                "2 heures",
              ],
              answer: 1,
              why: "L'épreuve dure 4 heures, que le candidat choisisse la dissertation ou l'épreuve composée.",
            },
            {
              q: "Un sujet commençant par « Comment expliquer... ? » appelle :",
              options: [
                "un plan qui discute la réalité du phénomène, en deux temps opposés",
                "un plan chronologique obligatoire",
                "un plan analytique présentant des facteurs explicatifs",
                "une simple description des documents du dossier",
              ],
              answer: 2,
              why: "Le sujet demande d'expliquer, pas de discuter : on présente des causes ou des facteurs, organisés en parties.",
            },
            {
              q: "Que signifie la lettre E dans la démarche AEI ?",
              options: [
                "Explication",
                "Exemple",
                "Évaluation",
                "Énumération",
              ],
              answer: 0,
              why: "Affirmation, explication, illustration : l'explication développe le mécanisme avec les notions et auteurs du programme ; l'exemple relève de l'illustration.",
            },
            {
              q: "Quelle est la bonne façon d'utiliser un document dans un paragraphe ?",
              options: [
                "Le recopier intégralement pour montrer qu'on l'a lu",
                "Résumer chaque document dans l'ordre du dossier",
                "Le présenter seulement dans l'introduction de la copie",
                "Sélectionner une donnée, la transformer et citer le document",
              ],
              answer: 3,
              why: "Un document sert d'illustration : on choisit la donnée utile, on la rend parlante par un calcul et on indique sa source.",
            },
            {
              q: "Quel élément ne doit pas figurer dans une conclusion ?",
              options: [
                "Un bilan qui répond à la problématique",
                "Une ouverture vers une question voisine",
                "Un argument nouveau, non développé auparavant",
              ],
              answer: 2,
              why: "La conclusion fait le bilan du raisonnement ; un argument nouveau devait trouver sa place dans le développement.",
            },
          ],
          trap: "Paraphraser les documents l'un après l'autre au lieu de construire un raisonnement : le plan doit suivre les idées, et chaque document n'est qu'une illustration au service d'un argument. Autre erreur fréquente : choisir un plan pour ou contre face à un sujet « Comment expliquer... ? ».",
          method: "Au brouillon, faites un tableau à trois colonnes (document, idée qu'il illustre, partie du plan). Quand chaque document a trouvé sa place et que chaque sous-partie contient au moins une connaissance personnelle, votre plan est prêt à être rédigé.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'epreuve-composee',
          title: 'L\'épreuve composée : ses trois parties',
          minutes: 35,
          objectives: [
            "Connaître la structure et le barème de l'épreuve composée.",
            "Répondre à une question de mobilisation des connaissances (partie 1).",
            "Étudier un document statistique : lire, calculer, analyser (partie 2).",
            "Construire un raisonnement organisé s'appuyant sur un dossier documentaire (partie 3).",
          ],
          course: [
            {
              heading: "La structure de l'épreuve",
              paragraphs: [
                "L'épreuve composée est l'un des deux sujets proposés au choix lors de l'épreuve écrite de SES (4 heures, coefficient 16). Elle comprend trois parties indépendantes, qui peuvent porter sur des thèmes différents du programme : il faut donc avoir révisé l'ensemble des chapitres. Ses trois parties testent trois compétences complémentaires : restituer et organiser des connaissances, analyser un document, construire une argumentation.",
                "Partie 1, mobilisation des connaissances, sur 4 points : une question de cours, sans document. Partie 2, étude d'un document, sur 6 points : un document statistique accompagné de questions. Partie 3, raisonnement s'appuyant sur un dossier documentaire, sur 10 points : une consigne et quelques documents. La partie 3 représente donc la moitié de la note : il faut lui réserver le temps nécessaire.",
              ],
              box: { label: "Repère", text: "Partie 1 : mobilisation des connaissances (4 points). Partie 2 : étude d'un document (6 points). Partie 3 : raisonnement s'appuyant sur un dossier documentaire (10 points). Total : 20 points." },
            },
            {
              heading: "Partie 1 : mobiliser ses connaissances",
              paragraphs: [
                "La question commence souvent par « Montrez que... », « Expliquez... » ou « Présentez... ». « Montrez que » demande de démontrer une affirmation, et non de la discuter : on ne cherche pas de limites. La réponse est courte mais structurée : une phrase d'introduction qui définit les notions clés, puis deux arguments, en général, rédigés chacun en paragraphe AEI (affirmation, explication, illustration).",
                "L'illustration vient ici de vos connaissances : un exemple historique daté, un auteur, un mécanisme chiffré simple. Une liste de mots-clés sans phrases, ou une réponse qui ne rédige pas le mécanisme, perd l'essentiel des points.",
              ],
            },
            {
              heading: "Partie 2 : étudier un document",
              paragraphs: [
                "Le document est le plus souvent un tableau ou un graphique statistique. Il est suivi, en général, de deux questions : la première demande de lire, de calculer ou de comparer des données ; la seconde demande d'expliquer ce que montre le document à l'aide des connaissances. Commencez par identifier la source, la date, le champ (qui est concerné ?) et l'unité (pourcentages, euros, indices, points).",
                "Une phrase de lecture donne le sens d'une donnée en précisant la source, la date, le lieu, le champ et l'unité : « Selon l'Insee, en 2023, en France, X % des... ». Pour comparer, calculez un écart (en points s'il s'agit de pourcentages ou de taux) ou un rapport (« deux fois plus »). Pour la seconde question, ne vous contentez pas de décrire : reliez les données à un mécanisme du programme.",
              ],
              box: { label: "Règle", text: "Phrase de lecture : selon [source], en [année], en [lieu], [champ] + [donnée avec son unité exacte]. Comparer deux pourcentages : écart en points de pourcentage, ou rapport « X fois plus »." },
            },
            {
              heading: "Partie 3 : raisonner à partir d'un dossier",
              paragraphs: [
                "La consigne prend souvent la forme : « À l'aide du dossier documentaire et de vos connaissances, vous montrerez que... ». Comme en partie 1, il s'agit de démontrer, pas de discuter. Le dossier comporte quelques documents (souvent deux ou trois). Il faut exploiter chaque document et apporter des connaissances qui ne figurent pas dans le dossier.",
                "La réponse est organisée : une courte introduction qui définit les termes et annonce les arguments, deux ou trois parties (ou grands paragraphes) qui développent chacune un argument selon la démarche AEI, en citant les documents « (document 1) », puis une courte conclusion. Une problématique au sens de la dissertation n'est pas attendue, mais la structure doit être visible (sauts de ligne, phrases d'annonce).",
                "Conseil de gestion du temps : beaucoup de candidats consacrent environ quarante minutes à la partie 1, une heure à la partie 2 et deux heures à la partie 3, en gardant quelques minutes pour relire. Adaptez cette répartition à votre rythme, mais ne sacrifiez jamais la partie 3.",
              ],
              box: { label: "À retenir", text: "Partie 3 : « vous montrerez que » signifie démontrer, pas discuter. Introduction courte, deux ou trois arguments AEI, chaque document exploité et cité, des connaissances personnelles, conclusion courte." },
            },
          ],
          keyPoints: [
            "Trois parties : mobilisation des connaissances (4 points), étude d'un document (6 points), raisonnement sur dossier (10 points).",
            "« Montrez que » : démontrer, sans discuter ni chercher de limites.",
            "Partie 1 : définitions, puis deux arguments AEI illustrés par des connaissances.",
            "Partie 2 : source, date, champ, unité ; phrase de lecture ; écarts en points ou rapports ; relier au cours.",
            "Partie 3 : introduction courte, arguments organisés, tous les documents exploités et cités, connaissances personnelles.",
          ],
          example: {
            statement: "Partie 2 (données fictives). Document : taux de chômage selon le diplôme en France en 2023, d'après une enquête statistique nationale. Sans diplôme ou brevet : 15 % ; baccalauréat : 8 % ; diplôme de niveau bac + 2 et plus : 5 %. Question 1 : rédigez une phrase donnant la signification de la donnée 15 % et comparez la situation des moins diplômés à celle des diplômés du supérieur. Question 2 : à l'aide du document et de vos connaissances, expliquez pourquoi le diplôme protège du chômage.",
            solution: [
              "Question 1, lecture : selon cette enquête, en 2023, en France, 15 % des actifs sans diplôme ou titulaires du seul brevet étaient au chômage. Le taux de chômage rapporte le nombre de chômeurs à la population active du groupe, et non à toute la population.",
              "Comparaison : écart de 15 - 5 = 10 points de pourcentage ; rapport de 15 ÷ 5 = 3 : le taux de chômage des moins diplômés est trois fois plus élevé que celui des diplômés de niveau bac + 2 et plus.",
              "Question 2, premier mécanisme : le diplôme certifie des compétences et accroît la productivité ; il sert aussi de signal pour les employeurs, qui recrutent en priorité les plus diplômés quand ils ont le choix.",
              "Second mécanisme : en période de chômage élevé, les plus diplômés peuvent occuper des emplois moins qualifiés que leur niveau (déclassement), ce qui évince les moins diplômés ; ceux-ci occupent aussi plus souvent des emplois précaires, dont la fin alimente le chômage.",
              "Conclusion : le document montre une relation nette entre diplôme et chômage (de 15 % à 5 %), que ces mécanismes permettent d'expliquer.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Rédigez une phrase de lecture pour chacune de ces données fictives. (a) Selon l'institut statistique national, en 2024, dans le pays A, la part des CDD parmi les salariés est de 9 %. (b) Selon l'office statistique régional, entre 2015 et 2024, le PIB en volume de la zone B a augmenté de 14 %. (c) Un indice des prix à la consommation, base 100 en 2015, vaut 121 en 2024.",
              hint: "N'oubliez ni la source, ni la date, ni le champ, et respectez l'unité : un pourcentage de répartition, un taux de variation et un indice ne se lisent pas de la même façon.",
              solution: [
                "(a) Selon l'institut statistique national, en 2024, dans le pays A, 9 % des salariés occupaient un emploi en CDD (pourcentage de répartition).",
                "(b) Selon l'office statistique régional, le PIB en volume de la zone B a augmenté de 14 % entre 2015 et 2024 (taux de variation), c'est-à-dire qu'il a été multiplié par 1,14.",
                "(c) Les prix à la consommation ont augmenté de 21 % entre 2015 et 2024 (121 - 100 = 21) : un panier de biens qui coûtait 100 € en 2015 en coûtait 121 en 2024.",
              ],
            },
            {
              level: 2,
              statement: "Partie 1 (4 points) : Montrez que les incitations sélectives permettent de dépasser le paradoxe de l'action collective.",
              hint: "Commencez par définir le paradoxe de l'action collective (Olson), puis présentez les incitations positives et les incitations négatives, chacune avec un exemple.",
              solution: [
                "Introduction : selon Mancur Olson (1965), un individu rationnel a intérêt à profiter d'un bien collectif sans participer à la mobilisation, en passager clandestin ; si tous font ce calcul, l'action collective n'a pas lieu. Les incitations sélectives, réservées aux participants, modifient ce calcul.",
                "Premier argument, les incitations positives : l'organisation offre à ses seuls membres des avantages individuels. Explication : le bénéfice de la participation n'est plus seulement collectif, il devient individuel, ce qui compense son coût. Illustration : un syndicat peut proposer à ses adhérents une aide juridique gratuite en cas de conflit avec l'employeur, ou des services (assurance, réductions).",
                "Second argument, les incitations négatives : ne pas participer expose à un coût. Explication : la sanction rend la stratégie du passager clandestin moins avantageuse. Illustration : aux États-Unis, le closed shop réservait certaines embauches aux syndiqués ; dans un atelier, la pression ou la réprobation des collègues peut viser les non-grévistes.",
                "Conclusion : en rendant la participation individuellement avantageuse, les incitations sélectives lèvent en partie le paradoxe d'Olson.",
              ],
            },
            {
              level: 3,
              statement: "Partie 3 (10 points). Document 1 (données fictives) : part des salariés pratiquant le télétravail au moins un jour par semaine : 4 % en 2017, 22 % en 2024. Document 2 (données fictives) : part des emplois intermédiaires dans l'emploi total : 45 % en 1995, 36 % en 2020. À l'aide du dossier documentaire et de vos connaissances, vous montrerez que le numérique transforme le travail et l'emploi.",
              hint: "Prévoyez trois arguments : le brouillage des frontières du travail (document 1), la transformation des relations d'emploi (connaissances : plateformes) et la polarisation des emplois (document 2).",
              solution: [
                "Introduction : le numérique désigne l'ensemble des technologies de traitement et de transmission de l'information (ordinateurs, réseaux, plateformes, algorithmes). Il transforme le travail, c'est-à-dire la façon de produire, et l'emploi, c'est-à-dire le cadre juridique et la répartition des postes. Nous verrons qu'il brouille les frontières du travail, transforme les relations d'emploi et polarise les emplois.",
                "Argument 1 : le numérique brouille les frontières du travail. Les outils numériques permettent de travailler hors des locaux et hors des horaires, ce qui rend plus floue la séparation entre vie professionnelle et vie personnelle. Selon le document 1, la part des salariés en télétravail au moins un jour par semaine est passée de 4 % en 2017 à 22 % en 2024, soit une hausse de 18 points (multipliée par 5,5). La loi de 2016 a d'ailleurs créé un droit à la déconnexion.",
                "Argument 2 : le numérique transforme les relations d'emploi. Les plateformes font travailler des indépendants, souvent micro-entrepreneurs, sans les protections du salariat, mais sous le contrôle d'un algorithme qui fixe les prix et attribue les missions. Cette dépendance a conduit la Cour de cassation à requalifier certaines relations en contrat de travail (2018, 2020).",
                "Argument 3 : le numérique polarise les emplois. Il automatise les tâches routinières, concentrées dans les emplois intermédiaires, et se révèle complémentaire des emplois très qualifiés. Selon le document 2, la part des emplois intermédiaires est passée de 45 % en 1995 à 36 % en 2020, soit une baisse de 9 points.",
                "Conclusion : le numérique transforme à la fois les conditions de travail, les statuts d'emploi et la structure des emplois, avec des effets inégaux selon les qualifications.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque élément de l'épreuve composée à ce qui le caractérise.",
            pairs: [
              { left: "Partie 1", right: "Mobilisation des connaissances, sur 4 points" },
              { left: "Partie 2", right: "Étude d'un document, sur 6 points" },
              { left: "Partie 3", right: "Raisonnement s'appuyant sur un dossier documentaire, sur 10 points" },
              { left: "Phrase de lecture", right: "Donner le sens d'une donnée avec sa source, sa date, son champ et son unité" },
              { left: "Consigne « Montrez que »", right: "Démontrer une affirmation sans la discuter" },
              { left: "Paragraphe AEI", right: "Affirmation, explication, illustration" },
            ],
          },
          quiz: [
            {
              q: "Sur combien de points est notée la partie 3 de l'épreuve composée ?",
              options: [
                "4 points",
                "6 points",
                "8 points",
                "10 points",
              ],
              answer: 3,
              why: "Le raisonnement s'appuyant sur un dossier documentaire vaut 10 points, soit la moitié de la note.",
            },
            {
              q: "Que demande une consigne « Montrez que... » ?",
              options: [
                "De démontrer l'affirmation à l'aide d'arguments",
                "De discuter l'affirmation en présentant ses limites",
                "De résumer le cours sur le thème concerné",
              ],
              answer: 0,
              why: "« Montrez que » impose de démontrer ; chercher des limites est un hors-sujet partiel qui coûte des points.",
            },
            {
              q: "Un taux de chômage passe de 8 % à 10 %. Comment présenter correctement cette évolution ?",
              options: [
                "Une hausse de 2 %",
                "Une hausse de 2 points de pourcentage",
                "Une hausse de 10 %",
              ],
              answer: 1,
              why: "La différence entre deux taux s'exprime en points : 10 - 8 = 2 points. En taux de variation, la hausse est de 25 %.",
            },
            {
              q: "Qu'est-il attendu dans la partie 3, en plus de l'exploitation des documents ?",
              options: [
                "Une problématique de dissertation et un plan en trois parties obligatoires",
                "Uniquement une description fidèle de chaque document",
                "Des connaissances personnelles qui ne figurent pas dans le dossier",
                "Un avis personnel argumenté sur la question posée",
              ],
              answer: 2,
              why: "Le raisonnement s'appuie sur le dossier et sur les connaissances ; une copie qui se limite aux documents est incomplète.",
            },
            {
              q: "Par quoi faut-il commencer l'étude d'un document statistique ?",
              options: [
                "Repérer la source, la date, le champ et l'unité",
                "Calculer la moyenne de toutes les valeurs du tableau",
                "Rédiger directement la conclusion de la question 2",
              ],
              answer: 0,
              why: "Sans l'unité et le champ, on risque de lire un taux comme un effectif ou de se tromper de population.",
            },
          ],
          trap: "Discuter une affirmation alors que la consigne dit « Montrez que » (en partie 1 comme en partie 3), ou confondre points de pourcentage et pourcentage quand on compare deux taux dans l'étude de document.",
          method: "Commencez par lire l'ensemble du sujet, puis traitez les parties dans l'ordre qui vous rassure, en respectant un horaire fixé à l'avance pour chacune. Avant de rendre la copie, vérifiez que chaque document de la partie 3 est cité au moins une fois et que chaque donnée citée a son unité.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'savoir-faire-quantitatifs',
          title: 'Lire et calculer : les savoir-faire quantitatifs',
          minutes: 35,
          objectives: [
            "Calculer et interpréter une proportion, un taux de variation, un coefficient multiplicateur et un indice simple.",
            "Distinguer une variation en pourcentage d'une variation en points de pourcentage, et une valeur nominale d'une valeur réelle.",
            "Lire et interpréter une moyenne simple ou pondérée, une médiane et des quantiles.",
            "Distinguer corrélation et causalité.",
          ],
          course: [
            {
              heading: "Proportions et pourcentages de répartition",
              paragraphs: [
                "Une proportion (ou part) rapporte une partie à l'ensemble dont elle fait partie : part = partie ÷ ensemble × 100. Si une classe compte 12 filles sur 30 élèves, la part des filles est 12 ÷ 30 × 100 = 40 %. Dans un tableau de répartition, les parts d'un même ensemble totalisent 100 % : c'est une vérification utile.",
                "Attention au sens de lecture d'un tableau à double entrée : « 40 % des ouvriers sont des fils d'ouvriers » (on part de la catégorie des fils) n'a pas le même sens que « 40 % des fils d'ouvriers sont ouvriers » (on part de l'origine). Repérez toujours où se trouve le total de 100 % (en ligne ou en colonne) avant de rédiger.",
              ],
              box: { label: "Formule", text: "Part (en %) = valeur de la partie ÷ valeur de l'ensemble × 100. Les parts d'un même ensemble totalisent 100 %." },
            },
            {
              heading: "Taux de variation, coefficient multiplicateur et indices",
              paragraphs: [
                "Le taux de variation mesure l'évolution relative d'une grandeur entre deux dates : t = (valeur d'arrivée - valeur de départ) ÷ valeur de départ × 100. Le coefficient multiplicateur indique par combien la valeur a été multipliée : CM = valeur d'arrivée ÷ valeur de départ, et CM = 1 + t ÷ 100. Une hausse de 25 % correspond à un CM de 1,25 ; une baisse de 20 % à un CM de 0,8 ; un CM de 3 à une hausse de 200 %.",
                "Les variations successives ne s'additionnent pas, elles se multiplient : une hausse de 10 % suivie d'une baisse de 10 % donne un CM de 1,1 × 0,9 = 0,99, soit une baisse de 1 %. Le taux de croissance annuel moyen (TCAM) sur n années se calcule ainsi : TCAM = (CM global puissance 1/n - 1) × 100.",
                "Un indice simple, base 100 à une date de référence, se calcule par : indice = valeur à la date étudiée ÷ valeur à la date de base × 100. Un indice de 118 signifie une hausse de 18 % depuis la date de base ; un indice de 92, une baisse de 8 %. Entre deux dates qui ne sont pas la base, on ne soustrait pas les indices pour obtenir un pourcentage : on calcule un taux de variation entre eux.",
                "Quand on compare deux pourcentages ou deux taux, la différence s'exprime en points de pourcentage. Si le taux de chômage passe de 8 % à 10 %, il augmente de 2 points, ce qui correspond à un taux de variation de (10 - 8) ÷ 8 × 100 = 25 %.",
              ],
              box: { label: "Formule", text: "Taux de variation = (VA - VD) ÷ VD × 100. CM = VA ÷ VD = 1 + t ÷ 100. Indice = valeur ÷ valeur de base × 100. TCAM = (CM puissance 1/n - 1) × 100." },
            },
            {
              heading: "Moyennes, médiane et quantiles",
              paragraphs: [
                "La moyenne arithmétique simple est la somme des valeurs divisée par leur nombre. La moyenne pondérée tient compte du poids de chaque valeur : si 52 % des actifs sont des hommes, avec un taux de chômage de 7 %, et 48 % des femmes, avec un taux de 8 %, le taux de chômage d'ensemble est 0,52 × 7 + 0,48 × 8 = 7,48 %, et non la moyenne simple 7,5 %.",
                "La médiane partage une population classée en deux moitiés égales : 50 % des individus ont une valeur inférieure, 50 % une valeur supérieure. Elle est moins sensible que la moyenne aux valeurs extrêmes. Pour sept salaires mensuels de 1 500, 1 600, 1 700, 1 800, 2 000, 2 200 et 9 000 €, la médiane est de 1 800 € alors que la moyenne atteint environ 2 829 €, tirée vers le haut par le salaire de 9 000 €. Les quartiles et les déciles généralisent la médiane : le premier décile D1 est la valeur au-dessous de laquelle se situent 10 % des individus.",
              ],
            },
            {
              heading: "Valeur nominale, valeur réelle, corrélation et causalité",
              paragraphs: [
                "Une grandeur en valeur (ou nominale) est mesurée aux prix courants ; en volume (ou réelle), on retire l'effet de la hausse des prix. Valeur réelle = valeur nominale ÷ indice des prix × 100. Pour les taux, le taux réel se calcule par le rapport des coefficients multiplicateurs : CM réel = CM nominal ÷ CM des prix ; quand les taux sont faibles, on peut approcher le taux réel par la différence entre le taux nominal et le taux d'inflation.",
                "Enfin, une corrélation indique que deux variables évoluent ensemble ; elle ne prouve pas que l'une est la cause de l'autre. Le lien peut s'expliquer par une troisième variable (le nombre de glaces vendues et le nombre de coups de soleil augmentent ensemble, parce que les deux dépendent de l'ensoleillement), par une causalité inverse, ou par le hasard. Pour affirmer une causalité, il faut un mécanisme explicatif solide, tiré du cours.",
              ],
              box: { label: "À retenir", text: "Écart entre deux pourcentages : en points. Variations successives : on multiplie les CM. Taux réel : CM nominal ÷ CM des prix. Médiane : moins sensible que la moyenne aux valeurs extrêmes. Corrélation n'est pas causalité." },
            },
          ],
          keyPoints: [
            "Part = partie ÷ ensemble × 100 ; repérer où se trouve le total de 100 % avant de lire un tableau.",
            "Taux de variation = (VA - VD) ÷ VD × 100 ; CM = VA ÷ VD = 1 + t ÷ 100 ; les CM successifs se multiplient.",
            "Un indice base 100 se lit directement en variation depuis la base : 118 signifie + 18 %.",
            "Écart entre deux taux : en points de pourcentage, à ne pas confondre avec un taux de variation.",
            "Moyenne pondérée selon les effectifs ; la médiane résiste aux valeurs extrêmes.",
            "Valeur réelle = valeur nominale corrigée de la hausse des prix ; corrélation n'est pas causalité.",
          ],
          example: {
            statement: "Le salaire mensuel moyen d'une catégorie de salariés passe de 2 000 € à 2 100 € en un an, alors que les prix à la consommation augmentent de 3 %. Calculez le taux de variation du salaire nominal, son coefficient multiplicateur, puis la variation du salaire réel (pouvoir d'achat).",
            solution: [
              "Taux de variation du salaire nominal = (2 100 - 2 000) ÷ 2 000 × 100 = 100 ÷ 2 000 × 100 = 5 %.",
              "Coefficient multiplicateur nominal = 2 100 ÷ 2 000 = 1,05. Coefficient multiplicateur des prix = 1 + 3 ÷ 100 = 1,03.",
              "Coefficient multiplicateur réel = 1,05 ÷ 1,03 ≈ 1,0194, soit une hausse du salaire réel d'environ 1,94 %.",
              "Vérification par l'approximation : 5 - 3 = 2 %, proche de 1,94 %, ce qui est cohérent car les taux sont faibles.",
              "Réponse : le salaire nominal augmente de 5 %, mais le pouvoir d'achat du salaire n'augmente que d'environ 1,9 %, car une partie de la hausse est absorbée par l'inflation.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "(1) Le nombre de chômeurs d'une région passe de 80 000 à 92 000. Calculez le taux de variation et le coefficient multiplicateur. (2) Un prix augmente de 20 %, puis baisse de 20 %. Quelle est la variation globale ? (3) Une production est multipliée par 2,5 : quel est le taux de variation correspondant ?",
              hint: "Taux de variation = (VA - VD) ÷ VD × 100 ; pour des variations successives, multipliez les coefficients multiplicateurs.",
              solution: [
                "(1) Taux de variation = (92 000 - 80 000) ÷ 80 000 × 100 = 12 000 ÷ 80 000 × 100 = 15 %. CM = 92 000 ÷ 80 000 = 1,15.",
                "(2) CM global = 1,20 × 0,80 = 0,96, soit une baisse de 4 %. Le prix ne revient pas à sa valeur initiale, car la baisse de 20 % s'applique à un montant plus élevé.",
                "(3) Taux de variation = (2,5 - 1) × 100 = 150 % : multiplier par 2,5 correspond à une hausse de 150 %, et non de 250 %.",
              ],
            },
            {
              level: 2,
              statement: "L'indice des prix à la consommation d'un pays (base 100 en 2015) vaut 115 en 2020 et 138 en 2024. (1) Calculez la variation des prix entre 2015 et 2024, puis entre 2020 et 2024. (2) Un salaire nominal de 1 800 € en 2015 atteint 2 300 € en 2024. Calculez sa valeur réelle en 2024, en euros de 2015, et dites si le pouvoir d'achat a progressé. (3) Calculez le taux de croissance annuel moyen des prix entre 2015 et 2024.",
              hint: "Entre 2020 et 2024, calculez un taux de variation entre les deux indices, sans les soustraire. Pour la valeur réelle, divisez par l'indice et multipliez par 100.",
              solution: [
                "(1) De 2015 à 2024 : indice 138, soit une hausse des prix de 38 %. De 2020 à 2024 : (138 - 115) ÷ 115 × 100 = 23 ÷ 115 × 100 = 20 %. (Et non 23 %, ce qui serait l'écart en points d'indice.)",
                "(2) Valeur réelle en 2024 = 2 300 ÷ 138 × 100 ≈ 1 666,67 € de 2015. Comme 1 666,67 < 1 800, le pouvoir d'achat du salaire a baissé d'environ (1 666,67 - 1 800) ÷ 1 800 × 100 ≈ - 7,4 %.",
                "Vérification : le salaire nominal a augmenté de (2 300 - 1 800) ÷ 1 800 × 100 ≈ 27,8 %, moins que les prix (38 %) ; CM réel = 1,278 ÷ 1,38 ≈ 0,926, soit environ - 7,4 %.",
                "(3) Il y a 9 années entre 2015 et 2024. TCAM = (1,38 puissance 1/9 - 1) × 100 ≈ 3,6 % par an. Vérification : 1,036 puissance 9 ≈ 1,375, proche de 1,38.",
              ],
            },
            {
              level: 3,
              statement: "Partie 2 de l'épreuve composée (données fictives). Document : taux de chômage selon le sexe en 2015 et 2024. Hommes : 10 % puis 7 %. Femmes : 10 % puis 8 %. En 2024, les hommes représentent 52 % de la population active et les femmes 48 %. Questions : (1) Comparez l'évolution du chômage des hommes et des femmes, en points et en taux de variation. (2) Calculez le taux de chômage de l'ensemble des actifs en 2024. (3) Un élève écrit : « Le chômage a davantage baissé pour les hommes parce que ce sont des hommes. » Que pensez-vous de cette interprétation ?",
              hint: "Le taux d'ensemble est une moyenne pondérée par les parts dans la population active. Pour la question 3, distinguez une différence observée d'une explication causale.",
              solution: [
                "(1) Hommes : 7 - 10 = - 3 points, soit un taux de variation de - 3 ÷ 10 × 100 = - 30 %. Femmes : 8 - 10 = - 2 points, soit - 2 ÷ 10 × 100 = - 20 %. Le chômage a reculé pour les deux sexes, mais plus fortement pour les hommes.",
                "(2) Taux d'ensemble = 0,52 × 7 + 0,48 × 8 = 3,64 + 3,84 = 7,48 %, soit environ 7,5 %. Il est plus proche du taux des hommes, car ils pèsent davantage dans la population active.",
                "(3) L'interprétation confond corrélation et causalité. Le document établit une différence entre deux groupes, sans en donner la cause. L'écart peut tenir à des variables liées au sexe : les secteurs d'emploi (une reprise plus forte dans l'industrie ou le bâtiment, plus masculins, profiterait davantage aux hommes), le type de contrat, le temps partiel. Il faut un mécanisme explicatif et des données supplémentaires pour conclure.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les pièges des calculs en SES.",
            statements: [
              { text: "Un taux de chômage qui passe de 8 % à 10 % augmente de 2 %.", true: false, why: "Il augmente de 2 points de pourcentage, ce qui correspond à un taux de variation de 25 %." },
              { text: "Une hausse de 50 % suivie d'une baisse de 50 % ramène à la valeur de départ.", true: false, why: "CM global = 1,5 × 0,5 = 0,75 : la valeur a baissé de 25 %." },
              { text: "Un indice de 125, base 100, signifie une hausse de 125 % depuis la date de base.", true: false, why: "Il signifie une hausse de 25 % : il faut retrancher 100." },
              { text: "La médiane est moins sensible que la moyenne aux valeurs extrêmes.", true: true, why: "Elle dépend du classement des valeurs, pas de leur montant : un très haut salaire ne la déplace pas." },
              { text: "Si le salaire nominal augmente de 3 % et les prix de 4 %, le pouvoir d'achat du salaire baisse.", true: true, why: "CM réel = 1,03 ÷ 1,04 ≈ 0,99 : le salaire réel baisse d'environ 1 %." },
              { text: "Une corrélation entre deux variables prouve que l'une cause l'autre.", true: false, why: "Le lien peut venir d'une troisième variable, d'une causalité inverse ou du hasard." },
              { text: "Un coefficient multiplicateur de 0,8 correspond à une baisse de 20 %.", true: true, why: "t = (0,8 - 1) × 100 = - 20 %." },
            ],
          },
          quiz: [
            {
              q: "Une valeur passe de 40 à 50. Quel est son taux de variation ?",
              options: [
                "+ 10 %",
                "+ 20 %",
                "+ 25 %",
                "+ 125 %",
              ],
              answer: 2,
              why: "(50 - 40) ÷ 40 × 100 = 25 %. Le coefficient multiplicateur est 1,25.",
            },
            {
              q: "Un indice base 100 en 2010 vaut 90 en 2024. Que s'est-il passé ?",
              options: [
                "Une hausse de 90 %",
                "Une baisse de 10 %",
                "Une baisse de 90 %",
              ],
              answer: 1,
              why: "Indice 90 : la valeur représente 90 % de celle de 2010, soit une baisse de 10 %.",
            },
            {
              q: "Quel indicateur résiste le mieux à la présence de quelques revenus très élevés ?",
              options: [
                "La moyenne arithmétique simple",
                "La somme des revenus",
                "Le revenu le plus élevé de la population",
                "La médiane",
              ],
              answer: 3,
              why: "La médiane partage la population en deux moitiés : quelques valeurs extrêmes ne la modifient pas.",
            },
            {
              q: "Les prix augmentent de 2 % et un revenu nominal de 6 %. Le revenu réel augmente d'environ :",
              options: [
                "4 %",
                "8 %",
                "3 %",
              ],
              answer: 0,
              why: "CM réel = 1,06 ÷ 1,02 ≈ 1,039, soit environ 3,9 %, proche de l'approximation 6 - 2 = 4 %.",
            },
            {
              q: "Trois hausses successives de 10 % correspondent à une hausse globale de :",
              options: [
                "30 %",
                "33,1 %",
                "31 %",
              ],
              answer: 1,
              why: "CM global = 1,1 × 1,1 × 1,1 = 1,331, soit une hausse de 33,1 % : les variations successives se multiplient.",
            },
          ],
          trap: "Confondre points de pourcentage et pourcentage, additionner des taux de variation successifs, ou lire un indice de 125 comme une hausse de 125 % : ce sont les trois erreurs de calcul les plus coûteuses au bac.",
          method: "Après chaque calcul, faites une vérification inverse : multipliez la valeur de départ par le coefficient multiplicateur trouvé pour retrouver la valeur d'arrivée, et vérifiez que les parts d'un même ensemble totalisent 100 %. Rédigez ensuite une phrase qui donne le sens du résultat avec son unité.",
        },
      ],
    },
  ],
}
