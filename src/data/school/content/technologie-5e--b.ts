import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'technologie-5e',
  chapters: [
    /* ==================================================================== */
    /* RÉSEAUX, DONNÉES ET SÉCURITÉ                                           */
    /* ==================================================================== */
    {
      id: 'reseaux-donnees',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'reseau-informatique',
          title: 'Comment les objets communiquent en réseau',
          minutes: 30,
          objectives: [
            "Identifier les éléments d'un réseau informatique domestique ou du collège.",
            "Distinguer une liaison filaire d'une liaison sans fil et citer des exemples de chacune.",
            "Décrire le rôle de la box, du commutateur, du routeur, du client et du serveur.",
            "Expliquer simplement comment une information voyage en paquets jusqu'à son destinataire.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un réseau informatique ?",
              paragraphs: [
                "Un réseau informatique est un ensemble d'appareils reliés entre eux pour échanger des informations, que l'on appelle des données. À la maison, l'ordinateur, la tablette, les smartphones, la console de jeux, l'imprimante et parfois une enceinte ou une ampoule connectée forment un petit réseau. Au collège, les ordinateurs des salles, les imprimantes et le serveur de l'établissement forment un autre réseau.",
                "Un réseau qui relie les appareils d'un même lieu (une maison, un collège, une entreprise) s'appelle un réseau local. Internet, lui, est un immense réseau mondial qui relie entre eux des millions de réseaux locaux : on dit que c'est un « réseau de réseaux ».",
                "Un objet connecté est un objet du quotidien capable d'envoyer ou de recevoir des données par un réseau : une montre connectée qui envoie le nombre de pas au téléphone, un thermostat que l'on règle à distance, une sonnette qui filme le visiteur et prévient le smartphone.",
              ],
              box: { label: "Définition", text: "Réseau informatique : ensemble d'appareils reliés entre eux pour échanger des données. Réseau local : réseau d'un même lieu. Internet : réseau mondial qui relie des millions de réseaux." },
            },
            {
              heading: "Les liaisons : avec ou sans fil",
              paragraphs: [
                "Pour communiquer, les appareils doivent être reliés. Une liaison filaire utilise un câble : le câble Ethernet (des fils de cuivre) relie par exemple un ordinateur fixe à la box, et la fibre optique transporte les données sous forme de lumière, sur de très longues distances et très rapidement.",
                "Une liaison sans fil utilise des ondes radio, invisibles. Le Wi-Fi relie les appareils à la box dans la maison ou au collège ; le Bluetooth relie deux appareils très proches, comme un téléphone et un casque ; le réseau mobile (4G, 5G) permet au smartphone de se connecter à Internet hors de chez soi, grâce aux antennes relais.",
                "Chaque type de liaison a ses avantages. Le câble est en général plus stable et plus rapide, mais il empêche de se déplacer. Le sans fil laisse libre de ses mouvements, mais sa portée est limitée et le signal faiblit avec la distance et à travers les murs épais.",
              ],
              box: { label: "À retenir", text: "Liaisons filaires : câble Ethernet, fibre optique. Liaisons sans fil : Wi-Fi, Bluetooth, réseau mobile 4G ou 5G. Le câble est plus stable, le sans fil plus pratique pour bouger." },
            },
            {
              heading: "Les équipements du réseau",
              paragraphs: [
                "Le commutateur (en anglais switch) relie les appareils d'un même réseau local et transmet chaque message seulement à l'appareil à qui il est destiné. Le routeur relie des réseaux différents entre eux, par exemple le réseau de la maison et Internet, et choisit le chemin que prennent les données.",
                "La box internet de la maison regroupe plusieurs équipements dans un seul boîtier : un routeur, un petit commutateur (les prises pour les câbles Ethernet) et un point d'accès Wi-Fi. C'est la porte d'entrée de la maison vers Internet.",
                "Dans un réseau, certains appareils demandent un service : ce sont les clients (votre téléphone qui demande une vidéo). D'autres fournissent ce service : ce sont les serveurs, des ordinateurs puissants qui stockent les vidéos, les pages web ou les messages et les envoient aux clients qui les demandent.",
              ],
              box: { label: "Repère", text: "Commutateur : relie les appareils d'un même réseau local. Routeur : relie des réseaux différents. Box : routeur + commutateur + Wi-Fi. Client : demande un service. Serveur : fournit le service." },
            },
            {
              heading: "Adresses et paquets : le voyage d'une information",
              paragraphs: [
                "Pour que les données arrivent au bon endroit, chaque appareil connecté reçoit une adresse IP, un peu comme l'adresse postale d'une maison. Une adresse IP de version 4 s'écrit avec quatre nombres compris entre 0 et 255, séparés par des points, par exemple 192.168.1.15.",
                "Une photo ou un message n'est pas envoyé d'un seul bloc : il est découpé en petits morceaux appelés paquets. Chaque paquet porte l'adresse de l'expéditeur, l'adresse du destinataire et un numéro. Les paquets passent de routeur en routeur, parfois par des chemins différents, puis sont remis dans l'ordre à l'arrivée grâce à leur numéro.",
                "Pour se comprendre, tous les appareils respectent les mêmes règles de communication, appelées protocoles. Enfin, Internet et le Web ne sont pas la même chose : Internet est le réseau qui relie les appareils, tandis que le Web est un service qui fonctionne sur Internet et permet de consulter des pages reliées par des liens. La messagerie électronique est un autre service d'Internet.",
              ],
              box: { label: "Analogie", text: "Envoyer des données, c'est comme envoyer un long livre par la poste en plusieurs enveloppes numérotées : chaque enveloppe porte l'adresse, elles peuvent voyager séparément, et le destinataire remet les pages dans l'ordre." },
            },
          ],
          keyPoints: [
            "Un réseau informatique relie des appareils pour échanger des données ; Internet est un réseau de réseaux.",
            "Liaisons filaires : câble Ethernet, fibre optique. Liaisons sans fil : Wi-Fi, Bluetooth, 4G ou 5G.",
            "Le commutateur relie les appareils d'un réseau local ; le routeur relie des réseaux différents.",
            "La box internet contient un routeur, un commutateur et un point d'accès Wi-Fi.",
            "Le client demande un service, le serveur le fournit.",
            "Chaque appareil a une adresse IP ; les données voyagent en paquets numérotés.",
            "Le Web est un service qui fonctionne sur Internet ; ce n'est pas Internet lui-même.",
          ],
          example: {
            statement: "Dans une maison, un ordinateur fixe est relié à la box par un câble Ethernet ; un smartphone et une imprimante sont reliés à la box en Wi-Fi ; un casque est relié au smartphone en Bluetooth. Le soir, on regarde une vidéo en ligne sur l'ordinateur. Identifier les liaisons filaires et sans fil, le rôle de la box, puis le client et le serveur lors de la vidéo.",
            solution: [
              "Liaison filaire : le câble Ethernet entre l'ordinateur fixe et la box.",
              "Liaisons sans fil : le Wi-Fi (smartphone et box, imprimante et box) et le Bluetooth (casque et smartphone).",
              "La box relie le réseau local de la maison à Internet (rôle de routeur) et relie entre eux les appareils de la maison (rôle de commutateur et de point d'accès Wi-Fi).",
              "Pendant la vidéo, l'ordinateur demande les images : c'est le client. L'ordinateur de la plateforme vidéo qui stocke et envoie la vidéo est le serveur.",
              "Réponse : une liaison filaire (Ethernet), trois liaisons sans fil (deux Wi-Fi, un Bluetooth) ; la box relie la maison à Internet ; l'ordinateur est le client, la plateforme vidéo est le serveur.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classer chaque liaison en « filaire » ou « sans fil » : a) une souris reliée à l'ordinateur par un câble USB ; b) une montre connectée reliée au smartphone en Bluetooth ; c) la fibre optique qui arrive jusqu'à la box ; d) une tablette qui utilise le Wi-Fi du collège ; e) un smartphone qui utilise la 5G dans la rue.",
              hint: "Demandez-vous s'il y a un câble entre les deux appareils. S'il n'y en a pas, les données passent par des ondes radio.",
              solution: [
                "a) La souris est reliée par un câble USB : liaison filaire.",
                "b) Le Bluetooth utilise des ondes radio : liaison sans fil.",
                "c) La fibre optique est un câble qui transporte de la lumière : liaison filaire.",
                "d) Le Wi-Fi utilise des ondes radio : liaison sans fil.",
                "e) La 5G est un réseau mobile qui utilise des ondes radio : liaison sans fil.",
                "Résultat : filaires = a et c ; sans fil = b, d et e.",
              ],
            },
            {
              level: 2,
              statement: "Au CDI du collège, Inès imprime un exposé depuis un ordinateur relié par câble à un commutateur. L'imprimante est reliée au même commutateur. Ensuite, elle consulte le site d'un musée ; pour cela, ses données passent par le routeur du collège. a) Quel équipement permet à l'ordinateur d'envoyer l'exposé à l'imprimante ? b) Pourquoi faut-il passer par le routeur pour consulter le site du musée ? c) Lors de la consultation du site, qui est le client et qui est le serveur ?",
              hint: "L'imprimante est dans le même réseau local que l'ordinateur ; le site du musée, lui, est stocké sur un ordinateur situé ailleurs, dans un autre réseau.",
              solution: [
                "a) L'ordinateur et l'imprimante sont dans le même réseau local : c'est le commutateur qui transmet l'exposé de l'ordinateur à l'imprimante.",
                "b) Le site du musée est stocké sur un ordinateur qui appartient à un autre réseau. Pour sortir du réseau du collège et rejoindre ce réseau par Internet, il faut passer par le routeur, qui relie des réseaux différents.",
                "c) L'ordinateur d'Inès demande les pages : c'est le client. L'ordinateur qui stocke et envoie les pages du musée est le serveur.",
                "Résultat : commutateur pour l'impression, routeur pour aller sur Internet ; client = ordinateur d'Inès, serveur = ordinateur du musée.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données simplifiées). Un message de 6 000 octets est découpé en paquets de 1 500 octets au plus. a) Combien de paquets faut-il ? b) Les paquets arrivent dans cet ordre : n°3 « LUNDI », n°1 « RENDEZ-VOUS », n°4 « À 14 H », n°2 « AU GYMNASE ». Reconstituer le message. c) Parmi ces adresses, lesquelles sont des adresses IP de version 4 correctement écrites ? 192.168.1.20 ; 192.168.1.256 ; 10.0.0.7 ; 172.16.5. Justifier.",
              hint: "Pour a), divisez la taille du message par la taille d'un paquet. Pour c), vérifiez qu'il y a bien quatre nombres et que chacun est compris entre 0 et 255.",
              solution: [
                "a) 6 000 ÷ 1 500 = 4. Il faut 4 paquets.",
                "b) On remet les paquets dans l'ordre de leur numéro : n°1, n°2, n°3, n°4. Le message est « RENDEZ-VOUS AU GYMNASE LUNDI À 14 H ».",
                "c) 192.168.1.20 : quatre nombres, tous entre 0 et 255, l'adresse est valide.",
                "192.168.1.256 : 256 est plus grand que 255, l'adresse n'est pas valide.",
                "10.0.0.7 : quatre nombres, tous entre 0 et 255, l'adresse est valide.",
                "172.16.5 : il n'y a que trois nombres, l'adresse n'est pas valide.",
                "Résultat : 4 paquets ; message « RENDEZ-VOUS AU GYMNASE LUNDI À 14 H » ; adresses valides : 192.168.1.20 et 10.0.0.7.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque élément du réseau à son rôle.",
            pairs: [
              { left: "Commutateur", right: "Relie les appareils d'un même réseau local" },
              { left: "Routeur", right: "Relie des réseaux différents et oriente les données" },
              { left: "Serveur", right: "Fournit un service (vidéos, pages, messages)" },
              { left: "Client", right: "Demande un service à un serveur" },
              { left: "Adresse IP", right: "Identifie un appareil connecté pour lui envoyer des données" },
              { left: "Paquet", right: "Petit morceau numéroté d'un message envoyé" },
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces liaisons est filaire ?",
              options: ["Le Bluetooth", "Le réseau mobile 4G", "La fibre optique", "Le Wi-Fi"],
              answer: 2,
              why: "La fibre optique est un câble qui transporte les données sous forme de lumière ; les trois autres utilisent des ondes radio.",
            },
            {
              q: "Quel équipement relie le réseau local de la maison à Internet ?",
              options: ["Le routeur de la box", "L'imprimante", "Le casque sans fil Bluetooth", "La souris"],
              answer: 0,
              why: "Le routeur relie des réseaux différents : il fait passer les données du réseau de la maison vers Internet et inversement.",
            },
            {
              q: "Quand vous regardez une vidéo en ligne, votre tablette joue le rôle :",
              options: ["de serveur", "de routeur", "de commutateur", "de client"],
              answer: 3,
              why: "La tablette demande la vidéo : elle est cliente. Le serveur est l'ordinateur de la plateforme qui stocke et envoie la vidéo.",
            },
            {
              q: "Pourquoi les paquets d'un message portent-ils un numéro ?",
              options: ["Pour aller plus vite", "Pour être remis dans l'ordre", "Pour être plus légers", "Pour éviter de passer par le Wi-Fi"],
              answer: 1,
              why: "Les paquets peuvent arriver dans le désordre ; leur numéro permet de reconstituer le message dans le bon ordre.",
            },
            {
              q: "Quelle phrase est exacte ?",
              options: ["Le Web et Internet sont deux mots pour la même chose", "Internet est un service du Web", "Le Web est un service qui fonctionne sur Internet", "Le Web n'existe qu'au collège"],
              answer: 2,
              why: "Internet est le réseau mondial ; le Web, qui permet de consulter des pages reliées par des liens, est l'un des services qui l'utilisent.",
            },
          ],
          trap: "Confondre Internet et le Web, ou croire que le Wi-Fi est Internet : le Wi-Fi n'est qu'une liaison sans fil entre un appareil et la box, et l'on peut avoir du Wi-Fi sans accès à Internet si la box n'est plus reliée au réseau mondial.",
          method: "Pour analyser un réseau, faites un schéma : dessinez chaque appareil, reliez-les par un trait plein pour un câble et par un trait en pointillés pour le sans fil, puis écrivez à côté de chaque équipement son rôle en trois ou quatre mots.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'cybersecurite',
          title: 'Protéger ses données : les bases de la cybersécurité',
          minutes: 30,
          objectives: [
            "Identifier les données personnelles et les traces que l'on laisse en utilisant un objet connecté.",
            "Créer un mot de passe robuste et appliquer les règles de base pour protéger un compte.",
            "Reconnaître une tentative d'hameçonnage et les principales menaces informatiques.",
            "Adopter les bons réflexes de cybersécurité et savoir à qui demander de l'aide.",
          ],
          course: [
            {
              heading: "Les données personnelles et les traces numériques",
              paragraphs: [
                "Une donnée personnelle est une information qui permet d'identifier une personne, directement ou indirectement : son nom, sa photo, sa voix, son adresse, son numéro de téléphone, sa date de naissance, sa position GPS ou encore l'adresse IP de son appareil.",
                "Chaque fois que vous utilisez un objet connecté, vous laissez des traces numériques : les sites visités, les vidéos regardées, les messages envoyés, les lieux où vous êtes passé avec votre téléphone. Certaines traces sont volontaires (une photo publiée), d'autres sont laissées sans s'en rendre compte (la localisation enregistrée par une application).",
                "Ces données ont de la valeur : elles servent par exemple à afficher des publicités ciblées. Une fois publiée, une information peut être copiée et partagée par d'autres : il devient très difficile de la faire disparaître complètement.",
              ],
              box: { label: "Définition", text: "Donnée personnelle : toute information qui permet d'identifier une personne, directement (nom, photo) ou indirectement (adresse IP, position, numéro de téléphone)." },
            },
            {
              heading: "La loi protège vos données",
              paragraphs: [
                "En France, la CNIL (Commission nationale de l'informatique et des libertés), créée en 1978, veille à la protection des données personnelles. Depuis le 25 mai 2018, le RGPD (Règlement général sur la protection des données) s'applique dans toute l'Union européenne.",
                "Ces règles vous donnent des droits : savoir quelles données un service possède sur vous, les faire corriger, et demander leur effacement dans de nombreux cas. En France, avant 15 ans, un réseau social doit obtenir à la fois votre accord et celui d'un parent pour utiliser vos données personnelles.",
              ],
              box: { label: "Repère", text: "CNIL (1978) : l'autorité française qui protège les données personnelles. RGPD (appliqué depuis le 25 mai 2018) : les règles européennes sur les données personnelles." },
            },
            {
              heading: "Protéger ses comptes : le mot de passe",
              paragraphs: [
                "Un mot de passe est une clé : s'il est facile à deviner, n'importe qui peut ouvrir votre compte. Les mots de passe faibles sont les plus courts et les plus prévisibles : « 123456 », « azerty », un prénom ou une date de naissance. Des logiciels peuvent essayer des milliers de combinaisons par seconde.",
                "Un mot de passe robuste est long (au moins 12 caractères) et mélange des majuscules, des minuscules, des chiffres et des caractères spéciaux. Une astuce consiste à partir d'une phrase que vous seul connaissez et à garder la première lettre de chaque mot, avec les chiffres et la ponctuation.",
                "Trois règles complètent la première : un mot de passe différent pour chaque compte (sinon, un seul vol ouvre tous les comptes), ne jamais le communiquer, même à un ami, et activer la double authentification quand c'est possible : en plus du mot de passe, il faut alors un code reçu sur le téléphone.",
              ],
              box: { label: "Règle", text: "Un mot de passe robuste : long (au moins 12 caractères), varié (majuscules, minuscules, chiffres, caractères spéciaux), unique pour chaque compte, secret. La double authentification ajoute un second verrou." },
            },
            {
              heading: "Reconnaître les menaces et adopter les bons réflexes",
              paragraphs: [
                "L'hameçonnage (en anglais phishing) est un faux message, courriel ou SMS, qui imite un organisme connu (une banque, un livreur, un jeu) pour vous pousser à cliquer sur un lien et à donner un mot de passe ou des informations. Signes d'alerte : un ton urgent ou menaçant, un cadeau trop beau, des fautes, une adresse d'expéditeur étrange, une demande de mot de passe.",
                "Un logiciel malveillant est un programme conçu pour nuire : un virus qui se propage d'un appareil à l'autre, un logiciel espion qui vole des informations, un rançongiciel qui bloque les fichiers et réclame de l'argent. Il arrive souvent par une pièce jointe ou une application téléchargée hors des magasins officiels.",
                "Les bons réflexes : faire les mises à jour, qui corrigent des failles de sécurité ; utiliser un antivirus ; sauvegarder régulièrement ses fichiers sur un autre support ; régler les paramètres de confidentialité de ses comptes ; réfléchir avant de publier. En cas de problème, on en parle à un adulte de confiance ; le 3018 est le numéro national gratuit pour les jeunes victimes de cyberharcèlement ou de violences numériques.",
              ],
              box: { label: "À retenir", text: "Aucun organisme sérieux ne vous demande votre mot de passe par message. Devant un message douteux : ne pas cliquer, ne pas répondre, le montrer à un adulte, le supprimer." },
            },
          ],
          keyPoints: [
            "Donnée personnelle : information qui permet d'identifier une personne (nom, photo, position, adresse IP).",
            "Utiliser un objet connecté laisse des traces numériques, volontaires ou non.",
            "La CNIL (1978) et le RGPD (2018) protègent les données personnelles et donnent des droits.",
            "Mot de passe robuste : long, varié, unique pour chaque compte, jamais partagé.",
            "Double authentification : un code reçu en plus du mot de passe.",
            "Hameçonnage : faux message qui cherche à voler un mot de passe ; on ne clique pas.",
            "Mises à jour, antivirus et sauvegardes protègent l'appareil et les fichiers.",
          ],
          example: {
            statement: "Léo reçoit ce SMS : « Votre colis est bloqué ! Payez 1,99 € de frais sous 24 h sinon il sera détruit. Cliquez ici : colis-livr4ison.info ». Léo n'a commandé aucun colis. S'agit-il d'un hameçonnage ? Relever les indices et dire ce que Léo doit faire.",
            solution: [
              "Indice 1 : le ton est urgent et menaçant (« sous 24 h », « sera détruit ») pour empêcher Léo de réfléchir.",
              "Indice 2 : Léo n'a rien commandé, le message ne correspond à rien de réel pour lui.",
              "Indice 3 : l'adresse du lien est étrange (un chiffre 4 à la place du a dans « livraison ») et ne correspond à aucun transporteur connu.",
              "Indice 4 : le message demande un paiement, donc des informations bancaires.",
              "Ce que Léo doit faire : ne pas cliquer, ne pas répondre, montrer le message à un adulte, puis le supprimer.",
              "Réponse : c'est un hameçonnage ; Léo ne clique pas et prévient un adulte.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Parmi ces informations, lesquelles sont des données personnelles ? a) votre nom et votre prénom ; b) la capitale de l'Italie ; c) une photo de votre visage ; d) le numéro de téléphone de votre mère ; e) la température de l'eau de mer à Nice ; f) la position GPS de votre téléphone.",
              hint: "Une donnée personnelle permet de savoir qui est une personne ou de la retrouver.",
              solution: [
                "a) Le nom et le prénom identifient directement une personne : donnée personnelle.",
                "b) La capitale de l'Italie ne concerne aucune personne : ce n'est pas une donnée personnelle.",
                "c) Une photo du visage identifie directement une personne : donnée personnelle.",
                "d) Le numéro de téléphone permet de joindre et d'identifier une personne : donnée personnelle.",
                "e) La température de l'eau ne concerne aucune personne : ce n'est pas une donnée personnelle.",
                "f) La position GPS indique où se trouve une personne : donnée personnelle.",
                "Résultat : les données personnelles sont a, c, d et f.",
              ],
            },
            {
              level: 2,
              statement: "Voici quatre mots de passe : A) « julie2013 » ; B) « 123456 » ; C) « Jm1Lv@cDm4ns! » (inventé pour l'exercice) ; D) « azerty ». a) Classer ces mots de passe du plus faible au plus robuste en justifiant. b) Sami utilise le mot de passe C pour son courriel, son jeu en ligne et son réseau social. Quel est le risque ? Que lui conseiller ?",
              hint: "Regardez la longueur de chaque mot de passe et les types de caractères utilisés (minuscules, majuscules, chiffres, caractères spéciaux), et demandez-vous s'il est facile à deviner.",
              solution: [
                "B « 123456 » et D « azerty » sont les plus faibles : 6 caractères seulement, et ce sont des suites très connues (chiffres qui se suivent, premières lettres du clavier) que les pirates essaient en premier.",
                "A « julie2013 » est un peu plus long (9 caractères) mais prévisible : un prénom suivi d'une année, qui peut être deviné à partir des informations publiées sur la personne.",
                "C « Jm1Lv@cDm4ns! » est le plus robuste : 14 caractères mélangeant majuscules, minuscules, chiffres et caractères spéciaux, sans mot du dictionnaire.",
                "a) Du plus faible au plus robuste : B et D (aussi faibles l'un que l'autre), puis A, puis C.",
                "b) Si l'un des trois sites se fait voler ses mots de passe, le pirate pourra ouvrir les trois comptes de Sami. Il faut un mot de passe différent pour chaque compte, et activer la double authentification si possible.",
                "Résultat : B et D, puis A, puis C ; un mot de passe unique par compte.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Un code secret est formé de chiffres de 0 à 9. Avec 1 chiffre, il y a 10 codes possibles ; avec 2 chiffres, 10 × 10 = 100 codes. Un logiciel pirate essaie 10 codes par seconde. a) Combien de codes possibles y a-t-il avec 4 chiffres ? avec 6 chiffres ? b) Quelle est la durée maximale pour trouver un code de 4 chiffres ? Convertir en minutes et secondes. c) Même question pour 6 chiffres, en heures (arrondir à l'heure près). d) Que concluez-vous sur la longueur d'un code ?",
              hint: "Chaque chiffre ajouté multiplie le nombre de codes possibles par 10. La durée maximale correspond au cas où le logiciel doit essayer tous les codes.",
              solution: [
                "a) 4 chiffres : 10 × 10 × 10 × 10 = 10 000 codes. 6 chiffres : 10 × 10 × 10 × 10 × 10 × 10 = 1 000 000 codes.",
                "b) 10 000 ÷ 10 = 1 000 secondes. 1 000 s = 16 × 60 s + 40 s, soit 16 min 40 s.",
                "c) 1 000 000 ÷ 10 = 100 000 secondes. 100 000 ÷ 3 600 ≈ 27,8, soit environ 28 heures.",
                "d) Ajouter seulement 2 chiffres multiplie par 100 le nombre de codes et la durée maximale. Plus un code ou un mot de passe est long, plus il résiste ; mélanger aussi lettres et symboles augmente encore le nombre de possibilités.",
                "Résultat : 10 000 et 1 000 000 codes ; 16 min 40 s contre environ 28 h ; la longueur rend un code beaucoup plus robuste.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les bons réflexes de cybersécurité.",
            statements: [
              { text: "Un mot de passe de 6 chiffres comme « 123456 » est robuste.", true: false, why: "C'est l'un des mots de passe les plus utilisés au monde ; il est trouvé en quelques secondes." },
              { text: "Utiliser le même mot de passe partout est risqué.", true: true, why: "Si un seul site se fait voler ses mots de passe, tous les comptes deviennent accessibles." },
              { text: "Une banque peut vous demander votre mot de passe par SMS.", true: false, why: "Aucun organisme sérieux ne demande un mot de passe par message : c'est un signe d'hameçonnage." },
              { text: "Les mises à jour corrigent des failles de sécurité.", true: true, why: "Les fabricants y corrigent des faiblesses que des pirates pourraient utiliser." },
              { text: "Une photo supprimée d'un réseau social a forcément disparu partout.", true: false, why: "D'autres personnes ont pu la copier ou la partager avant sa suppression." },
              { text: "L'adresse IP d'un appareil peut être une donnée personnelle.", true: true, why: "Elle permet indirectement de retrouver la personne qui utilise l'appareil." },
              { text: "Prêter son mot de passe à son meilleur ami ne pose aucun problème.", true: false, why: "Un mot de passe reste secret : même un ami peut le noter, le perdre ou s'en servir sans mauvaise intention." },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces mots de passe est le plus robuste ?",
              options: ["soleil", "T7r!kq9Lz#2pW", "motdepassesecret", "00000000"],
              answer: 1,
              why: "Il est long (13 caractères) et mélange majuscules, minuscules, chiffres et caractères spéciaux, sans mot du dictionnaire.",
            },
            {
              q: "Qu'est-ce que l'hameçonnage ?",
              options: ["Un faux message pour voler des informations", "Une mise à jour automatique du téléphone portable", "Un type de câble réseau", "Un réglage du Wi-Fi"],
              answer: 0,
              why: "L'hameçonnage imite un organisme connu pour pousser la victime à cliquer et à donner un mot de passe ou des coordonnées bancaires.",
            },
            {
              q: "La double authentification consiste à :",
              options: ["écrire son mot de passe deux fois de suite pour le confirmer", "avoir deux comptes", "changer de mot de passe chaque jour", "ajouter un code reçu en plus du mot de passe"],
              answer: 3,
              why: "En plus du mot de passe, il faut un second élément, souvent un code reçu sur le téléphone : un pirate qui connaît le mot de passe reste bloqué.",
            },
            {
              q: "Quel organisme veille en France à la protection des données personnelles ?",
              options: ["L'ANFR", "Le CERN", "La CNIL", "L'INSEE"],
              answer: 2,
              why: "La CNIL, Commission nationale de l'informatique et des libertés, a été créée en 1978 pour protéger les données personnelles.",
            },
            {
              q: "Pourquoi faut-il sauvegarder ses fichiers sur un autre support ?",
              options: ["Pour les retrouver après une panne", "Pour que le Wi-Fi fonctionne plus vite", "Pour ne plus avoir besoin de mises à jour"],
              answer: 0,
              why: "Si l'appareil tombe en panne, est volé ou bloqué par un rançongiciel, la sauvegarde permet de récupérer les fichiers.",
            },
          ],
          trap: "Croire qu'un mot de passe est robuste parce qu'il contient des chiffres : « julie2013 » mêle lettres et chiffres mais reste facile à deviner, car un prénom et une année se retrouvent souvent dans les informations publiées sur la personne.",
          method: "Devant un message inattendu, appliquez la règle des trois questions : est-ce que j'attendais ce message ? Est-ce qu'il me presse ou me menace ? Est-ce qu'il me demande un mot de passe, de l'argent ou un clic ? Un seul oui suffit pour ne pas cliquer et en parler à un adulte.",
        },
      ],
    },
    /* ==================================================================== */
    /* PROGRAMMER LE COMPORTEMENT D'UN OBJET                                  */
    /* ==================================================================== */
    {
      id: 'programmer-objet',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'algorithme',
          title: 'Décrire un comportement par un algorithme',
          minutes: 30,
          objectives: [
            "Décrire le comportement d'un objet automatique en distinguant ce qu'il détecte et ce qu'il fait.",
            "Écrire un algorithme simple sous forme d'une suite ordonnée d'instructions précises.",
            "Identifier une séquence, un événement, une condition et une boucle dans un algorithme.",
            "Lire et compléter un algorigramme simple.",
          ],
          course: [
            {
              heading: "Le comportement d'un objet automatique",
              paragraphs: [
                "Beaucoup d'objets du quotidien agissent tout seuls : la lampe du couloir qui s'allume quand on passe, le distributeur de savon qui donne une dose quand on approche la main, la porte du supermarché qui s'ouvre devant un client, la barrière du parking qui se lève quand on prend son ticket.",
                "Le comportement d'un objet, c'est ce qu'il fait en fonction des informations qu'il reçoit. Ces informations viennent de capteurs (un détecteur de présence, un capteur de lumière) ou de l'utilisateur (un bouton). L'objet réagit ensuite grâce à ses actionneurs (une lampe, un moteur, une pompe).",
                "Pour qu'une carte électronique puisse commander ce comportement, il faut d'abord le décrire de façon très précise, étape par étape. Cette description s'appelle un algorithme.",
              ],
            },
            {
              heading: "Qu'est-ce qu'un algorithme ?",
              paragraphs: [
                "Un algorithme est une suite finie et ordonnée d'instructions qui permet de réaliser une tâche ou de résoudre un problème. Une recette de cuisine en est un bon exemple : on part des ingrédients, on suit les étapes dans l'ordre, et on obtient le plat. Changer l'ordre des étapes change le résultat : on ne met pas le gâteau au four avant d'avoir mélangé la pâte.",
                "Une machine exécute les instructions exactement comme elles sont écrites, sans rien deviner. Chaque instruction doit donc être précise. « Allumer la lampe un moment » ne convient pas, car la machine ne sait pas ce qu'est « un moment » ; il faut écrire « allumer la lampe, attendre 30 secondes, éteindre la lampe ».",
              ],
              box: { label: "Définition", text: "Algorithme : suite finie et ordonnée d'instructions précises qui permet de réaliser une tâche ou de résoudre un problème. Il s'écrit en langage courant, avant d'être programmé." },
            },
            {
              heading: "Les quatre structures de base",
              paragraphs: [
                "La séquence : des instructions qui s'exécutent l'une après l'autre, dans l'ordre. Exemple : « allumer la LED, attendre 1 seconde, éteindre la LED ».",
                "L'événement : ce qui déclenche une suite d'instructions. On l'écrit avec « quand » ou « lorsque ». Exemple : « quand on appuie sur le bouton, faire sonner la sonnette ».",
                "La condition : un choix entre deux possibilités, selon qu'un test est vrai ou faux. On l'écrit « si... alors... sinon... ». Exemple : « s'il fait sombre, alors allumer la lampe, sinon éteindre la lampe ».",
                "La boucle : des instructions répétées, un nombre de fois connu (« répéter 3 fois ») ou sans fin (« répéter indéfiniment »). Exemple : « répéter 3 fois : allumer la LED, attendre 1 s, éteindre la LED, attendre 1 s » fait clignoter la LED trois fois.",
              ],
              box: { label: "À retenir", text: "Séquence : l'une après l'autre. Événement : « quand... ». Condition : « si... alors... sinon... ». Boucle : « répéter... »." },
            },
            {
              heading: "L'algorigramme : dessiner un algorithme",
              paragraphs: [
                "Un algorigramme (on dit aussi organigramme) représente un algorithme sous forme de schéma, avec des symboles normalisés reliés par des flèches qui indiquent l'ordre. On le lit de haut en bas, en suivant les flèches.",
                "Un rectangle aux coins arrondis (ou un ovale) marque le début et la fin. Un rectangle contient une action (« allumer la lampe »). Un losange contient un test, c'est-à-dire une question à laquelle on répond par oui ou par non (« présence détectée ? ») : il a deux sorties, une pour oui et une pour non. Une flèche qui remonte vers une étape précédente forme une boucle.",
              ],
              box: { label: "Repère", text: "Début et fin : rectangle arrondi ou ovale. Action : rectangle. Test (oui ou non) : losange à deux sorties. Flèche qui remonte : boucle." },
            },
          ],
          keyPoints: [
            "Le comportement d'un objet : ce qu'il fait selon les informations reçues de ses capteurs ou de l'utilisateur.",
            "Algorithme : suite finie et ordonnée d'instructions précises.",
            "Une machine ne devine rien : chaque instruction doit être précise (durées, valeurs).",
            "Quatre structures : séquence, événement (quand), condition (si... alors... sinon), boucle (répéter).",
            "Algorigramme : rectangle pour une action, losange pour un test, flèches pour l'ordre.",
          ],
          example: {
            statement: "Un distributeur de gel automatique doit donner une dose de gel chaque fois qu'une main est détectée sous son bec. Une dose correspond à 1 seconde de fonctionnement de la pompe. Écrire l'algorithme de son comportement, puis décrire l'algorigramme correspondant.",
            solution: [
              "Ce que l'objet détecte : la présence d'une main (capteur de présence). Ce qu'il fait : faire fonctionner la pompe (actionneur).",
              "Le distributeur doit surveiller la main en permanence : on utilise une boucle « répéter indéfiniment ».",
              "Dans la boucle, on place une condition : si une main est détectée, alors mettre la pompe en marche, attendre 1 seconde, arrêter la pompe ; sinon, laisser la pompe arrêtée.",
              "Algorithme : « Répéter indéfiniment : si une main est détectée alors mettre la pompe en marche, attendre 1 s, arrêter la pompe ; sinon laisser la pompe arrêtée. »",
              "Algorigramme : Début, puis un losange « main détectée ? ». Sortie oui : rectangle « pompe en marche », rectangle « attendre 1 s », rectangle « arrêter la pompe ». Sortie non : rectangle « pompe arrêtée ». Les deux chemins remontent par une flèche jusqu'au losange.",
              "Réponse : une boucle sans fin qui contient une condition sur la détection de la main.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque phrase, dire s'il s'agit d'une séquence, d'un événement, d'une condition ou d'une boucle : a) « Quand on appuie sur le bouton A, afficher un cœur. » b) « Si la température dépasse 25 °C, alors ouvrir la fenêtre, sinon la fermer. » c) « Répéter 3 fois : faire clignoter la LED. » d) « Allumer la LED, attendre 1 seconde, éteindre la LED. »",
              hint: "Cherchez les mots clés : « quand », « si... alors... sinon », « répéter ». S'il n'y en a aucun, les actions se suivent simplement.",
              solution: [
                "a) « Quand on appuie... » déclenche une action : c'est un événement.",
                "b) « Si... alors... sinon... » choisit entre deux actions : c'est une condition.",
                "c) « Répéter 3 fois » refait la même action : c'est une boucle.",
                "d) Les actions se suivent dans l'ordre, sans choix ni répétition : c'est une séquence.",
                "Résultat : a) événement ; b) condition ; c) boucle ; d) séquence.",
              ],
            },
            {
              level: 2,
              statement: "La lampe d'un couloir est équipée d'un détecteur de présence. Quand une présence est détectée, la lampe doit s'allumer pendant 60 secondes, puis s'éteindre. Le détecteur doit être surveillé en permanence. a) Quel est le capteur ? Quel est l'actionneur ? b) Écrire l'algorithme de ce comportement. c) Quel symbole de l'algorigramme utiliser pour « présence détectée ? » et combien de sorties a-t-il ?",
              hint: "Il faut une boucle sans fin pour surveiller en permanence, et à l'intérieur une condition sur la présence.",
              solution: [
                "a) Le capteur est le détecteur de présence (il reçoit l'information). L'actionneur est la lampe (elle agit en éclairant).",
                "b) Algorithme : « Répéter indéfiniment : si une présence est détectée alors allumer la lampe, attendre 60 secondes, éteindre la lampe. »",
                "On peut ajouter « sinon laisser la lampe éteinte », ce qui ne change rien au comportement.",
                "c) « Présence détectée ? » est un test : on utilise un losange, qui a deux sorties (oui et non).",
                "Résultat : capteur = détecteur de présence, actionneur = lampe ; une boucle sans fin contenant une condition ; le test se dessine dans un losange à deux sorties.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Voici l'algorithme d'un feu tricolore : « Répéter indéfiniment : allumer le vert, attendre 30 s, éteindre le vert, allumer l'orange, attendre 3 s, éteindre l'orange, allumer le rouge, attendre 27 s, éteindre le rouge. » a) Quelle est la durée d'un cycle complet ? b) Combien de cycles le feu fait-il en une heure ? c) Pendant combien de minutes le feu est-il rouge en une heure ? d) Un élève a oublié l'instruction « éteindre le vert ». Que se passe-t-il ?",
              hint: "Additionnez les durées d'attente d'un cycle. Une heure dure 3 600 secondes. Pour d), suivez l'algorithme pas à pas en notant quels feux sont allumés.",
              solution: [
                "a) Durée d'un cycle : 30 + 3 + 27 = 60 s, soit 1 minute (on considère que les instructions « allumer » et « éteindre » sont instantanées).",
                "b) En une heure : 3 600 ÷ 60 = 60 cycles.",
                "c) Le feu est rouge 27 s par cycle : 27 × 60 = 1 620 s, et 1 620 ÷ 60 = 27 minutes.",
                "d) Sans « éteindre le vert », le vert reste allumé quand l'orange puis le rouge s'allument : les conducteurs voient deux ou trois couleurs à la fois, ce qui est dangereux. Il faut remettre l'instruction à sa place, juste après « attendre 30 s ».",
                "Résultat : cycle de 60 s ; 60 cycles par heure ; 27 minutes de rouge par heure ; l'oubli laisse le vert allumé en même temps que les autres feux.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le fonctionnement d'une porte automatique de magasin.",
            items: [
              "Une personne s'approche de la porte",
              "Le détecteur de présence repère la personne",
              "La carte de commande reçoit l'information et décide d'ouvrir",
              "Le moteur fait coulisser la porte pour l'ouvrir",
              "La porte reste ouverte tant qu'une personne est détectée",
              "Le moteur referme la porte",
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'un algorithme ?",
              options: ["Un composant électronique de la carte", "Une suite ordonnée d'instructions", "Un câble qui relie deux cartes", "Un dessin de l'objet en perspective"],
              answer: 1,
              why: "Un algorithme est une suite finie et ordonnée d'instructions précises qui permet de réaliser une tâche.",
            },
            {
              q: "Dans un algorigramme, quel symbole contient un test ?",
              options: ["Le rectangle", "L'ovale", "La flèche", "Le losange"],
              answer: 3,
              why: "Le losange contient une question à laquelle on répond par oui ou par non ; il a deux sorties.",
            },
            {
              q: "« S'il fait nuit, alors allumer la lampe, sinon l'éteindre » est :",
              options: ["une condition", "une boucle infinie", "une séquence simple", "un événement"],
              answer: 0,
              why: "La structure « si... alors... sinon... » choisit entre deux actions selon le résultat d'un test : c'est une condition.",
            },
            {
              q: "Une boucle permet de :",
              options: ["choisir entre deux actions", "relier deux appareils", "répéter des instructions", "arrêter le programme"],
              answer: 2,
              why: "Une boucle répète des instructions, un nombre de fois connu ou indéfiniment.",
            },
            {
              q: "Pourquoi « allumer la lampe un moment » est-il une mauvaise instruction ?",
              options: ["Elle est trop courte", "La durée n'est pas précisée", "Une lampe ne peut pas être programmée", "Il manque un câble"],
              answer: 1,
              why: "Une machine ne devine rien : il faut une durée précise, par exemple « attendre 30 secondes ».",
            },
          ],
          trap: "Oublier la boucle : un algorithme écrit sans « répéter indéfiniment » ne teste le capteur qu'une seule fois, au démarrage, puis s'arrête ; la lampe ou la pompe ne réagit plus ensuite.",
          method: "Avant d'écrire un algorithme, faites deux colonnes : à gauche ce que l'objet détecte (capteurs, boutons), à droite ce qu'il fait (actionneurs). Écrivez ensuite les instructions dans l'ordre, puis vérifiez-les en jouant le rôle de la machine, pas à pas, sans rien deviner.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'programme-blocs',
          title: 'Programmer avec des blocs : boucles et conditions',
          minutes: 35,
          objectives: [
            "Traduire un algorithme simple en programme avec un langage par blocs (Scratch, MakeCode).",
            "Utiliser une boucle pour répéter des instructions.",
            "Utiliser une condition pour faire réagir un objet à la valeur d'un capteur.",
            "Tester un programme et le corriger pour obtenir le comportement attendu.",
          ],
          course: [
            {
              heading: "Du programme aux blocs",
              paragraphs: [
                "Un programme est un algorithme traduit dans un langage que la machine sait exécuter. Au collège, on utilise souvent un langage par blocs : Scratch, pour animer des personnages appelés lutins à l'écran, ou MakeCode, pour programmer une carte électronique comme la micro:bit, avec ses LED, ses boutons et ses capteurs.",
                "Les blocs s'emboîtent comme les pièces d'un puzzle, et leur couleur indique leur famille : mouvement, apparence, événements, contrôle, capteurs. Un programme commence presque toujours par un bloc d'événement : « quand le drapeau vert est cliqué » dans Scratch, « au démarrage » ou « lorsque le bouton A est pressé » dans MakeCode.",
                "Une fois écrit, le programme d'une carte est téléversé, c'est-à-dire transféré de l'ordinateur vers la carte, qui l'exécute ensuite toute seule.",
              ],
              box: { label: "Définition", text: "Programme : algorithme traduit dans un langage compris par la machine. Téléverser : transférer le programme de l'ordinateur vers la carte électronique." },
            },
            {
              heading: "Les boucles : répéter sans recopier",
              paragraphs: [
                "Pour faire dessiner un carré à un lutin, on pourrait empiler huit blocs : avancer, tourner, avancer, tourner, et ainsi de suite. Il est plus simple d'utiliser une boucle : « répéter 4 fois : avancer de 100, tourner de 90 degrés ». Le programme est plus court, plus lisible et plus facile à modifier.",
                "Il existe trois sortes de boucles. « Répéter 10 fois » répète un nombre de fois connu. « Répéter indéfiniment » dans Scratch, ou « toujours » dans MakeCode, répète sans jamais s'arrêter : c'est la boucle des objets qui surveillent en permanence. « Répéter jusqu'à ce que » répète tant qu'une condition n'est pas remplie, par exemple jusqu'à ce que le lutin touche le bord.",
              ],
              box: { label: "À retenir", text: "Répéter n fois : nombre de tours connu. Répéter indéfiniment (toujours) : sans fin. Répéter jusqu'à ce que : s'arrête quand la condition devient vraie." },
            },
            {
              heading: "Les conditions : réagir aux capteurs",
              paragraphs: [
                "Le bloc « si... alors » exécute les blocs qu'il contient seulement si la condition est vraie. Le bloc « si... alors... sinon » choisit entre deux groupes de blocs : ceux après « alors » si la condition est vraie, ceux après « sinon » si elle est fausse.",
                "La condition est un test qui vaut vrai ou faux. Elle compare souvent la valeur d'un capteur à un seuil avec les signes < (inférieur à), > (supérieur à) ou = (égal à). Sur la micro:bit, le niveau de lumière va de 0 (obscurité) à 255 (forte lumière) et la température se lit en degrés Celsius.",
                "Exemple : « si niveau de lumière < 50 alors allumer les LED, sinon éteindre les LED » fait une veilleuse qui s'allume quand il fait sombre. Attention aux cas limites : si la condition est « température > 25 », une température de 25 °C exactement rend la condition fausse.",
              ],
              box: { label: "Règle", text: "Une condition vaut vrai ou faux. « > 25 » est faux pour 25 ; pour inclure 25, il faut « ≥ 25 » ou « > 24 » si la valeur est un nombre entier." },
            },
            {
              heading: "Combiner boucle et condition, tester et corriger",
              paragraphs: [
                "Pour qu'un objet réagisse à tout moment, le test « si » doit être placé à l'intérieur de la boucle « toujours ». Placé seulement dans « au démarrage », il n'est fait qu'une fois, à la mise sous tension : si la situation change ensuite, l'objet ne réagit plus.",
                "Un programme se teste dans plusieurs situations : un cas où la condition est vraie, un cas où elle est fausse et un cas limite (la valeur exactement égale au seuil). Une erreur dans un programme s'appelle un bogue (en anglais bug) ; la chercher et la corriger, c'est déboguer.",
              ],
              box: { label: "Méthode", text: "Pour tester : prévoir le résultat attendu, lancer le programme, comparer avec ce qui se passe vraiment. Si c'est différent, chercher le bloc en cause, le corriger et tester de nouveau." },
            },
          ],
          keyPoints: [
            "Un programme commence par un bloc d'événement : « quand le drapeau vert est cliqué », « au démarrage ».",
            "Une boucle évite de recopier : répéter n fois, répéter indéfiniment (toujours), répéter jusqu'à ce que.",
            "« Si... alors... sinon » choisit entre deux actions selon une condition vraie ou fausse.",
            "Une condition compare souvent la valeur d'un capteur à un seuil avec <, > ou =.",
            "Pour surveiller un capteur en permanence, le « si » se place dans la boucle « toujours ».",
            "Tester les cas vrai, faux et limite ; corriger un bogue, c'est déboguer.",
          ],
          example: {
            statement: "Écrire un programme Scratch qui fait dessiner au lutin un triangle équilatéral de 100 pas de côté, en utilisant une boucle. Justifier l'angle choisi.",
            solution: [
              "Le programme commence par l'événement « quand le drapeau vert est cliqué », puis « stylo en position d'écriture » pour que le lutin trace.",
              "Un triangle équilatéral a 3 côtés égaux : on répète 3 fois le même motif « avancer de 100 pas, tourner ».",
              "Chaque angle intérieur d'un triangle équilatéral mesure 60°. Le lutin, qui avance tout droit, doit tourner de 180° - 60° = 120° pour repartir le long du côté suivant.",
              "Vérification : en 3 tours, le lutin tourne de 3 × 120° = 360°, il revient donc dans sa direction de départ, comme pour toute figure fermée.",
              "Programme : « quand le drapeau vert est cliqué ; stylo en position d'écriture ; répéter 3 fois : avancer de 100 pas, tourner de 120 degrés ».",
              "Réponse : une boucle « répéter 3 fois » avec un virage de 120°.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici un programme Scratch : « quand le drapeau vert est cliqué ; répéter 5 fois : avancer de 20 pas, dire Bonjour pendant 1 seconde ». a) Combien de fois le lutin dit-il « Bonjour » ? b) Quelle distance totale parcourt-il ? c) Combien de temps dure le programme, au minimum ?",
              hint: "Les blocs à l'intérieur de la boucle sont exécutés à chaque tour : multipliez par le nombre de tours.",
              solution: [
                "a) Le bloc « dire Bonjour » est dans la boucle répétée 5 fois : le lutin dit « Bonjour » 5 fois.",
                "b) Il avance de 20 pas à chaque tour : 5 × 20 = 100 pas.",
                "c) Chaque « dire » dure 1 seconde : 5 × 1 = 5 secondes au minimum (le bloc « avancer » est presque instantané).",
                "Résultat : 5 fois « Bonjour », 100 pas, environ 5 secondes.",
              ],
            },
            {
              level: 2,
              statement: "On veut programmer une carte micro:bit pour surveiller la température d'une petite serre : si la température dépasse 25 °C, la carte affiche « CHAUD » ; sinon, elle affiche un cœur. a) Écrire le programme avec les blocs « toujours », « si... alors... sinon », « température (°C) », « afficher texte » et « montrer l'icône ». b) Qu'affiche la carte pour 20 °C, 25 °C et 30 °C ? c) Pourquoi faut-il utiliser « toujours » et non « au démarrage » ?",
              hint: "« Dépasse 25 °C » se traduit par la comparaison « température > 25 ». Pour 25 °C, demandez-vous si 25 > 25 est vrai.",
              solution: [
                "a) Programme : « toujours : si température (°C) > 25 alors afficher texte « CHAUD », sinon montrer l'icône cœur ».",
                "b) Pour 20 °C : 20 > 25 est faux, la carte montre le cœur.",
                "Pour 25 °C : 25 > 25 est faux (25 n'est pas strictement supérieur à 25), la carte montre le cœur.",
                "Pour 30 °C : 30 > 25 est vrai, la carte affiche « CHAUD ».",
                "c) La température change au cours de la journée. Avec « toujours », le test est refait sans arrêt ; avec « au démarrage », il ne serait fait qu'une fois et l'affichage ne changerait plus.",
                "Résultat : cœur pour 20 °C et 25 °C, « CHAUD » pour 30 °C ; la boucle « toujours » permet de surveiller en permanence.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) On veut que le lutin dessine un hexagone régulier (6 côtés égaux) de 50 pas de côté. Combien de fois faut-il répéter le motif ? De quel angle le lutin doit-il tourner à chaque fois ? Quelle distance parcourt-il en tout ? b) Un robot équipé d'un capteur de distance a reçu ce programme : « au démarrage : si distance < 10 cm alors arrêter les moteurs, sinon faire avancer les moteurs ». Le robot est posé à 50 cm d'un mur. Il avance… et heurte le mur. Expliquer le bogue et corriger le programme.",
              hint: "a) Quand le lutin a fini la figure, il a fait un tour complet sur lui-même (360°). b) Demandez-vous combien de fois le test « distance < 10 cm » est fait avec « au démarrage ».",
              solution: [
                "a) L'hexagone a 6 côtés : on répète 6 fois « avancer de 50 pas, tourner ».",
                "Le lutin fait un tour complet (360°) en 6 virages égaux : 360° ÷ 6 = 60° à chaque virage.",
                "Distance totale : 6 × 50 = 300 pas.",
                "b) Avec « au démarrage », le test n'est fait qu'une fois, quand le robot est à 50 cm. 50 < 10 est faux, donc les moteurs sont mis en marche. Le test n'est jamais refait : le robot ne vérifie plus la distance et continue jusqu'au mur.",
                "Correction : placer le test dans la boucle « toujours » : « toujours : si distance < 10 cm alors arrêter les moteurs, sinon faire avancer les moteurs ». La distance est alors mesurée sans arrêt et le robot s'arrête dès qu'il est à moins de 10 cm.",
                "Résultat : 6 répétitions, virages de 60°, 300 pas ; le bogue vient du test fait une seule fois, corrigé par la boucle « toujours ».",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : boucles et conditions.",
            statements: [
              { text: "« Répéter 4 fois : avancer de 100, tourner de 90 degrés » dessine un carré.", true: true, why: "Quatre côtés égaux et quatre virages de 90° : 4 × 90° = 360°, la figure se ferme." },
              { text: "Un bloc placé dans « au démarrage » est exécuté en permanence.", true: false, why: "« Au démarrage » n'est exécuté qu'une fois ; c'est « toujours » qui répète sans fin." },
              { text: "Avec « si température > 25 », la condition est vraie pour 25 °C.", true: false, why: "25 n'est pas strictement supérieur à 25 : la condition est fausse." },
              { text: "Dans « si... alors... sinon », un seul des deux groupes de blocs est exécuté.", true: true, why: "Si la condition est vraie, on exécute « alors » ; sinon, on exécute « sinon », jamais les deux." },
              { text: "Une boucle rend un programme plus long à écrire.", true: false, why: "Elle évite au contraire de recopier plusieurs fois les mêmes blocs." },
              { text: "Déboguer, c'est chercher et corriger une erreur dans un programme.", true: true, why: "Un bogue est une erreur ; le déboguer, c'est la trouver et la corriger." },
            ],
          },
          quiz: [
            {
              q: "Quel bloc lance souvent un programme Scratch ?",
              options: ["quand le drapeau vert est cliqué", "répéter jusqu'à ce que le lutin touche le bord", "avancer de 10 pas", "tourner de 15 degrés"],
              answer: 0,
              why: "C'est un bloc d'événement : il déclenche le programme quand on clique sur le drapeau vert.",
            },
            {
              q: "Pour dessiner un carré, combien de fois répète-t-on « avancer, tourner de 90 degrés » ?",
              options: ["2 fois", "3 fois", "8 fois", "4 fois"],
              answer: 3,
              why: "Un carré a 4 côtés et 4 angles droits : 4 × 90° = 360°.",
            },
            {
              q: "Avec « si température > 25 alors... », que se passe-t-il pour 25 °C exactement ?",
              options: ["Les blocs après « alors » s'exécutent", "La carte s'éteint", "La condition est fausse", "Le programme recommence"],
              answer: 2,
              why: "25 n'est pas strictement supérieur à 25 : la condition est fausse, les blocs après « alors » ne s'exécutent pas.",
            },
            {
              q: "Où placer le test « si » pour surveiller un capteur en permanence ?",
              options: ["Dans « au démarrage »", "Dans la boucle « toujours »", "Juste après la fin du programme", "Dans aucun bloc"],
              answer: 1,
              why: "La boucle « toujours » refait le test sans arrêt ; dans « au démarrage », il ne serait fait qu'une fois.",
            },
            {
              q: "Quel bloc répète des instructions sans jamais s'arrêter ?",
              options: ["si... alors", "répéter 10 fois", "répéter jusqu'à ce que le bouton A soit pressé", "répéter indéfiniment"],
              answer: 3,
              why: "« Répéter indéfiniment » (« toujours » dans MakeCode) ne s'arrête jamais ; les autres boucles s'arrêtent après un nombre de tours ou quand une condition devient vraie.",
            },
          ],
          trap: "Placer le test « si » dans « au démarrage » au lieu de la boucle « toujours » : le capteur n'est lu qu'une seule fois, et l'objet ne réagit plus quand la situation change.",
          method: "Avant de lancer un programme, écrivez sur votre brouillon ce que vous attendez dans trois cas (condition vraie, condition fausse, valeur égale au seuil), puis testez ces trois cas un par un et cochez ceux qui fonctionnent.",
        },
      ],
    },
    /* ==================================================================== */
    /* MENER UN MINI-PROJET                                                   */
    /* ==================================================================== */
    {
      id: 'mini-projet',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'identifier-probleme',
          title: 'Identifier un besoin et formuler un problème',
          minutes: 25,
          objectives: [
            "Situer les grandes étapes de la démarche de projet.",
            "Identifier un besoin à partir d'une situation de la vie quotidienne, sans imposer de solution.",
            "Formuler le problème technique à résoudre sous forme de question.",
            "Rédiger un cahier des charges simple avec des critères et des niveaux vérifiables.",
          ],
          course: [
            {
              heading: "La démarche de projet",
              paragraphs: [
                "Un projet technique consiste à concevoir un nouvel objet, ou à améliorer un objet existant, pour répondre à un besoin. En classe, on le mène en équipe, en plusieurs séances, comme le font les ingénieurs et les designers.",
                "La démarche suit des étapes dans un ordre précis : identifier le besoin et formuler le problème ; rédiger le cahier des charges ; imaginer des solutions et en choisir une ; réaliser un prototype ; le tester et l'améliorer ; enfin présenter le résultat. Cette leçon porte sur les deux premières étapes, qui guident toutes les autres.",
              ],
              box: { label: "Repère", text: "Les étapes d'un projet : besoin et problème, cahier des charges, recherche et choix de solutions, réalisation du prototype, tests et améliorations, présentation." },
            },
            {
              heading: "Du constat au besoin",
              paragraphs: [
                "Tout commence par un constat, une situation observée qui pose une difficulté. Par exemple : « À la cantine, la salle devient vite très bruyante et personne ne s'en rend compte ». Le besoin est ce qui manque aux utilisateurs dans cette situation : ici, savoir quand le bruit devient trop fort.",
                "Pour bien cerner le besoin, on répond à trois questions : à qui l'objet rendra-t-il service ? Sur quoi agira-t-il ? Dans quel but ? Pour la cantine : aux élèves et aux surveillants, sur le niveau de bruit de la salle, pour qu'il reste supportable.",
                "Un besoin s'exprime sans parler de solution. « Il faut installer une lampe rouge » n'est pas un besoin, c'est déjà une solution : elle empêcherait de chercher d'autres idées, peut-être meilleures.",
              ],
              box: { label: "Définition", text: "Besoin : ce qui manque à un utilisateur dans une situation donnée, exprimé sans imposer de solution." },
            },
            {
              heading: "Formuler le problème",
              paragraphs: [
                "Le problème technique traduit le besoin en une question à laquelle l'équipe devra répondre. On le formule en général avec « Comment... ? ». Pour la cantine : « Comment signaler aux élèves, dans toute la salle, que le bruit devient trop fort ? ».",
                "Un bon problème est précis : il nomme les utilisateurs et la situation. Il ne contient pas la solution. « Comment programmer une carte pour allumer une LED ? » est une mauvaise formulation, car elle impose déjà la carte et la LED et ne dit pas à quoi sert l'objet.",
              ],
              box: { label: "Règle", text: "Un problème se formule par une question (« Comment... ? ») qui précise les utilisateurs et la situation, sans imposer de solution." },
            },
            {
              heading: "Le cahier des charges",
              paragraphs: [
                "Le cahier des charges est le document qui fixe ce que l'objet devra faire et ce qu'il devra respecter. Il contient la fonction principale (ce que l'objet doit faire, avec un verbe à l'infinitif) et les contraintes (ce qu'il doit respecter : sécurité, coût, dimensions, énergie, matériaux disponibles, temps de réalisation).",
                "Chaque exigence doit être vérifiable. On la précise par un critère, ce que l'on mesure ou observe, et par un niveau, la valeur attendue. « Pas trop cher » ne se vérifie pas ; « coût : au plus 30 € » se vérifie. « Bien visible » ne se vérifie pas ; « visible : à au moins 10 m » se vérifie.",
                "Le cahier des charges servira deux fois dans la suite du projet : pour comparer et choisir les solutions, puis pour tester le prototype et savoir s'il convient.",
              ],
              box: { label: "À retenir", text: "Critère = ce que l'on mesure (coût, masse, distance, durée). Niveau = la valeur attendue, avec son unité (au plus 30 €, au moins 10 m, au moins 4 h)." },
            },
          ],
          keyPoints: [
            "Démarche de projet : besoin et problème, cahier des charges, solutions, prototype, tests, présentation.",
            "On part d'un constat pour trouver le besoin : à qui ? sur quoi ? dans quel but ?",
            "Un besoin s'exprime sans imposer de solution.",
            "Le problème se formule par une question « Comment... ? » précise.",
            "Cahier des charges : fonction principale et contraintes, chacune avec un critère et un niveau vérifiables.",
          ],
          example: {
            statement: "Constat : à la cantine du collège, la salle devient vite très bruyante et personne ne s'en rend compte. Identifier le besoin, formuler le problème, puis proposer un cahier des charges simple (fonction principale et deux contraintes avec critère et niveau ; données fictives).",
            solution: [
              "À qui l'objet rend-il service ? Aux élèves et aux surveillants. Sur quoi agit-il ? Sur le niveau de bruit de la salle. Dans quel but ? Pour qu'il reste supportable.",
              "Besoin : savoir quand le bruit de la salle devient trop fort.",
              "Problème : « Comment signaler aux élèves, dans toute la salle, que le bruit devient trop fort ? ».",
              "Fonction principale : signaler que le niveau de bruit dépasse un seuil fixé.",
              "Contrainte 1 : critère « distance à laquelle le signal est perçu », niveau « au moins 10 m ». Contrainte 2 : critère « coût du matériel », niveau « au plus 30 € ».",
              "Réponse : le besoin est de connaître le niveau de bruit ; le problème est posé par une question « Comment... ? » ; le cahier des charges contient une fonction et des contraintes vérifiables.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque phrase, dire s'il s'agit d'un besoin ou d'une solution : a) « Les cyclistes doivent être vus la nuit. » b) « Il faut coller une bande réfléchissante sur le casque. » c) « Les personnes âgées oublient parfois de prendre leurs médicaments. » d) « Il faut une alarme programmée sur une carte. » e) « Les élèves ont du mal à retrouver leur cadenas dans le local à vélos sombre. »",
              hint: "Une solution décrit déjà un objet, un matériau ou un composant. Un besoin décrit seulement ce qui manque à quelqu'un.",
              solution: [
                "a) La phrase dit ce qui manque aux cyclistes sans proposer d'objet : besoin.",
                "b) Une bande réfléchissante est déjà un moyen choisi : solution.",
                "c) La phrase décrit une difficulté des utilisateurs : besoin.",
                "d) Une alarme programmée est un objet choisi : solution.",
                "e) La phrase décrit une difficulté des élèves : besoin.",
                "Résultat : besoins = a, c et e ; solutions = b et d.",
              ],
            },
            {
              level: 2,
              statement: "Constat : en hiver, le local à vélos du collège est sombre le soir et les élèves ont du mal à retrouver leur cadenas et à l'ouvrir. a) Répondre aux trois questions qui permettent d'identifier le besoin. b) Formuler le problème. c) Proposer la fonction principale et deux contraintes, chacune avec un critère et un niveau (données fictives).",
              hint: "Pour les contraintes, pensez à la sécurité, à l'énergie, au coût, ou à la durée pendant laquelle l'éclairage doit rester allumé.",
              solution: [
                "a) L'objet rendra service aux élèves cyclistes ; il agira sur l'éclairage du local à vélos ; dans le but de leur permettre de voir pour récupérer leur vélo.",
                "b) Problème : « Comment permettre aux élèves de voir dans le local à vélos le soir, en hiver ? ».",
                "c) Fonction principale : éclairer le local à vélos quand un élève y entre.",
                "Contrainte 1 : critère « durée d'éclairage après le passage d'un élève », niveau « au moins 2 minutes ». Contrainte 2 : critère « tension d'alimentation », niveau « au plus 12 V », pour la sécurité des élèves. D'autres réponses sont possibles (coût, énergie solaire, résistance à la pluie).",
                "Résultat : un besoin centré sur les élèves cyclistes, un problème posé en « Comment... ? » et des contraintes vérifiables.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une équipe veut aider les élèves à penser à boire pendant les journées chaudes. Elle propose trois formulations du problème : A) « Comment fabriquer une gourde avec une LED ? » ; B) « Comment rappeler aux élèves de boire régulièrement pendant les journées chaudes au collège ? » ; C) « Comment faire quelque chose pour l'eau ? ». Son cahier des charges contient : « pas trop lourd », « coût : au plus 15 € », « assez solide », « rappel toutes les 60 minutes au plus ». a) Quelle est la meilleure formulation ? Expliquer ce qui ne va pas dans les deux autres. b) Quelles exigences du cahier des charges ne sont pas vérifiables ? Les réécrire avec un critère et un niveau (données fictives).",
              hint: "Un bon problème nomme les utilisateurs et la situation sans imposer de solution. Une exigence vérifiable contient une grandeur et une valeur avec une unité.",
              solution: [
                "a) La meilleure formulation est B : elle nomme les utilisateurs (les élèves), la situation (journées chaudes au collège) et le but (boire régulièrement), sans imposer de solution.",
                "A impose déjà la solution (une gourde avec une LED) et empêche de chercher d'autres idées. C est beaucoup trop vague : on ne sait ni pour qui ni dans quel but.",
                "b) « Coût : au plus 15 € » et « rappel toutes les 60 minutes au plus » sont vérifiables : ils ont un critère et un niveau.",
                "« Pas trop lourd » n'est pas vérifiable. Réécriture : critère « masse », niveau « au plus 300 g ».",
                "« Assez solide » n'est pas vérifiable. Réécriture : critère « résistance à une chute », niveau « fonctionne encore après une chute de 1 m ».",
                "Résultat : formulation B ; « pas trop lourd » et « assez solide » doivent être réécrits avec un critère et un niveau.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion du projet à sa définition.",
            pairs: [
              { left: "Constat", right: "Situation observée qui pose une difficulté" },
              { left: "Besoin", right: "Ce qui manque à l'utilisateur, sans solution imposée" },
              { left: "Problème", right: "Question « Comment... ? » que l'équipe doit résoudre" },
              { left: "Cahier des charges", right: "Document qui fixe ce que l'objet doit faire et respecter" },
              { left: "Critère", right: "Ce que l'on mesure pour vérifier une exigence" },
              { left: "Niveau", right: "Valeur attendue pour un critère, avec son unité" },
            ],
          },
          quiz: [
            {
              q: "Quelle phrase exprime un besoin, sans imposer de solution ?",
              options: ["Il faut installer une LED rouge au plafond", "Il faut acheter un sonomètre numérique", "Savoir quand le bruit est trop fort", "Il faut programmer une carte micro:bit"],
              answer: 2,
              why: "Les trois autres phrases imposent déjà un objet ou un composant : ce sont des solutions.",
            },
            {
              q: "Un problème technique se formule en général :",
              options: ["par une question « Comment... ? »", "par le nom de la solution déjà choisie par l'équipe", "par le prix de l'objet", "par un croquis coté"],
              answer: 0,
              why: "Le problème est une question que l'équipe doit résoudre ; il ne doit pas contenir la solution.",
            },
            {
              q: "Dans « autonomie : au moins 4 heures », « au moins 4 heures » est :",
              options: ["le critère", "le niveau", "la fonction", "le besoin"],
              answer: 1,
              why: "Le critère est ce que l'on mesure (l'autonomie) ; le niveau est la valeur attendue (au moins 4 heures).",
            },
            {
              q: "Quelle exigence est vérifiable ?",
              options: ["Être assez léger", "Ne pas coûter trop cher", "Être joli", "Masse : au plus 500 g"],
              answer: 3,
              why: "Elle contient un critère (la masse) et un niveau chiffré (au plus 500 g) que l'on peut mesurer avec une balance.",
            },
            {
              q: "À quoi sert le cahier des charges ?",
              options: ["À fixer ce que l'objet doit faire et respecter", "À noter la note obtenue par chaque élève de l'équipe", "À dessiner l'objet en 3D", "À ranger l'atelier"],
              answer: 0,
              why: "Il rassemble la fonction principale et les contraintes ; il sert ensuite à choisir une solution et à tester le prototype.",
            },
          ],
          trap: "Écrire une solution à la place du besoin ou du problème (« il faut une LED », « comment programmer une carte ? ») : on s'enferme dans une seule idée avant même d'avoir cherché, et l'on oublie à quoi l'objet doit servir.",
          method: "Pour vérifier une exigence du cahier des charges, demandez-vous : avec quel instrument pourrais-je la contrôler (règle, balance, chronomètre, ticket de caisse) ? Si vous ne trouvez aucun instrument, l'exigence est trop vague : ajoutez un critère et un niveau chiffré.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'imaginer-solutions',
          title: 'Imaginer des solutions et les comparer',
          minutes: 30,
          objectives: [
            "Rechercher des idées de solutions en observant l'existant et en participant à un remue-méninges.",
            "Représenter une idée de solution par un croquis légendé.",
            "Comparer plusieurs solutions à l'aide d'un tableau de critères tirés du cahier des charges.",
            "Choisir une solution et justifier ce choix.",
          ],
          course: [
            {
              heading: "Chercher des idées",
              paragraphs: [
                "Une fois le problème posé, l'équipe cherche plusieurs solutions possibles, et non une seule. La première idée n'est pas toujours la meilleure : avoir le choix permet de retenir la solution la mieux adaptée au cahier des charges.",
                "On peut d'abord observer l'existant : des objets qui répondent déjà à un besoin proche, dans le commerce, dans des catalogues ou sur Internet. On peut aussi s'inspirer de la nature, c'est le biomimétisme : l'ingénieur suisse George de Mestral a imaginé la bande auto-agrippante (le Velcro) en observant les fruits de la bardane, garnis de petits crochets, accrochés à ses vêtements.",
                "Le remue-méninges (en anglais brainstorming) est une recherche d'idées en groupe. Ses règles : noter toutes les idées, même étonnantes ; ne critiquer aucune idée pendant la recherche ; viser d'abord la quantité ; rebondir sur les idées des autres pour les améliorer. Le tri vient seulement après.",
              ],
              box: { label: "Règle", text: "Remue-méninges : on note toutes les idées, on ne juge pas pendant la recherche, on cherche beaucoup d'idées et on s'appuie sur celles des autres. On trie ensuite." },
            },
            {
              heading: "Représenter une idée : le croquis",
              paragraphs: [
                "Pour partager une idée avec l'équipe, on la dessine sous forme de croquis : un dessin rapide, à main levée, qui montre l'allure générale de la solution. Il n'a pas besoin d'être beau ni parfaitement exact.",
                "Un croquis utile est légendé : on écrit le nom des principales pièces, les matériaux envisagés, quelques dimensions approximatives et, si besoin, des flèches pour indiquer un mouvement. Plusieurs croquis, un par idée, permettent ensuite de comparer les solutions côte à côte.",
              ],
            },
            {
              heading: "Comparer avec un tableau de critères",
              paragraphs: [
                "Pour choisir sans se laisser guider par ses seuls goûts, on construit un tableau de comparaison. Chaque ligne correspond à un critère du cahier des charges (coût, efficacité, facilité de réalisation, sécurité...), chaque colonne à une solution. On attribue à chaque solution une note pour chaque critère, par exemple de 0 (ne répond pas) à 3 (répond très bien), puis on additionne.",
                "Quand certains critères comptent plus que d'autres, on leur donne un coefficient : on multiplie la note par ce coefficient avant d'additionner. Le classement des solutions peut alors changer.",
              ],
              box: { label: "Méthode", text: "Tableau de comparaison : une ligne par critère, une colonne par solution, une note par case (de 0 à 3), un total par colonne. Avec coefficients : total = somme des (note × coefficient)." },
            },
            {
              heading: "Choisir et justifier",
              paragraphs: [
                "En général, on retient la solution qui obtient le meilleur total. Mais il faut d'abord vérifier qu'elle respecte les contraintes impératives du cahier des charges : une solution dangereuse ou qui dépasse le budget maximal est écartée, même si son total est élevé. On peut aussi combiner les meilleures idées de plusieurs solutions.",
                "Le choix se justifie par une phrase qui cite les critères : « Nous retenons la solution A, car elle obtient le meilleur total (11 points sur 12), qu'elle est perçue dans toute la salle et qu'elle n'ajoute pas de bruit. »",
              ],
              box: { label: "À retenir", text: "Une solution qui ne respecte pas une contrainte impérative (sécurité, budget maximal) est écartée, quelle que soit sa note totale." },
            },
          ],
          keyPoints: [
            "On cherche plusieurs solutions : observer l'existant, s'inspirer de la nature (biomimétisme), faire un remue-méninges.",
            "Remue-méninges : noter toutes les idées, ne pas juger pendant la recherche, trier ensuite.",
            "Un croquis est un dessin rapide à main levée, légendé (pièces, matériaux, dimensions).",
            "Tableau de comparaison : critères du cahier des charges en lignes, solutions en colonnes, notes et totaux.",
            "Un coefficient donne plus de poids aux critères les plus importants.",
            "On écarte une solution qui ne respecte pas une contrainte impérative, puis on justifie le choix.",
          ],
          example: {
            statement: "Pour signaler le bruit à la cantine, l'équipe compare trois solutions (notes de 0 à 3, données fictives). A, une lampe à trois couleurs : perçue dans toute la salle 3, facile à comprendre 3, coût 2, n'ajoute pas de bruit 3. B, un petit écran qui affiche un nombre : perçue 1, compréhension 2, coût 1, pas de bruit 3. C, une sirène : perçue 3, compréhension 2, coût 3, pas de bruit 0. Calculer les totaux et choisir une solution en justifiant.",
            solution: [
              "Total de A : 3 + 3 + 2 + 3 = 11 points sur 12.",
              "Total de B : 1 + 2 + 1 + 3 = 7 points sur 12.",
              "Total de C : 3 + 2 + 3 + 0 = 8 points sur 12.",
              "A obtient le meilleur total. On remarque aussi que C ajoute du bruit dans une salle déjà bruyante, ce qui va contre le but de l'objet.",
              "Réponse : on retient la solution A (11 points), car elle est perçue dans toute la salle, facile à comprendre et n'ajoute pas de bruit.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pendant un remue-méninges, dire si chaque comportement respecte les règles : a) Lina note au tableau une idée qui fait rire tout le monde. b) Hugo dit « c'est nul » dès qu'une idée est proposée. c) Maé reprend l'idée de Tom et l'améliore. d) L'équipe s'arrête dès la première idée trouvée. e) Après la recherche, l'équipe trie les idées.",
              hint: "Rappelez-vous les quatre règles : tout noter, ne pas juger pendant la recherche, chercher beaucoup d'idées, rebondir sur les idées des autres.",
              solution: [
                "a) Respecte les règles : toutes les idées sont notées, même étonnantes.",
                "b) Ne respecte pas les règles : on ne critique pas pendant la recherche.",
                "c) Respecte les règles : rebondir sur l'idée d'un autre est encouragé.",
                "d) Ne respecte pas les règles : on cherche d'abord beaucoup d'idées.",
                "e) Respecte les règles : le tri vient après la recherche.",
                "Résultat : a, c et e respectent les règles ; b et d ne les respectent pas.",
              ],
            },
            {
              level: 2,
              statement: "Une équipe conçoit un support de tablette pour la salle de classe (notes de 0 à 3, données fictives). Solution 1, en bois : stabilité 3, coût 2, facilité de réalisation 2, sécurité 3. Solution 2, en carton : stabilité 1, coût 3, facilité 3, sécurité 3. Solution 3, en métal découpé à bords vifs : stabilité 3, coût 1, facilité 1, sécurité 0. a) Calculer le total de chaque solution. b) La sécurité est une contrainte impérative : une note de 0 est éliminatoire. Quelle solution choisir ? Justifier.",
              hint: "Additionnez les quatre notes de chaque solution, puis écartez celle qui a 0 en sécurité avant de comparer les autres.",
              solution: [
                "a) Solution 1 : 3 + 2 + 2 + 3 = 10. Solution 2 : 1 + 3 + 3 + 3 = 10. Solution 3 : 3 + 1 + 1 + 0 = 5.",
                "b) La solution 3 a 0 en sécurité (bords vifs) : elle est éliminée.",
                "Les solutions 1 et 2 sont à égalité (10 points). Pour les départager, on regarde le critère le plus important pour un support de tablette : la stabilité. La solution 1 a 3, la solution 2 seulement 1.",
                "Résultat : on choisit la solution 1 en bois, à égalité de total mais nettement plus stable ; la solution 3 est écartée pour raison de sécurité.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Pour arroser les plantes de la classe pendant deux semaines de vacances, trois solutions sont notées de 0 à 3. A, une bouteille retournée dans la terre : autonomie 1, coût 3, facilité de réalisation 3, arrosage adapté à la plante 1. B, des mèches de coton reliées à un seau : autonomie 2, coût 3, facilité 3, adapté 2. C, une pompe commandée par une carte et un capteur d'humidité : autonomie 3, coût 1, facilité 1, adapté 3. a) Calculer les totaux sans coefficient. b) L'équipe donne les coefficients suivants : autonomie 3, coût 1, facilité 1, adapté 2. Calculer les totaux avec coefficients. c) Le classement change-t-il ? Pourquoi ? d) Le budget maximal est de 25 € et la solution C coûte 28 €. Quelle solution retenir ?",
              hint: "Avec coefficients, multipliez chaque note par le coefficient de son critère, puis additionnez. Pour d), une contrainte impérative passe avant le total.",
              solution: [
                "a) A : 1 + 3 + 3 + 1 = 8. B : 2 + 3 + 3 + 2 = 10. C : 3 + 1 + 1 + 3 = 8. Sans coefficient, B est en tête.",
                "b) A : 1 × 3 + 3 × 1 + 3 × 1 + 1 × 2 = 3 + 3 + 3 + 2 = 11.",
                "B : 2 × 3 + 3 × 1 + 3 × 1 + 2 × 2 = 6 + 3 + 3 + 4 = 16.",
                "C : 3 × 3 + 1 × 1 + 1 × 1 + 3 × 2 = 9 + 1 + 1 + 6 = 17.",
                "c) Oui : C passe en tête (17 contre 16). Les coefficients donnent plus de poids à l'autonomie et à l'arrosage adapté, les critères où C est la meilleure.",
                "d) C coûte 28 €, plus que le budget maximal de 25 € : elle ne respecte pas une contrainte impérative et doit être écartée (ou modifiée pour coûter moins cher). On retient alors B, deuxième avec 16 points.",
                "Résultat : 8, 10 et 8 sans coefficient ; 11, 16 et 17 avec coefficients ; à cause du budget, l'équipe retient la solution B.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : imaginer et choisir une solution.",
            statements: [
              { text: "La première idée trouvée est toujours la meilleure.", true: false, why: "Chercher plusieurs idées permet souvent d'en trouver une mieux adaptée au cahier des charges." },
              { text: "Pendant un remue-méninges, on critique chaque idée dès qu'elle est proposée.", true: false, why: "On ne juge pas pendant la recherche : la critique bloque les idées. On trie après." },
              { text: "Le biomimétisme consiste à s'inspirer de la nature pour concevoir un objet.", true: true, why: "Exemple : la bande auto-agrippante, inspirée des crochets des fruits de la bardane." },
              { text: "Un croquis doit être aussi précis qu'un plan fait à l'ordinateur.", true: false, why: "C'est un dessin rapide à main levée ; ce qui compte, ce sont les légendes." },
              { text: "Les critères du tableau de comparaison viennent du cahier des charges.", true: true, why: "On compare les solutions sur ce que l'objet doit faire et respecter." },
              { text: "Une solution dangereuse peut être choisie si son total est le plus élevé.", true: false, why: "Une contrainte impérative comme la sécurité passe avant le total : la solution est écartée." },
              { text: "Un coefficient peut changer le classement des solutions.", true: true, why: "Il donne plus de poids à certains critères ; une solution forte sur ces critères peut passer en tête." },
            ],
          },
          quiz: [
            {
              q: "Pendant un remue-méninges, il faut :",
              options: ["critiquer chaque idée aussitôt", "garder seulement la première idée", "laisser parler uniquement le chef d'équipe", "noter toutes les idées sans les juger"],
              answer: 3,
              why: "Toutes les idées sont notées sans jugement ; le tri vient seulement après la recherche.",
            },
            {
              q: "Un croquis est :",
              options: ["un plan précis fait à l'ordinateur", "un dessin à main levée, légendé", "une photo de l'objet terminé", "un tableau de comparaison"],
              answer: 1,
              why: "Le croquis est un dessin rapide qui montre l'allure de la solution, avec des légendes (pièces, matériaux, dimensions).",
            },
            {
              q: "Dans un tableau de comparaison, les critères viennent :",
              options: ["des goûts du professeur", "d'un tirage au sort", "du cahier des charges", "du prix des matériaux"],
              answer: 2,
              why: "On compare les solutions sur les exigences du cahier des charges, pour choisir objectivement.",
            },
            {
              q: "La bande auto-agrippante s'inspire des fruits de la bardane. C'est un exemple :",
              options: ["de biomimétisme", "de recyclage", "de remue-méninges", "de prototype"],
              answer: 0,
              why: "Le biomimétisme consiste à s'inspirer de la nature ; ici, des petits crochets des fruits de la bardane.",
            },
            {
              q: "Une solution a le meilleur total mais dépasse le budget maximal. Que faire ?",
              options: ["La choisir quand même, la note suffit", "Supprimer le critère du budget du tableau", "L'écarter ou la modifier", "Recommencer le projet depuis le début"],
              answer: 2,
              why: "Le budget maximal est une contrainte impérative : la solution doit être écartée ou modifiée pour la respecter.",
            },
          ],
          trap: "Choisir la solution que l'on préfère, ou la plus impressionnante, sans la comparer aux critères du cahier des charges, ou oublier d'écarter une solution qui ne respecte pas une contrainte impérative.",
          method: "Dans un tableau de comparaison, vérifiez vos totaux en recalculant chaque colonne une seconde fois ; puis, avant d'annoncer votre choix, relisez les contraintes impératives (sécurité, budget) et barrez les solutions qui ne les respectent pas.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'realiser-tester-prototype',
          title: 'Réaliser, tester et améliorer un prototype',
          minutes: 35,
          objectives: [
            "Distinguer une maquette d'un prototype.",
            "Organiser la réalisation d'un prototype en équipe en respectant les règles de sécurité.",
            "Tester un prototype selon un protocole et comparer les résultats au cahier des charges.",
            "Proposer et justifier une amélioration du prototype.",
          ],
          course: [
            {
              heading: "Maquette et prototype",
              paragraphs: [
                "Une maquette est une représentation de l'objet, souvent à échelle réduite et dans un matériau facile à travailler (carton, polystyrène). Elle sert à visualiser la forme, l'encombrement et l'aspect. Elle ne fonctionne pas forcément. À l'échelle 1/10, 1 cm sur la maquette représente 10 cm dans la réalité.",
                "Un prototype est un premier exemplaire de l'objet qui fonctionne. Il sert à vérifier que la solution choisie répond bien au cahier des charges avant de la fabriquer en plusieurs exemplaires. Pour la cantine, la maquette serait un boîtier en carton ; le prototype, le boîtier avec sa carte programmée, son microphone et ses lampes qui s'allument vraiment.",
              ],
              box: { label: "Définition", text: "Maquette : représentation de l'objet, souvent réduite, pour en voir la forme ; elle ne fonctionne pas forcément. Prototype : premier exemplaire qui fonctionne, pour tester la solution." },
            },
            {
              heading: "Organiser la réalisation",
              paragraphs: [
                "Avant de fabriquer, l'équipe dresse la liste des tâches (découper, assembler, câbler, programmer, décorer), la répartit entre ses membres et la place dans un planning, séance par séance. Elle prépare aussi la liste du matériel nécessaire, appelée nomenclature, avec les quantités.",
                "La sécurité passe avant tout : porter des lunettes de protection quand c'est demandé, n'utiliser une machine qu'avec l'autorisation et en présence du professeur, tenir les outils correctement, ne jamais relier un montage au réseau électrique de la maison (230 V) et ranger son poste à la fin de la séance.",
              ],
              box: { label: "À retenir", text: "Réaliser en équipe : liste des tâches, répartition, planning, nomenclature. Sécurité : lunettes, machines avec le professeur, outils bien tenus, poste rangé." },
            },
            {
              heading: "Tester avec un protocole",
              paragraphs: [
                "Un test vérifie un critère du cahier des charges. On écrit d'abord un protocole : ce que l'on mesure, avec quel instrument (règle, chronomètre, balance, sonomètre), dans quelles conditions et combien de fois. Exemple : « Placer un élève à 10 m du prototype, déclencher le signal et noter s'il le perçoit. Répéter avec trois élèves différents ».",
                "On note les résultats dans un tableau, puis on compare chaque mesure au niveau attendu : le critère est respecté (conforme) ou non respecté (non conforme). Pour qu'un test soit fiable, on répète la mesure plusieurs fois et on ne modifie qu'un seul élément à la fois entre deux essais.",
              ],
              box: { label: "Méthode", text: "Un test : critère à vérifier, protocole écrit, mesures répétées notées dans un tableau, comparaison au niveau attendu, conclusion conforme ou non conforme." },
            },
            {
              heading: "Améliorer, puis présenter",
              paragraphs: [
                "Si un critère n'est pas respecté, on cherche la cause, on propose une modification, on l'applique, puis on refait le test. Ce va-et-vient entre conception, réalisation et test s'appelle une itération. Il est normal : les ingénieurs construisent souvent plusieurs prototypes successifs avant d'obtenir un objet satisfaisant.",
                "À la fin du projet, l'équipe présente son travail à la classe : le besoin et le problème de départ, la solution choisie et pourquoi, le prototype, les résultats des tests et les améliorations apportées ou encore possibles. Montrer honnêtement ce qui ne fonctionne pas encore fait partie d'une bonne présentation.",
              ],
            },
          ],
          keyPoints: [
            "Maquette : représentation, souvent réduite, qui ne fonctionne pas forcément. Prototype : premier exemplaire qui fonctionne.",
            "Organiser : liste des tâches, répartition, planning, nomenclature du matériel.",
            "Sécurité : lunettes, machines avec le professeur, jamais de montage relié au 230 V.",
            "Un test vérifie un critère selon un protocole ; on répète les mesures et on compare au niveau attendu.",
            "Si le critère n'est pas respecté : chercher la cause, modifier, retester (itération).",
            "La présentation finale montre le besoin, la solution, les tests et les améliorations.",
          ],
          example: {
            statement: "Le prototype de la cantine a été testé (données fictives). Cahier des charges : signal perçu à au moins 10 m ; signal déclenché en moins de 1 s après le dépassement du seuil ; autonomie d'au moins 4 h. Résultats : signal perçu à 12 m ; déclenchement en 0,5 s ; autonomie mesurée 3 h. Conclure pour chaque critère et proposer une amélioration.",
            solution: [
              "Distance : 12 m ≥ 10 m, le critère est respecté (conforme).",
              "Temps de déclenchement : 0,5 s < 1 s, le critère est respecté (conforme).",
              "Autonomie : 3 h < 4 h, le critère n'est pas respecté (non conforme).",
              "Cause possible : la batterie est trop petite, ou les lampes consomment trop. Amélioration : utiliser une batterie de plus grande capacité, ou éteindre les lampes quand le bruit est normal.",
              "Après la modification, il faut refaire le test d'autonomie pour vérifier que l'on atteint au moins 4 h.",
              "Réponse : deux critères sur trois sont respectés ; l'autonomie doit être améliorée puis testée de nouveau.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dire s'il s'agit d'une maquette ou d'un prototype : a) un modèle en carton d'un abri à vélos, à l'échelle 1/20 ; b) un premier distributeur de croquettes pour chat, qui fonctionne, fabriqué pour être testé ; c) une voiture en pâte à modeler qui montre la forme d'un futur modèle ; d) une première version d'une lampe de bureau, avec son interrupteur et son ampoule qui s'allume.",
              hint: "Demandez-vous si l'objet fonctionne vraiment et s'il sert à tester la solution, ou seulement à en voir la forme.",
              solution: [
                "a) Le modèle en carton à échelle réduite sert à voir la forme : maquette.",
                "b) Le distributeur fonctionne et sert à être testé : prototype.",
                "c) La voiture en pâte à modeler montre seulement la forme : maquette.",
                "d) La lampe fonctionne et sert de première version à tester : prototype.",
                "Résultat : maquettes = a et c ; prototypes = b et d.",
              ],
            },
            {
              level: 2,
              statement: "Le prototype d'éclairage du local à vélos est testé (données fictives). Cahier des charges : la lumière s'allume en moins de 1 s quand un élève entre ; elle reste allumée au moins 2 min ; on peut lire un code de cadenas à 1 m de la lampe. Résultats de trois essais pour la durée d'éclairage : 1 min 50 s ; 1 min 55 s ; 1 min 50 s. Allumage en 0,3 s. Code lisible à 1 m : oui. a) Conclure pour chaque critère. b) Pourquoi a-t-on fait trois essais pour la durée ? c) Proposer une amélioration et dire ce qu'il faudra faire ensuite.",
              hint: "Convertissez les durées en secondes pour les comparer : 2 min = 120 s.",
              solution: [
                "a) Allumage : 0,3 s < 1 s, conforme. Lisibilité du code à 1 m : conforme.",
                "Durée : 1 min 50 s = 110 s et 1 min 55 s = 115 s. Les trois essais donnent moins de 120 s (2 min) : non conforme.",
                "b) Répéter la mesure rend le résultat plus fiable : un seul essai pourrait être faussé par une erreur de chronométrage. Ici, les trois essais confirment le même résultat.",
                "c) Amélioration : augmenter la durée d'allumage dans le programme, par exemple « attendre 150 secondes » au lieu de la valeur actuelle. Ensuite, il faut refaire le test de durée pour vérifier que le critère est respecté.",
                "Résultat : deux critères conformes, la durée ne l'est pas ; on modifie le programme puis on refait le test.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Le prototype d'arrosage automatique possède un réservoir de 1,5 L et arrose une fois par jour. Lors de trois essais, la pompe a délivré 118 mL, 123 mL et 119 mL par arrosage. Le cahier des charges impose une autonomie d'au moins 14 jours. a) Calculer le volume moyen d'un arrosage. b) Combien d'arrosages complets le réservoir permet-il ? Le critère est-il respecté ? c) Quel volume minimal de réservoir faudrait-il ? d) L'équipe hésite entre deux améliorations : un réservoir de 2 L, ou des arrosages de 100 mL avec le réservoir actuel. Vérifier si chacune respecte le critère et dire laquelle est la plus sûre pour les plantes.",
              hint: "1,5 L = 1 500 mL. Pour b), un arrosage commencé mais incomplet ne compte pas : on garde la partie entière du quotient.",
              solution: [
                "a) Moyenne : (118 + 123 + 119) ÷ 3 = 360 ÷ 3 = 120 mL par arrosage.",
                "b) 1 500 ÷ 120 = 12,5 : le réservoir permet 12 arrosages complets, soit 12 jours. 12 < 14 : le critère n'est pas respecté.",
                "c) Il faut au moins 14 × 120 = 1 680 mL, soit 1,68 L.",
                "d) Réservoir de 2 L : 2 000 ÷ 120 ≈ 16,7, soit 16 arrosages complets ; 16 ≥ 14, le critère est respecté.",
                "Arrosages de 100 mL : 1 500 ÷ 100 = 15 arrosages ; 15 ≥ 14, le critère est respecté aussi, mais les plantes reçoivent moins d'eau : il faudrait vérifier par un test qu'elles ne sèchent pas.",
                "La solution la plus sûre est le réservoir de 2 L : elle garde la dose de 120 mL qui convient aux plantes et laisse une marge de 2 jours. Après la modification, on refait un test.",
                "Résultat : 120 mL en moyenne ; 12 jours, non conforme ; réservoir minimal de 1,68 L ; le réservoir de 2 L est l'amélioration la plus sûre.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour tester et améliorer un prototype.",
            items: [
              "Relire le critère du cahier des charges à vérifier",
              "Écrire le protocole de test",
              "Réaliser le test et noter les mesures dans un tableau",
              "Comparer les résultats au niveau attendu",
              "Proposer une amélioration si le critère n'est pas respecté",
              "Modifier le prototype et refaire le test",
            ],
          },
          quiz: [
            {
              q: "Un prototype est :",
              options: ["un dessin à main levée", "un premier exemplaire qui fonctionne", "une maquette en carton qui ne fonctionne pas", "le dernier objet vendu"],
              answer: 1,
              why: "Le prototype est un premier exemplaire fonctionnel, fabriqué pour tester la solution avant de la produire.",
            },
            {
              q: "Quel est le but d'un test de prototype ?",
              options: ["Décorer l'objet avant de le présenter à la classe", "Choisir la couleur", "Remplir le planning", "Vérifier un critère du cahier des charges"],
              answer: 3,
              why: "Un test sert à vérifier, par une mesure ou une observation, qu'un critère du cahier des charges est respecté.",
            },
            {
              q: "On mesure une autonomie de 3 h pour un niveau exigé d'au moins 4 h. Le critère est :",
              options: ["non respecté", "respecté", "sans importance", "à moitié respecté"],
              answer: 0,
              why: "3 h est inférieur à 4 h : le niveau n'est pas atteint, le critère n'est pas respecté.",
            },
            {
              q: "Recommencer conception, réalisation et test pour améliorer un objet s'appelle :",
              options: ["la fabrication en série", "le recyclage", "l'itération", "la maquette"],
              answer: 2,
              why: "L'itération est le va-et-vient entre conception, réalisation et test, répété jusqu'à obtenir un objet satisfaisant.",
            },
            {
              q: "Pourquoi répéter une mesure plusieurs fois lors d'un test ?",
              options: ["Pour perdre moins de temps", "Pour obtenir un résultat plus fiable", "Pour avoir le temps de changer plusieurs réglages à la fois", "Pour user le prototype"],
              answer: 1,
              why: "Une seule mesure peut être faussée par une erreur ; plusieurs mesures concordantes rendent le résultat plus fiable.",
            },
          ],
          trap: "Conclure qu'un prototype « marche » parce qu'il s'allume ou bouge, sans comparer chaque mesure au niveau du cahier des charges ; ou modifier le prototype sans refaire le test pour vérifier que l'amélioration fonctionne.",
          method: "Pour chaque test, préparez un tableau à quatre colonnes avant de commencer : critère, niveau attendu, mesures obtenues, conclusion (conforme ou non conforme). Remplissez-le pendant le test, jamais de mémoire après.",
        },
      ],
    },
  ],
}
