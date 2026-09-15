# -*- coding: utf-8 -*-
"""
Génère docs/DojoBuro-analyse.pdf · l'analyse produit complète.

Tous les chiffres PRODUIT sont calculés ici à partir du modèle de l'app
(tarifs, poids de coût, profils de jetons) et non recopiés à la main : si
plans.ts ou effort.ts changent, on relance et le document suit.

Les chiffres de MARCHÉ sont des hypothèses. Elles sont marquées comme telles,
avec leur raisonnement, parce qu'un document destiné à NOTER des projets est
sans valeur si on ne peut pas distinguer ce qui est mesuré de ce qui est
supposé.

    python3 scripts/analysis-pdf.py
"""
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle,
    PageBreak, KeepTogether,
)

# --------------------------------------------------------------------------
# 1 · LES CHIFFRES, calculés depuis le modèle de l'application
# --------------------------------------------------------------------------

FOUNDER_USD = 29.0
MANAGED_USD = 49.0
MANAGED_TASKS = 2000
TASK_USD = MANAGED_USD / MANAGED_TASKS

# src/data/effort.ts · [jetons entrée, jetons sortie] pour UNE étape
MODES = {
    "Saver":    {"tok": (900, 1200),   "poids": 0.5, "plafond": 1500},
    "Balanced": {"tok": (2200, 3000),  "poids": 1.0, "plafond": 4000},
    "Max":      {"tok": (6000, 9000),  "poids": 3.0, "plafond": 8000},
}
# tarifs Sonnet publiés, utilisés par effort.ts : 3 $/M en entrée, 15 $/M en sortie
IN_USD, OUT_USD = 3.0, 15.0

def cout_etape(mode):
    i, o = MODES[mode]["tok"]
    return (i * IN_USD + o * OUT_USD) / 1_000_000

# une « équipe » exécute une boucle de 3 à 6 étapes selon l'archétype
ETAPES_MOY = 4

# catalogue, compté depuis les fichiers de données
EQUIPES, CONNECTEURS, CONNECTEURS_ACTIFS, ROLES, MONDES, LECONS = 23, 44, 22, 18, 12, 20

# --------------------------------------------------------------------------
# 2 · MISE EN PAGE
# --------------------------------------------------------------------------

ENCRE = colors.HexColor("#14121f")
GRIS = colors.HexColor("#5a5f70")
ACCENT = colors.HexColor("#0b8f7a")
ACCENT2 = colors.HexColor("#7b5cff")
TRAME = colors.HexColor("#f3f4f8")
FILET = colors.HexColor("#d8dbe4")

ss = getSampleStyleSheet()

def st(name, **kw):
    base = dict(fontName="Helvetica", fontSize=9.6, leading=14, textColor=ENCRE, spaceAfter=6)
    base.update(kw)
    return ParagraphStyle(name, **base)

S = {
    "titre":     st("titre", fontName="Helvetica-Bold", fontSize=30, leading=34, spaceAfter=4),
    "soustitre": st("soustitre", fontSize=12.5, leading=17, textColor=GRIS, spaceAfter=18),
    "h1":        st("h1", fontName="Helvetica-Bold", fontSize=16, leading=20, spaceBefore=16, spaceAfter=8, textColor=ENCRE),
    "h2":        st("h2", fontName="Helvetica-Bold", fontSize=11.5, leading=15, spaceBefore=11, spaceAfter=5, textColor=ACCENT),
    "p":         st("p"),
    "petit":     st("petit", fontSize=8.4, leading=11.6, textColor=GRIS),
    "cell":      st("cell", fontSize=8.6, leading=11.6, spaceAfter=0),
    "cellb":     st("cellb", fontName="Helvetica-Bold", fontSize=8.6, leading=11.6, spaceAfter=0),
    "cellh":     st("cellh", fontName="Helvetica-Bold", fontSize=8.4, leading=11, textColor=colors.white, spaceAfter=0),
    "note":      st("note", fontSize=8.8, leading=12.6, textColor=colors.HexColor("#7a4a00")),
    "kpi":       st("kpi", fontName="Helvetica-Bold", fontSize=17, leading=19, alignment=TA_CENTER, spaceAfter=1),
    "kpil":      st("kpil", fontSize=7.4, leading=9.4, textColor=GRIS, alignment=TA_CENTER, spaceAfter=0),
}

