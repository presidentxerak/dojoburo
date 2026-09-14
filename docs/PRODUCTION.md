# Ce qui marche, ce qui ne marche pas, et ce qui le décide

Écrit après un audit mené sur la question « est-ce que tout est fonctionnel en
production ». Le résumé honnête : **le code tient ; ce qui décide du reste est la
configuration du déploiement, et elle n'était documentée nulle part en un seul
endroit.**

Tout ce qui est affirmé ici est produit par un script qu'on peut relancer. Un
document peut dater ; `npm run verify` ne date pas.

---

## 1 · Les trois variables qui décident de tout

| Sans elle | Ce qui se passe vraiment |
|---|---|
| Aucune clé de modèle | **Aucun agent ne travaille.** Chaque run répond `needs_key`, et l'app rend un brouillon local honnêtement étiqueté. C'est le cas d'un déploiement neuf. |
| `DATABASE_URL` + `CONNECTOR_ENC_KEY` | Rien n'est partagé ni scellé : pas de compte, pas d'application reliée, pas de synchronisation. Tout reste dans le navigateur. Les endpoints répondent `no_backend` — proprement, sans jamais prétendre avoir enregistré quoi que ce soit. |
| `<APP>_CLIENT_ID` + `<APP>_CLIENT_SECRET` | L'application concernée affiche « needs setup ». Voir `docs/CONNECTORS.md` pour la liste ordonnée. |

**La clé de modèle est la seule dont l'absence casse la fonction centrale.** Il en
faut une parmi : `GEMINI_API_KEY`, `GROQ_API_KEY`, `CEREBRAS_API_KEY`,
`OPENROUTER_API_KEY` (la cascade libre), ou `ANTHROPIC_API_KEY` avec
`WORK_OPERATOR_CLAUDE`, ou la clé personnelle que chaque fondateur colle.

---

## 2 · Ce qui a été éprouvé, et comment

| Question | Réponse | Ce qui la produit |
|---|---|---|
| Un endpoint peut-il lever, pendre, ou rendre autre chose que du JSON ? | Non · 15 endpoints × entrées hostiles, sans configuration | `npm run test:endpoints` |
| Un endpoint peut-il dire « réussi » sans base ? | Non · 10 écritures vérifiées | idem |
| Un écran peut-il rester bloqué si l'API ne répond **jamais** ? | Non · 15 surfaces × 2 pannes | `npm run verify:api` |
| Une erreur JavaScript peut-elle vider un panneau ? | Aucune sur les 15 surfaces | idem |
| L'app survit-elle sans `localStorage` (Safari privé) ? | Oui · aucune erreur, toutes les pages rendent | `scripts/audit-mobile.mjs` |
| La page s'affiche-t-elle si Google Fonts ne répond jamais ? | Oui · 266 ms, en police système | `npm run verify:api` |
| Le SDK d'authentification (2,2 Mo) est-il sur le chemin critique ? | Non · chargé seulement à la connexion | mesuré au navigateur |
| Les 48 URLs du plan de site répondent-elles ? | Oui · et une adresse inconnue dit « App not found » | `curl` sur le sitemap |
| Le mobile tient-il en 390 px, dans les deux thèmes ? | Oui · rien hors écran, rien d'illisible | `npm run verify:mobile` |
| La politique de sécurité refuse-t-elle du code du site ? | Non · cinq pages servies avec l'en-tête réel | `npm run verify:csp` |
| Le thème est-il posé avant le premier pixel, CSP comprise ? | Oui · clair et sombre | idem |

---

## 3 · Ce que cet audit a trouvé et corrigé

Par ordre de gravité pour l'utilisateur.

**0 · La correction de thème livrée hier ne s'appliquait PAS en production, et
la correction de police que j'allais livrer aurait retiré au site toute sa
typographie.** Les deux pour la même raison, et c'est la trouvaille la plus
instructive de l'audit.

`vercel.json` déclare `script-src 'self'` **sans** `'unsafe-inline'`. Un
`<script>` écrit dans la page et un attribut `onload="…"` sont donc refusés par
le navigateur — **en silence**, sans erreur visible, sans rien casser d'évident.
Le thème n'était pas posé avant le premier pixel (la page basculait en blanc au
chargement), et la feuille de police serait restée en `media="print"`, c'est-à-
dire jamais appliquée.

Mesuré, pas supposé : servi avec la CSP réelle, `data-theme` valait `null` et
`media` valait `print`. Le code est maintenant dans `public/boot.js`, servi
depuis la même origine — la seule différence, et celle qui décide s'il tourne.

**Pourquoi personne ne l'a vu : aucune épreuve du dossier ne voyait la CSP.**
`vite preview` ne l'envoie pas, elle vit dans `vercel.json`, et les seize
épreuves tournaient donc sur un site plus permissif que le vrai. `npm run
verify:csp` sert maintenant `dist/` avec l'en-tête exact et vérifie qu'aucune
règle n'est violée sur cinq pages, que le thème est posé avant le rendu, et que
la police finit par s'appliquer.

