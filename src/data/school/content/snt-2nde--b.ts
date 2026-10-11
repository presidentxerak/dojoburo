import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'snt-2nde',
  chapters: [
    /* ==================================================================== */
    /* LES DONNÉES STRUCTURÉES ET LEUR TRAITEMENT                             */
    /* ==================================================================== */
    {
      id: 'donnees-structurees',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'donnees-metadonnees',
          title: 'Données, métadonnées et format CSV',
          minutes: 25,
          objectives: [
            "Définir une donnée et une donnée personnelle.",
            "Identifier les différents descripteurs d'un objet et distinguer la valeur d'une donnée de son descripteur.",
            "Identifier les principaux formats et représentations de données, en particulier le format CSV.",
            "Retrouver les métadonnées d'un fichier personnel.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une donnée ?",
              paragraphs: [
                "Une donnée est une valeur qui décrit un objet, une personne ou un événement, et que quelqu'un a choisi de conserver parce qu'elle a de l'intérêt pour lui. La note de 14 obtenue en SNT, le prix d'un billet de train, la température relevée à 8 h à Lille ou la durée d'un film sont des données. Prise seule, une donnée ne dit pas grand-chose : « 14 » n'a de sens que si l'on sait qu'il s'agit d'une note, de quel élève et dans quelle matière.",
                "Le numérique a multiplié les données : chaque achat en ligne, chaque recherche sur le Web, chaque trajet enregistré par un téléphone en produit. On parle de mégadonnées (en anglais Big Data) pour désigner des ensembles de données si volumineux et si variés qu'il faut des outils spécifiques pour les stocker et les analyser.",
                "Certaines données concernent des personnes. Une donnée personnelle est, selon le règlement général sur la protection des données (RGPD), toute information se rapportant à une personne physique identifiée ou identifiable, directement (nom, photo) ou indirectement (numéro de téléphone, adresse IP, plaque d'immatriculation, ou un croisement de plusieurs informations). Le RGPD, règlement européen adopté en 2016, s'applique depuis le 25 mai 2018 ; en France, la CNIL veille au respect de ces règles.",
              ],
              box: { label: "Définition", text: "Donnée : valeur décrivant un objet, une personne ou un événement, conservée pour l'intérêt qu'elle présente. Donnée personnelle : information se rapportant à une personne physique identifiée ou identifiable, directement ou indirectement." },
            },
            {
              heading: "Collections, objets, descripteurs et valeurs",
              paragraphs: [
                "Pour être exploitables, les données sont organisées, on dit structurées. Une collection regroupe des objets qui partagent les mêmes descripteurs. Par exemple, la collection des films d'une médiathèque : chaque film est un objet, et il est décrit par les mêmes descripteurs (titre, réalisateur, année de sortie, durée en minutes). Pour un film donné, chaque descripteur prend une valeur : le descripteur « année » vaut par exemple 1995 pour tel film.",
                "La structure de table est la façon la plus courante de présenter une collection : chaque ligne correspond à un objet, chaque colonne à un descripteur, et la donnée se lit à l'intersection d'une ligne et d'une colonne. C'est exactement ce que l'on fait dans un tableur. Il faut bien distinguer le descripteur (le nom de la colonne, par exemple « durée ») de la valeur (ce qui est écrit dans la case, par exemple 112).",
                "Choisir les descripteurs est une décision importante : ils doivent permettre de répondre aux questions que l'on se posera. Une table des élèves qui ne contient pas le descripteur « classe » ne permet pas de lister les élèves de la 2nde 3, même si toutes les autres informations sont présentes.",
              ],
              box: { label: "À retenir", text: "Dans une table : une ligne = un objet (un enregistrement), une colonne = un descripteur, une case = une valeur. Une collection regroupe des objets décrits par les mêmes descripteurs." },
            },
            {
              heading: "Le format CSV et les autres formats",
              paragraphs: [
                "Le format CSV (Comma-Separated Values, valeurs séparées par des virgules) est un format texte très simple pour enregistrer une table. La première ligne, appelée en-tête, contient les noms des descripteurs ; chaque ligne suivante contient les valeurs d'un objet, dans le même ordre, séparées par un caractère séparateur. Un fichier films.csv peut ainsi commencer par les lignes « titre;annee;duree » puis « Le Grand Bleu;1988;168 ».",
                "En France, on utilise souvent le point-virgule comme séparateur, car la virgule sert déjà de séparateur décimal (12,5). Un fichier CSV peut être ouvert avec un simple éditeur de texte, avec un tableur ou lu par un programme Python : c'est ce qui fait sa force, car il est lisible par presque tous les logiciels.",
                "D'autres formats existent. Le format JSON, très utilisé sur le Web, décrit les objets sous forme de paires descripteur : valeur, par exemple {“titre”: “Le Grand Bleu”, “annee”: 1988}. Le format XML utilise des balises, comme le HTML. Les sites de données ouvertes (open data), comme le portail public data.gouv.fr, mettent à la disposition de tous des tables, très souvent au format CSV, que chacun peut réutiliser.",
              ],
              box: { label: "Repère", text: "En 1970, l'informaticien Edgar F. Codd publie le modèle relationnel, qui organise les données en tables reliées entre elles. Il est à l'origine des bases de données relationnelles utilisées partout aujourd'hui." },
            },
            {
              heading: "Les métadonnées : des données sur les données",
              paragraphs: [
                "Une métadonnée est une donnée qui décrit une autre donnée ou un fichier. Un fichier texte possède ainsi un nom, une taille, une date de création et de dernière modification, parfois un auteur : ce sont ses métadonnées. On les consulte dans les propriétés du fichier (clic droit, puis Propriétés ou Lire les informations selon le système).",
                "Une photographie prise avec un téléphone contient des métadonnées au format EXIF : date et heure de la prise de vue, modèle de l'appareil, réglages, et souvent les coordonnées GPS du lieu. Un morceau de musique contient le titre, l'artiste et l'album. Les métadonnées sont très utiles pour classer et retrouver les fichiers, mais elles peuvent révéler des informations personnelles que l'on ne pensait pas partager, comme l'endroit où l'on habite.",
              ],
              box: { label: "Définition", text: "Métadonnée : donnée qui décrit une autre donnée ou un fichier (nom, taille, date, auteur, lieu de prise de vue...)." },
            },
          ],
          keyPoints: [
            "Une donnée est une valeur qui décrit un objet, une personne ou un événement.",
            "Une donnée personnelle se rapporte à une personne identifiée ou identifiable, directement ou indirectement (RGPD, appliqué depuis le 25 mai 2018).",
            "Une collection regroupe des objets décrits par les mêmes descripteurs.",
            "Table : une ligne par objet, une colonne par descripteur, une valeur dans chaque case.",
            "Un fichier CSV est un fichier texte : une ligne d'en-tête, puis une ligne par objet, valeurs séparées par un séparateur (virgule ou point-virgule).",
            "Une métadonnée est une donnée sur une donnée (taille, date, auteur, coordonnées GPS d'une photo).",
          ],
          example: {
            statement: "Voici le début d'un fichier CSV (données fictives) : « nom;espece;age;poids_kg » puis « Rex;chien;5;31 », « Mina;chat;3;4 », « Plume;lapin;2;2 ». (1) Quels sont les descripteurs ? (2) Combien d'objets cette table contient-elle ? (3) Quelle est la valeur du descripteur « age » pour Mina ? (4) Quel est le séparateur ?",
            solution: [
              "La première ligne est l'en-tête : elle donne les descripteurs, ici nom, espece, age et poids_kg (4 descripteurs).",
              "Chaque ligne suivante décrit un objet : il y a 3 lignes de données, donc 3 objets (Rex, Mina et Plume).",
              "Sur la ligne de Mina, les valeurs sont dans l'ordre de l'en-tête : nom = Mina, espece = chat, age = 3, poids_kg = 4. La valeur cherchée est 3.",
              "Les valeurs sont séparées par des points-virgules : le séparateur est « ; ».",
              "Réponse : 4 descripteurs, 3 objets, age de Mina = 3, séparateur point-virgule.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un fichier eleves.csv (données fictives) contient les lignes suivantes : « prenom;classe;option;moyenne », « Inès;2nde 1;latin;14.5 », « Tom;2nde 3;aucune;11.2 », « Sarah;2nde 1;théâtre;15.8 », « Yanis;2nde 2;latin;12.0 ». (1) Quelle est la collection décrite ? (2) Citez les descripteurs. (3) Combien d'objets la table contient-elle ? (4) Quelle est la valeur du descripteur « option » pour Sarah ? (5) Dans quelle colonne et quelle ligne lit-on la donnée 11.2 ?",
              hint: "La première ligne est l'en-tête. Comptez ensuite les lignes de données, sans compter l'en-tête.",
              solution: [
                "(1) La collection est celle des élèves (de quelques classes de seconde).",
                "(2) Les descripteurs sont donnés par l'en-tête : prenom, classe, option, moyenne.",
                "(3) Il y a 4 lignes de données (Inès, Tom, Sarah, Yanis), donc 4 objets.",
                "(4) Sur la ligne de Sarah, la troisième valeur correspond au troisième descripteur, option : elle vaut « théâtre ».",
                "(5) 11.2 se lit dans la colonne « moyenne », sur la ligne de Tom.",
                "Résultat : collection des élèves, 4 descripteurs, 4 objets, option de Sarah = théâtre, 11.2 = moyenne de Tom.",
              ],
            },
            {
              level: 2,
              statement: "Un élève enregistre la table suivante en CSV avec la virgule comme séparateur : en-tête « ville,departement,temperature », puis les lignes « Brest,29,12,5 », « Nice,06,17,1 », « Metz,57,9 ». (1) Un tableur affiche 4 colonnes pour Brest et Nice, mais 3 pour Metz. Expliquez pourquoi. (2) Proposez deux façons de corriger le fichier. (3) Réécrivez la ligne de Brest avec chacune des deux corrections.",
              hint: "Repérez le rôle de la virgule dans « 12,5 » : séparateur décimal ou séparateur de valeurs ?",
              solution: [
                "(1) Le logiciel considère chaque virgule comme un séparateur. Dans « Brest,29,12,5 », la virgule décimale de 12,5 coupe la température en deux valeurs, 12 et 5 : on obtient 4 valeurs au lieu de 3. Metz, avec une température entière (9), n'a pas ce problème.",
                "(2) Première correction : garder la virgule comme séparateur, mais écrire les nombres décimaux avec un point (12.5). Seconde correction : garder la virgule décimale et choisir un autre séparateur, le point-virgule, pour tout le fichier (en-tête compris).",
                "(3) Avec la première correction : « Brest,29,12.5 ». Avec la seconde : « Brest;29;12,5 », et l'en-tête devient « ville;departement;temperature ».",
                "Résultat : le séparateur de valeurs ne doit jamais apparaître à l'intérieur d'une valeur ; on change soit l'écriture décimale, soit le séparateur.",
              ],
            },
            {
              level: 3,
              statement: "Un club de sport publie en données ouvertes la table de ses adhérents, après avoir supprimé les noms et prénoms. Il reste les descripteurs : date_naissance, code_postal, sexe, sport, niveau. (1) Le club affirme que la table ne contient plus de données personnelles. Discutez cette affirmation. (2) Parmi les descripteurs, lesquels faudrait-il modifier ou supprimer pour réduire le risque, et comment ? (3) Une photo de l'équipe est jointe à la publication. Quelles métadonnées pourrait-elle contenir, et quel risque présentent-elles ?",
              hint: "Une personne est identifiable indirectement quand le croisement de plusieurs informations ne correspond qu'à elle. Pensez aussi aux métadonnées EXIF d'une photo.",
              solution: [
                "(1) L'affirmation est fausse. Selon le RGPD, une donnée est personnelle si la personne est identifiable, même indirectement. Dans un petit club, la combinaison date de naissance complète, code postal et sexe correspond souvent à une seule personne : un voisin ou un camarade peut la reconnaître et apprendre son sport et son niveau.",
                "(2) Le descripteur le plus précis est date_naissance : on peut le remplacer par l'année de naissance, ou mieux par une tranche d'âge (moins de 18 ans, 18 à 30 ans...). Le code postal peut être remplacé par le département. On réduit ainsi le nombre de combinaisons rares, qui permettent l'identification.",
                "(3) Une photo numérique contient des métadonnées EXIF : date et heure de la prise de vue, modèle de l'appareil et, souvent, coordonnées GPS du lieu. Elles peuvent révéler où et quand l'équipe s'entraîne. Il faut les supprimer avant publication (de nombreux logiciels et téléphones le permettent).",
                "Conclusion : retirer les noms ne suffit pas à anonymiser une table ; il faut aussi rendre les autres descripteurs moins précis et nettoyer les métadonnées des fichiers publiés.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez votre vocabulaire des données.",
            statements: [
              { text: "Dans une table, chaque colonne correspond à un descripteur.", true: true, why: "Les objets sont en ligne, les descripteurs en colonne, les valeurs dans les cases." },
              { text: "La première ligne d'un fichier CSV contient en général les valeurs du premier objet.", true: false, why: "La première ligne est le plus souvent l'en-tête : elle contient les noms des descripteurs." },
              { text: "Une adresse IP peut être une donnée personnelle.", true: true, why: "Elle permet d'identifier indirectement une personne : c'est une donnée personnelle au sens du RGPD." },
              { text: "Un fichier CSV ne peut être ouvert qu'avec un tableur.", true: false, why: "C'est un fichier texte : un éditeur de texte ou un programme Python peuvent aussi le lire." },
              { text: "La date de création d'un fichier est une métadonnée.", true: true, why: "Elle décrit le fichier lui-même, et non son contenu : c'est une donnée sur une donnée." },
              { text: "Une table dont on a supprimé les noms ne contient plus jamais de données personnelles.", true: false, why: "Le croisement d'autres descripteurs (date de naissance, code postal...) peut suffire à identifier une personne." },
              { text: "En France, on utilise souvent le point-virgule comme séparateur dans les fichiers CSV.", true: true, why: "La virgule y sert de séparateur décimal ; le point-virgule évite la confusion." },
            ],
          },
          quiz: [
            {
              q: "Dans une table, que représente une ligne ?",
              options: [
                "Un descripteur de la table",
                "Un objet de la collection",
                "Le séparateur entre les valeurs",
                "Une métadonnée du fichier",
              ],
              answer: 1,
              why: "Chaque ligne décrit un objet (un enregistrement) ; les colonnes correspondent aux descripteurs.",
            },
            {
              q: "Que signifie le sigle CSV ?",
              options: [
                "Comma-Separated Values",
                "Computer Saved Values",
                "Code Source Variable",
                "Collection Standard de Valeurs",
              ],
              answer: 0,
              why: "CSV signifie Comma-Separated Values : des valeurs séparées par des virgules (ou par un autre séparateur).",
            },
            {
              q: "Lequel de ces exemples est une métadonnée d'une photographie ?",
              options: [
                "La couleur du ciel sur l'image",
                "Le visage de la personne photographiée",
                "Le nombre de personnes sur la photo",
                "Le modèle de l'appareil",
              ],
              answer: 3,
              why: "Le modèle de l'appareil décrit le fichier et la prise de vue, sans faire partie de l'image : c'est une métadonnée EXIF.",
            },
            {
              q: "Dans l'en-tête « titre;annee;duree », « duree » est :",
              options: [
                "une valeur de la table",
                "un objet de la collection",
                "un descripteur",
                "un séparateur",
              ],
              answer: 2,
              why: "L'en-tête liste les descripteurs ; les valeurs (par exemple 112) apparaissent dans les lignes suivantes.",
            },
            {
              q: "Depuis quand le RGPD s'applique-t-il ?",
              options: [
                "Depuis la loi du 6 janvier 1978",
                "Depuis le 25 mai 2018",
                "Depuis la publication du modèle de Codd en 1970",
                "Depuis le 1er janvier 2023",
              ],
              answer: 1,
              why: "Le RGPD, adopté en 2016, s'applique dans toute l'Union européenne depuis le 25 mai 2018. 1978 est l'année de la loi Informatique et libertés.",
            },
          ],
          trap: "Confondre le descripteur et la valeur : « année » est un descripteur (le nom de la colonne), 1988 est la valeur que prend ce descripteur pour un objet donné. Autre erreur fréquente : compter la ligne d'en-tête parmi les objets.",
          method: "Devant une table, commencez toujours par lire l'en-tête et dire à voix haute « une ligne, c'est un... » : une fois l'objet identifié (un élève, un film, une ville), les questions sur les descripteurs et les valeurs deviennent faciles.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'traiter-table',
          title: 'Trier et filtrer une table de données',
          minutes: 30,
          objectives: [
            "Réaliser des opérations de recherche, de filtre, de tri ou de calcul sur une ou plusieurs tables.",
            "Utiliser un tableur ou un programme Python pour traiter une table au format CSV.",
            "Croiser deux tables à l'aide d'un descripteur commun.",
          ],
          course: [
            {
              heading: "Rechercher et filtrer : sélectionner des lignes",
              paragraphs: [
                "Une table n'a d'intérêt que si l'on peut en extraire des réponses. La première opération est la recherche : trouver l'objet ou les objets qui ont une valeur donnée, par exemple la ligne du film « Le Grand Bleu ». Le filtre généralise cette idée : il sélectionne toutes les lignes qui vérifient un critère, et masque les autres. Le critère porte sur un ou plusieurs descripteurs : « les films sortis après 2000 », « les élèves de 2nde 1 qui font latin ».",
                "Un critère s'écrit avec une comparaison (égal, différent, inférieur, supérieur) et peut combiner plusieurs conditions avec ET (les deux conditions doivent être vraies) ou OU (au moins une des deux). Le filtre « classe = 2nde 1 ET option = latin » garde moins de lignes que « classe = 2nde 1 OU option = latin ». Filtrer ne supprime rien : la table d'origine reste intacte, on n'en affiche qu'une partie.",
                "Dans un tableur, on active le filtre automatique sur la ligne d'en-tête, puis on choisit le critère dans le menu de la colonne. Dans un programme Python, on parcourt les lignes avec une boucle et on ne garde que celles qui vérifient la condition, par exemple : for ligne in table: if ligne['option'] == 'latin': resultat.append(ligne).",
              ],
              box: { label: "Définition", text: "Filtrer une table : ne garder que les lignes (objets) qui vérifient un critère portant sur un ou plusieurs descripteurs. Les conditions se combinent avec ET (toutes vraies) ou OU (au moins une vraie)." },
            },
            {
              heading: "Trier : ordonner les lignes",
              paragraphs: [
                "Trier une table, c'est ranger ses lignes selon les valeurs d'un descripteur, dans l'ordre croissant ou décroissant. Les nombres se rangent du plus petit au plus grand, les textes dans l'ordre alphabétique (on dit lexicographique). On peut trier selon plusieurs descripteurs : d'abord par classe, puis, à classe égale, par nom.",
                "Attention au type des valeurs. Un programme qui lit un fichier CSV obtient des chaînes de caractères, pas des nombres. Or les chaînes se comparent caractère par caractère : « 9 » est placé après « 10 », car le caractère 9 vient après le caractère 1. Pour trier correctement des nombres, il faut d'abord les convertir avec int() ou float(). En Python, sorted(table, key=lambda l: int(l['age'])) trie la table selon l'âge converti en entier, et l'option reverse=True donne l'ordre décroissant.",
                "Le tri sert souvent à établir un classement (les cinq films les plus longs, les trois villes les plus peuplées) : on trie par ordre décroissant puis on lit les premières lignes. Il facilite aussi la lecture : une table triée par nom permet de retrouver vite une personne.",
              ],
              box: { label: "Règle", text: "Avant de trier ou de comparer des nombres lus dans un fichier CSV, convertissez-les (int() pour un entier, float() pour un décimal). Sinon, le tri est alphabétique : « 100 » passe avant « 25 »." },
            },
            {
              heading: "Calculer sur une colonne",
              paragraphs: [
                "On peut calculer à partir des valeurs d'une colonne : compter les lignes (combien d'élèves font latin ?), faire la somme, la moyenne, chercher le minimum ou le maximum. Dans un tableur, on utilise des fonctions comme SOMME, MOYENNE, MIN, MAX ou NB.SI. En Python, on parcourt la table avec un compteur ou un accumulateur, ou l'on utilise sum(), min(), max() et len().",
                "Ces calculs se combinent souvent avec un filtre : la moyenne des élèves de 2nde 1 s'obtient en filtrant d'abord les lignes de cette classe, puis en calculant la moyenne de la colonne sur les lignes restantes. L'ordre des opérations compte : la moyenne de toute la table, puis filtrée, n'a pas de sens ; on filtre d'abord, on calcule ensuite.",
              ],
            },
            {
              heading: "Croiser deux tables",
              paragraphs: [
                "Les informations utiles sont parfois réparties dans deux tables. Une table des élèves contient le nom et le code de la classe ; une autre table, celle des classes, associe à chaque code le nom du professeur principal. Pour savoir qui est le professeur principal de chaque élève, on croise (on fusionne) les deux tables grâce au descripteur commun, le code de la classe.",
                "Pour que la fusion fonctionne, le descripteur commun doit être écrit de la même façon dans les deux tables (« 2nde1 » et « 2nde 1 » ne seront pas reconnus comme identiques) et, dans la table de référence, il doit identifier un seul objet. C'est le principe des bases de données relationnelles : des tables reliées par des descripteurs communs, plutôt qu'une énorme table où les mêmes informations seraient répétées à chaque ligne.",
              ],
              box: { label: "À retenir", text: "Rechercher, filtrer, trier, calculer, croiser : ce sont les cinq traitements de base d'une table. On peut les réaliser avec un tableur ou avec un programme Python." },
            },
          ],
          keyPoints: [
            "Filtrer : garder les lignes qui vérifient un critère ; ET exige toutes les conditions, OU au moins une.",
            "Trier : ranger les lignes selon un descripteur, par ordre croissant ou décroissant.",
            "Les valeurs lues dans un CSV sont des chaînes : il faut les convertir (int, float) avant de les comparer comme des nombres.",
            "Pour une moyenne sur une partie de la table, on filtre d'abord, on calcule ensuite.",
            "Deux tables se croisent grâce à un descripteur commun, écrit de façon identique dans les deux.",
          ],
          example: {
            statement: "Table films (données fictives), descripteurs titre, annee, duree : (A, 1998, 121), (B, 2005, 95), (C, 2012, 142), (D, 2001, 108), (E, 2019, 97). (1) Filtrez les films sortis après 2000 (annee > 2000). (2) Triez le résultat par durée décroissante. (3) Calculez la durée moyenne des films filtrés.",
            solution: [
              "Filtre annee > 2000 : on garde B (2005), C (2012), D (2001) et E (2019). Le film A (1998) est écarté.",
              "Tri par durée décroissante : C (142), D (108), E (97), B (95).",
              "Somme des durées des films filtrés : 142 + 108 + 97 + 95 = 442 minutes.",
              "Moyenne : 442 ÷ 4 = 110,5 minutes.",
              "Réponse : C, D, E, B ; durée moyenne de 110,5 minutes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Table villes (données fictives), descripteurs nom, region, habitants : (Arville, Bretagne, 42 000), (Bonnac, Occitanie, 18 500), (Cerlieu, Bretagne, 7 200), (Dormont, Occitanie, 65 300), (Esteil, Normandie, 23 900). (1) Quelles lignes garde le filtre region = Bretagne ? (2) Quelles lignes garde le filtre habitants > 20 000 ? (3) Classez les cinq villes par nombre d'habitants croissant.",
              hint: "Pour chaque filtre, examinez les lignes une à une et gardez celles pour lesquelles la condition est vraie.",
              solution: [
                "(1) region = Bretagne : Arville et Cerlieu.",
                "(2) habitants > 20 000 : Arville (42 000), Dormont (65 300) et Esteil (23 900). Bonnac (18 500) et Cerlieu (7 200) sont écartées.",
                "(3) Ordre croissant : Cerlieu (7 200), Bonnac (18 500), Esteil (23 900), Arville (42 000), Dormont (65 300).",
                "Résultat : (1) Arville, Cerlieu ; (2) Arville, Dormont, Esteil ; (3) Cerlieu, Bonnac, Esteil, Arville, Dormont.",
              ],
            },
            {
              level: 2,
              statement: "Avec la même table villes : (1) Quelles villes garde le filtre « region = Occitanie ET habitants > 20 000 » ? (2) Et le filtre « region = Occitanie OU habitants > 20 000 » ? (3) Calculez le nombre moyen d'habitants des villes de Bretagne. (4) Un programme Python lit le fichier CSV et trie les villes avec sorted(table, key=lambda l: l['habitants']), où les nombres sont écrits sans espace (42000, 18500, 7200, 65300, 23900). Dans quel ordre obtient-on les villes ? Pourquoi est-ce faux, et comment corriger ?",
              hint: "Pour la question 4, comparez les chaînes caractère par caractère, en commençant par le premier chiffre.",
              solution: [
                "(1) ET : il faut les deux conditions. Bonnac est en Occitanie mais a 18 500 habitants ; Dormont est en Occitanie et a 65 300 habitants. Seule Dormont est gardée.",
                "(2) OU : il suffit d'une condition. Occitanie : Bonnac, Dormont ; plus de 20 000 habitants : Arville, Dormont, Esteil. On garde Arville, Bonnac, Dormont et Esteil (Dormont une seule fois). Seule Cerlieu est écartée.",
                "(3) Bretagne : Arville (42 000) et Cerlieu (7 200). Moyenne : (42 000 + 7 200) ÷ 2 = 49 200 ÷ 2 = 24 600 habitants.",
                "(4) Sans conversion, les valeurs sont des chaînes, comparées caractère par caractère : '18500' < '23900' < '42000' < '65300' < '7200' (le premier caractère 1 < 2 < 4 < 6 < 7). On obtient Bonnac, Esteil, Arville, Dormont, Cerlieu : Cerlieu, la plus petite ville, est placée en dernier.",
                "Correction : convertir la valeur en entier dans la clé de tri, key=lambda l: int(l['habitants']). L'ordre devient Cerlieu, Bonnac, Esteil, Arville, Dormont.",
              ],
            },
            {
              level: 3,
              statement: "Deux tables (données fictives). Table eleves (nom, code_classe, moyenne) : (Léa, C1, 13.5), (Hugo, C2, 10.5), (Nora, C1, 16.0), (Malo, C3, 12.0), (Jade, C2, 14.5), (Adam, C1, 11.0). Table classes (code_classe, professeur_principal) : (C1, Mme Roux), (C2, M. Diallo), (C3, Mme Petit). (1) Quel descripteur permet de croiser les deux tables ? (2) Donnez, pour chaque élève, son professeur principal. (3) Calculez la moyenne des élèves de la classe de Mme Roux. (4) Décrivez en français, étape par étape, un programme qui affiche le nom des élèves de la classe de M. Diallo ayant plus de 12 de moyenne.",
              hint: "Commencez par trouver le code de la classe de Mme Roux (ou de M. Diallo) dans la table classes, puis filtrez la table eleves avec ce code.",
              solution: [
                "(1) Le descripteur commun est code_classe : il apparaît dans les deux tables et identifie une seule classe dans la table classes.",
                "(2) Léa, Nora et Adam (C1) : Mme Roux ; Hugo et Jade (C2) : M. Diallo ; Malo (C3) : Mme Petit.",
                "(3) Mme Roux correspond au code C1. Filtre code_classe = C1 : Léa (13.5), Nora (16.0), Adam (11.0). Somme : 13.5 + 16.0 + 11.0 = 40.5. Moyenne : 40.5 ÷ 3 = 13.5.",
                "(4) Étape 1 : parcourir la table classes et retenir le code dont le professeur principal est M. Diallo (on trouve C2). Étape 2 : parcourir la table eleves ; pour chaque ligne, convertir la moyenne en nombre avec float(). Étape 3 : si code_classe vaut C2 ET si la moyenne est supérieure à 12, afficher le nom.",
                "Exécution : Hugo (C2, 10.5) ne vérifie pas la seconde condition ; Jade (C2, 14.5) vérifie les deux. Le programme affiche Jade.",
                "Résultat : code_classe ; moyenne de la classe de Mme Roux = 13,5 ; seule Jade est affichée.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Ces nombres ont été lus dans un fichier CSV sans conversion : ce sont des chaînes de caractères. Rangez-les dans l'ordre où sorted() les classe (ordre lexicographique, caractère par caractère).",
            items: [
              "105",
              "21",
              "3",
              "48",
              "9",
            ],
          },
          quiz: [
            {
              q: "Le filtre « option = latin ET classe = 2nde 1 » garde :",
              options: [
                "les élèves qui font latin, quelle que soit leur classe",
                "tous les élèves de 2nde 1",
                "les élèves qui vérifient au moins une des deux conditions",
                "les élèves de 2nde 1 qui font latin",
              ],
              answer: 3,
              why: "Avec ET, les deux conditions doivent être vraies en même temps.",
            },
            {
              q: "En Python, sans conversion, quel résultat donne la comparaison '9' < '10' ?",
              options: [
                "True",
                "False",
                "Une erreur",
              ],
              answer: 1,
              why: "Les chaînes se comparent caractère par caractère : '9' vient après '1', donc '9' < '10' vaut False.",
            },
            {
              q: "Que fait un filtre sur la table d'origine ?",
              options: [
                "Il masque les lignes écartées",
                "Il supprime définitivement les lignes écartées",
                "Il change l'ordre des colonnes",
                "Il ajoute un descripteur",
              ],
              answer: 0,
              why: "Filtrer sélectionne les lignes à afficher ; la table d'origine reste intacte.",
            },
            {
              q: "Pour croiser une table des élèves et une table des classes, il faut :",
              options: [
                "que les deux tables aient le même nombre de lignes",
                "que les deux tables soient triées",
                "un descripteur commun écrit de la même façon",
                "que les tables soient au format JSON",
              ],
              answer: 2,
              why: "La fusion associe les lignes qui ont la même valeur pour le descripteur commun (par exemple le code de la classe).",
            },
            {
              q: "Pour obtenir les trois films les plus longs d'une table, on :",
              options: [
                "trie par durée croissante et lit les trois premières lignes du tableau",
                "filtre les films de plus de 100 minutes",
                "calcule la durée moyenne",
                "trie par durée décroissante et lit les trois premières lignes",
              ],
              answer: 3,
              why: "Le tri décroissant place les plus grandes durées en tête de table.",
            },
          ],
          trap: "Oublier que les valeurs lues dans un fichier CSV sont des chaînes de caractères : sans int() ou float(), « 7200 » est rangé après « 65300 » et « 9 » après « 10 ». Autre piège : confondre ET (toutes les conditions) et OU (au moins une).",
          method: "Avant de lancer un tri ou un filtre, prédisez le résultat sur deux ou trois lignes à la main ; si le logiciel ou le programme donne autre chose, cherchez d'abord un problème de type (texte au lieu de nombre) ou de condition (ET au lieu de OU).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'centres-donnees',
          title: 'Stocker les données : centres de données et cloud',
          minutes: 25,
          objectives: [
            "Expliquer ce qu'est le stockage dans le nuage (cloud) et utiliser un support de stockage dans le nuage.",
            "Décrire le rôle et l'organisation d'un centre de données.",
            "Identifier les principales causes de la consommation énergétique des centres de données ainsi que leur ordre de grandeur.",
            "Discuter des avantages et des limites du stockage en ligne (sécurité, confidentialité, dépendance).",
          ],
          course: [
            {
              heading: "Où sont stockées nos données ?",
              paragraphs: [
                "Les données peuvent être stockées localement, sur un support que l'on a sous la main : disque dur ou SSD de l'ordinateur, mémoire du téléphone, clé USB. Elles peuvent aussi être stockées à distance, sur des serveurs accessibles par Internet : c'est le stockage dans le nuage, en anglais cloud. Quand vous enregistrez un document sur un espace de stockage en ligne, que vos photos se synchronisent automatiquement ou que vous regardez une vidéo en streaming, vos données circulent vers ou depuis des serveurs situés ailleurs.",
                "Le mot nuage est trompeur : il n'y a rien d'immatériel. Les données sont enregistrées sur des disques bien réels, dans des bâtiments appelés centres de données (en anglais data centers), qui peuvent se trouver dans un autre pays que l'utilisateur. Le pays où sont stockées les données a son importance, car ce sont ses lois qui s'appliquent en partie à elles.",
              ],
              box: { label: "Définition", text: "Stockage dans le nuage (cloud) : enregistrement de données sur des serveurs distants, accessibles par Internet depuis n'importe quel appareil connecté. Ces serveurs sont regroupés dans des centres de données." },
            },
            {
              heading: "Le centre de données, une usine à données",
              paragraphs: [
                "Un centre de données est un bâtiment qui regroupe des milliers de serveurs, rangés dans des armoires appelées baies. Il comprend aussi tout ce qui permet à ces machines de fonctionner sans interruption : une alimentation électrique sécurisée (onduleurs, batteries et groupes électrogènes pour prendre le relais en cas de coupure), des connexions réseau à très haut débit, un système de refroidissement, une surveillance et une sécurité physique (contrôle d'accès, protection contre l'incendie).",
                "Pour ne pas perdre de données si un disque tombe en panne, les données sont copiées plusieurs fois : c'est la redondance. Les grands services conservent même des copies dans plusieurs centres de données éloignés, pour résister à une catastrophe locale (inondation, incendie). C'est ce qui rend le stockage dans le nuage plus fiable qu'une unique clé USB, à condition que le service soit bien géré.",
              ],
              box: { label: "À retenir", text: "Un centre de données comprend : des serveurs en baies, une alimentation électrique secourue, des liaisons réseau, un refroidissement et une sécurité physique. La redondance (copies multiples) protège contre la perte de données." },
            },
            {
              heading: "La consommation d'énergie des centres de données",
              paragraphs: [
                "Les centres de données consomment beaucoup d'électricité, pour deux grandes raisons. D'abord, les serveurs eux-mêmes fonctionnent jour et nuit : processeurs, mémoires, disques et équipements réseau. Ensuite, ils produisent de la chaleur, qu'il faut évacuer : le refroidissement (climatisation, circulation d'air ou d'eau) représente une part importante de la consommation. S'y ajoutent les pertes des systèmes électriques et l'éclairage.",
                "Pour mesurer l'efficacité d'un centre, on utilise l'indicateur PUE (Power Usage Effectiveness) : c'est le rapport entre l'énergie totale consommée par le centre et l'énergie consommée par les seuls équipements informatiques. Un PUE de 2 signifie que, pour 1 kWh utilisé par les serveurs, le centre consomme 2 kWh au total, dont 1 kWh pour le refroidissement et le reste. Plus le PUE est proche de 1, plus le centre est efficace.",
                "En ordre de grandeur, l'Agence internationale de l'énergie estime que les centres de données consomment environ 1 à 2 % de l'électricité mondiale au milieu des années 2020, et que cette part augmente vite, notamment avec le développement de l'intelligence artificielle. Pour réduire cet impact, on installe des centres dans des régions froides, on récupère la chaleur pour chauffer des bâtiments, et chacun peut limiter les données inutiles qu'il stocke ou fait circuler.",
              ],
              box: { label: "Formule", text: "PUE = énergie totale consommée par le centre ÷ énergie consommée par les équipements informatiques. Le PUE est toujours supérieur ou égal à 1 ; plus il est proche de 1, plus le centre est efficace." },
            },
            {
              heading: "Avantages et limites du nuage",
              paragraphs: [
                "Le stockage dans le nuage présente de vrais avantages : on accède à ses fichiers depuis n'importe quel appareil connecté, on les partage facilement, on travaille à plusieurs sur un même document, et les copies multiples protègent contre la perte ou le vol d'un appareil.",
                "Il a aussi des limites. Sans connexion Internet, les fichiers peuvent être inaccessibles. On confie ses données à une entreprise, ce qui pose des questions de confidentialité (qui peut les lire ? sont-elles analysées ?) et de dépendance (que se passe-t-il si le service ferme ou change ses conditions ?). La sécurité dépend aussi de l'utilisateur : un mot de passe faible ou réutilisé ouvre la porte à un pirate. Enfin, stocker et transférer des données a un coût énergétique.",
              ],
            },
          ],
          keyPoints: [
            "Le cloud est le stockage de données sur des serveurs distants, accessibles par Internet.",
            "Ces serveurs sont regroupés dans des centres de données : serveurs en baies, alimentation secourue, réseau, refroidissement, sécurité.",
            "La redondance (plusieurs copies, parfois dans plusieurs centres) protège contre la perte de données.",
            "Deux grandes causes de consommation : le fonctionnement des serveurs et leur refroidissement.",
            "PUE = énergie totale ÷ énergie informatique ; l'idéal est un PUE proche de 1.",
            "Ordre de grandeur : environ 1 à 2 % de l'électricité mondiale au milieu des années 2020, en forte hausse.",
          ],
          example: {
            statement: "Un centre de données (données fictives) consomme en une année 30 GWh au total, dont 20 GWh pour les équipements informatiques. (1) Calculez son PUE. (2) Quelle énergie est consommée par autre chose que l'informatique ? (3) Après travaux, le PUE passe à 1,2 avec la même consommation informatique. Quelle est la nouvelle consommation totale ?",
            solution: [
              "PUE = énergie totale ÷ énergie informatique = 30 ÷ 20 = 1,5.",
              "Énergie hors informatique = 30 - 20 = 10 GWh (refroidissement, pertes électriques, éclairage).",
              "Avec un PUE de 1,2 : énergie totale = PUE × énergie informatique = 1,2 × 20 = 24 GWh.",
              "Vérification : 24 ÷ 20 = 1,2. L'économie est de 30 - 24 = 6 GWh par an.",
              "Réponse : PUE de 1,5 ; 10 GWh hors informatique ; 24 GWh après travaux.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des situations suivantes, dites si les données sont stockées localement ou dans le nuage : (a) un fichier enregistré sur une clé USB ; (b) une photo synchronisée automatiquement sur un service en ligne ; (c) un document rédigé dans un traitement de texte en ligne partagé avec la classe ; (d) une musique téléchargée dans la mémoire du téléphone pour être écoutée hors connexion ; (e) un courriel consulté sur une messagerie Web.",
              hint: "Demandez-vous si les données sont sur un support que vous avez avec vous ou sur des serveurs auxquels on accède par Internet.",
              solution: [
                "(a) Local : la clé USB est un support physique que l'on possède.",
                "(b) Nuage : la photo est copiée sur les serveurs du service en ligne (une copie peut aussi rester sur le téléphone).",
                "(c) Nuage : le document est enregistré sur les serveurs du service, ce qui permet de le partager.",
                "(d) Local : la musique est enregistrée dans la mémoire du téléphone.",
                "(e) Nuage : les courriels sont conservés sur les serveurs de la messagerie et affichés dans le navigateur.",
                "Résultat : local pour (a) et (d) ; nuage pour (b), (c) et (e).",
              ],
            },
            {
              level: 2,
              statement: "Deux centres de données (données fictives). Centre A : consommation informatique 12 GWh par an, PUE 1,8. Centre B : consommation informatique 15 GWh par an, PUE 1,3. (1) Calculez la consommation totale de chaque centre. (2) Quel centre consomme le plus au total ? (3) Quel centre est le plus efficace ? (4) Pour chaque centre, calculez l'énergie consommée hors informatique.",
              hint: "Énergie totale = PUE × énergie informatique. L'efficacité se lit sur le PUE, pas sur la consommation totale.",
              solution: [
                "(1) Centre A : 1,8 × 12 = 21,6 GWh. Centre B : 1,3 × 15 = 19,5 GWh.",
                "(2) Le centre A consomme le plus au total (21,6 GWh contre 19,5 GWh), alors qu'il fait tourner moins d'équipements informatiques.",
                "(3) Le centre B est le plus efficace : son PUE (1,3) est plus proche de 1 que celui de A (1,8).",
                "(4) Hors informatique : A : 21,6 - 12 = 9,6 GWh ; B : 19,5 - 15 = 4,5 GWh.",
                "Résultat : A consomme 21,6 GWh dont 9,6 hors informatique ; B consomme 19,5 GWh dont 4,5 hors informatique ; B est le plus efficace.",
              ],
            },
            {
              level: 3,
              statement: "Une association hésite entre deux solutions pour conserver les photos et les fichiers de ses adhérents : (1) un disque dur externe conservé au local de l'association ; (2) un service de stockage dans le nuage. Rédigez une argumentation d'une dizaine de lignes qui compare les deux solutions selon quatre critères : la protection contre la perte des données, l'accès et le partage, la confidentialité, l'impact énergétique. Concluez par une recommandation argumentée.",
              hint: "Pour chaque critère, donnez un avantage et un inconvénient. Pensez à la redondance, à la dépendance envers un fournisseur et au rôle des centres de données.",
              solution: [
                "Perte des données : un disque unique peut tomber en panne, être volé ou détruit dans un incendie ; sans autre copie, tout est perdu. Un service en ligne conserve plusieurs copies, parfois dans plusieurs centres de données : il protège mieux contre la perte matérielle, mais pas contre un compte piraté ou une suppression par erreur synchronisée.",
                "Accès et partage : le disque n'est accessible qu'au local ; le nuage permet à chaque adhérent d'accéder aux fichiers depuis chez lui et de partager un dossier, à condition d'avoir une connexion Internet.",
                "Confidentialité : avec le disque, l'association garde la maîtrise de ses données. Avec le nuage, elle les confie à une entreprise : il faut lire les conditions d'utilisation, savoir dans quel pays les données sont stockées, et protéger le compte par un mot de passe solide. Les photos d'adhérents sont des données personnelles : leur publication ou leur partage suppose l'accord des personnes.",
                "Énergie : un disque débranché ne consomme rien ; le nuage repose sur des centres de données qui consomment de l'électricité en permanence (serveurs et refroidissement). Stocker moins de fichiers inutiles réduit cet impact.",
                "Recommandation possible : utiliser le nuage pour les fichiers à partager, avec un compte bien protégé, et garder en plus une copie sur le disque externe. Deux copies sur deux supports différents valent mieux qu'une seule, quelle qu'elle soit.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque terme à sa définition.",
            pairs: [
              { left: "Cloud", right: "Stockage sur des serveurs distants, accessibles par Internet" },
              { left: "Centre de données", right: "Bâtiment qui regroupe des milliers de serveurs" },
              { left: "Baie", right: "Armoire dans laquelle les serveurs sont rangés" },
              { left: "Redondance", right: "Conservation de plusieurs copies des mêmes données" },
              { left: "Onduleur", right: "Appareil qui assure l'alimentation électrique en cas de coupure" },
              { left: "PUE", right: "Rapport entre l'énergie totale et l'énergie informatique d'un centre" },
            ],
          },
          quiz: [
            {
              q: "Où se trouvent physiquement les données stockées « dans le nuage » ?",
              options: [
                "Sur des serveurs dans des centres de données",
                "Dans les satellites de télécommunication en orbite basse",
                "Nulle part, elles sont immatérielles",
                "Dans la mémoire vive de votre téléphone",
              ],
              answer: 0,
              why: "Le nuage repose sur des serveurs bien réels, regroupés dans des centres de données reliés à Internet.",
            },
            {
              q: "Un centre de données a un PUE de 1,5 et ses serveurs consomment 10 GWh. Quelle est sa consommation totale ?",
              options: [
                "11,5 GWh",
                "6,7 GWh",
                "15 GWh",
                "25 GWh",
              ],
              answer: 2,
              why: "Énergie totale = PUE × énergie informatique = 1,5 × 10 = 15 GWh.",
            },
            {
              q: "Quelles sont les deux grandes causes de consommation électrique d'un centre de données ?",
              options: [
                "L'éclairage des salles, les ascenseurs et le chauffage des bureaux",
                "Le fonctionnement des serveurs et leur refroidissement",
                "Les écrans et les claviers",
                "Les câbles et les fibres optiques",
              ],
              answer: 1,
              why: "Les serveurs tournent en permanence et dégagent de la chaleur, qu'il faut évacuer par un système de refroidissement.",
            },
            {
              q: "Quel ordre de grandeur correspond à la part de l'électricité mondiale consommée par les centres de données au milieu des années 2020 ?",
              options: [
                "Environ 50 %",
                "Moins de 0,001 %",
                "Environ 25 %",
                "Environ 1 à 2 %",
              ],
              answer: 3,
              why: "L'Agence internationale de l'énergie l'estime à environ 1 à 2 % de l'électricité mondiale, une part en forte croissance.",
            },
            {
              q: "Pourquoi les grands services en ligne gardent-ils des copies dans plusieurs centres de données ?",
              options: [
                "Pour rendre les fichiers plus légers et plus rapides à ouvrir",
                "Pour réduire leur consommation d'énergie",
                "Pour résister à une panne ou à une catastrophe locale",
              ],
              answer: 2,
              why: "La redondance géographique permet de retrouver les données même si un centre entier est hors service.",
            },
          ],
          trap: "Croire que le cloud est immatériel ou gratuit pour l'environnement : les données sont stockées sur des serveurs physiques, dans des centres de données qui consomment de l'électricité en permanence. Autre erreur : penser qu'un PUE élevé est un bon score, alors que l'idéal est un PUE proche de 1.",
          method: "Pour une question sur le PUE, écrivez toujours la formule avant de remplacer les valeurs (PUE = total ÷ informatique), puis vérifiez que votre PUE est supérieur ou égal à 1 : un résultat inférieur signale une division à l'envers.",
        },
      ],
    },
    /* ==================================================================== */
    /* LOCALISATION, CARTOGRAPHIE ET MOBILITÉ                                 */
    /* ==================================================================== */
    {
      id: 'localisation',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'gps',
          title: 'Le GPS : se géolocaliser par satellite',
          minutes: 30,
          objectives: [
            "Décrire le principe de fonctionnement de la géolocalisation par satellite.",
            "Calculer la distance entre un satellite et un récepteur à partir de la durée de propagation du signal.",
            "Expliquer la trilatération et pourquoi il faut au moins quatre satellites.",
            "Citer les principaux systèmes de géolocalisation par satellite et leurs limites.",
          ],
          course: [
            {
              heading: "Des constellations de satellites",
              paragraphs: [
                "Se géolocaliser, c'est déterminer sa position sur la Terre. Les systèmes de géolocalisation par satellite (on parle de GNSS, pour Global Navigation Satellite System) reposent sur des constellations de satellites qui tournent autour de la Terre et émettent en permanence des signaux radio. Le plus connu est le GPS (Global Positioning System), un système américain dont le développement a été lancé en 1973 par le département de la Défense des États-Unis, à des fins militaires.",
                "Le GPS est pleinement opérationnel depuis 1995. Son usage civil existait déjà, mais le signal était volontairement dégradé ; cette dégradation a été supprimée en 2000, ce qui a fait passer la précision civile d'une centaine de mètres à quelques mètres et ouvert la voie aux usages grand public. D'autres systèmes existent : GLONASS (Russie), Galileo (Union européenne, premiers services ouverts en 2016) et BeiDou (Chine). Les récepteurs récents, comme ceux des smartphones, utilisent souvent plusieurs constellations à la fois.",
                "Les satellites GPS (une trentaine en service) circulent à environ 20 200 km d'altitude. Ils sont répartis de façon à ce que, depuis presque n'importe quel point du globe, au moins quatre d'entre eux soient visibles au-dessus de l'horizon à tout moment.",
              ],
              box: { label: "Repère", text: "1973 : lancement du projet GPS par le département de la Défense américain. 1995 : le GPS est pleinement opérationnel. 2000 : fin de la dégradation volontaire du signal civil. 2016 : ouverture des premiers services de Galileo, le système européen." },
            },
            {
              heading: "Mesurer une distance avec un temps",
              paragraphs: [
                "Chaque satellite embarque des horloges atomiques d'une extrême précision. Il émet en continu un signal qui contient l'heure exacte d'émission et sa position dans l'espace. Le récepteur (téléphone, boîtier de navigation) capte ce signal et note l'heure de réception. La différence entre les deux donne la durée de propagation Δt du signal.",
                "Le signal est une onde électromagnétique : il se propage à la vitesse de la lumière, c ≈ 300 000 km/s (soit 3 × 10⁸ m/s). La distance entre le satellite et le récepteur vaut donc d = c × Δt. Par exemple, si le signal met 0,07 s pour arriver, le satellite est à 300 000 × 0,07 = 21 000 km.",
                "Un point essentiel : le récepteur GPS est passif. Il reçoit les signaux, mais n'émet rien vers les satellites. Les satellites ne savent donc pas où vous êtes ; c'est votre appareil qui calcule sa propre position. Si votre position est connue d'autres personnes, c'est parce qu'une application l'a transmise par un autre moyen (Internet, réseau mobile).",
              ],
              box: { label: "Formule", text: "d = c × Δt, avec d la distance satellite-récepteur (en m), c ≈ 3 × 10⁸ m/s la vitesse de la lumière et Δt la durée de propagation du signal (en s)." },
            },
            {
              heading: "La trilatération : croiser les distances",
              paragraphs: [
                "Connaître sa distance à un satellite ne suffit pas : on sait seulement qu'on se trouve quelque part sur une sphère centrée sur ce satellite. Avec un deuxième satellite, on est sur l'intersection de deux sphères, c'est-à-dire sur un cercle. Avec un troisième, il ne reste en général que deux points possibles, dont l'un est absurde (très loin dans l'espace ou à l'intérieur de la Terre) : la position est trouvée. Cette méthode, fondée sur des distances, s'appelle la trilatération (la triangulation, elle, utilise des angles).",
                "En pratique, il faut un quatrième satellite. L'horloge du récepteur est une horloge ordinaire, beaucoup moins précise que les horloges atomiques des satellites. Or une erreur d'une seule microseconde (10⁻⁶ s) sur Δt donne une erreur de 3 × 10⁸ × 10⁻⁶ = 300 m sur la distance. Le récepteur traite donc le décalage de sa propre horloge comme une quatrième inconnue, en plus des trois coordonnées de sa position : quatre inconnues demandent quatre mesures, donc au moins quatre satellites.",
              ],
              box: { label: "Propriété", text: "Pour se géolocaliser en trois dimensions, un récepteur doit capter les signaux d'au moins quatre satellites : trois pour la position, un quatrième pour corriger le décalage de son horloge." },
            },
            {
              heading: "Précision et limites",
              paragraphs: [
                "Pour un usage grand public, la précision est en général de l'ordre de quelques mètres en terrain dégagé. Elle se dégrade lorsque le ciel est masqué ou que les signaux rebondissent sur des surfaces : entre de hauts immeubles (les « canyons urbains »), en forêt dense, et elle devient nulle dans un tunnel ou à l'intérieur de nombreux bâtiments, car les signaux, très faibles, traversent mal les obstacles.",
                "Pour compenser, les smartphones combinent le GNSS avec d'autres sources : la position des bornes Wi-Fi voisines et des antennes relais du réseau mobile, ou encore leurs capteurs internes (accéléromètre, boussole). C'est pourquoi un téléphone peut afficher une position approximative même sans voir le ciel, et pourquoi il trouve sa position plus vite qu'un récepteur GPS isolé.",
              ],
            },
          ],
          keyPoints: [
            "GPS (États-Unis, lancé en 1973, opérationnel en 1995), GLONASS (Russie), Galileo (Europe), BeiDou (Chine).",
            "Chaque satellite émet l'heure d'émission et sa position ; le récepteur mesure la durée de propagation Δt.",
            "Distance : d = c × Δt, avec c ≈ 300 000 km/s.",
            "Trilatération : on croise les distances à plusieurs satellites ; il en faut au moins 4 (3 pour la position, 1 pour l'horloge).",
            "Le récepteur GPS est passif : il reçoit sans émettre, et calcule lui-même sa position.",
            "Précision de quelques mètres en terrain dégagé, dégradée en ville dense, nulle dans un tunnel.",
          ],
          example: {
            statement: "Un récepteur capte le signal d'un satellite GPS. Le signal a été émis à 10 h 00 min 00,000 s et reçu à 10 h 00 min 00,072 s. (1) Calculez la durée de propagation. (2) Calculez la distance entre le satellite et le récepteur. (3) L'horloge du récepteur avance en réalité de 0,001 s. Quelle erreur cela provoque-t-il sur la distance ?",
            solution: [
              "Durée de propagation : Δt = 0,072 s - 0,000 s = 0,072 s.",
              "Distance : d = c × Δt = 300 000 km/s × 0,072 s = 21 600 km.",
              "Une avance de 0,001 s de l'horloge fait croire à une durée trop longue de 0,001 s. Erreur sur la distance : 300 000 × 0,001 = 300 km.",
              "Une erreur d'un millième de seconde fausse donc la distance de 300 km : c'est pourquoi le récepteur doit corriger son horloge grâce à un quatrième satellite.",
              "Réponse : Δt = 0,072 s ; d = 21 600 km ; erreur de 300 km.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un récepteur mesure les durées de propagation des signaux de trois satellites : satellite A, 0,068 s ; satellite B, 0,075 s ; satellite C, 0,081 s. On prend c = 300 000 km/s. (1) Calculez la distance entre le récepteur et chaque satellite. (2) Quel satellite est le plus proche du récepteur ?",
              hint: "Appliquez d = c × Δt en gardant les kilomètres par seconde : le résultat est directement en kilomètres.",
              solution: [
                "(1) Satellite A : d = 300 000 × 0,068 = 20 400 km.",
                "Satellite B : d = 300 000 × 0,075 = 22 500 km.",
                "Satellite C : d = 300 000 × 0,081 = 24 300 km.",
                "(2) Le satellite le plus proche est celui dont le signal arrive le plus vite : A, à 20 400 km.",
                "Résultat : 20 400 km, 22 500 km et 24 300 km ; A est le plus proche.",
              ],
            },
            {
              level: 2,
              statement: "On prend c = 3 × 10⁸ m/s. (1) Calculez l'erreur sur la distance provoquée par une erreur de 1 microseconde (10⁻⁶ s) sur la mesure de Δt, puis par une erreur de 10 nanosecondes (10 × 10⁻⁹ s). (2) Un récepteur de randonnée annonce une précision de 5 m. Quelle est l'erreur maximale tolérable sur Δt pour respecter cette précision ? (3) Expliquez pourquoi les satellites embarquent des horloges atomiques et pourquoi le récepteur, qui n'en a pas, a besoin d'un quatrième satellite.",
              hint: "Utilisez d = c × Δt avec l'erreur à la place de Δt. Pour la question 2, isolez Δt : Δt = d ÷ c.",
              solution: [
                "(1) Erreur de 10⁻⁶ s : 3 × 10⁸ × 10⁻⁶ = 3 × 10² = 300 m. Erreur de 10 ns : 3 × 10⁸ × 10 × 10⁻⁹ = 3 × 10⁸ × 10⁻⁸ = 3 m.",
                "(2) Δt = d ÷ c = 5 ÷ (3 × 10⁸) ≈ 1,7 × 10⁻⁸ s, soit environ 17 nanosecondes.",
                "(3) Une erreur infime sur le temps produit une grosse erreur sur la distance : il faut des horloges capables de mesurer le temps à quelques nanosecondes près, ce que permettent les horloges atomiques des satellites.",
                "L'horloge du récepteur, ordinaire, peut être décalée. Ce décalage est une inconnue de plus, qui s'ajoute aux trois coordonnées de la position : avec quatre inconnues, il faut quatre mesures de distance, donc quatre satellites.",
                "Résultat : 300 m et 3 m ; erreur tolérable d'environ 17 ns ; quatre satellites pour quatre inconnues.",
              ],
            },
            {
              level: 3,
              statement: "Pour comprendre la trilatération, on raisonne dans un plan (en deux dimensions), avec des balises au sol (données fictives). Un repère est gradué en kilomètres. Balise A en (0 ; 0), balise B en (6 ; 0), balise C en (3 ; 10). Un randonneur mesure ses distances aux balises : 5 km de A, 5 km de B et 6 km de C. (1) Avec les seules balises A et B, montrez qu'il reste deux positions possibles, que l'on déterminera. (2) Utilisez la balise C pour trouver la position du randonneur. (3) Expliquez ce qui change dans l'espace, avec des satellites.",
              hint: "Le point est à égale distance de A et B : il est sur la médiatrice de [AB], la droite x = 3. Utilisez ensuite le théorème de Pythagore.",
              solution: [
                "(1) Le randonneur est à 5 km de A et à 5 km de B, donc à égale distance des deux : il est sur la médiatrice de [AB], la droite d'équation x = 3. Sa distance à A vérifie alors 3² + y² = 5², soit y² = 25 - 9 = 16, donc y = 4 ou y = -4. Deux positions possibles : P(3 ; 4) et Q(3 ; -4).",
                "(2) Distance de P à C(3 ; 10) : même abscisse, donc PC = 10 - 4 = 6 km. Distance de Q à C : QC = 10 - (-4) = 14 km. Seul P est à 6 km de C.",
                "Vérification : PA = √(3² + 4²) = √25 = 5 km et PB = √((6 - 3)² + 4²) = √25 = 5 km. Le randonneur est en P(3 ; 4).",
                "(3) Dans l'espace, une distance place le récepteur sur une sphère, deux sur un cercle, trois sur deux points, dont l'un est écarté car absurde. Il faut en plus un quatrième satellite pour corriger le décalage de l'horloge du récepteur, ce qui fait au moins quatre satellites.",
                "Résultat : P(3 ; 4), à 5 km de A et de B et à 6 km de C.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes qui permettent à un téléphone de calculer sa position par GPS.",
            items: [
              "Chaque satellite émet un signal contenant l'heure d'émission et sa position",
              "Le récepteur capte les signaux et note leur heure de réception",
              "Il calcule la durée de propagation Δt de chaque signal",
              "Il en déduit sa distance à chaque satellite avec d = c × Δt",
              "Il croise les distances d'au moins quatre satellites (trilatération et correction d'horloge)",
              "Il affiche sa position : latitude, longitude et altitude",
            ],
          },
          quiz: [
            {
              q: "Pourquoi faut-il au moins quatre satellites pour se géolocaliser ?",
              options: [
                "Parce que chaque satellite ne couvre qu'un quart de la Terre",
                "Pour connaître la position et corriger l'horloge du récepteur",
                "Parce que le récepteur doit envoyer sa position à chacun d'eux",
                "Pour mesurer la vitesse de la lumière",
              ],
              answer: 1,
              why: "Il y a quatre inconnues : trois coordonnées et le décalage de l'horloge du récepteur. Il faut donc quatre mesures.",
            },
            {
              q: "Un signal met 0,07 s pour aller du satellite au récepteur. À quelle distance est le satellite ?",
              options: [
                "2 100 km",
                "4 286 km",
                "210 000 km",
                "21 000 km",
              ],
              answer: 3,
              why: "d = c × Δt = 300 000 km/s × 0,07 s = 21 000 km.",
            },
            {
              q: "Que transmet le récepteur GPS d'un téléphone aux satellites ?",
              options: [
                "Rien, il se contente de recevoir",
                "Sa position, toutes les secondes",
                "L'heure de son horloge interne",
                "Son numéro de téléphone",
              ],
              answer: 0,
              why: "Le récepteur GPS est passif : il reçoit les signaux et calcule lui-même sa position, sans rien émettre vers les satellites.",
            },
            {
              q: "Quel est le système de géolocalisation par satellite de l'Union européenne ?",
              options: [
                "GLONASS",
                "BeiDou",
                "Galileo",
                "GPS",
              ],
              answer: 2,
              why: "Galileo est le système européen ; GPS est américain, GLONASS russe et BeiDou chinois.",
            },
            {
              q: "Comment s'appelle la méthode qui détermine une position à partir de distances ?",
              options: [
                "La triangulation",
                "La trilatération",
                "La projection",
              ],
              answer: 1,
              why: "La trilatération croise des distances ; la triangulation, elle, repose sur la mesure d'angles.",
            },
          ],
          trap: "Croire que les satellites « voient » le téléphone ou reçoivent sa position : le récepteur GPS est passif et calcule seul sa position. Autre erreur : oublier le quatrième satellite, nécessaire pour corriger l'horloge du récepteur.",
          method: "Dans un calcul de distance, gardez des unités cohérentes : avec c = 300 000 km/s et Δt en secondes, la distance est en kilomètres. Vérifiez l'ordre de grandeur : un satellite GPS est à environ 20 000 à 25 000 km du récepteur.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'cartes-itineraires',
          title: "Cartes numériques et calcul d'itinéraire",
          minutes: 30,
          objectives: [
            "Décrire la latitude et la longitude et convertir des coordonnées entre degrés, minutes, secondes et degrés décimaux.",
            "Identifier les différentes couches d'information d'une carte numérique et construire une carte personnalisée.",
            "Modéliser un réseau routier par un graphe pondéré.",
            "Calculer un itinéraire le plus court à l'aide de l'algorithme de Dijkstra.",
          ],
          course: [
            {
              heading: "Latitude et longitude",
              paragraphs: [
                "Pour repérer un point sur la Terre, on utilise deux angles. La latitude indique la position au nord ou au sud de l'équateur : elle va de 0° (équateur) à 90° N (pôle Nord) ou 90° S (pôle Sud). La longitude indique la position à l'est ou à l'ouest du méridien de Greenwich, qui passe près de Londres : elle va de 0° à 180° E ou 180° O. En degrés décimaux, on remplace souvent les lettres par des signes : le sud et l'ouest sont négatifs.",
                "Les coordonnées s'écrivent soit en degrés décimaux (48,8583° N), soit en degrés, minutes et secondes (48° 51′ 30″ N), sachant qu'un degré vaut 60 minutes et qu'une minute vaut 60 secondes. Le GPS utilise un système de référence mondial appelé WGS 84, qui définit précisément la forme de la Terre et l'origine des coordonnées.",
                "Un ordre de grandeur utile : le tour de la Terre en passant par les pôles mesure environ 40 000 km, donc 1° de latitude correspond à environ 40 000 ÷ 360 ≈ 111 km. Un degré de longitude, lui, est de plus en plus court à mesure que l'on s'approche des pôles, où tous les méridiens se rejoignent.",
              ],
              box: { label: "Formule", text: "Degrés décimaux = degrés + minutes ÷ 60 + secondes ÷ 3 600. Exemple : 48° 51′ 30″ = 48 + 51 ÷ 60 + 30 ÷ 3 600 ≈ 48,8583°. Sud et ouest : valeurs négatives." },
            },
            {
              heading: "Les cartes numériques et leurs couches",
              paragraphs: [
                "Une carte numérique n'est pas une simple image : c'est une superposition de couches d'information, que l'on peut afficher ou masquer. Un système d'information géographique (SIG) gère ces couches : fond de carte, photographies aériennes, routes, relief, limites administratives, transports en commun, ou encore des couches thématiques (pistes cyclables, établissements scolaires). Chaque objet est associé à des coordonnées géographiques.",
                "Plusieurs services existent. Le Géoportail, service public de l'IGN (Institut national de l'information géographique et forestière), permet de superposer des cartes, des photographies aériennes et des données publiques. OpenStreetMap, projet collaboratif lancé en 2004, est une carte libre construite par des bénévoles du monde entier, à la manière d'une encyclopédie collaborative. Des entreprises proposent aussi des cartes gratuites pour l'utilisateur, financées notamment par la publicité et l'exploitation des données.",
                "Représenter la Terre, presque sphérique, sur un écran plat impose une projection, qui déforme forcément quelque chose : les surfaces, les angles ou les distances. La projection de Mercator, utilisée par de nombreuses cartes en ligne, conserve les angles mais agrandit fortement les régions proches des pôles : le Groenland y paraît aussi grand que l'Afrique, qui est pourtant environ quatorze fois plus étendue.",
              ],
              box: { label: "Repère", text: "2004 : lancement d'OpenStreetMap, carte collaborative et libre. 2005 : apparition des grands services de cartographie en ligne grand public. En France, l'IGN diffuse ses cartes et données sur le Géoportail." },
            },
            {
              heading: "Le réseau routier vu comme un graphe",
              paragraphs: [
                "Pour calculer un itinéraire, un logiciel modélise le réseau routier par un graphe : les sommets représentent les carrefours (ou les villes), les arêtes représentent les tronçons de route qui les relient. Chaque arête porte un poids : la distance en kilomètres, la durée de parcours estimée, ou un coût (péage, carburant). On parle de graphe pondéré.",
                "Les rues à sens unique sont représentées par des arcs, orientés dans un seul sens : le graphe est alors orienté. Le poids d'une arête peut changer au cours de la journée : une durée de parcours augmente aux heures de pointe. Les applications de navigation mettent à jour ces poids en temps réel à partir des données de trafic, souvent fournies par les téléphones des autres usagers.",
              ],
              box: { label: "Définition", text: "Graphe pondéré : ensemble de sommets reliés par des arêtes portant chacune un poids (distance, durée, coût). La longueur d'un chemin est la somme des poids de ses arêtes." },
            },
            {
              heading: "Trouver le plus court chemin : l'algorithme de Dijkstra",
              paragraphs: [
                "Trouver le meilleur itinéraire, c'est chercher dans le graphe le chemin de poids total minimal entre le départ et l'arrivée. Essayer tous les chemins possibles serait beaucoup trop long sur une vraie carte, qui compte des millions de carrefours. On utilise donc des algorithmes efficaces, dont le plus célèbre a été publié en 1959 par l'informaticien néerlandais Edsger Dijkstra.",
                "Le principe : on attribue au départ la distance 0 et aux autres sommets une distance provisoire infinie. À chaque étape, on choisit, parmi les sommets non encore fixés, celui qui a la plus petite distance provisoire ; on fixe cette distance, puis on met à jour ses voisins : si passer par ce sommet donne une distance plus courte que celle connue, on la remplace et l'on note le sommet d'où l'on vient. On s'arrête quand l'arrivée est fixée, et l'on remonte les prédécesseurs pour lire le chemin.",
                "Le « plus court » dépend du poids choisi : l'itinéraire le plus court en kilomètres n'est pas toujours le plus rapide en minutes, car une autoroute plus longue peut être plus rapide qu'une petite route directe. C'est pourquoi les applications proposent plusieurs critères (plus rapide, plus court, sans péage).",
              ],
              box: { label: "À retenir", text: "Algorithme de Dijkstra : départ à 0, autres sommets à l'infini ; fixer le sommet de plus petite distance provisoire ; mettre à jour ses voisins ; recommencer jusqu'à l'arrivée ; remonter les prédécesseurs." },
            },
          ],
          keyPoints: [
            "Latitude : de 90° S à 90° N par rapport à l'équateur ; longitude : de 180° O à 180° E par rapport au méridien de Greenwich.",
            "Degrés décimaux = degrés + minutes ÷ 60 + secondes ÷ 3 600 ; sud et ouest sont négatifs.",
            "1° de latitude correspond à environ 111 km.",
            "Une carte numérique superpose des couches (fond, routes, photos aériennes, relief...) gérées par un SIG.",
            "Un réseau routier se modélise par un graphe pondéré : sommets = carrefours, arêtes = tronçons, poids = distance ou durée.",
            "L'algorithme de Dijkstra (1959) calcule le plus court chemin dans un graphe pondéré.",
          ],
          example: {
            statement: "Les coordonnées approchées de la tour Eiffel sont 48° 51′ 30″ N et 2° 17′ 40″ E. Convertissez-les en degrés décimaux (arrondis au dix-millième).",
            solution: [
              "Latitude : 48 + 51 ÷ 60 + 30 ÷ 3 600 = 48 + 0,85 + 0,008 33... = 48,858 33...",
              "Arrondi au dix-millième : 48,8583° N, soit 48,8583 (positif, car au nord).",
              "Longitude : 2 + 17 ÷ 60 + 40 ÷ 3 600 = 2 + 0,283 33... + 0,011 11... = 2,294 44...",
              "Arrondi au dix-millième : 2,2944° E, soit 2,2944 (positif, car à l'est).",
              "Réponse : (48,8583 ; 2,2944).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "(1) Convertissez en degrés décimaux, arrondis au centième : 43° 18′ N. (2) Convertissez en degrés, minutes et secondes : 45,764° N. (3) Un point a pour coordonnées décimales (-33,87 ; 151,21). Est-il dans l'hémisphère Nord ou Sud ? À l'est ou à l'ouest de Greenwich ?",
              hint: "Pour passer des degrés décimaux aux minutes, multipliez la partie décimale par 60 ; recommencez avec la partie décimale des minutes pour obtenir les secondes.",
              solution: [
                "(1) 43 + 18 ÷ 60 = 43 + 0,3 = 43,30° N.",
                "(2) Partie entière : 45°. Partie décimale : 0,764 × 60 = 45,84′, donc 45 minutes. Reste 0,84 × 60 = 50,4″, soit environ 50 secondes. Résultat : 45° 45′ 50″ N.",
                "(3) La latitude est négative : le point est dans l'hémisphère Sud. La longitude est positive : il est à l'est de Greenwich.",
                "Résultat : 43,30° ; 45° 45′ 50″ N ; hémisphère Sud, à l'est de Greenwich.",
              ],
            },
            {
              level: 2,
              statement: "(1) Deux points (données fictives) sont situés sur le même méridien, aux latitudes 47,00° N et 45,50° N. Estimez la distance qui les sépare, en prenant 1° de latitude ≈ 111 km. (2) Une carte numérique affiche une échelle de 1/25 000. Sur l'écran imprimé, un sentier mesure 6 cm. Quelle est sa longueur réelle ? (3) Un téléphone affiche une position avec quatre chiffres après la virgule en degrés décimaux. Quel est, en latitude, l'écart représenté par 0,0001° ? Est-ce cohérent avec la précision d'un GPS grand public ?",
              hint: "Pour une échelle 1/25 000, 1 cm sur la carte représente 25 000 cm en réalité. Pour la question 3, multipliez 0,0001 par 111 km, puis convertissez en mètres.",
              solution: [
                "(1) Écart de latitude : 47,00 - 45,50 = 1,50°. Distance : 1,50 × 111 = 166,5 km, soit environ 167 km.",
                "(2) 6 × 25 000 = 150 000 cm = 1 500 m = 1,5 km.",
                "(3) 0,0001 × 111 km = 0,0111 km = 11,1 m. Quatre décimales donnent donc une précision d'environ 11 m en latitude, du même ordre que la précision d'un GPS grand public (quelques mètres) : afficher davantage de décimales ne rendrait pas la position plus juste.",
                "Résultat : environ 167 km ; 1,5 km ; environ 11 m, ordre de grandeur cohérent.",
              ],
            },
            {
              level: 3,
              statement: "Un réseau routier est modélisé par un graphe (données fictives). Les sommets sont A, B, C, D, E ; les arêtes et leurs durées en minutes sont : A-B : 4 ; A-C : 2 ; B-C : 1 ; B-D : 5 ; C-D : 8 ; C-E : 10 ; D-E : 2. (1) Calculez la durée de trois chemins de A à E : A-C-E, A-B-D-E et A-C-D-E. (2) Appliquez l'algorithme de Dijkstra depuis A, en détaillant chaque étape. (3) Donnez le chemin le plus rapide de A à E et sa durée.",
              hint: "À chaque étape, fixez le sommet non fixé de plus petite durée provisoire, puis regardez si passer par lui améliore la durée de ses voisins.",
              solution: [
                "(1) A-C-E : 2 + 10 = 12 min. A-B-D-E : 4 + 5 + 2 = 11 min. A-C-D-E : 2 + 8 + 2 = 12 min.",
                "(2) Initialisation : A = 0 ; B, C, D, E = infini. On fixe A (0). Voisins : B = 4 (venant de A), C = 2 (venant de A).",
                "On fixe C (2), la plus petite durée. Mises à jour : B par C = 2 + 1 = 3 < 4, donc B = 3 (venant de C) ; D par C = 2 + 8 = 10 ; E par C = 2 + 10 = 12.",
                "On fixe B (3). Mise à jour : D par B = 3 + 5 = 8 < 10, donc D = 8 (venant de B). On fixe ensuite D (8). Mise à jour : E par D = 8 + 2 = 10 < 12, donc E = 10 (venant de D). On fixe E (10) : c'est l'arrivée.",
                "(3) On remonte les prédécesseurs : E vient de D, D de B, B de C, C de A. Chemin : A-C-B-D-E, durée 2 + 1 + 5 + 2 = 10 min.",
                "Résultat : le chemin le plus rapide est A-C-B-D-E, en 10 minutes, plus rapide que les trois chemins de la question 1 (11 et 12 min).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Latitude", right: "Angle qui situe un point au nord ou au sud de l'équateur" },
              { left: "Longitude", right: "Angle qui situe un point à l'est ou à l'ouest du méridien de Greenwich" },
              { left: "SIG", right: "Système qui gère et superpose des couches d'information géographique" },
              { left: "Graphe pondéré", right: "Sommets reliés par des arêtes portant chacune un poids" },
              { left: "Algorithme de Dijkstra", right: "Méthode de calcul du plus court chemin dans un graphe pondéré" },
              { left: "Projection", right: "Transformation de la surface de la Terre en une carte plane" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la valeur décimale de 30° 30′ ?",
              options: [
                "30,30°",
                "30,5°",
                "30,05°",
                "30,3°",
              ],
              answer: 1,
              why: "30′ = 30 ÷ 60 = 0,5°, donc 30° 30′ = 30,5°. Les minutes ne sont pas des centièmes de degré.",
            },
            {
              q: "Dans le graphe d'un réseau routier, que représente un sommet ?",
              options: [
                "Un carrefour ou une ville",
                "La durée d'un trajet",
                "Un tronçon de route entre deux carrefours",
                "Le poids d'un chemin",
              ],
              answer: 0,
              why: "Les sommets sont les carrefours (ou les villes) ; les arêtes sont les tronçons, et leurs poids les distances ou les durées.",
            },
            {
              q: "Un point a une longitude de -3,2°. Où se trouve-t-il ?",
              options: [
                "Au sud de l'équateur, dans l'hémisphère Sud",
                "À l'est du méridien de Greenwich",
                "Sur l'équateur",
                "À l'ouest du méridien de Greenwich",
              ],
              answer: 3,
              why: "Une longitude négative correspond à l'ouest du méridien de Greenwich.",
            },
            {
              q: "À combien de kilomètres correspond environ 1° de latitude ?",
              options: [
                "1 km",
                "40 km",
                "111 km",
                "360 km",
              ],
              answer: 2,
              why: "Le tour de la Terre par les pôles mesure environ 40 000 km ; 40 000 ÷ 360 ≈ 111 km.",
            },
            {
              q: "Dans l'algorithme de Dijkstra, quel sommet fixe-t-on à chaque étape ?",
              options: [
                "Le sommet qui a le plus de voisins",
                "Le sommet non fixé de plus petite distance provisoire",
                "Le sommet le plus proche de l'arrivée, mesuré à vol d'oiseau",
                "Le sommet choisi au hasard",
              ],
              answer: 1,
              why: "On fixe toujours le sommet non encore fixé dont la distance provisoire est la plus petite : sa distance ne peut plus diminuer.",
            },
          ],
          trap: "Lire les minutes comme des centièmes de degré : 48° 30′ vaut 48,5° et non 48,30°, car une minute est un soixantième de degré. Dans l'algorithme de Dijkstra, autre erreur fréquente : fixer un sommet dès qu'on l'atteint, au lieu de choisir à chaque étape le sommet de plus petite distance provisoire.",
          method: "Pour appliquer l'algorithme de Dijkstra, dressez un tableau avec une colonne par sommet et une ligne par étape ; notez dans chaque case « distance (prédécesseur) », et barrez la colonne d'un sommet dès qu'il est fixé. Le chemin se lit à la fin en remontant les prédécesseurs.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'nmea-vie-privee',
          title: 'Trames NMEA et protection de la vie privée',
          minutes: 30,
          objectives: [
            "Décoder une trame NMEA pour trouver des coordonnées géographiques.",
            "Convertir une latitude et une longitude données en degrés et minutes décimales en degrés décimaux.",
            "Identifier les données de géolocalisation comme des données personnelles et les risques qu'elles présentent.",
            "Régler les paramètres de géolocalisation d'un smartphone pour protéger sa vie privée.",
          ],
          course: [
            {
              heading: "Le langage des récepteurs : les trames NMEA",
              paragraphs: [
                "Un récepteur GNSS transmet ses résultats à l'appareil qui l'utilise (téléphone, ordinateur de bord, boîtier) sous forme de lignes de texte appelées trames, selon la norme NMEA 0183, définie par une association américaine d'électronique marine (National Marine Electronics Association). Chaque trame est une ligne de caractères qui commence par le symbole $ et dont les champs sont séparés par des virgules, un peu comme une ligne de fichier CSV.",
                "Le premier mot de la trame indique sa source et son type. Les deux premières lettres désignent le système : GP pour le GPS, GL pour GLONASS, GA pour Galileo, GN quand plusieurs systèmes sont combinés. Les trois lettres suivantes indiquent le type de trame : GGA donne la position et la qualité de la mesure, RMC les informations minimales de navigation (position, vitesse, date). La trame se termine par un astérisque suivi d'une somme de contrôle en hexadécimal, qui permet de détecter une erreur de transmission.",
              ],
              box: { label: "Définition", text: "Trame NMEA : ligne de texte émise par un récepteur GNSS, qui commence par $, dont les champs sont séparés par des virgules et qui se termine par * suivi d'une somme de contrôle. Exemple de type : GGA (position et qualité de la mesure)." },
            },
            {
              heading: "Décoder une trame GGA",
              paragraphs: [
                "Prenons la trame classique : $GPGGA,123519,4807.038,N,01131.000,E,1,08,0.9,545.4,M,46.9,M,,*47. Les champs se lisent dans l'ordre : l'heure UTC de la mesure (123519, soit 12 h 35 min 19 s), la latitude (4807.038) et son hémisphère (N), la longitude (01131.000) et son côté (E), la qualité du positionnement (1 : position GPS valide ; 0 : pas de position), le nombre de satellites utilisés (08), un indicateur de précision horizontale (0.9 : plus il est petit, meilleure est la géométrie des satellites), puis l'altitude (545.4 M, en mètres).",
                "Attention au format des coordonnées : la latitude est écrite ddmm.mmm (deux chiffres de degrés, puis les minutes avec des décimales) et la longitude dddmm.mmm (trois chiffres de degrés). Ici, 4807.038 signifie 48 degrés et 7,038 minutes ; 01131.000 signifie 11 degrés et 31,000 minutes. Pour obtenir des degrés décimaux, on divise les minutes par 60 : 48 + 7,038 ÷ 60 ≈ 48,1173° et 11 + 31 ÷ 60 ≈ 11,5167°.",
                "Les lettres S et O (W en anglais, pour West) rendent la coordonnée négative : 2253.400,S donne -22,89°. L'heure est en temps universel (UTC) : en France, il faut ajouter 1 h en hiver et 2 h en été pour obtenir l'heure légale.",
              ],
              box: { label: "Formule", text: "Latitude ddmm.mmm → dd + mm.mmm ÷ 60 ; longitude dddmm.mmm → ddd + mm.mmm ÷ 60. S et W (ouest) : valeur négative. Exemple : 4807.038,N → 48 + 7,038 ÷ 60 ≈ 48,1173°." },
            },
            {
              heading: "La géolocalisation, une donnée personnelle très révélatrice",
              paragraphs: [
                "Le récepteur GNSS calcule la position sans l'émettre, mais les applications installées sur le téléphone peuvent la lire et l'envoyer sur Internet. D'autres acteurs peuvent aussi situer un téléphone : l'opérateur mobile connaît les antennes relais auxquelles il se connecte, et la liste des réseaux Wi-Fi visibles permet une localisation approximative. La position d'une personne est une donnée personnelle au sens du RGPD.",
                "Une position isolée dit peu de chose ; un historique de positions en dit énormément. Le lieu où le téléphone passe ses nuits révèle le domicile ; celui où il passe ses journées, le lieu de travail ou le lycée. Des passages réguliers dans un hôpital, un lieu de culte ou le siège d'un parti peuvent révéler des informations sensibles (santé, religion, opinions). Les photos ajoutent un autre risque : leurs métadonnées EXIF contiennent souvent les coordonnées GPS de la prise de vue.",
              ],
              box: { label: "À retenir", text: "Les données de géolocalisation sont des données personnelles. Croisées dans le temps, elles révèlent le domicile, les habitudes et parfois des informations sensibles. Le RGPD impose d'informer les personnes et, en règle générale, de recueillir leur consentement." },
            },
            {
              heading: "Protéger sa vie privée",
              paragraphs: [
                "Les systèmes des smartphones permettent de choisir, application par application, l'accès à la position : jamais, uniquement pendant l'utilisation de l'application, ou toujours. Une bonne habitude consiste à n'accorder l'accès qu'aux applications qui en ont vraiment besoin (navigation, météo locale) et à préférer l'option « pendant l'utilisation ». On peut aussi consulter et effacer l'historique des positions enregistré par le système ou par certains services.",
                "Avant de publier une photo, on peut désactiver l'enregistrement de la position dans l'appareil photo ou supprimer ses métadonnées. Il faut enfin être prudent avec les publications en temps réel (« je suis à tel endroit en ce moment ») et avec les applications de sport qui partagent les parcours : un trajet qui commence et se termine toujours au même endroit désigne le domicile. En France, la CNIL peut être saisie en cas d'utilisation abusive des données personnelles.",
              ],
            },
          ],
          keyPoints: [
            "Une trame NMEA commence par $, ses champs sont séparés par des virgules, elle finit par * et une somme de contrôle.",
            "GP = GPS, GL = GLONASS, GA = Galileo, GN = plusieurs systèmes ; GGA = position et qualité de la mesure.",
            "Latitude ddmm.mmm et longitude dddmm.mmm : degrés + minutes ÷ 60 ; S et W donnent des valeurs négatives.",
            "L'heure d'une trame est en UTC : +1 h en hiver, +2 h en été pour l'heure légale française.",
            "La géolocalisation est une donnée personnelle : un historique révèle domicile, habitudes, informations sensibles.",
            "Se protéger : permissions « pendant l'utilisation », historique effacé, métadonnées des photos supprimées.",
          ],
          example: {
            statement: "Décodez la trame $GPGGA,123519,4807.038,N,01131.000,E,1,08,0.9,545.4,M,46.9,M,,*47 : système utilisé, heure, latitude et longitude en degrés décimaux (au dix-millième), validité de la mesure, nombre de satellites et altitude.",
            solution: [
              "$GPGGA : GP signifie GPS, GGA indique une trame de position.",
              "Heure : 123519, soit 12 h 35 min 19 s UTC.",
              "Latitude : 4807.038,N = 48° et 7,038′ ; 48 + 7,038 ÷ 60 = 48 + 0,1173 = 48,1173° (positive, car N).",
              "Longitude : 01131.000,E = 11° et 31,000′ ; 11 + 31 ÷ 60 = 11 + 0,516 67... ≈ 11,5167° (positive, car E).",
              "Qualité 1 : position valide ; 08 satellites utilisés ; altitude 545,4 m.",
              "Réponse : GPS, 12 h 35 min 19 s UTC, (48,1173 ; 11,5167), mesure valide, 8 satellites, 545,4 m.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un récepteur émet la trame fictive suivante : $GPGGA,083015.00,4851.400,N,00221.000,E,1,07,1.1,35.0,M,47.0,M,,*5C. (1) À quelle heure UTC la mesure a-t-elle été faite ? (2) Donnez la latitude et la longitude en degrés et minutes. (3) Convertissez-les en degrés décimaux (au dix-millième). (4) Combien de satellites ont été utilisés ? La position est-elle valide ?",
              hint: "La latitude occupe deux chiffres de degrés (48), la longitude trois (002). Le reste correspond aux minutes.",
              solution: [
                "(1) 083015.00 : 8 h 30 min 15 s UTC.",
                "(2) Latitude 4851.400,N : 48° 51,400′ N. Longitude 00221.000,E : 2° 21,000′ E.",
                "(3) Latitude : 48 + 51,4 ÷ 60 = 48 + 0,856 67... ≈ 48,8567°. Longitude : 2 + 21 ÷ 60 = 2 + 0,35 = 2,3500°.",
                "(4) Le champ après la longitude vaut 1 : la position est valide. Le champ suivant indique 07 satellites.",
                "Résultat : 8 h 30 min 15 s UTC ; (48,8567 ; 2,3500) ; 7 satellites ; position valide.",
              ],
            },
            {
              level: 2,
              statement: "Voici deux trames fictives. Trame 1 : $GPGGA,154210.00,2253.400,S,04310.200,W,1,09,0.8,12.0,M,-5.0,M,,*4C. Trame 2 : $GPGGA,101500.00,4336.270,N,00126.640,E,0,00,99.9,,M,,M,,*61. (1) Décodez la trame 1 : heure UTC, latitude et longitude en degrés décimaux (au centième), avec leur signe. Dans quels hémisphères se trouve ce point ? (2) Que peut-on dire de la trame 2 ? Peut-on utiliser ses coordonnées ? Justifiez avec deux champs.",
              hint: "S et W rendent les coordonnées négatives. Pour la trame 2, regardez le champ de qualité et le nombre de satellites.",
              solution: [
                "(1) Heure : 15 h 42 min 10 s UTC. Latitude : 2253.400,S = 22° 53,4′ ; 22 + 53,4 ÷ 60 = 22 + 0,89 = 22,89, négative car au sud : -22,89°.",
                "Longitude : 04310.200,W = 43° 10,2′ ; 43 + 10,2 ÷ 60 = 43 + 0,17 = 43,17, négative car à l'ouest : -43,17°. Le point est dans l'hémisphère Sud et à l'ouest de Greenwich : (-22,89 ; -43,17).",
                "(2) Dans la trame 2, le champ de qualité vaut 0 (pas de position calculée) et le nombre de satellites vaut 00 ; l'indicateur de précision est à 99.9 et l'altitude est vide.",
                "Les champs de coordonnées contiennent sans doute une ancienne position ou une valeur sans signification : il ne faut pas les utiliser.",
                "Résultat : (-22,89 ; -43,17), hémisphère Sud et ouest ; trame 2 inutilisable car le récepteur n'a pas de position valide.",
              ],
            },
            {
              level: 3,
              statement: "Une application de course à pied publie les parcours de ses utilisateurs sur un profil public. Pour un utilisateur (données fictives), tous les parcours de la semaine commencent et se terminent entre 6 h 40 et 6 h 50 UTC au point de la trame $GPGGA,064530.00,4545.840,N,00450.160,E,1,06,1.3,170.0,M,49.0,M,,*6D. Ses photos de course, publiées avec leurs métadonnées, sont toutes prises dans le même parc. (1) Décodez la position (au millième) et l'heure de la trame, puis donnez l'heure légale en France en été. (2) Quelles informations une personne malveillante peut-elle en déduire ? (3) Proposez trois mesures concrètes pour limiter ce risque. (4) Selon le RGPD, quelles obligations l'application doit-elle respecter ?",
              hint: "Un point de départ et d'arrivée qui ne change jamais, à heure fixe, désigne souvent le domicile. Pensez aux permissions, à la visibilité du profil et aux métadonnées EXIF.",
              solution: [
                "(1) Latitude : 4545.840,N = 45 + 45,84 ÷ 60 = 45 + 0,764 = 45,764°. Longitude : 00450.160,E = 4 + 50,16 ÷ 60 = 4 + 0,836 = 4,836°. Heure : 6 h 45 min 30 s UTC, soit 8 h 45 min 30 s en heure légale d'été (UTC + 2 h).",
                "(2) Un parcours qui commence et finit toujours au même endroit désigne très probablement le domicile. L'horaire régulier révèle à quel moment la personne est absente de chez elle, et les photos du parc indiquent où la trouver. Ces informations facilitent un cambriolage ou une filature.",
                "(3) Mettre le profil en mode privé ou réservé à des abonnés choisis ; utiliser la fonction qui masque le début et la fin des parcours autour du domicile (ou démarrer l'enregistrement plus loin) ; supprimer les métadonnées de position des photos avant publication, ou désactiver la géolocalisation de l'appareil photo.",
                "(4) La position est une donnée personnelle : l'application doit informer clairement l'utilisateur de l'usage de ses données, recueillir son consentement pour les traitements qui l'exigent, ne collecter que les données nécessaires, les protéger, et lui permettre d'y accéder, de les rectifier et de les supprimer. La CNIL peut être saisie en cas de manquement.",
                "Conclusion : quelques trames suffisent à reconstituer les habitudes d'une personne ; la protection passe par les réglages de l'utilisateur et par les obligations légales de l'application.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Trames NMEA et vie privée.",
            statements: [
              { text: "Dans une trame NMEA, la latitude 4807.038 signifie 48,07038°.", true: false, why: "C'est 48° et 7,038 minutes, soit 48 + 7,038 ÷ 60 ≈ 48,1173°." },
              { text: "Une trame GGA dont le champ de qualité vaut 0 ne fournit pas de position valide.", true: true, why: "0 signifie que le récepteur n'a pas calculé de position ; 1 indique une position GPS valide." },
              { text: "L'heure indiquée dans une trame NMEA est l'heure légale française.", true: false, why: "C'est l'heure UTC : il faut ajouter 1 h en hiver et 2 h en été." },
              { text: "La lettre W dans une trame rend la longitude négative.", true: true, why: "W (West) signifie ouest ; en degrés décimaux, l'ouest est négatif." },
              { text: "Un historique de positions peut révéler l'adresse du domicile.", true: true, why: "Le lieu où le téléphone passe ses nuits ou où commencent les trajets désigne le plus souvent le domicile." },
              { text: "Les satellites GPS enregistrent la position de chaque téléphone.", true: false, why: "Le récepteur est passif ; ce sont les applications qui peuvent transmettre la position par Internet." },
              { text: "Une photo publiée peut révéler le lieu où elle a été prise.", true: true, why: "Les métadonnées EXIF contiennent souvent les coordonnées GPS de la prise de vue." },
            ],
          },
          quiz: [
            {
              q: "Dans une trame GGA, que vaut en degrés décimaux la longitude 00230.000,E ?",
              options: [
                "2,30°",
                "-2,5°",
                "230°",
                "2,5°",
              ],
              answer: 3,
              why: "002 degrés et 30,000 minutes : 2 + 30 ÷ 60 = 2,5°, positif car à l'est.",
            },
            {
              q: "Que signifient les deux lettres GP au début de « $GPGGA » ?",
              options: [
                "Le système GPS",
                "Une position géographique précise",
                "Une trame de type « grande précision »",
                "Le nom du fabricant du récepteur",
              ],
              answer: 0,
              why: "Les deux premières lettres désignent le système : GP pour le GPS, GA pour Galileo, GL pour GLONASS, GN pour plusieurs systèmes.",
            },
            {
              q: "Une trame indique 193000 en heure UTC, un jour de juillet. Quelle heure est-il en France ?",
              options: [
                "19 h 30",
                "20 h 30",
                "21 h 30",
                "17 h 30",
              ],
              answer: 2,
              why: "En été, l'heure légale française est en avance de 2 h sur l'heure UTC : 19 h 30 + 2 h = 21 h 30.",
            },
            {
              q: "Quelle option de localisation protège le mieux la vie privée pour une application de météo ?",
              options: [
                "Toujours autoriser l'accès à la position, même en arrière-plan",
                "Autoriser l'accès pendant l'utilisation seulement",
                "Activer l'historique des positions",
                "Partager sa position en temps réel",
              ],
              answer: 1,
              why: "L'application obtient la position quand on l'utilise, mais ne peut pas suivre la personne le reste du temps.",
            },
            {
              q: "Pourquoi un historique de positions est-il une donnée sensible ?",
              options: [
                "Parce qu'il occupe beaucoup de mémoire",
                "Parce qu'il ralentit le récepteur GPS",
                "Parce qu'il révèle les habitudes",
                "Parce qu'il n'est pas au format CSV",
              ],
              answer: 2,
              why: "Croisées dans le temps, les positions révèlent le domicile, le lieu de travail et parfois la santé, la religion ou les opinions.",
            },
          ],
          trap: "Lire 4807.038 comme 48,07038° : dans une trame NMEA, les chiffres après les degrés sont des minutes, qu'il faut diviser par 60. Autres oublis fréquents : le signe négatif pour S et W, et le décalage horaire entre l'heure UTC et l'heure légale.",
          method: "Pour décoder une trame, recopiez-la en numérotant ses champs (séparés par des virgules) avant de les interpréter, puis isolez les degrés (2 chiffres pour la latitude, 3 pour la longitude) par un trait vertical : 48|07.038. Contrôlez enfin la vraisemblance du lieu obtenu sur une carte.",
        },
      ],
    },
    /* ==================================================================== */
    /* INFORMATIQUE EMBARQUÉE ET OBJETS CONNECTÉS                             */
    /* ==================================================================== */
    {
      id: 'objets-connectes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'systemes-embarques',
          title: 'Les systèmes informatiques embarqués',
          minutes: 25,
          objectives: [
            "Définir un système informatique embarqué et en citer des exemples de la vie courante.",
            "Identifier les composants d'un système embarqué : capteurs, unité de traitement, actionneurs, interface homme-machine.",
            "Expliquer les contraintes propres aux systèmes embarqués, dont le temps réel.",
            "Situer les grandes étapes de l'histoire de l'informatique embarquée et les enjeux des objets connectés.",
          ],
          course: [
            {
              heading: "Des ordinateurs cachés dans les objets",
              paragraphs: [
                "Un système informatique embarqué est un système informatique intégré à un objet, et le plus souvent dédié à une tâche précise : commander le cycle d'un lave-linge, déclencher un airbag, régler la température d'une pièce, compter les pas d'un marcheur. Contrairement à un ordinateur personnel, qui sert à tout (écrire, jouer, naviguer sur le Web), le système embarqué fait une chose, et doit la faire bien, souvent sans que l'utilisateur ait conscience de sa présence.",
                "On en trouve partout : dans l'électroménager, les téléphones, les montres, les jouets, les ascenseurs, les distributeurs de billets, les dispositifs médicaux (pompe à insuline, stimulateur cardiaque), les trains et les avions. Une voiture récente en contient plusieurs dizaines : antiblocage des roues (ABS), contrôle de trajectoire, gestion du moteur, airbags, aide au stationnement.",
              ],
              box: { label: "Définition", text: "Système informatique embarqué : système informatique intégré à un objet, généralement dédié à une tâche, qui interagit avec le monde physique grâce à des capteurs et des actionneurs." },
            },
            {
              heading: "Comment est construit un système embarqué",
              paragraphs: [
                "Un système embarqué suit toujours la même logique : acquérir des informations, les traiter, agir. Les capteurs mesurent des grandeurs du monde physique (température, lumière, vitesse, pression) ; l'unité de traitement, souvent un microcontrôleur, exécute un programme qui décide quoi faire ; les actionneurs agissent sur le monde (moteur, chauffage, voyant, haut-parleur). Cette boucle se répète en permanence, des milliers de fois par seconde parfois.",
                "Le microcontrôleur réunit sur une seule puce un processeur, de la mémoire et des circuits d'entrées et de sorties pour dialoguer avec les capteurs et les actionneurs. Le programme qu'il exécute, enregistré dans sa mémoire, s'appelle le micrologiciel (en anglais firmware). Une interface homme-machine (IHM) permet à l'utilisateur de dialoguer avec le système : boutons, écran, voyants, commande vocale ou application sur un smartphone.",
              ],
              box: { label: "À retenir", text: "Acquérir (capteurs), traiter (microcontrôleur et son programme), agir (actionneurs) ; l'IHM permet le dialogue avec l'utilisateur. Un objet connecté ajoute une fonction : communiquer avec d'autres machines par un réseau." },
            },
            {
              heading: "Des contraintes fortes",
              paragraphs: [
                "Un système embarqué doit souvent fonctionner sur batterie : il doit consommer très peu d'énergie, quitte à se mettre en veille entre deux mesures. Il doit être petit, peu coûteux (il sera fabriqué en millions d'exemplaires) et robuste, car il subit la chaleur, le froid, l'humidité ou les vibrations.",
                "Certains systèmes sont critiques : une erreur peut mettre des vies en danger (freinage, pilotage d'un avion, appareil médical). Ils doivent être particulièrement fiables et testés. Beaucoup sont aussi soumis à une contrainte de temps réel : il ne suffit pas que le résultat soit juste, il doit arriver dans un délai garanti. Un airbag qui se gonflerait une seconde après le choc serait inutile ; la décision doit être prise en quelques dizaines de millisecondes.",
              ],
              box: { label: "Définition", text: "Système temps réel : système qui doit produire sa réponse dans un délai maximal garanti, faute de quoi le résultat, même juste, ne sert plus à rien (airbag, freinage, pilotage)." },
            },
            {
              heading: "Une histoire récente et des enjeux nouveaux",
              paragraphs: [
                "L'informatique embarquée naît dans les années 1960 avec l'ordinateur de guidage des missions spatiales Apollo, conçu pour tenir dans le vaisseau. En 1971, le premier microprocesseur commercial, l'Intel 4004, réunit sur une seule puce les fonctions d'un processeur et ouvre la voie à l'électronique dans les objets de tous les jours. Dans les années 1980, l'Airbus A320 devient le premier avion de ligne à commandes de vol électriques numériques : les gestes du pilote sont transmis à des calculateurs. En 2007, les smartphones tactiles grand public concentrent dans la poche de nombreux capteurs et moyens de communication.",
                "Quand un système embarqué communique par un réseau (Wi-Fi, Bluetooth, réseau mobile, réseaux bas débit à longue portée), on parle d'objet connecté, et l'ensemble de ces objets forme l'Internet des objets (en anglais Internet of Things, IoT). Ces objets posent des questions nouvelles : sécurité (en 2016, le réseau de machines piratées Mirai a utilisé des caméras et des routeurs mal protégés pour saturer de grands sites), vie privée (une enceinte ou une caméra connectée capte des informations sur la vie du foyer), durée de vie et consommation de ressources.",
              ],
              box: { label: "Repère", text: "Années 1960 : ordinateur de guidage des missions Apollo. 1971 : Intel 4004, premier microprocesseur commercial. Années 1980 : Airbus A320, premières commandes de vol électriques numériques sur un avion de ligne. 2007 : essor des smartphones tactiles." },
            },
          ],
          keyPoints: [
            "Un système embarqué est un système informatique intégré à un objet et dédié à une tâche.",
            "Il acquiert (capteurs), traite (microcontrôleur et micrologiciel) et agit (actionneurs) ; l'IHM sert au dialogue avec l'utilisateur.",
            "Contraintes : faible consommation, petite taille, faible coût, robustesse, fiabilité, souvent temps réel.",
            "Temps réel : la réponse doit arriver dans un délai garanti.",
            "Un objet connecté est un système embarqué qui communique par un réseau ; ensemble : l'Internet des objets.",
            "Repères : Apollo (années 1960), Intel 4004 (1971), Airbus A320 (années 1980), smartphones (2007).",
          ],
          example: {
            statement: "Un thermostat connecté mesure la température d'une pièce, allume ou éteint la chaudière, affiche la température sur un petit écran tactile et peut être réglé à distance depuis une application. Identifiez ses capteurs, son unité de traitement, ses actionneurs, son IHM, son moyen de communication, et une contrainte qu'il doit respecter.",
            solution: [
              "Capteur : une sonde de température (éventuellement un capteur de présence).",
              "Unité de traitement : un microcontrôleur, qui compare la température mesurée à la consigne et décide d'allumer ou d'éteindre la chaudière.",
              "Actionneur : le relais (interrupteur commandé) qui met en marche ou arrête la chaudière.",
              "IHM : l'écran tactile (entrée et sortie) et l'application sur smartphone.",
              "Communication : une liaison Wi-Fi vers la box Internet, qui permet le réglage à distance.",
              "Contrainte : fonctionner en continu de façon fiable et consommer peu ; s'il est piloté à distance, être protégé contre les accès non autorisés.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque objet, dites s'il contient un système informatique embarqué, et si oui, s'il s'agit d'un objet connecté : (a) un lave-linge programmable sans accès au réseau ; (b) un grille-pain mécanique à minuterie à ressort ; (c) une montre qui compte les pas et envoie les données au téléphone ; (d) un ordinateur portable ; (e) une serrure qui s'ouvre depuis une application.",
              hint: "Un système embarqué est dédié à une tâche et intégré à l'objet. Il est connecté s'il communique par un réseau (Wi-Fi, Bluetooth...).",
              solution: [
                "(a) Système embarqué (il gère les programmes de lavage) mais non connecté.",
                "(b) Aucun système informatique : la minuterie est purement mécanique.",
                "(c) Système embarqué connecté : elle communique avec le téléphone, par exemple en Bluetooth.",
                "(d) Ce n'est pas un système embarqué : c'est un ordinateur généraliste, qui sert à de nombreuses tâches.",
                "(e) Système embarqué connecté : la serrure reçoit des ordres par un réseau.",
                "Résultat : embarqués non connectés (a) ; embarqués connectés (c), (e) ; pas de système embarqué (b), (d).",
              ],
            },
            {
              level: 2,
              statement: "(1) Une voiture roule à 54 km/h lorsqu'elle percute un obstacle. Le système de l'airbag met 30 ms (0,030 s) à détecter le choc et à décider de déclencher le gonflage. Quelle distance la voiture aurait-elle parcourue à vitesse constante pendant ce temps ? Pourquoi parle-t-on de contrainte de temps réel ? (2) Une montre connectée possède une batterie de 300 mAh. Allumée en permanence, elle consomme en moyenne 10 mA. Combien d'heures tient-elle ? En se mettant en veille entre deux mesures, sa consommation moyenne tombe à 2 mA. Combien de temps tient-elle alors, en heures et en jours ?",
              hint: "Convertissez 54 km/h en m/s en divisant par 3,6. Pour la batterie, durée (en h) = capacité (en mAh) ÷ consommation (en mA).",
              solution: [
                "(1) 54 km/h = 54 ÷ 3,6 = 15 m/s. Distance pendant 0,030 s : 15 × 0,030 = 0,45 m, soit 45 cm.",
                "En moins d'un demi-mètre, l'occupant serait projeté vers l'avant : l'airbag doit être gonflé avant. Un résultat juste mais tardif serait inutile, voire dangereux : c'est la définition d'une contrainte de temps réel.",
                "(2) Allumée en permanence : 300 ÷ 10 = 30 h, soit un peu plus d'une journée.",
                "Avec la mise en veille : 300 ÷ 2 = 150 h, soit 150 ÷ 24 = 6,25 jours, environ 6 jours.",
                "Résultat : 45 cm parcourus pendant la décision ; 30 h d'autonomie, puis 150 h (environ 6 jours) avec la mise en veille : la faible consommation est une contrainte majeure des systèmes embarqués.",
              ],
            },
            {
              level: 3,
              statement: "Un robot aspirateur connecté se déplace seul dans un logement. Il possède : un pare-chocs qui détecte les contacts, des capteurs infrarouges sous le châssis qui détectent le vide (escaliers), deux moteurs de roues, une brosse et une turbine d'aspiration, un bouton de mise en marche, une batterie et une connexion Wi-Fi vers une application qui affiche le plan du logement. (1) Classez ces éléments en capteurs, actionneurs, IHM et communication. (2) Décrivez en langage naturel l'algorithme qui évite les chutes et contourne les obstacles. (3) Citez deux contraintes de ce système embarqué. (4) Quel enjeu de vie privée pose le plan du logement envoyé à l'application ?",
              hint: "Pour l'algorithme, écrivez une boucle « répéter indéfiniment » qui teste les capteurs dans l'ordre de priorité : le danger de chute d'abord.",
              solution: [
                "(1) Capteurs : pare-chocs (contact), capteurs infrarouges de vide. Actionneurs : moteurs des roues, brosse, turbine. IHM : bouton de mise en marche et application. Communication : Wi-Fi.",
                "(2) Répéter indéfiniment : si un capteur de vide détecte une marche, arrêter les roues, reculer un peu et tourner ; sinon, si le pare-chocs détecte un contact, reculer un peu et tourner d'un angle choisi ; sinon, avancer tout droit. Le test du vide passe en premier, car la chute est le danger le plus grave.",
                "(3) Autonomie limitée par la batterie, qui impose de consommer peu et de retourner à sa base pour se recharger ; temps de réaction court face au vide (contrainte de temps réel) ; robustesse face aux chocs et à la poussière.",
                "(4) Le plan révèle la taille et l'organisation du logement, et l'activité de l'appareil peut indiquer les horaires de présence. Ces données, envoyées sur des serveurs, peuvent être exploitées commercialement ou piratées : il faut savoir où elles sont stockées, à quoi elles servent, et protéger le compte.",
                "Conclusion : le robot illustre la boucle acquérir, traiter, agir, avec des contraintes d'énergie et de temps réel, et les enjeux de vie privée propres aux objets connectés.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque terme à sa définition.",
            pairs: [
              { left: "Système embarqué", right: "Système informatique intégré à un objet et dédié à une tâche" },
              { left: "Microcontrôleur", right: "Puce qui réunit processeur, mémoire et entrées-sorties" },
              { left: "Micrologiciel", right: "Programme enregistré dans la mémoire d'un système embarqué" },
              { left: "Temps réel", right: "Obligation de répondre dans un délai maximal garanti" },
              { left: "IHM", right: "Moyens de dialogue entre l'utilisateur et la machine" },
              { left: "Internet des objets", right: "Ensemble des objets connectés qui communiquent par des réseaux" },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces appareils n'est pas un système embarqué ?",
              options: [
                "Le calculateur de l'ABS d'une voiture",
                "La carte électronique d'un lave-linge",
                "Un ordinateur de bureau",
                "Un stimulateur cardiaque",
              ],
              answer: 2,
              why: "L'ordinateur de bureau est un ordinateur généraliste ; les autres systèmes sont intégrés à un objet et dédiés à une tâche.",
            },
            {
              q: "Que signifie la contrainte de temps réel ?",
              options: [
                "La réponse doit arriver dans un délai garanti",
                "Le système affiche l'heure exacte en permanence",
                "Le système fonctionne vingt-quatre heures sur vingt-quatre",
                "Le programme est écrit pendant que l'objet fonctionne",
              ],
              answer: 0,
              why: "Un système temps réel doit répondre avant une échéance : un résultat juste mais tardif ne sert à rien.",
            },
            {
              q: "Quel élément d'un système embarqué exécute le programme ?",
              options: [
                "Le capteur",
                "L'actionneur commandé par le programme",
                "La batterie",
                "Le microcontrôleur",
              ],
              answer: 3,
              why: "Le microcontrôleur contient le processeur et la mémoire qui exécutent le micrologiciel.",
            },
            {
              q: "En quelle année est commercialisé le premier microprocesseur, l'Intel 4004 ?",
              options: [
                "1969",
                "1971",
                "1984",
                "2007",
              ],
              answer: 1,
              why: "L'Intel 4004 date de 1971 ; 1969 est l'année du premier pas sur la Lune, 2007 celle de l'essor des smartphones tactiles.",
            },
            {
              q: "Qu'est-ce qui distingue un objet connecté d'un simple système embarqué ?",
              options: [
                "Il possède un écran tactile et une interface vocale",
                "Il fonctionne sur batterie",
                "Il communique avec d'autres machines par un réseau",
                "Il contient un microcontrôleur",
              ],
              answer: 2,
              why: "Un objet connecté est un système embarqué doté d'un moyen de communication (Wi-Fi, Bluetooth, réseau mobile...).",
            },
          ],
          trap: "Croire qu'un système embarqué est forcément connecté, ou qu'un ordinateur portable est un système embarqué : l'embarqué désigne un système dédié, intégré à un objet ; la connexion à un réseau est une fonction en plus. Autre confusion : penser que « temps réel » veut dire « très rapide », alors que cela signifie « dans un délai garanti ».",
          method: "Pour analyser n'importe quel objet, tracez trois colonnes « acquérir, traiter, agir » et ajoutez deux lignes « IHM » et « communication » : remplir ce tableau vous donne une réponse complète et ordonnée.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'capteurs-actionneurs',
          title: 'Capteurs, actionneurs et interfaces homme-machine',
          minutes: 30,
          objectives: [
            "Identifier les capteurs et les actionneurs d'un objet et la grandeur physique qu'ils mesurent ou sur laquelle ils agissent.",
            "Expliquer le rôle de la conversion analogique-numérique et calculer le nombre de valeurs possibles selon le nombre de bits.",
            "Identifier des algorithmes de contrôle des comportements physiques à travers les données des capteurs, l'IHM et les actions des actionneurs.",
            "Décrire les éléments d'une interface homme-machine simple.",
          ],
          course: [
            {
              heading: "Les capteurs : mesurer le monde physique",
              paragraphs: [
                "Un capteur transforme une grandeur physique (température, lumière, son, mouvement, distance, pression) en un signal électrique que le système peut traiter. Quelques exemples : une thermistance pour la température, une photorésistance ou une photodiode pour la lumière, un microphone pour le son, un accéléromètre pour les mouvements et l'orientation (il détecte qu'un téléphone est tourné ou qu'une montre est secouée), un capteur à ultrasons pour une distance, un capteur infrarouge pour une présence.",
                "Certains capteurs ne donnent que deux états : un bouton est appuyé ou non, une porte est ouverte ou fermée. On parle de capteur logique, ou tout ou rien. D'autres donnent une valeur qui varie de façon continue, comme une température : on parle de capteur analogique.",
              ],
              box: { label: "Définition", text: "Capteur : dispositif qui transforme une grandeur physique en un signal électrique exploitable par un système informatique. Il peut être logique (deux états) ou analogique (valeur continue)." },
            },
            {
              heading: "De la mesure au nombre : la conversion analogique-numérique",
              paragraphs: [
                "Un microcontrôleur ne traite que des nombres. Le signal d'un capteur analogique, une tension qui varie de façon continue, doit donc être converti en nombre entier par un convertisseur analogique-numérique (CAN). Ce convertisseur prend des mesures à intervalles réguliers (on parle d'échantillonnage) et associe à chaque mesure un nombre entier.",
                "Le nombre de bits du convertisseur fixe le nombre de valeurs possibles : avec n bits, on dispose de 2ⁿ valeurs. Un convertisseur sur 8 bits donne 2⁸ = 256 valeurs (de 0 à 255) ; sur 10 bits, 2¹⁰ = 1 024 valeurs (de 0 à 1 023). Plus le nombre de bits est grand, plus la mesure est fine. Par exemple, la carte micro:bit lit la tension d'une broche (entre 0 et 3,3 V) sous la forme d'un entier de 0 à 1 023.",
              ],
              box: { label: "Formule", text: "Avec un convertisseur sur n bits, on obtient 2ⁿ valeurs entières, de 0 à 2ⁿ - 1. Exemples : 8 bits, 256 valeurs (0 à 255) ; 10 bits, 1 024 valeurs (0 à 1 023)." },
            },
            {
              heading: "Les actionneurs : agir sur le monde",
              paragraphs: [
                "Un actionneur fait le chemin inverse : il transforme un ordre du système, sous forme de signal électrique, en une action physique. Un moteur produit un mouvement (roues d'un robot, store électrique), un servomoteur tourne d'un angle précis (gouvernail, barrière), une LED produit de la lumière, un haut-parleur ou un buzzer du son, une résistance chauffante de la chaleur, un vibreur une vibration.",
                "Le microcontrôleur fournit des signaux trop faibles pour alimenter directement les actionneurs puissants : un relais ou un circuit de commande sert d'intermédiaire, comme un interrupteur que le programme actionne. C'est ainsi qu'une petite carte peut commander une chaudière ou l'éclairage d'une rue.",
              ],
              box: { label: "Définition", text: "Actionneur : dispositif qui transforme un ordre électrique du système en action physique (mouvement, lumière, son, chaleur). Exemples : moteur, servomoteur, LED, haut-parleur, résistance chauffante." },
            },
            {
              heading: "L'IHM et les algorithmes de contrôle",
              paragraphs: [
                "L'interface homme-machine (IHM) regroupe les moyens par lesquels l'utilisateur dialogue avec l'objet : en entrée, les boutons, l'écran tactile, la commande vocale ou une application sur smartphone ; en sortie, l'écran, les voyants, les sons, les vibrations. Une bonne IHM est simple : l'utilisateur doit comprendre sans notice ce que fait l'objet et comment le régler.",
                "Le programme relie capteurs et actionneurs. L'algorithme le plus simple compare une mesure à un seuil : si la luminosité est inférieure au seuil, allumer l'éclairage ; sinon, l'éteindre. Mais avec un seuil unique, un chauffage réglé sur 20 °C s'allumerait et s'éteindrait sans arrêt dès que la température oscille autour de 20 °C. On utilise donc deux seuils : allumer en dessous de 19 °C, éteindre au-dessus de 21 °C, et ne rien changer entre les deux. Ce principe s'appelle l'hystérésis.",
              ],
              box: { label: "À retenir", text: "Contrôle par seuil : si mesure < seuil alors agir, sinon arrêter. Avec deux seuils (hystérésis), on n'allume que sous le seuil bas et on n'éteint qu'au-dessus du seuil haut : l'état ne change pas entre les deux." },
            },
          ],
          keyPoints: [
            "Un capteur transforme une grandeur physique en signal électrique ; un actionneur transforme un ordre électrique en action physique.",
            "Capteur logique : deux états (bouton) ; capteur analogique : valeur continue (température).",
            "Le CAN convertit une tension en entier : avec n bits, 2ⁿ valeurs (8 bits : 256 ; 10 bits : 1 024).",
            "L'IHM : entrées (boutons, tactile, voix) et sorties (écran, voyants, sons) pour dialoguer avec l'objet.",
            "Algorithme à seuil : comparer une mesure à une valeur de référence pour décider d'une action.",
            "L'hystérésis (deux seuils) évite les allumages et extinctions incessants.",
          ],
          example: {
            statement: "Un lampadaire intelligent s'allume quand il fait sombre et seulement si un piéton est détecté. Il possède un capteur de luminosité (valeur de 0 à 255), un détecteur de présence infrarouge et une lampe LED. Identifiez les capteurs et l'actionneur, puis écrivez l'algorithme de contrôle avec un seuil de luminosité de 40.",
            solution: [
              "Capteurs : le capteur de luminosité (analogique, valeur de 0 à 255) et le détecteur de présence (logique : présence ou absence).",
              "Actionneur : la lampe LED.",
              "Algorithme : répéter indéfiniment : lire la luminosité L et l'état P du détecteur de présence.",
              "Si L < 40 ET P indique une présence, alors allumer la lampe ; sinon, éteindre la lampe.",
              "Attendre un court instant (par exemple une seconde) avant la mesure suivante.",
              "Réponse : deux capteurs, un actionneur, et une condition combinée par ET : il faut à la fois l'obscurité et une présence.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque élément en capteur ou actionneur, et indiquez la grandeur physique mesurée ou l'action produite : (a) thermistance ; (b) servomoteur ; (c) microphone ; (d) buzzer ; (e) accéléromètre ; (f) LED ; (g) bouton-poussoir ; (h) résistance chauffante.",
              hint: "Demandez-vous si l'élément renseigne le système sur le monde (capteur) ou s'il agit sur le monde (actionneur).",
              solution: [
                "Capteurs : (a) thermistance, température ; (c) microphone, son ; (e) accéléromètre, mouvement et orientation ; (g) bouton-poussoir, appui (capteur logique).",
                "Actionneurs : (b) servomoteur, rotation d'un angle précis ; (d) buzzer, son ; (f) LED, lumière ; (h) résistance chauffante, chaleur.",
                "Résultat : quatre capteurs (a, c, e, g) et quatre actionneurs (b, d, f, h).",
              ],
            },
            {
              level: 2,
              statement: "(1) Combien de valeurs différentes un convertisseur analogique-numérique peut-il donner sur 8 bits, sur 10 bits et sur 12 bits ? (2) Une carte lit une tension comprise entre 0 et 3,3 V sous la forme d'un entier N de 0 à 1 023 ; on admet que la tension vaut U = N × 3,3 ÷ 1 023. Calculez U pour N = 310 et pour N = 1 023. (3) Quelle valeur de N correspond environ à 2,2 V ? (4) Quel convertisseur, de 8 ou de 12 bits, permet de mesurer le plus finement une tension entre 0 et 3,3 V ? Justifiez.",
              hint: "Avec n bits, il y a 2ⁿ valeurs. Pour la question 3, isolez N : N = U × 1 023 ÷ 3,3.",
              solution: [
                "(1) 8 bits : 2⁸ = 256 valeurs ; 10 bits : 2¹⁰ = 1 024 valeurs ; 12 bits : 2¹² = 4 096 valeurs.",
                "(2) N = 310 : U = 310 × 3,3 ÷ 1 023 = 1 023 ÷ 1 023 = 1,0 V (car 310 × 3,3 = 1 023). N = 1 023 : U = 1 023 × 3,3 ÷ 1 023 = 3,3 V, la tension maximale.",
                "(3) N = 2,2 × 1 023 ÷ 3,3 = 2 250,6 ÷ 3,3 = 682. La valeur lue est N = 682.",
                "(4) Le convertisseur de 12 bits découpe la même plage de 3,3 V en 4 096 valeurs au lieu de 256 : l'écart de tension entre deux valeurs voisines est 16 fois plus petit, la mesure est donc plus fine.",
                "Résultat : 256, 1 024 et 4 096 valeurs ; 1,0 V et 3,3 V ; N = 682 ; le 12 bits est le plus précis.",
              ],
            },
            {
              level: 3,
              statement: "On compare deux algorithmes pour un radiateur (données fictives). Algorithme 1 (un seuil) : si T < 20 °C, chauffer ; sinon, ne pas chauffer. Algorithme 2 (hystérésis) : si T < 19 °C, chauffer ; si T > 21 °C, ne pas chauffer ; sinon, garder l'état précédent. Au départ, le radiateur est éteint. Les températures relevées successivement sont : 19,8 ; 20,1 ; 19,9 ; 20,2 ; 19,7 ; 20,3 ; 21,2 ; 20,5 ; 18,8 (en °C). (1) Donnez l'état du radiateur après chaque mesure pour chaque algorithme. (2) Comptez les changements d'état dans chaque cas. (3) Quel algorithme préférer ? Donnez deux arguments. (4) Proposez une IHM simple pour régler la consigne.",
              hint: "Pour l'algorithme 2, entre 19 °C et 21 °C, l'état ne change pas : recopiez simplement l'état précédent.",
              solution: [
                "(1) Algorithme 1 : 19,8 marche ; 20,1 arrêt ; 19,9 marche ; 20,2 arrêt ; 19,7 marche ; 20,3 arrêt ; 21,2 arrêt ; 20,5 arrêt ; 18,8 marche.",
                "Algorithme 2 : de 19,8 à 20,3, toutes les valeurs sont entre 19 et 21, donc le radiateur garde son état initial, arrêt ; 21,2 > 21 : arrêt ; 20,5 : on garde l'arrêt ; 18,8 < 19 : marche.",
                "(2) Algorithme 1 : l'état change à 19,8 (marche), 20,1 (arrêt), 19,9 (marche), 20,2 (arrêt), 19,7 (marche), 20,3 (arrêt) et 18,8 (marche), soit 7 changements d'état. Algorithme 2 : un seul changement (passage en marche à 18,8).",
                "(3) L'algorithme 2 est préférable : il évite les allumages et extinctions incessants, qui usent le relais et le radiateur, et il garde une température confortable entre 19 et 21 °C. Son inconvénient, une température un peu moins stable, est acceptable pour un chauffage.",
                "(4) IHM possible : deux boutons « + » et « - » pour régler la consigne par pas de 0,5 °C, un petit écran qui affiche la température mesurée et la consigne, et un voyant allumé quand le radiateur chauffe.",
                "Résultat : 7 changements avec un seuil unique, 1 seul avec l'hystérésis.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Capteurs, actionneurs et IHM.",
            statements: [
              { text: "Un haut-parleur est un capteur.", true: false, why: "Il produit un son à partir d'un signal électrique : c'est un actionneur. Le microphone, lui, est un capteur." },
              { text: "Un accéléromètre peut détecter qu'un téléphone a été retourné.", true: true, why: "Il mesure les accélérations, y compris celle de la pesanteur, ce qui renseigne sur l'orientation." },
              { text: "Un convertisseur sur 10 bits donne 1 000 valeurs différentes.", true: false, why: "Il en donne 2¹⁰ = 1 024, de 0 à 1 023." },
              { text: "Un bouton-poussoir est un capteur logique.", true: true, why: "Il n'a que deux états : appuyé ou relâché." },
              { text: "Un écran tactile appartient à l'IHM, en entrée comme en sortie.", true: true, why: "Il affiche des informations et reçoit les gestes de l'utilisateur." },
              { text: "Avec l'hystérésis, le chauffage change d'état à chaque petite variation de température.", true: false, why: "C'est l'inverse : entre les deux seuils, l'état ne change pas, ce qui évite les basculements incessants." },
              { text: "Un microcontrôleur peut commander une chaudière grâce à un relais.", true: true, why: "Le relais sert d'interrupteur commandé : un signal faible pilote un circuit puissant." },
            ],
          },
          quiz: [
            {
              q: "Quel élément est un actionneur ?",
              options: [
                "Un servomoteur",
                "Une photorésistance",
                "Un thermomètre électronique",
                "Un microphone",
              ],
              answer: 0,
              why: "Le servomoteur produit une rotation : il agit sur le monde. Les autres éléments mesurent une grandeur : ce sont des capteurs.",
            },
            {
              q: "Combien de valeurs un convertisseur analogique-numérique sur 8 bits peut-il donner ?",
              options: [
                "8",
                "16",
                "255",
                "256",
              ],
              answer: 3,
              why: "2⁸ = 256 valeurs, numérotées de 0 à 255.",
            },
            {
              q: "Quel est le rôle du convertisseur analogique-numérique ?",
              options: [
                "Amplifier le signal envoyé à un actionneur puissant",
                "Transformer une tension en nombre entier",
                "Envoyer les données sur Internet",
                "Afficher la mesure à l'utilisateur",
              ],
              answer: 1,
              why: "Le microcontrôleur ne traite que des nombres : le CAN convertit la tension continue du capteur en un entier.",
            },
            {
              q: "Pourquoi un thermostat utilise-t-il deux seuils plutôt qu'un seul ?",
              options: [
                "Pour mesurer deux températures à la fois",
                "Pour consommer davantage d'énergie",
                "Pour éviter les basculements incessants",
                "Parce qu'il possède deux capteurs",
              ],
              answer: 2,
              why: "Entre les deux seuils, l'état ne change pas : le chauffage ne s'allume et ne s'éteint plus à chaque petite oscillation.",
            },
            {
              q: "Lequel de ces éléments fait partie de l'IHM d'une montre connectée ?",
              options: [
                "Son accéléromètre",
                "Son écran",
                "Sa batterie",
                "Son microcontrôleur",
              ],
              answer: 1,
              why: "L'écran sert au dialogue avec l'utilisateur ; l'accéléromètre est un capteur, le microcontrôleur l'unité de traitement.",
            },
          ],
          trap: "Inverser capteur et actionneur pour les éléments qui touchent au son ou à la lumière : le microphone et la photodiode sont des capteurs, le haut-parleur et la LED des actionneurs. Autre erreur : croire qu'un convertisseur sur n bits donne n valeurs, ou 2ⁿ - 1 valeurs, au lieu de 2ⁿ.",
          method: "Pour chaque élément, posez la question « l'information va-t-elle du monde vers le programme, ou du programme vers le monde ? » : dans le premier cas c'est un capteur, dans le second un actionneur.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'programmer-objet',
          title: 'Programmer un objet connecté',
          minutes: 35,
          objectives: [
            "Écrire des programmes avec des entrées et des sorties pour une carte programmable.",
            "Programmer la commande d'un actionneur à partir des données d'un capteur.",
            "Réaliser une interface homme-machine simple d'un objet connecté.",
            "Faire communiquer deux objets connectés par radio.",
          ],
          course: [
            {
              heading: "Une carte programmable pour apprendre",
              paragraphs: [
                "Pour programmer un objet connecté au lycée, on utilise souvent une carte programmable comme la micro:bit. Elle réunit un microcontrôleur, une matrice de 25 LED (5 lignes de 5) qui sert d'écran, deux boutons notés A et B, plusieurs capteurs (luminosité, température, accéléromètre, boussole), une liaison radio et Bluetooth, et des broches pour brancher d'autres composants. On la programme en MicroPython, une version de Python adaptée aux microcontrôleurs.",
                "Le programme est écrit sur un ordinateur, dans un éditeur en ligne ou installé, puis transféré sur la carte par un câble USB. Il s'exécute dès que la carte est alimentée, même débranchée de l'ordinateur, par exemple sur piles. D'autres cartes existent (Arduino, programmée dans un langage proche du C ; cartes dotées du Wi-Fi), mais les principes sont les mêmes.",
              ],
            },
            {
              heading: "La structure d'un programme : une boucle infinie",
              paragraphs: [
                "Un programme d'objet connecté commence par importer les outils de la carte (from microbit import *), puis initialise les variables utiles (un compteur, un seuil). Vient ensuite une boucle infinie, while True:, dont le corps est indenté (décalé de quatre espaces) : à chaque tour, le programme lit les capteurs, prend une décision avec des instructions conditionnelles, commande les actionneurs, puis fait souvent une courte pause avec sleep(), dont la durée est en millisecondes.",
                "Exemple d'un thermomètre à affichage : from microbit import * ; puis while True: suivi, dans la boucle, de t = temperature(), de display.scroll(t) et de sleep(2000). Toutes les deux secondes, la carte lit la température (en degrés Celsius) et la fait défiler sur ses LED. La boucle ne s'arrête jamais : c'est normal, car un objet doit réagir tant qu'il est allumé.",
              ],
              box: { label: "À retenir", text: "Structure type : importer (from microbit import *), initialiser les variables, puis while True: lire les capteurs, décider (if, elif, else), agir sur les actionneurs, attendre (sleep, en millisecondes)." },
            },
            {
              heading: "Les entrées et les sorties de la carte",
              paragraphs: [
                "Les entrées les plus utilisées sont : button_a.is_pressed(), qui vaut True tant que le bouton A est enfoncé ; button_a.was_pressed(), qui vaut True si le bouton a été appuyé depuis la dernière vérification (pratique pour compter des appuis) ; temperature(), qui renvoie la température en degrés Celsius ; display.read_light_level(), qui renvoie la luminosité de 0 (obscurité) à 255 ; accelerometer.was_gesture('shake'), qui détecte que la carte a été secouée ; pin0.read_analog(), qui lit une tension sur la broche 0 sous la forme d'un entier de 0 à 1 023.",
                "Les sorties principales sont : display.show(), qui affiche un chiffre, une lettre ou une image (par exemple display.show(Image.HEART)) ; display.scroll(), qui fait défiler un texte ou un nombre ; display.clear(), qui éteint les LED ; pin0.write_digital(1) et pin0.write_digital(0), qui allument et éteignent un composant branché sur la broche 0 (une LED, un relais). Avec import music, on peut aussi jouer un son, par exemple music.play(music.BA_DING), sur le haut-parleur intégré des cartes récentes.",
              ],
              box: { label: "Repère", text: "Entrées : button_a.is_pressed(), button_a.was_pressed(), temperature(), display.read_light_level() (0 à 255), pin0.read_analog() (0 à 1 023). Sorties : display.show(), display.scroll(), display.clear(), pin0.write_digital(1 ou 0)." },
            },
            {
              heading: "Faire communiquer deux objets",
              paragraphs: [
                "Un objet devient connecté quand il échange des messages. Avec la micro:bit, la radio permet à plusieurs cartes proches de communiquer : on écrit import radio, on allume la radio avec radio.on(), et on choisit un numéro de groupe avec radio.config(group=7) ; seules les cartes réglées sur le même groupe se comprennent. radio.send('alerte') envoie un texte ; message = radio.receive() lit le dernier message reçu, ou renvoie None si aucun message n'est arrivé.",
                "Ces messages ne sont pas chiffrés : n'importe quelle carte réglée sur le même groupe peut les lire, ou envoyer de faux messages. C'est une bonne illustration des problèmes de sécurité des objets connectés : un système réel doit authentifier les appareils et chiffrer les échanges, et l'on ne doit pas faire confiance à un message simplement parce qu'il est arrivé.",
              ],
              box: { label: "À retenir", text: "Radio : import radio, radio.on(), radio.config(group=n), radio.send(texte), radio.receive() (None si rien n'est reçu). Les deux cartes doivent avoir le même groupe ; les messages ne sont pas chiffrés." },
            },
          ],
          keyPoints: [
            "Un programme d'objet commence par les imports et l'initialisation, puis tourne dans une boucle infinie while True:.",
            "Dans la boucle : lire les capteurs, décider avec if, agir sur les actionneurs, attendre avec sleep (en millisecondes).",
            "is_pressed() teste si un bouton est enfoncé ; was_pressed() s'il a été appuyé depuis la dernière vérification.",
            "La luminosité de la micro:bit va de 0 à 255 ; une lecture analogique de broche, de 0 à 1 023.",
            "Radio : même groupe sur les deux cartes, send pour envoyer, receive pour lire (None si rien).",
            "Les messages radio simples ne sont pas chiffrés : un objet réel doit sécuriser ses échanges.",
          ],
          example: {
            statement: "Écrivez un programme micro:bit qui affiche la température quand on appuie sur le bouton A, un cœur quand on appuie sur le bouton B, et éteint l'écran sinon. Décrivez-le ligne par ligne.",
            solution: [
              "Ligne 1 : from microbit import * (importer les outils de la carte).",
              "Ligne 2 : while True: (boucle infinie ; les lignes suivantes sont indentées).",
              "Lignes 3 et 4 : if button_a.is_pressed(): puis, indenté une fois de plus, display.scroll(temperature()) (faire défiler la température).",
              "Lignes 5 et 6 : elif button_b.is_pressed(): puis display.show(Image.HEART) (afficher un cœur).",
              "Lignes 7 et 8 : else: puis display.clear() (éteindre l'écran si aucun bouton n'est appuyé).",
              "Ligne 9 : sleep(100), au niveau du if, pour faire une pause de 0,1 s à chaque tour de boucle.",
              "Réponse : les boutons sont les entrées, l'écran de LED est la sortie, et la structure if, elif, else choisit l'action.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On considère le programme suivant, décrit ligne par ligne : from microbit import * ; n = 0 ; while True: ; dans la boucle : if button_a.was_pressed(): n = n + 1 ; if button_b.was_pressed(): n = 0 ; display.show(n) ; sleep(100). (1) Quel est le rôle de la variable n ? (2) L'utilisateur appuie successivement sur A, A, A, B, A, A. Quel nombre est affiché après chaque appui ? (3) Quelle est l'IHM de ce compteur ?",
              hint: "Suivez la valeur de n appui après appui : A ajoute 1, B remet à zéro.",
              solution: [
                "(1) n est un compteur : il compte les appuis sur le bouton A depuis la dernière remise à zéro.",
                "(2) Au départ n = 0. Après A : 1 ; A : 2 ; A : 3 ; B : 0 ; A : 1 ; A : 2.",
                "(3) L'IHM est composée des boutons A et B (entrées) et de l'écran de LED qui affiche n (sortie).",
                "Résultat : affichages successifs 1, 2, 3, 0, 1, 2.",
              ],
            },
            {
              level: 2,
              statement: "On veut réaliser une veilleuse : une LED branchée sur la broche 0 doit s'allumer quand la luminosité mesurée par la carte est inférieure à 50, et s'éteindre sinon. La luminosité est vérifiée toutes les demi-secondes. (1) Écrivez le programme, en décrivant chaque ligne et son indentation. (2) Les luminosités mesurées successivement sont 120, 64, 49, 12, 50, 200. Indiquez l'état de la LED après chaque mesure. (3) Proposez une amélioration pour que la veilleuse ne clignote pas quand la luminosité oscille autour de 50.",
              hint: "Utilisez display.read_light_level() pour la luminosité et pin0.write_digital(1) ou pin0.write_digital(0) pour la LED. Attention : la condition est « strictement inférieure à 50 ».",
              solution: [
                "(1) from microbit import * ; while True: ; dans la boucle (4 espaces) : lum = display.read_light_level() ; if lum < 50: puis, indenté une fois de plus, pin0.write_digital(1) ; else: puis pin0.write_digital(0) ; enfin, au niveau du if, sleep(500).",
                "(2) 120 : éteinte ; 64 : éteinte ; 49 : allumée (49 < 50) ; 12 : allumée ; 50 : éteinte (50 n'est pas strictement inférieur à 50) ; 200 : éteinte.",
                "(3) Utiliser deux seuils (hystérésis) : allumer si lum < 40, éteindre si lum > 60, et ne rien changer entre les deux. La veilleuse ne bascule plus à chaque petite variation autour de 50.",
                "Résultat : LED éteinte, éteinte, allumée, allumée, éteinte, éteinte.",
              ],
            },
            {
              level: 3,
              statement: "On veut fabriquer une alarme avec deux cartes micro:bit. La carte 1 est posée sur un objet à surveiller : si elle est secouée, elle envoie le message 'alerte' par radio. La carte 2, gardée par le propriétaire, affiche une tête de mort (Image.SKULL) et joue un son quand elle reçoit 'alerte' ; un appui sur son bouton A efface l'alerte. (1) Écrivez le programme de la carte 1. (2) Écrivez le programme de la carte 2. (3) Quels sont les capteurs, les actionneurs et l'IHM du système ? (4) Un camarade règle sa propre carte sur le même groupe. Quels problèmes de sécurité cela pose-t-il, et comment un vrai système les éviterait-il ?",
              hint: "Les deux cartes doivent importer radio, allumer la radio et utiliser le même groupe. Sur la carte 2, comparez le message reçu au texte 'alerte' avec ==.",
              solution: [
                "(1) Carte 1 : from microbit import * ; import radio ; radio.on() ; radio.config(group=7) ; while True: ; dans la boucle : if accelerometer.was_gesture('shake'): puis radio.send('alerte') ; enfin sleep(100).",
                "(2) Carte 2 : from microbit import * ; import radio ; import music ; radio.on() ; radio.config(group=7) ; while True: ; dans la boucle : message = radio.receive() ; if message == 'alerte': puis display.show(Image.SKULL) et music.play(music.BA_DING) ; if button_a.was_pressed(): puis display.clear() ; enfin sleep(100).",
                "(3) Capteurs : l'accéléromètre de la carte 1 et le bouton A de la carte 2. Actionneurs : l'écran de LED et le haut-parleur de la carte 2. IHM : l'écran, le son et le bouton A de la carte 2. Communication : la radio.",
                "(4) Les messages ne sont ni chiffrés ni authentifiés : le camarade peut lire les alertes (et savoir quand l'objet est déplacé) ou envoyer de fausses alertes avec radio.send('alerte'). Il pourrait aussi brouiller la liaison. Un vrai système chiffrerait les messages et vérifierait l'identité de l'émetteur, par exemple avec une clé secrète partagée entre les deux appareils.",
                "Résultat : deux programmes de même structure (radio allumée, même groupe, boucle infinie), une IHM sur la carte 2, et une communication à sécuriser.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les lignes d'un programme qui affiche un visage triste quand la température dépasse 25 °C, et éteint l'écran sinon.",
            items: [
              "from microbit import *",
              "while True:",
              "    t = temperature()",
              "    if t > 25:",
              "        display.show(Image.SAD)",
              "    else:",
              "        display.clear()",
            ],
          },
          quiz: [
            {
              q: "Que fait l'instruction sleep(2000) sur une carte micro:bit ?",
              options: [
                "Elle éteint complètement la carte pendant 2 000 secondes",
                "Elle met le programme en pause pendant 2 secondes",
                "Elle répète la boucle 2 000 fois",
                "Elle affiche le nombre 2000",
              ],
              answer: 1,
              why: "La durée de sleep est exprimée en millisecondes : 2 000 ms = 2 s.",
            },
            {
              q: "Pourquoi un programme d'objet connecté contient-il souvent une boucle while True: ?",
              options: [
                "Pour que le programme s'arrête plus vite après le démarrage",
                "Pour économiser la mémoire",
                "Pour envoyer des messages radio",
                "Pour réagir en permanence tant que l'objet est allumé",
              ],
              answer: 3,
              why: "L'objet doit lire ses capteurs et réagir sans cesse : la boucle infinie répète ce cycle tant que la carte est alimentée.",
            },
            {
              q: "Que renvoie radio.receive() si aucun message n'a été reçu ?",
              options: [
                "None",
                "0",
                "'alerte'",
                "Une erreur qui arrête le programme",
              ],
              answer: 0,
              why: "radio.receive() renvoie None quand aucun message n'est arrivé, ce que le programme doit prévoir.",
            },
            {
              q: "Deux cartes ne reçoivent pas les messages l'une de l'autre. Quelle est la cause la plus probable ?",
              options: [
                "Elles n'affichent pas la même image",
                "Elles n'ont pas le même numéro de groupe radio",
                "Elles n'ont pas été programmées depuis le même ordinateur",
                "Elles ne mesurent pas la même température",
              ],
              answer: 1,
              why: "Seules les cartes réglées sur le même groupe avec radio.config(group=...) se comprennent.",
            },
            {
              q: "Quelle valeur maximale peut renvoyer display.read_light_level() ?",
              options: [
                "100",
                "1 023",
                "255",
                "3,3",
              ],
              answer: 2,
              why: "La luminosité mesurée par la micro:bit va de 0 à 255 ; c'est la lecture analogique d'une broche qui va de 0 à 1 023.",
            },
          ],
          trap: "Oublier l'indentation : en Python, les instructions qui appartiennent à la boucle while True: ou à un if doivent être décalées, sinon elles ne sont pas exécutées au bon moment (ou le programme refuse de démarrer). Autre erreur : croire que sleep() compte en secondes, alors qu'il compte en millisecondes.",
          method: "Avant de transférer un programme sur la carte, simulez-le à la main sur quelques valeurs de capteur (comme dans un tableau de suivi) ; puis testez-le réellement en provoquant chaque situation prévue (bouton appuyé ou non, obscurité, secousse).",
        },
      ],
    },
    {
      id: 'photographie-numerique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'pixels-couleurs',
          title: 'Pixels, définition et codage des couleurs',
          minutes: 30,
          objectives: [
            "Définir un pixel et calculer la définition d'une image numérique.",
            "Distinguer la définition d'une image et sa résolution d'impression.",
            "Expliquer le codage RVB d'une couleur et la profondeur de couleur.",
            "Calculer la taille en mémoire d'une image non compressée.",
          ],
          course: [
            {
              heading: "Une image numérique est un tableau de pixels",
              paragraphs: [
                "Une photographie numérique est une image matricielle : elle est découpée en un quadrillage de petits carrés, les pixels (contraction de l'anglais picture element, « élément d'image »). Chaque pixel a une seule couleur, uniforme. Vu de loin, ou à taille normale sur un écran, l'œil ne distingue pas les pixels et perçoit une image continue ; en zoomant très fortement, on voit apparaître les petits carrés.",
                "Chaque pixel est repéré par sa position : sa colonne x et sa ligne y. Dans la plupart des logiciels et des langages de programmation, l'origine (0, 0) est le pixel situé en haut à gauche de l'image ; x augmente vers la droite et y augmente vers le bas. Une image de 800 pixels de large a donc des colonnes numérotées de 0 à 799.",
              ],
              box: { label: "Définition", text: "Pixel : plus petit élément d'une image numérique, de couleur uniforme, repéré par sa colonne x et sa ligne y (origine (0, 0) en haut à gauche)." },
            },
            {
              heading: "Définition et résolution : deux notions à ne pas confondre",
              paragraphs: [
                "La définition d'une image est son nombre de pixels, donné sous la forme largeur × hauteur. Une image de 4 000 × 3 000 pixels contient 4 000 × 3 000 = 12 000 000 pixels, soit 12 mégapixels (12 Mpx, un mégapixel valant un million de pixels). Plus la définition est grande, plus l'image contient de détails, et plus on peut l'agrandir ou la recadrer sans voir les pixels.",
                "La résolution indique la densité de pixels, c'est-à-dire le nombre de pixels par unité de longueur lorsque l'image est imprimée ou affichée. Elle s'exprime le plus souvent en pixels par pouce (ppp, en anglais ppi ou dpi), avec 1 pouce = 2,54 cm. Pour une impression de bonne qualité, on vise environ 300 ppp. La même image de 4 000 pixels de large, imprimée à 300 ppp, mesure 4 000 ÷ 300 ≈ 13,3 pouces, soit environ 33,9 cm.",
                "Attention au vocabulaire courant : on parle souvent de « résolution d'un appareil photo » pour désigner son nombre de millions de photosites (12 Mpx, 48 Mpx). Il s'agit en réalité d'une définition. Le programme parle de la résolution du capteur et de celle de l'image en ce sens : elles peuvent être différentes selon les réglages de l'appareil.",
              ],
              box: { label: "Formule", text: "Définition = largeur × hauteur (en pixels). Résolution = nombre de pixels ÷ longueur (en ppp). Taille imprimée (en pouces) = nombre de pixels ÷ résolution ; 1 pouce = 2,54 cm." },
            },
            {
              heading: "Le codage RVB des couleurs",
              paragraphs: [
                "Un écran affiche les couleurs par synthèse additive : chaque pixel de l'écran est formé de trois petites sources de lumière, rouge, verte et bleue. En mélangeant ces trois lumières avec des intensités différentes, on obtient toutes les couleurs : rouge et vert donnent du jaune, vert et bleu du cyan, rouge et bleu du magenta, les trois à pleine intensité donnent du blanc, et l'absence de lumière donne du noir.",
                "La couleur d'un pixel est donc codée par trois nombres, ses composantes rouge, verte et bleue (RVB, en anglais RGB). Le plus souvent, chaque composante est codée sur un octet (8 bits) et prend une valeur entière de 0 (aucune lumière) à 255 (intensité maximale). Ainsi (255, 0, 0) est le rouge vif, (255, 255, 0) le jaune, (0, 0, 0) le noir, (255, 255, 255) le blanc. Quand les trois composantes sont égales, on obtient un gris : (128, 128, 128) est un gris moyen.",
                "On rencontre aussi la notation hexadécimale, utilisée en CSS : #FF8000 signifie R = FF = 255, V = 80 = 128, B = 00 = 0, c'est-à-dire un orange. D'autres modèles existent, comme le modèle TSV (teinte, saturation, valeur ; en anglais HSV), plus proche de la façon dont on décrit une couleur avec des mots, et utilisé par certains logiciels de retouche.",
              ],
              box: { label: "À retenir", text: "RVB : trois composantes de 0 à 255. (255, 0, 0) rouge ; (0, 255, 0) vert ; (0, 0, 255) bleu ; (255, 255, 0) jaune ; (0, 255, 255) cyan ; (255, 0, 255) magenta ; (0, 0, 0) noir ; (255, 255, 255) blanc ; R = V = B : gris." },
            },
            {
              heading: "Profondeur de couleur et taille d'une image",
              paragraphs: [
                "La profondeur de couleur est le nombre de bits utilisés pour coder la couleur d'un pixel. Avec 3 composantes de 8 bits, elle est de 24 bits, ce qui donne 256 × 256 × 256 = 16 777 216 couleurs possibles, soit plus que ce que l'œil humain peut distinguer. Une image en noir et blanc pur n'a besoin que d'un bit par pixel (0 ou 1) ; une image en niveaux de gris utilise souvent 8 bits par pixel, soit 256 nuances de gris.",
                "On en déduit la taille en mémoire d'une image non compressée : nombre de pixels × nombre d'octets par pixel. Une image de 12 Mpx en 24 bits (3 octets par pixel) occupe 12 000 000 × 3 = 36 000 000 octets, soit 36 Mo. Pour réduire cette taille, les fichiers sont compressés : le format JPEG supprime des détails peu visibles (compression avec perte), le format PNG compresse sans rien perdre (compression sans perte), mais avec un gain moindre sur les photographies.",
              ],
              box: { label: "Formule", text: "Profondeur de 24 bits : 2²⁴ = 16 777 216 couleurs. Taille non compressée (en octets) = largeur × hauteur × 3. Rappel : 1 octet = 8 bits ; 1 Mo = 1 000 000 octets." },
            },
          ],
          keyPoints: [
            "Une image numérique est un quadrillage de pixels, repérés par (x, y), l'origine (0, 0) étant en haut à gauche.",
            "Définition = largeur × hauteur en pixels ; 1 mégapixel = 1 million de pixels.",
            "Résolution = densité de pixels, en pixels par pouce (ppp) ; 1 pouce = 2,54 cm ; environ 300 ppp pour une bonne impression.",
            "RVB : synthèse additive ; chaque composante de 0 à 255 ; R = V = B donne un gris.",
            "Profondeur de couleur de 24 bits (3 octets) : 16 777 216 couleurs.",
            "Taille non compressée = nombre de pixels × 3 octets ; JPEG compresse avec perte, PNG sans perte.",
          ],
          example: {
            statement: "Une image mesure 800 × 600 pixels et est codée en RVB sur 24 bits. (1) Calculez sa définition. (2) Calculez sa taille non compressée en octets, puis en Mo. (3) Le pixel de coordonnées (0, 0) a pour couleur (0, 255, 255). Où se trouve-t-il et de quelle couleur est-il ?",
            solution: [
              "(1) Définition : 800 × 600 = 480 000 pixels, soit 0,48 Mpx.",
              "(2) En 24 bits, chaque pixel occupe 3 octets : 480 000 × 3 = 1 440 000 octets.",
              "1 Mo = 1 000 000 octets, donc la taille est de 1,44 Mo.",
              "(3) Le pixel (0, 0) est situé en haut à gauche de l'image.",
              "Sa composante rouge est nulle, ses composantes verte et bleue sont maximales : vert et bleu donnent du cyan.",
              "Réponse : 480 000 pixels, 1,44 Mo non compressée, et un pixel cyan en haut à gauche.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un écran affiche des images en « Full HD », de définition 1 920 × 1 080 pixels, codées en RVB sur 24 bits. (1) Combien de pixels l'écran affiche-t-il ? Exprimez le résultat en mégapixels, arrondi au dixième. (2) Quelle est la taille d'une image Full HD non compressée, en octets puis en Mo (arrondi au dixième) ?",
              hint: "Multipliez la largeur par la hauteur, puis par 3 octets par pixel. 1 Mpx = 1 000 000 pixels et 1 Mo = 1 000 000 octets.",
              solution: [
                "(1) 1 920 × 1 080 = 2 073 600 pixels, soit environ 2,1 Mpx.",
                "(2) Chaque pixel occupe 3 octets : 2 073 600 × 3 = 6 220 800 octets.",
                "6 220 800 ÷ 1 000 000 ≈ 6,2 Mo.",
                "Résultat : 2 073 600 pixels (environ 2,1 Mpx) et environ 6,2 Mo par image non compressée.",
              ],
            },
            {
              level: 2,
              statement: "(1) Donnez la couleur codée par chacun de ces triplets RVB : (a) (255, 255, 0) ; (b) (0, 0, 0) ; (c) (128, 128, 128) ; (d) (255, 0, 255) ; (e) (255, 255, 255). (2) Donnez le triplet RVB décimal correspondant au code hexadécimal #FF8000. (3) Un ancien format d'image codait chaque composante sur 4 bits seulement. Combien de valeurs chaque composante pouvait-elle prendre ? Combien de couleurs ce format permettait-il ? Quelle était sa profondeur de couleur ?",
              hint: "Rappelez-vous la synthèse additive (rouge + vert = jaune, rouge + bleu = magenta). En hexadécimal, F vaut 15 et 80 vaut 8 × 16 + 0. Avec n bits, on code 2ⁿ valeurs.",
              solution: [
                "(1) (a) Rouge et vert à fond : jaune. (b) Aucune lumière : noir. (c) Trois composantes égales et moyennes : gris moyen. (d) Rouge et bleu à fond : magenta. (e) Les trois à fond : blanc.",
                "(2) FF = 15 × 16 + 15 = 255 ; 80 = 8 × 16 + 0 = 128 ; 00 = 0. Le triplet est (255, 128, 0), un orange.",
                "(3) Avec 4 bits, chaque composante prend 2⁴ = 16 valeurs (de 0 à 15).",
                "Nombre de couleurs : 16 × 16 × 16 = 4 096. Profondeur : 3 × 4 = 12 bits par pixel.",
                "Résultat : jaune, noir, gris, magenta, blanc ; (255, 128, 0) ; 4 096 couleurs avec une profondeur de 12 bits.",
              ],
            },
            {
              level: 3,
              statement: "Un smartphone prend des photos de 4 032 × 3 024 pixels, enregistrées au format JPEG (données fictives pour la taille du fichier : 3,0 Mo). (1) Calculez la définition de l'image en pixels, puis en mégapixels arrondis au dixième. (2) Calculez la taille de l'image non compressée en 24 bits, en Mo arrondis au dixième. Combien de fois le fichier JPEG est-il plus léger ? (3) On imprime la photo à 300 ppp. Quelles sont ses dimensions en centimètres, arrondies au dixième ? (4) On veut l'imprimer en affiche de 60 cm de large. Quelle sera alors la résolution, en ppp, arrondie à l'unité ? Commentez.",
              hint: "Taille en pouces = nombre de pixels ÷ résolution, puis multipliez par 2,54 pour obtenir des centimètres. Pour la question 4, convertissez d'abord 60 cm en pouces.",
              solution: [
                "(1) 4 032 × 3 024 = 12 192 768 pixels, soit environ 12,2 Mpx.",
                "(2) 12 192 768 × 3 = 36 578 304 octets, soit environ 36,6 Mo. Rapport : 36,6 ÷ 3,0 ≈ 12 : le fichier JPEG est environ 12 fois plus léger, grâce à une compression avec perte.",
                "(3) Largeur : 4 032 ÷ 300 = 13,44 pouces, et 13,44 × 2,54 ≈ 34,1 cm. Hauteur : 3 024 ÷ 300 = 10,08 pouces, et 10,08 × 2,54 ≈ 25,6 cm.",
                "(4) 60 cm = 60 ÷ 2,54 ≈ 23,62 pouces. Résolution : 4 032 ÷ 23,62 ≈ 171 ppp.",
                "Commentaire : 171 ppp est nettement inférieur aux 300 ppp conseillés ; l'affiche sera un peu moins nette de près, ce qui reste acceptable pour une affiche regardée à distance.",
                "Résultat : 12,2 Mpx ; 36,6 Mo non compressée (JPEG environ 12 fois plus léger) ; tirage d'environ 34,1 cm × 25,6 cm à 300 ppp ; environ 171 ppp sur 60 cm.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque code RVB à la couleur qu'il représente.",
            pairs: [
              { left: "(255, 0, 0)", right: "Rouge" },
              { left: "(255, 255, 0)", right: "Jaune" },
              { left: "(0, 255, 255)", right: "Cyan" },
              { left: "(255, 0, 255)", right: "Magenta" },
              { left: "(128, 128, 128)", right: "Gris moyen" },
              { left: "(255, 255, 255)", right: "Blanc" },
            ],
          },
          quiz: [
            {
              q: "Une image mesure 2 000 × 1 500 pixels. Quelle est sa définition ?",
              options: [
                "3 500 pixels",
                "300 ppp",
                "2 Mpx",
                "3 Mpx",
              ],
              answer: 3,
              why: "La définition est largeur × hauteur : 2 000 × 1 500 = 3 000 000 pixels, soit 3 Mpx.",
            },
            {
              q: "Combien de valeurs différentes peut prendre une composante RVB codée sur 8 bits ?",
              options: [
                "256",
                "255",
                "8",
                "16 777 216",
              ],
              answer: 0,
              why: "Avec 8 bits, on code 2⁸ = 256 valeurs, de 0 à 255. 16 777 216 est le nombre de couleurs avec trois composantes.",
            },
            {
              q: "Quelle couleur code le triplet (0, 0, 255) ?",
              options: [
                "Noir",
                "Rouge",
                "Bleu",
                "Blanc",
              ],
              answer: 2,
              why: "Seule la troisième composante, le bleu, est à son maximum.",
            },
            {
              q: "Que mesure la résolution d'une image imprimée ?",
              options: [
                "Le nombre de pixels par pouce",
                "Le nombre total de pixels",
                "Le nombre de couleurs différentes",
                "La taille du fichier en octets",
              ],
              answer: 0,
              why: "La résolution est une densité, en pixels par pouce (ppp) ; le nombre total de pixels est la définition.",
            },
            {
              q: "Quelle est la taille non compressée d'une image de 1 000 × 1 000 pixels en 24 bits ?",
              options: [
                "1 Mo",
                "24 Mo",
                "3 Mo",
                "8 Mo",
              ],
              answer: 2,
              why: "1 000 000 pixels × 3 octets = 3 000 000 octets, soit 3 Mo.",
            },
          ],
          trap: "Confondre définition et résolution : la définition est le nombre total de pixels (largeur × hauteur), la résolution est une densité (pixels par pouce) qui dépend de la taille d'impression. Autre erreur fréquente : multiplier par 24 au lieu de 3 pour obtenir la taille en octets, alors que 24 bits font 3 octets.",
          method: "Pour tout calcul sur une image, écrivez d'abord les unités à chaque étape (pixels, octets, pouces, centimètres) : pixels × octets par pixel donne des octets, pixels ÷ ppp donne des pouces, pouces × 2,54 donne des centimètres. Une unité incohérente signale une erreur.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'capteur-traitements',
          title: 'Du capteur à l\'image : traitements et algorithmes',
          minutes: 30,
          objectives: [
            "Distinguer les photosites du capteur et les pixels de l'image en comparant les résolutions du capteur et de l'image selon les réglages de l'appareil.",
            "Identifier les étapes de la construction de l'image finale.",
            "Expliciter des algorithmes associés à la prise de vue.",
            "Situer les grandes étapes de l'histoire de la photographie, de l'argentique au numérique.",
          ],
          course: [
            {
              heading: "Le capteur : des millions de photosites",
              paragraphs: [
                "Dans un appareil photo numérique comme dans un smartphone, l'objectif concentre la lumière de la scène sur un capteur électronique (de type CCD ou, aujourd'hui le plus souvent, CMOS). Ce capteur est une surface couverte de millions de minuscules cellules sensibles à la lumière, les photosites. Chaque photosite est une photodiode : pendant la prise de vue, il accumule une charge électrique proportionnelle à la quantité de lumière qu'il reçoit.",
                "Un photosite mesure une intensité lumineuse, pas une couleur. Pour obtenir la couleur, on place devant les photosites une mosaïque de filtres colorés, le plus souvent la matrice de Bayer (du nom de l'ingénieur de Kodak Bryce Bayer) : dans chaque carré de 2 × 2 photosites, deux sont munis d'un filtre vert, un d'un filtre rouge et un d'un filtre bleu. Il y a deux fois plus de vert parce que l'œil humain est plus sensible au vert. Chaque photosite ne mesure donc qu'une seule des trois composantes.",
                "La charge de chaque photosite est ensuite transformée en nombre par un convertisseur analogique-numérique. À ce stade, on dispose d'une mosaïque de valeurs (une par photosite), et pas encore d'une image en couleurs.",
              ],
              box: { label: "Définition", text: "Photosite : cellule du capteur qui mesure la quantité de lumière reçue derrière un filtre rouge, vert ou bleu. Il fournit une seule valeur. Pixel : élément de l'image finale, qui possède trois composantes R, V, B." },
            },
            {
              heading: "Le dématriçage : des photosites aux pixels",
              paragraphs: [
                "Pour que chaque pixel de l'image ait trois composantes, le processeur de l'appareil calcule les deux composantes manquantes à partir des photosites voisins : c'est le dématriçage (en anglais demosaicing). Par exemple, pour un photosite muni d'un filtre rouge, la composante verte est estimée en faisant la moyenne des photosites verts qui l'entourent, et la composante bleue avec les photosites bleus voisins. Il s'agit d'une interpolation : deux composantes sur trois sont calculées, et non mesurées.",
                "Photosites et pixels ne sont donc pas la même chose, et leurs nombres peuvent différer. Si l'utilisateur choisit une taille d'image réduite, ou un format 16:9 sur un capteur 4:3 (une partie du capteur n'est alors pas utilisée), l'image a moins de pixels que le capteur n'a de photosites. Beaucoup de smartphones à capteur de 48 Mpx regroupent aussi les photosites par quatre (en anglais pixel binning) pour produire, par défaut, des images de 12 Mpx moins bruitées en faible lumière.",
              ],
              box: { label: "À retenir", text: "Résolution du capteur (nombre de photosites) et résolution de l'image (nombre de pixels) peuvent différer selon les réglages : format, taille choisie, regroupement de photosites. Le dématriçage calcule les composantes manquantes de chaque pixel." },
            },
            {
              heading: "Les traitements automatiques jusqu'à l'image finale",
              paragraphs: [
                "Après le dématriçage, des algorithmes corrigent l'image en une fraction de seconde. La balance des blancs supprime la dominante de couleur due à l'éclairage (orangée sous une lampe à incandescence, bleutée à l'ombre) pour que les objets blancs paraissent blancs. La réduction du bruit atténue le grain qui apparaît en faible lumière, quand le signal est amplifié (sensibilité ISO élevée). L'accentuation renforce les contours pour améliorer la netteté apparente. D'autres corrections compensent les défauts de l'objectif, comme l'assombrissement des coins (vignetage) ou la déformation des lignes droites (distorsion).",
                "Enfin, l'image est compressée, le plus souvent au format JPEG (ou HEIF sur certains téléphones), et enregistrée avec ses métadonnées. Les appareils perfectionnés proposent aussi le format RAW (« brut ») : il conserve les valeurs des photosites avant dématriçage et corrections. Le fichier est beaucoup plus lourd, mais il laisse au photographe le choix des réglages lors du traitement sur ordinateur.",
              ],
              box: { label: "Repère", text: "Chaîne de construction : objectif, capteur (photosites et filtres de Bayer), conversion en nombres, dématriçage, corrections (balance des blancs, bruit, netteté, défauts optiques), compression et enregistrement avec les métadonnées." },
            },
            {
              heading: "Les algorithmes de la prise de vue",
              paragraphs: [
                "Avant même le déclenchement, des algorithmes règlent l'appareil. La mise au point automatique déplace les lentilles jusqu'à obtenir une image nette ; une méthode simple consiste à mesurer le contraste de la zone visée pour plusieurs positions et à retenir celle où il est maximal (on cherche un maximum). L'exposition automatique mesure la luminosité de la scène et choisit le temps de pose, l'ouverture et la sensibilité. D'autres algorithmes détectent les visages pour faire la mise au point sur eux, ou compensent les tremblements (stabilisation).",
                "Les smartphones vont plus loin : c'est la photographie computationnelle. En mode HDR (grande gamme dynamique), l'appareil prend plusieurs images avec des expositions différentes et les fusionne, pour que ni le ciel ni les zones sombres ne soient perdus. Le mode nuit additionne ou moyenne plusieurs images successives pour réduire le bruit. Le mode portrait estime la distance des objets pour flouter l'arrière-plan. La photo obtenue est donc largement calculée : elle ne correspond plus à une seule mesure du capteur.",
              ],
            },
            {
              heading: "De l'argentique au numérique : quelques repères",
              paragraphs: [
                "La plus ancienne photographie conservée est due à Nicéphore Niépce, qui fixe vers 1826 ou 1827 une vue prise de la fenêtre de sa maison, après un temps de pose de plusieurs heures, voire davantage. En 1839, le procédé de Louis Daguerre, le daguerréotype, est présenté à l'Académie des sciences : la photographie se diffuse. Pendant plus d'un siècle, la photographie est argentique : la lumière transforme des cristaux de sels d'argent sur une pellicule, qu'il faut ensuite développer.",
                "En 1969, Willard Boyle et George Smith inventent le capteur CCD aux laboratoires Bell (ils reçoivent le prix Nobel de physique en 2009). En 1975, Steven Sasson, ingénieur chez Kodak, construit le premier prototype d'appareil photo numérique, qui produit une image en noir et blanc de 100 × 100 pixels enregistrée sur une cassette. Les appareils numériques se répandent auprès du grand public à la fin des années 1990 ; les premiers téléphones équipés d'un appareil photo apparaissent vers 2000, puis les smartphones, à partir de 2007, font de la photographie numérique un geste quotidien.",
              ],
              box: { label: "Repère", text: "Vers 1826-1827 : première photographie conservée (Niépce). 1839 : daguerréotype. 1969 : capteur CCD (Boyle et Smith). 1975 : premier prototype d'appareil numérique (Sasson, Kodak). 2007 : essor des smartphones." },
            },
          ],
          keyPoints: [
            "Le capteur est formé de photosites qui mesurent chacun une quantité de lumière, derrière un filtre rouge, vert ou bleu.",
            "Matrice de Bayer : dans chaque carré de 2 × 2, deux filtres verts, un rouge, un bleu.",
            "Le dématriçage calcule, par interpolation, les deux composantes manquantes de chaque pixel.",
            "Photosites et pixels peuvent différer en nombre selon les réglages (taille, format, regroupement).",
            "Corrections automatiques : balance des blancs, réduction du bruit, netteté, défauts optiques, puis compression JPEG.",
            "Algorithmes de prise de vue : mise au point (recherche du contraste maximal), exposition, HDR, mode nuit, mode portrait.",
            "Repères : Niépce (vers 1826-1827), Daguerre (1839), CCD (1969), Sasson (1975), smartphones (2007).",
          ],
          example: {
            statement: "Un capteur de 6 000 × 4 000 photosites est muni d'une matrice de Bayer. (1) Combien de photosites ce capteur compte-t-il au total, et combien sont munis d'un filtre vert, rouge, bleu ? (2) L'utilisateur choisit le format 16:9 en conservant toute la largeur du capteur. Quelle est la définition de l'image obtenue ? (3) Expliquez pourquoi photosites et pixels ne sont pas la même chose.",
            solution: [
              "(1) Total : 6 000 × 4 000 = 24 000 000 photosites (24 Mpx).",
              "Dans la matrice de Bayer, la moitié des photosites est verte et un quart rouge, un quart bleu : 12 000 000 verts, 6 000 000 rouges, 6 000 000 bleus.",
              "(2) En 16:9 sur toute la largeur, la hauteur vaut 6 000 × 9 ÷ 16 = 3 375 pixels. Définition : 6 000 × 3 375 = 20 250 000 pixels, soit environ 20,3 Mpx : le haut et le bas du capteur ne sont pas utilisés.",
              "(3) Un photosite ne mesure qu'une composante (rouge, verte ou bleue) ; un pixel en possède trois, dont deux calculées par dématriçage à partir des voisins. De plus, leur nombre peut différer selon les réglages.",
              "Réponse : 24 millions de photosites (12 M verts, 6 M rouges, 6 M bleus) ; une image de 6 000 × 3 375 pixels en 16:9.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un capteur compte 4 000 × 3 000 photosites, munis d'une matrice de Bayer. (1) Combien de photosites possède-t-il ? (2) Combien sont munis d'un filtre vert ? d'un filtre rouge ? d'un filtre bleu ? (3) Combien de composantes chaque photosite mesure-t-il ? Combien de composantes possède chaque pixel de l'image finale ?",
              hint: "Dans un carré de 2 × 2 photosites de la matrice de Bayer, il y a 2 verts, 1 rouge et 1 bleu.",
              solution: [
                "(1) 4 000 × 3 000 = 12 000 000 photosites.",
                "(2) Verts : la moitié, soit 6 000 000. Rouges : un quart, soit 3 000 000. Bleus : un quart, soit 3 000 000.",
                "(3) Chaque photosite mesure une seule composante ; chaque pixel de l'image finale en possède trois (R, V, B), les deux manquantes étant calculées par dématriçage.",
                "Résultat : 12 millions de photosites, dont 6 millions verts, 3 millions rouges et 3 millions bleus.",
              ],
            },
            {
              level: 2,
              statement: "(1) Dans une matrice de Bayer, un photosite muni d'un filtre rouge a mesuré la valeur 200. Ses quatre voisins directs (à gauche, à droite, en haut, en bas) sont des photosites verts qui ont mesuré 120, 130, 110 et 140 ; ses quatre voisins en diagonale sont des photosites bleus qui ont mesuré 60, 64, 58 et 62. En estimant chaque composante manquante par la moyenne des voisins de la bonne couleur, donnez le triplet RVB du pixel. (2) Un smartphone possède un capteur de 48 Mpx et produit par défaut des images de 12 Mpx. Expliquez ce réglage et son intérêt.",
              hint: "La composante rouge est mesurée ; les composantes verte et bleue sont des moyennes de quatre valeurs. Pour la question 2, comparez 48 et 12.",
              solution: [
                "(1) Rouge mesuré : R = 200.",
                "Vert estimé : (120 + 130 + 110 + 140) ÷ 4 = 500 ÷ 4 = 125.",
                "Bleu estimé : (60 + 64 + 58 + 62) ÷ 4 = 244 ÷ 4 = 61.",
                "Le pixel vaut (200, 125, 61), une couleur orangée. Deux composantes sur trois ont été calculées et non mesurées.",
                "(2) 48 ÷ 12 = 4 : le téléphone regroupe les photosites par quatre pour former un pixel (regroupement de photosites, pixel binning). Chaque pixel recueille ainsi la lumière de quatre photosites : l'image a moins de pixels mais elle est moins bruitée, surtout en faible lumière, et le fichier est plus léger.",
                "Résultat : pixel (200, 125, 61) ; 12 Mpx = 48 Mpx regroupés par quatre.",
              ],
            },
            {
              level: 3,
              statement: "La mise au point automatique d'un appareil teste plusieurs positions de l'objectif et mesure le contraste de la zone visée. Données fictives : pour les positions 1 à 7, les contrastes mesurés sont 12, 25, 41, 58, 47, 30, 18. (1) Quelle position l'appareil retient-il ? Justifiez. (2) Écrivez en Python une fonction meilleure_position(contrastes) qui reçoit la liste des contrastes (le premier correspondant à la position 1) et renvoie le numéro de la position retenue. (3) En mode nuit, l'appareil prend quatre images successives ; un même pixel y vaut, pour sa composante verte, 98, 104, 101 et 97. Quelle valeur retient-il s'il fait la moyenne ? Pourquoi ce procédé réduit-il le bruit ?",
              hint: "La position nette est celle du contraste maximal : c'est une recherche de maximum dans une liste. Attention : en Python, les indices commencent à 0, alors que les positions commencent à 1.",
              solution: [
                "(1) Le contraste est maximal (58) pour la position 4 : l'image y est la plus nette, l'appareil retient la position 4.",
                "(2) def meilleure_position(contrastes): puis, dans la fonction : i_max = 0 ; for i in range(len(contrastes)): ; dans la boucle : if contrastes[i] > contrastes[i_max]: ; dans le if : i_max = i ; enfin, après la boucle, au niveau du for : return i_max + 1 (on ajoute 1 car l'indice 0 correspond à la position 1).",
                "Vérification : avec [12, 25, 41, 58, 47, 30, 18], le maximum 58 est à l'indice 3, et la fonction renvoie 3 + 1 = 4.",
                "(3) Moyenne : (98 + 104 + 101 + 97) ÷ 4 = 400 ÷ 4 = 100.",
                "Le bruit est une variation aléatoire, tantôt vers le haut, tantôt vers le bas : en moyennant plusieurs images, ces écarts se compensent en partie, alors que la vraie valeur de la scène reste la même. L'image finale est plus propre.",
                "Résultat : position 4 ; fonction de recherche du maximum renvoyant i_max + 1 ; valeur verte retenue 100.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la construction d'une photo numérique.",
            items: [
              "L'objectif concentre la lumière de la scène sur le capteur",
              "Chaque photosite, derrière son filtre coloré, accumule une charge proportionnelle à la lumière reçue",
              "Le convertisseur analogique-numérique transforme chaque charge en nombre",
              "Le dématriçage calcule les trois composantes RVB de chaque pixel",
              "Les corrections automatiques sont appliquées : balance des blancs, réduction du bruit, netteté",
              "L'image est compressée en JPEG et enregistrée avec ses métadonnées",
            ],
          },
          quiz: [
            {
              q: "Que mesure un photosite ?",
              options: [
                "Les trois composantes RVB d'un pixel",
                "Une quantité de lumière",
                "La distance de l'objet photographié",
                "La position GPS de l'appareil",
              ],
              answer: 1,
              why: "Un photosite mesure une intensité lumineuse derrière un filtre rouge, vert ou bleu : une seule valeur, pas trois.",
            },
            {
              q: "Dans la matrice de Bayer, quelle proportion des photosites porte un filtre vert ?",
              options: [
                "Un tiers",
                "Un quart",
                "Les trois quarts",
                "La moitié",
              ],
              answer: 3,
              why: "Chaque carré de 2 × 2 contient deux filtres verts, un rouge et un bleu, car l'œil est plus sensible au vert.",
            },
            {
              q: "À quoi sert le dématriçage ?",
              options: [
                "À calculer les composantes manquantes",
                "À compresser l'image au format JPEG",
                "À enlever les métadonnées du fichier",
                "À régler la mise au point avant la prise de vue",
              ],
              answer: 0,
              why: "Chaque photosite ne mesure qu'une composante ; le dématriçage calcule les deux autres par interpolation à partir des voisins.",
            },
            {
              q: "Quel traitement supprime la teinte orangée d'une photo prise sous une lampe à incandescence ?",
              options: [
                "La réduction du bruit",
                "L'accentuation des contours",
                "La balance des blancs",
                "La compression",
              ],
              answer: 2,
              why: "La balance des blancs corrige la dominante de couleur due à l'éclairage pour que le blanc paraisse blanc.",
            },
            {
              q: "Qui construit en 1975 le premier prototype d'appareil photo numérique ?",
              options: [
                "Nicéphore Niépce",
                "Louis Daguerre",
                "Bryce Bayer",
                "Steven Sasson",
              ],
              answer: 3,
              why: "Steven Sasson, ingénieur chez Kodak, réalise ce prototype en 1975 ; Niépce et Daguerre sont des pionniers du XIXe siècle.",
            },
          ],
          trap: "Croire qu'un capteur de 12 Mpx mesure 12 millions de pixels en couleurs : il compte 12 millions de photosites qui mesurent chacun une seule composante, et deux composantes sur trois de chaque pixel sont calculées. Autre erreur : penser que la photo est une copie fidèle de la scène, alors qu'elle résulte de nombreux traitements algorithmiques.",
          method: "Apprenez la chaîne de construction de l'image comme une suite d'étapes numérotées (objectif, photosites, conversion, dématriçage, corrections, compression) et, pour chaque étape, retenez un mot clé et ce qui entre et sort : lumière, charges, nombres, pixels, image corrigée, fichier.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'exif-retouche',
          title: 'Métadonnées EXIF et retouche d\'image',
          minutes: 35,
          objectives: [
            "Retrouver les métadonnées d'une photographie et expliquer ce qu'elles révèlent.",
            "Traiter par programme une image pour la transformer en agissant sur les trois composantes de ses pixels.",
            "Identifier les enjeux de vie privée et d'authenticité liés aux métadonnées et à la retouche.",
          ],
          course: [
            {
              heading: "Les métadonnées EXIF : la carte d'identité d'une photo",
              paragraphs: [
                "Un fichier photo ne contient pas seulement les pixels de l'image : il contient aussi des métadonnées, c'est-à-dire des données qui décrivent la photographie. Pour les photos, le format le plus répandu est EXIF (Exchangeable Image File Format), une norme apparue dans les années 1990 et utilisée par presque tous les appareils photo et smartphones. Les métadonnées sont enregistrées automatiquement dans le fichier (JPEG, HEIF ou RAW) au moment de la prise de vue ; elles ne sont pas visibles sur l'image elle-même.",
                "On y trouve en général : la date et l'heure de la prise de vue ; la marque et le modèle de l'appareil ; les réglages utilisés (temps de pose, par exemple 1/125 s ; ouverture, par exemple f/1,8 ; sensibilité ISO ; focale ; déclenchement ou non du flash) ; la définition et l'orientation de l'image ; parfois le logiciel qui l'a modifiée ; et, si la localisation est activée, les coordonnées GPS du lieu (latitude, longitude, parfois altitude).",
              ],
              box: { label: "Définition", text: "Métadonnées EXIF : données enregistrées dans le fichier d'une photo qui décrivent la prise de vue (date, heure, appareil, réglages, définition, orientation, et souvent position GPS), sans faire partie de l'image visible." },
            },
            {
              heading: "Retrouver les métadonnées et s'en protéger",
              paragraphs: [
                "Les métadonnées se lisent facilement : dans les propriétés du fichier sur un ordinateur (onglet « Détails » sous Windows, fenêtre « Lire les informations » ou inspecteur de l'application Aperçu sous macOS), dans la fiche d'information d'une photo dans la galerie d'un smartphone, ou avec un logiciel de visualisation ou de retouche. Les logiciels de gestion de photos s'en servent pour classer les images par date ou les placer sur une carte.",
                "Elles posent un problème de vie privée : une photo prise chez soi et partagée avec ses coordonnées GPS révèle l'adresse du domicile ; une série de photos peut révéler des habitudes (horaires, lieux fréquentés). Certaines plateformes suppriment les métadonnées lors de la publication, mais pas toutes, et l'envoi d'un fichier par courriel ou par certaines messageries les conserve souvent. Pour se protéger, on peut désactiver la géolocalisation de l'appareil photo, ou supprimer les métadonnées avant de partager (fonction proposée par de nombreux téléphones et logiciels).",
                "Enfin, les métadonnées se modifient sans difficulté : une date ou un lieu inscrits dans un fichier ne prouvent rien à eux seuls. Elles sont un indice, que les journalistes qui vérifient l'origine d'une image croisent avec d'autres informations.",
              ],
              box: { label: "À retenir", text: "Les métadonnées EXIF sont utiles (classer, retrouver, localiser) mais peuvent révéler des informations personnelles, en particulier le lieu de prise de vue. Elles peuvent être supprimées ou falsifiées : ce ne sont pas des preuves." },
            },
            {
              heading: "Transformer une image par programme",
              paragraphs: [
                "Une image étant un tableau de pixels de trois composantes, on peut la transformer avec un programme qui parcourt tous les pixels et modifie leurs composantes. En Python, on utilise le module PIL (bibliothèque Pillow). On ouvre l'image avec img = Image.open('photo.jpg') après avoir écrit from PIL import Image ; on récupère ses dimensions avec largeur, hauteur = img.size.",
                "On parcourt ensuite tous les pixels avec deux boucles imbriquées : for x in range(largeur): puis, indenté, for y in range(hauteur):. Dans la seconde boucle, r, v, b = img.getpixel((x, y)) lit les trois composantes du pixel (x, y), et img.putpixel((x, y), (nr, nv, nb)) lui donne une nouvelle couleur ; les nouvelles composantes doivent être des entiers de 0 à 255. Après les boucles, img.save('resultat.png') enregistre le résultat dans un nouveau fichier.",
                "Une image de 800 × 600 pixels demande 480 000 passages dans la boucle : l'ordinateur les exécute en quelques secondes. Les logiciels de retouche appliquent le même principe, avec des programmes beaucoup plus rapides.",
              ],
              box: { label: "Repère", text: "from PIL import Image ; img = Image.open('photo.jpg') ; largeur, hauteur = img.size ; img.getpixel((x, y)) renvoie (r, v, b) ; img.putpixel((x, y), (r, v, b)) modifie un pixel ; img.save('nom.png') enregistre." },
            },
            {
              heading: "Quelques transformations classiques",
              paragraphs: [
                "Négatif : chaque composante c devient 255 - c ; le noir devient blanc et le rouge (255, 0, 0) devient cyan (0, 255, 255). Niveaux de gris : on remplace les trois composantes par une même valeur g, par exemple la moyenne g = (r + v + b) // 3 ; une formule plus fidèle à la perception tient compte de la sensibilité de l'œil, plus grande pour le vert : g = 0,299 × r + 0,587 × v + 0,114 × b, arrondi à l'entier.",
                "Luminosité : pour éclaircir, on ajoute une même valeur à chaque composante sans dépasser 255, avec min(255, c + 50) ; pour assombrir, on soustrait sans descendre sous 0, avec max(0, c - 50). Seuillage (noir et blanc) : on calcule le gris g, puis le pixel devient noir si g < 128 et blanc sinon. Filtre de couleur : en gardant seulement la composante rouge, (r, 0, 0), on obtient une image en nuances de rouge. Symétrie gauche-droite : le pixel (x, y) est copié en (largeur - 1 - x, y) dans une nouvelle image.",
              ],
              box: { label: "Formule", text: "Négatif : (255 - r, 255 - v, 255 - b). Gris moyen : g = (r + v + b) // 3, puis (g, g, g). Éclaircir : min(255, c + k). Seuillage : noir si g < 128, blanc sinon. Symétrie : (x, y) → (largeur - 1 - x, y)." },
            },
            {
              heading: "Retouche et authenticité",
              paragraphs: [
                "La retouche est ancienne (on retouchait déjà les négatifs argentiques), mais le numérique la rend facile et indétectable à l'œil : on peut effacer un objet, modifier une silhouette, assembler plusieurs images. En France, depuis 2017, les photographies à usage commercial dont la silhouette d'un mannequin a été affinée ou épaissie par un logiciel doivent porter la mention « Photographie retouchée ».",
                "Aujourd'hui, des outils d'intelligence artificielle permettent même de générer des images entièrement fausses mais réalistes, ou de remplacer un visage par un autre (hypertrucage, en anglais deepfake). Face à une image surprenante, il faut donc garder un esprit critique : chercher sa source et sa date, effectuer une recherche d'image inversée pour retrouver l'original, examiner les métadonnées en sachant qu'elles peuvent être modifiées, et comparer avec d'autres sources fiables.",
              ],
            },
          ],
          keyPoints: [
            "Les métadonnées EXIF décrivent la prise de vue : date, heure, appareil, réglages, définition, et souvent position GPS.",
            "On les lit dans les propriétés du fichier, la galerie du téléphone ou un logiciel ; on peut les supprimer avant de partager.",
            "Les coordonnées GPS d'une photo peuvent révéler un domicile ; les métadonnées peuvent aussi être falsifiées.",
            "Avec Pillow : getpixel((x, y)) lit (r, v, b), putpixel((x, y), (r, v, b)) modifie, deux boucles parcourent tous les pixels.",
            "Négatif : 255 - c ; gris : (r + v + b) // 3 ; éclaircir : min(255, c + k) ; seuillage à 128.",
            "Depuis 2017 en France, la mention « Photographie retouchée » est obligatoire si la silhouette d'un mannequin a été modifiée sur une photo commerciale.",
          ],
          example: {
            statement: "Écrivez un programme Python qui transforme l'image photo.jpg en son négatif et enregistre le résultat dans negatif.png. Décrivez chaque ligne, puis donnez le négatif du pixel (30, 144, 255).",
            solution: [
              "Ligne 1 : from PIL import Image (importer le module de traitement d'image).",
              "Ligne 2 : img = Image.open('photo.jpg') (ouvrir l'image) ; ligne 3 : largeur, hauteur = img.size (récupérer ses dimensions).",
              "Lignes 4 et 5 : for x in range(largeur): puis, indenté, for y in range(hauteur): (parcourir toutes les colonnes et toutes les lignes).",
              "Ligne 6, dans la seconde boucle : r, v, b = img.getpixel((x, y)) (lire les trois composantes du pixel).",
              "Ligne 7 : img.putpixel((x, y), (255 - r, 255 - v, 255 - b)) (remplacer chaque composante par son complément à 255).",
              "Ligne 8, après les boucles, sans indentation : img.save('negatif.png').",
              "Pixel (30, 144, 255) : 255 - 30 = 225 ; 255 - 144 = 111 ; 255 - 255 = 0.",
              "Réponse : le programme parcourt tous les pixels avec deux boucles ; le négatif du pixel est (225, 111, 0), un orange.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici des métadonnées lues dans les propriétés d'une photo (données fictives) : date et heure : 21/06/2026 18:47:12 ; appareil : smartphone « Phonix A12 » ; définition : 4 032 × 3 024 ; temps de pose : 1/500 s ; ouverture : f/1,8 ; sensibilité : ISO 50 ; flash : non déclenché ; latitude : 45,7640° N ; longitude : 4,8357° E. (1) Quand la photo a-t-elle été prise ? (2) Quelles métadonnées décrivent les réglages de la prise de vue ? (3) Quelle information pose un problème de vie privée si la photo a été prise au domicile ? Que conseillez-vous avant de la publier ?",
              hint: "Distinguez ce qui décrit le moment, l'appareil, les réglages et le lieu. Les réglages sont ceux qui déterminent la quantité de lumière reçue.",
              solution: [
                "(1) Le 21 juin 2026 à 18 h 47 min 12 s.",
                "(2) Réglages : le temps de pose (1/500 s), l'ouverture (f/1,8), la sensibilité (ISO 50) et le flash (non déclenché).",
                "(3) La latitude et la longitude donnent le lieu exact de la prise de vue : si elle a été prise au domicile, elles révèlent l'adresse. Avant de publier, il faut supprimer ces métadonnées (ou toutes les métadonnées), et désactiver à l'avenir la géolocalisation de l'appareil photo.",
                "Résultat : photo du 21 juin 2026 à 18 h 47 ; quatre réglages ; les coordonnées GPS sont à supprimer avant publication.",
              ],
            },
            {
              level: 2,
              statement: "Un pixel a pour couleur (200, 120, 40). Calculez sa nouvelle couleur après chacune des transformations suivantes, appliquées séparément : (1) le négatif ; (2) le passage en niveaux de gris par la moyenne g = (r + v + b) // 3 ; (3) le passage en niveaux de gris par la formule g = 0,299 × r + 0,587 × v + 0,114 × b, arrondie à l'entier ; (4) un éclaircissement de 80 avec min(255, c + 80) ; (5) un seuillage : noir si le gris moyen est inférieur à 128, blanc sinon.",
              hint: "Traitez chaque composante séparément. Pour l'éclaircissement, une composante qui dépasserait 255 est ramenée à 255.",
              solution: [
                "(1) Négatif : (255 - 200, 255 - 120, 255 - 40) = (55, 135, 215).",
                "(2) Moyenne : (200 + 120 + 40) // 3 = 360 // 3 = 120, d'où le gris (120, 120, 120).",
                "(3) 0,299 × 200 + 0,587 × 120 + 0,114 × 40 = 59,8 + 70,44 + 4,56 = 134,8, arrondi à 135 : le gris (135, 135, 135), un peu plus clair, car la formule donne plus de poids au vert.",
                "(4) 200 + 80 = 280, ramené à 255 ; 120 + 80 = 200 ; 40 + 80 = 120 : (255, 200, 120).",
                "(5) Le gris moyen vaut 120, inférieur à 128 : le pixel devient noir, (0, 0, 0).",
                "Résultat : (55, 135, 215) ; (120, 120, 120) ; (135, 135, 135) ; (255, 200, 120) ; (0, 0, 0).",
              ],
            },
            {
              level: 3,
              statement: "On considère le programme suivant, décrit ligne par ligne : from PIL import Image ; img = Image.open('portrait.jpg') ; largeur, hauteur = img.size ; for x in range(largeur): ; dans cette boucle, for y in range(hauteur): ; dans la seconde boucle : r, v, b = img.getpixel((x, y)) ; g = (r + v + b) // 3 ; if g < 128: img.putpixel((x, y), (0, 0, 0)) ; else: img.putpixel((x, y), (255, 255, 255)) ; après les boucles : img.save('resultat.png'). (1) Quelle transformation ce programme réalise-t-il ? (2) Que deviennent les pixels (30, 200, 100) et (250, 180, 90) ? (3) L'image mesure 800 × 600 pixels. Combien de fois la ligne g = (r + v + b) // 3 est-elle exécutée ? (4) Écrivez un programme qui enregistre dans miroir.png l'image symétrique de portrait.jpg par rapport à un axe vertical (symétrie gauche-droite). Pourquoi faut-il écrire dans une nouvelle image ?",
              hint: "Pour la symétrie, créez une image vide de même taille avec Image.new('RGB', (largeur, hauteur)), puis copiez le pixel (x, y) à la position (largeur - 1 - x, y).",
              solution: [
                "(1) Pour chaque pixel, le programme calcule le gris moyen g, puis rend le pixel noir si g < 128 et blanc sinon : c'est un seuillage, qui transforme la photo en image en noir et blanc pur (deux couleurs seulement).",
                "(2) (30, 200, 100) : g = 330 // 3 = 110 < 128, le pixel devient noir. (250, 180, 90) : g = 520 // 3 = 173 ≥ 128, le pixel devient blanc.",
                "(3) La ligne est exécutée une fois par pixel : 800 × 600 = 480 000 fois.",
                "(4) from PIL import Image ; img = Image.open('portrait.jpg') ; largeur, hauteur = img.size ; nouv = Image.new('RGB', (largeur, hauteur)) ; for x in range(largeur): ; dans cette boucle, for y in range(hauteur): ; dans la seconde boucle : nouv.putpixel((largeur - 1 - x, y), img.getpixel((x, y))) ; après les boucles : nouv.save('miroir.png').",
                "Vérification : le pixel de la colonne 0 va dans la colonne largeur - 1 (le dernier), et réciproquement : la gauche et la droite sont échangées.",
                "Si l'on écrivait dans l'image d'origine, on écraserait les pixels de droite avant de les avoir copiés à gauche : la moitié de l'image serait perdue et le résultat serait faux. La nouvelle image garde l'original intact pendant toute la copie.",
                "Résultat : seuillage en noir et blanc ; noir puis blanc ; 480 000 exécutions ; symétrie obtenue en copiant (x, y) vers (largeur - 1 - x, y) dans une nouvelle image.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Métadonnées et retouche d'image.",
            statements: [
              { text: "Les métadonnées EXIF s'affichent sur l'image elle-même.", true: false, why: "Elles sont enregistrées dans le fichier, à côté des pixels, et ne sont visibles que dans les propriétés ou un logiciel." },
              { text: "Une photo prise avec un smartphone peut contenir les coordonnées GPS du lieu de prise de vue.", true: true, why: "Si la localisation de l'appareil photo est activée, la latitude et la longitude sont inscrites dans les métadonnées." },
              { text: "La date inscrite dans les métadonnées prouve de façon certaine le jour de la prise de vue.", true: false, why: "Les métadonnées se modifient facilement : ce sont des indices, pas des preuves." },
              { text: "Le négatif d'une composante c s'obtient en calculant 255 - c.", true: true, why: "0 devient 255 et 255 devient 0 : le noir devient blanc, et chaque couleur devient sa complémentaire." },
              { text: "Mettre la composante rouge de tous les pixels à 0 donne une image en niveaux de gris.", true: false, why: "Il reste le vert et le bleu : l'image prend des teintes cyan. Le gris exige R = V = B." },
              { text: "Pour éclaircir une image, on ajoute une valeur à chaque composante sans dépasser 255.", true: true, why: "On utilise min(255, c + k), car une composante ne peut pas dépasser 255." },
              { text: "Toutes les plateformes et messageries suppriment les métadonnées des photos envoyées.", true: false, why: "Certaines les suppriment, d'autres non, et l'envoi par courriel les conserve souvent : mieux vaut les retirer soi-même." },
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces informations n'est pas une métadonnée EXIF ?",
              options: [
                "Le temps de pose utilisé",
                "La couleur d'un pixel",
                "Le modèle de l'appareil photo",
                "La date de la prise de vue",
              ],
              answer: 1,
              why: "La couleur d'un pixel fait partie de l'image elle-même ; les autres informations décrivent la prise de vue.",
            },
            {
              q: "Quel est le négatif du pixel (10, 200, 255) ?",
              options: [
                "(245, 55, 0)",
                "(0, 55, 245)",
                "(255, 200, 10)",
                "(10, 200, 0)",
              ],
              answer: 0,
              why: "On calcule 255 - c pour chaque composante : 245, 55 et 0, dans le même ordre.",
            },
            {
              q: "Quel gris obtient-on à partir du pixel (90, 150, 210) avec la moyenne des composantes ?",
              options: [
                "(90, 90, 90)",
                "(210, 210, 210)",
                "(150, 150, 150)",
                "(450, 450, 450)",
              ],
              answer: 2,
              why: "(90 + 150 + 210) ÷ 3 = 450 ÷ 3 = 150, et le gris s'obtient avec trois composantes égales.",
            },
            {
              q: "Avec Pillow, quelle instruction modifie la couleur d'un pixel ?",
              options: [
                "img.size",
                "Image.open('portrait.jpg')",
                "img.getpixel((x, y))",
                "img.putpixel((x, y), c)",
              ],
              answer: 3,
              why: "putpixel écrit une nouvelle couleur au pixel (x, y) ; getpixel ne fait que lire ses composantes.",
            },
            {
              q: "Quelle mention est obligatoire en France depuis 2017 sur une photo commerciale dont la silhouette du mannequin a été modifiée ?",
              options: [
                "« Image d'archive »",
                "« Photographie retouchée »",
                "« Données fictives »",
                "« Photo non contractuelle »",
              ],
              answer: 1,
              why: "La mention « Photographie retouchée » informe le public que la silhouette a été affinée ou épaissie par un logiciel.",
            },
          ],
          trap: "Oublier de limiter les valeurs entre 0 et 255 lors d'un éclaircissement ou d'un assombrissement (280 ou -20 ne sont pas des composantes valides), ou écrire une symétrie dans l'image d'origine, ce qui écrase des pixels avant qu'ils soient copiés. Côté métadonnées, l'erreur fréquente est de croire qu'elles disparaissent toujours quand on partage une photo.",
          method: "Avant d'écrire un programme de traitement d'image, calculez à la main l'effet de la transformation sur deux ou trois pixels (un clair, un sombre, un coloré) ; vous saurez ainsi ce que le programme doit produire et pourrez vérifier son résultat sur ces pixels.",
        },
      ],
    },
  ],
}