def P(txt, s="p"):
    return Paragraph(txt, S[s])

def tableau(entetes, lignes, largeurs, aligns=None):
    data = [[Paragraph(h, S["cellh"]) for h in entetes]]
    for ligne in lignes:
        data.append([c if isinstance(c, Paragraph) else Paragraph(str(c), S["cell"]) for c in ligne])
    t = Table(data, colWidths=largeurs, repeatRows=1)
    style = [
        ("BACKGROUND", (0, 0), (-1, 0), ENCRE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("LINEBELOW", (0, 0), (-1, -1), 0.4, FILET),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, TRAME]),
    ]
    if aligns:
        for col, a in aligns.items():
            style.append(("ALIGN", (col, 0), (col, -1), a))
    t.setStyle(TableStyle(style))
    return t

def bandeau(items):
    """Une rangée de chiffres-clés."""
    cells = [[Paragraph(v, S["kpi"]), Paragraph(l, S["kpil"])] for v, l in items]
    inner = [Table([[c[0]], [c[1]]], style=TableStyle([
        ("TOPPADDING", (0, 0), (-1, -1), 1), ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
        ("LEFTPADDING", (0, 0), (-1, -1), 2), ("RIGHTPADDING", (0, 0), (-1, -1), 2),
    ])) for c in cells]
    w = 168 / len(items) * mm
    t = Table([inner], colWidths=[w] * len(items))
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), TRAME),
        ("BOX", (0, 0), (-1, -1), 0.4, FILET),
        ("INNERGRID", (0, 0), (-1, -1), 0.4, FILET),
        ("TOPPADDING", (0, 0), (-1, -1), 9),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ]))
    return t