**1 · Un run d'agent était coupé au bout de 25 secondes.** L'échéance client posée
la veille valait 25 s pour tous les endpoints ; `agent-run` dispose de 60 s de
budget serveur, dont 45 pour un seul fournisseur de modèle, et l'écran annonce
lui-même « environ une minute ». Le navigateur tuait donc la plupart des runs.
Un garde-fou contre les blocages qui tue le travail légitime est pire que le
blocage qu'il prévient. L'échéance suit maintenant le budget de chaque endpoint,
et une épreuve lit les deux et échoue s'ils divergent.

**2 · Un seul document trop gros arrêtait toute la synchronisation.** Il restait
en tête de file, la boucle s'arrêtait dessus sans le retirer, et tout ce qui
était derrière ne partait plus jamais — pendant que l'écran annonçait « cette
entreprise ne vit que dans ce navigateur », c'est-à-dire la phrase qu'on dit
quand il n'y a pas de serveur du tout. Le document est maintenant sorti de la
file, nommé à l'écran, et le reste continue de partir.

**3 · Quatre appels réseau sans échéance.** L'assistant, la recherche de domaine,
le catalogue de polices, la synthèse vocale. Tous attrapaient soigneusement les
erreurs — et un `catch` ne se déclenche jamais sur une requête qui pend. Le repli
écrit juste en dessous n'avait aucune occasion de s'exécuter.

**4 · La limite de corps de `agent-run` était sous le pire cas légitime.** 8 000
caractères, alors que dix-huit règles permanentes plus quatre agents MCP externes
avec des jetons JWT en font 10 708. Le run échouait pour quelqu'un qui n'avait
fait qu'utiliser le produit. L'épreuve recalcule ce pire cas depuis les
constantes du client.

**5 · Trente-trois brouillons sur trente-huit portaient un identifiant technique
en titre** — « jd », « brand-platform ». Un titre qui est un identifiant se lit
comme une fuite de code.

**6 · Deux codes d'erreur s'affichaient tels quels** : « That didn't go through:
rate » et « auth ». Ce sont les deux qu'un utilisateur normal rencontre.

**7 · La page restait blanche si Google Fonts ne répondait pas.** Une feuille de
style distante est bloquante au rendu : tant qu'elle n'arrive pas, le navigateur
ne peint rien. Tant que Google répond vite, cela ne se voit jamais — et le jour
où il ne répond pas (pare-feu d'entreprise, pays qui le filtre, réseau qui avale
la requête sans la refuser), le visiteur regarde une page vide jusqu'à ce que le
navigateur abandonne.

Je l'ai mesuré par accident : le proxy de la machine d'essai fait exactement
cela. **12 901 ms de page blanche.** La feuille sortie du chemin critique, le
même scénario donne **266 ms**, avec la police système en attendant. Quarante-
huit fois.

C'est le seul défaut de la liste que je n'aurais jamais trouvé en cherchant : il
s'est présenté parce que l'outil était cassé de la bonne façon. Et ma première
correction — un attribut `onload` — était elle-même refusée par la politique de
sécurité : voir le point 0.

---

## 4 · La faille de méthode, qui explique les autres

**Quatorze épreuves navigateur existaient. Aucune n'était dans la chaîne de
compilation.** Elles ne tournaient que si quelqu'un y pensait — et les trois gros
défauts de la semaine sont tous passés devant sans être vus.

Pire : en les armant, trois d'entre elles se sont révélées **incapables
d'échouer**.

| Épreuve | Ce qu'elle faisait | Ce qu'elle fait maintenant |
|---|---|---|
| `verify-full` | 33 contrôles sur tout le parcours — landing, bureau, agent, studio, compte, facturation, paiement, thème, widget, mobile — enregistrés et imprimés, jamais conclus | chaque `false` compte, le script sort en erreur |
| `verify-bricks` | imprimait des chiffres | chaque chiffre est devenu la chose qui doit être vraie |
| `verify-visual` | imprimait ✓ / ✗ sans rien compter ; l'un des cinq était `ok(true, …)`, une tautologie | compte les échecs, et mesure vraiment le contraste qu'elle prétendait regarder |

Soixante-huit vérifications qui existaient et ne gardaient rien. C'est la
réponse la plus complète à « pourquoi ces défauts sont-ils passés » : la
barrière était là, elle n'était pas branchée, et trois de ses barreaux étaient
peints sur le mur.

