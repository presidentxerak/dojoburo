import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'snt-2nde',
  chapters: [
    /* ================================================================== */
    /* PROGRAMMER EN PYTHON : LES BASES                                     */
    /* ================================================================== */
    {
      id: 'programmation-python',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'variables-types',
          title: 'Variables, types et affectations',
          minutes: 30,
          objectives: [
            "Écrire et exécuter des affectations de variables en Python.",
            "Identifier le type d'une valeur (int, float, str, bool) et convertir une valeur d'un type à un autre.",
            "Utiliser les opérateurs arithmétiques, dont la division entière // et le reste %.",
            "Prévoir l'état des variables après une séquence d'instructions à l'aide d'un tableau d'état.",
          ],
          course: [
            {
              heading: "Variables et affectation",
              paragraphs: [
                "Un programme manipule des données : un âge, un prix, un prénom, un résultat de calcul. Pour les conserver et les réutiliser, on les range dans des variables. Une variable est un nom associé à une valeur stockée dans la mémoire de l'ordinateur. On peut se la représenter comme une boîte munie d'une étiquette : l'étiquette est le nom de la variable, le contenu de la boîte est sa valeur.",
                "En Python, on crée ou on modifie une variable par une affectation, écrite avec le signe =. L'instruction age = 15 se lit « age reçoit 15 » : Python évalue d'abord ce qui est à droite du signe =, puis range le résultat dans la variable dont le nom est à gauche. Le signe = n'a donc pas le sens de l'égalité mathématique : l'instruction x = x + 1 est absurde en mathématiques, mais parfaitement correcte en Python. Elle calcule x + 1 avec l'ancienne valeur de x, puis remplace cette ancienne valeur par le résultat. Si x valait 4, il vaut 5 après l'instruction.",
                "Le nom d'une variable est composé de lettres, de chiffres et du caractère souligné _, sans espace, et ne commence pas par un chiffre : prix_ht, note1 et nombre_eleves sont valides, 1note et prix ht ne le sont pas. Python distingue les majuscules des minuscules (Age et age sont deux variables différentes) et interdit les mots réservés du langage (if, for, def, return...). On choisit des noms explicites et on évite les accents, par prudence.",
              ],
              box: { label: "Définition", text: "Une variable est un nom qui désigne une valeur rangée en mémoire. L'affectation nom = expression calcule d'abord l'expression de droite, puis donne sa valeur à la variable de gauche ; l'ancienne valeur est perdue." },
            },
            {
              heading: "Les types de base",
              paragraphs: [
                "Chaque valeur possède un type, qui détermine les opérations possibles. Les quatre types de base sont : int, les nombres entiers (15, -3, 0) ; float, les nombres à virgule, appelés flottants, que l'on écrit avec un point (3.5, -0.25, 2.0) ; str, les chaînes de caractères, écrites entre apostrophes ou entre guillemets ('Bonjour', '15') ; bool, les booléens, qui ne prennent que deux valeurs, True (vrai) et False (faux). La fonction type() donne le type d'une valeur : type(3.5) renvoie float.",
                "Les opérations usuelles sont l'addition +, la soustraction -, la multiplication * et la puissance ** (2 ** 3 vaut 8). La division / donne toujours un flottant : 7 / 2 vaut 3.5 et 6 / 2 vaut 3.0. Pour les entiers, deux opérateurs sont très utiles : la division entière //, qui donne le quotient (7 // 2 vaut 3), et le reste %, appelé modulo (7 % 2 vaut 1). Un nombre n est pair exactement quand n % 2 vaut 0.",
                "Les chaînes de caractères ont leurs propres opérations : + met deux chaînes bout à bout (on parle de concaténation : 'SN' + 'T' vaut 'SNT'), * répète une chaîne ('ab' * 3 vaut 'ababab') et len() donne la longueur ('Python' a 6 caractères). Attention : '15' est une chaîne, pas un nombre. '15' + '3' vaut '153', et '15' + 3 provoque une erreur (TypeError), car Python refuse d'additionner une chaîne et un entier.",
              ],
              box: { label: "Repère", text: "int : 15 ; float : 15.0 ou 3.5 ; str : '15' ; bool : True ou False. 17 / 5 vaut 3.4 ; 17 // 5 vaut 3 ; 17 % 5 vaut 2, car 17 = 5 × 3 + 2." },
            },
            {
              heading: "Saisir, afficher et convertir",
              paragraphs: [
                "La fonction print() affiche des valeurs à l'écran : print('Total :', 12) affiche Total : 12, les valeurs séparées par des virgules étant affichées avec une espace entre elles. La fonction input() demande à l'utilisateur de saisir une réponse au clavier : nom = input('Votre prénom ? ') affiche la question, attend la saisie et range le texte tapé dans la variable nom.",
                "Point essentiel : input() renvoie toujours une chaîne de caractères, même si l'utilisateur tape un nombre. Si l'on veut calculer avec la réponse, il faut la convertir. Les fonctions de conversion portent le nom du type visé : int('15') vaut 15, float('2.5') vaut 2.5, str(15) vaut '15'. On écrit donc age = int(input('Votre âge ? ')) pour obtenir un entier. Une conversion impossible, comme int('quinze'), provoque une erreur (ValueError).",
              ],
              box: { label: "À retenir", text: "input() renvoie toujours une chaîne (str). Pour calculer, on convertit : int(input(...)) pour un entier, float(input(...)) pour un nombre à virgule." },
            },
            {
              heading: "Séquence d'instructions et tableau d'état",
              paragraphs: [
                "Un programme est une séquence d'instructions exécutées l'une après l'autre, de haut en bas. La valeur d'une variable à un moment donné dépend donc de toutes les affectations précédentes. Pour suivre l'exécution à la main, on construit un tableau d'état : une ligne par instruction, une colonne par variable, et l'on note après chaque instruction la valeur de chaque variable.",
                "Exemple : avec a = 2, puis b = a * 3, puis a = a + b, le tableau donne a = 2 (b n'existe pas encore), puis a = 2 et b = 6, puis a = 8 et b = 6. Remarquez que b a été calculé avec l'ancienne valeur de a : modifier a ensuite ne change pas b. Pour échanger les valeurs de deux variables, on utilise une variable temporaire (temp = a, puis a = b, puis b = temp) ou l'affectation multiple propre à Python, a, b = b, a.",
              ],
            },
          ],
          keyPoints: [
            "Une variable est un nom associé à une valeur en mémoire ; l'affectation x = expression calcule la droite puis range le résultat à gauche.",
            "Quatre types de base : int (entier), float (flottant, écrit avec un point), str (chaîne entre apostrophes), bool (True ou False).",
            "/ donne toujours un flottant ; // donne le quotient entier et % le reste : 17 // 5 = 3 et 17 % 5 = 2.",
            "input() renvoie toujours une chaîne : on la convertit avec int() ou float() avant de calculer.",
            "Les instructions s'exécutent dans l'ordre ; un tableau d'état permet de suivre la valeur de chaque variable.",
          ],
          example: {
            statement: "On exécute la séquence suivante, une instruction par ligne : a = 3 ; b = 5 ; a = a + b ; b = a - b ; a = a - b. Construire le tableau d'état et indiquer ce que fait ce programme.",
            solution: [
              "Ligne 1 : a = 3. État : a = 3, b n'existe pas encore.",
              "Ligne 2 : b = 5. État : a = 3, b = 5.",
              "Ligne 3 : a = a + b = 3 + 5 = 8. État : a = 8, b = 5.",
              "Ligne 4 : b = a - b = 8 - 5 = 3. État : a = 8, b = 3.",
              "Ligne 5 : a = a - b = 8 - 3 = 5. État : a = 5, b = 3.",
              "Réponse : à la fin, a = 5 et b = 3. Le programme a échangé les valeurs de a et de b sans utiliser de variable temporaire.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donner la valeur et le type (int, float, str ou bool) de chacune des expressions Python suivantes : a) 17 // 5 ; b) 17 % 5 ; c) 17 / 5 ; d) '17' + '5' ; e) 2 ** 3 ; f) 10 / 5 ; g) 17 % 2 == 1.",
              hint: "Rappelez-vous que / renvoie toujours un flottant, que // et % donnent le quotient et le reste de la division entière, et que + colle deux chaînes.",
              solution: [
                "a) 17 = 5 × 3 + 2, donc 17 // 5 vaut 3, de type int.",
                "b) Le reste de cette division est 2 : 17 % 5 vaut 2, de type int.",
                "c) 17 / 5 vaut 3.4, de type float.",
                "d) Ce sont deux chaînes : la concaténation donne '175', de type str.",
                "e) 2 ** 3 = 2 × 2 × 2 vaut 8, de type int.",
                "f) La division / donne un flottant même quand elle tombe juste : 10 / 5 vaut 2.0, de type float.",
                "g) 17 % 2 vaut 1, donc la comparaison 1 == 1 est vraie : la valeur est True, de type bool.",
              ],
            },
            {
              level: 2,
              statement: "Un élève écrit le programme suivant pour calculer un prix toutes taxes comprises (TTC) avec une TVA de 20 %, une instruction par ligne : prix_ht = input('Prix HT ? ') ; ttc = prix_ht * 1.2 ; print('Prix TTC :', ttc). a) À l'exécution, il saisit 45 et obtient une erreur. Expliquer pourquoi. b) Corriger la première ligne. c) Qu'affiche alors le programme corrigé pour une saisie de 45 ?",
              hint: "Demandez-vous quel est le type de la valeur renvoyée par input(), puis si l'on peut multiplier ce type par un flottant.",
              solution: [
                "a) input() renvoie toujours une chaîne : prix_ht vaut '45' (type str), et non le nombre 45.",
                "Multiplier une chaîne par un flottant n'a pas de sens pour Python : l'instruction ttc = prix_ht * 1.2 provoque une erreur TypeError.",
                "b) Il faut convertir la saisie en nombre : prix_ht = float(input('Prix HT ? ')). On choisit float, car un prix peut avoir des centimes.",
                "c) prix_ht vaut 45.0, puis ttc = 45.0 × 1.2 = 54.0.",
                "Résultat : le programme affiche Prix TTC : 54.0.",
              ],
            },
            {
              level: 3,
              statement: "Une vidéo dure 7384 secondes. a) À l'aide des opérateurs // et %, écrire une séquence d'instructions Python qui calcule, à partir de la variable duree = 7384, le nombre d'heures h, de minutes m et de secondes s restantes (avec m et s inférieurs à 60). b) Faire le calcul à la main et indiquer ce qu'affiche print(h, 'h', m, 'min', s, 's'). c) Vérifier le résultat par un calcul inverse.",
              hint: "Une heure dure 3600 secondes : commencez par le quotient et le reste de duree par 3600, puis découpez ce reste en minutes.",
              solution: [
                "a) Une solution, une instruction par ligne : duree = 7384 ; h = duree // 3600 ; reste = duree % 3600 ; m = reste // 60 ; s = reste % 60.",
                "b) 7384 = 3600 × 2 + 184, donc h = 2 et reste = 184.",
                "Puis 184 = 60 × 3 + 4, donc m = 3 et s = 4.",
                "L'instruction print(h, 'h', m, 'min', s, 's') affiche : 2 h 3 min 4 s.",
                "c) Vérification : 2 × 3600 + 3 × 60 + 4 = 7200 + 180 + 4 = 7384 secondes.",
                "Résultat : la vidéo dure 2 h 3 min 4 s.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque expression Python à sa valeur.",
            pairs: [
              { left: "7 // 2", right: "3" },
              { left: "7 % 2", right: "1" },
              { left: "7 / 2", right: "3.5" },
              { left: "2 ** 3", right: "8" },
              { left: "'ab' * 2", right: "'abab'" },
              { left: "'3' + '4'", right: "'34'" },
            ],
          },
          quiz: [
            { q: "Après les instructions x = 4 puis x = x + 3, que vaut x ?", options: ["4", "7", "Erreur : x ne peut pas valoir x + 3", "3"], answer: 1, why: "Python calcule d'abord x + 3 avec l'ancienne valeur 4, puis range 7 dans x." },
            { q: "Quel est le type de la valeur renvoyée par input() ?", options: ["int", "float", "bool", "str"], answer: 3, why: "input() renvoie toujours une chaîne de caractères, même si l'utilisateur tape un nombre." },
            { q: "Que vaut l'expression 23 % 4 ?", options: ["3", "5", "5.75", "4"], answer: 0, why: "23 = 4 × 5 + 3 : le reste de la division entière de 23 par 4 est 3." },
            { q: "Lequel de ces noms de variable est invalide en Python ?", options: ["note_maths", "Note2", "2note", "_total"], answer: 2, why: "Un nom de variable ne peut pas commencer par un chiffre." },
            { q: "Que vaut 9 / 3 en Python ?", options: ["3", "3.0", "'3'", "True"], answer: 1, why: "La division / renvoie toujours un flottant, même quand le résultat est entier." },
          ],
          trap: "Confondre l'affectation = avec l'égalité mathématique, ou oublier que input() renvoie une chaîne : '15' + 3 provoque une erreur et '15' + '3' donne '153', pas 18.",
          method: "Pour prévoir le résultat d'un programme, ne le lisez pas « en gros » : construisez un tableau d'état, une ligne par instruction et une colonne par variable, et calculez chaque nouvelle valeur avec les valeurs de la ligne précédente.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'conditions-boucles',
          title: 'Instructions conditionnelles et boucles',
          minutes: 35,
          objectives: [
            "Écrire une condition à l'aide des opérateurs de comparaison et des opérateurs logiques and, or, not.",
            "Écrire une instruction conditionnelle avec if, elif et else.",
            "Écrire une boucle bornée (for) et une boucle non bornée (while).",
            "Choisir le type de boucle adapté à un problème et prévoir le nombre de tours effectués.",
          ],
          course: [
            {
              heading: "Conditions et booléens",
              paragraphs: [
                "Une condition est une expression dont la valeur est un booléen : True (vrai) ou False (faux). On l'obtient le plus souvent par une comparaison : == (égal à), != (différent de), < (strictement inférieur), <= (inférieur ou égal), > (strictement supérieur), >= (supérieur ou égal). Avec age = 15, la condition age >= 18 vaut False et age != 18 vaut True.",
                "Ne confondez pas = et == : age = 15 est une affectation, qui donne une valeur à la variable, tandis que age == 15 est une comparaison, qui teste une valeur sans la modifier. On combine des conditions avec les opérateurs logiques : and (et) est vrai quand les deux conditions sont vraies, or (ou) quand au moins l'une est vraie, not (non) inverse une condition. Ainsi age >= 12 and age < 18 est vrai pour un adolescent de 15 ans.",
              ],
              box: { label: "Repère", text: "== teste l'égalité, != la différence. A and B est vrai si A et B sont vrais ; A or B est vrai si au moins l'un des deux est vrai ; not A est vrai si A est faux." },
            },
            {
              heading: "L'instruction conditionnelle if, elif, else",
              paragraphs: [
                "L'instruction conditionnelle permet d'exécuter des instructions seulement si une condition est vraie. Elle s'écrit if condition: suivi, sur les lignes suivantes, d'un bloc d'instructions décalées vers la droite (indentées, en général de quatre espaces). Le mot else: introduit le bloc exécuté quand la condition est fausse. Les deux-points et l'indentation sont obligatoires : c'est l'indentation qui indique à Python où commence et où finit chaque bloc.",
                "Quand il y a plus de deux cas, on enchaîne les tests avec elif (contraction de else if). Python teste les conditions dans l'ordre et exécute uniquement le bloc de la première condition vraie, puis passe à la suite du programme. Exemple de tarif (données fictives), une instruction par ligne : if age < 4: prix = 0 ; elif age < 12: prix = 8 ; else: prix = 15. Pour age = 10, la première condition est fausse, la deuxième est vraie : prix vaut 8, et le else n'est pas examiné. L'ordre des tests compte : si l'on testait age < 12 en premier, un enfant de 2 ans paierait 8.",
              ],
              box: { label: "Règle", text: "if condition: bloc ; elif autre_condition: bloc ; else: bloc. Seul le bloc de la première condition vraie est exécuté. Chaque ligne d'en-tête se termine par deux-points et chaque bloc est indenté." },
            },
            {
              heading: "La boucle bornée for",
              paragraphs: [
                "Une boucle répète un bloc d'instructions. On utilise une boucle bornée quand le nombre de répétitions est connu à l'avance. En Python, elle s'écrit for i in range(n): suivi du bloc indenté, qui est exécuté n fois ; la variable i prend successivement les valeurs 0, 1, 2, ..., n - 1. Ainsi for i in range(3): print(i) affiche 0, 1 et 2, mais jamais 3.",
                "La fonction range admet d'autres formes : range(a, b) donne les entiers de a à b - 1, et range(a, b, p) les entiers de a à b - 1 avec un pas p. range(1, 6) donne 1, 2, 3, 4, 5 et range(0, 10, 2) donne 0, 2, 4, 6, 8. On peut aussi parcourir directement les caractères d'une chaîne : for lettre in 'SNT': print(lettre) affiche S, N puis T.",
                "Un usage fréquent est l'accumulation : on initialise une variable avant la boucle, puis on la met à jour à chaque tour. Pour calculer 1 + 2 + ... + 10, on écrit s = 0, puis for i in range(1, 11): s = s + i. Après la boucle, s vaut 55. L'initialisation doit être placée avant la boucle, sinon s serait remise à zéro à chaque tour.",
              ],
              box: { label: "À retenir", text: "range(n) : 0, 1, ..., n - 1 (n valeurs). range(a, b) : a, a + 1, ..., b - 1. La borne de fin n'est jamais atteinte." },
            },
            {
              heading: "La boucle non bornée while",
              paragraphs: [
                "Quand on ne sait pas à l'avance combien de répétitions seront nécessaires, on utilise une boucle non bornée : while condition: suivi d'un bloc indenté. Python teste la condition ; si elle est vraie, il exécute le bloc, puis revient tester la condition, et ainsi de suite. Dès que la condition est fausse, la boucle s'arrête et le programme continue après le bloc. Si la condition est fausse dès le départ, le bloc n'est jamais exécuté.",
                "Exemple : on double une somme de 1 € jusqu'à dépasser 100 €, une instruction par ligne : somme = 1 ; n = 0 ; while somme <= 100: (bloc indenté : somme = somme * 2 ; n = n + 1). Les valeurs successives de somme sont 1, 2, 4, 8, 16, 32, 64, 128 : la boucle s'arrête après 7 tours, avec somme = 128 et n = 7.",
                "Le danger de la boucle while est la boucle infinie : si rien dans le bloc ne fait évoluer la condition, elle reste vraie pour toujours et le programme ne s'arrête jamais (on l'interrompt alors à la main). Avant d'écrire une boucle while, vérifiez donc qu'une variable de la condition est modifiée dans le bloc et qu'elle finira par rendre la condition fausse.",
              ],
            },
          ],
          keyPoints: [
            "Une condition vaut True ou False ; = affecte, == compare.",
            "if, elif, else : seul le bloc de la première condition vraie est exécuté ; les deux-points et l'indentation sont obligatoires.",
            "for i in range(n) répète n fois le bloc, i prenant les valeurs 0 à n - 1 : boucle bornée, nombre de tours connu.",
            "while condition répète le bloc tant que la condition est vraie : boucle non bornée, nombre de tours inconnu à l'avance.",
            "Dans une boucle while, une variable de la condition doit évoluer, sinon la boucle est infinie.",
          ],
          example: {
            statement: "Écrire un programme Python qui calcule et affiche la somme des entiers de 1 à 100. Quel type de boucle choisir, et pourquoi ? Quel est le résultat ?",
            solution: [
              "On connaît à l'avance le nombre de termes à ajouter (100) : on choisit une boucle bornée for.",
              "On initialise un accumulateur avant la boucle : s = 0.",
              "Les entiers de 1 à 100 sont donnés par range(1, 101), car la borne de fin n'est pas atteinte.",
              "Programme, une instruction par ligne : s = 0 ; for i in range(1, 101): (bloc indenté : s = s + i) ; puis, sans indentation, print(s).",
              "Premiers tours : s vaut 1, puis 3, puis 6, puis 10... Le print est hors de la boucle, il s'exécute une seule fois à la fin.",
              "Réponse : le programme affiche 5050 (on vérifie avec la formule 100 × 101 ÷ 2 = 5050).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Écrire la liste des valeurs prises par i dans chacune des boucles suivantes : for i in range(5) ; for i in range(3, 8) ; for i in range(2, 11, 3). b) On exécute x = 14, puis if x % 2 == 0: print('pair') else: print('impair'). Qu'affiche le programme ? Et si x vaut 7 ?",
              hint: "La borne de fin de range n'est jamais atteinte ; pour le pas, ajoutez 3 à chaque fois tant que vous restez strictement sous 11.",
              solution: [
                "range(5) : i prend les valeurs 0, 1, 2, 3, 4 (cinq valeurs).",
                "range(3, 8) : i prend les valeurs 3, 4, 5, 6, 7.",
                "range(2, 11, 3) : 2, puis 5, puis 8 ; la valeur suivante, 11, n'est pas strictement inférieure à 11, elle est exclue.",
                "b) Pour x = 14 : 14 % 2 vaut 0, la condition est vraie, le programme affiche pair.",
                "Pour x = 7 : 7 % 2 vaut 1, la condition est fausse, le bloc else s'exécute et le programme affiche impair.",
              ],
            },
            {
              level: 2,
              statement: "Un parc de loisirs applique les tarifs suivants (données fictives) : gratuit pour les moins de 4 ans, 8 € de 4 à 11 ans inclus, 15 € à partir de 12 ans. a) Écrire un programme qui demande l'âge (entier) et affiche le prix. b) Indiquer le prix affiché pour les âges 3, 4, 11 et 12. c) Un camarade écrit les tests dans cet ordre : if age < 12: prix = 8 ; elif age < 4: prix = 0 ; else: prix = 15. Expliquer l'erreur.",
              hint: "Traduisez chaque tranche par une comparaison avec < et pensez à convertir la saisie en entier ; pour c), testez le programme du camarade avec un enfant de 2 ans.",
              solution: [
                "a) age = int(input('Âge ? ')) ; if age < 4: prix = 0 ; elif age < 12: prix = 8 ; else: prix = 15 ; print(prix, '€').",
                "Le elif age < 12 n'est examiné que si age < 4 est faux : il concerne donc bien les âges de 4 à 11 ans.",
                "b) Âge 3 : 3 < 4 est vrai, prix 0 €. Âge 4 : 4 < 4 est faux, 4 < 12 est vrai, prix 8 €.",
                "Âge 11 : 11 < 12 est vrai, prix 8 €. Âge 12 : les deux tests sont faux, prix 15 €.",
                "c) Pour un enfant de 2 ans, la première condition age < 12 est déjà vraie : le programme donne 8 € et n'examine jamais elif age < 4.",
                "Résultat : le bloc prix = 0 ne peut jamais s'exécuter ; il faut tester les tranches dans l'ordre croissant, en commençant par age < 4.",
              ],
            },
            {
              level: 3,
              statement: "On place 500 € sur un compte rémunéré à 4 % par an, les intérêts étant ajoutés au capital chaque année (données fictives). On cherche au bout de combien d'années le capital dépasse strictement 600 €. a) Expliquer pourquoi une boucle while est adaptée. b) Écrire le programme Python. c) Construire le tableau d'état (valeurs arrondies au centime) et donner le résultat affiché.",
              hint: "Augmenter de 4 % revient à multiplier par 1.04 ; la boucle doit continuer tant que le capital est inférieur ou égal à 600.",
              solution: [
                "a) On ne sait pas à l'avance combien d'années seront nécessaires : on répète le calcul tant qu'une condition est vérifiée, d'où une boucle non bornée while.",
                "b) Programme, une instruction par ligne : capital = 500 ; annees = 0 ; while capital <= 600: (bloc indenté : capital = capital * 1.04 ; annees = annees + 1) ; print(annees).",
                "c) Départ : capital = 500, annees = 0. Tour 1 : 520,00 € et 1 an. Tour 2 : 540,80 € et 2 ans.",
                "Tour 3 : 562,43 € et 3 ans. Tour 4 : 584,93 € et 4 ans ; 584,93 ≤ 600, la boucle continue.",
                "Tour 5 : 608,33 € et 5 ans ; la condition 608,33 ≤ 600 est fausse, la boucle s'arrête.",
                "Résultat : le programme affiche 5 ; le capital dépasse 600 € au bout de 5 ans.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : conditions et boucles en Python.",
            statements: [
              { text: "for i in range(4) affiche, avec print(i), les nombres 1, 2, 3 et 4.", true: false, why: "range(4) donne 0, 1, 2 et 3 : on commence à 0 et la borne 4 est exclue." },
              { text: "Dans if x = 5:, le signe = est correct pour tester si x vaut 5.", true: false, why: "Pour comparer, il faut ==. Le signe = sert à l'affectation, et if x = 5: provoque une erreur de syntaxe." },
              { text: "Avec if, elif et else, plusieurs blocs peuvent s'exécuter si plusieurs conditions sont vraies.", true: false, why: "Seul le bloc de la première condition vraie est exécuté, les suivantes ne sont pas examinées." },
              { text: "Le bloc d'une boucle while peut ne jamais être exécuté.", true: true, why: "Si la condition est fausse dès le premier test, Python passe directement à la suite." },
              { text: "En Python, c'est l'indentation qui délimite le bloc d'une boucle ou d'un if.", true: true, why: "Les lignes décalées après les deux-points forment le bloc ; le retour à la marge le termine." },
              { text: "La condition age >= 12 and age < 18 est vraie pour age = 18.", true: false, why: "18 < 18 est faux, donc la conjonction and est fausse." },
              { text: "Une boucle while dont la condition ne change jamais peut tourner indéfiniment.", true: true, why: "Si la condition reste vraie, c'est une boucle infinie." },
            ],
          },
          quiz: [
            { q: "Combien de fois le bloc de for k in range(2, 9) est-il exécuté ?", options: ["9 fois", "8 fois", "6 fois", "7 fois"], answer: 3, why: "k prend les valeurs 2, 3, 4, 5, 6, 7, 8 : sept valeurs, la borne 9 étant exclue." },
            { q: "Quelle boucle convient pour redemander un mot de passe jusqu'à ce qu'il soit correct ?", options: ["Une boucle while", "Une boucle for avec range(3)", "Une instruction if seule", "Aucune boucle n'est possible"], answer: 0, why: "On ne sait pas combien d'essais seront nécessaires : c'est une boucle non bornée." },
            { q: "Avec n = 15, que vaut la condition n > 10 or n % 2 == 0 ?", options: ["False", "True", "15", "Une erreur"], answer: 1, why: "n > 10 est vrai ; avec or, il suffit qu'une des deux conditions soit vraie." },
            { q: "Que vaut s après s = 0 puis for i in range(4): s = s + i ?", options: ["10", "4", "6", "0"], answer: 2, why: "i prend les valeurs 0, 1, 2, 3, donc s = 0 + 1 + 2 + 3 = 6." },
            { q: "Avec x = 0 puis while x < 10: x = x + 3, que vaut x à la fin ?", options: ["9", "10", "3", "12"], answer: 3, why: "x vaut 3, 6, 9 puis 12 ; 12 < 10 est faux, la boucle s'arrête avec x = 12." },
          ],
          trap: "Oublier que range(n) commence à 0 et s'arrête à n - 1 (et non à n), ou écrire une boucle while dont la condition ne change jamais : le compte de tours est faux, ou la boucle devient infinie.",
          method: "Avant de choisir une boucle, posez la question : « Est-ce que je connais le nombre de tours ? » Si oui, utilisez for ; sinon, utilisez while, puis vérifiez par un tableau d'état sur les deux ou trois premiers tours et sur le dernier.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'fonctions-python',
          title: 'Écrire et utiliser des fonctions',
          minutes: 30,
          objectives: [
            "Définir une fonction avec def, des paramètres et une valeur renvoyée par return.",
            "Appeler une fonction en lui passant des arguments et utiliser la valeur renvoyée.",
            "Distinguer return et print, ainsi que les variables locales d'une fonction et les variables du programme principal.",
          ],
          course: [
            {
              heading: "Pourquoi des fonctions ?",
              paragraphs: [
                "Une fonction est un morceau de programme auquel on donne un nom, et que l'on peut utiliser autant de fois que l'on veut. Vous en utilisez déjà : print, input, len, int ou abs sont des fonctions fournies par Python. Une fonction ressemble à une recette de cuisine : elle reçoit des ingrédients (les paramètres), suit des étapes (son corps) et produit un résultat (la valeur renvoyée).",
                "Écrire ses propres fonctions présente trois avantages. On évite de recopier plusieurs fois les mêmes lignes : si l'on doit corriger une erreur, on la corrige à un seul endroit. On découpe un problème compliqué en petites tâches, chacune portant un nom clair. Enfin, on peut tester chaque fonction séparément, ce qui facilite la recherche des erreurs.",
              ],
            },
            {
              heading: "Définir et appeler une fonction",
              paragraphs: [
                "On définit une fonction avec le mot-clé def, suivi de son nom, de ses paramètres entre parenthèses et de deux-points ; le corps de la fonction est indenté. L'instruction return indique la valeur que la fonction renvoie. Exemple : def aire_rectangle(longueur, largeur): suivi, sur la ligne indentée, de return longueur * largeur. Définir une fonction n'exécute rien : Python la mémorise seulement.",
                "On appelle la fonction en écrivant son nom suivi des valeurs voulues entre parenthèses : aire_rectangle(5, 3). Ces valeurs sont les arguments ; elles sont données aux paramètres dans l'ordre (longueur reçoit 5, largeur reçoit 3). Le corps s'exécute et l'appel est remplacé par la valeur renvoyée, ici 15. On peut donc utiliser un appel dans un calcul ou une affectation : a = aire_rectangle(5, 3) + aire_rectangle(2, 2) donne a = 15 + 4 = 19.",
                "Une fonction peut n'avoir aucun paramètre (def saluer(): ...) et peut contenir des conditions et des boucles. On peut aussi décrire, juste sous la ligne def, ce que fait la fonction dans une chaîne entre triples guillemets, appelée docstring : c'est la documentation de la fonction, affichée par help(nom_de_la_fonction).",
              ],
              box: { label: "Définition", text: "def nom(param1, param2): suivi d'un corps indenté. Les paramètres sont les noms écrits dans la définition ; les arguments sont les valeurs données lors de l'appel. return renvoie une valeur et termine la fonction." },
            },
            {
              heading: "return n'est pas print",
              paragraphs: [
                "return et print sont souvent confondus, mais ils font des choses très différentes. print affiche une valeur à l'écran, pour l'utilisateur, mais cette valeur n'est pas récupérable par le programme. return renvoie la valeur au programme qui a appelé la fonction : on peut la ranger dans une variable, la réutiliser dans un calcul ou la donner à une autre fonction.",
                "Si une fonction affiche son résultat avec print au lieu de le renvoyer, l'instruction x = f(3) donne à x la valeur spéciale None, qui signifie « rien » : un calcul comme x + 1 provoque alors une erreur. Par ailleurs, return termine immédiatement l'exécution de la fonction : les instructions placées après un return exécuté ne sont jamais lues. Une fonction peut contenir plusieurs return, par exemple un dans chaque branche d'un if.",
              ],
              box: { label: "À retenir", text: "return renvoie une valeur au programme et arrête la fonction ; print se contente d'afficher. Une fonction sans return renvoie None." },
            },
            {
              heading: "Variables locales et programme principal",
              paragraphs: [
                "Les paramètres et les variables créées dans le corps d'une fonction sont des variables locales : elles n'existent que pendant l'exécution de la fonction et disparaissent ensuite. Une variable locale peut porter le même nom qu'une variable du programme principal sans la modifier. Si la fonction a besoin d'une information, on la lui transmet par un paramètre ; si le programme a besoin du résultat, la fonction le renvoie par return.",
                "Exemple : def double(n): suivi de resultat = 2 * n et return resultat. Après l'appel y = double(7), y vaut 14, mais la variable resultat n'existe pas dans le programme principal : écrire print(resultat) provoque une erreur (NameError). Cette séparation protège le programme : une fonction bien écrite ne communique avec l'extérieur que par ses paramètres et sa valeur renvoyée.",
              ],
            },
          ],
          keyPoints: [
            "Une fonction se définit avec def nom(paramètres): et un corps indenté ; la définir n'exécute rien.",
            "À l'appel, les arguments sont donnés aux paramètres dans l'ordre, et l'appel est remplacé par la valeur renvoyée.",
            "return renvoie une valeur et termine la fonction ; print ne fait qu'afficher. Sans return, la fonction renvoie None.",
            "Les variables créées dans une fonction sont locales : elles disparaissent à la fin de l'appel.",
            "Une docstring, placée sous la ligne def, documente ce que fait la fonction.",
          ],
          example: {
            statement: "Écrire une fonction celsius_vers_fahrenheit(c) qui renvoie la température en degrés Fahrenheit correspondant à une température c en degrés Celsius, sachant que F = C × 9 ÷ 5 + 32. Calculer ensuite celsius_vers_fahrenheit(100) et celsius_vers_fahrenheit(37).",
            solution: [
              "La fonction a un paramètre, la température c en degrés Celsius, et doit renvoyer un nombre : on utilise return.",
              "Code, une instruction par ligne : def celsius_vers_fahrenheit(c): puis, indenté, return c * 9 / 5 + 32.",
              "Appel avec 100 : 100 × 9 = 900, 900 ÷ 5 = 180, 180 + 32 = 212. L'appel renvoie 212.0 (un flottant, à cause de la division /).",
              "Appel avec 37 : 37 × 9 = 333, 333 ÷ 5 = 66,6, 66,6 + 32 = 98,6. L'appel renvoie 98.6.",
              "Réponse : 100 °C correspondent à 212 °F et 37 °C à 98,6 °F.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On définit la fonction suivante : def f(x): suivi, indenté, de return 2 * x + 1. Que renvoient les appels f(3), f(-2) et f(0) ? Que vaut y après l'instruction y = f(f(1)) ?",
              hint: "Remplacez x par la valeur de l'argument dans 2 * x + 1 ; pour f(f(1)), calculez d'abord l'appel intérieur.",
              solution: [
                "f(3) = 2 × 3 + 1 = 7.",
                "f(-2) = 2 × (-2) + 1 = -4 + 1 = -3.",
                "f(0) = 2 × 0 + 1 = 1.",
                "Pour y = f(f(1)), on calcule d'abord f(1) = 2 × 1 + 1 = 3, puis f(3) = 7.",
                "Résultat : f(3) renvoie 7, f(-2) renvoie -3, f(0) renvoie 1 et y vaut 7.",
              ],
            },
            {
              level: 2,
              statement: "Une boutique vend des cahiers à l'unité ; à partir de 10 cahiers achetés, le montant total bénéficie d'une remise de 10 % (données fictives). a) Écrire une fonction prix_total(prix_unitaire, quantite) qui renvoie le montant à payer. b) Calculer prix_total(2.5, 4) et prix_total(2.5, 12). c) Un élève écrit la même fonction avec print(total) à la place de return total, puis exécute m = prix_total(2.5, 4) + 1. Que se passe-t-il ?",
              hint: "Calculez d'abord le total sans remise, puis appliquez la remise dans un if si la quantité atteint 10 ; pour c), demandez-vous ce que renvoie une fonction sans return.",
              solution: [
                "a) def prix_total(prix_unitaire, quantite): puis, indenté : total = prix_unitaire * quantite ; if quantite >= 10: total = total * 0.9 ; return total.",
                "b) prix_total(2.5, 4) : total = 2.5 × 4 = 10.0 ; 4 < 10, pas de remise ; la fonction renvoie 10.0.",
                "prix_total(2.5, 12) : total = 2.5 × 12 = 30.0 ; 12 ≥ 10, donc total = 30.0 × 0.9 = 27.0 ; la fonction renvoie 27.0.",
                "c) Avec print, l'appel affiche 10.0 à l'écran, mais la fonction ne renvoie rien : elle renvoie None.",
                "Python doit alors calculer None + 1, ce qui est impossible : le programme s'arrête sur une erreur TypeError.",
                "Résultat : 10,00 € pour 4 cahiers, 27,00 € pour 12 cahiers ; il faut utiliser return pour pouvoir réutiliser le résultat.",
              ],
            },
            {
              level: 3,
              statement: "1. Écrire une fonction compte_voyelles(mot) qui renvoie le nombre de voyelles (a, e, i, o, u, y) d'un mot écrit en minuscules sans accent. On pourra utiliser le test lettre in 'aeiouy', qui vaut True si lettre est l'une de ces six lettres. 2. Que renvoie compte_voyelles('informatique') ? Détailler. 3. Que vaut total après total = compte_voyelles('snt') + compte_voyelles('python') ? 4. Expliquer pourquoi la variable compteur utilisée dans la fonction n'existe plus après l'appel.",
              hint: "Utilisez un compteur initialisé à 0 avant une boucle for qui parcourt les lettres du mot, et augmentez-le de 1 quand la lettre est une voyelle.",
              solution: [
                "1. def compte_voyelles(mot): puis, indenté : compteur = 0 ; for lettre in mot: (bloc : if lettre in 'aeiouy': compteur = compteur + 1) ; enfin return compteur, au niveau du for.",
                "Le return est placé après la boucle, et non dans la boucle : sinon la fonction s'arrêterait dès la première lettre.",
                "2. Les lettres de informatique sont i, n, f, o, r, m, a, t, i, q, u, e. Les voyelles sont i, o, a, i, u, e : la fonction renvoie 6.",
                "3. 'snt' ne contient aucune voyelle : 0. 'python' contient y et o : 2. Donc total = 0 + 2 = 2.",
                "4. compteur est une variable locale, créée pendant l'appel et détruite à la fin ; seule la valeur renvoyée par return est transmise au programme principal.",
                "Résultat : compte_voyelles('informatique') renvoie 6 et total vaut 2.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre ce que fait Python lors de l'instruction a = aire_rectangle(5, 3).",
            items: [
              "Python repère l'appel de la fonction aire_rectangle avec les arguments 5 et 3.",
              "Le paramètre longueur reçoit 5 et le paramètre largeur reçoit 3.",
              "Le corps de la fonction calcule longueur * largeur, soit 15.",
              "L'instruction return renvoie 15 et termine la fonction.",
              "Dans l'instruction, l'appel aire_rectangle(5, 3) est remplacé par la valeur 15.",
              "La valeur 15 est affectée à la variable a du programme principal.",
            ],
          },
          quiz: [
            { q: "Quel mot-clé sert à définir une fonction en Python ?", options: ["function", "def", "return", "for"], answer: 1, why: "On définit une fonction par def nom(paramètres): suivi d'un corps indenté." },
            { q: "Avec def carre(n): return n * n, que vaut carre(3) + carre(4) ?", options: ["49", "14", "25", "7"], answer: 2, why: "carre(3) vaut 9 et carre(4) vaut 16 : la somme vaut 25." },
            { q: "Que renvoie une fonction qui ne contient aucune instruction return ?", options: ["None", "0", "Une chaîne vide", "La dernière valeur affichée"], answer: 0, why: "Sans return, une fonction renvoie la valeur spéciale None." },
            { q: "Dans def moyenne(a, b): return (a + b) / 2, comment appelle-t-on a et b ?", options: ["Des arguments", "Des valeurs renvoyées", "Des boucles", "Des paramètres"], answer: 3, why: "Les noms écrits dans la définition sont les paramètres ; les valeurs données à l'appel sont les arguments." },
            { q: "Que se passe-t-il pour les instructions écrites après un return exécuté dans une fonction ?", options: ["Elles sont exécutées après", "Elles ne sont pas exécutées", "Elles provoquent une erreur", "Elles sont exécutées avant"], answer: 1, why: "return termine immédiatement l'exécution de la fonction." },
          ],
          trap: "Remplacer return par print dans une fonction : le résultat s'affiche, mais la fonction renvoie None, et toute utilisation du résultat dans un calcul ou une affectation échoue.",
          method: "Avant d'écrire une fonction, rédigez sa « fiche d'identité » en une phrase : son nom, ce qu'elle reçoit (les paramètres), ce qu'elle renvoie. Testez-la ensuite sur deux ou trois appels dont vous connaissez le résultat à l'avance.",
        },
      ],
    },

    /* ================================================================== */
    /* INTERNET                                                             */
    /* ================================================================== */
    {
      id: 'internet',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'adresses-ip-tcp',
          title: 'Réseaux, adresses IP et protocole TCP/IP',
          minutes: 30,
          objectives: [
            "Définir un réseau informatique et expliquer qu'Internet est un réseau de réseaux, indépendant du réseau physique.",
            "Décrire une adresse IP et distinguer les adresses IPv4 et IPv6.",
            "Distinguer le rôle des protocoles IP et TCP.",
            "Caractériser quelques types de réseaux physiques et calculer une durée de transfert à partir d'un débit.",
          ],
          course: [
            {
              heading: "Internet, un réseau de réseaux",
              paragraphs: [
                "Un réseau informatique est un ensemble de machines (ordinateurs, téléphones, serveurs, objets connectés) reliées entre elles pour échanger des données. Le réseau de votre lycée ou celui de votre domicile, organisé autour d'une box, sont des réseaux locaux. Internet est l'interconnexion, à l'échelle mondiale, de ces millions de réseaux : c'est un réseau de réseaux. Les machines spécialisées qui relient les réseaux entre eux s'appellent des routeurs.",
                "Quelques repères historiques. En 1969, le réseau ARPANET, financé par l'agence de recherche du ministère américain de la Défense, relie ses premiers ordinateurs universitaires. Dans les années 1970, le projet français Cyclades, dirigé par Louis Pouzin, expérimente l'envoi de données en paquets indépendants. En 1974, Vint Cerf et Bob Kahn publient les principes du protocole TCP. Le 1er janvier 1983, ARPANET adopte définitivement TCP/IP, date souvent retenue comme la naissance d'Internet.",
                "Internet ne dépend pas du support physique utilisé. Les données circulent aussi bien sur des câbles en cuivre (ADSL, aujourd'hui en voie de disparition), sur de la fibre optique, par ondes radio (Wi-Fi, réseaux mobiles 4G et 5G) ou par satellite. Ces réseaux diffèrent par leur débit, c'est-à-dire la quantité de données transmise par seconde, exprimée en bits par seconde (bit/s). À titre d'ordre de grandeur, l'ADSL offre quelques mégabits par seconde (Mbit/s), la fibre peut atteindre 1 gigabit par seconde (Gbit/s) ou plus. Grâce aux protocoles communs, une même communication peut emprunter successivement plusieurs de ces supports.",
              ],
              box: { label: "Définition", text: "Internet est un réseau mondial qui interconnecte des réseaux grâce à des protocoles communs, TCP/IP. Il ne faut pas le confondre avec le Web, qui n'est qu'un des services utilisant Internet, comme la messagerie électronique ou les jeux en ligne." },
            },
            {
              heading: "Les adresses IP",
              paragraphs: [
                "Pour qu'une donnée arrive à bon port, chaque machine connectée possède une adresse IP (Internet Protocol), qui joue le rôle d'une adresse postale. Une adresse IPv4 est codée sur 32 bits, soit 4 octets ; on l'écrit sous la forme de quatre nombres séparés par des points, par exemple 192.168.1.25. Chaque nombre correspond à un octet (8 bits) et est donc compris entre 0 et 255, car 8 bits permettent 2⁸ = 256 valeurs.",
                "Avec 32 bits, il existe 2³² = 4 294 967 296 adresses IPv4, soit environ 4,3 milliards : c'est trop peu pour toutes les machines du monde, et le stock central d'adresses IPv4 a été épuisé en 2011. On utilise donc des adresses privées à l'intérieur des réseaux locaux (par exemple 192.168.x.x à la maison), la box partageant une seule adresse publique, et l'on déploie la nouvelle version, IPv6.",
                "Une adresse IPv6 est codée sur 128 bits. On l'écrit en huit groupes de quatre chiffres hexadécimaux (0 à 9 et a à f) séparés par deux-points, par exemple 2001:0db8:0000:0000:0000:ff00:0042:8329. Le nombre d'adresses possibles, 2¹²⁸, est si grand (environ 3,4 × 10³⁸) qu'il ne risque pas de manquer.",
              ],
              box: { label: "Repère", text: "IPv4 : 32 bits, quatre nombres de 0 à 255, environ 4,3 milliards d'adresses. IPv6 : 128 bits, huit groupes hexadécimaux, environ 3,4 × 10³⁸ adresses." },
            },
            {
              heading: "Les protocoles TCP et IP",
              paragraphs: [
                "Un protocole est un ensemble de règles que deux machines respectent pour pouvoir communiquer, comme une langue commune. Sur Internet, les données ne sont pas envoyées d'un bloc : elles sont découpées en petits morceaux, appelés paquets. Deux protocoles complémentaires se partagent le travail : on parle de la suite TCP/IP.",
                "Le protocole IP s'occupe de l'adressage et de l'acheminement : il ajoute à chaque paquet l'adresse IP de l'expéditeur et celle du destinataire, et permet aux routeurs de l'orienter vers sa destination. Mais IP ne garantit rien : un paquet peut être perdu, dupliqué ou arriver après un paquet envoyé plus tard.",
                "Le protocole TCP (Transmission Control Protocol) assure la fiabilité de la transmission. Chez l'expéditeur, il découpe les données en segments numérotés. Chez le destinataire, il vérifie que tout est arrivé, remet les morceaux dans l'ordre grâce à leurs numéros et renvoie des accusés de réception. Si l'accusé de réception d'un segment n'arrive pas à temps, l'expéditeur le renvoie. On peut comparer TCP à quelqu'un qui envoie un long document page par page par la poste, en numérotant chaque page et en exigeant un accusé de réception.",
              ],
              box: { label: "À retenir", text: "IP : adresser et acheminer les paquets, sans garantie. TCP : découper, numéroter, vérifier, remettre dans l'ordre et renvoyer ce qui manque. TCP garantit que les données arrivent complètes et dans l'ordre, mais pas en combien de temps." },
            },
            {
              heading: "Calculer une durée de transfert",
              paragraphs: [
                "Les tailles de fichiers s'expriment en octets (o), avec 1 octet = 8 bits, et les multiples ko, Mo, Go (1 Go = 1000 Mo = 10⁹ octets). Les débits s'expriment en bits par seconde. Pour estimer la durée d'un transfert, on convertit d'abord la taille en bits, puis on divise par le débit : durée (s) = taille (bits) ÷ débit (bit/s).",
                "Exemple : un fichier de 100 Mo représente 100 × 8 = 800 Mbit. Avec un débit de 50 Mbit/s, il faut 800 ÷ 50 = 16 secondes. Ce calcul donne une durée minimale : en pratique, le débit réel est souvent inférieur au débit annoncé, car la ligne est partagée et les en-têtes ajoutés aux paquets occupent une partie de la transmission.",
              ],
              box: { label: "Formule", text: "durée = taille ÷ débit, avec la taille convertie en bits (1 octet = 8 bits) et le débit en bit/s. Attention : Mo (mégaoctet) et Mbit (mégabit) ne sont pas la même unité." },
            },
          ],
          keyPoints: [
            "Internet est un réseau de réseaux reliés par des routeurs ; il fonctionne sur tous les supports (cuivre, fibre, radio, satellite).",
            "Repères : ARPANET en 1969, principes de TCP en 1974 (Cerf et Kahn), adoption de TCP/IP le 1er janvier 1983.",
            "IPv4 : 32 bits, quatre nombres de 0 à 255 ; IPv6 : 128 bits, en hexadécimal.",
            "IP adresse et achemine les paquets sans garantie ; TCP découpe, numérote, vérifie, remet dans l'ordre et renvoie ce qui est perdu.",
            "Durée de transfert = taille en bits ÷ débit en bit/s (1 octet = 8 bits).",
          ],
          example: {
            statement: "Indiquer, en justifiant, lesquelles des adresses suivantes sont des adresses IPv4 valides : 172.16.254.1 ; 192.168.1.256 ; 10.0.0 ; 2001:db8::1.",
            solution: [
              "Une adresse IPv4 valide comporte exactement quatre nombres séparés par des points, chacun compris entre 0 et 255.",
              "172.16.254.1 : quatre nombres, tous entre 0 et 255. Adresse IPv4 valide.",
              "192.168.1.256 : quatre nombres, mais 256 dépasse 255 (un octet ne code que 256 valeurs, de 0 à 255). Adresse invalide.",
              "10.0.0 : seulement trois nombres, soit 24 bits au lieu de 32. Adresse invalide.",
              "2001:db8::1 : chiffres hexadécimaux séparés par deux-points ; c'est une adresse IPv6 (écrite sous forme abrégée), pas une adresse IPv4.",
              "Réponse : seule 172.16.254.1 est une adresse IPv4 valide.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque phrase, indiquer s'il s'agit du rôle du protocole IP ou du protocole TCP : a) ajouter l'adresse du destinataire à chaque paquet ; b) numéroter les segments ; c) renvoyer un segment dont l'accusé de réception n'est pas arrivé ; d) permettre aux routeurs d'orienter les paquets ; e) remettre les données dans l'ordre à l'arrivée.",
              hint: "IP s'occupe de l'adressage et de l'acheminement ; TCP s'occupe de la fiabilité et de l'ordre.",
              solution: [
                "a) L'adressage relève du protocole IP.",
                "b) La numérotation des segments relève de TCP.",
                "c) Le renvoi des segments perdus relève de TCP, qui garantit la fiabilité.",
                "d) L'acheminement par les routeurs relève du protocole IP.",
                "e) La remise dans l'ordre relève de TCP, grâce aux numéros des segments.",
                "Bilan : IP pour a et d ; TCP pour b, c et e.",
              ],
            },
            {
              level: 2,
              statement: "Une photo est envoyée d'un téléphone vers un serveur. TCP la découpe en 5 segments numérotés de 1 à 5. Le segment 3 est perdu en route, et le segment 5 arrive avant le segment 4. a) Comment le destinataire sait-il qu'il manque un segment et que l'ordre d'arrivée n'est pas le bon ? b) Que se passe-t-il pour le segment 3 ? c) Sous quelle forme la photo est-elle finalement remise à l'application ? d) TCP garantit-il que la photo arrivera en moins d'une seconde ?",
              hint: "Pensez aux numéros des segments et aux accusés de réception.",
              solution: [
                "a) Les segments sont numérotés : en recevant 1, 2, 5 puis 4, le destinataire constate qu'il manque le numéro 3 et que 5 est arrivé avant 4.",
                "b) Le destinataire n'accuse pas réception du segment 3 ; faute d'accusé de réception dans le délai prévu, l'expéditeur renvoie le segment 3.",
                "c) Le destinataire attend d'avoir les cinq segments, les remet dans l'ordre 1, 2, 3, 4, 5 et transmet la photo complète à l'application.",
                "d) Non : TCP garantit que les données arrivent complètes et dans l'ordre, mais il n'apporte aucune garantie sur la durée, qui dépend notamment des renvois et de l'encombrement du réseau.",
                "Résultat : la photo arrive intacte, avec un léger retard dû au renvoi du segment 3.",
              ],
            },
            {
              level: 3,
              statement: "On veut télécharger un film de 1,5 Go (on prendra 1 Go = 1000 Mo). Débits théoriques (données fictives) : ligne ADSL à 8 Mbit/s, connexion mobile à 50 Mbit/s, fibre optique à 1 Gbit/s. 1. Convertir la taille du film en mégabits. 2. Calculer la durée minimale du téléchargement pour chaque connexion, en secondes puis dans une unité adaptée. 3. Le téléchargement par fibre a réellement duré 20 s. Calculer le débit réel moyen et proposer une explication à l'écart. 4. Expliquer pourquoi le même film peut transiter par plusieurs de ces supports au cours d'un même téléchargement.",
              hint: "1,5 Go = 1500 Mo ; un octet vaut 8 bits ; 1 Gbit/s = 1000 Mbit/s ; durée = taille ÷ débit.",
              solution: [
                "1. 1,5 Go = 1500 Mo = 1500 × 8 = 12 000 Mbit.",
                "2. ADSL : 12 000 ÷ 8 = 1500 s, soit 25 minutes.",
                "Mobile : 12 000 ÷ 50 = 240 s, soit 4 minutes.",
                "Fibre : 1 Gbit/s = 1000 Mbit/s, donc 12 000 ÷ 1000 = 12 s.",
                "3. Débit réel = 12 000 Mbit ÷ 20 s = 600 Mbit/s. L'écart s'explique par le partage de la ligne et des équipements, par la vitesse du serveur, par le Wi-Fi éventuel du domicile et par les en-têtes des paquets, qui occupent une part du débit.",
                "4. Internet est indépendant du réseau physique : les paquets IP peuvent passer par la fibre jusqu'à la box, puis par le Wi-Fi jusqu'à l'ordinateur ; les protocoles TCP/IP sont les mêmes sur tous les supports.",
                "Résultat : 25 min en ADSL, 4 min en mobile, 12 s en fibre (théorique), et un débit réel de 600 Mbit/s pour la fibre.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa description.",
            pairs: [
              { left: "Protocole", right: "Ensemble de règles qui permet à deux machines de communiquer" },
              { left: "IP", right: "Adresse les paquets et permet leur acheminement" },
              { left: "TCP", right: "Numérote, vérifie et fait renvoyer les données perdues" },
              { left: "Routeur", right: "Machine qui relie des réseaux et oriente les paquets" },
              { left: "Adresse IPv4", right: "32 bits écrits en quatre nombres de 0 à 255" },
              { left: "Adresse IPv6", right: "128 bits écrits en huit groupes hexadécimaux" },
            ],
          },
          quiz: [
            { q: "Combien de bits comporte une adresse IPv4 ?", options: ["8", "128", "32", "64"], answer: 2, why: "Une adresse IPv4 est formée de 4 octets, soit 4 × 8 = 32 bits." },
            { q: "Quelle adresse IPv4 est valide ?", options: ["10.12.0.254", "10.12.300.1", "10.12.1", "10.12.0.1.5"], answer: 0, why: "Il faut exactement quatre nombres compris entre 0 et 255." },
            { q: "Quel protocole garantit que les données arrivent complètes et dans l'ordre ?", options: ["IP", "Wi-Fi", "DNS", "TCP"], answer: 3, why: "TCP numérote les segments, vérifie leur arrivée et fait renvoyer ceux qui manquent." },
            { q: "En quelle année ARPANET a-t-il adopté TCP/IP ?", options: ["1969", "1983", "1991", "1974"], answer: 1, why: "Le passage à TCP/IP a eu lieu le 1er janvier 1983 ; 1969 est la date des débuts d'ARPANET." },
            { q: "Combien de temps faut-il, au minimum, pour transférer 10 Mo à 20 Mbit/s ?", options: ["0,5 s", "2 s", "4 s", "8 s"], answer: 2, why: "10 Mo = 80 Mbit, et 80 ÷ 20 = 4 secondes." },
          ],
          trap: "Confondre Internet et le Web, ou confondre mégaoctet (Mo) et mégabit (Mbit) dans un calcul de durée : il faut multiplier la taille en octets par 8 avant de la diviser par le débit en bit/s.",
          method: "Pour retenir le partage des rôles, associez chaque protocole à une question : IP répond à « où envoyer ? », TCP répond à « tout est-il bien arrivé, et dans l'ordre ? ». Dans un calcul de débit, écrivez toujours les unités à chaque ligne.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'paquets-routage',
          title: "Paquets et routage : le voyage d'une donnée",
          minutes: 30,
          objectives: [
            "Décrire le découpage des données en paquets et le contenu d'un paquet.",
            "Caractériser les principes du routage et lire une table de routage simple.",
            "Distinguer la fiabilité de la transmission et l'absence de garantie temporelle.",
          ],
          course: [
            {
              heading: "La commutation de paquets",
              paragraphs: [
                "Pour transporter une donnée (un message, une page, une vidéo), Internet ne réserve pas une ligne de bout en bout, comme le faisait le téléphone classique. Les données sont découpées en paquets, de taille limitée (souvent au plus 1500 octets sur un réseau Ethernet), qui voyagent chacun de leur côté et sont rassemblés à l'arrivée. On parle de commutation de paquets.",
                "Chaque paquet contient deux parties. L'en-tête porte les informations utiles au transport : l'adresse IP de l'expéditeur, l'adresse IP du destinataire, une durée de vie (TTL) et, ajoutés par TCP, le numéro du segment et des informations de contrôle. Les données utiles forment le contenu du paquet, c'est-à-dire un morceau du message. On peut comparer un paquet à une enveloppe : l'adresse est écrite dessus, une page de la lettre est à l'intérieur.",
                "Ce découpage présente plusieurs avantages : les liaisons sont partagées entre de nombreux utilisateurs, dont les paquets s'intercalent ; un paquet perdu se renvoie seul, sans tout recommencer ; et chaque paquet peut contourner une liaison encombrée ou en panne.",
              ],
              box: { label: "Définition", text: "Un paquet est un petit bloc de données qui voyage seul sur le réseau. Il comporte un en-tête (adresses IP source et destination, durée de vie, informations de contrôle) et un morceau des données à transmettre." },
            },
            {
              heading: "Le routage, de proche en proche",
              paragraphs: [
                "Entre l'expéditeur et le destinataire, un paquet traverse en général plusieurs routeurs, souvent une dizaine ou davantage. Un routeur est une machine reliée à plusieurs réseaux. Quand il reçoit un paquet, il lit l'adresse de destination, consulte sa table de routage et transmet le paquet au routeur suivant le plus approprié, ou directement à la machine destinataire si elle se trouve sur l'un de ses réseaux.",
                "Une table de routage associe à chaque destination (un réseau) la « prochaine étape », c'est-à-dire le routeur voisin auquel transmettre le paquet. Aucun routeur ne connaît le chemin complet : chacun ne décide que du saut suivant. C'est le principe du routage de proche en proche, comparable à un trajet en voiture où l'on suivrait seulement, à chaque carrefour, le panneau indiquant la ville d'arrivée.",
                "Les tables de routage ne sont pas figées : les routeurs échangent régulièrement des informations avec leurs voisins et mettent à jour leurs tables. Si une liaison tombe en panne ou est saturée, les paquets suivants sont dirigés vers un autre chemin. Cette organisation décentralisée rend Internet robuste : il n'existe pas de centre unique dont la panne bloquerait tout le réseau.",
              ],
              box: { label: "À retenir", text: "Chaque routeur lit l'adresse de destination, consulte sa table de routage et transmet le paquet au routeur suivant. Aucun routeur ne connaît tout le trajet ; les tables s'adaptent aux pannes." },
            },
            {
              heading: "Des paquets qui voyagent séparément",
              paragraphs: [
                "Comme chaque paquet est routé indépendamment, deux paquets d'un même message peuvent suivre des chemins différents, mettre des temps différents et arriver dans le désordre. Certains peuvent être perdus, par exemple quand un routeur saturé ne peut plus les stocker. Pour éviter qu'un paquet tourne indéfiniment à cause d'une erreur de routage, son en-tête contient une durée de vie, le TTL (Time To Live) : chaque routeur diminue ce nombre de 1, et le paquet est détruit lorsqu'il atteint 0.",
                "On peut observer le trajet des paquets avec la commande traceroute (tracert sous Windows), qui affiche la liste des routeurs traversés et le temps de réponse de chacun. Elle exploite justement le TTL : en envoyant des paquets avec un TTL de 1, puis 2, puis 3, elle oblige chaque routeur successif à signaler qu'il a détruit le paquet.",
              ],
            },
            {
              heading: "Fiable, mais sans garantie de délai",
              paragraphs: [
                "Grâce à TCP, la transmission est fiable : le destinataire remet les segments dans l'ordre grâce à leurs numéros, signale ce qui manque, et l'expéditeur renvoie les segments perdus. À l'arrivée, le message est complet et identique à celui qui a été envoyé.",
                "En revanche, personne ne peut garantir le délai d'acheminement : il dépend du chemin, de l'encombrement des routeurs et du nombre de renvois. Pour un courriel ou une page web, quelques fractions de seconde de retard ne gênent pas. Pour un appel vidéo ou un jeu en ligne, un retard est plus gênant qu'une petite perte : ces applications utilisent souvent un autre protocole de transport, UDP, qui renonce aux renvois pour gagner en rapidité.",
              ],
              box: { label: "Règle", text: "Fiabilité ne signifie pas rapidité : TCP garantit que les données arrivent complètes et dans l'ordre, mais aucun protocole d'Internet ne garantit le temps d'acheminement." },
            },
          ],
          keyPoints: [
            "Les données sont découpées en paquets ; chaque paquet a un en-tête (adresses source et destination, TTL, numéro) et un morceau des données.",
            "Chaque routeur consulte sa table de routage et ne décide que du saut suivant : c'est le routage de proche en proche.",
            "Les tables s'adaptent aux pannes : Internet est décentralisé et robuste.",
            "Les paquets peuvent suivre des chemins différents, arriver dans le désordre ou se perdre ; le TTL diminue de 1 à chaque routeur.",
            "TCP rend la transmission fiable, mais le délai d'acheminement n'est jamais garanti.",
          ],
          example: {
            statement: "Un ordinateur A est relié au routeur R1, et un serveur B au routeur R4. Les liaisons entre routeurs sont R1-R2, R1-R3, R2-R4 et R3-R4. Pour la destination « réseau de B », les tables de routage indiquent : R1 → R2 ; R2 → R4 ; R3 → R4 ; R4 → remise directe à B. a) Quel chemin suit un paquet de A vers B ? b) La liaison R1-R2 tombe en panne et R1 met à jour sa table : R1 → R3. Quel est le nouveau chemin ?",
            solution: [
              "a) Le paquet part de A et arrive au routeur R1, qui lit l'adresse de destination (B).",
              "La table de R1 indique R2 : le paquet est transmis à R2. La table de R2 indique R4 : il est transmis à R4.",
              "R4 est relié au réseau de B : il remet directement le paquet à B. Chemin : A → R1 → R2 → R4 → B.",
              "b) Après la panne, la table de R1 indique R3 : le paquet est transmis à R3, dont la table indique R4, qui le remet à B.",
              "Réponse : avant la panne, A → R1 → R2 → R4 → B ; après la panne, A → R1 → R3 → R4 → B. Dans les deux cas, trois routeurs sont traversés.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On transmet un fichier sur un réseau où chaque paquet peut transporter au plus 1500 octets de données (on néglige les en-têtes ; données simplifiées). Combien de paquets faut-il au minimum pour un fichier de 6000 octets ? de 6200 octets ? de 45 000 octets ?",
              hint: "Divisez la taille du fichier par 1500 ; s'il reste des octets, il faut un paquet supplémentaire, même incomplet.",
              solution: [
                "6000 ÷ 1500 = 4 exactement : il faut 4 paquets pleins.",
                "6200 = 4 × 1500 + 200 : quatre paquets pleins ne suffisent pas, les 200 octets restants occupent un cinquième paquet. Il faut 5 paquets.",
                "45 000 ÷ 1500 = 30 exactement : il faut 30 paquets.",
                "Résultat : 4, 5 et 30 paquets.",
              ],
            },
            {
              level: 2,
              statement: "Chaque routeur diminue de 1 la durée de vie (TTL) d'un paquet, et détruit le paquet si elle atteint 0. a) Un paquet part avec un TTL de 64 et traverse 12 routeurs avant d'arriver. Quelle est la valeur du TTL à l'arrivée ? b) Un paquet part avec un TTL de 3 vers une machine située derrière 5 routeurs. Que se passe-t-il ? c) À quoi sert le TTL ?",
              hint: "Soustrayez 1 par routeur traversé, et repérez le routeur auquel le TTL tombe à 0.",
              solution: [
                "a) Chaque routeur retire 1 : 64 - 12 = 52. Le paquet arrive avec un TTL de 52.",
                "b) Après le routeur 1, TTL = 2 ; après le routeur 2, TTL = 1 ; le routeur 3 le fait passer à 0 et détruit le paquet.",
                "Le paquet n'atteint donc jamais la machine destinataire : il est détruit par le troisième routeur.",
                "c) Le TTL empêche un paquet de circuler indéfiniment, par exemple si une erreur de routage le fait tourner en boucle entre plusieurs routeurs.",
                "Résultat : TTL de 52 à l'arrivée dans le cas a ; paquet détruit au troisième routeur dans le cas b.",
              ],
            },
            {
              level: 3,
              statement: "Un ordinateur A est relié au routeur R1 et un serveur B au routeur R5. Les liaisons entre routeurs sont : R1-R2, R1-R3, R2-R4, R2-R5, R3-R4, R4-R5. Pour la destination « réseau de B », les tables indiquent : R1 → R2 ; R2 → R5 ; R3 → R4 ; R4 → R5 ; R5 → remise directe. 1. Donner le chemin suivi par un paquet de A vers B et le nombre de routeurs traversés. 2. Le paquet part avec un TTL de 64 : quelle est sa valeur à l'arrivée ? 3. La liaison R2-R5 tombe en panne ; R2 met à jour sa table : R2 → R4. Donner le nouveau chemin et le TTL à l'arrivée. 4. Existe-t-il, après la panne, un autre chemin traversant aussi peu de routeurs ? 5. Pendant la panne, certains paquets d'une même vidéo sont passés par l'ancien chemin, d'autres par le nouveau. Expliquer pourquoi la vidéo arrive malgré tout intacte, et pourquoi son chargement a pu être ralenti.",
              hint: "Suivez les tables routeur par routeur ; le TTL diminue de 1 à chaque routeur traversé, y compris R1 et R5.",
              solution: [
                "1. A → R1 ; la table de R1 donne R2 ; celle de R2 donne R5 ; R5 remet le paquet à B. Chemin : A → R1 → R2 → R5 → B, soit 3 routeurs traversés.",
                "2. TTL à l'arrivée : 64 - 3 = 61.",
                "3. Nouveau chemin : A → R1 → R2 → R4 → R5 → B, soit 4 routeurs ; TTL à l'arrivée : 64 - 4 = 60.",
                "4. Oui : A → R1 → R3 → R4 → R5 → B traverse aussi 4 routeurs ; il serait utilisé si R1 dirigeait les paquets vers R3.",
                "5. Les segments sont numérotés : TCP les remet dans l'ordre à l'arrivée et fait renvoyer ceux qui ont été perdus pendant la panne, d'où une vidéo intacte.",
                "En revanche, les renvois et le détour par un chemin plus long augmentent le délai : TCP garantit la fiabilité, pas la rapidité.",
                "Résultat : 3 routeurs et TTL 61 avant la panne ; 4 routeurs et TTL 60 après.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le voyage d'un message envoyé sur Internet.",
            items: [
              "L'application de l'expéditeur fournit le message à envoyer.",
              "TCP découpe le message en segments numérotés.",
              "IP ajoute à chaque morceau un en-tête avec les adresses source et destination : ce sont les paquets.",
              "Les routeurs transmettent chaque paquet de proche en proche, grâce à leurs tables de routage.",
              "À l'arrivée, TCP vérifie les segments reçus et les remet dans l'ordre.",
              "Le message reconstitué est remis à l'application du destinataire.",
            ],
          },
          quiz: [
            { q: "Que consulte un routeur pour décider où envoyer un paquet ?", options: ["Sa table de routage", "Le contenu du message", "La liste de tous les chemins d'Internet", "L'adresse de l'expéditeur seulement"], answer: 0, why: "Le routeur lit l'adresse de destination et consulte sa table de routage pour choisir le saut suivant." },
            { q: "Un paquet part avec un TTL de 30 et traverse 8 routeurs. Quel est son TTL à l'arrivée ?", options: ["38", "30", "8", "22"], answer: 3, why: "Chaque routeur retire 1 : 30 - 8 = 22." },
            { q: "Deux paquets d'un même message suivent-ils forcément le même chemin ?", options: ["Oui, toujours", "Non, chacun est routé indépendamment", "Oui, sauf s'ils sont perdus", "Non, ils passent par le même serveur central"], answer: 1, why: "Chaque paquet est routé seul ; les tables peuvent changer entre deux paquets." },
            { q: "Que garantit TCP ?", options: ["Un délai maximal d'acheminement pour chaque paquet", "Le chemin le plus court", "Des données complètes et dans l'ordre", "L'absence de routeurs sur le trajet"], answer: 2, why: "TCP rend la transmission fiable, mais ne garantit ni le délai ni le chemin." },
            { q: "Quelle commande affiche les routeurs traversés jusqu'à une machine ?", options: ["print", "traceroute", "ping", "ipconfig /all"], answer: 1, why: "traceroute (tracert sous Windows) liste les routeurs successifs grâce au TTL." },
          ],
          trap: "Croire qu'un routeur connaît le trajet complet jusqu'à la destination, ou que les paquets d'un même message suivent tous le même chemin : chaque routeur ne choisit que le saut suivant, et chaque paquet est routé indépendamment.",
          method: "Pour un exercice de routage, dessinez le réseau (un rond par routeur, un trait par liaison), puis suivez le paquet en lisant une seule ligne de table à chaque routeur, en notant le TTL au fur et à mesure.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'dns-pair-a-pair',
          title: 'Le DNS et les réseaux pair à pair',
          minutes: 30,
          objectives: [
            "Connaître le principe de la résolution d'un nom de domaine par le DNS, sur un exemple réaliste.",
            "Décrire l'organisation hiérarchique des noms de domaine.",
            "Décrire le principe d'un réseau pair à pair et le comparer au modèle client-serveur.",
          ],
          course: [
            {
              heading: "Des noms plutôt que des numéros",
              paragraphs: [
                "Les machines d'Internet communiquent grâce à leurs adresses IP, mais une suite de nombres comme 192.0.2.44 est difficile à retenir. Les humains utilisent donc des noms de domaine, comme education.gouv.fr ou wikipedia.org. Le DNS (Domain Name System, système de noms de domaine) est le service qui traduit un nom de domaine en adresse IP. On le compare souvent à un annuaire : on cherche un nom, on obtient un numéro.",
                "Aux débuts d'ARPANET, la correspondance entre noms et adresses tenait dans un seul fichier, HOSTS.TXT, tenu à jour par un organisme central et recopié sur chaque machine. Avec la croissance du réseau, cette méthode est devenue impossible. Le DNS, conçu par Paul Mockapetris et décrit en 1983, la remplace par une base de données répartie sur des milliers de serveurs dans le monde.",
              ],
              box: { label: "Définition", text: "Le DNS est un système d'annuaire réparti qui associe des noms de domaine à des adresses IP. La résolution d'un nom est l'opération qui consiste à trouver l'adresse IP correspondant à ce nom." },
            },
            {
              heading: "Une organisation hiérarchique",
              paragraphs: [
                "Les noms de domaine sont organisés en arbre et se lisent de droite à gauche, du plus général au plus particulier. Tout en haut se trouve la racine, notée par un point (souvent sous-entendu). Viennent ensuite les domaines de premier niveau : des codes de pays (.fr, .de, .jp) ou des domaines génériques (.com, .org, .net). Puis les domaines de deuxième niveau (wikipedia.org, gouv.fr), et éventuellement des sous-domaines.",
                "Exemple : dans www.education.gouv.fr, fr est le domaine de premier niveau, géré en France par l'Afnic ; gouv.fr est le domaine de deuxième niveau des services de l'État ; education.gouv.fr en est un sous-domaine ; www désigne une machine ou un service de ce domaine. Chaque niveau délègue la gestion du niveau inférieur : l'organisme qui gère .fr n'a pas besoin de connaître toutes les machines de education.gouv.fr.",
              ],
              box: { label: "Repère", text: "www.education.gouv.fr se lit de droite à gauche : racine, puis fr (premier niveau), puis gouv.fr (deuxième niveau), puis education.gouv.fr (sous-domaine), puis www." },
            },
            {
              heading: "La résolution d'un nom de domaine",
              paragraphs: [
                "Quand vous tapez un nom dans votre navigateur, votre ordinateur interroge un serveur DNS appelé résolveur, en général celui de votre fournisseur d'accès. Si le résolveur connaît déjà la réponse, parce qu'il l'a demandée récemment et l'a gardée en mémoire (dans son cache), il répond immédiatement.",
                "Sinon, il remonte la hiérarchie. Il interroge d'abord un serveur racine, qui ne connaît pas l'adresse mais indique quels serveurs gèrent .fr. Il interroge alors un serveur de .fr, qui lui indique le serveur responsable de gouv.fr, et ainsi de suite jusqu'au serveur faisant autorité pour le nom cherché, qui donne l'adresse IP. Le résolveur transmet cette adresse à l'ordinateur et la garde en cache pour une durée fixée, afin de répondre plus vite aux demandes suivantes. Le navigateur peut alors contacter le serveur web à cette adresse.",
                "Il existe treize serveurs racines logiques, désignés par les lettres A à M, chacun étant en réalité reproduit sur de nombreuses machines réparties dans le monde. Le DNS est donc, lui aussi, décentralisé et robuste : aucune machine unique ne détient tout l'annuaire.",
              ],
              box: { label: "À retenir", text: "Résolution : ordinateur → résolveur (cache ?) → serveur racine → serveur du domaine de premier niveau → serveur faisant autorité → adresse IP, renvoyée à l'ordinateur et mise en cache." },
            },
            {
              heading: "Client-serveur et pair à pair",
              paragraphs: [
                "Le plus souvent, les échanges sur Internet suivent le modèle client-serveur : un serveur, machine puissante et toujours allumée, fournit un service (une page web, une vidéo, une messagerie), et des clients, comme votre navigateur, lui adressent des demandes. Si un très grand nombre de clients se connectent en même temps, le serveur peut être saturé ; s'il tombe en panne, le service s'arrête.",
                "Dans un réseau pair à pair (en anglais peer-to-peer, P2P), chaque machine, appelée pair, est à la fois client et serveur : elle reçoit des données des autres pairs et leur en fournit. Avec le protocole BitTorrent, par exemple, un fichier est découpé en morceaux ; chaque pair télécharge des morceaux auprès de plusieurs pairs à la fois et partage ceux qu'il possède déjà. Plus il y a de participants, plus la capacité totale de partage augmente, et le réseau ne dépend pas d'une machine unique.",
                "Le pair à pair a des usages légitimes : distribution de logiciels libres et de mises à jour, certaines applications d'appel, ou encore les chaînes de blocs comme celle du Bitcoin. Il a aussi servi au partage illégal d'œuvres protégées par le droit d'auteur, contre lequel la loi française prévoit une riposte graduée, aujourd'hui conduite par l'Arcom (qui a remplacé la Hadopi en 2022). Ses limites : la disponibilité d'un fichier dépend des pairs connectés, et il est difficile de contrôler ce qui circule.",
              ],
            },
          ],
          keyPoints: [
            "Le DNS traduit un nom de domaine en adresse IP ; c'est un annuaire réparti, décrit en 1983 par Paul Mockapetris.",
            "Un nom de domaine se lit de droite à gauche : racine, domaine de premier niveau (.fr, .com), deuxième niveau, sous-domaines.",
            "Résolution : le résolveur consulte son cache, sinon interroge la racine, puis le premier niveau, puis le serveur faisant autorité.",
            "Client-serveur : un serveur central répond aux clients. Pair à pair : chaque pair est à la fois client et serveur.",
            "Le pair à pair répartit la charge et résiste aux pannes, mais dépend des pairs connectés et peut servir à des partages illégaux.",
          ],
          example: {
            statement: "Un élève tape fr.wikipedia.org dans son navigateur ; aucun serveur n'a ce nom en cache. Décrire, étape par étape, la résolution de ce nom de domaine.",
            solution: [
              "Le nom se lit de droite à gauche : org est le domaine de premier niveau, wikipedia.org le domaine de deuxième niveau, fr un sous-domaine.",
              "L'ordinateur demande l'adresse IP de fr.wikipedia.org au résolveur de son fournisseur d'accès ; celui-ci n'a pas la réponse en cache.",
              "Le résolveur interroge un serveur racine, qui lui indique les serveurs chargés de .org.",
              "Il interroge un serveur de .org, qui lui indique les serveurs faisant autorité pour wikipedia.org.",
              "Il interroge l'un de ces serveurs, qui lui donne l'adresse IP de fr.wikipedia.org.",
              "Réponse : le résolveur renvoie l'adresse IP à l'ordinateur et la met en cache ; le navigateur peut alors contacter le serveur web de Wikipédia à cette adresse.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun des noms suivants, indiquer le domaine de premier niveau et le domaine de deuxième niveau : a) www.service-public.fr ; b) fr.wikipedia.org ; c) maps.google.com ; d) www.ac-lyon.fr.",
              hint: "Lisez chaque nom de droite à gauche : le dernier élément est le domaine de premier niveau, les deux derniers forment le domaine de deuxième niveau.",
              solution: [
                "a) Premier niveau : fr ; deuxième niveau : service-public.fr (www désigne le service web).",
                "b) Premier niveau : org ; deuxième niveau : wikipedia.org (fr est un sous-domaine).",
                "c) Premier niveau : com ; deuxième niveau : google.com (maps est un sous-domaine).",
                "d) Premier niveau : fr ; deuxième niveau : ac-lyon.fr.",
                "Résultat : on lit toujours le nom du plus général, à droite, au plus particulier, à gauche.",
              ],
            },
            {
              level: 2,
              statement: "Deux élèves du même lycée, qui utilisent le même résolveur DNS, ouvrent l'un après l'autre le site www.exemple-lycee.fr (nom fictif). Pour le premier, la résolution du nom prend 120 millisecondes ; pour le second, quelques secondes plus tard, elle ne prend que 2 millisecondes. a) Quels serveurs le résolveur a-t-il interrogés pour le premier élève ? b) Expliquer la différence de durée. c) Pourquoi la réponse gardée en mémoire n'est-elle conservée que pendant une durée limitée ?",
              hint: "Pensez au cache du résolveur et à ce qui se passerait si l'adresse IP d'un site changeait.",
              solution: [
                "a) Pour le premier élève, le résolveur n'avait pas la réponse : il a interrogé un serveur racine, puis un serveur de .fr, puis le serveur faisant autorité pour exemple-lycee.fr.",
                "b) Le résolveur a gardé la réponse dans son cache : pour le second élève, il répond directement, sans interroger aucun autre serveur, d'où une durée bien plus courte.",
                "c) L'adresse IP d'un site peut changer (déménagement vers un autre hébergeur, par exemple) ; une durée de conservation limitée garantit que le résolveur finit par redemander une réponse à jour.",
                "Résultat : la mise en cache accélère fortement les résolutions répétées, au prix d'informations parfois légèrement anciennes.",
              ],
            },
            {
              level: 3,
              statement: "Un serveur doit distribuer un fichier de 800 Mo à 50 utilisateurs. On suppose que toute machine envoie au plus une copie à la fois, à 100 Mbit/s (données fictives et simplifiées). 1. Calculer la durée d'envoi d'une copie complète. 2. Modèle client-serveur : le serveur envoie les copies une par une. Quelle est la durée totale ? 3. Modèle pair à pair simplifié : à chaque étape d'une durée égale à celle d'une copie, chaque machine qui possède déjà le fichier en envoie une copie à une nouvelle machine. Combien d'utilisateurs possèdent le fichier après 1, 2, 3 étapes ? Combien d'étapes faut-il pour servir les 50 utilisateurs, et quelle est la durée totale ? 4. Conclure sur l'intérêt du pair à pair et donner une limite.",
              hint: "800 Mo = 6400 Mbit. En pair à pair, le nombre de machines possédant le fichier, serveur compris, double à chaque étape.",
              solution: [
                "1. 800 Mo = 800 × 8 = 6400 Mbit ; durée d'une copie : 6400 ÷ 100 = 64 s.",
                "2. Client-serveur : 50 copies envoyées l'une après l'autre, soit 50 × 64 = 3200 s, environ 53 minutes.",
                "3. Le nombre de machines possédant le fichier double à chaque étape : 2 après 1 étape (1 utilisateur servi), 4 après 2 étapes (3 utilisateurs), 8 après 3 étapes (7 utilisateurs).",
                "Après k étapes, 2ᵏ - 1 utilisateurs sont servis : 31 après 5 étapes (insuffisant), 63 après 6 étapes (suffisant pour 50).",
                "Il faut donc 6 étapes, soit 6 × 64 = 384 s, c'est-à-dire 6 min 24 s.",
                "4. En pair à pair, chaque nouveau pair augmente la capacité de distribution : la durée croît très lentement avec le nombre d'utilisateurs. Limite : il faut que les pairs restent connectés et acceptent de partager, sinon le fichier n'est plus disponible.",
                "Résultat : environ 53 min en client-serveur contre environ 6 min 24 s en pair à pair, dans ce modèle simplifié.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : le DNS et le pair à pair.",
            statements: [
              { text: "Le DNS traduit un nom de domaine en adresse IP.", true: true, why: "C'est son rôle : il fonctionne comme un annuaire réparti." },
              { text: "Tout l'annuaire DNS est stocké sur un seul serveur central.", true: false, why: "Il est réparti sur des milliers de serveurs organisés en hiérarchie, ce qui le rend robuste." },
              { text: "Dans fr.wikipedia.org, le domaine de premier niveau est fr.", true: false, why: "Un nom se lit de droite à gauche : le premier niveau est org ; fr est ici un sous-domaine." },
              { text: "Un résolveur DNS peut répondre sans interroger d'autres serveurs s'il a la réponse en cache.", true: true, why: "La mise en cache accélère les demandes répétées." },
              { text: "Dans un réseau pair à pair, chaque machine peut être à la fois client et serveur.", true: true, why: "C'est la définition du pair à pair : chaque pair reçoit et fournit des données." },
              { text: "Le pair à pair est illégal en France.", true: false, why: "La technique est légale ; c'est le partage d'œuvres protégées sans autorisation qui est interdit." },
              { text: "Plus il y a de pairs, plus un fichier très partagé se diffuse facilement.", true: true, why: "Chaque pair qui possède des morceaux du fichier peut les transmettre à d'autres." },
            ],
          },
          quiz: [
            { q: "À quoi sert le DNS ?", options: ["À chiffrer les communications entre deux machines", "À traduire un nom de domaine en adresse IP", "À découper les données en paquets", "À stocker les pages web"], answer: 1, why: "Le DNS associe les noms de domaine, faciles à retenir, aux adresses IP utilisées par les machines." },
            { q: "Dans www.ac-paris.fr, quel est le domaine de premier niveau ?", options: ["www", "ac-paris", "ac-paris.fr", "fr"], answer: 3, why: "On lit de droite à gauche : fr est le domaine de premier niveau." },
            { q: "Quel serveur le résolveur interroge-t-il en premier quand il n'a pas la réponse en cache ?", options: ["Un serveur racine", "Le serveur web du site", "Le serveur faisant autorité", "La box de l'utilisateur"], answer: 0, why: "Il part du sommet de la hiérarchie : la racine lui indique les serveurs du domaine de premier niveau." },
            { q: "Quelle caractéristique décrit un réseau pair à pair ?", options: ["Un serveur unique répond à tous", "Les pairs ne peuvent que télécharger", "Chaque pair reçoit et fournit des données", "Il ne fonctionne qu'à l'intérieur d'un réseau local"], answer: 2, why: "Chaque pair est à la fois client et serveur." },
            { q: "Quel est un avantage du pair à pair par rapport au modèle client-serveur ?", options: ["Il garantit la disponibilité permanente des fichiers", "Il supporte mieux un grand nombre d'utilisateurs", "Il empêche tout partage illégal", "Il supprime le besoin d'adresses IP"], answer: 1, why: "Chaque nouveau pair apporte sa propre capacité d'envoi ; la charge est répartie." },
          ],
          trap: "Lire un nom de domaine de gauche à droite, et prendre par exemple fr pour le domaine de premier niveau dans fr.wikipedia.org ; ou confondre la technique du pair à pair, légale, avec le partage illégal d'œuvres protégées.",
          method: "Pour décrire une résolution DNS, écrivez le nom de domaine, découpez-le de droite à gauche, puis faites correspondre à chaque niveau le serveur interrogé : racine, premier niveau, serveur faisant autorité. N'oubliez ni le résolveur ni son cache.",
        },
      ],
    },

    /* ================================================================== */
    /* LE WEB                                                               */
    /* ================================================================== */
    {
      id: 'web',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'html-css',
          title: 'Les pages web : HTML et CSS',
          minutes: 35,
          objectives: [
            "Situer les grandes étapes de l'histoire du Web et le distinguer d'Internet.",
            "Distinguer ce qui relève du contenu d'une page web (HTML) et de son style de présentation (CSS).",
            "Étudier et modifier une page HTML simple : balises, attributs, liens hypertextes et images.",
            "Écrire des règles CSS simples à l'aide d'un sélecteur, d'une propriété et d'une valeur.",
          ],
          course: [
            {
              heading: "Le Web, un service d'Internet",
              paragraphs: [
                "Le Web (la « toile ») est un ensemble de pages reliées entre elles par des liens hypertextes : un clic sur un lien mène à une autre page, qui peut se trouver sur un serveur à l'autre bout du monde. Le Web utilise Internet pour transporter ses pages, mais il n'est qu'un des services d'Internet, au même titre que le courrier électronique ou les jeux en ligne.",
                "Quelques repères. En 1965, Ted Nelson invente le mot hypertexte. En 1989, au CERN, près de Genève, Tim Berners-Lee propose un système de partage de documents fondé sur l'hypertexte ; avec Robert Cailliau, il le met au point en 1990 et crée les trois piliers du Web : le langage HTML pour écrire les pages, le protocole HTTP pour les transmettre et les adresses URL pour les désigner. Le premier site est ouvert au public en 1991. En 1993, le CERN place ces technologies dans le domaine public et le navigateur Mosaic popularise le Web. En 1994, Tim Berners-Lee fonde le W3C, organisme qui définit les standards du Web.",
              ],
              box: { label: "Repère", text: "1965 : mot hypertexte (Ted Nelson). 1989 : proposition de Tim Berners-Lee au CERN. 1991 : premier site public. 1993 : technologies du Web dans le domaine public, navigateur Mosaic. 1994 : création du W3C." },
            },
            {
              heading: "HTML : décrire le contenu",
              paragraphs: [
                "Une page web est un fichier texte écrit en HTML (HyperText Markup Language), un langage de balisage. Les balises, écrites entre chevrons, indiquent la nature de chaque élément du contenu : un titre, un paragraphe, une liste, une image. La plupart vont par paires : une balise ouvrante <p> et une balise fermante </p>, avec une barre oblique, encadrent un paragraphe. Les balises s'emboîtent comme des poupées : une balise ouverte à l'intérieur d'une autre doit être fermée avant elle.",
                "Une page a toujours la même structure : la ligne <!DOCTYPE html>, puis l'élément <html> qui contient tout le reste. L'élément <head> (en-tête) contient des informations sur la page, invisibles dans la fenêtre, comme le jeu de caractères (<meta charset='utf-8'>) et le titre affiché dans l'onglet (<title>). L'élément <body> (corps) contient tout ce qui s'affiche.",
                "Dans le corps, on utilise notamment : <h1> à <h6> pour les titres, du plus important au moins important ; <p> pour un paragraphe ; <ul> pour une liste à puces, dont chaque élément est encadré par <li> ; <strong> pour un texte important ; <em> pour mettre en valeur un mot. Le navigateur lit ce code et l'affiche : c'est le rendu de la page. Tout navigateur permet de voir le code d'une page (clic droit, puis « Afficher le code source » ou « Inspecter »).",
              ],
              box: { label: "Définition", text: "HTML est le langage qui décrit le contenu et la structure d'une page web à l'aide de balises : <balise> contenu </balise>. Il dit ce qu'est chaque élément (titre, paragraphe, lien), et non comment il doit apparaître." },
            },
            {
              heading: "Attributs, liens et images",
              paragraphs: [
                "Une balise ouvrante peut porter des attributs, qui précisent l'élément : nom='valeur'. Le lien hypertexte s'écrit avec la balise <a> et l'attribut href, qui donne l'adresse de destination : <a href='https://www.example.org'>Site exemple</a> affiche le texte « Site exemple », sur lequel on peut cliquer. Un lien peut aussi viser une autre page du même site, par un chemin relatif : <a href='contact.html'>Contact</a>.",
                "Une image s'insère avec la balise <img>, qui n'a pas de balise fermante. L'attribut src indique le fichier de l'image, l'attribut alt un texte de remplacement, lu par les logiciels qui vocalisent les pages pour les personnes malvoyantes et affiché si l'image ne se charge pas : <img src='chat.jpg' alt='Un chat endormi'>. Les attributs class et id donnent un nom à un élément, pour pouvoir le mettre en forme avec CSS.",
              ],
            },
            {
              heading: "CSS : décrire la présentation",
              paragraphs: [
                "La présentation de la page (couleurs, polices, tailles, marges, disposition) est décrite à part, dans une feuille de style écrite en CSS (Cascading Style Sheets). Une règle CSS se compose d'un sélecteur, qui désigne les éléments concernés, puis, entre accolades, de déclarations propriété: valeur; séparées par des points-virgules. Exemple : h1 { color: navy; text-align: center; } affiche tous les titres h1 en bleu marine et centrés.",
                "Le sélecteur peut être un nom de balise (p), une classe précédée d'un point (.important, pour les éléments portant class='important') ou un identifiant précédé d'un dièse (#menu, pour l'élément portant id='menu'). Quand plusieurs règles s'appliquent au même élément, la plus précise l'emporte : un identifiant l'emporte sur une classe, qui l'emporte sur un nom de balise ; à précision égale, la dernière règle écrite gagne. Certaines propriétés, comme la couleur du texte, sont héritées : une couleur fixée pour body s'applique aux éléments qu'il contient, sauf règle contraire.",
                "On place en général les règles dans un fichier séparé, par exemple style.css, relié à la page par la ligne <link rel='stylesheet' href='style.css'> écrite dans le head. Séparer le contenu (HTML) de la présentation (CSS) a deux avantages : une seule feuille de style peut mettre en forme toutes les pages d'un site, et l'on peut changer l'apparence du site entier sans toucher au contenu.",
              ],
              box: { label: "Règle", text: "sélecteur { propriété: valeur; propriété: valeur; }. p désigne toutes les balises p, .nom les éléments de classe nom, #nom l'élément d'identifiant nom. Priorité : identifiant, puis classe, puis balise ; à égalité, la dernière règle gagne." },
            },
          ],
          keyPoints: [
            "Le Web est un service d'Internet, créé au CERN par Tim Berners-Lee (proposition en 1989, premier site public en 1991).",
            "HTML décrit le contenu et la structure avec des balises ouvrantes et fermantes, correctement emboîtées.",
            "Une page contient un head (informations, titre de l'onglet) et un body (ce qui s'affiche).",
            "<a href='...'> crée un lien ; <img src='...' alt='...'> insère une image avec un texte de remplacement.",
            "CSS décrit la présentation : sélecteur { propriété: valeur; } ; la règle la plus précise l'emporte (id, puis classe, puis balise).",
          ],
          example: {
            statement: "On donne le corps d'une page : <h1>Club robotique</h1> <p>Réunion le <strong>mercredi</strong> à 14 h.</p> <a href='inscription.html'>S'inscrire</a>, et la feuille de style : h1 { color: green; } p { font-size: 18px; }. a) Identifier les éléments du contenu. b) Décrire l'affichage obtenu. c) Que faut-il modifier pour que le titre soit centré, sans toucher au fichier HTML ?",
            solution: [
              "a) <h1> encadre le titre principal « Club robotique » ; <p> encadre un paragraphe ; <strong> marque le mot important « mercredi » à l'intérieur du paragraphe ; <a> est un lien hypertexte.",
              "Le lien affiche le texte « S'inscrire » et mène, grâce à l'attribut href, à la page inscription.html du même site.",
              "b) Le titre s'affiche en vert (règle h1), le paragraphe avec des caractères de 18 pixels (règle p) et le mot « mercredi » en gras, mise en forme par défaut de <strong>.",
              "c) La présentation relève du CSS : on ajoute la déclaration text-align: center; à la règle h1, qui devient h1 { color: green; text-align: center; }.",
              "Réponse : le contenu reste inchangé dans le HTML ; seule la feuille de style est modifiée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le code HTML suivant contient trois défauts. Les repérer et les corriger : <h1>Mes recettes<h1> <p>Mélanger la <strong>farine</p></strong> <img src='gateau.jpg'>.",
              hint: "Vérifiez que chaque balise fermante comporte une barre oblique, que les balises sont fermées dans l'ordre inverse de leur ouverture, et que l'image a un texte de remplacement.",
              solution: [
                "1. La deuxième balise <h1> devrait être une balise fermante : <h1>Mes recettes</h1>.",
                "2. Les balises sont mal emboîtées : <strong> a été ouvert après <p>, il doit être fermé avant lui. On écrit <p>Mélanger la <strong>farine</strong></p>.",
                "3. L'image n'a pas d'attribut alt : on ajoute un texte de remplacement, par exemple <img src='gateau.jpg' alt='Gâteau au chocolat'>.",
                "Code corrigé : <h1>Mes recettes</h1> <p>Mélanger la <strong>farine</strong></p> <img src='gateau.jpg' alt='Gâteau au chocolat'>.",
              ],
            },
            {
              level: 2,
              statement: "Écrire le code HTML complet d'une page dont l'onglet affiche « Mon lycée », et dont le corps contient : un titre principal « Bienvenue » ; un paragraphe « Découvrez nos options. » ; une liste à puces de deux éléments, « SNT » et « Théâtre » ; un lien « Nous écrire » vers la page contact.html. Indiquer ensuite la règle CSS qui affiche tous les éléments de liste en violet.",
              hint: "Partez de la structure <!DOCTYPE html>, <html>, <head>, <body> ; la liste à puces s'écrit avec <ul> et chaque élément avec <li>. En CSS, la propriété de la couleur du texte est color.",
              solution: [
                "Structure : <!DOCTYPE html> puis <html lang='fr'> qui contient <head> et <body>.",
                "En-tête : <head> <meta charset='utf-8'> <title>Mon lycée</title> </head>.",
                "Corps : <body> <h1>Bienvenue</h1> <p>Découvrez nos options.</p>, puis la suite.",
                "Liste : <ul> <li>SNT</li> <li>Théâtre</li> </ul>.",
                "Lien et fin : <a href='contact.html'>Nous écrire</a> </body> </html>.",
                "Règle CSS : li { color: purple; }, placée dans la feuille de style reliée à la page.",
              ],
            },
            {
              level: 3,
              statement: "La feuille de style d'une page contient, dans cet ordre : body { color: black; } p { color: blue; font-size: 16px; } .alerte { color: red; } #pied { font-size: 12px; }. Le corps de la page contient : <h2>Texte A</h2> <p>Texte B</p> <p class='alerte'>Texte C</p> <p id='pied'>Texte D</p>. 1. Donner la couleur de chacun des textes A, B, C, D, ainsi que la taille de B, C et D, en justifiant. 2. On ajoute à la fin de la feuille la règle p { color: green; }. Quelles couleurs changent ? 3. Expliquer pourquoi il est préférable de placer ces règles dans un fichier style.css commun plutôt que de les répéter dans chaque page du site.",
              hint: "Cherchez, pour chaque élément, toutes les règles qui le concernent ; un identifiant l'emporte sur une classe, une classe sur un nom de balise, et la couleur de body est héritée par les éléments qui n'ont pas de règle de couleur.",
              solution: [
                "1. Texte A (h2) : aucune règle ne fixe la couleur des h2, il hérite de body : noir.",
                "Texte B : la règle p s'applique, il est bleu, en 16 px.",
                "Texte C : les règles p et .alerte fixent toutes deux la couleur ; la classe est plus précise que la balise, il est rouge. Sa taille, fixée seulement par p, est de 16 px.",
                "Texte D : la couleur vient seulement de p (bleu) ; pour la taille, #pied l'emporte sur p : 12 px.",
                "2. La nouvelle règle p a la même précision que l'ancienne et est écrite après : B et D deviennent verts. C reste rouge, car la classe .alerte l'emporte sur la balise p quel que soit l'ordre. A reste noir.",
                "3. Un fichier commun, relié par <link rel='stylesheet' href='style.css'>, met en forme toutes les pages d'un coup : une modification se fait à un seul endroit, l'apparence du site reste homogène et le HTML ne contient que le contenu.",
                "Résultat : A noir ; B bleu, 16 px ; C rouge, 16 px ; D bleu, 12 px ; après l'ajout, B et D verts.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque balise ou propriété à son rôle.",
            pairs: [
              { left: "<h1>", right: "Titre principal de la page" },
              { left: "<p>", right: "Paragraphe de texte" },
              { left: "<a href='...'>", right: "Lien hypertexte vers une autre page" },
              { left: "<img src='...' alt='...'>", right: "Image avec un texte de remplacement" },
              { left: "<title>", right: "Titre affiché dans l'onglet du navigateur" },
              { left: "color", right: "Propriété CSS de la couleur du texte" },
            ],
          },
          quiz: [
            { q: "Quel langage décrit la présentation d'une page web (couleurs, tailles, disposition) ?", options: ["CSS", "HTML", "HTTP", "Python"], answer: 0, why: "HTML décrit le contenu, CSS sa présentation." },
            { q: "Quelle écriture crée correctement un lien vers la page aide.html ?", options: ["<link href='aide.html'>Aide</link>", "<a src='aide.html'>Aide</a>", "<img href='aide.html'>", "<a href='aide.html'>Aide</a>"], answer: 3, why: "Un lien hypertexte s'écrit avec la balise a et l'attribut href." },
            { q: "Qui a proposé le Web au CERN en 1989 ?", options: ["Vint Cerf et Bob Kahn", "Louis Pouzin", "Tim Berners-Lee", "Ted Nelson"], answer: 2, why: "Tim Berners-Lee a proposé le Web au CERN en 1989 ; Vint Cerf est l'un des pères de TCP." },
            { q: "Dans quel élément se trouve le contenu affiché par le navigateur ?", options: ["<body>", "<head>", "<title>", "<meta>"], answer: 0, why: "Le body contient tout ce qui s'affiche ; le head contient des informations sur la page." },
            { q: "Avec p { color: blue; } et .note { color: red; }, de quelle couleur est <p class='note'> ?", options: ["Bleu, car p est écrit en premier", "Noir, couleur par défaut", "Violet, mélange des deux", "Rouge"], answer: 3, why: "Une classe est plus précise qu'un nom de balise : la règle .note l'emporte." },
          ],
          trap: "Mélanger contenu et présentation, par exemple utiliser un titre <h1> seulement pour écrire en gros, ou mal emboîter les balises (<p><strong>texte</p></strong>) : une balise ouverte à l'intérieur d'une autre doit être fermée avant elle.",
          method: "Pour étudier une page, ouvrez-la dans un navigateur et utilisez l'outil « Inspecter » : en survolant le code, vous voyez quel élément du rendu correspond à chaque balise et quelles règles CSS s'y appliquent. Modifiez une valeur pour observer l'effet.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'url-http',
          title: 'URL, HTTP et dialogue entre client et serveur',
          minutes: 35,
          objectives: [
            "Décomposer l'URL d'une page en protocole, nom de domaine, chemin, paramètres et ancre.",
            "Décomposer le contenu d'une requête HTTP et identifier les paramètres passés.",
            "Décrire le dialogue entre client et serveur et distinguer pages statiques et pages dynamiques.",
            "Reconnaître une page sécurisée (HTTPS) et maîtriser les réglages des cookies et de la confidentialité d'un navigateur.",
          ],
          course: [
            {
              heading: "L'URL, adresse d'une ressource",
              paragraphs: [
                "Chaque ressource du Web (page, image, vidéo) est désignée par une URL (Uniform Resource Locator), son adresse unique. Prenons https://www.exemple.fr/actualites/article.html?id=42&lang=fr#commentaires. Le protocole, https, indique comment dialoguer avec le serveur. Le nom de domaine, www.exemple.fr, désigne le serveur ; il sera traduit en adresse IP par le DNS. Le chemin, /actualites/article.html, indique où se trouve la ressource sur le serveur, comme un chemin de dossiers et de fichiers.",
                "Après un point d'interrogation viennent d'éventuels paramètres, sous la forme nom=valeur, séparés par le caractère & : ici id vaut 42 et lang vaut fr. Ils transmettent des informations au serveur, par exemple les mots tapés dans un moteur de recherche. Enfin, après le dièse #, l'ancre (ici commentaires) désigne un endroit précis de la page ; elle n'est pas envoyée au serveur, c'est le navigateur qui fait défiler la page jusqu'à cet endroit.",
              ],
              box: { label: "Repère", text: "protocole://nom.de.domaine/chemin/fichier?param1=valeur1&param2=valeur2#ancre. Exemple : https (protocole), www.exemple.fr (domaine), /actualites/article.html (chemin), id=42 et lang=fr (paramètres), commentaires (ancre)." },
            },
            {
              heading: "Le dialogue HTTP entre client et serveur",
              paragraphs: [
                "Le Web suit le modèle client-serveur. Le client est le navigateur ; le serveur est un ordinateur qui héberge le site et répond aux demandes. Ils dialoguent selon le protocole HTTP (HyperText Transfer Protocol) : le client envoie une requête, le serveur renvoie une réponse. Une page complète demande souvent des dizaines de requêtes : une pour le HTML, puis une pour chaque feuille de style, image ou script.",
                "Une requête HTTP commence par une méthode, le chemin de la ressource et la version du protocole, par exemple GET /actualites/article.html?id=42 HTTP/1.1, suivie d'en-têtes comme Host: www.exemple.fr (le site visé) ou User-Agent (le navigateur utilisé). La méthode GET demande une ressource ; les paramètres éventuels sont alors visibles dans l'URL. La méthode POST envoie des données, par exemple celles d'un formulaire, dans le corps de la requête, et non dans l'URL.",
                "La réponse du serveur commence par un code d'état. Les codes 2xx signalent un succès (200 OK : voici la ressource), 3xx une redirection (301 : la ressource a déménagé), 4xx une erreur du côté client (403 : accès interdit ; 404 : ressource introuvable), 5xx une erreur du serveur (500 : erreur interne). Viennent ensuite des en-têtes, comme le type du contenu (Content-Type: text/html), puis le contenu lui-même, par exemple le code HTML de la page.",
              ],
              box: { label: "À retenir", text: "Requête : méthode (GET ou POST), chemin, version, en-têtes (Host...). Réponse : code d'état (200, 301, 403, 404, 500...), en-têtes, contenu. GET : paramètres dans l'URL ; POST : données dans le corps de la requête." },
            },
            {
              heading: "Pages statiques et pages dynamiques",
              paragraphs: [
                "Une page statique est un fichier HTML enregistré tel quel sur le serveur : tous les visiteurs reçoivent exactement le même contenu, jusqu'à ce que l'auteur modifie le fichier. Une page dynamique est fabriquée par un programme exécuté sur le serveur au moment de la requête, souvent à partir d'une base de données : la page de résultats d'un moteur de recherche, votre fil d'actualité ou votre panier d'achat sont différents pour chaque visiteur et à chaque instant.",
                "Le protocole HTTP ne garde pas la mémoire des requêtes précédentes. Pour reconnaître un visiteur d'une page à l'autre (panier, connexion à un compte, préférences), le serveur demande au navigateur d'enregistrer un cookie : un petit fichier texte que le navigateur renvoie ensuite à chaque requête vers ce site. Les cookies déposés par d'autres sites que celui qui est visité, dits cookies tiers, servent souvent à suivre la navigation d'un site à l'autre pour cibler la publicité.",
              ],
            },
            {
              heading: "HTTPS, cookies et confidentialité",
              paragraphs: [
                "Avec HTTP, les échanges circulent en clair : une personne qui intercepte les paquets peut lire leur contenu, y compris un mot de passe. HTTPS (le S signifie secure) chiffre les échanges entre le navigateur et le serveur grâce au protocole TLS, et le serveur présente un certificat qui atteste qu'il correspond bien au nom de domaine. Le navigateur signale une connexion sécurisée par un cadenas ou une icône près de l'adresse.",
                "Attention : HTTPS protège le transport des données, mais ne garantit pas l'honnêteté du site. Un site d'hameçonnage (phishing), qui imite celui d'une banque pour voler des identifiants, peut très bien utiliser HTTPS. Il faut donc aussi vérifier le nom de domaine réel, c'est-à-dire la partie située juste avant le premier / qui suit le protocole : dans https://www.banque.fr.connexion-client.net/, le domaine est connexion-client.net, et non banque.fr.",
                "Le navigateur offre des réglages de confidentialité qu'il faut savoir maîtriser : supprimer l'historique et les cookies, bloquer les cookies tiers, refuser les cookies non indispensables dans les fenêtres de consentement (la CNIL impose que les cookies publicitaires ne soient déposés qu'avec l'accord de l'internaute et qu'il soit aussi simple de refuser que d'accepter). La navigation privée n'enregistre ni l'historique ni les cookies après la fermeture de la fenêtre, mais elle ne rend pas anonyme : les sites visités et le fournisseur d'accès voient toujours la connexion.",
              ],
              box: { label: "Règle", text: "Cadenas et HTTPS : la communication est chiffrée et le certificat correspond au domaine. Cela ne prouve pas que le site soit honnête : vérifiez toujours le nom de domaine réel, juste avant le premier / après le protocole." },
            },
          ],
          keyPoints: [
            "URL : protocole, nom de domaine, chemin, paramètres après ?, séparés par &, et ancre après #.",
            "HTTP : le client envoie une requête (méthode GET ou POST, chemin, en-têtes), le serveur renvoie un code d'état et un contenu.",
            "Codes : 200 succès, 301 redirection, 403 interdit, 404 introuvable, 500 erreur du serveur.",
            "Page statique : fichier identique pour tous ; page dynamique : produite par un programme du serveur à chaque requête.",
            "HTTPS chiffre les échanges, mais ne prouve pas l'honnêteté du site ; les cookies et l'historique se règlent dans le navigateur.",
          ],
          example: {
            statement: "Décomposer l'URL suivante et indiquer ce que chaque partie représente : https://www.musee-exemple.fr/collections/peinture.html?siecle=19&page=2#impressionnisme.",
            solution: [
              "Protocole : https, la communication avec le serveur sera chiffrée.",
              "Nom de domaine : www.musee-exemple.fr, le serveur à contacter ; le DNS le traduira en adresse IP.",
              "Chemin : /collections/peinture.html, le fichier peinture.html situé dans le dossier collections du serveur.",
              "Paramètres : siecle=19 et page=2, séparés par &, transmis au serveur qui peut construire une page dynamique (deuxième page des peintures du XIXe siècle).",
              "Ancre : impressionnisme, une partie de la page vers laquelle le navigateur fait défiler l'affichage ; elle n'est pas envoyée au serveur.",
              "Réponse : protocole https, domaine www.musee-exemple.fr, chemin /collections/peinture.html, paramètres siecle = 19 et page = 2, ancre impressionnisme.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour l'URL http://www.bibliotheque-exemple.fr/catalogue/recherche.php?auteur=hugo&tri=date, donner : a) le protocole ; b) le nom de domaine ; c) le chemin ; d) les paramètres et leur valeur. e) La page est-elle sécurisée ?",
              hint: "Repérez les séparateurs : :// après le protocole, le premier / après le domaine, ? avant les paramètres, & entre deux paramètres.",
              solution: [
                "a) Protocole : http.",
                "b) Nom de domaine : www.bibliotheque-exemple.fr.",
                "c) Chemin : /catalogue/recherche.php.",
                "d) Deux paramètres : auteur, de valeur hugo, et tri, de valeur date.",
                "e) Non : le protocole est http et non https, les échanges circulent en clair.",
              ],
            },
            {
              level: 2,
              statement: "Voici une requête envoyée par un navigateur, ligne par ligne : GET /recherche?mot=python&page=2 HTTP/1.1 ; Host: www.bibliotheque-exemple.fr ; User-Agent: Mozilla/5.0. a) Quelle est la méthode utilisée ? Quelle ressource est demandée, et à quel site ? b) Quels paramètres sont transmis ? c) Le serveur répond HTTP/1.1 404 Not Found. Que signifie cette réponse ? d) Que signifierait la réponse HTTP/1.1 200 OK suivie de Content-Type: text/html ? e) La page de résultats est-elle statique ou dynamique ? Justifier.",
              hint: "La première ligne donne la méthode, le chemin et la version ; l'en-tête Host donne le site ; les paramètres suivent le point d'interrogation.",
              solution: [
                "a) Méthode GET ; ressource /recherche, demandée au site www.bibliotheque-exemple.fr, indiqué par l'en-tête Host.",
                "b) Deux paramètres : mot = python et page = 2, visibles dans l'URL car la méthode est GET.",
                "c) Le code 404 est une erreur côté client : la ressource demandée est introuvable sur ce serveur.",
                "d) Le code 200 signifie que la requête a réussi ; l'en-tête indique que le contenu qui suit est une page HTML.",
                "e) Dynamique : le contenu dépend des paramètres envoyés (le mot cherché, le numéro de page) ; il est fabriqué par un programme du serveur au moment de la requête.",
              ],
            },
            {
              level: 3,
              statement: "Un élève reçoit un message : « Votre compte de l'ENT va être fermé, reconnectez-vous ici : https://www.ent-lycee.fr.verification-compte.net/connexion » (situation fictive). La page affiche un cadenas et un formulaire demandant identifiant et mot de passe. 1. Quel est le nom de domaine réel de ce site ? 2. Le cadenas prouve-t-il que le site est celui du lycée ? Expliquer ce que garantit HTTPS. 3. Le formulaire envoie ses données par la méthode GET : pourquoi est-ce un mauvais choix pour un mot de passe ? Quelle méthode faut-il utiliser ? 4. Quelle attitude l'élève doit-il adopter ?",
              hint: "Le domaine réel est la partie située juste avant le premier / qui suit https:// ; lisez-la de droite à gauche.",
              solution: [
                "1. La partie située avant le premier / est www.ent-lycee.fr.verification-compte.net ; lue de droite à gauche, elle appartient au domaine verification-compte.net. ent-lycee.fr n'en est qu'un sous-domaine trompeur.",
                "2. Non. HTTPS garantit que les échanges sont chiffrés et que le certificat correspond au domaine verification-compte.net ; il ne dit rien de l'honnêteté de son propriétaire. C'est une tentative d'hameçonnage.",
                "3. Avec GET, les données du formulaire sont placées dans l'URL : le mot de passe apparaîtrait dans la barre d'adresse, l'historique et les journaux des serveurs. On utilise POST, qui place les données dans le corps de la requête, et toujours avec HTTPS.",
                "4. Ne pas saisir ses identifiants ; accéder à l'ENT en tapant soi-même son adresse habituelle ; signaler le message à l'établissement ; changer son mot de passe s'il a déjà été saisi.",
                "Résultat : le site appartient au domaine verification-compte.net ; malgré le cadenas, il ne faut pas s'y connecter.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : URL, HTTP et sécurité.",
            statements: [
              { text: "Le code 404 signifie que la ressource demandée est introuvable.", true: true, why: "Les codes 4xx désignent une erreur côté client ; 404 : introuvable." },
              { text: "Un cadenas dans la barre d'adresse prouve que le site est honnête.", true: false, why: "Il prouve seulement que la connexion est chiffrée ; un site d'hameçonnage peut utiliser HTTPS." },
              { text: "Avec la méthode GET, les paramètres apparaissent dans l'URL.", true: true, why: "Ils sont placés après le point d'interrogation, séparés par &." },
              { text: "L'ancre placée après # est envoyée au serveur.", true: false, why: "L'ancre est utilisée par le navigateur pour se placer dans la page ; elle n'est pas transmise au serveur." },
              { text: "La navigation privée rend l'internaute anonyme pour son fournisseur d'accès.", true: false, why: "Elle n'efface que les traces locales (historique, cookies) ; la connexion reste visible." },
              { text: "Une page dynamique peut être différente pour chaque visiteur.", true: true, why: "Elle est fabriquée par un programme du serveur à chaque requête, par exemple selon le compte connecté." },
              { text: "Un cookie est un petit fichier enregistré par le navigateur à la demande d'un site.", true: true, why: "Le navigateur le renvoie ensuite à chaque requête vers ce site, ce qui permet de reconnaître le visiteur." },
            ],
          },
          quiz: [
            { q: "Dans https://www.exemple-site.org/docs/guide.html?v=2, quel est le chemin ?", options: ["https", "www.exemple-site.org", "/docs/guide.html", "v=2"], answer: 2, why: "Le chemin suit le nom de domaine et précède les paramètres." },
            { q: "Quelle méthode HTTP convient pour envoyer un mot de passe ?", options: ["POST, avec HTTPS", "GET, avec HTTP", "GET, dans l'ancre", "Aucune, HTTP ne transmet pas de données"], answer: 0, why: "POST place les données dans le corps de la requête et HTTPS les chiffre." },
            { q: "Que signifie un code de réponse 500 ?", options: ["La requête a réussi et la page est envoyée", "La ressource a déménagé", "La ressource est introuvable", "Une erreur s'est produite sur le serveur"], answer: 3, why: "Les codes 5xx signalent une erreur du serveur." },
            { q: "Quel est le nom de domaine réel de https://www.impots.fr.paiement-rapide.com/payer ?", options: ["impots.fr", "www.impots.fr, protégé par HTTPS", "paiement-rapide.com", "payer"], answer: 2, why: "On lit la partie située avant le premier / de droite à gauche : le domaine est paiement-rapide.com." },
            { q: "Qu'est-ce qu'une page statique ?", options: ["Un fichier envoyé identique à tous les visiteurs", "Une page sans image", "Une page qui ne contient aucun lien", "Une page produite à chaque requête par un programme"], answer: 0, why: "Une page statique est un fichier enregistré tel quel sur le serveur." },
          ],
          trap: "Croire qu'un cadenas (HTTPS) garantit qu'un site est fiable, ou lire le nom de domaine de gauche à droite : dans www.banque.fr.exemple.net, le domaine réel est exemple.net.",
          method: "Pour décomposer une URL, recopiez-la et tracez un trait à chaque séparateur : après ://, au premier /, au ?, à chaque & et au #. Nommez ensuite chaque morceau : protocole, domaine, chemin, paramètres, ancre.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'moteurs-recherche',
          title: "Les moteurs de recherche et l'indexation",
          minutes: 35,
          objectives: [
            "Expliquer le principe de fonctionnement d'un moteur de recherche : exploration, indexation, classement.",
            "Mener une analyse critique des résultats fournis par un moteur de recherche.",
            "Connaître les notions juridiques de droit d'auteur et de licence pour réutiliser un contenu trouvé sur le Web.",
          ],
          course: [
            {
              heading: "L'exploration du Web par des robots",
              paragraphs: [
                "Le Web compte un nombre immense de pages, sans catalogue central. Pour qu'on puisse y trouver une information, un moteur de recherche doit d'abord les découvrir. Il utilise pour cela des programmes appelés robots d'exploration (en anglais crawlers ou spiders). Un robot part d'une liste d'adresses connues, télécharge chaque page, y repère les liens hypertextes et ajoute les pages ainsi découvertes à la liste des pages à visiter. De lien en lien, il parcourt une grande partie du Web.",
                "L'exploration est permanente : les robots repassent régulièrement sur les pages pour détecter les modifications, les nouveautés et les pages supprimées. Une page vers laquelle aucun lien ne pointe a peu de chances d'être découverte. Le propriétaire d'un site peut aussi demander aux robots de ne pas explorer certaines pages, grâce à un fichier nommé robots.txt.",
              ],
            },
            {
              heading: "L'indexation",
              paragraphs: [
                "Le moteur ne parcourt pas le Web au moment où vous posez une question : ce serait beaucoup trop long. Il a construit à l'avance un index, comparable à l'index d'un livre de cuisine qui indique, pour chaque ingrédient, les pages des recettes qui l'utilisent. Pour chaque mot rencontré, l'index donne la liste des pages qui le contiennent, avec des informations utiles comme le nombre d'occurrences ou la position du mot (titre, texte, lien).",
                "Lorsque vous tapez une requête, par exemple « recette crêpe », le moteur consulte l'index pour chaque mot, puis retient les pages qui contiennent les deux mots. Cette recherche dans l'index est très rapide, ce qui explique qu'un moteur affiche des résultats en une fraction de seconde. Avant d'indexer, le moteur simplifie souvent les textes : il passe tout en minuscules, ignore les mots très fréquents comme le, la ou de, et peut regrouper les formes d'un même mot.",
              ],
              box: { label: "Définition", text: "L'index d'un moteur de recherche associe à chaque mot la liste des pages qui le contiennent. Il est construit à l'avance, à partir des pages collectées par les robots, et consulté à chaque requête." },
            },
            {
              heading: "Le classement des résultats",
              paragraphs: [
                "Une requête peut correspondre à des millions de pages : tout l'enjeu est de les classer, car la plupart des internautes ne consultent que les premiers résultats. Le classement combine de nombreux critères, dont le détail est gardé secret : la pertinence (le mot apparaît-il dans le titre, souvent, en début de page ?), la popularité de la page, sa fraîcheur, la langue et la localisation de l'internaute, et parfois son historique de recherche.",
                "Pour mesurer la popularité, Larry Page et Sergey Brin, fondateurs de Google, ont décrit en 1998 l'algorithme PageRank. Son principe : un lien d'une page vers une autre est comme un vote de confiance. Une page est d'autant plus importante qu'elle reçoit des liens nombreux, et surtout des liens venant de pages elles-mêmes importantes. Un lien venant d'un grand site d'information compte ainsi davantage qu'un lien venant d'une page que personne ne cite.",
                "Les moteurs de recherche sont en général gratuits pour l'internaute : ils se financent par la publicité. Certains résultats sont des liens sponsorisés, payés par des annonceurs pour apparaître en tête ; la loi impose qu'ils soient signalés comme tels (mention « Annonce » ou « Sponsorisé »). Par ailleurs, de nombreux sites cherchent à améliorer leur place dans les résultats : c'est le référencement.",
              ],
              box: { label: "À retenir", text: "Trois étapes : exploration (des robots suivent les liens), indexation (un index associe les mots aux pages), classement (pertinence, popularité, fraîcheur, localisation...). PageRank : une page est importante si des pages importantes pointent vers elle." },
            },
            {
              heading: "Analyser les résultats avec un esprit critique",
              paragraphs: [
                "L'ordre des résultats n'est pas un classement de la vérité : il résulte d'un algorithme qui mesure la pertinence et la popularité, et qui peut être influencé par la publicité, le référencement ou la personnalisation. Deux personnes peuvent obtenir des résultats différents pour la même requête. Pour une recherche sérieuse, on identifie l'auteur et la nature de chaque source (site officiel, média, encyclopédie, blog, forum, site commercial), on vérifie sa date, on recoupe l'information avec d'autres sources et on repère les liens sponsorisés.",
                "On peut aussi affiner une requête. La plupart des moteurs acceptent des opérateurs : des guillemets droits autour d'une expression pour chercher cette expression exacte, le signe - devant un mot pour exclure les pages qui le contiennent, site: suivi d'un nom de domaine pour limiter la recherche à un site (par exemple site:gouv.fr). Comparer les résultats de plusieurs moteurs est également instructif.",
              ],
            },
            {
              heading: "Droit d'auteur et licences",
              paragraphs: [
                "Trouver un texte, une image ou une musique sur le Web ne donne pas le droit de le réutiliser librement. En France, une œuvre originale est protégée par le droit d'auteur dès sa création, sans aucune formalité. L'auteur a des droits moraux, qui sont perpétuels (être cité, respect de l'œuvre), et des droits patrimoniaux (autoriser ou non la reproduction et la diffusion), qui durent toute sa vie et 70 ans après sa mort ; l'œuvre entre ensuite dans le domaine public. La loi permet toutefois de courtes citations, à condition de citer l'auteur et la source.",
                "L'auteur peut accorder par avance certains droits d'usage grâce à une licence. Les licences Creative Commons combinent quelques conditions : BY (citer l'auteur, condition présente dans toutes), NC (pas d'utilisation commerciale), ND (pas de modification), SA (partage dans les mêmes conditions). Une image sous licence CC BY peut ainsi être réutilisée, même modifiée, à condition de citer son auteur ; une image CC BY-NC ne peut pas être utilisée par un site commercial sans autorisation.",
              ],
              box: { label: "Règle", text: "Tout ce qui est en ligne n'est pas libre de droits. Avant de réutiliser un contenu, cherchez sa licence ; à défaut, demandez l'autorisation. Dans tous les cas, citez l'auteur et la source." },
            },
          ],
          keyPoints: [
            "Exploration : des robots parcourent le Web en suivant les liens et repassent régulièrement sur les pages.",
            "Indexation : un index, construit à l'avance, associe chaque mot aux pages qui le contiennent.",
            "Classement : pertinence, popularité (PageRank : liens reçus de pages importantes), fraîcheur, localisation, personnalisation.",
            "Les liens sponsorisés sont payés et doivent être signalés ; l'ordre des résultats n'est pas une garantie de vérité.",
            "Droit d'auteur : protection dès la création, jusqu'à 70 ans après la mort de l'auteur ; les licences Creative Commons précisent les usages permis.",
          ],
          example: {
            statement: "On donne trois pages (données fictives). Page 1 : « Python est un langage de programmation ». Page 2 : « Le serpent python vit en Asie ». Page 3 : « Apprendre la programmation au lycée ». En ignorant les mots très courants (le, la, un, est, de, en, au) et en écrivant tout en minuscules, construire l'index, puis donner les résultats des requêtes « python » et « python programmation ».",
            solution: [
              "On liste les mots retenus de chaque page. Page 1 : python, langage, programmation. Page 2 : serpent, python, vit, asie. Page 3 : apprendre, programmation, lycée.",
              "Index : python → pages 1 et 2 ; langage → page 1 ; programmation → pages 1 et 3 ; serpent → page 2 ; vit → page 2 ; asie → page 2 ; apprendre → page 3 ; lycée → page 3.",
              "Requête « python » : l'index donne directement les pages 1 et 2.",
              "Requête « python programmation » : on garde les pages présentes dans les deux listes, {1, 2} et {1, 3} : seule la page 1 convient.",
              "Réponse : « python » renvoie les pages 1 et 2 (le mot est ambigu : langage ou serpent) ; « python programmation » renvoie la page 1, ce qui montre l'intérêt d'une requête précise.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dire à quelle étape du fonctionnement d'un moteur de recherche (exploration, indexation ou classement) correspond chacune des actions suivantes : a) un robot télécharge une page et relève ses liens ; b) le mot « volcan » est associé à la liste des pages qui le contiennent ; c) une page très citée par d'autres sites passe devant une page peu citée ; d) un robot revient sur un site pour détecter les nouvelles pages ; e) une page récente est favorisée pour une requête sur l'actualité.",
              hint: "Découvrir les pages relève de l'exploration ; les ranger par mot, de l'indexation ; les ordonner pour une requête, du classement.",
              solution: [
                "a) Télécharger les pages et suivre les liens : exploration.",
                "b) Associer un mot aux pages qui le contiennent : indexation.",
                "c) Tenir compte des liens reçus (popularité) pour ordonner les résultats : classement.",
                "d) Revisiter régulièrement les sites : exploration.",
                "e) Favoriser la fraîcheur d'une page : classement.",
              ],
            },
            {
              level: 2,
              statement: "Cinq pages A, B, C, D et E contiennent les liens suivants (données fictives) : A pointe vers B et C ; B pointe vers C ; C pointe vers A ; D pointe vers C ; E pointe vers B et C. a) Compter le nombre de liens reçus par chaque page et classer les pages selon ce critère. b) Selon le principe de PageRank, pourquoi le lien que reçoit A pourrait-il compter davantage que ceux que reçoit B ? c) Pourquoi un site qui créerait cent pages vides pointant vers lui ne devrait-il pas gagner beaucoup de places ?",
              hint: "Pour a), parcourez chaque lien et ajoutez 1 à la page visée ; pour b), regardez d'où vient le lien reçu par A.",
              solution: [
                "a) A reçoit 1 lien (de C) ; B en reçoit 2 (de A et de E) ; C en reçoit 4 (de A, B, D et E) ; D et E n'en reçoivent aucun.",
                "Classement par liens reçus : C (4), puis B (2), puis A (1), puis D et E (0).",
                "b) A reçoit son lien de C, la page la plus citée. Dans PageRank, un lien venant d'une page importante transmet davantage d'importance : le lien de C vers A peut peser plus que les deux liens que B reçoit de pages peu citées (A et E).",
                "c) Des pages vides ne reçoivent elles-mêmes aucun lien : leur importance est très faible, donc leurs votes pèsent peu. Les moteurs détectent en outre ces manipulations et peuvent les sanctionner.",
                "Résultat : C est la page la plus populaire ; A, citée par C, peut être mieux classée que ne le laisse penser son unique lien.",
              ],
            },
            {
              level: 3,
              statement: "Pour un exposé sur les effets des écrans sur le sommeil, une élève tape une requête et obtient, dans l'ordre : 1. un lien marqué « Sponsorisé » vers un site qui vend des lunettes anti-lumière bleue ; 2. un article d'un site d'information daté d'il y a huit ans ; 3. une page d'un organisme public de santé ; 4. un message sur un forum, sans auteur identifié. Elle souhaite aussi illustrer son exposé, qui sera publié sur le site du lycée, par une photo trouvée en ligne sous licence CC BY-NC-ND. 1. Expliquer pourquoi le premier résultat est en tête et ce qu'il faut en penser. 2. Évaluer la fiabilité des trois autres sources et proposer une méthode de vérification. 3. Proposer une requête plus précise utilisant un opérateur. 4. Peut-elle utiliser la photo ? À quelles conditions ? Pourrait-elle la recadrer ?",
              hint: "Pour chaque source, identifiez l'auteur, sa nature (commerciale, officielle, anonyme) et la date ; pour la photo, décodez chaque élément de la licence : BY, NC, ND.",
              solution: [
                "1. Le premier résultat est un lien sponsorisé : sa place a été payée par un annonceur, elle ne dépend pas de sa pertinence. Le site vend un produit lié au sujet : il a un intérêt commercial et ne peut pas servir de source neutre.",
                "2. L'article d'information peut être sérieux, mais il date de huit ans : il faut vérifier si les connaissances ont évolué. La page de l'organisme public de santé est a priori la plus fiable (auteur identifié, mission d'information). Le message de forum, anonyme et invérifiable, n'est pas une source.",
                "Méthode : identifier l'auteur et la date de chaque document, croiser au moins deux sources fiables et indépendantes, et remonter aux études citées quand c'est possible.",
                "3. Par exemple : écrans sommeil adolescents site:gouv.fr, pour limiter la recherche aux sites publics ; ou l'expression lumière bleue placée entre guillemets droits, pour chercher cette expression exacte.",
                "4. BY : elle doit citer l'auteur ; NC : pas d'usage commercial, ce qui est le cas d'un exposé publié sur le site d'un lycée ; ND : pas de modification. Elle peut donc l'utiliser en citant l'auteur, la source et la licence, mais elle ne peut pas la recadrer, car ce serait une modification.",
                "Résultat : écarter le lien sponsorisé et le forum, privilégier l'organisme public en le recoupant, et utiliser la photo intacte en la créditant.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le chemin qui mène d'une page web à son apparition dans les résultats d'une recherche.",
            items: [
              "Un robot d'exploration découvre la page en suivant un lien.",
              "Le robot télécharge le contenu de la page.",
              "Les mots de la page sont ajoutés à l'index du moteur.",
              "Un internaute tape une requête contenant certains de ces mots.",
              "Le moteur cherche dans l'index les pages qui contiennent les mots de la requête.",
              "Le moteur classe ces pages selon leur pertinence et leur popularité.",
              "La liste ordonnée des résultats s'affiche dans le navigateur.",
            ],
          },
          quiz: [
            { q: "Que fait un robot d'exploration (crawler) ?", options: ["Il classe les résultats", "Il vend des liens sponsorisés aux annonceurs", "Il répond aux requêtes", "Il parcourt le Web en suivant les liens"], answer: 3, why: "Le robot découvre et télécharge les pages de lien en lien ; le classement vient plus tard." },
            { q: "Pourquoi un moteur répond-il en une fraction de seconde ?", options: ["Il consulte un index construit à l'avance", "Il parcourt tout le Web au moment de chaque requête", "Il n'affiche que des pages sponsorisées", "Il ne cherche que dans un seul pays"], answer: 0, why: "L'index est préparé à l'avance ; la requête consiste seulement à le consulter." },
            { q: "Quel est le principe de PageRank ?", options: ["Classer les pages par date", "Classer les pages selon le nombre de mots qu'elles contiennent", "Pondérer les liens reçus par leur importance", "Mettre en tête les pages qui paient"], answer: 2, why: "Un lien est un vote, d'autant plus fort qu'il vient d'une page elle-même importante." },
            { q: "Une image est sous licence CC BY-ND. Que peut-on faire ?", options: ["La modifier sans citer l'auteur", "La vendre comme son œuvre", "La recadrer en citant l'auteur et la source", "La réutiliser intacte en citant l'auteur"], answer: 3, why: "BY impose de citer l'auteur ; ND interdit toute modification, y compris un recadrage." },
            { q: "Combien de temps durent, en général, les droits patrimoniaux d'un auteur en France ?", options: ["20 ans après la publication", "Toute sa vie et 70 ans après sa mort", "Toute sa vie seulement", "Pour toujours, sans aucune limite de durée"], answer: 1, why: "Après ce délai, l'œuvre entre dans le domaine public ; seuls les droits moraux sont perpétuels." },
          ],
          trap: "Croire que le premier résultat est le plus fiable, ou qu'une image trouvée par un moteur de recherche est libre de droits : l'ordre des résultats dépend d'un algorithme, de la publicité et du référencement, et toute œuvre est protégée sauf licence contraire.",
          method: "Pour évaluer un résultat, posez-vous systématiquement trois questions avant de cliquer : qui parle (auteur, organisme) ? quand (date) ? pourquoi (informer, vendre, convaincre) ? Puis recoupez avec une seconde source fiable.",
        },
      ],
    },

    /* ================================================================== */
    /* LES RÉSEAUX SOCIAUX                                                  */
    /* ================================================================== */
    {
      id: 'reseaux-sociaux',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'graphes-sociaux',
          title: 'Modéliser un réseau social par un graphe',
          minutes: 35,
          objectives: [
            "Modéliser un réseau social par un graphe orienté ou non orienté (sommets, arêtes, arcs).",
            "Déterminer la distance entre deux sommets, l'excentricité d'un sommet, ainsi que le diamètre, le rayon et le centre d'un graphe simple.",
            "Expliquer la notion de petit monde à partir de l'expérience de Milgram.",
            "Décrire comment l'information reçue sur un réseau social dépend du choix préalable de ses amis ou abonnements.",
          ],
          course: [
            {
              heading: "Un réseau social vu comme un graphe",
              paragraphs: [
                "Pour étudier un réseau social, on le modélise par un graphe : chaque personne (ou compte) est représentée par un point, appelé sommet, et chaque relation par un trait reliant deux sommets. Deux sommets reliés sont dits voisins, et le nombre de voisins d'un sommet est son degré. Dans un réseau social, un sommet de très grand degré correspond à un compte très connecté, comme celui d'une personnalité.",
                "Le type de relation détermine le type de graphe. Sur un réseau où l'amitié est réciproque (si A est ami avec B, B est ami avec A), on utilise un graphe non orienté : les relations sont des arêtes, de simples traits. Sur un réseau d'abonnements, où l'on peut suivre un compte sans être suivi en retour, on utilise un graphe orienté : les relations sont des arcs, des flèches allant de l'abonné vers le compte suivi. Le nombre de flèches qui arrivent sur un sommet donne alors son nombre d'abonnés.",
                "Un graphe se représente facilement en Python par un dictionnaire qui associe à chaque sommet la liste de ses voisins, par exemple reseau = {'A': ['B', 'C'], 'B': ['A'], 'C': ['A']}. Le degré de A s'obtient alors par len(reseau['A']), qui vaut 2.",
              ],
              box: { label: "Définition", text: "Un graphe est formé de sommets reliés par des arêtes (relations réciproques, graphe non orienté) ou par des arcs (relations à sens unique, graphe orienté). Le degré d'un sommet est son nombre de voisins." },
            },
            {
              heading: "Distance, excentricité, diamètre, rayon, centre",
              paragraphs: [
                "Une chaîne est une suite de sommets dans laquelle deux sommets consécutifs sont reliés par une arête ; sa longueur est son nombre d'arêtes. La distance entre deux sommets est la longueur de la plus courte chaîne qui les relie. Si Léa est amie avec Hugo, lui-même ami avec Inès, mais que Léa et Inès ne sont pas amies, alors la distance entre Léa et Inès vaut 2 : Inès est une « amie d'ami ».",
                "L'excentricité d'un sommet est la plus grande distance entre ce sommet et les autres sommets du graphe : elle mesure à quel point ce sommet est éloigné du sommet le plus lointain. À partir des excentricités, on définit trois caractéristiques du graphe. Le diamètre est la plus grande excentricité, c'est-à-dire la plus grande distance entre deux sommets du graphe. Le rayon est la plus petite excentricité. Le centre est l'ensemble des sommets dont l'excentricité est égale au rayon : ce sont les sommets les mieux placés pour diffuser rapidement une information à tout le réseau.",
                "Pour calculer ces valeurs à la main, on procède sommet par sommet : on cherche les voisins (distance 1), puis les voisins des voisins non encore atteints (distance 2), et ainsi de suite jusqu'à avoir atteint tous les sommets. La dernière distance obtenue est l'excentricité du sommet. On range les résultats dans un tableau, puis on lit le maximum (le diamètre), le minimum (le rayon) et les sommets qui atteignent ce minimum (le centre).",
              ],
              box: { label: "À retenir", text: "Distance : longueur de la plus courte chaîne. Excentricité d'un sommet : sa plus grande distance aux autres. Diamètre : plus grande excentricité. Rayon : plus petite excentricité. Centre : sommets d'excentricité égale au rayon." },
            },
            {
              heading: "Un petit monde",
              paragraphs: [
                "En 1967, le psychologue américain Stanley Milgram a demandé à des personnes vivant dans le centre des États-Unis de faire parvenir une lettre à un destinataire de Boston qu'elles ne connaissaient pas, en la confiant seulement à une connaissance personnelle susceptible de le rapprocher du but, qui faisait de même. Beaucoup de lettres ne sont jamais arrivées, mais celles qui ont atteint leur destinataire étaient passées en moyenne par environ cinq à six intermédiaires. Ce résultat a popularisé l'idée de « six degrés de séparation ».",
                "On parle de petit monde pour un graphe qui compte un très grand nombre de sommets, mais dont les distances restent courtes : quelques étapes suffisent pour relier presque n'importe quelles personnes. Les réseaux sociaux numériques présentent cette propriété, renforcée par quelques comptes de très grand degré qui servent de raccourcis entre des groupes éloignés. Ils sont aussi organisés en communautés, groupes de sommets très reliés entre eux (une classe, un club, des fans d'un même jeu).",
              ],
            },
            {
              heading: "Ce que l'on voit dépend de qui l'on suit",
              paragraphs: [
                "Sur un réseau social, l'information que vous recevez provient des comptes auxquels vous êtes relié : vos amis, vos abonnements, et les contenus qu'ils partagent. Le choix de vos relations conditionne donc ce que vous voyez. Si tous vos contacts partagent les mêmes opinions, les mêmes goûts ou les mêmes sources, votre fil d'actualité vous montrera surtout ce point de vue, et une information peut sembler partagée par « tout le monde » alors qu'elle ne circule que dans votre communauté.",
                "Grâce aux distances courtes du petit monde, une information, vraie ou fausse, peut aussi se propager très vite : chaque partage la transmet à de nouveaux voisins, qui la transmettent à leur tour. C'est l'effet viral. Connaître la structure du graphe aide ainsi à comprendre pourquoi il est utile de diversifier ses sources et de vérifier une information avant de la partager.",
              ],
              box: { label: "Repère", text: "1967 : expérience de Stanley Milgram, environ six intermédiaires en moyenne entre deux personnes. Un graphe « petit monde » a beaucoup de sommets mais un petit diamètre." },
            },
          ],
          keyPoints: [
            "Sommet = personne ou compte ; arête = relation réciproque (graphe non orienté) ; arc = relation à sens unique, comme un abonnement (graphe orienté).",
            "Distance : longueur de la plus courte chaîne entre deux sommets ; excentricité : plus grande distance d'un sommet aux autres.",
            "Diamètre = plus grande excentricité ; rayon = plus petite excentricité ; centre = sommets dont l'excentricité égale le rayon.",
            "Expérience de Milgram (1967) : environ six intermédiaires ; les réseaux sociaux sont des « petits mondes ».",
            "L'information reçue dépend des relations choisies : diversifier ses sources limite l'enfermement dans une communauté.",
          ],
          example: {
            statement: "Un réseau d'amis (relations réciproques) comporte six membres A, B, C, D, E, F et les amitiés suivantes : A-B, A-C, B-C, B-D, C-E, D-E, E-F. Calculer l'excentricité de chaque sommet, puis le diamètre, le rayon et le centre du graphe.",
            solution: [
              "Voisins : A : B, C ; B : A, C, D ; C : A, B, E ; D : B, E ; E : C, D, F ; F : E.",
              "Depuis A : B et C à distance 1, D et E à distance 2, F à distance 3 ; excentricité de A : 3. Depuis B : A, C, D à 1, E à 2, F à 3 ; excentricité 3.",
              "Depuis C : A, B, E à 1, D et F à 2 ; excentricité 2. Depuis D : B, E à 1, A, C, F à 2 ; excentricité 2.",
              "Depuis E : C, D, F à 1, A et B à 2 ; excentricité 2. Depuis F : E à 1, C et D à 2, A et B à 3 ; excentricité 3.",
              "Diamètre : la plus grande excentricité, 3 (par exemple entre A et F). Rayon : la plus petite, 2.",
              "Réponse : diamètre 3, rayon 2, centre formé des sommets C, D et E.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Cinq amis (données fictives) sont reliés ainsi, les relations étant réciproques : Léa-Hugo, Hugo-Inès, Inès-Tom, Tom-Zoé. a) Donner le degré de chaque sommet. b) Quelle est la distance entre Léa et Zoé ? c) Calculer l'excentricité de chaque sommet, puis le diamètre, le rayon et le centre.",
              hint: "Dessinez le graphe : les cinq prénoms sont alignés sur une seule chaîne. Pour chaque sommet, cherchez le sommet le plus éloigné.",
              solution: [
                "a) Léa et Zoé ont un seul voisin : degré 1. Hugo, Inès et Tom ont deux voisins : degré 2.",
                "b) La seule chaîne de Léa à Zoé est Léa-Hugo-Inès-Tom-Zoé, de longueur 4 : la distance vaut 4.",
                "c) Excentricités : Léa 4 (Zoé), Hugo 3 (Zoé), Inès 2 (Léa et Zoé), Tom 3 (Léa), Zoé 4 (Léa).",
                "Diamètre : 4 ; rayon : 2.",
                "Résultat : le centre est Inès, la mieux placée pour faire circuler une information dans ce groupe.",
              ],
            },
            {
              level: 2,
              statement: "Sur un réseau d'abonnements (données fictives), « X → Y » signifie « X suit Y ». Les abonnements sont : Ana → Ben, Ana → Chloé, Ben → Chloé, Chloé → Ana, David → Chloé, Ben → David. a) Pourquoi utiliser un graphe orienté ? b) Donner le nombre d'abonnés et le nombre d'abonnements de chaque compte. c) Quels comptes se suivent mutuellement ? d) Les publications de quels comptes apparaissent dans le fil d'Ana ? Qui voit les publications de Chloé ?",
              hint: "Le nombre d'abonnés d'un compte est le nombre de flèches qui arrivent sur lui ; son nombre d'abonnements est le nombre de flèches qui en partent.",
              solution: [
                "a) Suivre quelqu'un n'implique pas d'être suivi en retour : la relation a un sens, on la représente par des arcs (flèches).",
                "b) Ana : 1 abonné (Chloé) et 2 abonnements (Ben, Chloé). Ben : 1 abonné (Ana) et 2 abonnements (Chloé, David).",
                "Chloé : 3 abonnés (Ana, Ben, David) et 1 abonnement (Ana). David : 1 abonné (Ben) et 1 abonnement (Chloé).",
                "c) Il faut deux flèches en sens inverse : seuls Ana et Chloé se suivent mutuellement (Ana → Chloé et Chloé → Ana).",
                "d) Ana suit Ben et Chloé : leurs publications apparaissent dans son fil. Les publications de Chloé sont vues par ses abonnés : Ana, Ben et David.",
                "Résultat : Chloé est le compte le plus suivi, avec 3 abonnés.",
              ],
            },
            {
              level: 3,
              statement: "Un groupe de sept élèves A, B, C, D, E, F, G est modélisé par un graphe non orienté dont les arêtes sont : A-B, B-C, C-D, D-E, C-F, F-G (données fictives). 1. Calculer l'excentricité de chaque sommet en présentant les résultats dans un tableau. 2. En déduire le diamètre, le rayon et le centre du graphe. 3. Un élève veut lancer une invitation qui doit atteindre tout le groupe en un minimum d'étapes de bouche à oreille : à qui doit-il la confier, et combien d'étapes faut-il au maximum ? 4. L'élève C quitte le groupe. Que devient le graphe ? 5. On revient au graphe initial et l'on ajoute l'arête A-G. Quelle est la nouvelle distance entre A et G ? Le diamètre change-t-il ? Justifier.",
              hint: "C est relié à trois branches : B puis A, D puis E, F puis G. Pour la question 5, cherchez s'il reste deux sommets à distance 4.",
              solution: [
                "1. Excentricités : A 4 (E et G), B 3, C 2, D 3, E 4 (A et G), F 3, G 4 (A et E). Par exemple, depuis C : B, D, F à distance 1, puis A, E, G à distance 2.",
                "2. Diamètre : 4 ; rayon : 2 ; centre : C, seul sommet d'excentricité 2.",
                "3. Il faut confier l'invitation à C, le centre : elle atteint B, D et F en une étape, puis A, E et G en deux étapes. Il faut au maximum 2 étapes, valeur du rayon.",
                "4. Sans C, il ne reste que les arêtes A-B, D-E et F-G : le graphe se coupe en trois groupes isolés, {A, B}, {D, E} et {F, G}, entre lesquels aucune information ne circule. C jouait un rôle de pont.",
                "5. Avec l'arête A-G, la distance entre A et G passe de 4 (A-B-C-F-G) à 1. Mais la distance entre A et E reste 4 : le chemin A-B-C-D-E est toujours le plus court, le détour par G donnant A-G-F-C-D-E, de longueur 5.",
                "De même, la distance entre E et G reste 4 (E-D-C-F-G). Le diamètre ne change donc pas.",
                "Résultat : diamètre 4, rayon 2, centre C ; après l'ajout de A-G, le diamètre reste égal à 4.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les graphes des réseaux sociaux.",
            statements: [
              { text: "Un réseau d'abonnements, où l'on peut suivre sans être suivi, se modélise par un graphe orienté.", true: true, why: "La relation a un sens : on la représente par des arcs, des flèches." },
              { text: "La distance entre deux sommets est le nombre de chaînes qui les relient.", true: false, why: "C'est la longueur de la plus courte chaîne qui les relie, comptée en arêtes." },
              { text: "Le diamètre d'un graphe est la plus grande excentricité de ses sommets.", true: true, why: "C'est aussi la plus grande distance entre deux sommets du graphe." },
              { text: "Le rayon d'un graphe est toujours égal à la moitié du diamètre.", true: false, why: "Le rayon est la plus petite excentricité ; dans l'exemple A à F du cours, le diamètre vaut 3 et le rayon 2." },
              { text: "Le centre d'un graphe peut contenir plusieurs sommets.", true: true, why: "Tous les sommets dont l'excentricité est égale au rayon font partie du centre." },
              { text: "D'après l'expérience de Milgram, toutes les lettres sont arrivées en six étapes exactement.", true: false, why: "Beaucoup de lettres ne sont jamais arrivées ; celles qui sont arrivées comptaient en moyenne cinq à six intermédiaires." },
              { text: "Le degré d'un sommet est son nombre de voisins.", true: true, why: "Dans un réseau social, c'est par exemple le nombre d'amis d'un membre." },
            ],
          },
          quiz: [
            { q: "Dans un graphe social, que représente un sommet ?", options: ["Une relation entre deux membres", "Une distance", "Une personne ou un compte", "Une publication"], answer: 2, why: "Les sommets représentent les membres ; les arêtes ou les arcs représentent leurs relations." },
            { q: "Les sommets d'un graphe ont pour excentricités 3, 2, 4, 2 et 3. Quel est le diamètre ?", options: ["4", "2", "3", "14"], answer: 0, why: "Le diamètre est la plus grande excentricité : 4." },
            { q: "Avec les mêmes excentricités 3, 2, 4, 2 et 3, quel est le rayon ?", options: ["4", "3", "14", "2"], answer: 3, why: "Le rayon est la plus petite excentricité : 2." },
            { q: "Si A est ami avec B et B avec C, mais A n'est pas ami avec C, quelle est la distance entre A et C ?", options: ["1", "2", "3", "0"], answer: 1, why: "La plus courte chaîne est A-B-C, de longueur 2." },
            { q: "Que suggère l'expérience de Milgram (1967) ?", options: ["Toutes les lettres arrivent toujours à destination", "Les réseaux sont des arbres", "Peu d'intermédiaires relient deux personnes", "Chacun connaît tout le monde"], answer: 2, why: "Les chaînes abouties comptaient en moyenne cinq à six intermédiaires : c'est l'effet petit monde." },
          ],
          trap: "Confondre le diamètre et le rayon, ou calculer une distance en prenant une chaîne qui n'est pas la plus courte : la distance est toujours la longueur minimale, et le rayon est la plus petite excentricité, pas la moitié du diamètre.",
          method: "Pour un graphe, construisez systématiquement un tableau : une ligne par sommet, avec les sommets atteints à distance 1, 2, 3... jusqu'à les avoir tous. La dernière distance de chaque ligne est l'excentricité ; lisez ensuite le maximum, le minimum et les sommets du centre.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'modele-economique',
          title: 'Le modèle économique des réseaux sociaux',
          minutes: 30,
          objectives: [
            "Distinguer plusieurs réseaux sociaux selon leurs caractéristiques, y compris un aperçu historique de leur modèle économique.",
            "Identifier les sources de revenus des entreprises de réseautage social, en particulier la publicité ciblée.",
            "Expliquer le rôle des données personnelles et des algorithmes de recommandation dans l'économie de l'attention.",
            "Paramétrer des abonnements et des réglages de confidentialité pour protéger ses données.",
          ],
          course: [
            {
              heading: "Quelques repères historiques",
              paragraphs: [
                "Les réseaux sociaux en ligne sont apparus avec le Web grand public. Classmates, lancé en 1995 aux États-Unis, permettait de retrouver d'anciens camarades de classe ; SixDegrees, en 1997, permettait déjà de créer un profil et une liste d'amis. Suivent LinkedIn (2003), réseau professionnel, puis Facebook (2004), créé par Mark Zuckerberg et des étudiants de Harvard, ouvert à tous en 2006. YouTube (2005) se consacre au partage de vidéos, Twitter (2006, renommé X en 2023) aux messages courts, Instagram (2010, racheté par Facebook en 2012) à la photo, Snapchat (2011) aux messages éphémères, TikTok (diffusé hors de Chine à partir de 2017) aux vidéos courtes.",
                "Ces réseaux se distinguent par le type de contenu (texte, photo, vidéo), le public visé (grand public, professionnels, adolescents), le type de relation (amitié réciproque ou abonnement à sens unique), et par leur modèle économique. La plupart ont d'abord cherché à attirer le plus grand nombre possible d'utilisateurs gratuitement, avant de développer des revenus, essentiellement publicitaires.",
              ],
              box: { label: "Repère", text: "1995 : Classmates. 2003 : LinkedIn. 2004 : Facebook. 2005 : YouTube. 2006 : Twitter (X depuis 2023). 2010 : Instagram. 2011 : Snapchat. 2017 : TikTok hors de Chine." },
            },
            {
              heading: "Gratuit pour l'utilisateur, payé par l'annonceur",
              paragraphs: [
                "L'inscription sur les grands réseaux sociaux est gratuite : ce sont les annonceurs qui paient. Le réseau leur vend la possibilité d'afficher des publicités auprès de ses utilisateurs, et surtout de choisir précisément qui les verra : c'est la publicité ciblée. Grâce aux données qu'il collecte (âge, localisation, centres d'intérêt, contenus aimés, comptes suivis, temps passé sur chaque publication), le réseau peut montrer une publicité pour des chaussures de course aux personnes qui s'intéressent au sport dans une ville donnée.",
                "La publicité se vend souvent au coût pour mille affichages (CPM : l'annonceur paie un prix pour chaque millier d'affichages) ou au coût par clic (CPC : il paie seulement quand un utilisateur clique). Une formule souvent citée résume ce modèle : « si c'est gratuit, c'est vous le produit ». Plus exactement, c'est l'attention des utilisateurs et la connaissance fine de leurs profils qui sont vendues aux annonceurs.",
                "D'autres sources de revenus complètent la publicité : des abonnements payants offrant des fonctions supplémentaires (modèle dit freemium : gratuit pour l'essentiel, payant pour les options), la vente de biens virtuels ou de cadeaux envoyés aux créateurs, des commissions sur les achats réalisés dans l'application, ou des services vendus aux entreprises, comme les offres de recrutement d'un réseau professionnel.",
              ],
              box: { label: "Définition", text: "Publicité ciblée : publicité montrée à des utilisateurs choisis selon leur profil (âge, lieu, centres d'intérêt, comportement), déduit des données collectées. CPM : prix payé pour 1000 affichages. CPC : prix payé par clic." },
            },
            {
              heading: "L'économie de l'attention",
              paragraphs: [
                "Puisque les revenus dépendent du nombre de publicités vues, un réseau social a intérêt à ce que ses utilisateurs restent connectés le plus longtemps possible et reviennent souvent. On parle d'économie de l'attention. Plusieurs mécanismes y contribuent : le défilement infini, qui ne propose jamais de fin au fil d'actualité ; les notifications, qui incitent à revenir ; la lecture automatique de la vidéo suivante ; les compteurs de mentions « j'aime ».",
                "Le fil d'actualité n'est pas chronologique : un algorithme de recommandation choisit les contenus à montrer à chacun en fonction de ce qui a le plus de chances de retenir son attention, d'après son comportement passé. Il peut en résulter une bulle de filtres : l'utilisateur voit surtout des contenus proches de ce qu'il aime déjà, ce qui réduit la diversité des points de vue. Les contenus qui suscitent des réactions fortes (indignation, peur, émotion) sont souvent les plus mis en avant, car ils retiennent davantage l'attention.",
              ],
            },
            {
              heading: "Données personnelles, règles et réglages",
              paragraphs: [
                "En Europe, le règlement général sur la protection des données (RGPD), applicable depuis le 25 mai 2018, encadre la collecte des données personnelles : elle doit avoir un but précis et, pour la publicité ciblée, reposer sur le consentement de l'utilisateur. Chacun dispose de droits : accéder à ses données, les faire rectifier, les faire effacer, les récupérer. En France, un mineur peut consentir seul au traitement de ses données par un réseau social à partir de 15 ans ; avant cet âge, l'accord d'un parent est aussi nécessaire. La CNIL veille au respect de ces règles. Le règlement européen sur les services numériques (DSA) interdit en outre aux plateformes la publicité ciblée fondée sur le profilage des mineurs.",
                "Chaque utilisateur peut agir sur ses réglages : rendre son compte privé, choisir qui peut voir ses publications, le contacter ou l'identifier sur une photo ; désactiver la personnalisation publicitaire et le partage de la localisation ; trier ses abonnements pour diversifier ses sources ; consulter et télécharger les données que le réseau détient sur lui.",
              ],
              box: { label: "À retenir", text: "Le réseau est gratuit parce que l'attention et les données des utilisateurs sont vendues aux annonceurs. Le RGPD donne des droits sur ses données ; les réglages de confidentialité permettent d'en limiter la collecte et la diffusion." },
            },
          ],
          keyPoints: [
            "Repères : Classmates (1995), LinkedIn (2003), Facebook (2004), YouTube (2005), Twitter (2006), Instagram (2010), TikTok (2017 hors de Chine).",
            "La principale source de revenus est la publicité ciblée, vendue au CPM (pour 1000 affichages) ou au CPC (par clic).",
            "Autres revenus : abonnements (freemium), biens virtuels, commissions, services aux entreprises.",
            "Économie de l'attention : défilement infini, notifications et algorithmes de recommandation retiennent l'utilisateur ; risque de bulle de filtres.",
            "RGPD (2018) : consentement et droits sur ses données ; en France, consentement seul possible à partir de 15 ans.",
          ],
          example: {
            statement: "Données fictives : un réseau social compte 3 millions d'utilisateurs actifs ; chacun voit en moyenne 40 publicités par jour ; les annonceurs paient 2 € pour 1000 affichages (CPM). Calculer le revenu publicitaire quotidien, puis annuel (365 jours), et le revenu annuel moyen par utilisateur.",
            solution: [
              "Nombre d'affichages par jour : 3 000 000 × 40 = 120 000 000 affichages.",
              "Nombre de milliers d'affichages : 120 000 000 ÷ 1000 = 120 000.",
              "Revenu quotidien : 120 000 × 2 € = 240 000 €.",
              "Revenu annuel : 240 000 € × 365 = 87 600 000 €.",
              "Revenu annuel moyen par utilisateur : 87 600 000 € ÷ 3 000 000 = 29,20 €.",
              "Réponse : 240 000 € par jour, 87,6 millions d'euros par an, soit 29,20 € par utilisateur et par an ; chaque utilisateur « rapporte » sans rien payer.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des situations suivantes (réseaux fictifs), nommer la source de revenus utilisée : a) une marque de sport paie pour que sa publicité soit montrée aux 15-25 ans d'une région qui suivent des comptes de football ; b) les utilisateurs paient 5 € par mois pour supprimer les publicités et obtenir des fonctions supplémentaires ; c) les spectateurs achètent des cadeaux virtuels qu'ils envoient à un créateur pendant une vidéo en direct ; d) le réseau prélève un pourcentage sur chaque achat effectué dans sa boutique intégrée ; e) des entreprises paient pour publier des offres d'emploi et rechercher des candidats.",
              hint: "Les principales sources sont : publicité ciblée, abonnement (freemium), biens virtuels, commissions, services aux entreprises.",
              solution: [
                "a) Publicité ciblée : l'annonceur choisit le public selon l'âge, le lieu et les centres d'intérêt.",
                "b) Abonnement payant, dans un modèle freemium : l'essentiel reste gratuit, les options sont payantes.",
                "c) Vente de biens virtuels.",
                "d) Commission sur les ventes.",
                "e) Services vendus aux entreprises (recrutement).",
              ],
            },
            {
              level: 2,
              statement: "Une association veut promouvoir un concert sur un réseau social (données fictives). Offre 1 : 3 € pour 1000 affichages (CPM), pour 500 000 affichages. Offre 2 : 0,50 € par clic (CPC). On estime que 0,8 % des personnes qui voient la publicité cliquent. a) Calculer le coût de l'offre 1. b) Calculer le nombre de clics attendus et le coût de l'offre 2 pour les mêmes 500 000 affichages. c) Quelle offre est la moins chère ? d) Même question si le taux de clic n'est que de 0,5 %.",
              hint: "Pour le CPM, divisez le nombre d'affichages par 1000 ; pour le CPC, calculez d'abord le nombre de clics, soit 0,8 % de 500 000.",
              solution: [
                "a) 500 000 ÷ 1000 = 500 milliers d'affichages ; coût : 500 × 3 € = 1500 €.",
                "b) Nombre de clics : 500 000 × 0,8 ÷ 100 = 4000 clics ; coût : 4000 × 0,50 € = 2000 €.",
                "c) Avec un taux de clic de 0,8 %, l'offre 1 (1500 €) est moins chère que l'offre 2 (2000 €).",
                "d) Avec 0,5 % : 500 000 × 0,5 ÷ 100 = 2500 clics, soit 2500 × 0,50 € = 1250 € ; l'offre 2 devient la moins chère.",
                "Résultat : le meilleur choix dépend du taux de clic ; d'où l'intérêt, pour le réseau comme pour l'annonceur, d'un ciblage précis qui augmente ce taux.",
              ],
            },
            {
              level: 3,
              statement: "Un lycéen passe en moyenne 2 h 30 par jour sur une application de vidéos courtes. Il fait défiler une vidéo toutes les 10 secondes en moyenne, et une vidéo sur 5 est une publicité ; l'application vend ces affichages 4 € pour 1000 (CPM) (données fictives). 1. Combien de vidéos voit-il par jour ? Combien de publicités ? 2. Quelle somme ces affichages rapportent-ils à l'application par jour, puis sur une année de 365 jours ? 3. Expliquer pourquoi l'application a intérêt à ce qu'il reste connecté le plus longtemps possible, et citer deux mécanismes utilisés dans ce but. 4. Expliquer comment l'algorithme de recommandation peut créer une bulle de filtres. 5. Proposer trois réglages ou habitudes qui permettent de reprendre la main.",
              hint: "Convertissez 2 h 30 en secondes ; le revenu se calcule par milliers d'affichages.",
              solution: [
                "1. 2 h 30 = 2,5 × 3600 = 9000 s ; 9000 ÷ 10 = 900 vidéos par jour, dont 900 ÷ 5 = 180 publicités.",
                "2. Revenu quotidien : 180 ÷ 1000 × 4 € = 0,72 € ; sur un an : 0,72 € × 365 = 262,80 €.",
                "3. Le revenu est proportionnel au nombre de publicités vues, donc au temps passé : c'est l'économie de l'attention. Mécanismes : défilement infini, lecture automatique, notifications, recommandations personnalisées.",
                "4. L'algorithme propose surtout des vidéos proches de celles qui ont retenu l'attention ; l'utilisateur voit de plus en plus le même type de contenus et de points de vue, et de moins en moins les autres.",
                "5. Par exemple : désactiver la personnalisation publicitaire et les notifications non essentielles ; fixer une limite de temps d'écran ; s'abonner volontairement à des sources variées et fiables ; consulter les données collectées et en demander l'effacement.",
                "Résultat : 900 vidéos et 180 publicités par jour, soit 0,72 € par jour et 262,80 € par an pour l'application, dans ce modèle fictif.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition.",
            pairs: [
              { left: "Publicité ciblée", right: "Publicité montrée selon le profil et le comportement de l'utilisateur" },
              { left: "CPM", right: "Prix payé par l'annonceur pour 1000 affichages" },
              { left: "Freemium", right: "Service gratuit pour l'essentiel, payant pour les options" },
              { left: "Algorithme de recommandation", right: "Programme qui choisit les contenus montrés à chacun" },
              { left: "Bulle de filtres", right: "Enfermement dans des contenus proches de ses goûts" },
              { left: "RGPD", right: "Règlement européen qui protège les données personnelles" },
            ],
          },
          quiz: [
            { q: "Quelle est la principale source de revenus des grands réseaux sociaux gratuits ?", options: ["La publicité ciblée", "Les dons des utilisateurs", "Les subventions publiques", "La vente des téléphones"], answer: 0, why: "Les annonceurs paient pour montrer des publicités à des publics choisis grâce aux données collectées." },
            { q: "Que signifie un CPM de 5 € ?", options: ["5 € par clic", "5 € par mois et par utilisateur", "5 € par minute de vidéo", "5 € pour 1000 affichages"], answer: 3, why: "CPM signifie coût pour mille affichages." },
            { q: "En quelle année Facebook a-t-il été créé ?", options: ["1995", "2004", "2010", "2017"], answer: 1, why: "Facebook a été créé en 2004 par Mark Zuckerberg et des étudiants de Harvard." },
            { q: "Qu'est-ce qu'une bulle de filtres ?", options: ["Un filtre qui embellit automatiquement les photos", "Une protection contre les virus", "Un enfermement dans des contenus semblables", "Un réglage de confidentialité"], answer: 2, why: "L'algorithme montre surtout des contenus proches de ce que l'on aime déjà, ce qui réduit la diversité des points de vue." },
            { q: "En France, à partir de quel âge peut-on consentir seul au traitement de ses données par un réseau social ?", options: ["15 ans", "13 ans", "16 ans", "18 ans"], answer: 0, why: "La loi française a fixé cet âge à 15 ans ; avant, l'accord d'un parent est également requis." },
          ],
          trap: "Croire qu'un réseau social gratuit ne gagne pas d'argent sur ses utilisateurs, ou qu'il « vend simplement des données » : il vend surtout l'attention des utilisateurs et la possibilité de les cibler précisément, grâce aux données qu'il collecte.",
          method: "Face à un réseau social, posez trois questions : qui paie (l'utilisateur, l'annonceur, une entreprise) ? Qu'est-ce qui est vendu (attention, données, options) ? Quels mécanismes me retiennent ? Pour un calcul de revenu, raisonnez toujours en milliers d'affichages pour le CPM.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'identite-numerique',
          title: 'Identité numérique, e-réputation et cyberharcèlement',
          minutes: 35,
          objectives: [
            "Définir l'identité numérique et l'e-réputation, et identifier les traces laissées en ligne.",
            "Distinguer identification et authentification, et choisir un mot de passe robuste.",
            "Connaître les différentes formes de cyberviolence et les dispositions de l'article 222-33-2-2 du code pénal.",
            "Connaître les ressources disponibles pour lutter contre la cyberviolence et réagir de façon adaptée.",
          ],
          course: [
            {
              heading: "Identité numérique et traces",
              paragraphs: [
                "Votre identité numérique est l'ensemble des informations qui vous concernent sur Internet et que l'on peut relier à vous. Elle est formée de traces de plusieurs sortes. Les traces volontaires sont celles que vous publiez vous-même : profil, photos, commentaires, mentions « j'aime ». Les traces involontaires sont enregistrées à votre insu ou sans que vous y pensiez : historique de navigation, cookies, localisation de votre téléphone, métadonnées d'une photo. Les traces héritées sont publiées par d'autres : une photo où vous êtes identifié, un commentaire qui vous mentionne.",
                "Ces traces sont durables. Une publication supprimée peut avoir été copiée, partagée ou capturée à l'écran ; elle peut rester en mémoire chez d'autres utilisateurs ou dans des archives. L'image que ces traces donnent de vous s'appelle l'e-réputation. Elle peut compter : des recruteurs, des écoles ou des employeurs consultent parfois ce qu'ils trouvent en ligne au nom d'un candidat.",
                "La loi offre des moyens d'agir. Le RGPD donne un droit à l'effacement : vous pouvez demander à un site de supprimer des données vous concernant, en particulier celles publiées lorsque vous étiez mineur. Vous pouvez aussi demander à un moteur de recherche de déréférencer une page, c'est-à-dire de ne plus l'afficher dans les résultats d'une recherche sur votre nom. En cas de refus, on peut saisir la CNIL.",
              ],
              box: { label: "Définition", text: "Identité numérique : ensemble des traces associées à une personne sur Internet (volontaires, involontaires, héritées). E-réputation : image de cette personne que renvoient ces traces." },
            },
            {
              heading: "S'identifier et s'authentifier",
              paragraphs: [
                "Pour accéder à un compte, deux étapes se succèdent. L'identification consiste à dire qui l'on est, en donnant un identifiant (un pseudonyme, une adresse électronique). L'authentification consiste à prouver que l'on est bien cette personne. On utilise pour cela un ou plusieurs facteurs : quelque chose que l'on sait (un mot de passe, un code), quelque chose que l'on possède (un téléphone qui reçoit un code, une clé physique), quelque chose que l'on est (une empreinte digitale, le visage).",
                "Un mot de passe robuste est long et imprévisible : au moins 12 caractères mêlant majuscules, minuscules, chiffres et caractères spéciaux, ou une phrase de passe plus longue formée de plusieurs mots sans lien entre eux. Il ne contient ni prénom, ni date de naissance, ni mot du dictionnaire seul. Il doit surtout être unique : si un site se fait voler ses mots de passe, les pirates les essaient sur d'autres services. Un gestionnaire de mots de passe aide à retenir des mots de passe tous différents. L'authentification à deux facteurs, qui demande en plus un code reçu sur le téléphone, protège le compte même si le mot de passe a été dérobé.",
              ],
              box: { label: "Règle", text: "Identification : dire qui l'on est (identifiant). Authentification : le prouver (mot de passe, code, empreinte). Un mot de passe par site, long et imprévisible, et l'authentification à deux facteurs dès qu'elle est proposée." },
            },
            {
              heading: "Les formes de cyberviolence",
              paragraphs: [
                "La cyberviolence désigne les violences commises au moyen des outils numériques : messages insultants ou menaçants, rumeurs, moqueries, exclusion volontaire d'un groupe de discussion, usurpation d'identité (créer un faux compte au nom de quelqu'un), diffusion de photos ou de vidéos humiliantes, diffusion d'images intimes sans le consentement de la personne, propos discriminatoires (racistes, sexistes, homophobes...). Lorsqu'elle est répétée, elle devient du cyberharcèlement.",
                "Le cyberharcèlement a des caractéristiques propres : il peut se poursuivre jour et nuit, jusque dans la chambre de la victime ; les auteurs se croient protégés par l'écran ou par un pseudonyme ; les contenus se diffusent très vite à un large public et sont difficiles à effacer. Les témoins jouent un rôle décisif : aimer, partager ou commenter un contenu humiliant revient à participer au harcèlement, alors que refuser de relayer et soutenir la victime aide à l'arrêter.",
              ],
            },
            {
              heading: "Ce que dit la loi",
              paragraphs: [
                "L'article 222-33-2-2 du code pénal punit le harcèlement moral : le fait de harceler une personne par des propos ou des comportements répétés ayant pour objet ou pour effet une dégradation de ses conditions de vie, se traduisant par une altération de sa santé physique ou mentale. Il est puni d'un an d'emprisonnement et de 15 000 € d'amende, peines portées à deux ans et 30 000 € notamment lorsque la victime a moins de 15 ans ou que les faits sont commis au moyen d'un service de communication en ligne, et à trois ans et 45 000 € lorsque deux de ces circonstances sont réunies.",
                "L'article précise aussi que l'infraction est constituée lorsque des propos ou comportements sont imposés à une même victime par plusieurs personnes, de manière concertée ou en sachant qu'ils s'ajoutent les uns aux autres, même si chacune n'a agi qu'une seule fois : c'est le cas d'un « raid » numérique. D'autres textes complètent ce dispositif : le harcèlement scolaire est un délit spécifique depuis une loi de 2022, et l'usurpation d'identité numérique (article 226-4-1) comme la diffusion d'images intimes sans consentement (article 226-2-1) sont également punies.",
              ],
              box: { label: "À retenir", text: "Article 222-33-2-2 : harcèlement moral par des propos ou comportements répétés dégradant les conditions de vie. Circonstances aggravantes : victime de moins de 15 ans, usage d'un service en ligne. Un message unique peut suffire s'il s'inscrit dans un raid de plusieurs personnes." },
            },
            {
              heading: "Réagir et se faire aider",
              paragraphs: [
                "Face à une cyberviolence, que l'on soit victime ou témoin, quelques réflexes s'imposent. Ne pas répondre aux provocations, mais conserver les preuves : captures d'écran montrant les messages, les pseudonymes, la date et l'adresse de la page. Bloquer l'auteur et signaler les contenus à la plateforme, qui doit agir. Surtout, en parler à un adulte de confiance : parent, professeur, conseiller principal d'éducation, infirmier scolaire.",
                "Le 3018 est le numéro national, gratuit, anonyme et confidentiel, destiné aux jeunes victimes de harcèlement et de violences numériques, ainsi qu'à leurs parents et aux témoins ; il est aussi joignable par tchat et par une application, et peut aider à faire supprimer des contenus. La plateforme officielle Pharos permet de signaler des contenus illicites en ligne. Enfin, la victime peut porter plainte auprès de la police ou de la gendarmerie ; en cas de danger immédiat, on appelle le 17.",
              ],
            },
          ],
          keyPoints: [
            "Identité numérique : traces volontaires, involontaires et héritées ; elles sont durables et forment l'e-réputation.",
            "RGPD : droit à l'effacement des données et possibilité de demander un déréférencement ; recours possible auprès de la CNIL.",
            "Identification = dire qui l'on est ; authentification = le prouver. Mot de passe long, unique, et authentification à deux facteurs.",
            "Article 222-33-2-2 du code pénal : harcèlement moral par propos ou comportements répétés ; peines aggravées en ligne ou si la victime a moins de 15 ans.",
            "Réagir : ne pas répondre, garder des preuves, bloquer et signaler, en parler à un adulte, appeler le 3018, porter plainte.",
          ],
          example: {
            statement: "Classer les traces suivantes en traces volontaires, involontaires ou héritées : a) la photo de profil choisie par Nora ; b) la position GPS enregistrée par son téléphone lors d'une sortie ; c) une vidéo d'anniversaire publiée par une amie, où Nora est identifiée ; d) un commentaire de Nora sous une vidéo ; e) les cookies déposés sur son navigateur par un site de vente. Puis expliquer en quoi la trace c) peut poser problème.",
            solution: [
              "Traces volontaires, publiées par Nora elle-même : a) sa photo de profil et d) son commentaire.",
              "Traces involontaires, enregistrées sans action consciente de sa part : b) la position GPS et e) les cookies.",
              "Trace héritée, publiée par une autre personne : c) la vidéo de son amie.",
              "La trace c) échappe au contrôle de Nora : elle n'a pas choisi de la publier, la vidéo peut être vue par un public qu'elle ne connaît pas et participer à son e-réputation.",
              "Réponse : volontaires a et d ; involontaires b et e ; héritée c. Nora peut demander à son amie de retirer l'identification, et la loi lui permet de demander le retrait d'une image publiée sans son accord.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des situations suivantes, dire s'il s'agit d'une identification ou d'une authentification : a) saisir son adresse électronique sur la page de connexion de l'ENT ; b) saisir son mot de passe ; c) recopier un code à six chiffres reçu par SMS ; d) poser son doigt sur le capteur d'empreinte du téléphone ; e) choisir un pseudonyme pour se présenter sur un forum.",
              hint: "Dire qui l'on est relève de l'identification ; prouver que l'on est bien cette personne relève de l'authentification.",
              solution: [
                "a) Identification : l'adresse électronique indique quel compte on veut utiliser.",
                "b) Authentification par quelque chose que l'on sait.",
                "c) Authentification par quelque chose que l'on possède (le téléphone) ; associée au mot de passe, c'est une authentification à deux facteurs.",
                "d) Authentification par quelque chose que l'on est (l'empreinte).",
                "e) Identification : le pseudonyme dit sous quel nom on se présente, sans rien prouver.",
              ],
            },
            {
              level: 2,
              statement: "Un logiciel pirate essaie 10 milliards (10¹⁰) de mots de passe par seconde (données fictives). On compare trois mots de passe : un code de 4 chiffres ; 8 lettres minuscules ; 12 caractères choisis parmi 70 symboles (majuscules, minuscules, chiffres et caractères spéciaux). a) Calculer le nombre de combinaisons possibles dans chaque cas. b) Estimer le temps nécessaire pour toutes les essayer. c) Conclure.",
              hint: "Avec n choix possibles pour chacun des k caractères, il y a nᵏ combinaisons. Une année compte environ 3,16 × 10⁷ secondes.",
              solution: [
                "a) Code de 4 chiffres : 10⁴ = 10 000 combinaisons. 8 minuscules : 26⁸ = 208 827 064 576, soit environ 2,1 × 10¹¹. 12 caractères parmi 70 : 70¹², soit environ 1,4 × 10²².",
                "b) Code : 10 000 ÷ 10¹⁰ = 0,000 001 s, soit un millionième de seconde.",
                "8 minuscules : 2,1 × 10¹¹ ÷ 10¹⁰ ≈ 21 secondes.",
                "12 caractères : 1,4 × 10²² ÷ 10¹⁰ = 1,4 × 10¹² s, et 1,4 × 10¹² ÷ 3,16 × 10⁷ ≈ 44 000 ans.",
                "c) La longueur et la variété des caractères augmentent énormément le nombre de combinaisons : un mot de passe de 12 caractères variés résiste à une attaque systématique, contrairement à un mot court.",
                "Résultat : environ un millionième de seconde, 21 secondes et 44 000 ans ; à condition aussi que le mot de passe ne soit pas un mot du dictionnaire et qu'il soit unique.",
              ],
            },
            {
              level: 3,
              statement: "Situation fictive : Sami, 14 ans, découvre qu'un groupe de discussion de sa classe publie depuis trois semaines des montages photo qui se moquent de lui. Une dizaine d'élèves y ont participé : certains ont posté plusieurs messages, d'autres un seul commentaire. Depuis, Sami dort mal et ne veut plus aller au lycée. 1. Ces faits relèvent-ils du harcèlement moral au sens de l'article 222-33-2-2 du code pénal ? Justifier à l'aide des éléments de l'article. 2. Les élèves qui n'ont écrit qu'un seul commentaire peuvent-ils être concernés ? 3. Quelles circonstances aggravantes peut-on relever ? 4. Indiquer, dans l'ordre, ce que Sami peut faire. 5. Quel rôle peut jouer un élève témoin de la conversation ?",
              hint: "Reprenez les éléments de la définition : propos répétés, dégradation des conditions de vie, altération de la santé. Pensez au cas où plusieurs personnes agissent ensemble, puis à l'âge de la victime et au moyen utilisé.",
              solution: [
                "1. Oui : les moqueries sont des propos répétés depuis trois semaines ; elles dégradent les conditions de vie de Sami et altèrent sa santé (troubles du sommeil, refus d'aller en cours). Ce sont les éléments du harcèlement moral.",
                "2. Oui : l'article prévoit que l'infraction est constituée quand des propos sont imposés à une même victime par plusieurs personnes, de manière concertée ou en sachant qu'ils s'ajoutent les uns aux autres, même si chacune n'a agi qu'une fois.",
                "3. Sami a moins de 15 ans et les faits sont commis au moyen d'un service de communication en ligne : deux circonstances aggravantes, ce qui porte la peine maximale à trois ans d'emprisonnement et 45 000 € d'amende. Le harcèlement entre élèves relève aussi du délit de harcèlement scolaire.",
                "4. Ne pas répondre ; faire des captures d'écran datées des messages et des pseudonymes ; quitter le groupe ou bloquer les auteurs et signaler les contenus ; en parler à ses parents et au CPE ; appeler le 3018 pour être conseillé et faire supprimer les contenus ; porter plainte avec ses parents.",
                "5. Le témoin ne doit ni aimer, ni partager, ni commenter les montages ; il peut soutenir Sami, conserver des preuves et alerter un adulte ou le 3018. Se taire laisse le harcèlement continuer.",
                "Résultat : il s'agit de harcèlement moral aggravé, dont chaque participant peut être tenu responsable ; Sami doit garder des preuves, se faire aider et peut porter plainte.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : identité numérique et cyberharcèlement.",
            statements: [
              { text: "Une publication supprimée disparaît définitivement d'Internet.", true: false, why: "Elle a pu être copiée, partagée ou capturée à l'écran avant sa suppression." },
              { text: "Une photo de vous publiée par un ami fait partie de votre identité numérique.", true: true, why: "C'est une trace héritée : elle vous concerne, même si vous ne l'avez pas publiée." },
              { text: "Saisir son identifiant suffit à prouver son identité.", true: false, why: "L'identifiant sert à s'identifier ; la preuve, l'authentification, demande un mot de passe, un code ou une empreinte." },
              { text: "Utiliser le même mot de passe sur tous ses comptes est risqué.", true: true, why: "Si un site se fait voler ses mots de passe, les pirates les essaient sur tous les autres services." },
              { text: "Un élève qui n'a écrit qu'un seul message moqueur dans un raid ne risque rien.", true: false, why: "La loi vise aussi les propos imposés par plusieurs personnes de manière concertée, même si chacune n'a agi qu'une fois." },
              { text: "Le 3018 est un numéro gratuit pour les jeunes victimes de cyberharcèlement.", true: true, why: "Il est gratuit, anonyme et confidentiel, et peut aider à faire supprimer des contenus." },
              { text: "Partager une vidéo humiliante sans l'avoir tournée, ce n'est pas participer au harcèlement.", true: false, why: "Relayer un contenu humiliant augmente sa diffusion et participe au harcèlement." },
            ],
          },
          quiz: [
            { q: "Quel exemple est une trace involontaire ?", options: ["Un commentaire publié", "Une photo de profil", "Une publication partagée avec ses amis", "L'historique de navigation"], answer: 3, why: "L'historique est enregistré sans action consciente de l'utilisateur, contrairement aux publications." },
            { q: "Quelle est la différence entre identification et authentification ?", options: ["Aucune, ce sont des synonymes", "S'identifier, c'est dire qui l'on est ; s'authentifier, le prouver", "L'authentification se fait toujours avant l'identification, sur tous les sites", "L'identification utilise une empreinte digitale"], answer: 1, why: "On donne d'abord un identifiant, puis on prouve son identité par un mot de passe, un code ou une empreinte." },
            { q: "Quel mot de passe est le plus robuste ?", options: ["Tr4in!Nuage-Piano7", "lea2009", "motdepasse", "123456"], answer: 0, why: "Il est long et mêle majuscules, minuscules, chiffres et caractères spéciaux, sans information personnelle." },
            { q: "Quel article du code pénal punit le harcèlement moral, y compris en ligne ?", options: ["L'article 1er de la Constitution", "L'article 9 du code civil", "L'article 222-33-2-2", "L'article 17 du RGPD"], answer: 2, why: "L'article 222-33-2-2 du code pénal définit et punit le harcèlement moral, avec des peines aggravées en ligne." },
            { q: "Quel numéro gratuit peut appeler une jeune victime de cyberharcèlement ?", options: ["Le 15", "Le 112", "Le 18", "Le 3018"], answer: 3, why: "Le 3018 est le numéro national, gratuit et confidentiel, contre le harcèlement et les violences numériques." },
          ],
          trap: "Penser qu'un contenu supprimé a disparu, ou qu'un seul message dans un raid de moqueries « ne compte pas » : les traces numériques sont durables, et la loi punit aussi la participation ponctuelle à un harcèlement collectif.",
          method: "Avant de publier, appliquez le test du panneau d'affichage : accepteriez-vous que ce contenu soit affiché devant le lycée, sous votre nom, pendant des années ? Face à une cyberviolence, retenez la séquence : preuves, blocage et signalement, adulte de confiance, 3018.",
        },
      ],
    },
  ],
}
