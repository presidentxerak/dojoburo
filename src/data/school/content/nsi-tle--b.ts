import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'nsi-tle',
  chapters: [
    /* ================================================================== */
    /* BASES DE DONNÉES RELATIONNELLES ET SQL                               */
    /* ================================================================== */
    {
      id: 'bases-de-donnees',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'modele-relationnel',
          title: 'Le modèle relationnel : relations, clés, schéma',
          minutes: 30,
          objectives: [
            "Identifier les concepts définissant le modèle relationnel : relation, attribut, domaine, n-uplet, clé primaire, clé étrangère.",
            "Écrire le schéma relationnel d'une base de données à partir de la description d'une situation.",
            "Énoncer et vérifier les contraintes d'intégrité : contrainte de domaine, contrainte d'entité, contrainte de référence.",
            "Distinguer la structure d'une base (son schéma) de son contenu (les n-uplets enregistrés).",
          ],
          course: [
            {
              heading: "Pourquoi un modèle relationnel ?",
              paragraphs: [
                "Imaginons une médiathèque qui range toutes ses informations dans un unique grand tableau : pour chaque emprunt, on recopie le titre du livre, l'année de parution, le nom et le prénom de l'auteur, le nom et la ville de l'adhérent. Le nom « Hugo » est alors répété des centaines de fois. Cette redondance coûte de la place, mais surtout elle crée des incohérences : si l'on corrige une faute dans le nom d'un auteur sur une ligne et pas sur les autres, la base contient deux versions contradictoires de la même information.",
                "Le modèle relationnel, proposé en 1970 par Edgar F. Codd, chercheur chez IBM, répond à ce problème. Les données sont réparties dans plusieurs tables, chacune décrivant un seul type d'objet (les auteurs, les livres, les adhérents, les emprunts), et ces tables sont reliées entre elles par des valeurs communes. Chaque information n'est écrite qu'une fois : le nom d'un auteur figure sur une seule ligne de la table des auteurs, et les livres y font référence par un identifiant.",
                "Ce modèle s'appuie sur une base mathématique (la théorie des ensembles) qui garantit des opérations bien définies. Il est aujourd'hui utilisé par la grande majorité des bases de données : celles des banques, des sites marchands, des hôpitaux ou des logiciels de vie scolaire reposent le plus souvent sur des tables reliées entre elles.",
              ],
              box: { label: "Repère", text: "1970 : Edgar F. Codd (IBM) publie le modèle relationnel. Idée centrale : découper les données en relations (tables) reliées par des valeurs, pour éviter la redondance et les incohérences qu'elle entraîne." },
            },
            {
              heading: "Relation, attribut, domaine, n-uplet",
              paragraphs: [
                "Une relation se représente par une table. Chaque colonne correspond à un attribut, c'est-à-dire une caractéristique nommée (titre, annee, id_auteur). Chaque ligne est un n-uplet (on dit aussi un enregistrement) : la liste des valeurs prises par les attributs pour un objet. Dans la relation Livre, le n-uplet (1, 'Les Misérables', 1862, 1) décrit un livre : identifiant 1, titre « Les Misérables », paru en 1862, écrit par l'auteur numéro 1.",
                "Chaque attribut possède un domaine : l'ensemble des valeurs qu'il peut prendre. En SQL, les domaines usuels sont INT (entiers), REAL ou FLOAT (nombres à virgule), TEXT ou VARCHAR(n) (chaînes de caractères), DATE (dates) et BOOLEAN. L'attribut annee a pour domaine les entiers, l'attribut titre les chaînes de caractères. Une valeur hors du domaine, comme le texte « mille huit cent » pour une année, est interdite.",
                "Une relation est un ensemble de n-uplets : deux lignes ne peuvent pas être identiques, et l'ordre des lignes n'a aucune signification (on ne parle pas de « la troisième ligne » d'une relation). Le nombre de n-uplets s'appelle le cardinal de la relation ; le nombre d'attributs en est le degré. La relation Livre avec quatre attributs et six livres enregistrés est de degré 4 et de cardinal 6.",
              ],
              box: { label: "Définition", text: "Une relation est un ensemble de n-uplets ayant les mêmes attributs. Un attribut est une colonne nommée ; son domaine est l'ensemble des valeurs autorisées. Un n-uplet (ou enregistrement) est une ligne de la table." },
            },
            {
              heading: "Clé primaire et clé étrangère",
              paragraphs: [
                "Pour désigner sans ambiguïté un n-uplet, chaque relation possède une clé primaire : un attribut, ou un ensemble d'attributs, dont la valeur est différente pour chaque n-uplet. Le titre ne convient pas pour les livres (deux livres peuvent porter le même titre), le nom ne convient pas pour les adhérents (il existe plusieurs Martin). On ajoute donc souvent un identifiant artificiel, comme id_livre ou id_adherent, ou l'on utilise un code existant et unique, comme l'ISBN d'un livre ou le numéro INE d'un élève.",
                "Une clé primaire peut être composée de plusieurs attributs. Dans une relation Inscription(id_eleve, id_option), un élève peut suivre plusieurs options et une option compte plusieurs élèves ; c'est le couple (id_eleve, id_option) qui est unique et forme la clé primaire.",
                "Une clé étrangère est un attribut d'une relation qui fait référence à la clé primaire d'une autre relation. Dans Livre, l'attribut id_auteur est une clé étrangère : sa valeur 1 renvoie au n-uplet de la relation Auteur dont la clé primaire id_auteur vaut 1, ici Victor Hugo. C'est par les clés étrangères que les tables sont reliées. Attention : une clé étrangère n'est pas unique dans sa table, puisque plusieurs livres peuvent avoir le même auteur.",
              ],
              box: { label: "Définition", text: "Clé primaire : attribut (ou ensemble d'attributs) qui identifie de façon unique chaque n-uplet d'une relation. Clé étrangère : attribut qui prend ses valeurs parmi celles de la clé primaire d'une autre relation, et crée ainsi un lien entre les deux tables." },
            },
            {
              heading: "Le schéma relationnel et les contraintes d'intégrité",
              paragraphs: [
                "Le schéma d'une relation donne son nom, ses attributs et leurs domaines. Sur papier, on souligne la clé primaire et l'on fait précéder chaque clé étrangère d'un dièse #. On écrira par exemple Auteur(id_auteur INT, nom TEXT, prenom TEXT, naissance INT), clé primaire id_auteur, et Livre(id_livre INT, titre TEXT, annee INT, #id_auteur INT), clé primaire id_livre, la clé étrangère id_auteur faisant référence à Auteur. L'ensemble des schémas des relations forme le schéma relationnel de la base : c'est sa structure, indépendante des données qu'elle contient à un instant donné.",
                "Le modèle impose trois contraintes d'intégrité qui garantissent la cohérence des données. La contrainte de domaine : chaque valeur appartient au domaine de son attribut. La contrainte d'entité (ou de relation) : la clé primaire de chaque n-uplet existe, n'est pas vide (pas de valeur NULL) et n'apparaît qu'une fois. La contrainte de référence : chaque valeur d'une clé étrangère existe comme valeur de la clé primaire référencée.",
                "Ces contraintes ont des conséquences pratiques. On ne peut pas enregistrer un livre dont l'auteur numéro 9 n'existe pas dans la table Auteur ; il faut d'abord créer l'auteur. Symétriquement, on ne peut pas supprimer un auteur tant qu'un livre y fait encore référence, sinon ce livre pointerait vers un auteur inexistant. Le système de gestion de la base refuse toute opération qui violerait l'une de ces contraintes.",
              ],
              box: { label: "Règle", text: "Trois contraintes d'intégrité : de domaine (chaque valeur dans le domaine de son attribut) ; d'entité (clé primaire unique et non vide) ; de référence (toute clé étrangère renvoie à une clé primaire existante)." },
            },
          ],
          keyPoints: [
            "Le modèle relationnel (Codd, 1970) répartit les données dans des relations (tables) reliées par des valeurs communes, pour éviter la redondance.",
            "Relation = table ; attribut = colonne nommée ; n-uplet = ligne ; domaine = ensemble des valeurs permises d'un attribut.",
            "Une relation est un ensemble : pas deux n-uplets identiques, et l'ordre des lignes n'a pas de sens.",
            "Clé primaire : identifie chaque n-uplet de façon unique. Clé étrangère : renvoie à la clé primaire d'une autre relation.",
            "Schéma : Livre(id_livre INT, titre TEXT, annee INT, #id_auteur INT), clé primaire soulignée, clé étrangère précédée de #.",
            "Contraintes d'intégrité : de domaine, d'entité (clé primaire unique et non vide), de référence (clé étrangère existante).",
          ],
          example: {
            statement: "Un club de sport souhaite gérer ses adhérents, ses activités (nom de l'activité, jour, tarif annuel) et les inscriptions des adhérents aux activités. Un adhérent peut s'inscrire à plusieurs activités, et une activité accueille plusieurs adhérents. Proposez un schéma relationnel en précisant les clés primaires et étrangères.",
            solution: [
              "On repère les objets distincts de la situation : les adhérents, les activités, et le lien « est inscrit à » entre eux. Chaque objet devient une relation.",
              "Relation Adherent(id_adherent INT, nom TEXT, prenom TEXT, naissance DATE) : deux adhérents peuvent avoir le même nom, on crée donc un identifiant id_adherent, qui est la clé primaire.",
              "Relation Activite(id_activite INT, nom TEXT, jour TEXT, tarif REAL) : clé primaire id_activite. Le tarif est un nombre décimal, le jour une chaîne comme 'mercredi'.",
              "Le lien entre adhérents et activités est « plusieurs à plusieurs » : on ne peut pas le mettre dans Adherent (un adhérent aurait plusieurs activités) ni dans Activite. On crée une relation d'association Inscription(#id_adherent INT, #id_activite INT).",
              "Dans Inscription, id_adherent est une clé étrangère vers Adherent et id_activite une clé étrangère vers Activite. Un même adhérent apparaît sur plusieurs lignes, une même activité aussi, mais le couple (id_adherent, id_activite) est unique : c'est la clé primaire, composée de deux attributs.",
              "Réponse : Adherent(id_adherent, nom, prenom, naissance), Activite(id_activite, nom, jour, tarif), Inscription(#id_adherent, #id_activite), avec pour clés primaires respectives id_adherent, id_activite et le couple (id_adherent, id_activite).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On considère la relation Film(id_film INT, titre TEXT, annee INT, duree INT), où duree est exprimée en minutes. Elle contient les quatre n-uplets suivants : (1, 'Le Voyage dans la Lune', 1902, 14) ; (2, 'Les Temps modernes', 1936, 87) ; (3, 'Playtime', 1967, 124) ; (4, 'Les Temps modernes', 1936, 87). a) Donnez les attributs et le domaine de chacun. b) Donnez le degré et le cardinal de la relation. c) Le titre peut-il servir de clé primaire ? Quelle clé primaire choisir ?",
              hint: "Le degré compte les colonnes, le cardinal compte les lignes. Pour la clé primaire, cherchez une colonne dont aucune valeur ne se répète.",
              solution: [
                "a) Les attributs sont id_film (domaine INT, entiers), titre (TEXT, chaînes de caractères), annee (INT) et duree (INT, nombre entier de minutes).",
                "b) Il y a 4 attributs, donc la relation est de degré 4. Elle contient 4 n-uplets, donc son cardinal est 4.",
                "c) Le titre 'Les Temps modernes' apparaît deux fois (n-uplets 2 et 4) : le titre n'identifie pas un film de façon unique, il ne peut pas être clé primaire.",
                "Les n-uplets 2 et 4 ne sont pas identiques puisque leur id_film diffère (2 et 4) ; ils représentent sans doute un doublon de saisie, ce que l'identifiant permet justement de repérer.",
                "Réponse : la clé primaire est id_film, dont les valeurs 1, 2, 3, 4 sont toutes différentes et qui ne dépend pas du contenu des autres attributs.",
              ],
            },
            {
              level: 2,
              statement: "Une base contient les relations Auteur(id_auteur INT, nom TEXT, prenom TEXT), clé primaire id_auteur, et Livre(id_livre INT, titre TEXT, annee INT, #id_auteur INT), clé primaire id_livre. Auteur contient (1, 'Hugo', 'Victor'), (2, 'Zola', 'Émile'), (3, 'Verne', 'Jules'). Livre contient (1, 'Les Misérables', 1862, 1) et (3, 'Germinal', 1885, 2). Pour chaque opération, dites si elle est acceptée ; sinon, nommez la contrainte violée. a) Ajouter (2, 'Notre-Dame de Paris', 1831, 1) dans Livre. b) Ajouter (3, 'Le Tour du monde en quatre-vingts jours', 1872, 3) dans Livre. c) Ajouter (4, 'La Mare au diable', 1846, 4) dans Livre. d) Ajouter (5, 'Thérèse Raquin', 'mille huit cent soixante-sept', 2) dans Livre. e) Supprimer l'auteur 2 de la table Auteur.",
              hint: "Pour chaque opération, vérifiez dans l'ordre : le domaine de chaque valeur, l'unicité de la clé primaire, l'existence de l'auteur référencé.",
              solution: [
                "a) id_livre 2 n'existe pas encore, les domaines sont respectés et l'auteur 1 existe : l'insertion est acceptée.",
                "b) id_livre 3 est déjà la clé primaire de 'Germinal' : la contrainte d'entité (unicité de la clé primaire) est violée, l'insertion est refusée.",
                "c) La clé étrangère id_auteur vaut 4, or aucun auteur n'a pour clé primaire 4 : la contrainte de référence est violée, l'insertion est refusée. Il faudrait d'abord ajouter George Sand dans Auteur.",
                "d) L'attribut annee est de domaine INT et reçoit un texte : la contrainte de domaine est violée, l'insertion est refusée (il fallait écrire 1867).",
                "e) Le livre 'Germinal' a pour id_auteur la valeur 2 : supprimer l'auteur 2 laisserait une clé étrangère sans clé primaire correspondante. La contrainte de référence est violée, la suppression est refusée tant que 'Germinal' est dans la table Livre.",
                "Bilan : seule l'opération a) est acceptée.",
              ],
            },
            {
              level: 3,
              statement: "(Type bac) Une médiathèque enregistre ses emprunts dans une seule table Emprunts(num, titre, auteur, nom_adherent, ville_adherent, date_emprunt). On y lit notamment (1, 'Germinal', 'Zola', 'Martin', 'Lyon', '2026-09-02') et (5, 'Germinal', 'Zola', 'Martin', 'Lyon', '2026-09-20'). 1. Expliquez, à partir de ces deux lignes, le problème posé par cette organisation lorsque Martin déménage à Villeurbanne. 2. Proposez un schéma relationnel en quatre relations (auteurs, livres, adhérents, emprunts), en précisant clés primaires et clés étrangères. 3. Un élève propose de prendre le couple (id_livre, id_adherent) comme clé primaire de la relation des emprunts. Est-ce pertinent ?",
              hint: "Repérez les informations recopiées plusieurs fois. Pour la question 3, demandez-vous si un même adhérent peut emprunter deux fois le même livre.",
              solution: [
                "1. Le titre, l'auteur, le nom et la ville de l'adhérent sont recopiés à chaque emprunt : c'est de la redondance. Si Martin déménage, il faut modifier sa ville sur toutes ses lignes ; si l'on en oublie une, la base indique à la fois Lyon et Villeurbanne pour la même personne : les données deviennent incohérentes.",
                "2. Auteur(id_auteur INT, nom TEXT, prenom TEXT), clé primaire id_auteur.",
                "Livre(id_livre INT, titre TEXT, annee INT, #id_auteur INT), clé primaire id_livre, id_auteur clé étrangère vers Auteur.",
                "Adherent(id_adherent INT, nom TEXT, ville TEXT), clé primaire id_adherent.",
                "Emprunt(id_emprunt INT, #id_livre INT, #id_adherent INT, date_emprunt DATE), clé primaire id_emprunt, id_livre clé étrangère vers Livre, id_adherent clé étrangère vers Adherent. La ville de Martin n'est plus écrite qu'une fois, dans Adherent : un déménagement se traduit par une seule modification.",
                "3. Les deux lignes de l'énoncé montrent que Martin a emprunté 'Germinal' le 2 septembre puis le 20 septembre : le couple (id_livre, id_adherent) serait identique pour ces deux emprunts. Il n'est donc pas unique et ne peut pas être clé primaire.",
                "On peut garder l'identifiant id_emprunt, ou prendre le triplet (id_livre, id_adherent, date_emprunt), unique tant qu'un adhérent n'emprunte pas deux fois le même livre le même jour.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion du modèle relationnel à sa définition.",
            pairs: [
              { left: "Attribut", right: "Colonne nommée d'une relation" },
              { left: "N-uplet", right: "Ligne d'une table, ou enregistrement" },
              { left: "Domaine", right: "Ensemble des valeurs permises pour un attribut" },
              { left: "Clé primaire", right: "Identifie chaque n-uplet de façon unique" },
              { left: "Clé étrangère", right: "Renvoie à la clé primaire d'une autre relation" },
              { left: "Schéma relationnel", right: "Structure de la base : relations, attributs, domaines, clés" },
            ],
          },
          quiz: [
            {
              q: "Dans la relation Livre(id_livre, titre, annee, #id_auteur), que représente une ligne de la table ?",
              options: ["Un attribut", "Un n-uplet", "Un domaine", "Un schéma"],
              answer: 1,
              why: "Une ligne regroupe les valeurs des attributs pour un livre : c'est un n-uplet, ou enregistrement. Les attributs sont les colonnes.",
            },
            {
              q: "Pourquoi le nom d'un adhérent est-il un mauvais choix de clé primaire ?",
              options: ["Parce qu'un nom est un texte", "Parce que deux adhérents peuvent avoir le même nom", "Parce qu'un nom est trop long à saisir"],
              answer: 1,
              why: "Une clé primaire doit être unique pour chaque n-uplet. Un texte peut très bien être clé primaire s'il est unique, ce qui n'est pas le cas d'un nom de famille.",
            },
            {
              q: "La table Livre contient un livre dont id_auteur vaut 7, mais aucun auteur n'a la clé primaire 7. Quelle contrainte est violée ?",
              options: ["La contrainte de domaine", "La contrainte d'entité", "La contrainte de référence", "Aucune contrainte"],
              answer: 2,
              why: "Une clé étrangère doit toujours renvoyer à une clé primaire existante : c'est la contrainte de référence.",
            },
            {
              q: "Une relation Inscription(#id_eleve, #id_option) relie élèves et options. Quelle est sa clé primaire la plus naturelle ?",
              options: ["Le couple (id_eleve, id_option)", "id_eleve seul", "id_option seul", "Elle n'a pas besoin de clé primaire"],
              answer: 0,
              why: "Un élève suit plusieurs options et une option compte plusieurs élèves : seul le couple est unique. Toute relation possède une clé primaire.",
            },
            {
              q: "Quelle affirmation sur une relation est exacte ?",
              options: ["L'ordre des lignes fait partie de l'information", "Deux n-uplets peuvent être strictement identiques", "Une clé étrangère est toujours unique dans sa table", "Le cardinal est le nombre de n-uplets"],
              answer: 3,
              why: "Une relation est un ensemble de n-uplets, sans doublon ni ordre, et son cardinal est leur nombre. Une clé étrangère peut se répéter : plusieurs livres ont le même auteur.",
            },
          ],
          trap: "Croire qu'une clé étrangère doit être unique dans sa table, ou la confondre avec la clé primaire : id_auteur est clé primaire dans Auteur (unique) mais clé étrangère dans Livre, où il se répète pour chaque livre du même auteur.",
          method: "Pour construire un schéma, listez d'abord les objets de la situation (une relation par objet), donnez à chacun une clé primaire, puis traduisez chaque lien : un lien « un à plusieurs » devient une clé étrangère du côté « plusieurs », un lien « plusieurs à plusieurs » devient une relation d'association.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'sgbd',
          title: 'Les systèmes de gestion de bases de données',
          minutes: 25,
          objectives: [
            "Identifier les services rendus par un système de gestion de bases de données relationnelles : persistance des données, gestion des accès concurrents, efficacité de traitement des requêtes, sécurisation des accès.",
            "Expliquer le rôle des contraintes d'intégrité et des transactions dans la cohérence des données.",
            "Distinguer un langage déclaratif comme SQL d'un langage impératif comme Python.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un SGBD ?",
              paragraphs: [
                "Un système de gestion de bases de données (SGBD) est un logiciel qui stocke des bases de données, les organise et permet de les consulter et de les modifier. L'utilisateur, qu'il s'agisse d'une personne ou d'un programme, ne manipule jamais directement les fichiers où sont rangées les données : il adresse des requêtes au SGBD, écrites en SQL, et le SGBD se charge de tout le reste.",
                "Les SGBD relationnels les plus répandus sont SQLite, MySQL et son dérivé MariaDB, PostgreSQL, Oracle Database et Microsoft SQL Server. Beaucoup fonctionnent selon une architecture client-serveur : le SGBD tourne sur un serveur, et de nombreux clients (un site web, une application mobile, un logiciel de gestion) lui envoient des requêtes par le réseau. SQLite fait exception : c'est une bibliothèque intégrée au programme, qui range toute la base dans un seul fichier ; on la trouve dans les navigateurs et les smartphones.",
                "Un SGBD rend quatre grands services, que le programme de terminale demande de connaître : la persistance des données, la gestion des accès concurrents, l'efficacité du traitement des requêtes et la sécurisation des accès. Il veille en plus en permanence au respect des contraintes d'intégrité définies dans le schéma.",
              ],
              box: { label: "Définition", text: "Un SGBD (système de gestion de bases de données) est le logiciel qui assure le stockage, la cohérence, la sécurité et l'interrogation d'une base de données. On lui parle en SQL ; il décide lui-même comment exécuter chaque requête." },
            },
            {
              heading: "Persistance et sécurisation des accès",
              paragraphs: [
                "La persistance signifie que les données survivent à la fin du programme qui les a créées, à l'arrêt de l'ordinateur ou à une coupure de courant. Une liste Python disparaît quand le programme se termine, car elle n'existe qu'en mémoire vive ; une base de données est enregistrée sur un support de stockage durable (disque dur, SSD). Le SGBD tient aussi un journal des modifications qui lui permet, après une panne, de retrouver un état cohérent, et il facilite les sauvegardes.",
                "La sécurisation des accès consiste à contrôler qui peut faire quoi. Chaque utilisateur s'authentifie (identifiant et mot de passe) et reçoit des droits précis : lire une table, y insérer des lignes, en modifier, en supprimer. Dans un logiciel de vie scolaire, un élève peut consulter ses notes mais pas les modifier, un professeur peut saisir les notes de ses classes seulement, et l'administrateur gère les comptes. En SQL, ces droits se donnent avec les commandes GRANT et REVOKE.",
                "Cette sécurité est aussi une obligation légale lorsque la base contient des données personnelles : en Europe, le règlement général sur la protection des données (RGPD), applicable depuis 2018, impose de protéger ces données et d'en limiter l'accès aux personnes qui en ont besoin.",
              ],
            },
            {
              heading: "Accès concurrents et transactions",
              paragraphs: [
                "Une même base est souvent utilisée au même moment par des milliers de clients : c'est l'accès concurrent. Sans précaution, deux opérations simultanées peuvent se perturber. Exemple : il reste une place dans un train ; deux voyageurs consultent la base au même instant, lisent tous deux « 1 place libre » et réservent tous deux. La place est vendue deux fois. Le SGBD évite cela en isolant les opérations, par exemple en posant un verrou sur la donnée en cours de modification : le second client attend que le premier ait terminé, puis lit « 0 place libre ».",
                "Pour garantir la cohérence, le SGBD regroupe plusieurs opérations en une transaction, qui est exécutée en entier ou pas du tout. Lors d'un virement bancaire, débiter un compte et créditer l'autre forment une seule transaction : si une panne survient entre les deux, le SGBD annule le débit au redémarrage, et l'argent ne disparaît pas. Quand tout s'est bien passé, la transaction est validée (COMMIT) ; sinon elle est annulée (ROLLBACK).",
              ],
              box: { label: "À retenir", text: "Une transaction respecte les propriétés ACID : Atomicité (tout ou rien), Cohérence (la base passe d'un état valide à un état valide), Isolation (les transactions simultanées ne se perturbent pas), Durabilité (une transaction validée n'est jamais perdue)." },
            },
            {
              heading: "Efficacité des requêtes et langage déclaratif",
              paragraphs: [
                "SQL est un langage déclaratif : la requête décrit le résultat voulu (« les titres des livres parus après 1870 ») sans dire comment l'obtenir. Python, au contraire, est utilisé ici de façon impérative : on écrit les boucles et les tests qui produisent le résultat. C'est le SGBD, grâce à son optimiseur, qui choisit la meilleure façon d'exécuter une requête SQL : dans quel ordre lire les tables, quelles lignes écarter d'abord.",
                "Pour accélérer les recherches, le SGBD utilise des index. Comme l'index alphabétique à la fin d'un livre, un index est une structure triée (souvent un arbre équilibré) qui associe à chaque valeur d'un attribut l'emplacement des lignes correspondantes. Sans index, chercher un client parmi un million demande de parcourir les lignes une à une, jusqu'à un million de comparaisons ; avec un index en arbre équilibré, une vingtaine d'étapes suffisent, car 2²⁰ dépasse le million.",
                "Un index a un coût : il occupe de la place et doit être mis à jour à chaque insertion ou modification. On indexe donc les attributs souvent utilisés dans les recherches et les jointures ; la clé primaire est indexée automatiquement par la plupart des SGBD.",
              ],
              box: { label: "Repère", text: "Les quatre services d'un SGBD : persistance (les données durent), accès concurrents (plusieurs utilisateurs sans conflit), efficacité (optimiseur et index), sécurisation (authentification et droits). Plus le contrôle des contraintes d'intégrité." },
            },
          ],
          keyPoints: [
            "Un SGBD stocke et gère les bases de données ; on l'interroge en SQL. Exemples : SQLite, MySQL, MariaDB, PostgreSQL, Oracle.",
            "Persistance : les données survivent à l'arrêt du programme et aux pannes, grâce au stockage durable et à la journalisation.",
            "Accès concurrents : verrous et transactions empêchent deux opérations simultanées de produire un résultat faux.",
            "Transaction : tout ou rien (COMMIT ou ROLLBACK), propriétés ACID : atomicité, cohérence, isolation, durabilité.",
            "Efficacité : SQL est déclaratif, l'optimiseur choisit le plan d'exécution ; les index accélèrent les recherches.",
            "Sécurisation : authentification, droits par utilisateur (GRANT, REVOKE), protection des données personnelles (RGPD).",
          ],
          example: {
            statement: "Un site de billetterie de concerts rencontre quatre problèmes. a) Après une panne de serveur, il faut retrouver toutes les ventes déjà faites. b) Deux fans achètent au même instant le dernier billet. c) La recherche d'un billet parmi dix millions est très lente. d) Un vendeur ne doit pas pouvoir lire les coordonnées bancaires des clients. Associez à chaque problème le service du SGBD qui le résout et expliquez.",
            solution: [
              "a) C'est la persistance : les ventes validées sont enregistrées sur un stockage durable et dans le journal du SGBD ; une transaction validée ne peut pas être perdue (durabilité), on retrouve donc toutes les ventes après le redémarrage.",
              "b) C'est la gestion des accès concurrents : l'achat est une transaction isolée. Le SGBD verrouille le billet pendant la première vente ; la seconde transaction voit ensuite qu'il n'y a plus de billet et échoue proprement au lieu de vendre deux fois la même place.",
              "c) C'est l'efficacité du traitement des requêtes : en créant un index sur l'attribut recherché (par exemple le numéro de billet), le SGBD trouve la ligne en une vingtaine d'étapes au lieu de parcourir dix millions de lignes.",
              "d) C'est la sécurisation des accès : le compte du vendeur reçoit le droit de lire la table des billets mais aucun droit sur la table des paiements.",
              "Réponse : a) persistance, b) accès concurrents, c) efficacité (index), d) sécurisation des accès.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, nommez le service du SGBD concerné (persistance, accès concurrents, efficacité, sécurisation). a) Un élève tente de modifier sa note sur le logiciel de vie scolaire et reçoit un message d'erreur. b) Après une coupure de courant, le logiciel de caisse d'un magasin retrouve toutes les ventes de la journée. c) Mille spectateurs réservent en même temps des places pour un match sans qu'aucune place soit vendue deux fois. d) Une requête de recherche par nom passe de 4 secondes à quelques millisecondes après un réglage de l'administrateur.",
              hint: "Demandez-vous à chaque fois : s'agit-il de durer, de partager, d'aller vite ou de protéger ?",
              solution: [
                "a) L'élève n'a que le droit de lecture sur ses notes : c'est la sécurisation des accès.",
                "b) Les ventes enregistrées ont survécu à la coupure : c'est la persistance des données.",
                "c) Les réservations simultanées sont isolées les unes des autres : c'est la gestion des accès concurrents.",
                "d) L'administrateur a très probablement créé un index sur l'attribut nom : c'est l'efficacité du traitement des requêtes.",
              ],
            },
            {
              level: 2,
              statement: "Le compte d'Alice contient 500 € et celui de Bob 200 €. Alice vire 150 € à Bob. Le virement s'effectue en deux opérations : 1) retirer 150 € du compte d'Alice ; 2) ajouter 150 € au compte de Bob. Une panne survient juste après l'opération 1. a) Donnez les soldes si les opérations ne sont pas regroupées en transaction. Que constatez-vous ? b) Que se passe-t-il si elles forment une transaction ? c) Quelle propriété ACID est en jeu ?",
              hint: "Calculez la somme des deux soldes avant et après : elle devrait toujours rester la même.",
              solution: [
                "Avant le virement, la somme des deux soldes vaut 500 + 200 = 700 €.",
                "a) Sans transaction, seule l'opération 1 a eu lieu : Alice a 500 - 150 = 350 € et Bob a toujours 200 €. La somme ne vaut plus que 550 € : 150 € ont disparu, la base est incohérente.",
                "b) Avec une transaction, la transaction n'a pas été validée au moment de la panne. Au redémarrage, le SGBD l'annule : Alice retrouve 500 € et Bob 200 €. On peut alors relancer le virement, qui donnera 350 € et 350 €. Dans les deux cas, la somme reste 700 €.",
                "c) C'est l'atomicité : la transaction s'exécute en entier ou pas du tout. Elle garantit aussi la cohérence, puisque la base reste dans un état valide.",
              ],
            },
            {
              level: 3,
              statement: "(Type bac) Un site marchand gère un stock de 10 trottinettes. Deux vendeurs traitent au même moment deux commandes : le vendeur A lit le stock, puis enregistre stock - 3 ; le vendeur B lit le stock, puis enregistre stock - 2. Les étapes s'enchaînent ainsi : A lit, B lit, A écrit, B écrit. 1. Quelle valeur du stock est finalement enregistrée ? Quelle devrait-elle être ? 2. Expliquez comment le SGBD évite ce problème. 3. La table Commande compte un million de lignes. Combien de lignes faut-il examiner, au pire, pour retrouver une commande par son numéro sans index ? Et avec un index en arbre binaire de recherche équilibré ? Justifiez.",
              hint: "Notez la valeur lue par chaque vendeur avant toute écriture. Pour l'index, cherchez la plus petite puissance de 2 qui dépasse un million.",
              solution: [
                "1. A lit 10 et B lit 10. A écrit 10 - 3 = 7. B écrit 10 - 2 = 8, en écrasant la valeur de A. Le stock enregistré vaut 8, alors que 5 trottinettes ont été vendues : il devrait valoir 10 - 3 - 2 = 5. La mise à jour de A est perdue.",
                "2. Chaque commande est une transaction isolée : lorsque A commence à modifier le stock, le SGBD pose un verrou sur cette donnée. B doit attendre la fin de la transaction de A pour lire le stock ; il lit alors 7 et enregistre 7 - 2 = 5. Le résultat est le même que si les commandes avaient été traitées l'une après l'autre.",
                "3. Sans index, le SGBD parcourt les lignes une à une : au pire, il examine le million de lignes (coût linéaire).",
                "Avec un index en arbre équilibré, chaque comparaison élimine environ la moitié des lignes restantes. Comme 2¹⁹ = 524 288 < 1 000 000 ≤ 2²⁰ = 1 048 576, une vingtaine de comparaisons suffit (coût logarithmique).",
                "Bilan : stock enregistré 8 au lieu de 5 sans isolation ; environ 1 000 000 de lignes examinées sans index contre environ 20 avec un index.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les services d'un SGBD.",
            statements: [
              { text: "Une base de données gérée par un SGBD disparaît lorsque le programme qui l'interroge se termine.", true: false, why: "C'est le principe de la persistance : les données sont stockées durablement, indépendamment des programmes clients." },
              { text: "Une transaction est exécutée entièrement ou pas du tout.", true: true, why: "C'est l'atomicité, le A de ACID : en cas de problème, toutes les opérations de la transaction sont annulées." },
              { text: "En SQL, on décrit pas à pas la manière dont le SGBD doit parcourir les tables.", true: false, why: "SQL est déclaratif : on décrit le résultat voulu, et l'optimiseur du SGBD choisit comment l'obtenir." },
              { text: "Un index accélère les recherches mais ralentit un peu les insertions.", true: true, why: "L'index doit être mis à jour à chaque insertion ou modification, et il occupe de la place." },
              { text: "Tous les utilisateurs d'une base ont forcément les mêmes droits.", true: false, why: "Le SGBD gère des droits par utilisateur : lecture, insertion, modification, suppression, accordés ou retirés avec GRANT et REVOKE." },
              { text: "SQLite range une base entière dans un seul fichier, sans serveur séparé.", true: true, why: "SQLite est une bibliothèque intégrée au programme, contrairement à PostgreSQL ou MySQL qui fonctionnent en client-serveur." },
              { text: "Le SGBD accepte une insertion qui viole une contrainte de référence si l'utilisateur est administrateur.", true: false, why: "Les contraintes d'intégrité s'imposent à tous : le SGBD refuse toute opération qui les violerait." },
            ],
          },
          quiz: [
            {
              q: "Quel service d'un SGBD garantit que les données survivent à une coupure de courant ?",
              options: ["La sécurisation des accès", "La persistance", "La gestion des accès concurrents", "L'optimisation des requêtes"],
              answer: 1,
              why: "La persistance assure que les données sont conservées durablement, au-delà de l'exécution des programmes et des pannes.",
            },
            {
              q: "Que signifie le A de ACID ?",
              options: ["Atomicité", "Authentification", "Accessibilité", "Administration"],
              answer: 0,
              why: "Atomicité : une transaction s'exécute en entier ou pas du tout. Les autres lettres sont Cohérence, Isolation, Durabilité.",
            },
            {
              q: "Deux clients réservent le dernier siège au même instant. Quel mécanisme évite la double réservation ?",
              options: ["Un index sur le numéro de siège", "Une sauvegarde quotidienne", "L'isolation des transactions, par exemple grâce à des verrous", "Le chiffrement de la base"],
              answer: 2,
              why: "La gestion des accès concurrents isole les transactions : la seconde attend la fin de la première et voit que le siège est pris.",
            },
            {
              q: "Pourquoi dit-on que SQL est un langage déclaratif ?",
              options: ["Parce qu'il faut déclarer les variables", "Parce qu'il ne s'utilise qu'avec des tables déclarées en majuscules", "Parce qu'il ne permet pas de modifier les données", "Parce que la requête décrit le résultat attendu, pas la méthode pour l'obtenir"],
              answer: 3,
              why: "On écrit ce que l'on veut obtenir ; c'est le SGBD qui choisit l'algorithme d'exécution.",
            },
            {
              q: "Quel est l'inconvénient d'un index ?",
              options: ["Il ralentit les recherches", "Il occupe de la place et doit être mis à jour à chaque modification", "Il supprime les doublons de la table"],
              answer: 1,
              why: "Un index accélère les recherches mais coûte de l'espace et du temps lors des insertions et des mises à jour.",
            },
          ],
          trap: "Confondre la persistance (les données durent) et la sécurisation (les données sont protégées), ou croire que SQL dit au SGBD comment chercher : SQL décrit seulement le résultat attendu.",
          method: "Retenez les quatre services avec quatre verbes : durer (persistance), partager (accès concurrents), aller vite (efficacité), protéger (sécurisation). Face à une situation, identifiez d'abord lequel de ces verbes est en jeu, puis citez le mécanisme précis : stockage durable et journal, transaction et verrou, index et optimiseur, authentification et droits.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'sql-interrogation',
          title: 'Requêtes SQL d\'interrogation',
          minutes: 35,
          objectives: [
            "Identifier les composants d'une requête SQL d'interrogation.",
            "Construire des requêtes d'interrogation à l'aide des clauses SELECT, FROM, WHERE, ainsi que DISTINCT et ORDER BY.",
            "Utiliser les fonctions d'agrégation COUNT, SUM, AVG, MIN et MAX.",
            "Prévoir le résultat d'une requête sur une table donnée.",
          ],
          course: [
            {
              heading: "La structure d'une requête : SELECT ... FROM ... WHERE",
              paragraphs: [
                "Dans tout ce cours, on utilise la table Livre(id_livre, titre, annee, id_auteur), qui contient six n-uplets : (1, 'Les Misérables', 1862, 1), (2, 'Notre-Dame de Paris', 1831, 1), (3, 'Germinal', 1885, 2), (4, 'L''Assommoir', 1877, 2), (5, 'De la Terre à la Lune', 1865, 3), (6, 'Le Tour du monde en quatre-vingts jours', 1872, 3). Les auteurs 1, 2 et 3 sont Hugo, Zola et Verne.",
                "Une requête d'interrogation a la forme SELECT attributs FROM table WHERE condition; et se lit : « sélectionner ces attributs, dans cette table, pour les lignes qui vérifient cette condition ». La requête SELECT titre, annee FROM Livre WHERE id_auteur = 1; renvoie deux lignes : ('Les Misérables', 1862) et ('Notre-Dame de Paris', 1831). L'étoile * désigne tous les attributs : SELECT * FROM Livre; renvoie la table entière.",
                "Le résultat d'une requête est lui-même une table. Les mots-clés s'écrivent par convention en majuscules, une requête se termine par un point-virgule, et les chaînes de caractères s'écrivent entre apostrophes droites : WHERE titre = 'Germinal'. Pour écrire une apostrophe à l'intérieur d'une chaîne, on la double, comme dans 'L''Assommoir'.",
              ],
              box: { label: "Formule", text: "SELECT attribut1, attribut2 FROM table WHERE condition ORDER BY attribut ; SELECT choisit les colonnes, FROM la table, WHERE filtre les lignes, ORDER BY les trie." },
            },
            {
              heading: "Filtrer les lignes avec WHERE",
              paragraphs: [
                "La condition de WHERE utilise les opérateurs de comparaison = (égal), <> (différent ; != est aussi accepté par la plupart des SGBD), <, <=, > et >=, ainsi que les connecteurs logiques AND, OR et NOT. Exemple : SELECT titre FROM Livre WHERE annee >= 1860 AND annee < 1880; renvoie 'Les Misérables', 'L''Assommoir', 'De la Terre à la Lune' et 'Le Tour du monde en quatre-vingts jours'.",
                "Comme en mathématiques, AND est prioritaire sur OR : la condition a OR b AND c se lit a OR (b AND c). En cas de doute, on ajoute des parenthèses, ce qui rend aussi la requête plus lisible.",
                "L'opérateur LIKE compare une chaîne à un motif : % remplace une suite quelconque de caractères (éventuellement vide) et _ remplace exactement un caractère. SELECT titre FROM Livre WHERE titre LIKE 'Le%'; renvoie 'Les Misérables' et 'Le Tour du monde en quatre-vingts jours'. Enfin, une valeur absente est notée NULL et se teste avec IS NULL ou IS NOT NULL, jamais avec =.",
              ],
            },
            {
              heading: "Trier avec ORDER BY, éliminer les doublons avec DISTINCT",
              paragraphs: [
                "Sans indication, l'ordre des lignes du résultat n'est pas garanti. La clause ORDER BY, placée à la fin, trie le résultat : ORDER BY annee ou ORDER BY annee ASC pour l'ordre croissant, ORDER BY annee DESC pour l'ordre décroissant. On peut trier selon plusieurs attributs : ORDER BY id_auteur, annee DESC trie par auteur, puis, pour un même auteur, du livre le plus récent au plus ancien. Les chaînes sont triées par ordre alphabétique.",
                "Le résultat d'un SELECT peut contenir des lignes identiques. SELECT id_auteur FROM Livre; renvoie six lignes : 1, 1, 2, 2, 3, 3. Le mot-clé DISTINCT, placé juste après SELECT, supprime les doublons : SELECT DISTINCT id_auteur FROM Livre; renvoie trois lignes, 1, 2 et 3.",
              ],
              box: { label: "Règle", text: "L'ordre d'écriture des clauses est imposé : SELECT (avec éventuellement DISTINCT), FROM, WHERE, ORDER BY. ASC (croissant) est l'ordre par défaut, DESC l'ordre décroissant." },
            },
            {
              heading: "Les fonctions d'agrégation",
              paragraphs: [
                "Une fonction d'agrégation calcule une seule valeur à partir d'un ensemble de lignes. COUNT(*) compte les lignes ; COUNT(DISTINCT attribut) compte les valeurs distinctes ; SUM(attribut) et AVG(attribut) donnent la somme et la moyenne ; MIN(attribut) et MAX(attribut) la plus petite et la plus grande valeur. Elles s'appliquent aux lignes qui ont passé le filtre WHERE.",
                "Exemples sur la table Livre : SELECT COUNT(*) FROM Livre WHERE id_auteur = 2; renvoie 2. SELECT MIN(annee) FROM Livre; renvoie 1831. SELECT COUNT(DISTINCT id_auteur) FROM Livre; renvoie 3. Le mot-clé AS renomme une colonne du résultat : SELECT AVG(annee) AS annee_moyenne FROM Livre WHERE id_auteur = 3; renvoie une colonne nommée annee_moyenne contenant (1865 + 1872) / 2 = 1868,5.",
                "Une requête qui contient une fonction d'agrégation renvoie une seule ligne. On ne mélange donc pas, dans un même SELECT, une fonction d'agrégation et un attribut ordinaire : SELECT titre, MAX(annee) FROM Livre; n'a pas de sens clair, car il y a six titres et un seul maximum.",
              ],
              box: { label: "À retenir", text: "COUNT(*) : nombre de lignes. SUM, AVG : somme et moyenne. MIN, MAX : extrêmes. Le filtre WHERE s'applique avant le calcul ; le résultat tient en une ligne." },
            },
          ],
          keyPoints: [
            "Forme générale : SELECT colonnes FROM table WHERE condition ORDER BY colonne ; le résultat est une table.",
            "WHERE : =, <>, <, <=, >, >=, AND (prioritaire), OR, NOT, LIKE avec % et _, IS NULL.",
            "ORDER BY attribut ASC (croissant, par défaut) ou DESC (décroissant) ; sans ORDER BY, l'ordre n'est pas garanti.",
            "DISTINCT supprime les doublons du résultat.",
            "COUNT, SUM, AVG, MIN, MAX calculent une seule valeur sur les lignes filtrées ; AS renomme la colonne.",
            "Chaînes entre apostrophes : 'Germinal' ; une apostrophe interne se double : 'L''Assommoir'.",
          ],
          example: {
            statement: "Sur la table Livre(id_livre, titre, annee, id_auteur) du cours, écrivez une requête qui donne les titres et années des livres parus strictement après 1870, du plus ancien au plus récent, puis donnez son résultat.",
            solution: [
              "On veut deux colonnes, titre et annee : SELECT titre, annee.",
              "Les données viennent de la table Livre : FROM Livre.",
              "On ne garde que les livres parus strictement après 1870 : WHERE annee > 1870.",
              "Du plus ancien au plus récent, c'est l'ordre croissant des années : ORDER BY annee ASC (ASC peut être omis).",
              "Requête : SELECT titre, annee FROM Livre WHERE annee > 1870 ORDER BY annee;",
              "Les années strictement supérieures à 1870 sont 1885, 1877 et 1872. Résultat trié : ('Le Tour du monde en quatre-vingts jours', 1872), ('L''Assommoir', 1877), ('Germinal', 1885).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Sur la table Livre du cours, donnez le résultat de chaque requête. a) SELECT titre FROM Livre WHERE id_auteur = 3; b) SELECT COUNT(*) FROM Livre WHERE annee < 1870; c) SELECT MAX(annee) FROM Livre WHERE id_auteur = 1; d) SELECT DISTINCT id_auteur FROM Livre WHERE annee > 1860;",
              hint: "Recopiez la table et cochez les lignes qui vérifient la condition avant de lire la colonne demandée.",
              solution: [
                "a) L'auteur 3 a écrit les livres 5 et 6 : le résultat contient 'De la Terre à la Lune' et 'Le Tour du monde en quatre-vingts jours'.",
                "b) Les années strictement inférieures à 1870 sont 1862, 1831 et 1865 : le résultat est 3.",
                "c) Les livres de l'auteur 1 sont parus en 1862 et 1831 : le maximum est 1862.",
                "d) Les livres parus après 1860 sont les livres 1 (auteur 1), 3 et 4 (auteur 2), 5 et 6 (auteur 3). Sans doublon, le résultat contient 1, 2 et 3.",
              ],
            },
            {
              level: 2,
              statement: "On dispose de la table Adherent(id_adherent, nom, prenom, ville, naissance), où naissance est l'année de naissance. Écrivez les requêtes qui donnent : a) les noms et prénoms des adhérents habitant Lyon, par ordre alphabétique des noms ; b) la liste des villes des adhérents, sans doublon ; c) le nombre d'adhérents nés en 2008 ou après ; d) les noms des adhérents dont le nom commence par M ; e) l'année de naissance du plus âgé des adhérents.",
              hint: "Le plus âgé est celui dont l'année de naissance est la plus petite. Pour « commence par », pensez au motif de LIKE.",
              solution: [
                "a) SELECT nom, prenom FROM Adherent WHERE ville = 'Lyon' ORDER BY nom;",
                "b) SELECT DISTINCT ville FROM Adherent;",
                "c) SELECT COUNT(*) FROM Adherent WHERE naissance >= 2008;",
                "d) SELECT nom FROM Adherent WHERE nom LIKE 'M%'; le symbole % remplace la suite du nom, quelle qu'elle soit.",
                "e) Le plus âgé est né le plus tôt, donc son année est la plus petite : SELECT MIN(naissance) FROM Adherent;",
              ],
            },
            {
              level: 3,
              statement: "(Type bac) La table Resultat(id, eleve, matiere, note) contient : (1, 'Lina', 'NSI', 15), (2, 'Lina', 'Maths', 12), (3, 'Hugo', 'NSI', 9), (4, 'Hugo', 'Maths', 14), (5, 'Sacha', 'NSI', 18), (6, 'Sacha', 'Maths', 11). 1. Donnez le résultat de SELECT eleve FROM Resultat WHERE matiere = 'NSI' AND note >= 10 ORDER BY note DESC; 2. Écrivez une requête qui calcule la moyenne des notes de NSI et donnez sa valeur. 3. Écrivez une requête qui compte le nombre d'élèves différents. 4. Donnez le résultat de SELECT eleve FROM Resultat WHERE note > 12 OR matiere = 'Maths' AND note < 12; en justifiant. 5. La requête SELECT eleve FROM Resultat WHERE matiere = NSI; produit une erreur. Corrigez-la.",
              hint: "Pour la question 4, rappelez-vous que AND est évalué avant OR, et que le résultat peut contenir des doublons.",
              solution: [
                "1. Les lignes de NSI avec note ≥ 10 sont Lina (15) et Sacha (18) ; Hugo (9) est écarté. Triées par note décroissante : Sacha, puis Lina.",
                "2. SELECT AVG(note) FROM Resultat WHERE matiere = 'NSI'; Les notes de NSI sont 15, 9 et 18 ; leur moyenne vaut (15 + 9 + 18) / 3 = 42 / 3 = 14.",
                "3. SELECT COUNT(DISTINCT eleve) FROM Resultat; renvoie 3 (Lina, Hugo, Sacha). Sans DISTINCT, COUNT(eleve) renverrait 6.",
                "4. La condition se lit note > 12 OR (matiere = 'Maths' AND note < 12). Ligne 1 : 15 > 12, retenue. Ligne 2 : 12 n'est pas > 12 et 12 n'est pas < 12, écartée. Ligne 3 : NSI et 9, écartée. Ligne 4 : 14 > 12, retenue. Ligne 5 : 18 > 12, retenue. Ligne 6 : Maths et 11 < 12, retenue.",
                "Le résultat contient donc quatre lignes : Lina, Hugo, Sacha, Sacha. Sacha apparaît deux fois car il n'y a pas de DISTINCT.",
                "5. NSI est une chaîne de caractères : sans apostrophes, le SGBD le prend pour un nom de colonne inexistant. Requête corrigée : SELECT eleve FROM Resultat WHERE matiere = 'NSI';",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les morceaux de la requête qui donne, sans doublon et par ordre alphabétique, les villes des adhérents nés en 2008 ou après.",
            items: [
              "SELECT DISTINCT ville",
              "FROM Adherent",
              "WHERE naissance >= 2008",
              "ORDER BY ville ASC;",
            ],
          },
          quiz: [
            {
              q: "Que renvoie SELECT COUNT(*) FROM Livre WHERE id_auteur = 2; sur la table du cours ?",
              options: ["Les titres des livres de Zola", "2", "6", "1"],
              answer: 1,
              why: "COUNT(*) compte les lignes retenues par WHERE : les livres 3 et 4 ont pour auteur 2, le résultat vaut donc 2.",
            },
            {
              q: "Quel mot-clé supprime les doublons dans le résultat d'une requête ?",
              options: ["UNIQUE", "ORDER BY", "DISTINCT", "COUNT"],
              answer: 2,
              why: "DISTINCT, placé juste après SELECT, ne garde qu'un exemplaire de chaque ligne du résultat.",
            },
            {
              q: "Quelle condition sélectionne les titres commençant par « Le » ?",
              options: ["titre LIKE 'Le%'", "titre = 'Le%'", "titre LIKE '%Le'", "titre LIKE 'Le_'"],
              answer: 0,
              why: "LIKE compare à un motif ; % remplace n'importe quelle suite de caractères. '%Le' cherche les titres qui finissent par Le, et 'Le_' un seul caractère après Le.",
            },
            {
              q: "Comment trier un résultat de l'année la plus récente à la plus ancienne ?",
              options: ["ORDER BY annee", "ORDER BY annee ASC", "SORT BY annee DESC", "ORDER BY annee DESC"],
              answer: 3,
              why: "DESC donne l'ordre décroissant ; ASC, l'ordre par défaut, est croissant. SORT BY n'existe pas en SQL.",
            },
            {
              q: "La condition note > 12 OR matiere = 'Maths' AND note < 12 est équivalente à :",
              options: ["(note > 12 OR matiere = 'Maths') AND note < 12", "note > 12 OR (matiere = 'Maths' AND note < 12)", "note > 12 AND note < 12"],
              answer: 1,
              why: "AND est prioritaire sur OR, comme la multiplication sur l'addition. Les parenthèses lèvent toute ambiguïté.",
            },
          ],
          trap: "Oublier les apostrophes autour des chaînes (WHERE ville = Lyon au lieu de WHERE ville = 'Lyon'), ou oublier que AND est prioritaire sur OR, ce qui change complètement les lignes retenues.",
          method: "Pour écrire une requête, partez de la question en français et remplissez les clauses dans l'ordre de réflexion : quelle table (FROM), quelles lignes (WHERE), quelles colonnes ou quel calcul (SELECT), quel ordre (ORDER BY). Pour prévoir un résultat, recopiez la table et cochez les lignes qui passent le filtre avant d'appliquer SELECT.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'sql-jointures-mises-a-jour',
          title: 'Jointures et requêtes SQL de mise à jour',
          minutes: 35,
          objectives: [
            "Construire des requêtes d'interrogation portant sur plusieurs tables à l'aide de la clause JOIN ... ON.",
            "Construire des requêtes d'insertion et de mise à jour à l'aide de INSERT, UPDATE et DELETE.",
            "Anticiper l'effet d'une requête de mise à jour sur les contraintes d'intégrité et choisir l'ordre des opérations.",
          ],
          course: [
            {
              heading: "Pourquoi et comment joindre deux tables",
              paragraphs: [
                "On reprend la base de la médiathèque : Auteur(id_auteur, nom, prenom, naissance) contient (1, 'Hugo', 'Victor', 1802), (2, 'Zola', 'Émile', 1840), (3, 'Verne', 'Jules', 1828) ; Livre(id_livre, titre, annee, #id_auteur) contient les six livres du cours précédent. Le titre d'un livre est dans Livre, le nom de son auteur dans Auteur : pour afficher « Germinal, Zola », il faut combiner les deux tables. C'est le rôle de la jointure.",
                "La jointure s'écrit FROM Livre JOIN Auteur ON Livre.id_auteur = Auteur.id_auteur. La condition après ON relie la clé étrangère de Livre à la clé primaire de Auteur. On peut imaginer que le SGBD forme tous les couples (ligne de Livre, ligne de Auteur) et ne garde que ceux qui vérifient la condition : chaque livre est ainsi accolé à la ligne de son auteur. La requête SELECT Livre.titre, Auteur.nom FROM Livre JOIN Auteur ON Livre.id_auteur = Auteur.id_auteur; renvoie six lignes, de ('Les Misérables', 'Hugo') à ('Le Tour du monde en quatre-vingts jours', 'Verne').",
                "Quand deux tables ont un attribut de même nom, comme id_auteur, on le préfixe par le nom de la table (Livre.id_auteur) pour lever l'ambiguïté. Pour alléger l'écriture, on peut donner un alias à chaque table : FROM Livre AS L JOIN Auteur AS A ON L.id_auteur = A.id_auteur, puis écrire L.titre et A.nom.",
              ],
              box: { label: "Formule", text: "SELECT T1.a, T2.b FROM T1 JOIN T2 ON T1.cle_etrangere = T2.cle_primaire WHERE condition ORDER BY ... ; La condition ON relie presque toujours une clé étrangère à la clé primaire qu'elle référence." },
            },
            {
              heading: "Combiner jointure, filtre, tri et agrégation",
              paragraphs: [
                "Une fois les tables jointes, toutes les clauses connues s'appliquent au résultat de la jointure. Les livres de Zola s'obtiennent par SELECT Livre.titre FROM Livre JOIN Auteur ON Livre.id_auteur = Auteur.id_auteur WHERE Auteur.nom = 'Zola'; ce qui renvoie 'Germinal' et 'L''Assommoir'. Le nombre de livres d'auteurs nés avant 1830 s'obtient par SELECT COUNT(*) FROM Livre JOIN Auteur ON Livre.id_auteur = Auteur.id_auteur WHERE Auteur.naissance < 1830; qui renvoie 4 (deux livres de Hugo, deux de Verne).",
                "On peut enchaîner plusieurs jointures. Avec Adherent(id_adherent, nom, ville) et Emprunt(id_emprunt, #id_livre, #id_adherent, date_emprunt), les titres empruntés par chaque adhérent s'obtiennent par SELECT Adherent.nom, Livre.titre FROM Emprunt JOIN Livre ON Emprunt.id_livre = Livre.id_livre JOIN Adherent ON Emprunt.id_adherent = Adherent.id_adherent; La table Emprunt sert de pont entre les deux autres.",
                "La jointure étudiée ici (JOIN, ou INNER JOIN) ne garde que les lignes qui trouvent un partenaire : un livre jamais emprunté n'apparaît pas dans la jointure entre Livre et Emprunt.",
              ],
            },
            {
              heading: "Insérer des données : INSERT INTO",
              paragraphs: [
                "La requête INSERT INTO table (attribut1, attribut2, ...) VALUES (valeur1, valeur2, ...); ajoute un n-uplet. Exemple : INSERT INTO Auteur (id_auteur, nom, prenom, naissance) VALUES (4, 'Sand', 'George', 1804); Les valeurs sont données dans l'ordre des attributs listés. On peut insérer plusieurs lignes à la fois en séparant les n-uplets par des virgules après VALUES.",
                "Le SGBD vérifie les contraintes d'intégrité à chaque insertion. Il refuse un n-uplet dont la clé primaire existe déjà (contrainte d'entité) ou dont une clé étrangère ne correspond à aucune clé primaire (contrainte de référence). C'est pourquoi l'ordre des insertions compte : il faut créer l'auteur 4 avant d'insérer INSERT INTO Livre (id_livre, titre, annee, id_auteur) VALUES (7, 'La Mare au diable', 1846, 4);",
              ],
            },
            {
              heading: "Modifier et supprimer : UPDATE et DELETE",
              paragraphs: [
                "La requête UPDATE table SET attribut = nouvelle_valeur WHERE condition; modifie les lignes qui vérifient la condition. Exemple : si l'année de 'Germinal' a été saisie par erreur, UPDATE Livre SET annee = 1885 WHERE id_livre = 3; la corrige. On peut modifier plusieurs attributs (SET a = 1, b = 2) et utiliser l'ancienne valeur : UPDATE Produit SET prix = prix * 1.1 WHERE categorie = 'jeux'; augmente ces prix de 10 %.",
                "La requête DELETE FROM table WHERE condition; supprime les lignes qui vérifient la condition. Exemple : DELETE FROM Emprunt WHERE id_adherent = 2; supprime tous les emprunts de l'adhérent 2. Attention : sans clause WHERE, UPDATE modifie toutes les lignes et DELETE vide entièrement la table. Il faut donc toujours écrire et relire la condition.",
                "Les suppressions sont, elles aussi, soumises à la contrainte de référence. Un SGBD qui applique les clés étrangères refuse de supprimer l'adhérent 2 tant que des emprunts y font référence : il faut d'abord supprimer (ou réaffecter) ces emprunts, puis l'adhérent. L'ordre des suppressions est l'inverse de celui des insertions : on supprime d'abord les lignes qui référencent, ensuite les lignes référencées.",
              ],
              box: { label: "Règle", text: "INSERT INTO T (a, b) VALUES (x, y); UPDATE T SET a = x WHERE condition; DELETE FROM T WHERE condition; Sans WHERE, UPDATE et DELETE touchent toutes les lignes. On insère le référencé avant le référençant, on supprime dans l'ordre inverse." },
            },
          ],
          keyPoints: [
            "Jointure : FROM T1 JOIN T2 ON T1.cle_etrangere = T2.cle_primaire ; on préfixe les attributs ambigus par le nom de la table.",
            "Après la jointure, WHERE, ORDER BY, DISTINCT et les fonctions d'agrégation s'appliquent normalement.",
            "On enchaîne les jointures pour traverser plusieurs tables : Emprunt JOIN Livre ON ... JOIN Adherent ON ...",
            "INSERT INTO T (attributs) VALUES (valeurs); ajoute un n-uplet, refusé s'il viole une contrainte d'intégrité.",
            "UPDATE T SET a = v WHERE ...; et DELETE FROM T WHERE ...; sans WHERE, toutes les lignes sont touchées.",
            "Insérer le référencé avant le référençant ; supprimer le référençant avant le référencé.",
          ],
          example: {
            statement: "Écrivez une requête qui donne le titre, le nom de l'auteur et l'année des livres parus avant 1870, triés par année croissante, puis donnez son résultat.",
            solution: [
              "Le titre et l'année sont dans Livre, le nom dans Auteur : il faut une jointure sur la clé étrangère id_auteur.",
              "FROM Livre JOIN Auteur ON Livre.id_auteur = Auteur.id_auteur associe à chaque livre la ligne de son auteur.",
              "On filtre : WHERE Livre.annee < 1870, puis on trie : ORDER BY Livre.annee.",
              "Requête : SELECT Livre.titre, Auteur.nom, Livre.annee FROM Livre JOIN Auteur ON Livre.id_auteur = Auteur.id_auteur WHERE Livre.annee < 1870 ORDER BY Livre.annee;",
              "Les livres parus avant 1870 sont parus en 1831, 1862 et 1865. Résultat : ('Notre-Dame de Paris', 'Hugo', 1831), ('Les Misérables', 'Hugo', 1862), ('De la Terre à la Lune', 'Verne', 1865).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Avec les tables Auteur et Livre du cours, écrivez une requête donnant les titres des livres écrits par Émile Zola, puis donnez son résultat. Écrivez ensuite une requête donnant, sans doublon, les noms des auteurs ayant publié un livre après 1870.",
              hint: "Le nom de l'auteur n'est pas dans Livre : commencez par écrire la jointure, puis ajoutez le filtre.",
              solution: [
                "SELECT Livre.titre FROM Livre JOIN Auteur ON Livre.id_auteur = Auteur.id_auteur WHERE Auteur.nom = 'Zola';",
                "Zola a pour id_auteur 2 ; les livres 3 et 4 ont id_auteur = 2. Résultat : 'Germinal' et 'L''Assommoir'.",
                "SELECT DISTINCT Auteur.nom FROM Livre JOIN Auteur ON Livre.id_auteur = Auteur.id_auteur WHERE Livre.annee > 1870;",
                "Les livres parus après 1870 sont Germinal (1885) et L'Assommoir (1877), de Zola, et Le Tour du monde (1872), de Verne. Sans DISTINCT, Zola apparaîtrait deux fois ; le résultat est 'Zola' et 'Verne'.",
              ],
            },
            {
              level: 2,
              statement: "Écrivez les requêtes SQL qui réalisent les opérations suivantes, dans un ordre qui respecte les contraintes d'intégrité. a) Ajouter le livre 7, 'La Mare au diable', paru en 1846, écrit par George Sand, née en 1804, qui n'est pas encore dans la base (elle aura l'identifiant 4). b) L'année du livre 5 a été saisie à tort comme 1858 : la corriger en 1865. c) Supprimer le livre 6. d) Expliquez ce qui se passerait si l'on exécutait UPDATE Livre SET annee = 1865; sans clause WHERE.",
              hint: "La clé étrangère du nouveau livre doit renvoyer à un auteur qui existe déjà au moment de l'insertion.",
              solution: [
                "a) On insère d'abord l'auteur : INSERT INTO Auteur (id_auteur, nom, prenom, naissance) VALUES (4, 'Sand', 'George', 1804);",
                "Puis le livre, dont la clé étrangère vaut 4 : INSERT INTO Livre (id_livre, titre, annee, id_auteur) VALUES (7, 'La Mare au diable', 1846, 4); Dans l'ordre inverse, la contrainte de référence serait violée.",
                "b) UPDATE Livre SET annee = 1865 WHERE id_livre = 5;",
                "c) DELETE FROM Livre WHERE id_livre = 6; Aucune autre table ne référence ce livre dans cet exercice, la suppression est acceptée.",
                "d) Sans WHERE, la modification s'applique à toutes les lignes : les sept livres auraient pour année 1865. Toutes les autres années seraient perdues.",
              ],
            },
            {
              level: 3,
              statement: "(Type bac) On ajoute à la base les tables Adherent(id_adherent, nom, ville), contenant (1, 'Martin', 'Lyon'), (2, 'Durand', 'Paris'), (3, 'Petit', 'Lyon'), et Emprunt(id_emprunt, #id_livre, #id_adherent, date_emprunt), contenant (1, 3, 1, '2026-09-02'), (2, 1, 2, '2026-09-05'), (3, 3, 2, '2026-09-10'), (4, 6, 3, '2026-09-12'), (5, 2, 1, '2026-09-20'). 1. Donnez le résultat de SELECT Adherent.nom, Emprunt.date_emprunt FROM Emprunt JOIN Adherent ON Emprunt.id_adherent = Adherent.id_adherent WHERE Emprunt.id_livre = 1; 2. Écrivez une requête donnant les noms des adhérents ayant emprunté 'Germinal', et donnez son résultat. 3. Écrivez une requête comptant les emprunts faits par des adhérents lyonnais, et donnez son résultat. 4. La requête DELETE FROM Adherent WHERE id_adherent = 2; est refusée. Expliquez pourquoi et donnez les requêtes permettant de supprimer cet adhérent.",
              hint: "Pour la question 2, le titre est dans Livre et le nom dans Adherent : la table Emprunt sert de pont, il faut donc deux jointures.",
              solution: [
                "1. Le seul emprunt du livre 1 est l'emprunt 2, fait par l'adhérent 2. Résultat : ('Durand', '2026-09-05').",
                "2. SELECT Adherent.nom FROM Emprunt JOIN Livre ON Emprunt.id_livre = Livre.id_livre JOIN Adherent ON Emprunt.id_adherent = Adherent.id_adherent WHERE Livre.titre = 'Germinal';",
                "'Germinal' a pour id_livre 3 ; il a été emprunté par l'adhérent 1 (emprunt 1) et l'adhérent 2 (emprunt 3). Résultat : 'Martin' et 'Durand'.",
                "3. SELECT COUNT(*) FROM Emprunt JOIN Adherent ON Emprunt.id_adherent = Adherent.id_adherent WHERE Adherent.ville = 'Lyon';",
                "Les Lyonnais sont les adhérents 1 et 3. L'adhérent 1 a fait les emprunts 1 et 5, l'adhérent 3 l'emprunt 4. Résultat : 3.",
                "4. Les emprunts 2 et 3 ont pour clé étrangère id_adherent = 2 : supprimer l'adhérent 2 violerait la contrainte de référence. On supprime d'abord ses emprunts, puis l'adhérent : DELETE FROM Emprunt WHERE id_adherent = 2; puis DELETE FROM Adherent WHERE id_adherent = 2;",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque requête à son effet.",
            pairs: [
              { left: "SELECT ... FROM Livre JOIN Auteur ON Livre.id_auteur = Auteur.id_auteur", right: "Associe à chaque livre la ligne de son auteur" },
              { left: "INSERT INTO Auteur (id_auteur, nom) VALUES (5, 'Sand')", right: "Ajoute un n-uplet à la table Auteur" },
              { left: "UPDATE Livre SET annee = 1885 WHERE id_livre = 3", right: "Modifie l'année d'un seul livre" },
              { left: "DELETE FROM Emprunt WHERE id_adherent = 2", right: "Supprime tous les emprunts d'un adhérent" },
              { left: "DELETE FROM Emprunt", right: "Vide entièrement la table des emprunts" },
            ],
          },
          quiz: [
            {
              q: "Dans une jointure entre Livre et Auteur, que relie en général la condition ON ?",
              options: ["Deux clés primaires", "Deux attributs quelconques de même domaine", "La clé étrangère de Livre et la clé primaire de Auteur", "Les titres et les noms"],
              answer: 2,
              why: "La jointure suit le lien créé par la clé étrangère : Livre.id_auteur = Auteur.id_auteur.",
            },
            {
              q: "Que fait la requête UPDATE Livre SET annee = 1900; ?",
              options: ["Elle donne l'année 1900 à tous les livres", "Elle ne modifie rien sans WHERE", "Elle ajoute un livre paru en 1900", "Elle modifie le premier livre seulement"],
              answer: 0,
              why: "Sans clause WHERE, UPDATE s'applique à toutes les lignes de la table.",
            },
            {
              q: "Pour enregistrer un nouveau livre d'un auteur absent de la base, dans quel ordre faut-il procéder ?",
              options: ["Insérer le livre, puis l'auteur", "L'ordre n'a pas d'importance", "Insérer le livre avec id_auteur à NULL, puis le modifier obligatoirement", "Insérer l'auteur, puis le livre"],
              answer: 3,
              why: "La clé étrangère du livre doit renvoyer à un auteur existant : la contrainte de référence impose de créer l'auteur d'abord.",
            },
            {
              q: "Quelle syntaxe d'insertion est correcte ?",
              options: ["INSERT Auteur VALUES 4, 'Sand'", "INSERT INTO Auteur (id_auteur, nom) VALUES (4, 'Sand');", "ADD INTO Auteur (4, 'Sand');"],
              answer: 1,
              why: "La forme attendue est INSERT INTO table (attributs) VALUES (valeurs); les valeurs sont entre parenthèses, les chaînes entre apostrophes.",
            },
            {
              q: "Pourquoi le SGBD refuse-t-il DELETE FROM Auteur WHERE id_auteur = 1; si des livres de Hugo sont enregistrés ?",
              options: ["Parce que la clé primaire 1 est protégée", "Parce qu'il faut écrire DROP au lieu de DELETE", "Parce que des clés étrangères de Livre renvoient à cet auteur", "Parce que DELETE ne s'utilise que sur une table vide"],
              answer: 2,
              why: "Supprimer l'auteur laisserait des livres pointer vers un auteur inexistant : la contrainte de référence l'interdit.",
            },
          ],
          trap: "Écrire FROM Livre, Auteur ou FROM Livre JOIN Auteur sans condition ON pertinente, ce qui associe chaque livre à chaque auteur ; ou lancer un UPDATE ou un DELETE en oubliant la clause WHERE, ce qui touche toutes les lignes de la table.",
          method: "Avant d'écrire une jointure, entourez sur le schéma les tables qui contiennent les colonnes demandées et suivez les clés étrangères pour passer de l'une à l'autre : chaque flèche suivie donne un JOIN ... ON. Avant un UPDATE ou un DELETE, écrivez d'abord le SELECT * avec la même clause WHERE pour vérifier quelles lignes seront touchées.",
        },
      ],
    },

    /* ================================================================== */
    /* LES ARBRES                                                           */
    /* ================================================================== */
    {
      id: 'arbres',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'arbres-binaires',
          title: 'Arbres binaires : vocabulaire, taille et hauteur',
          minutes: 30,
          objectives: [
            "Identifier des situations nécessitant une structure de données arborescente.",
            "Utiliser le vocabulaire des arbres : racine, nœud, feuille, nœud interne, sous-arbre gauche et droit, profondeur.",
            "Évaluer quelques mesures des arbres binaires : taille, hauteur, encadrement de la hauteur en fonction de la taille.",
            "Calculer la taille et la hauteur d'un arbre binaire à l'aide de fonctions récursives.",
          ],
          course: [
            {
              heading: "Des structures hiérarchiques",
              paragraphs: [
                "Les listes, les piles et les files sont des structures linéaires : chaque élément a au plus un successeur. Beaucoup de données sont pourtant hiérarchiques. Un dossier de l'ordinateur contient des fichiers et des sous-dossiers, qui en contiennent d'autres ; une page HTML contient un élément head et un élément body, qui contient lui-même des paragraphes et des listes ; un tableau de tournoi mène de la finale aux demi-finales puis aux quarts ; l'expression (3 + 4) × 2 est un produit dont le premier facteur est une somme. Toutes ces données se représentent par des arbres.",
                "Un arbre est formé de nœuds reliés par des arêtes. Un nœud particulier, la racine, n'a pas de père ; tout autre nœud a exactement un père. Les nœuds qui n'ont pas de fils sont les feuilles ; les autres sont les nœuds internes. Chaque nœud est la racine d'un sous-arbre, formé de lui-même et de tous ses descendants. En informatique, on dessine les arbres la racine en haut et les feuilles en bas.",
              ],
              box: { label: "Définition", text: "Un arbre est un ensemble de nœuds organisés hiérarchiquement : une racine sans père, et des nœuds qui ont chacun un unique père. Feuille : nœud sans fils. Nœud interne : nœud qui a au moins un fils." },
            },
            {
              heading: "Arbre binaire : une définition récursive",
              paragraphs: [
                "Un arbre binaire est soit vide, soit formé d'un nœud, la racine, qui porte une valeur (on dit aussi une étiquette), et de deux arbres binaires : le sous-arbre gauche et le sous-arbre droit. Chaque nœud a donc au plus deux fils, et l'on distingue toujours la gauche de la droite : un nœud qui n'a qu'un fils gauche n'est pas le même arbre qu'un nœud qui n'a qu'un fils droit.",
                "Cette définition est récursive : un arbre binaire est défini à l'aide d'arbres binaires plus petits. En Python, on la traduit par une classe Noeud dont le constructeur est def __init__(self, valeur, gauche=None, droit=None), qui range les trois paramètres dans les attributs self.valeur, self.gauche et self.droit. L'arbre vide est représenté par None.",
                "Ainsi, a = Noeud(8, Noeud(3, Noeud(1), Noeud(6)), Noeud(10)) construit un arbre de racine 8, dont le sous-arbre gauche a pour racine 3 (avec deux feuilles, 1 et 6) et dont le sous-arbre droit est la feuille 10. On accède à la valeur du fils gauche de la racine par a.gauche.valeur, qui vaut 3.",
              ],
              box: { label: "Définition", text: "Un arbre binaire est soit l'arbre vide, soit un nœud racine portant une valeur, muni d'un sous-arbre gauche et d'un sous-arbre droit, qui sont eux-mêmes des arbres binaires." },
            },
            {
              heading: "Taille, profondeur et hauteur",
              paragraphs: [
                "La taille d'un arbre est son nombre de nœuds ; l'arbre vide a pour taille 0. La profondeur d'un nœud est le nombre de nœuds du chemin qui va de la racine à ce nœud, racine et nœud compris : la racine est de profondeur 1, ses fils de profondeur 2, et ainsi de suite. La hauteur d'un arbre est la plus grande profondeur de ses nœuds, c'est-à-dire le nombre de nœuds du plus long chemin de la racine à une feuille. Avec cette convention, l'arbre vide a pour hauteur 0 et un arbre réduit à sa racine a pour hauteur 1.",
                "Une autre convention, très répandue, compte les arêtes au lieu des nœuds : la racine est alors de profondeur 0, un arbre réduit à sa racine a pour hauteur 0, et l'on convient que l'arbre vide a pour hauteur -1. Toutes les hauteurs sont alors diminuées de 1. Les sujets de bac précisent toujours la convention choisie : il faut la lire avant tout calcul. Dans ce cours, on utilise la première convention.",
              ],
              box: { label: "À retenir", text: "Taille : nombre de nœuds. Hauteur : nombre de nœuds du plus long chemin de la racine à une feuille (arbre vide : 0 ; racine seule : 1). Si l'on compte les arêtes, la racine seule a pour hauteur 0 : lisez toujours la convention de l'énoncé." },
            },
            {
              heading: "Encadrer la hauteur à l'aide de la taille",
              paragraphs: [
                "Soit un arbre binaire non vide de taille n et de hauteur h. Chaque niveau contient au moins un nœud, donc n ≥ h. Le niveau de profondeur k contient au plus 2ᵏ⁻¹ nœuds (1 racine, 2 fils, 4 petits-fils...), donc n ≤ 1 + 2 + 4 + ... + 2ʰ⁻¹ = 2ʰ - 1. On obtient l'encadrement h ≤ n ≤ 2ʰ - 1, que l'on peut aussi écrire log₂(n + 1) ≤ h ≤ n.",
                "Les deux bornes sont atteintes. Un arbre filiforme, dont chaque nœud a au plus un fils, ressemble à une liste : sa hauteur vaut sa taille, h = n. Un arbre parfait, dont tous les niveaux sont remplis, atteint n = 2ʰ - 1. Exemple : un arbre de 100 nœuds a une hauteur comprise entre 7 et 100, car 2⁶ - 1 = 63 < 100 ≤ 2⁷ - 1 = 127.",
                "Cet encadrement est essentiel, car le coût de nombreux algorithmes sur les arbres est proportionnel à la hauteur. Un arbre bien équilibré d'un million de nœuds peut avoir une hauteur de 20 seulement (2²⁰ - 1 = 1 048 575), alors qu'un arbre filiforme de même taille a une hauteur d'un million.",
              ],
              box: { label: "Propriété", text: "Pour un arbre binaire de taille n ≥ 1 et de hauteur h (racine seule : h = 1) : h ≤ n ≤ 2ʰ - 1. Arbre filiforme : h = n. Arbre parfait : n = 2ʰ - 1." },
            },
            {
              heading: "Calculer la taille et la hauteur en Python",
              paragraphs: [
                "La définition récursive de l'arbre conduit naturellement à des fonctions récursives. Taille : def taille(a): si a is None, on renvoie 0 (cas de base, l'arbre vide) ; sinon on renvoie 1 + taille(a.gauche) + taille(a.droit), c'est-à-dire la racine plus les nœuds des deux sous-arbres.",
                "Hauteur : def hauteur(a): si a is None, on renvoie 0 ; sinon on renvoie 1 + max(hauteur(a.gauche), hauteur(a.droit)), car le plus long chemin passe par la racine puis descend dans le plus haut des deux sous-arbres. Avec la convention qui compte les arêtes, seul le cas de base change : il renvoie -1.",
                "Chaque appel porte sur un sous-arbre strictement plus petit, ce qui garantit que la récursion se termine en atteignant l'arbre vide. Chaque nœud donne lieu à un seul appel : le coût de ces fonctions est proportionnel à la taille n de l'arbre.",
              ],
            },
          ],
          keyPoints: [
            "Un arbre modélise une hiérarchie : racine (sans père), nœuds internes, feuilles (sans fils), sous-arbres.",
            "Arbre binaire : vide, ou racine avec une valeur, un sous-arbre gauche et un sous-arbre droit. En Python : classe Noeud, arbre vide None.",
            "Taille = nombre de nœuds ; hauteur = nombre de nœuds du plus long chemin racine-feuille (convention à vérifier dans chaque énoncé).",
            "Encadrement : h ≤ n ≤ 2ʰ - 1. Filiforme : h = n ; parfait : n = 2ʰ - 1.",
            "taille(a) = 0 si a est vide, sinon 1 + taille(gauche) + taille(droit) ; hauteur(a) = 0 si vide, sinon 1 + max des hauteurs.",
          ],
          example: {
            statement: "On considère l'arbre binaire de racine 8, dont le fils gauche est 3 et le fils droit 10. Le nœud 3 a pour fils gauche 1 et pour fils droit 6 ; le nœud 6 a pour fils gauche 4 et pour fils droit 7 ; le nœud 10 n'a qu'un fils droit, 14 ; le nœud 14 n'a qu'un fils gauche, 13. Donnez les feuilles, les nœuds internes, la taille, la hauteur et la profondeur du nœud 7, puis vérifiez l'encadrement de la hauteur.",
            solution: [
              "Les feuilles sont les nœuds sans fils : 1, 4, 7 et 13.",
              "Les nœuds internes sont ceux qui ont au moins un fils : 8, 3, 6, 10 et 14.",
              "La taille est le nombre total de nœuds : 4 feuilles + 5 nœuds internes = 9.",
              "Les plus longs chemins de la racine à une feuille sont 8, 3, 6, 4 (ou 8, 3, 6, 7) et 8, 10, 14, 13 : ils comptent 4 nœuds, donc la hauteur vaut 4.",
              "Le chemin de la racine au nœud 7 est 8, 3, 6, 7 : la profondeur de 7 vaut 4.",
              "Vérification : h ≤ n ≤ 2ʰ - 1 donne 4 ≤ 9 ≤ 15, ce qui est vrai. Comme 2³ - 1 = 7 < 9, aucun arbre de 9 nœuds ne peut avoir une hauteur inférieure à 4 : cet arbre a la plus petite hauteur possible.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "L'expression (5 + 2) × (8 - 3) est représentée par un arbre binaire : la racine porte ×, son fils gauche porte + (avec pour fils 5 et 2), son fils droit porte - (avec pour fils 8 et 3). Donnez la racine, les feuilles, le nombre de nœuds internes, la taille et la hauteur de cet arbre, puis la valeur de l'expression.",
              hint: "Dans un arbre d'expression, les opérateurs sont les nœuds internes et les nombres sont les feuilles.",
              solution: [
                "La racine est le nœud ×, l'opération effectuée en dernier.",
                "Les feuilles sont les nombres : 5, 2, 8 et 3.",
                "Les nœuds internes sont les trois opérateurs ×, + et -.",
                "La taille vaut 4 + 3 = 7 et la hauteur vaut 3 (par exemple le chemin ×, +, 5). Comme 7 = 2³ - 1, l'arbre est parfait.",
                "Valeur : 5 + 2 = 7 et 8 - 3 = 5, donc l'expression vaut 7 × 5 = 35.",
              ],
            },
            {
              level: 2,
              statement: "On utilise la convention du cours (un arbre réduit à sa racine a pour hauteur 1). a) Un arbre binaire a 20 nœuds. Entre quelles valeurs sa hauteur est-elle comprise ? b) Un arbre binaire a pour hauteur 6. Quel est son plus petit et son plus grand nombre de nœuds possible ? c) Reprenez la question a) avec la convention où un arbre réduit à sa racine a pour hauteur 0.",
              hint: "Utilisez h ≤ n ≤ 2ʰ - 1 et cherchez la plus petite valeur de h pour laquelle 2ʰ - 1 atteint la taille.",
              solution: [
                "a) La hauteur maximale est atteinte par un arbre filiforme : h = 20.",
                "Pour la hauteur minimale, il faut 2ʰ - 1 ≥ 20. Or 2⁴ - 1 = 15 < 20 et 2⁵ - 1 = 31 ≥ 20 : la hauteur minimale vaut 5. Donc 5 ≤ h ≤ 20.",
                "b) Un arbre de hauteur 6 a au moins 6 nœuds (arbre filiforme) et au plus 2⁶ - 1 = 63 nœuds (arbre parfait).",
                "c) Avec l'autre convention, toutes les hauteurs sont diminuées de 1 : 4 ≤ h ≤ 19.",
              ],
            },
            {
              level: 3,
              statement: "(Type bac) Les arbres binaires sont représentés par la classe Noeud du cours (attributs valeur, gauche, droit), l'arbre vide étant None. 1. Écrivez une fonction récursive nb_feuilles(a) qui renvoie le nombre de feuilles de l'arbre a. 2. Détaillez son exécution sur l'arbre de l'exemple corrigé (racine 8). 3. Justifiez que la fonction termine et donnez son coût en fonction de la taille n de l'arbre.",
              hint: "Distinguez trois cas : l'arbre vide, une feuille (aucun fils), et un nœud interne dont on additionne les résultats des deux sous-arbres.",
              solution: [
                "1. def nb_feuilles(a): premier cas, if a is None: return 0 (l'arbre vide n'a aucune feuille).",
                "Deuxième cas, if a.gauche is None and a.droit is None: return 1 (le nœud est une feuille).",
                "Sinon, return nb_feuilles(a.gauche) + nb_feuilles(a.droit) : les feuilles d'un nœud interne sont celles de ses deux sous-arbres.",
                "2. nb_feuilles(8) = nb_feuilles(3) + nb_feuilles(10). nb_feuilles(3) = nb_feuilles(1) + nb_feuilles(6) = 1 + (nb_feuilles(4) + nb_feuilles(7)) = 1 + 1 + 1 = 3.",
                "nb_feuilles(10) = nb_feuilles(None) + nb_feuilles(14) = 0 + (nb_feuilles(13) + nb_feuilles(None)) = 0 + 1 + 0 = 1. Donc nb_feuilles(8) = 3 + 1 = 4, ce qui correspond aux feuilles 1, 4, 7 et 13.",
                "3. Chaque appel récursif porte sur un sous-arbre strictement plus petit que l'arbre reçu ; la taille finit donc par atteindre 0 ou une feuille, cas de base sans appel : la fonction termine. Chaque nœud est visité une fois et chaque arbre vide rencontré coûte un appel : le coût est proportionnel à n.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque terme à sa définition (convention : racine seule de hauteur 1).",
            pairs: [
              { left: "Racine", right: "Seul nœud qui n'a pas de père" },
              { left: "Feuille", right: "Nœud qui n'a aucun fils" },
              { left: "Taille", right: "Nombre de nœuds de l'arbre" },
              { left: "Hauteur", right: "Nombre de nœuds du plus long chemin de la racine à une feuille" },
              { left: "Arbre filiforme", right: "Chaque nœud a au plus un fils, et h = n" },
              { left: "Arbre parfait", right: "Tous les niveaux sont remplis, et n = 2ʰ - 1" },
            ],
          },
          quiz: [
            {
              q: "Combien de fils un nœud d'arbre binaire peut-il avoir ?",
              options: ["Exactement deux", "Au plus deux", "Au moins un", "Un nombre quelconque"],
              answer: 1,
              why: "Chaque nœud a un sous-arbre gauche et un sous-arbre droit, chacun pouvant être vide : 0, 1 ou 2 fils.",
            },
            {
              q: "Un arbre binaire de hauteur 4 (racine seule : hauteur 1) a au plus :",
              options: ["8 nœuds", "16 nœuds", "4 nœuds", "15 nœuds"],
              answer: 3,
              why: "n ≤ 2ʰ - 1 = 2⁴ - 1 = 15 : c'est le cas de l'arbre parfait de hauteur 4.",
            },
            {
              q: "Quelle est la hauteur minimale d'un arbre binaire de 10 nœuds (racine seule : hauteur 1) ?",
              options: ["4", "3", "5", "10"],
              answer: 0,
              why: "2³ - 1 = 7 < 10 ≤ 2⁴ - 1 = 15 : il faut au moins 4 niveaux pour ranger 10 nœuds.",
            },
            {
              q: "Que renvoie taille(a) lorsque a vaut None ?",
              options: ["1", "None", "0", "Une erreur"],
              answer: 2,
              why: "L'arbre vide n'a aucun nœud : c'est le cas de base de la fonction récursive, qui renvoie 0.",
            },
            {
              q: "Dans l'arbre d'expression de (3 + 4) × 2, quel nœud est la racine ?",
              options: ["Le nœud +", "Le nœud ×", "Le nœud 2", "Le nœud 3"],
              answer: 1,
              why: "La racine porte l'opération effectuée en dernier, ici la multiplication ; les nombres sont les feuilles.",
            },
          ],
          trap: "Ne pas vérifier la convention de hauteur de l'énoncé : selon qu'on compte les nœuds ou les arêtes, un arbre réduit à sa racine a pour hauteur 1 ou 0, et tous les résultats (encadrements compris) changent d'une unité.",
          method: "Pour écrire une fonction récursive sur un arbre binaire, commencez toujours par le cas de l'arbre vide (None), puis supposez que la fonction donne le bon résultat sur les deux sous-arbres et demandez-vous comment les combiner avec la racine. Testez ensuite à la main sur un arbre de trois ou quatre nœuds.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'parcours-arbres',
          title: 'Parcourir un arbre binaire',
          minutes: 35,
          objectives: [
            "Parcourir un arbre binaire en profondeur dans les ordres préfixe, infixe et suffixe.",
            "Parcourir un arbre binaire en largeur d'abord à l'aide d'une file.",
            "Écrire en Python les fonctions de parcours et prévoir l'ordre de visite des nœuds.",
            "Choisir le parcours adapté à un problème : évaluer une expression, lister des clés, traiter un arbre niveau par niveau.",
          ],
          course: [
            {
              heading: "Les parcours en profondeur : préfixe, infixe, suffixe",
              paragraphs: [
                "Parcourir un arbre, c'est visiter chacun de ses nœuds une fois, par exemple pour afficher sa valeur. Dans un parcours en profondeur, on explore entièrement le sous-arbre gauche avant le sous-arbre droit. Il reste à choisir à quel moment on visite la racine, ce qui donne trois ordres. Préfixe : la racine, puis le sous-arbre gauche, puis le sous-arbre droit. Infixe : le sous-arbre gauche, puis la racine, puis le sous-arbre droit. Suffixe (on dit aussi postfixe) : le sous-arbre gauche, puis le sous-arbre droit, puis la racine.",
                "Prenons l'arbre de racine A, dont le fils gauche B a deux feuilles C et D, et dont le fils droit E n'a qu'un fils droit F. Ordre préfixe : A, B, C, D, E, F. Ordre infixe : C, B, D (le sous-arbre gauche), puis A, puis E, F (le sous-arbre droit, dont la racine E vient avant son fils droit F). Ordre suffixe : C, D, B, puis F, E, puis A.",
                "Une astuce de vérification : faites le tour de l'arbre au crayon en partant de la gauche de la racine et en longeant toutes les branches. Chaque nœud est longé trois fois : on le note la première fois pour l'ordre préfixe, lorsqu'on passe dessous pour l'ordre infixe, et la dernière fois pour l'ordre suffixe.",
              ],
              box: { label: "Règle", text: "Préfixe : racine, gauche, droite. Infixe : gauche, racine, droite. Suffixe : gauche, droite, racine. Le nom indique la place de la racine : avant (pré), au milieu (in), après (suf)." },
            },
            {
              heading: "Programmer les parcours en profondeur",
              paragraphs: [
                "Ces parcours se programment récursivement, en suivant la définition de l'arbre binaire. Parcours préfixe : def prefixe(a): if a is not None: on affiche a.valeur, puis on appelle prefixe(a.gauche), puis prefixe(a.droit). Pour l'ordre infixe, on place l'affichage entre les deux appels ; pour l'ordre suffixe, après les deux appels. Seule la position de la visite de la racine change.",
                "Plutôt que d'afficher, on peut renvoyer la liste des valeurs : def prefixe(a): if a is None: return [] ; sinon return [a.valeur] + prefixe(a.gauche) + prefixe(a.droit). Pour l'arbre de racine A ci-dessus, prefixe(a) renvoie ['A', 'B', 'C', 'D', 'E', 'F'].",
                "Chaque nœud est visité une seule fois : le coût d'un parcours est proportionnel à la taille de l'arbre. La pile des appels récursifs ne dépasse jamais la hauteur de l'arbre (plus un appel pour un arbre vide).",
              ],
            },
            {
              heading: "Le parcours en largeur d'abord",
              paragraphs: [
                "Le parcours en largeur visite les nœuds niveau par niveau, de la racine vers les feuilles, et de gauche à droite dans chaque niveau. Pour l'arbre de racine A, il donne A, puis B, E, puis C, D, F. Ce parcours n'est pas récursif : il utilise une file, structure « premier entré, premier sorti ».",
                "Algorithme : on enfile la racine (si l'arbre n'est pas vide). Tant que la file n'est pas vide, on défile un nœud, on le visite, puis on enfile son fils gauche puis son fils droit, s'ils existent. Les nœuds d'un niveau sont tous enfilés avant ceux du niveau suivant, ce qui garantit l'ordre par niveaux.",
                "En Python, on peut utiliser collections.deque, avec append pour enfiler et popleft pour défiler, deux opérations de coût constant. Déroulement sur l'arbre de racine A : file [A] ; on défile A et on enfile B, E : file [B, E] ; on défile B et on enfile C, D : file [E, C, D] ; on défile E et on enfile F : file [C, D, F] ; on défile ensuite C, D, F. Ordre obtenu : A, B, E, C, D, F.",
              ],
              box: { label: "À retenir", text: "Parcours en largeur : une file. Enfiler la racine ; tant que la file n'est pas vide : défiler un nœud, le visiter, enfiler ses fils gauche puis droit. Les nœuds sortent par profondeur croissante." },
            },
            {
              heading: "Quel parcours pour quel usage ?",
              paragraphs: [
                "Le parcours infixe d'un arbre binaire de recherche donne ses clés dans l'ordre croissant. Le parcours suffixe traite les sous-arbres avant la racine : il convient pour calculer une valeur à partir de celles des fils (évaluer une expression, calculer une taille). Le parcours préfixe traite la racine avant ses descendants : il convient pour copier ou enregistrer un arbre, ou pour afficher une arborescence de dossiers. Le parcours en largeur sert à traiter un arbre niveau par niveau, ou à trouver le nœud le moins profond qui vérifie une condition.",
                "Pour l'arbre de l'expression (5 + 2) × (8 - 3), le parcours préfixe donne × + 5 2 - 8 3 (notation préfixe, dite polonaise), le parcours suffixe donne 5 2 + 8 3 - × (notation polonaise inverse, que l'on évalue avec une pile) et le parcours infixe donne 5 + 2 × 8 - 3. Cette dernière écriture est ambiguë : pour retrouver l'expression, il faut ajouter une parenthèse ouvrante avant chaque sous-arbre et une fermante après.",
              ],
            },
          ],
          keyPoints: [
            "Parcours en profondeur : le sous-arbre gauche est entièrement exploré avant le droit.",
            "Préfixe : racine, gauche, droite. Infixe : gauche, racine, droite. Suffixe : gauche, droite, racine.",
            "Les parcours en profondeur s'écrivent récursivement ; seule la position de la visite de la racine change.",
            "Parcours en largeur : niveau par niveau, de gauche à droite, à l'aide d'une file.",
            "Tout parcours visite chaque nœud une fois : coût proportionnel à la taille n.",
            "Infixe d'un ABR : clés triées. Suffixe d'une expression : notation polonaise inverse.",
          ],
          example: {
            statement: "On considère l'arbre binaire de racine 1, dont le fils gauche 2 a pour fils gauche 4 et pour fils droit 5, et dont le fils droit 3 n'a qu'un fils gauche, 6. Donnez l'ordre de visite des nœuds dans les parcours préfixe, infixe, suffixe et en largeur.",
            solution: [
              "Préfixe (racine, gauche, droite) : 1, puis le sous-arbre de racine 2 en préfixe (2, 4, 5), puis celui de racine 3 (3, 6). Résultat : 1, 2, 4, 5, 3, 6.",
              "Infixe (gauche, racine, droite) : le sous-arbre de racine 2 en infixe (4, 2, 5), puis 1, puis le sous-arbre de racine 3 en infixe : son fils gauche 6, puis 3 (pas de fils droit). Résultat : 4, 2, 5, 1, 6, 3.",
              "Suffixe (gauche, droite, racine) : sous-arbre de racine 2 (4, 5, 2), sous-arbre de racine 3 (6, 3), puis 1. Résultat : 4, 5, 2, 6, 3, 1.",
              "Largeur : niveau 1 : 1 ; niveau 2 : 2, 3 ; niveau 3 : 4, 5, 6. Résultat : 1, 2, 3, 4, 5, 6.",
              "Vérification : chaque parcours contient bien les 6 nœuds, chacun une seule fois.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On considère l'arbre binaire de racine M. Le fils gauche de M est D, qui a pour fils gauche B et pour fils droit G. Le fils droit de M est R, qui a pour fils gauche P et pour fils droit V. Donnez les parcours préfixe, infixe, suffixe et en largeur. Que remarquez-vous sur le parcours infixe ?",
              hint: "Traitez chaque sous-arbre comme un petit arbre à trois nœuds, puis assemblez les morceaux dans l'ordre demandé.",
              solution: [
                "Préfixe : M, puis D, B, G, puis R, P, V. Résultat : M, D, B, G, R, P, V.",
                "Infixe : B, D, G, puis M, puis P, R, V. Résultat : B, D, G, M, P, R, V.",
                "Suffixe : B, G, D, puis P, V, R, puis M. Résultat : B, G, D, P, V, R, M.",
                "Largeur : M ; D, R ; B, G, P, V. Résultat : M, D, R, B, G, P, V.",
                "Le parcours infixe donne les lettres dans l'ordre alphabétique : cet arbre est un arbre binaire de recherche.",
              ],
            },
            {
              level: 2,
              statement: "L'expression (7 - 2) × 3 + 4 est représentée par un arbre dont la racine porte + ; son fils gauche porte × (de fils gauche le nœud -, lui-même de fils 7 et 2, et de fils droit 3) ; son fils droit est la feuille 4. a) Donnez les parcours préfixe et suffixe. b) Évaluez l'expression écrite en notation suffixe à l'aide d'une pile, en détaillant le contenu de la pile. c) Pourquoi le parcours infixe sans parenthèses ne suffit-il pas à retrouver l'expression ?",
              hint: "En notation suffixe, on empile chaque nombre ; un opérateur dépile deux nombres, calcule, et empile le résultat.",
              solution: [
                "a) Préfixe : +, ×, -, 7, 2, 3, 4. Suffixe : 7, 2, -, 3, ×, 4, +.",
                "b) Empiler 7 : [7]. Empiler 2 : [7, 2]. Opérateur - : on dépile 2 puis 7 et on empile 7 - 2 = 5 : [5]. Empiler 3 : [5, 3]. Opérateur × : 5 × 3 = 15 : [15]. Empiler 4 : [15, 4]. Opérateur + : 15 + 4 = 19 : [19].",
                "La pile contient finalement une seule valeur : l'expression vaut 19.",
                "c) Le parcours infixe donne 7 - 2 × 3 + 4, qui, avec les priorités usuelles, vaut 7 - 6 + 4 = 5 et non 19. L'infixe perd la structure de l'arbre : il faut entourer chaque sous-arbre de parenthèses, ((7 - 2) × 3) + 4.",
              ],
            },
            {
              level: 3,
              statement: "(Type bac) On dispose d'une classe File munie des méthodes enfiler(x), defiler() et est_vide(), et de la classe Noeud du cours. 1. Écrivez une fonction largeur(a) qui renvoie la liste des valeurs de l'arbre a dans l'ordre du parcours en largeur. 2. Donnez le contenu de la file après chaque tour de boucle pour l'arbre de l'exemple corrigé (racine 1). 3. Un élève remplace la file par une pile, en empilant le fils gauche puis le fils droit. Quel ordre obtient-il pour ce même arbre ? Comment obtenir l'ordre préfixe avec une pile ?",
              hint: "Pour la question 3, simulez la pile pas à pas : le dernier élément empilé est le premier dépilé.",
              solution: [
                "1. def largeur(a): resultat = [] et f = File() ; if a is not None: f.enfiler(a).",
                "while not f.est_vide(): n = f.defiler() ; resultat.append(n.valeur) ; if n.gauche is not None: f.enfiler(n.gauche) ; if n.droit is not None: f.enfiler(n.droit). Après la boucle : return resultat.",
                "2. Départ : [1]. Tour 1 : on défile 1, on enfile 2 et 3 : [2, 3]. Tour 2 : on défile 2, on enfile 4 et 5 : [3, 4, 5]. Tour 3 : on défile 3, on enfile 6 : [4, 5, 6]. Tours 4, 5, 6 : on défile 4, 5, 6 (sans fils) : [5, 6], puis [6], puis []. Résultat : [1, 2, 3, 4, 5, 6].",
                "3. Avec une pile : [1] ; on dépile 1 et on empile 2, 3 : [2, 3] ; on dépile 3 et on empile 6 : [2, 6] ; on dépile 6 : [2] ; on dépile 2 et on empile 4, 5 : [4, 5] ; on dépile 5, puis 4. Ordre obtenu : 1, 3, 6, 2, 5, 4.",
                "C'est un parcours en profondeur qui explore la droite avant la gauche. Pour obtenir l'ordre préfixe 1, 2, 4, 5, 3, 6, il faut empiler le fils droit avant le fils gauche, afin que le gauche soit dépilé en premier.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Arbre : racine A ; fils gauche B, qui a pour fils C (à gauche) et D (à droite) ; fils droit E, qui a pour seul fils F, à droite. Remettez les nœuds dans l'ordre du parcours infixe.",
            items: ["C", "B", "D", "A", "E", "F"],
          },
          quiz: [
            {
              q: "Dans quel parcours la racine est-elle visitée en dernier ?",
              options: ["Préfixe", "Infixe", "Suffixe", "En largeur"],
              answer: 2,
              why: "Suffixe : gauche, droite, puis racine. En préfixe et en largeur, la racine est visitée en premier.",
            },
            {
              q: "Quelle structure de données utilise le parcours en largeur ?",
              options: ["Une file", "Une pile", "Un dictionnaire", "Aucune, il est récursif"],
              answer: 0,
              why: "La file, premier entré premier sorti, fait sortir les nœuds niveau par niveau.",
            },
            {
              q: "Arbre : racine 5, fils gauche 3, fils droit 8. Quel est le parcours suffixe ?",
              options: ["5, 3, 8", "3, 5, 8", "8, 3, 5", "3, 8, 5"],
              answer: 3,
              why: "Suffixe : sous-arbre gauche (3), sous-arbre droit (8), puis la racine (5).",
            },
            {
              q: "Dans la fonction récursive du parcours infixe, où se place la visite de la racine ?",
              options: ["Avant les deux appels récursifs", "Entre l'appel sur le sous-arbre gauche et celui sur le droit", "Après les deux appels récursifs"],
              answer: 1,
              why: "Infixe signifie « au milieu » : gauche, racine, droite.",
            },
            {
              q: "Quel est le coût d'un parcours d'un arbre binaire de taille n ?",
              options: ["Proportionnel à n", "Proportionnel à log₂(n)", "Proportionnel à n²", "Constant"],
              answer: 0,
              why: "Un parcours visite chacun des n nœuds exactement une fois.",
            },
          ],
          trap: "Appliquer l'ordre demandé seulement à la racine et non, récursivement, à chaque sous-arbre : en infixe, il faut écrire tout le sous-arbre gauche en infixe avant la racine, pas seulement le fils gauche.",
          method: "Pour ne pas se tromper, découpez l'arbre en sous-arbres et écrivez le parcours de chacun entre crochets, du plus petit au plus grand, avant de retirer les crochets. Vérifiez ensuite que chaque nœud apparaît une fois et une seule, et contrôlez avec l'astuce du tour de l'arbre.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'arbres-binaires-de-recherche',
          title: 'Les arbres binaires de recherche',
          minutes: 35,
          objectives: [
            "Définir un arbre binaire de recherche et vérifier qu'un arbre binaire donné en est un.",
            "Rechercher une clé dans un arbre binaire de recherche et insérer une clé.",
            "Évaluer le coût de la recherche et de l'insertion en fonction de la hauteur de l'arbre, logarithmique pour un arbre équilibré.",
          ],
          course: [
            {
              heading: "Définition d'un arbre binaire de recherche",
              paragraphs: [
                "Un arbre binaire de recherche (ABR) est un arbre binaire dont les nœuds portent des clés que l'on peut comparer (nombres, chaînes de caractères, dates) et qui vérifie, pour chaque nœud de clé k : toutes les clés du sous-arbre gauche sont strictement inférieures à k, et toutes les clés du sous-arbre droit sont strictement supérieures à k. On suppose ici les clés toutes distinctes ; si l'on autorise des doublons, on convient de les placer d'un côté fixé.",
                "La condition porte sur tous les nœuds des sous-arbres, pas seulement sur les fils. L'arbre de racine 10, dont le fils gauche 5 a pour fils droit 12, n'est pas un ABR : 12 est bien supérieur à son père 5, mais il se trouve dans le sous-arbre gauche de 10 alors que 12 > 10.",
                "Propriété fondamentale : le parcours infixe d'un ABR donne ses clés dans l'ordre strictement croissant. La réciproque est vraie : un arbre binaire dont le parcours infixe est strictement croissant est un ABR. C'est une méthode simple pour vérifier qu'un arbre est un ABR. On en déduit aussi que la plus petite clé est celle du nœud le plus à gauche (on descend toujours à gauche depuis la racine) et la plus grande celle du nœud le plus à droite.",
              ],
              box: { label: "Définition", text: "Un ABR est un arbre binaire tel que, pour chaque nœud de clé k, les clés du sous-arbre gauche sont inférieures à k et celles du sous-arbre droit supérieures à k. Son parcours infixe est trié dans l'ordre croissant." },
            },
            {
              heading: "Rechercher une clé",
              paragraphs: [
                "Pour savoir si une clé c est présente, on la compare à la clé de la racine. Si elles sont égales, la clé est trouvée. Si c est plus petite, elle ne peut se trouver que dans le sous-arbre gauche ; si elle est plus grande, que dans le sous-arbre droit. On recommence dans ce sous-arbre. Si l'on atteint un arbre vide, la clé est absente. À chaque étape, on élimine tout un sous-arbre, comme dans la recherche dichotomique dans un tableau trié.",
                "En Python : def recherche(a, c): if a is None: return False ; if c == a.valeur: return True ; if c < a.valeur: return recherche(a.gauche, c) ; sinon return recherche(a.droit, c). On peut aussi l'écrire avec une boucle : tant que a n'est pas None et que a.valeur est différent de c, on remplace a par a.gauche ou a.droit selon la comparaison.",
                "Exemple : dans l'ABR de racine 12, de fils 5 et 18, où 5 a pour fils 2 et 9 et 18 pour fils 15 et 20, rechercher 9 conduit à comparer avec 12 (9 < 12, à gauche), puis 5 (9 > 5, à droite), puis 9 : trouvé en 3 comparaisons. Rechercher 16 : 12 (à droite), 18 (à gauche), 15 (à droite), arbre vide : 16 est absent.",
              ],
            },
            {
              heading: "Insérer une clé",
              paragraphs: [
                "Pour insérer une clé, on descend dans l'arbre exactement comme pour la rechercher. Lorsqu'on atteint un arbre vide, c'est la place de la nouvelle clé : on y crée une feuille. L'insertion ne déplace aucun nœud existant, et l'arbre obtenu reste un ABR.",
                "Version récursive qui renvoie l'arbre modifié : def inserer(a, c): if a is None: return Noeud(c) ; if c < a.valeur: a.gauche = inserer(a.gauche, c) ; else: a.droit = inserer(a.droit, c) ; return a. On l'appelle sous la forme a = inserer(a, c), ce qui permet aussi d'insérer dans un arbre vide.",
                "La forme de l'arbre dépend de l'ordre d'insertion. En insérant 12, 5, 18, 2, 9, 15, 20, on obtient un arbre parfait de hauteur 3. En insérant les mêmes clés dans l'ordre croissant 2, 5, 9, 12, 15, 18, 20, chaque clé devient le fils droit de la précédente : l'arbre est filiforme, de hauteur 7, et se comporte comme une liste.",
              ],
              box: { label: "À retenir", text: "Insertion : descendre comme pour une recherche jusqu'à un arbre vide, et y placer la nouvelle clé comme une feuille. Des clés insérées dans l'ordre croissant donnent un arbre filiforme." },
            },
            {
              heading: "Le coût : tout dépend de la hauteur",
              paragraphs: [
                "Une recherche ou une insertion suit un seul chemin depuis la racine : elle effectue au plus h comparaisons, où h est la hauteur de l'arbre. Or, pour un arbre de n nœuds, h est compris entre log₂(n + 1) et n. Si l'arbre est équilibré, la hauteur est de l'ordre de log₂(n) et le coût est logarithmique : avec un million de clés, une vingtaine de comparaisons suffisent. Si l'arbre est filiforme, h = n et le coût est linéaire, comme une recherche dans une liste non triée.",
                "Pour profiter du coût logarithmique, il faut donc maintenir l'arbre équilibré. Il existe des variantes qui se rééquilibrent automatiquement à chaque insertion, comme les arbres AVL ou les arbres rouge-noir ; elles sont hors programme, mais très utilisées dans les bibliothèques des langages de programmation. Les index des bases de données reposent sur une idée voisine, les arbres B, des arbres équilibrés dont les nœuds ont plus de deux fils.",
              ],
              box: { label: "Propriété", text: "Recherche et insertion dans un ABR de hauteur h : au plus h comparaisons. Arbre équilibré : h de l'ordre de log₂(n), coût logarithmique. Arbre filiforme : h = n, coût linéaire." },
            },
          ],
          keyPoints: [
            "ABR : pour chaque nœud, clés du sous-arbre gauche plus petites, clés du sous-arbre droit plus grandes (tout le sous-arbre, pas seulement le fils).",
            "Le parcours infixe d'un ABR donne les clés dans l'ordre croissant ; le minimum est le nœud le plus à gauche.",
            "Recherche : comparer à la racine, descendre à gauche ou à droite, s'arrêter sur la clé ou sur un arbre vide.",
            "Insertion : descendre comme pour une recherche et créer une feuille à la place de l'arbre vide atteint.",
            "Coût au plus h comparaisons : logarithmique si l'arbre est équilibré, linéaire s'il est filiforme.",
          ],
          example: {
            statement: "On insère successivement les clés 12, 5, 18, 2, 9, 15, 20, 7 dans un ABR initialement vide. Décrivez l'arbre obtenu, donnez sa hauteur, puis détaillez la recherche de 7 et celle de 16.",
            solution: [
              "12 devient la racine. 5 < 12 : fils gauche de 12. 18 > 12 : fils droit de 12.",
              "2 < 12 puis 2 < 5 : fils gauche de 5. 9 < 12 puis 9 > 5 : fils droit de 5. 15 > 12 puis 15 < 18 : fils gauche de 18. 20 > 12 puis 20 > 18 : fils droit de 18.",
              "7 < 12, puis 7 > 5, puis 7 < 9 : 7 devient le fils gauche de 9.",
              "Le plus long chemin est 12, 5, 9, 7 : la hauteur vaut 4 (convention racine seule : 1).",
              "Recherche de 7 : 12 (7 < 12, à gauche), 5 (7 > 5, à droite), 9 (7 < 9, à gauche), 7 : trouvé en 4 comparaisons.",
              "Recherche de 16 : 12 (à droite), 18 (16 < 18, à gauche), 15 (16 > 15, à droite) : le fils droit de 15 est vide, donc 16 est absent, après 3 comparaisons.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque arbre, dites s'il s'agit d'un ABR en justifiant. Arbre 1 : racine 10 ; fils gauche 6, qui a pour fils gauche 3 et pour fils droit 12 ; fils droit 15. Arbre 2 : racine 10 ; fils gauche 6, qui a pour fils gauche 3 et pour fils droit 8 ; fils droit 15, qui a pour fils gauche 11.",
              hint: "Écrivez le parcours infixe de chaque arbre et regardez s'il est strictement croissant.",
              solution: [
                "Arbre 1 : parcours infixe 3, 6, 12, 10, 15. Il n'est pas croissant (12 précède 10). En effet, 12 est dans le sous-arbre gauche de 10 alors que 12 > 10 : ce n'est pas un ABR, même si 12 est bien supérieur à son père 6.",
                "Arbre 2 : parcours infixe 3, 6, 8, 10, 11, 15, strictement croissant : c'est un ABR.",
                "Vérification directe pour l'arbre 2 : les clés à gauche de 10 (3, 6, 8) sont inférieures à 10, celles de droite (11, 15) supérieures ; à gauche de 6 il y a 3 < 6, à droite 8 > 6 ; à gauche de 15 il y a 11 < 15.",
              ],
            },
            {
              level: 2,
              statement: "On insère successivement 50, 30, 70, 20, 40, 60, 80, 35 dans un ABR vide. a) Décrivez l'arbre obtenu et donnez sa hauteur (racine seule : hauteur 1). b) Donnez son parcours infixe. c) Détaillez la recherche de 35 puis celle de 65, en comptant les comparaisons. d) Où serait inséré 65 ?",
              hint: "Placez les clés une à une en partant toujours de la racine ; la recherche d'une clé absente s'arrête exactement là où l'on insérerait cette clé.",
              solution: [
                "a) 50 est la racine ; 30 est son fils gauche et 70 son fils droit ; 20 et 40 sont les fils gauche et droit de 30 ; 60 et 80 les fils gauche et droit de 70. Enfin 35 < 50, 35 > 30, 35 < 40 : 35 est le fils gauche de 40. Le plus long chemin 50, 30, 40, 35 compte 4 nœuds : hauteur 4.",
                "b) Parcours infixe : 20, 30, 35, 40, 50, 60, 70, 80, dans l'ordre croissant comme pour tout ABR.",
                "c) Recherche de 35 : 50 (à gauche), 30 (à droite), 40 (à gauche), 35 : trouvé en 4 comparaisons.",
                "Recherche de 65 : 50 (65 > 50, à droite), 70 (65 < 70, à gauche), 60 (65 > 60, à droite) : arbre vide, 65 est absent après 3 comparaisons.",
                "d) La recherche s'est arrêtée sur le fils droit (vide) de 60 : c'est là que 65 serait inséré, comme feuille.",
              ],
            },
            {
              level: 3,
              statement: "(Type bac) Les ABR sont représentés avec la classe Noeud (attributs valeur, gauche, droit). 1. Écrivez une fonction itérative minimum(a) qui renvoie la plus petite clé d'un ABR non vide. 2. On insère les entiers 1, 2, 3, ..., 1000 dans cet ordre dans un ABR vide. Décrivez l'arbre obtenu, donnez sa hauteur et le nombre de comparaisons pour rechercher 1000. 3. Quelle est la plus petite hauteur possible d'un ABR contenant ces 1000 clés ? 4. Proposez un ordre d'insertion des clés 1 à 7 qui donne un arbre de hauteur 3.",
              hint: "Le minimum est au bout de la branche la plus à gauche. Pour la question 4, la racine doit être la clé du milieu, et ainsi de suite dans chaque moitié.",
              solution: [
                "1. def minimum(a): n = a ; while n.gauche is not None: n = n.gauche ; return n.valeur. On descend à gauche tant que c'est possible, car toute clé plus petite serait dans le sous-arbre gauche.",
                "2. Chaque nouvelle clé est plus grande que toutes les précédentes : elle devient le fils droit de la dernière insérée. L'arbre est filiforme, de hauteur 1000. Rechercher 1000 impose de comparer avec les 1000 clés : 1000 comparaisons, un coût linéaire.",
                "3. Il faut 2ʰ - 1 ≥ 1000. Or 2⁹ - 1 = 511 < 1000 ≤ 2¹⁰ - 1 = 1023 : la hauteur minimale est 10. Une recherche coûterait alors au plus 10 comparaisons.",
                "4. On insère d'abord la clé médiane 4, puis les médianes des deux moitiés, 2 et 6, puis les autres : 4, 2, 6, 1, 3, 5, 7. On obtient l'arbre parfait de racine 4, de fils 2 (avec 1 et 3) et 6 (avec 5 et 7), de hauteur 3. D'autres ordres conviennent, pourvu que 4 soit inséré en premier et que 2 et 6 précèdent leurs propres fils.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les arbres binaires de recherche.",
            statements: [
              { text: "Pour qu'un arbre soit un ABR, il suffit que chaque nœud soit plus grand que son fils gauche et plus petit que son fils droit.", true: false, why: "La condition porte sur tout le sous-arbre gauche et tout le sous-arbre droit, pas seulement sur les fils." },
              { text: "Le parcours infixe d'un ABR donne ses clés dans l'ordre croissant.", true: true, why: "On visite d'abord les clés plus petites (à gauche), puis la racine, puis les plus grandes (à droite), à tous les niveaux." },
              { text: "Une nouvelle clé est insérée comme une feuille.", true: true, why: "On descend jusqu'à un arbre vide et on y crée un nœud, sans déplacer les autres." },
              { text: "Une recherche dans un ABR de n clés coûte toujours environ log₂(n) comparaisons.", true: false, why: "Le coût dépend de la hauteur : il est logarithmique pour un arbre équilibré, mais linéaire pour un arbre filiforme." },
              { text: "La plus petite clé d'un ABR est toujours portée par une feuille.", true: false, why: "Le minimum est le nœud le plus à gauche : il n'a pas de fils gauche, mais il peut avoir un fils droit." },
              { text: "Insérer les mêmes clés dans un ordre différent peut donner un arbre différent.", true: true, why: "La première clé insérée devient la racine, et la forme dépend de l'ordre d'arrivée des suivantes." },
              { text: "Insérer des clés déjà triées produit un arbre filiforme.", true: true, why: "Chaque clé est plus grande que les précédentes et devient le fils droit de la dernière : la hauteur vaut n." },
            ],
          },
          quiz: [
            {
              q: "Dans un ABR, où se trouve la plus grande clé ?",
              options: ["À la racine", "Sur une feuille quelconque", "Au nœud le plus à droite", "Au nœud le plus à gauche"],
              answer: 2,
              why: "Toute clé plus grande se trouve à droite : on descend à droite tant que c'est possible.",
            },
            {
              q: "On recherche 25 dans un ABR de racine 30. Que fait-on ensuite ?",
              options: ["On cherche dans le sous-arbre gauche", "On cherche dans le sous-arbre droit", "On cherche dans les deux sous-arbres", "On conclut que 25 est absent"],
              answer: 0,
              why: "25 < 30 : si 25 est présent, il est forcément dans le sous-arbre gauche ; le droit est éliminé.",
            },
            {
              q: "Quel est le nombre maximal de comparaisons pour rechercher une clé dans un ABR de hauteur h ?",
              options: ["n", "2ʰ", "log₂(h)", "h"],
              answer: 3,
              why: "La recherche suit un seul chemin depuis la racine, qui compte au plus h nœuds.",
            },
            {
              q: "Quel parcours permet de vérifier qu'un arbre binaire est un ABR ?",
              options: ["Le parcours préfixe", "Le parcours infixe", "Le parcours suffixe"],
              answer: 1,
              why: "Un arbre binaire est un ABR si et seulement si son parcours infixe est strictement croissant (clés distinctes).",
            },
            {
              q: "Quelle est la hauteur minimale d'un ABR de 100 clés (racine seule : hauteur 1) ?",
              options: ["10", "50", "7", "6"],
              answer: 2,
              why: "2⁶ - 1 = 63 < 100 ≤ 2⁷ - 1 = 127 : il faut au moins 7 niveaux.",
            },
          ],
          trap: "Vérifier la propriété d'ABR seulement entre un nœud et ses fils : un nœud peut être plus grand que son père tout en étant dans le sous-arbre gauche d'un ancêtre plus petit que lui, ce qui est interdit.",
          method: "Pour vérifier un ABR ou contrôler une insertion, écrivez le parcours infixe : il doit être strictement croissant. Pour une recherche, notez à chaque nœud la comparaison et la direction prise (« 16 > 12, à droite ») : le nombre de lignes écrites donne directement le nombre de comparaisons.",
        },
      ],
    },

    /* ================================================================== */
    /* LES GRAPHES                                                          */
    /* ================================================================== */
    {
      id: 'graphes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'graphes-representations',
          title: 'Graphes : vocabulaire et représentations',
          minutes: 30,
          objectives: [
            "Modéliser des situations sous forme de graphes : réseaux routiers, réseaux sociaux, réseaux informatiques, liens entre pages web.",
            "Utiliser le vocabulaire des graphes : sommet, arête, arc, voisin, degré, chemin, cycle, graphe orienté, pondéré, connexe.",
            "Écrire les implémentations correspondantes d'un graphe : matrice d'adjacence, listes d'adjacence.",
            "Passer d'une représentation à l'autre et choisir la représentation adaptée au problème.",
          ],
          course: [
            {
              heading: "Modéliser par un graphe",
              paragraphs: [
                "Un graphe est formé de sommets (on dit aussi nœuds) et de liens entre ces sommets. Il modélise toute situation où l'on s'intéresse à des relations entre objets : des villes reliées par des routes, des personnes liées par une amitié, des routeurs reliés par des câbles, des pages web reliées par des liens hypertextes, des tâches dont certaines doivent précéder d'autres.",
                "Dans un graphe non orienté, les liens sont des arêtes, qui n'ont pas de sens : une arête relie A et B dans les deux sens, comme une amitié ou une route à double sens. Dans un graphe orienté, les liens sont des arcs, qui vont d'un sommet vers un autre : un arc de A vers B ne permet pas d'aller de B vers A, comme un lien hypertexte ou le fait de suivre quelqu'un sur un réseau social. Un graphe est pondéré lorsque chaque arête ou arc porte un nombre, son poids : une distance, une durée, un coût.",
                "Les arbres étudiés au chapitre précédent sont des graphes particuliers : un arbre est un graphe non orienté connexe et sans cycle. Les graphes sont plus généraux, car ils peuvent contenir des cycles et ne possèdent pas de racine.",
              ],
              box: { label: "Définition", text: "Un graphe G = (S, A) est formé d'un ensemble S de sommets et d'un ensemble A de liens entre sommets : des arêtes (non orientées) ou des arcs (orientés). Il est pondéré si chaque lien porte une valeur." },
            },
            {
              heading: "Le vocabulaire",
              paragraphs: [
                "Dans un graphe non orienté, deux sommets reliés par une arête sont adjacents, ou voisins. Le degré d'un sommet est son nombre de voisins. Chaque arête comptant pour ses deux extrémités, la somme des degrés est égale au double du nombre d'arêtes. Dans un graphe orienté, on parle des successeurs d'un sommet (les sommets vers lesquels partent ses arcs) et de ses prédécesseurs ; le degré sortant compte les arcs qui partent du sommet, le degré entrant ceux qui y arrivent.",
                "Un chemin est une suite de sommets dans laquelle deux sommets consécutifs sont reliés par une arête (ou par un arc dans le bon sens). Sa longueur est son nombre d'arêtes. Un cycle est un chemin qui revient à son sommet de départ sans emprunter deux fois la même arête, comme A, B, C, A. Un graphe non orienté est connexe s'il existe un chemin entre deux sommets quelconques : il est « d'un seul tenant ».",
                "L'ordre d'un graphe est son nombre de sommets. Dans un graphe pondéré, la longueur d'un chemin est souvent la somme des poids de ses arêtes ; on précise alors si l'on compte les arêtes ou les poids.",
              ],
              box: { label: "À retenir", text: "Degré : nombre de voisins. Somme des degrés = 2 × nombre d'arêtes. Chemin : suite de sommets reliés deux à deux. Cycle : chemin fermé sans répéter d'arête. Connexe : tout sommet est relié à tout autre par un chemin." },
            },
            {
              heading: "La matrice d'adjacence",
              paragraphs: [
                "On numérote les n sommets de 0 à n - 1. La matrice d'adjacence est le tableau M de n lignes et n colonnes tel que M[i][j] vaut 1 s'il existe une arête (ou un arc) de i vers j, et 0 sinon. Pour un graphe pondéré, on range le poids au lieu de 1. En Python, c'est une liste de listes.",
                "Exemple : le graphe non orienté de sommets A, B, C, D (numérotés 0, 1, 2, 3) et d'arêtes A-B, A-C, B-C, C-D a pour matrice [[0, 1, 1, 0], [1, 0, 1, 0], [1, 1, 0, 1], [0, 0, 1, 0]]. La ligne de C, [1, 1, 0, 1], indique que C est voisin de A, B et D ; la somme d'une ligne donne le degré. La matrice d'un graphe non orienté est symétrique : M[i][j] = M[j][i].",
                "Avantages et inconvénients : savoir si i et j sont reliés se fait en une seule lecture, M[i][j], quel que soit le graphe. En revanche, la matrice occupe n² cases même si le graphe a très peu d'arêtes, et lister les voisins d'un sommet demande de parcourir toute sa ligne, soit n cases.",
              ],
            },
            {
              heading: "Les listes d'adjacence",
              paragraphs: [
                "La seconde représentation associe à chaque sommet la liste de ses voisins (ou de ses successeurs pour un graphe orienté). En Python, on utilise un dictionnaire dont les clés sont les sommets et les valeurs des listes : le graphe précédent s'écrit {'A': ['B', 'C'], 'B': ['A', 'C'], 'C': ['A', 'B', 'D'], 'D': ['C']}. Le degré de C est len(g['C']), qui vaut 3.",
                "Cette représentation n'occupe qu'une place proportionnelle au nombre de sommets plus le nombre d'arêtes, et donne directement les voisins d'un sommet, ce qui est idéal pour les parcours. En revanche, tester si deux sommets sont voisins demande de parcourir une liste. On peut encapsuler le dictionnaire dans une classe Graphe munie de méthodes comme ajouter_arete(s, t), voisins(s) ou sont_voisins(s, t) : l'interface reste la même quelle que soit l'implémentation choisie.",
                "Choix pratique : la matrice convient aux graphes denses (beaucoup d'arêtes) et aux tests d'adjacence fréquents ; les listes d'adjacence conviennent aux graphes peu denses, comme le web ou un réseau social, où chaque sommet n'a que quelques voisins parmi des millions de sommets.",
              ],
              box: { label: "Repère", text: "Matrice : n² cases, test d'adjacence immédiat, voisins en n lectures, graphe dense. Listes d'adjacence (dictionnaire) : place proportionnelle à n + m, voisins immédiats, graphe peu dense." },
            },
          ],
          keyPoints: [
            "Graphe : sommets et liens ; arêtes (non orienté) ou arcs (orienté) ; pondéré si chaque lien porte un poids.",
            "Degré = nombre de voisins ; dans un graphe non orienté, somme des degrés = 2 × nombre d'arêtes.",
            "Chemin : suite de sommets reliés ; cycle : chemin fermé sans répéter d'arête ; connexe : d'un seul tenant.",
            "Matrice d'adjacence : M[i][j] = 1 si i est relié à j ; symétrique pour un graphe non orienté ; n² cases.",
            "Listes d'adjacence : dictionnaire {sommet: liste des voisins} ; économe pour les graphes peu denses.",
            "Un arbre est un graphe non orienté connexe et sans cycle.",
          ],
          example: {
            statement: "Un graphe orienté a pour sommets A, B, C, D et pour arcs A→B, B→C, C→A, C→D et D→B. Donnez sa matrice d'adjacence (sommets dans l'ordre A, B, C, D), sa représentation par dictionnaire de successeurs, les degrés entrant et sortant de chaque sommet, et un cycle.",
            solution: [
              "Ligne de A : un seul arc, vers B : [0, 1, 0, 0]. Ligne de B : arc vers C : [0, 0, 1, 0]. Ligne de C : arcs vers A et D : [1, 0, 0, 1]. Ligne de D : arc vers B : [0, 1, 0, 0].",
              "Matrice : [[0, 1, 0, 0], [0, 0, 1, 0], [1, 0, 0, 1], [0, 1, 0, 0]]. Elle n'est pas symétrique, ce qui est normal pour un graphe orienté.",
              "Dictionnaire : {'A': ['B'], 'B': ['C'], 'C': ['A', 'D'], 'D': ['B']}.",
              "Degrés sortants (somme des lignes) : A : 1, B : 1, C : 2, D : 1. Degrés entrants (somme des colonnes) : A : 1 (depuis C), B : 2 (depuis A et D), C : 1 (depuis B), D : 1 (depuis C). Les deux totaux valent 5, le nombre d'arcs.",
              "Cycles : A→B→C→A, ou encore B→C→D→B.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un graphe non orienté est donné par g = {'A': ['B', 'C', 'D'], 'B': ['A', 'C'], 'C': ['A', 'B', 'D', 'E'], 'D': ['A', 'C'], 'E': ['C']}. a) Donnez son ordre et son nombre d'arêtes. b) Donnez le degré de chaque sommet et vérifiez la relation entre la somme des degrés et le nombre d'arêtes. c) Ce graphe est-il connexe ? Contient-il un cycle ?",
              hint: "Chaque arête apparaît deux fois dans le dictionnaire, une fois dans la liste de chacune de ses extrémités.",
              solution: [
                "a) Il y a 5 clés, donc 5 sommets : l'ordre vaut 5. Les arêtes sont A-B, A-C, A-D, B-C, C-D et C-E : il y en a 6.",
                "b) Degrés : A : 3, B : 2, C : 4, D : 2, E : 1. Somme : 3 + 2 + 4 + 2 + 1 = 12 = 2 × 6. La relation est vérifiée.",
                "c) Depuis A, on atteint B, C, D, puis E par C : tous les sommets sont reliés, le graphe est connexe.",
                "Il contient des cycles, par exemple A, B, C, A ou A, C, D, A.",
              ],
            },
            {
              level: 2,
              statement: "Un graphe dont les sommets sont numérotés de 0 à 3 a pour matrice d'adjacence M = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 0, 1], [1, 0, 0, 0]]. a) Ce graphe est-il orienté ? Justifiez. b) Donnez la liste de ses arcs et sa représentation par dictionnaire. c) Quels sont les prédécesseurs du sommet 2 ? d) Donnez un chemin de 1 vers 0 et sa longueur, puis deux cycles passant par 0.",
              hint: "La ligne i donne les successeurs de i ; la colonne j donne les prédécesseurs de j.",
              solution: [
                "a) M[0][1] = 1 mais M[1][0] = 0 : la matrice n'est pas symétrique, le graphe est orienté.",
                "b) Arcs : 0→1, 0→2, 1→2, 2→3, 3→0. Dictionnaire : {0: [1, 2], 1: [2], 2: [3], 3: [0]}.",
                "c) Dans la colonne 2, les lignes 0 et 1 contiennent 1 : les prédécesseurs de 2 sont 0 et 1.",
                "d) Chemin 1→2→3→0, de longueur 3 (trois arcs).",
                "Cycles passant par 0 : 0→2→3→0 (longueur 3) et 0→1→2→3→0 (longueur 4).",
              ],
            },
            {
              level: 3,
              statement: "(Type bac) 1. Écrivez une classe Graphe représentant un graphe non orienté par un dictionnaire de listes d'adjacence (attribut adj), avec les méthodes ajouter_sommet(s), ajouter_arete(s, t), sont_voisins(s, t) et degre(s). 2. Écrivez une fonction matrice_vers_dict(m) qui reçoit la matrice d'adjacence d'un graphe de sommets 0 à n - 1 et renvoie le dictionnaire correspondant. 3. Comparez le coût du test sont_voisins avec celui d'une lecture dans la matrice, pour un graphe de n sommets.",
              hint: "Dans ajouter_arete, pensez à ajouter les sommets s'ils n'existent pas, et à inscrire l'arête dans les deux listes, puisque le graphe n'est pas orienté.",
              solution: [
                "1. class Graphe: le constructeur def __init__(self): crée self.adj = {}.",
                "def ajouter_sommet(self, s): if s not in self.adj: self.adj[s] = [] (on crée une liste de voisins vide).",
                "def ajouter_arete(self, s, t): self.ajouter_sommet(s) ; self.ajouter_sommet(t) ; self.adj[s].append(t) ; self.adj[t].append(s). L'arête est inscrite dans les deux sens.",
                "def sont_voisins(self, s, t): return t in self.adj[s]. def degre(self, s): return len(self.adj[s]).",
                "2. def matrice_vers_dict(m): n = len(m) ; d = {} ; for i in range(n): d[i] = [j for j in range(n) if m[i][j] == 1] ; return d. La fonction lit les n² cases de la matrice.",
                "3. Avec la matrice, le test se fait en une lecture, m[s][t], quel que soit n. Avec les listes, t in self.adj[s] parcourt la liste des voisins de s : le coût est proportionnel au degré de s, qui peut atteindre n - 1.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque mot du vocabulaire des graphes à sa définition.",
            pairs: [
              { left: "Arête", right: "Lien sans sens entre deux sommets" },
              { left: "Arc", right: "Lien orienté d'un sommet vers un autre" },
              { left: "Degré", right: "Nombre de voisins d'un sommet" },
              { left: "Cycle", right: "Chemin qui revient à son point de départ sans répéter d'arête" },
              { left: "Graphe connexe", right: "Deux sommets quelconques sont reliés par un chemin" },
              { left: "Graphe pondéré", right: "Chaque lien porte une valeur : distance, coût, durée" },
            ],
          },
          quiz: [
            {
              q: "Un graphe non orienté a 7 arêtes. Que vaut la somme des degrés de ses sommets ?",
              options: ["7", "14", "On ne peut pas savoir sans le nombre de sommets", "49"],
              answer: 1,
              why: "Chaque arête compte pour ses deux extrémités : la somme des degrés vaut 2 × 7 = 14.",
            },
            {
              q: "Quelle propriété a la matrice d'adjacence d'un graphe non orienté ?",
              options: ["Elle ne contient que des 1", "Sa diagonale ne contient que des 1", "Elle est symétrique", "Elle a autant de lignes que d'arêtes"],
              answer: 2,
              why: "Si A est relié à B, B est relié à A : M[i][j] = M[j][i]. La matrice a n lignes, une par sommet.",
            },
            {
              q: "Pour un graphe de n sommets, combien de cases contient sa matrice d'adjacence ?",
              options: ["n²", "n", "2n", "Le nombre d'arêtes"],
              answer: 0,
              why: "La matrice a n lignes et n colonnes, quel que soit le nombre d'arêtes.",
            },
            {
              q: "Le dictionnaire {'A': ['B'], 'B': []} représente :",
              options: ["Un graphe non orienté avec l'arête A-B", "Un graphe sans arête", "Un graphe orienté avec l'arc A→B", "Un graphe pondéré"],
              answer: 2,
              why: "B figure parmi les successeurs de A, mais A n'est pas dans la liste de B : le lien n'existe que dans un sens.",
            },
            {
              q: "Quelle représentation choisir pour le graphe du web, avec des milliards de pages et quelques dizaines de liens par page ?",
              options: ["Une matrice d'adjacence", "Des listes d'adjacence", "Un arbre binaire de recherche"],
              answer: 1,
              why: "Le graphe est très peu dense : une matrice aurait des milliards au carré de cases presque toutes nulles, alors que les listes ne stockent que les liens existants.",
            },
          ],
          trap: "Oublier, pour un graphe non orienté, d'inscrire chaque arête dans les deux listes (ou les deux cases M[i][j] et M[j][i]), ce qui transforme sans le vouloir le graphe en graphe orienté.",
          method: "Face à un graphe donné sous une forme, dessinez-le toujours avant de répondre : placez les sommets en cercle, tracez chaque lien en le cochant dans la représentation, puis vérifiez avec la relation somme des degrés = 2 × nombre d'arêtes (ou, pour un graphe orienté, somme des degrés sortants = nombre d'arcs).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'parcours-graphes',
          title: 'Parcours en profondeur et en largeur',
          minutes: 35,
          objectives: [
            "Parcourir un graphe en largeur d'abord à l'aide d'une file.",
            "Parcourir un graphe en profondeur d'abord, de façon récursive ou à l'aide d'une pile.",
            "Expliquer le rôle du marquage des sommets visités et prévoir l'ordre de visite.",
            "Utiliser un parcours pour déterminer les sommets accessibles et la connexité d'un graphe.",
          ],
          course: [
            {
              heading: "Le principe d'un parcours de graphe",
              paragraphs: [
                "Parcourir un graphe, c'est visiter tous les sommets accessibles depuis un sommet de départ, chacun une seule fois. Contrairement à un arbre, un graphe peut contenir des cycles : en suivant A, B, C, A, on reviendrait sans fin aux mêmes sommets. Il faut donc marquer les sommets déjà visités (ou déjà découverts) et ne jamais y revenir.",
                "Seuls les sommets reliés au départ par un chemin sont atteints : si le graphe n'est pas connexe, certains sommets ne sont pas visités. L'ordre de visite dépend aussi de l'ordre des voisins dans les listes d'adjacence. Dans la suite, on utilise le graphe non orienté g = {'A': ['B', 'C'], 'B': ['A', 'D', 'E'], 'C': ['A', 'F'], 'D': ['B'], 'E': ['B', 'F'], 'F': ['C', 'E']}, dont les arêtes sont A-B, A-C, B-D, B-E, C-F et E-F.",
              ],
              box: { label: "Règle", text: "Tout parcours de graphe marque les sommets visités pour ne pas les traiter deux fois : sans ce marquage, un cycle ferait tourner le programme sans fin." },
            },
            {
              heading: "Le parcours en largeur, avec une file",
              paragraphs: [
                "Le parcours en largeur (en anglais breadth-first search, BFS) visite d'abord le départ, puis tous ses voisins, puis les voisins de ses voisins, et ainsi de suite : les sommets sont atteints par distance croissante au départ, la distance étant le nombre d'arêtes du plus court chemin. Comme pour les arbres, on utilise une file.",
                "En Python, avec from collections import deque : def largeur(g, depart): visites = [depart] ; f = deque([depart]) ; while len(f) > 0: s = f.popleft() ; for v in g[s]: if v not in visites: visites.append(v) ; f.append(v). On renvoie visites à la fin. Un sommet est marqué dès qu'il est découvert, au moment où on l'enfile : il ne peut pas entrer deux fois dans la file.",
                "Sur le graphe g depuis A : file [A] ; on défile A et on découvre B, C : file [B, C] ; on défile B et on découvre D, E (A est déjà vu) : file [C, D, E] ; on défile C et on découvre F : file [D, E, F] ; D, E et F ne font découvrir aucun nouveau sommet. Ordre : A, B, C, D, E, F. Distances à A : 0 pour A, 1 pour B et C, 2 pour D, E et F.",
              ],
              box: { label: "À retenir", text: "Largeur : une file. On enfile le départ ; tant que la file n'est pas vide, on défile un sommet et on enfile ses voisins non encore découverts. Les sommets sortent par distance croissante au départ." },
            },
            {
              heading: "Le parcours en profondeur, récursif ou avec une pile",
              paragraphs: [
                "Le parcours en profondeur (depth-first search, DFS) part dans une direction le plus loin possible, puis revient en arrière pour explorer les autres branches, comme on explore un labyrinthe en suivant un mur. Il s'écrit naturellement de façon récursive : def profondeur(g, s, visites): visites.append(s) ; for v in g[s]: if v not in visites: profondeur(g, v, visites). On renvoie visites, et on lance le parcours par profondeur(g, 'A', []).",
                "Sur le graphe g depuis A : on visite A, puis son premier voisin B ; depuis B, A est vu, on va en D ; D n'a pas de voisin nouveau, on revient en B et on va en E ; depuis E, on va en F ; depuis F, on va en C ; tous les voisins de C sont vus. Ordre : A, B, D, E, F, C. Le retour en arrière est assuré par la pile des appels récursifs.",
                "On peut remplacer la récursion par une pile explicite : on empile le départ ; tant que la pile n'est pas vide, on dépile un sommet ; s'il n'est pas encore visité, on le visite et on empile ses voisins non visités. Ce parcours est bien un parcours en profondeur, mais l'ordre peut différer de la version récursive : depuis A, il donne A, C, F, E, B, D, car le dernier voisin empilé est le premier exploré.",
              ],
            },
            {
              heading: "Coût et usages des parcours",
              paragraphs: [
                "Avec des listes d'adjacence, chaque sommet est traité une fois et chaque liste de voisins lue une fois : le coût d'un parcours est proportionnel à n + m, où n est le nombre de sommets et m le nombre d'arêtes. Avec une matrice d'adjacence, chercher les voisins d'un sommet coûte n lectures, d'où un coût proportionnel à n². Pour que le test « v not in visites » soit rapide, on utilise en pratique un ensemble (set) ou un dictionnaire plutôt qu'une liste.",
                "Les parcours sont la base de nombreux algorithmes : déterminer les sommets accessibles depuis un sommet, tester si un graphe est connexe (le parcours atteint-il tous les sommets ?), compter ses composantes connexes, chercher un chemin et un plus court chemin en nombre d'arêtes (en largeur), détecter un cycle (en profondeur), sortir d'un labyrinthe, explorer les pages d'un site web.",
              ],
              box: { label: "Repère", text: "Largeur : file, sommets par distance croissante, plus courts chemins en nombre d'arêtes. Profondeur : pile ou récursivité, va le plus loin possible puis revient en arrière, détection de cycles. Coût : n + m avec des listes d'adjacence." },
            },
          ],
          keyPoints: [
            "Un parcours visite une fois chaque sommet accessible depuis le départ ; le marquage des sommets visités évite de tourner dans un cycle.",
            "Largeur : une file ; on marque un sommet quand on le découvre ; les sommets sortent par distance croissante au départ.",
            "Profondeur : récursivité ou pile ; on va le plus loin possible puis on revient en arrière.",
            "L'ordre de visite dépend de l'ordre des voisins dans les listes d'adjacence.",
            "Coût proportionnel à n + m avec des listes d'adjacence, à n² avec une matrice.",
            "Un graphe non orienté est connexe si un parcours depuis un sommet quelconque atteint tous les sommets.",
          ],
          example: {
            statement: "On reprend le graphe g = {'A': ['B', 'C'], 'B': ['A', 'D', 'E'], 'C': ['A', 'F'], 'D': ['B'], 'E': ['B', 'F'], 'F': ['C', 'E']}. Déroulez le parcours en largeur depuis D en donnant le contenu de la file à chaque étape, puis la distance de chaque sommet à D.",
            solution: [
              "Départ : visités [D], file [D].",
              "On défile D ; son seul voisin B est nouveau : visités [D, B], file [B]. B est à distance 1.",
              "On défile B ; ses voisins sont A, D, E ; D est déjà vu ; A et E sont nouveaux : visités [D, B, A, E], file [A, E]. A et E sont à distance 2.",
              "On défile A ; ses voisins B (vu) et C (nouveau) : file [E, C]. C est à distance 3.",
              "On défile E ; ses voisins B (vu) et F (nouveau) : file [C, F]. F est à distance 3.",
              "On défile C, puis F : leurs voisins sont tous déjà vus, la file se vide.",
              "Ordre de visite : D, B, A, E, C, F. Distances à D : D 0, B 1, A 2, E 2, C 3, F 3.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On considère le graphe g2 = {1: [2, 3], 2: [1, 4], 3: [1, 4, 5], 4: [2, 3, 6], 5: [3, 6], 6: [4, 5]}. Donnez l'ordre du parcours en largeur depuis 1, ainsi que la distance de chaque sommet au sommet 1.",
              hint: "Écrivez une ligne par sommet défilé, avec les sommets découverts et le contenu de la file.",
              solution: [
                "File [1]. On défile 1 : on découvre 2 et 3 : file [2, 3].",
                "On défile 2 : 1 est vu, on découvre 4 : file [3, 4].",
                "On défile 3 : 1 et 4 sont déjà vus (4 a été découvert à l'étape précédente), on découvre 5 : file [4, 5].",
                "On défile 4 : 2 et 3 sont vus, on découvre 6 : file [5, 6]. On défile 5 puis 6 sans rien découvrir.",
                "Ordre : 1, 2, 3, 4, 5, 6. Distances : 1 : 0 ; 2 et 3 : 1 ; 4 et 5 : 2 ; 6 : 3.",
              ],
            },
            {
              level: 2,
              statement: "Sur le même graphe g2, déroulez le parcours en profondeur récursif du cours, a) depuis le sommet 1, puis b) depuis le sommet 6. Pour a), indiquez la plus grande profondeur atteinte par la pile des appels récursifs.",
              hint: "À chaque sommet, prenez le premier voisin non visité de sa liste ; quand il n'y en a plus, revenez au sommet précédent.",
              solution: [
                "a) On visite 1, puis son premier voisin 2 ; depuis 2, 1 est vu, on va en 4 ; depuis 4, 2 est vu, on va en 3 ; depuis 3, 1 et 4 sont vus, on va en 5 ; depuis 5, 3 est vu, on va en 6 ; depuis 6, 4 et 5 sont vus.",
                "On revient alors en arrière jusqu'à 1 : aucun sommet nouveau (en particulier 6 est déjà vu depuis 4, et 3 depuis 1). Ordre : 1, 2, 4, 3, 5, 6.",
                "Au moment de visiter 6, les appels en cours sont ceux de 1, 2, 4, 3, 5 et 6 : la pile des appels atteint une profondeur de 6.",
                "b) On visite 6, puis 4 ; depuis 4, on va en 2 ; depuis 2, on va en 1 ; depuis 1, 2 est vu, on va en 3 ; depuis 3, 1 et 4 sont vus, on va en 5 ; tous les voisins de 5 sont vus. Ordre : 6, 4, 2, 1, 3, 5.",
              ],
            },
            {
              level: 3,
              statement: "(Type bac) Les graphes non orientés sont représentés par des dictionnaires de listes d'adjacence, et l'on dispose de la fonction largeur(g, depart) du cours, qui renvoie la liste des sommets visités. 1. Écrivez une fonction est_connexe(g) qui renvoie True si le graphe g est connexe. 2. Appliquez-la au graphe h = {'A': ['B'], 'B': ['A', 'C'], 'C': ['B'], 'D': ['E'], 'E': ['D']}. 3. Écrivez une fonction nb_composantes(g) qui renvoie le nombre de composantes connexes de g, c'est-à-dire de morceaux d'un seul tenant, et donnez sa valeur pour h.",
              hint: "Un graphe est connexe si un parcours depuis n'importe quel sommet atteint tous les sommets. Pour compter les composantes, relancez un parcours depuis chaque sommet qui n'a encore été atteint par aucun parcours.",
              solution: [
                "1. def est_connexe(g): sommets = list(g) ; if len(sommets) == 0: return True ; atteints = largeur(g, sommets[0]) ; return len(atteints) == len(sommets).",
                "2. Pour h, largeur(h, 'A') renvoie ['A', 'B', 'C'] : 3 sommets atteints sur 5 (D et E ne sont reliés ni à A, ni à B, ni à C). est_connexe(h) renvoie False.",
                "3. def nb_composantes(g): vus = [] ; compteur = 0 ; for s in g: if s not in vus: compteur = compteur + 1 ; vus = vus + largeur(g, s). Après la boucle : return compteur.",
                "Pour h : A n'est pas vu, compteur = 1, le parcours ajoute A, B, C. B et C sont vus. D n'est pas vu, compteur = 2, le parcours ajoute D, E. E est vu. Résultat : 2 composantes connexes, {A, B, C} et {D, E}.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Graphe g = {'A': ['B', 'C'], 'B': ['A', 'D', 'E'], 'C': ['A', 'F'], 'D': ['B'], 'E': ['B', 'F'], 'F': ['C', 'E']}. Remettez les sommets dans l'ordre de visite du parcours en profondeur récursif depuis A.",
            items: ["A", "B", "D", "E", "F", "C"],
          },
          quiz: [
            {
              q: "Quelle structure de données utilise le parcours en largeur ?",
              options: ["Une pile", "Une file", "Un arbre binaire de recherche", "Une matrice"],
              answer: 1,
              why: "La file, premier entré premier sorti, fait sortir les sommets par distance croissante au départ.",
            },
            {
              q: "Pourquoi marque-t-on les sommets visités dans un parcours de graphe ?",
              options: ["Pour les trier", "Pour calculer leur degré", "Pour ne pas les visiter plusieurs fois et ne pas tourner sans fin dans un cycle", "Pour respecter l'ordre alphabétique"],
              answer: 2,
              why: "Un graphe peut contenir des cycles : sans marquage, le parcours reviendrait indéfiniment sur les mêmes sommets.",
            },
            {
              q: "Avec g = {'A': ['B', 'C'], 'B': ['A', 'D'], 'C': ['A'], 'D': ['B']}, quel est l'ordre du parcours en largeur depuis A ?",
              options: ["A, B, C, D", "A, B, D, C", "A, C, B, D", "D, B, A, C"],
              answer: 0,
              why: "On visite A, puis ses voisins B et C, puis D, découvert depuis B. A, B, D, C serait l'ordre en profondeur.",
            },
            {
              q: "Quel est le coût d'un parcours d'un graphe de n sommets et m arêtes représenté par listes d'adjacence ?",
              options: ["Proportionnel à n²", "Proportionnel à n × m", "Proportionnel à log₂(n)", "Proportionnel à n + m"],
              answer: 3,
              why: "Chaque sommet est traité une fois et chaque liste de voisins lue une fois.",
            },
            {
              q: "Dans le parcours en profondeur récursif, qu'est-ce qui permet de revenir en arrière ?",
              options: ["La file des sommets", "La pile des appels récursifs", "Le dictionnaire des degrés"],
              answer: 1,
              why: "Quand un appel se termine, l'exécution reprend dans l'appel précédent, au sommet d'où l'on venait.",
            },
          ],
          trap: "Confondre les deux parcours en inversant leurs structures (une pile pour la largeur, une file pour la profondeur), ou marquer un sommet seulement quand on le défile, ce qui permet de l'enfiler plusieurs fois dans le parcours en largeur.",
          method: "Pour dérouler un parcours à la main, tracez un tableau à trois colonnes : sommet traité, sommets découverts, contenu de la file (ou de la pile). Respectez strictement l'ordre des listes d'adjacence donné par l'énoncé et vérifiez à la fin que chaque sommet accessible apparaît exactement une fois.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'chemins-et-cycles',
          title: 'Chercher un chemin, détecter un cycle',
          minutes: 35,
          objectives: [
            "Chercher un chemin entre deux sommets d'un graphe à l'aide d'un parcours.",
            "Reconstituer un chemin à l'aide du dictionnaire des prédécesseurs et obtenir, par un parcours en largeur, un plus court chemin en nombre d'arêtes.",
            "Repérer la présence d'un cycle dans un graphe non orienté ou orienté.",
          ],
          course: [
            {
              heading: "Existe-t-il un chemin ?",
              paragraphs: [
                "Pour savoir s'il existe un chemin d'un sommet u à un sommet v, il suffit de lancer un parcours (en largeur ou en profondeur) depuis u : un chemin existe si et seulement si v fait partie des sommets visités. On peut même arrêter le parcours dès que v est découvert. C'est ce que fait un logiciel de navigation qui vérifie qu'une destination est accessible, ou un jeu qui teste si la sortie d'un labyrinthe est atteignable.",
                "Dans un graphe orienté, il faut suivre les arcs dans leur sens : un chemin de u à v n'implique pas un chemin de v à u. Sur un réseau de rues à sens unique, on peut aller de la gare à la mairie sans pouvoir faire le trajet inverse par les mêmes rues.",
              ],
            },
            {
              heading: "Reconstituer le chemin : le dictionnaire des prédécesseurs",
              paragraphs: [
                "Savoir qu'un chemin existe ne suffit pas : on veut souvent la liste de ses sommets. Pendant le parcours, chaque fois qu'un sommet v est découvert depuis un sommet s, on enregistre parent[v] = s. Le dictionnaire parent sert alors aussi à marquer les sommets découverts. Pour reconstituer le chemin jusqu'à l'arrivée, on part de l'arrivée, on remonte de parent en parent jusqu'au départ, puis on retourne la liste obtenue.",
                "En Python : def chemin(g, depart, arrivee): parent = {depart: None} ; f = deque([depart]) ; while len(f) > 0: s = f.popleft() ; for v in g[s]: if v not in parent: parent[v] = s ; f.append(v). Ensuite : if arrivee not in parent: return None ; c = [] ; s = arrivee ; while s is not None: c.append(s) ; s = parent[s] ; c.reverse() ; return c.",
                "Utilisé avec un parcours en largeur, ce procédé donne un plus court chemin en nombre d'arêtes, puisque les sommets sont découverts par distance croissante au départ. Avec un parcours en profondeur, on obtient un chemin, mais pas forcément le plus court. Lorsque les arêtes ont des poids (des distances en kilomètres, par exemple), le plus court chemin se calcule avec d'autres algorithmes, comme celui de Dijkstra, utilisé par le protocole de routage OSPF.",
              ],
              box: { label: "Propriété", text: "Dans un graphe non pondéré, le parcours en largeur depuis u, avec enregistrement des prédécesseurs, fournit un plus court chemin (en nombre d'arêtes) de u vers chaque sommet accessible." },
            },
            {
              heading: "Détecter un cycle dans un graphe non orienté",
              paragraphs: [
                "On fait un parcours en profondeur en retenant, pour chaque sommet, le sommet depuis lequel on l'a atteint (son père dans le parcours). Si, depuis un sommet s, on rencontre un voisin v déjà visité qui n'est pas le père de s, on a trouvé un second chemin vers v : le graphe contient un cycle. L'arête qui ramène de s à son propre père ne compte pas, puisque dans un graphe non orienté chaque arête est vue dans les deux sens.",
                "En Python : def cycle_depuis(g, s, pere, visites): visites.append(s) ; for v in g[s]: if v not in visites: if cycle_depuis(g, v, s, visites): return True ; elif v != pere: return True (ce elif se rattache au premier if : il traite le cas d'un voisin déjà visité). Après la boucle : return False. On lance cette fonction depuis chaque sommet non encore visité, pour couvrir toutes les composantes du graphe.",
                "Un critère de comptage permet de vérifier le résultat : un graphe non orienté connexe de n sommets est sans cycle (c'est un arbre) si et seulement s'il possède exactement n - 1 arêtes. Un graphe connexe de 5 sommets et 5 arêtes contient donc forcément un cycle.",
              ],
              box: { label: "À retenir", text: "Graphe non orienté : lors d'un parcours en profondeur, rencontrer un sommet déjà visité qui n'est pas le père du sommet courant signale un cycle. Connexe à n sommets : sans cycle si et seulement si n - 1 arêtes." },
            },
            {
              heading: "Détecter un cycle dans un graphe orienté",
              paragraphs: [
                "Dans un graphe orienté, la méthode précédente ne convient pas : avec les arcs a→b, a→c et c→b, on retrouve b déjà visité en venant de c, alors qu'il n'y a aucun cycle, car on ne peut pas revenir à a. On utilise trois couleurs. Blanc : sommet pas encore atteint. Gris : sommet en cours d'exploration, c'est-à-dire dont l'appel récursif n'est pas terminé. Noir : sommet dont tous les descendants ont été explorés.",
                "On fait un parcours en profondeur : on colore un sommet en gris en y entrant et en noir en le quittant. Si l'on rencontre un arc vers un sommet gris, ce sommet est un ancêtre du sommet courant dans le parcours : on a trouvé un cycle. Un arc vers un sommet noir ne signale pas de cycle, car tout ce qui est accessible depuis ce sommet a déjà été exploré sans revenir en arrière.",
                "Cette détection a de nombreuses applications : vérifier que des tâches qui dépendent les unes des autres peuvent être ordonnées (un cycle de dépendances rend la tâche impossible), repérer une référence circulaire dans un tableur, ou détecter un interblocage entre processus qui s'attendent mutuellement.",
              ],
              box: { label: "Règle", text: "Graphe orienté : parcours en profondeur avec trois couleurs (blanc, gris, noir). Un arc vers un sommet gris révèle un cycle ; un arc vers un sommet noir, non." },
            },
          ],
          keyPoints: [
            "Il existe un chemin de u à v si et seulement si un parcours depuis u visite v.",
            "Le dictionnaire parent (parent[v] = s) sert à marquer les sommets et à reconstituer le chemin en remontant depuis l'arrivée.",
            "Le parcours en largeur donne un plus court chemin en nombre d'arêtes ; le parcours en profondeur donne un chemin quelconque.",
            "Non orienté : un sommet déjà visité qui n'est pas le père du sommet courant révèle un cycle.",
            "Connexe à n sommets : sans cycle si et seulement si n - 1 arêtes.",
            "Orienté : trois couleurs ; un arc vers un sommet gris (en cours d'exploration) révèle un cycle.",
          ],
          example: {
            statement: "Sur le graphe g = {'A': ['B', 'C'], 'B': ['A', 'D', 'E'], 'C': ['A', 'F'], 'D': ['B'], 'E': ['B', 'F'], 'F': ['C', 'E']}, cherchez un chemin de A à F à l'aide du parcours en largeur, avec le dictionnaire des prédécesseurs. Comparez avec le chemin obtenu par le parcours en profondeur récursif.",
            solution: [
              "Largeur depuis A : on défile A, on découvre B et C : parent['B'] = 'A', parent['C'] = 'A'. On défile B, on découvre D et E : parent['D'] = 'B', parent['E'] = 'B'.",
              "On défile C, on découvre F : parent['F'] = 'C'. Les autres sommets ne font rien découvrir.",
              "Reconstitution : on part de F ; parent['F'] = 'C', parent['C'] = 'A', parent['A'] = None. Liste obtenue : F, C, A, que l'on retourne.",
              "Chemin : A, C, F, de longueur 2. C'est un plus court chemin, car F est à distance 2 de A.",
              "En profondeur depuis A, l'ordre de visite est A, B, D, E, F, C : F est découvert depuis E, E depuis B, B depuis A. Le chemin obtenu est A, B, E, F, de longueur 3 : c'est un chemin correct, mais pas le plus court.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un parcours en largeur depuis A a produit le dictionnaire parent = {'A': None, 'B': 'A', 'C': 'A', 'D': 'B', 'E': 'D', 'F': 'C', 'G': 'E'}. a) Reconstituez le chemin de A à G et donnez sa longueur. b) Même question pour F. c) Le sommet H appartient au graphe mais pas au dictionnaire. Que peut-on en conclure ?",
              hint: "Partez de l'arrivée et remontez les parents jusqu'à None, puis lisez la liste à l'envers.",
              solution: [
                "a) G a pour parent E, E a pour parent D, D a pour parent B, B a pour parent A. En remontant : G, E, D, B, A. Chemin : A, B, D, E, G, de longueur 4 arêtes.",
                "b) F a pour parent C, qui a pour parent A : chemin A, C, F, de longueur 2.",
                "c) H n'a jamais été découvert par le parcours depuis A : il n'existe aucun chemin de A à H. Le graphe n'est donc pas connexe (s'il est non orienté).",
              ],
            },
            {
              level: 2,
              statement: "On considère le graphe non orienté g = {1: [2], 2: [1, 3, 4], 3: [2, 4], 4: [3, 5, 2], 5: [4]}. a) Comptez ses sommets et ses arêtes, et déduisez-en, sachant qu'il est connexe, s'il contient un cycle. b) Déroulez la fonction cycle_depuis du cours, lancée par cycle_depuis(g, 1, None, []), jusqu'à la détection du cycle. Quel cycle a été trouvé ?",
              hint: "À chaque sommet, notez son père dans le parcours. Un voisin déjà visité qui n'est pas ce père signale le cycle.",
              solution: [
                "a) 5 sommets ; arêtes 1-2, 2-3, 2-4, 3-4, 4-5, soit 5 arêtes. Un graphe connexe de 5 sommets sans cycle aurait 4 arêtes : avec 5 arêtes, il contient forcément un cycle.",
                "b) On visite 1 (père None). Son voisin 2 n'est pas visité : on visite 2 (père 1).",
                "Depuis 2 : le voisin 1 est visité mais c'est le père, on l'ignore ; le voisin 3 n'est pas visité : on visite 3 (père 2).",
                "Depuis 3 : le voisin 2 est le père, ignoré ; le voisin 4 n'est pas visité : on visite 4 (père 3).",
                "Depuis 4 : le voisin 3 est le père, ignoré ; le voisin 5 n'est pas visité : on visite 5 (père 4), dont le seul voisin 4 est le père : cycle_depuis(g, 5, ...) renvoie False.",
                "Retour en 4 : le voisin suivant, 2, est déjà visité et n'est pas le père de 4 (qui est 3) : la fonction renvoie True. Le cycle trouvé est 2, 3, 4, 2.",
              ],
            },
            {
              level: 3,
              statement: "(Type bac) Un projet comporte des tâches a, b, c, d, e ; un arc x→y signifie que la tâche y ne peut commencer qu'après x. Le graphe est g = {'a': ['b'], 'b': ['c', 'd'], 'c': [], 'd': ['e'], 'e': ['b']}. 1. Écrivez une fonction a_un_cycle(g) qui détecte un cycle par la méthode des trois couleurs. 2. Déroulez-la sur g en indiquant les couleurs, et concluez : le projet est-il réalisable ? 3. On remplace l'arc e→b par l'arc e→c. Que renvoie la fonction ? Pourquoi la rencontre d'un sommet déjà visité ne suffit-elle pas ici à conclure à un cycle ?",
              hint: "Un sommet devient gris quand on commence à l'explorer et noir quand tous ses successeurs ont été explorés. Seul un arc vers un sommet gris révèle un cycle.",
              solution: [
                "1. def a_un_cycle(g): couleur = {s: 'blanc' for s in g}, puis une fonction interne def explorer(s): couleur[s] = 'gris' ; for v in g[s]: if couleur[v] == 'gris': return True ; if couleur[v] == 'blanc' and explorer(v): return True. Après la boucle : couleur[s] = 'noir' ; return False.",
                "Enfin, dans a_un_cycle : for s in g: if couleur[s] == 'blanc' and explorer(s): return True. Après la boucle : return False.",
                "2. explorer('a') : a gris. Successeur b blanc : b gris. Successeur c blanc : c gris, sans successeur, c noir. Successeur d blanc : d gris. Successeur e blanc : e gris. Successeur b : il est gris.",
                "On a trouvé un arc vers un sommet en cours d'exploration : la fonction renvoie True. Le cycle est b→d→e→b : b doit précéder d, d doit précéder e, et e doit précéder b. Le projet est irréalisable en l'état.",
                "3. Avec e→c : arrivé en e, le successeur c est noir (déjà entièrement exploré). Ce n'est pas un cycle : e devient noir, puis d, b et a. Tous les sommets sont noirs, la fonction renvoie False.",
                "c a bien été visité avant, mais par un autre chemin (b→c), et depuis c on ne peut revenir ni à e ni à ses ancêtres. Seul un arc vers un ancêtre encore en cours d'exploration, donc gris, ferme un cycle : c'est pourquoi on distingue gris et noir.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : chemins et cycles dans les graphes.",
            statements: [
              { text: "Il existe un chemin de u à v si et seulement si un parcours lancé depuis u visite v.", true: true, why: "Un parcours visite exactement les sommets accessibles depuis son départ." },
              { text: "Le parcours en profondeur donne toujours un plus court chemin en nombre d'arêtes.", true: false, why: "C'est le parcours en largeur qui découvre les sommets par distance croissante ; la profondeur peut faire un détour." },
              { text: "Dans un graphe orienté, un chemin de u à v garantit un chemin de v à u.", true: false, why: "Les arcs ont un sens : l'existence d'un trajet aller ne garantit pas celle d'un trajet retour." },
              { text: "Un graphe non orienté connexe de 6 sommets et 5 arêtes ne contient aucun cycle.", true: true, why: "Un graphe connexe de n sommets est sans cycle exactement lorsqu'il a n - 1 arêtes : c'est un arbre." },
              { text: "Dans un graphe orienté, retrouver un sommet déjà visité prouve l'existence d'un cycle.", true: false, why: "Si ce sommet est noir (entièrement exploré), on l'a seulement atteint par deux chemins différents : il faut qu'il soit gris." },
              { text: "Le dictionnaire des prédécesseurs permet de reconstituer le chemin en remontant depuis l'arrivée.", true: true, why: "On suit parent[v] jusqu'au départ, puis on retourne la liste obtenue." },
              { text: "Dans un graphe non orienté, revenir au père par l'arête qu'on vient d'emprunter forme un cycle.", true: false, why: "Chaque arête est vue dans les deux sens : un cycle ne doit pas réutiliser la même arête, c'est pourquoi on ignore le père." },
            ],
          },
          quiz: [
            {
              q: "Quel parcours fournit un plus court chemin en nombre d'arêtes dans un graphe non pondéré ?",
              options: ["Le parcours en profondeur", "N'importe quel parcours", "Aucun parcours", "Le parcours en largeur"],
              answer: 3,
              why: "Le parcours en largeur découvre les sommets par distance croissante au départ : le premier chemin trouvé vers un sommet est le plus court.",
            },
            {
              q: "Avec parent = {'A': None, 'B': 'A', 'C': 'B', 'D': 'B'}, quel est le chemin de A à D ?",
              options: ["A, B, D", "D, B, A", "A, B, C, D", "A, D"],
              answer: 0,
              why: "On remonte D, B, A grâce aux parents, puis on retourne la liste : A, B, D.",
            },
            {
              q: "Dans la méthode des trois couleurs, que signifie un sommet gris ?",
              options: ["Il n'a pas encore été atteint", "Son exploration est commencée mais pas terminée", "Il appartient forcément à un cycle", "Il est entièrement exploré"],
              answer: 1,
              why: "Gris : l'appel récursif sur ce sommet est en cours. Un arc qui y mène depuis un descendant ferme un cycle.",
            },
            {
              q: "Un graphe non orienté connexe a 8 sommets et 9 arêtes. Que peut-on affirmer ?",
              options: ["C'est un arbre", "Il ne contient aucun cycle", "Il contient au moins un cycle"],
              answer: 2,
              why: "Sans cycle, un graphe connexe de 8 sommets aurait exactement 7 arêtes ; avec 9, il contient un cycle.",
            },
            {
              q: "Pourquoi ignore-t-on le père du sommet courant lors de la détection de cycle dans un graphe non orienté ?",
              options: ["Parce que l'arête vers le père est celle par laquelle on vient d'arriver", "Parce que le père n'est jamais visité", "Parce que le père est toujours une feuille", "Pour accélérer le parcours"],
              answer: 0,
              why: "Dans un graphe non orienté, l'arête qui mène au père est vue dans les deux sens ; la reprendre ne forme pas un cycle.",
            },
          ],
          trap: "Appliquer à un graphe orienté le test « sommet déjà visité donc cycle » valable pour les graphes non orientés : dans un graphe orienté, seul un arc vers un sommet en cours d'exploration (gris) ferme un cycle.",
          method: "Pour reconstituer un chemin, écrivez le dictionnaire parent au fur et à mesure du parcours, une ligne par sommet découvert, puis remontez depuis l'arrivée. Pour une détection de cycle, contrôlez votre conclusion par un comptage : dans un graphe non orienté connexe, plus de n - 1 arêtes impose un cycle.",
        },
      ],
    },
  ],
}