La raison était réelle : elles ont besoin d'un serveur qui sert le site compilé,
et `npm run build` ne peut pas en lever un au milieu de lui-même.
`npm run verify` le fait maintenant : il lève le serveur, lance les dix-sept
épreuves avec une échéance chacune, l'éteint, et rend un compte rendu — y compris
un avertissement pour toute épreuve qui passe au vert **sans vérifier quoi que ce
soit**, qui est la façon dont une barrière meurt sans qu'on s'en aperçoive.

    npm run build     # les épreuves sans navigateur · rapide, bloquante
    npm run verify    # les dix-sept épreuves navigateur · avant chaque mise en ligne

---

## 5 · Deux choses trouvées, laissées en l'état, et pourquoi

**Votre adresse personnelle est dans le bundle public.**
`src/config/admin.ts` contient `presidentxerak@gmail.com` en clair, et il part
dans deux fichiers JavaScript servis à tout le monde.

Ce n'est **pas** un contournement d'authentification, et c'est vérifié : le
client ne s'en sert que pour afficher ou masquer des boutons. Le serveur décide
seul, depuis sa propre variable `ADMIN_EMAILS` et l'e-mail vérifié en base
(`accountIsAdmin`), et l'autorisation d'écriture passe par le rôle dans
l'organisation, pas par cette liste. Le vrai coût est l'exposition de l'adresse
aux robots.

Le retirer proprement demande que le client cesse de savoir QUI est
administrateur pour ne savoir que SI le compte courant l'est — donc un drapeau
rendu par le serveur, et deux écrans à recâbler. Je ne l'ai pas fait en fin
d'audit : une erreur à cet endroit ferait disparaître vos propres commandes
d'administration sans que rien ne le signale. À faire, mais posément.

**Trente-et-une vulnérabilités dans les dépendances, dont trois en gravité
haute** — `axios`, `ws`, `socket.io-parser`, toutes transitives via le SDK
d'authentification. Le passage de Privy 3.33.1 à 3.42.0 (fait ici, compilation
et épreuves vertes) en a fait tomber cinq sur huit. Les trois qui restent ne
peuvent être corrigées que par Privy : aucune version publiée ne les résout
aujourd'hui. Elles vivent dans le navigateur du visiteur, pas sur le serveur.

## 6 · Ce que je n'ai pas pu vérifier d'ici, et qui reste à vous

- **Le site en ligne.** Tout ci-dessus tourne sur le site compilé servi
  localement. Le comportement du code est le même ; la configuration ne l'est
  pas.
- **Les API des fournisseurs.** Le proxy de ce bac à sable les bloque toutes, et
  répond même à ma place pour GitHub. Aucun format de clé tierce n'a donc été
  vérifié, et aucune sonde n'a été ajoutée sur cette base.
- **Safari lui-même.** Les épreuves tournent sur Chromium en émulation iPhone.
- **Le temps de chargement réel.** Cette machine n'a pas de carte graphique : la
  scène 3D y est rendue par le processeur, ce qui rend toute mesure de rapidité
  inutilisable. Ce qui est mesurable sans matériel — le poids à télécharger
  avant le premier mot — vaut **951 Ko** (l'entrée plus React ; la 3D arrive
  après, elle est déjà différée). À 1,6 Mb/s cela fait environ cinq secondes de
  transfert. C'est perfectible, ce n'est pas cassé, et je n'ai pas voulu
  entreprendre ce découpage en fin d'audit.

---

## 7 · Une leçon de méthode, puisqu'elle a failli me coûter une fausse conclusion

Deux fois pendant cet audit j'ai failli affirmer quelque chose de faux.

La première : j'ai mesuré douze secondes avant le premier mot et j'ai commencé à
accuser la 3D. En la bloquant pour vérifier, c'est devenu PIRE — donc ce n'était
pas elle. La vraie cause était la feuille de style distante, et je ne l'aurais
pas trouvée en continuant à raisonner.

La seconde : une épreuve a échoué dans la barrière alors qu'elle passait seule.
Mes propres scripts de mesure faisaient tourner un navigateur en parallèle et
l'affamaient. Un résultat obtenu sous contention ne prouve rien — ni dans un
sens, ni dans l'autre.

Dans les deux cas, ce qui a tranché est une contre-épreuve, pas un raisonnement.

Et la troisième, la plus utile : **j'ai vérifié mon propre correctif contre la
configuration réelle avant de le livrer**, et il ne marchait pas. Le thème
d'hier ne s'appliquait pas en production ; la correction de police aurait retiré
sa typographie au site entier. Les deux passaient toutes les épreuves — parce
qu'aucune ne servait la page avec la politique de sécurité du vrai site.

La leçon n'est pas « faire attention ». C'est que **la machine d'essai doit
ressembler à la production sur ce qui peut refuser du code**, sans quoi elle
certifie un site qui n'existe pas.

Le premier contrôle à faire sur le site en ligne est dans
`docs/PROD-CHECKLIST.md`, section 4.