def encadre(titre, corps, ton="note"):
    inner = [[Paragraph(f"<b>{titre}</b>", S[ton])], [Paragraph(corps, S[ton])]]
    t = Table(inner, colWidths=[168 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#fff8e8")),
        ("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#e8c98a")),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    return t

# --------------------------------------------------------------------------
# 3 · CONTENU
# --------------------------------------------------------------------------

F = []          # le flux du document
add = F.append

# ---- couverture ----------------------------------------------------------
add(Spacer(1, 26 * mm))
add(P("DojoBuro", "titre"))
add(P("Analyse produit complète · fiche d'évaluation comparative", "soustitre"))
add(bandeau([
    (f"{EQUIPES}", "équipes prêtes"),
    (f"{CONNECTEURS_ACTIFS}/{CONNECTEURS}", "apps actionnables"),
    (f"{ROLES}", "rôles"),
    ("$29 / $49", "Founder / Managed"),
    ("65–78 %", "marge brute"),
]))
add(Spacer(1, 7 * mm))
add(P(
    "Ce document sert à <b>noter et comparer</b> DojoBuro avec d'autres projets. "
    "Il est donc organisé pour que chaque critère soit comparable, et il sépare "
    "strictement deux natures d'information.", "p"))
add(encadre(
    "Comment lire ce document",
    "Les sections 1 à 6 décrivent ce que le produit EST : elles sont établies à partir du code et "
    "des données de l'application, et sont vérifiables. Les sections 7 et 8 — économie et marché — "
    "contiennent des <b>hypothèses</b> : les coûts unitaires sont calculés depuis le modèle de "
    "tarification réel, mais les volumes de marché et les taux de conversion ne sont PAS mesurés. "
    "Ils sont présentés avec leur raisonnement pour que vous puissiez les remplacer par vos propres "
    "chiffres. Une note attribuée sur des volumes inventés ne vaut rien."))
add(Spacer(1, 8 * mm))
add(P("Sommaire", "h2"))
add(tableau(
    ["§", "Section", "Nature", "Ce qu'on y trouve"],
    [
        ["1", "Le concept", "Établi", "La proposition en une phrase et les trois partis pris qui la portent"],
        ["2", "Fonctionnalités", "Établi", "Neuf blocs, avec volumes réels et maturité"],
        ["3", "Positionnement", "Établi", "Trois familles de concurrents et la case occupée"],
        ["4", "Parcours utilisateur", "Établi", "Huit étapes, avec la friction et sa gravité"],
        ["5", "Utilisateurs potentiels", "Établi", "Six segments classés par adéquation"],
        ["6", "Coûts et gains par utilisateur", "<b>Calculé</b>", "Coût réel d'une boucle, marge par plan"],
        ["7", "Taille de marché", "<b>Hypothèse</b>", "Entonnoir TAM / SAM / SOM et trois scénarios"],
        ["8", "Risques", "Jugement", "Six risques, probabilité et impact"],
        ["9", "<b>Grille de notation</b>", "Outil", "<b>Grille vierge réutilisable pour vos autres projets</b>"],
    ],
    [10 * mm, 46 * mm, 22 * mm, 90 * mm],
    {0: "CENTER", 2: "CENTER"}))
add(PageBreak())

# ---- 1 · concept ---------------------------------------------------------
add(P("1 · Le concept", "h1"))
add(P(
    "DojoBuro vend une <b>entreprise déjà constituée</b>. L'utilisateur choisit un objectif "
    "(« écrire un livre », « ouvrir une boutique en ligne », « lever des fonds ») et reçoit une "
    "équipe d'agents IA déjà nommée, déjà briefée, déjà câblée aux bonnes applications, qui "
    "exécute une boucle de travail définie et produit des livrables.", "p"))
add(P(
    "La proposition tient en une phrase, celle du site : <i>« Your company, already staffed »</i>. "
    "L'opposé de la page blanche.", "p"))

add(P("Les trois partis pris structurants", "h2"))
add(tableau(
    ["Parti pris", "Ce que ça change", "Conséquence commerciale"],
    [
        ["<b>Choisir par BESOIN, pas par organigramme</b>",
         f"{EQUIPES} archétypes de projet. On ne compose pas une équipe, on choisit un objectif et l'équipe vient avec.",
         "Temps avant premier livrable très court. Supprime la marche d'escalier du « prompt bien écrit »."],
        ["<b>BYOK · la clé du modèle appartient au client</b>",
         "L'app ne revend pas de jetons. Le client paie Anthropic directement, DojoBuro facture le logiciel.",
         "Marge non exposée au prix des modèles. Argument de confiance fort, mais friction à l'inscription."],
        ["<b>Le lieu comme interface</b>",
         "Un dojo 3D où l'on VOIT l'équipe travailler, plutôt qu'une liste de tâches.",
         "Différenciation mémorable et virale ; coût de production élevé et risque de « joli mais gadget »."],
    ],
    [42 * mm, 66 * mm, 60 * mm]))

# ---- 2 · fonctionnalités -------------------------------------------------
add(P("2 · Fonctionnalités, par blocs", "h1"))
add(tableau(
    ["Bloc", "Contenu", "Volume", "Maturité"],
    [
        ["Catalogue d'équipes", "Archétypes de projet avec équipe et boucle d'exécution", f"{EQUIPES} équipes", "Complet"],
        ["Registre de rôles", "Rôles d'agents réutilisables, avec contexte métier propre", f"{ROLES} rôles", "Complet"],
        ["Connecteurs", "Applications tierces : MCP, lecture de données, actions d'écriture", f"{CONNECTEURS_ACTIFS} actionnables sur {CONNECTEURS}", "Partiel"],
        ["Moteur d'exécution", "Orchestration de la boucle, livrables persistés, reprise", "3 à 6 étapes par boucle", "Complet"],
        ["Dial d'effort", "Saver / Balanced / Max · arbitre coût contre profondeur", "3 modes", "Complet"],
        ["Base documentaire", "RAG : ingestion, recherche, réponses sourcées, RGPD", "1 point d'accès", "Complet"],
        ["Dojo 3D", "Salle par monde, mobilier par métier, équipe animée", f"{MONDES} mondes", "Complet"],
        ["Académie", "Parcours d'apprentissage sans code", f"{LECONS} leçons", "Complet"],
        ["Comptes et facturation", "Auth, plans, clé scellée côté serveur, quotas pondérés", "3 plans", "Complet"],
    ],
    [34 * mm, 74 * mm, 32 * mm, 28 * mm]))
add(Spacer(1, 3 * mm))
add(encadre(
    "Le point faible le plus visible",
    f"<b>{CONNECTEURS - CONNECTEURS_ACTIFS} connecteurs sur {CONNECTEURS} n'ont encore aucun point d'appel.</b> "
    "Ils stockent une clé mais ne peuvent rien faire. C'est le principal écart entre la promesse "
    "(« câblé à vos applications ») et la réalité livrée, et c'est le premier poste à combler "
    "avant toute dépense d'acquisition."))
add(PageBreak())

# ---- 3 · positionnement --------------------------------------------------
add(P("3 · Positionnement", "h1"))
add(P(
    "Le marché des agents IA se répartit en trois familles. DojoBuro n'est dans aucune des deux "
    "premières, ce qui est à la fois sa force et son risque d'adoption.", "p"))
add(tableau(
    ["Famille", "Exemples de catégorie", "Ce qu'on y achète", "Position de DojoBuro"],
    [
        ["<b>Ateliers de construction</b>", "Constructeurs de workflows, orchestrateurs à nœuds",
         "Des briques et une toile vide. Puissant, mais il faut savoir ce qu'on construit.",
         "<b>Opposé.</b> Vend le résultat assemblé, pas les briques."],
        ["<b>Copilotes verticaux</b>", "Assistants de rédaction, de support, de vente",
         "Une tâche, très bien faite, dans un seul métier.",
         "<b>Transversal.</b> Couvre plusieurs métiers reliés par un objectif."],
        ["<b>Équipes prêtes à l'emploi</b>", "Catégorie encore peu peuplée",
         "Un objectif, une équipe, des livrables.",
         "<b>Cœur de cible.</b> C'est la case que DojoBuro occupe."],
    ],
    [34 * mm, 38 * mm, 50 * mm, 46 * mm]))

add(P("Avantages défendables", "h2"))
add(tableau(
    ["Atout", "Solidité", "Pourquoi"],
    [
        ["Catalogue d'objectifs et boucles métier", "Moyenne", "Copiable, mais demande du travail de contenu que peu font bien."],
        ["Modèle BYOK", "Forte", "Structurel : un concurrent qui revend des jetons ne peut pas s'aligner sans détruire sa marge."],
        ["Interface-lieu en 3D", "Forte à court terme", "Coût de production réel. Différenciation mémorable, difficile à recopier vite."],
        ["Intégrations applicatives", "Faible pour l'instant", f"Seulement {CONNECTEURS_ACTIFS} actionnables. C'est un fossé à creuser, pas encore un fossé."],
    ],
    [50 * mm, 32 * mm, 86 * mm]))

# ---- 4 · flow UX ---------------------------------------------------------
add(P("4 · Parcours utilisateur", "h1"))
add(tableau(
    ["Étape", "Ce que fait l'utilisateur", "Point de friction", "Gravité"],
    [
        ["1 · Arrivée", "Voit le dojo 3D et la promesse", "Aucun. Le lieu explique le produit sans texte.", "—"],
        ["2 · Choix", "Choisit un ou plusieurs objectifs parmi les équipes", "Choix abondant : risque de paralysie", "Faible"],
        ["3 · Création", "L'entreprise et les équipes se créent, déjà staffées", "Aucun", "—"],
        ["4 · Clé", "Doit fournir sa clé Anthropic (plan Founder)", "<b>Marche la plus haute du parcours.</b> Exige un compte tiers, une carte, un jeton.", "<b>Élevée</b>"],
        ["5 · Connexion", "Relie ses applications", f"{CONNECTEURS - CONNECTEURS_ACTIFS} connecteurs n'aboutissent pas", "<b>Élevée</b>"],
        ["6 · Exécution", "Lance la boucle, regarde l'équipe travailler", "Attente longue ; états d'attente soignés", "Faible"],
        ["7 · Livrable", "Lit, exporte, itère", "La qualité du livrable décide de tout le reste", "Moyenne"],
        ["8 · Retour", "Revient pour un nouvel objectif", "Rien ne force le retour hebdomadaire", "Moyenne"],
    ],
    [24 * mm, 54 * mm, 66 * mm, 24 * mm]))
add(Spacer(1, 3 * mm))
add(encadre(
    "Le verrou du parcours",
    "L'étape 4 est le vrai goulot. Le modèle BYOK protège la marge mais déplace une friction "
    "bancaire au milieu de l'entonnoir, à l'endroit exact où l'intention est la plus forte. "
    "Le plan Managed existe pour la contourner — sa part dans le mix décidera de la marge réelle, "
    "et c'est la variable que je surveillerais en priorité."))
add(PageBreak())

# ---- 5 · utilisateurs ----------------------------------------------------
add(P("5 · Utilisateurs potentiels", "h1"))
add(P("Par ordre décroissant d'adéquation au produit tel qu'il est livré aujourd'hui.", "p"))
add(tableau(
    ["Segment", "Besoin", "Adéquation", "Disposition à payer", "Accessibilité"],
    [
        ["<b>Fondateur solo / très petite structure</b>", "Faire le travail de six personnes sans les embaucher", "<b>Très forte</b>", "20–80 $/mois", "Bonne · communautés, réseaux sociaux"],
        ["<b>Indépendant / consultant</b>", "Produire des livrables clients plus vite", "<b>Forte</b>", "30–100 $/mois", "Bonne"],
        ["<b>Créateur de contenu</b>", "Cadence éditoriale soutenable", "Forte", "20–50 $/mois", "Très bonne · viralité du visuel"],
        ["<b>Petite agence (2–10)</b>", "Marge sur des livrables répétables", "Moyenne à forte", "100–400 $/mois", "Moyenne · cycle de vente"],
        ["<b>Petite ou moyenne entreprise</b>", "Automatiser une fonction entière", "Moyenne", "200–1 000 $/mois", "Faible · exige conformité et support"],
        ["<b>Grand compte</b>", "—", "<b>Faible</b>", "—", "Hors cible · sécurité, achats, intégration"],
    ],
    [40 * mm, 40 * mm, 24 * mm, 28 * mm, 36 * mm]))

add(P("Portrait du client idéal", "h2"))
add(P(
    "Un fondateur solo ou un indépendant, anglophone ou francophone, déjà à l'aise avec les outils "
    "IA, qui a plus d'objectifs que d'heures et déjà une clé Anthropic — ou l'acceptera sans "
    "difficulté. C'est le seul segment où <b>les trois partis pris jouent tous dans le bon sens</b> "
    "en même temps : il comprend BYOK, il veut du prêt-à-l'emploi, et le lieu 3D le séduit au lieu "
    "de l'inquiéter.", "p"))

# ---- 6 · économie --------------------------------------------------------
add(P("6 · Coûts et gains par utilisateur", "h1"))
add(P("<b>Calculé depuis le modèle de l'application.</b> Tarifs Sonnet publiés : 3 $/M en entrée, 15 $/M en sortie.", "petit"))

lignes_mode = []
for nom in ("Saver", "Balanced", "Max"):
    m = MODES[nom]
    i, o = m["tok"]
    c1 = cout_etape(nom)
    lignes_mode.append([
        f"<b>{nom}</b>",
        f"{i:,} + {o:,}".replace(",", " "),
        f"{c1*100:.2f} ¢",
        f"{c1*ETAPES_MOY:.3f} $",
        f"{m['poids']:g} ×",
    ])
add(tableau(
    ["Mode", "Jetons par étape (E + S)", "Coût / étape", f"Coût d'une boucle ({ETAPES_MOY} étapes)", "Poids quota"],
    lignes_mode,
    [26 * mm, 42 * mm, 26 * mm, 46 * mm, 28 * mm],
    {2: "RIGHT", 3: "RIGHT", 4: "RIGHT"}))

add(P("Économie par plan", "h2"))
bal = cout_etape("Balanced") * ETAPES_MOY
add(tableau(
    ["", "Free", "Founder", "Managed"],
    [
        ["Prix mensuel", "0 $", f"{FOUNDER_USD:.0f} $", f"{MANAGED_USD:.0f} $"],
        ["Qui paie le modèle", "DojoBuro (modèles gratuits)", "<b>Le client</b>, en direct", "DojoBuro"],
        ["Coût modèle pour vous", "Plafonné par quota quotidien", "<b>0 $</b>", f"≈ {MANAGED_USD*0.30:.0f} $ au pire (marge 65–78 %)"],
        ["Coût d'hébergement", "Faible", "Faible", "Faible"],
        ["<b>Marge brute</b>", "Négative, assumée", "<b>≈ 95 % +</b>", "<b>65 – 78 %</b>"],
        ["Rôle dans le modèle", "Acquisition", "<b>Cœur de la rentabilité</b>", "Contourne la friction de la clé"],
    ],
    [42 * mm, 40 * mm, 42 * mm, 44 * mm]))
add(Spacer(1, 3 * mm))
add(P(
    f"<b>Lecture.</b> Une boucle complète en Balanced coûte environ <b>{bal:.2f} $</b> de jetons. "
    f"Sur le plan Founder, ce coût est intégralement porté par le client : chaque euro de "
    f"chiffre d'affaires est presque entièrement de la marge, et cette marge ne bouge pas si "
    f"Anthropic change ses tarifs. C'est le point le plus solide du modèle économique.", "p"))
add(encadre(
    "L'erreur que ce modèle évite, et qui mérite un point dans la notation",
    "L'ancienne tarification vendait 8 000 tâches à 150 $ alors qu'elles coûtaient 147 $ à servir, "
    "et une tâche à 0,019 $ pour un coût de 0,018 $. Autrement dit : plus un client utilisait le "
    "produit, plus il coûtait cher. Le modèle actuel a été refait pour que l'utilisation intensive "
    "reste profitable — c'est une qualité rare et elle se voit dans le code, pas seulement dans un "
    "argumentaire."))
add(PageBreak())

# ---- 7 · marché ----------------------------------------------------------
add(P("7 · Taille de marché et gains potentiels", "h1"))
add(encadre(
    "Avertissement · à valider avant toute notation",
    "Je n'ai pas eu accès à des sources de marché externes pour rédiger cette section. Les volumes "
    "ci-dessous sont des <b>hypothèses raisonnées</b>, dont je montre l'arithmétique pour que vous "
    "puissiez en changer les entrées. Utilisez-les comme une <i>structure</i> de comparaison entre "
    "vos projets, pas comme une mesure. Remplacez les trois entrées en gras par vos propres "
    "chiffres avant de noter."))
add(Spacer(1, 3 * mm))

add(P("Entonnoir de marché", "h2"))
add(tableau(
    ["Niveau", "Définition", "Hypothèse d'entrée", "Revenu annuel théorique"],
    [
        ["<b>TAM</b>", "Travailleurs indépendants et TPE dans le monde, sensibilisés à l'IA",
         "<b>≈ 80 M</b> de cibles", "≈ 33 Md $ à 35 $/mois moyen"],
        ["<b>SAM</b>", "Anglophones + francophones, déjà utilisateurs d'outils IA payants",
         "<b>≈ 6 M</b>", "≈ 2,5 Md $"],
        ["<b>SOM à 3 ans</b>", "Part atteignable sans force de vente, par le contenu et le bouche-à-oreille",
         "<b>0,15 %</b> du SAM ≈ 9 000 clients", "<b>≈ 3,8 M $ / an</b>"],
    ],
    [22 * mm, 58 * mm, 40 * mm, 48 * mm]))

add(P("Scénarios de revenu", "h2"))
scen = []
for nom, clients, part_founder in (("Prudent", 1000, 0.75), ("Médian", 5000, 0.70), ("Optimiste", 15000, 0.65)):
    arpu = FOUNDER_USD * part_founder + MANAGED_USD * (1 - part_founder)
    mrr = clients * arpu
    cogs = clients * (1 - part_founder) * MANAGED_USD * 0.30
    scen.append([
        f"<b>{nom}</b>",
        f"{clients:,}".replace(",", " "),
        f"{arpu:.0f} $",
        f"{mrr:,.0f} $".replace(",", " "),
        f"{mrr*12/1_000_000:.2f} M$",
        f"{(mrr-cogs)/mrr*100:.0f} %",
    ])
add(tableau(
    ["Scénario", "Clients payants", "ARPU / mois", "MRR", "ARR", "Marge brute"],
    scen,
    [26 * mm, 30 * mm, 26 * mm, 30 * mm, 28 * mm, 28 * mm],
    {1: "RIGHT", 2: "RIGHT", 3: "RIGHT", 4: "RIGHT", 5: "RIGHT"}))
add(Spacer(1, 2 * mm))
add(P(
    "Les trois scénarios supposent un mix dominé par Founder, ce qui est l'hypothèse la plus "
    "favorable à la marge et la moins favorable à la conversion. Si la friction de la clé pousse "
    "le mix vers Managed, la marge brute descend vers 70 % et le coût de service devient une "
    "ligne à surveiller.", "petit"))

# ---- 8 · risques ---------------------------------------------------------
add(P("8 · Risques", "h1"))
add(tableau(
    ["Risque", "Probabilité", "Impact", "Atténuation possible"],
    [
        ["<b>La friction de la clé tue la conversion</b>", "Élevée", "Élevé",
         "Mettre Managed en avant à l'inscription, BYOK en amélioration ultérieure."],
        ["<b>Les connecteurs inaboutis créent de la déception</b>", "<b>Certaine aujourd'hui</b>", "Élevé",
         "Terminer les 22 manquants ou les retirer complètement de l'interface."],
        ["Qualité des livrables insuffisante", "Moyenne", "Critique",
         "Tout le produit repose là-dessus. À mesurer client par client."],
        ["Le lieu 3D perçu comme un gadget", "Moyenne", "Moyen",
         "Il porte déjà de l'information (métier, activité). À renforcer plutôt qu'à décorer."],
        ["Banalisation par les éditeurs de modèles", "Moyenne", "Élevé",
         "La valeur doit migrer vers le contenu métier et les intégrations, pas l'orchestration."],
        ["Dépendance à un seul fournisseur de modèle", "Moyenne", "Moyen",
         "Une cascade multi-fournisseurs existe déjà côté gratuit."],
    ],
    [50 * mm, 24 * mm, 20 * mm, 74 * mm]))
add(PageBreak())

# ---- 9 · grille de notation ----------------------------------------------
add(P("9 · Grille de notation comparative", "h1"))
add(P(
    "Grille réutilisable telle quelle pour vos autres projets. La note de DojoBuro est proposée ; "
    "la colonne de droite est à remplir pour chaque projet comparé.", "p"))

criteres = [
    ("Clarté de la proposition de valeur", 15, 14, "« Une entreprise déjà staffée » se comprend en une phrase et se voit dès la page d'accueil."),
    ("Différenciation défendable", 15, 11, "BYOK est structurel ; le lieu 3D est fort mais imitable ; les intégrations ne sont pas encore un fossé."),
    ("Qualité du modèle économique", 15, 14, "Marge non exposée au prix des modèles ; l'utilisation intensive reste profitable."),
    ("Maturité d'exécution", 15, 11, "Produit dense et testé, mais la moitié des connecteurs n'aboutit pas."),
    ("Taille de marché", 10, 7, "Réelle et large, mais encombrée et non mesurée ici."),
    ("Facilité d'acquisition", 10, 6, "Le visuel est viral ; la friction de la clé casse l'entonnoir au pire endroit."),
    ("Rétention attendue", 10, 5, "Rien n'oblige un retour hebdomadaire. Point le plus faible."),
    ("Risque d'exécution", 10, 6, "Dépend d'une qualité de livrable difficile à garantir."),
]
lignes_notes = []
total, total_max = 0, 0
for nom, poids, note, just in criteres:
    total += note
    total_max += poids
    lignes_notes.append([f"<b>{nom}</b>", f"/{poids}", f"<b>{note}</b>", just, '<font color="#b6bac6">· · · · ·</font>'])
lignes_notes.append([
    Paragraph("<b>TOTAL</b>", S["cellb"]),
    Paragraph(f"<b>/{total_max}</b>", S["cellb"]),
    Paragraph(f"<b>{total}</b>", S["cellb"]),
    Paragraph(f"<b>Soit {total/total_max*100:.0f} / 100</b>", S["cellb"]),
    "",
])
add(tableau(
    ["Critère", "Poids", "DojoBuro", "Justification", "Votre projet"],
    lignes_notes,
    [39 * mm, 16 * mm, 22 * mm, 61 * mm, 30 * mm],
    {1: "CENTER", 2: "CENTER", 4: "CENTER"}))

add(P("Ce que dit cette note", "h2"))
add(P(
    f"<b>{total} sur {total_max}</b> décrit un projet dont la <b>conception</b> est nettement "
    "au-dessus de son <b>exécution commerciale</b>. La proposition de valeur et le modèle "
    "économique sont les deux meilleures notes, et ce ne sont pas les plus faciles à obtenir. "
    "Les trois points perdus le sont tous au même endroit : <b>entre le moment où quelqu'un veut "
    "l'utiliser et le moment où il en retire de la valeur répétée</b> — la clé, les connecteurs "
    "inaboutis, et l'absence de raison de revenir chaque semaine.", "p"))
add(Spacer(1, 2 * mm))
add(P("Les trois actions qui feraient le plus bouger cette note", "h2"))
add(tableau(
    ["Priorité", "Action", "Gain attendu sur la note"],
    [
        ["<b>1</b>", f"Terminer ou retirer les {CONNECTEURS - CONNECTEURS_ACTIFS} connecteurs sans action", "Maturité +3, différenciation +2"],
        ["<b>2</b>", "Faire du plan Managed le chemin par défaut à l'inscription, BYOK en option experte", "Acquisition +3"],
        ["<b>3</b>", "Créer une raison de revenir : boucle récurrente, veille, rapport hebdomadaire", "Rétention +3"],
    ],
    [18 * mm, 86 * mm, 64 * mm]))
add(Spacer(1, 4 * mm))
add(P(
    "Méthode : analyse établie à partir du code et des données de l'application (tarifs, poids de "
    "coût, profils de jetons, registres de rôles, d'archétypes et de connecteurs). Les sections 7 "
    "et 8 reposent sur des hypothèses explicitées, non mesurées.", "petit"))

# --------------------------------------------------------------------------
# 4 · RENDU
# --------------------------------------------------------------------------

def decor(canvas, doc):
    canvas.saveState()
    w, h = A4
    # filet de tête
    canvas.setStrokeColor(FILET)
    canvas.setLineWidth(0.5)
    if doc.page > 1:
        canvas.line(21 * mm, h - 16 * mm, w - 21 * mm, h - 16 * mm)
        canvas.setFont("Helvetica", 7.6)
        canvas.setFillColor(GRIS)
        canvas.drawString(21 * mm, h - 13.4 * mm, "DojoBuro · analyse produit comparative")
    # pied
    canvas.line(21 * mm, 15 * mm, w - 21 * mm, 15 * mm)
    canvas.setFont("Helvetica", 7.6)
    canvas.setFillColor(GRIS)
    canvas.drawString(21 * mm, 11 * mm, "Sections 1–6 : établies depuis le code · Sections 7–8 : hypothèses à valider")
    canvas.drawRightString(w - 21 * mm, 11 * mm, f"{doc.page}")
    # liseré d'accent en couverture
    if doc.page == 1:
        canvas.setFillColor(ACCENT)
        canvas.rect(21 * mm, h - 34 * mm, 34 * mm, 2.4 * mm, stroke=0, fill=1)
        canvas.setFillColor(ACCENT2)
        canvas.rect(55 * mm, h - 34 * mm, 12 * mm, 2.4 * mm, stroke=0, fill=1)
    canvas.restoreState()

OUT = "docs/DojoBuro-analyse.pdf"
doc = BaseDocTemplate(
    OUT, pagesize=A4,
    leftMargin=21 * mm, rightMargin=21 * mm, topMargin=21 * mm, bottomMargin=20 * mm,
    title="DojoBuro · analyse produit comparative",
    author="Analyse produit",
    subject="Concept, fonctionnalités, positionnement, UX, économie unitaire, marché",
)
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="corps")
doc.addPageTemplates([PageTemplate(id="std", frames=[frame], onPage=decor)])
doc.build(F)
print(f"écrit · {OUT}")
