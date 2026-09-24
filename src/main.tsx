import { StrictMode, Suspense, lazy, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Landing } from './Landing'
import { AuthProvider } from './auth/AuthProvider'
import { handleConnectReturn, onConnectResult, takeConnectResult } from './lib/connectReturn'

// The product, behind the beta door.
//
// These four were eager, so every visitor to the marketing site — and every
// crawler reading a job-title page — downloaded the whole dojo before any text
// appeared, to reach a screen the door would not have let them through anyway.
// They are the only routes below the gate, which makes them exactly the right
// seam to split on.
const App = lazy(() => import('./App'))
const WidgetApp = lazy(() => import('./WidgetApp').then((m) => ({ default: m.WidgetApp })))
const StudioPage = lazy(() => import('./components/workshop/WorkshopModal').then((m) => ({ default: m.StudioPage })))
const ConnectorsPage = lazy(() => import('./components/ConnectorsPage').then((m) => ({ default: m.ConnectorsPage })))
const DocumentsPage = lazy(() => import('./components/DocumentsPage').then((m) => ({ default: m.DocumentsPage })))
import { Terms, Privacy } from './LegalPage'
import { GuidePage, ConnectorGuidePage } from './DojoGuide'
import { AcademyHome, TrackPage, LessonPage } from './academy/Academy'
import { FrugalityPage } from './frugality/Frugality'
// LES DEUX COURS DE DESIGN · une seule page, deux contenus. Voir l'en-tête de
// design/DesignCoursePage pour la raison : deux composants jumeaux divergent.
import { DesignCoursePage } from './design/DesignCoursePage'
import { DESIGN_COURSE, FIGMA_COURSE } from './data/designCourses'
import { BuildAgentPage } from './dojo/BuildAgent'
import { FrameworksPage } from './dojo/Frameworks'
import { TeammatePage, TeammatesPage, isTeammateSlug } from './TeammatePage'
import { usePath, useHashAnchor } from './lib/router'
// LE JEU · c'est lui qui répond à « / » désormais. Voir game/Dojos.
import { DojosPage } from './game/Dojos'
import { PackPage } from './game/PackPage'
// NOMMÉE AUTREMENT ICI · « LessonPage » est déjà le nom de la leçon de
// l'académie, importée plus haut. Deux choses différentes sous le même nom
// dans la même portée est la façon la plus discrète de casser une page.
import { LessonPage as DojoLesson } from './game/Lesson'
import { ClanPage } from './game/Clan'
import { PACK_OF_MODULE, packPath, lessonPath, FREE_PACK } from './data/packs'
import { ProfilPage } from './game/Profil'
import { CartePage } from './game/Carte'
import { TarifsPage, MerciPage } from './game/Tarifs'
import { Boundary } from './components/Boundary'
import { AccessGate, betaUnlocked } from './components/AccessGate'
// LA POLICE EST SERVIE PAR NOUS, PAS PAR GOOGLE.
// Une seule famille pour toute l'app, Outfit, demandée explicitement (« change
// la typo en Outfit ») à la place de la police de jeu Lilita One. Elle venait
// des polices Google, chargées hors du chemin critique par public/boot.js ; si
// elles n'arrivaient pas, le texte tombait en police système et les titres
// perdaient leur graisse. Elle est donc embarquée dans le paquet (licence OFL),
// en version variable · un seul fichier pour toutes les graisses, de 400 à 900
// · servie depuis notre origine, que la politique de sécurité accepte déjà
// (« font-src 'self' »).
import '@fontsource-variable/outfit/index.css'
import './index.css'

// Route ephemeral Vercel preview URLs (which change every deploy and aren't in
// Privy's allowed-origins) to the canonical production domain, so auth and
// everything else always run on the origin where they're configured. No-op on
// the real domain and on localhost.
const CANONICAL_HOST = 'www.dojoburo.com'
if (location.hostname.endsWith('.vercel.app')) {
  location.replace(`https://${CANONICAL_HOST}${location.pathname}${location.search}${location.hash}`)
}

/* ------------------------------------------------------------------ */
/* CE QUI EST UNE ROUTE, ET CE QUI EST UNE ANCRE                       */
/*                                                                      */
/* Le fragment servait à DEUX choses à la fois : il nommait une vue de  */
/* l'application (#app, #studio) et il servait d'ancre dans la page     */
/* d'accueil (#pricing, #cost, #courses). Rien ne distinguait les deux, */
/* donc `route` valait « pricing » et la page tombait dans la branche   */
/* de l'application : un visiteur qui cliquait « Tarifs » arrivait sur  */
/* la porte du beta privé, sur la page publique, depuis la navigation   */
/* principale.                                                          */
/*                                                                      */
/* LA LISTE EST FERMÉE, et c'est le point. Un fragment inconnu est une  */
/* ancre : ajouter une ancre à la page d'accueil ne peut donc plus      */
/* avaler la page, et ajouter une vue d'application demande une ligne   */
/* ici, ce qui est une décision et se relit.                            */
/* ------------------------------------------------------------------ */

const APP_ROUTES = new Set(['app', 'widget', 'academy', 'guide', 'studio', 'connect', 'documents'])

/** Ce fragment désigne-t-il une vue de l'application ? Une invitation
 *  `#join=<jeton>` en est une : elle arrive froide et doit atterrir dans
 *  l'application, où le jeton se consomme. */
export const isAppRoute = (r: string) => APP_ROUTES.has(r) || r.startsWith('join=')

/** L'ancienne adresse vers la nouvelle, ou rien · calculée depuis les données,
 *  donc une cité ajoutée demain se redirige toute seule. */
function legacyTarget(path: string): string | null {
  if (path === '/7-jours') return packPath(FREE_PACK.id)
  if (path === '/formation' || path === '/metier') return '/'
  const tm = path.match(/^\/metier\/([a-z0-9-]+)$/i)
  if (tm) return `/dojo/metier-${tm[1].toLowerCase()}`
  const fm = path.match(/^\/formation\/([a-z0-9-]+)(?:\/([a-z0-9-]+))?$/i)
  if (fm) {
    const packId = PACK_OF_MODULE[fm[1].toLowerCase()]
    if (!packId) return '/'
    return fm[2] ? lessonPath(packId, fm[2].toLowerCase()) : packPath(packId)
  }
  return null
}

/** Elle REMPLACE l'entrée dans l'historique · sans cela, le bouton retour
 *  renverrait sur l'ancienne adresse, qui redirigerait à nouveau, et on ne
 *  pourrait plus jamais revenir en arrière. */
function Redirect({ to }: { to: string }) {
  useEffect(() => { history.replaceState(null, '', to); window.dispatchEvent(new PopStateEvent('popstate')) }, [to])
  return null
}

function Root() {
  // The private beta gate. It closes the PRODUCT, not the website.
  //
  // It used to sit above every route, which quietly cost us the thing the
  // Academy and the teammate pages exist for: a crawler that runs JavaScript —
  // Googlebot does — saw a password prompt where the prerendered HTML had a
  // page, so twenty-six lessons and seventeen job titles were published and
  // unindexable at the same time. Worse, the two versions disagreed, which is
  // the shape of cloaking whether or not you meant it.
  //
  // "Private beta" means nobody can USE it yet. It never meant nobody can read
  // what it is. So the marketing surface below — landing, teammates, Academy,
  // guide, terms, privacy — is open, and the door is in front of the app.
  const [open, setOpen] = useState(() => betaUnlocked())
  const [route, setRoute] = useState(() => location.hash.replace(/^#\/?/, ''))
  useEffect(() => {
    const on = () => setRoute(location.hash.replace(/^#\/?/, ''))
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  // path-based pages (served via the SPA fallback in vercel.json). These are
  // real URLs because they are meant to be found, linked and shared — the
  // Academy in particular is the front door for anyone searching how agents
  // work, so every lesson has to be its own address.
  const path = usePath()
  // L'ANCRE, une fois la page rendue · voir useHashAnchor.
  useHashAnchor()

  // ---- LE JEU · c'est la racine du produit ---------------------------------
  //
  // ON ARRIVE DANS LE JEU, PAS DEVANT UNE BROCHURE. La page de vente existe
  // toujours, sur /decouvrir, pour qui veut lire avant d'essayer ; elle n'est
  // simplement plus le péage. C'est le changement le plus important de ce lot :
  // il fallait traverser neuf sections pour atteindre sept minutes de cours.
  //
  // ---------------------------------------------------------------------------
  // MAIS « / » NE MANGE PAS LES FRAGMENTS DE L'APPLICATION, et c'est ce que
  // cette condition rattrape.
  //
  // Sans elle, la ligne était `if (path === '/') return <DojosPage />`, posée
  // AVANT tout le routage par fragment · or l'application entière vit sur des
  // fragments de la racine : #app, #studio, #connect, #documents, #academy,
  // #guide, #widget. Le chemin valant « / » dans tous ces cas, la ligne partait
  // la première et rendait le jeu. Le studio, les agents, les coéquipiers, les
  // connecteurs et la base documentaire étaient devenus INATTEIGNABLES · pas
  // cassés, pas lents : absents, sans une erreur nulle part.
  //
  // LE CAS LE PLUS COÛTEUX EST L'INVITATION. Un lien `#join=<jeton>` arrive
  // froid, par courriel, chez quelqu'un qui n'a jamais ouvert ce produit. Il
  // atterrissait sur l'écran des formations, le jeton n'était jamais consommé,
  // et rien ne disait qu'une invitation venait d'être perdue.
  //
  // COMMENT ÇA A TENU DEUX COMMITS · la construction réussit, le typecheck est
  // vert, la page s'affiche, et l'écran qui s'affiche est un écran qui marche.
  // Aucune des trente-huit épreuves du portail n'avait été relancée depuis, et
  // c'est le portail qui l'a trouvé dès qu'il l'a été · huit suites d'un coup.
  //
  // La liste des fragments d'application est fermée et vit à un seul endroit
  // (APP_ROUTES, plus haut), donc cette condition ne peut pas diverger d'elle :
  // ajouter une vue demande une ligne là-haut, et elle est protégée ici sans
  // que personne ait à y penser.
  if (path === '/' && !isAppRoute(route)) return <DojosPage />
  if (path === '/clan') return <ClanPage />
  if (path === '/profil') return <ProfilPage />
  // LA CARTE · plein écran, sans coquille ni barre du bas. Voir game/Carte.
  if (path === '/carte') return <CartePage />
  // LES TARIFS ET LE RETOUR DE PAIEMENT · dans le jeu, pas sur l'ancienne page
  // de présentation. Voir game/Tarifs.
  if (path === '/tarifs') return <TarifsPage />
  if (path === '/merci') return <MerciPage />
  const pk = path.match(/^\/dojo\/([a-z0-9-]+)$/i)
  if (pk) return <PackPage packId={pk[1].toLowerCase()} />
  const ls = path.match(/^\/dojo\/([a-z0-9-]+)\/([a-z0-9-]+)$/i)
  if (ls) return <DojoLesson packId={ls[1].toLowerCase()} levelId={ls[2].toLowerCase()} />
  // LA BROCHURE · elle garde toutes ses ancres, elle change juste d'adresse.
  if (path === '/decouvrir') return <Landing enter={() => { location.hash = 'app' }} />

  // ---- public · no gate ----------------------------------------------------
  if (path === '/terms') return <Terms />
  if (path === '/privacy') return <Privacy />
  if (path === '/academy') return <AcademyHome />
  const am = path.match(/^\/academy\/([a-z0-9-]+)(?:\/([a-z0-9-]+))?$/i)
  if (am) return am[2]
    ? <LessonPage trackSlug={am[1].toLowerCase()} lessonSlug={am[2].toLowerCase()} />
    : <TrackPage slug={am[1].toLowerCase()} />
  // LA BIBLIOTHÈQUE A ÉTÉ RETIRÉE · elle vendait des fichiers à l'unité, ce
  // qui était l'ancien modèle. Les fichiers sont maintenant les ressources des
  // modules, et ils se téléchargent depuis le module qui les enseigne, là où
  // ils ont un sens. Les anciennes adresses sont redirigées dans vercel.json
  // plutôt que de rendre 404 : elles sont indexées.
  // LA SOBRIÉTÉ · une page, pas une ancre. Elle porte un outil interactif et
  // l'encart entreprise ; les deux ont besoin d'une adresse à eux.
  // LE DOJO COMME SALLE DE CLASSE · on y arrive, le maître accueille, et on
  // choisit lequel des douze agents on veut apprendre à construire.
  // LES ANCIENNES ADRESSES DU JEU · elles menaient à une seconde navigation
  // vers exactement le même contenu (carte de la vallée → cité → dojo). Deux
  // chemins vers une même leçon, c'est la complexité qu'on vient de retirer, et
  // c'est aussi deux endroits où l'accès pouvait diverger.
  //
  // Elles sont REDIRIGÉES et non supprimées : elles étaient dans le plan du
  // site et partagées. La correspondance se calcule depuis les données plutôt
  // que d'être écrite dans vercel.json, parce qu'une cité ne sait pas à quelle
  // formation elle appartient sans les lire.
  const legacy = legacyTarget(path)
  if (legacy) return <Redirect to={legacy} />

  if (path === '/build') return <BuildAgentPage />
  const bm = path.match(/^\/build\/([a-z0-9-]+)$/i)
  if (bm) return <BuildAgentPage slug={bm[1].toLowerCase()} />
  // OÙ FAIRE TOURNER L'AGENT · la dernière marche du premier cours, et celle
  // que personne n'enseigne. Le parcours se terminait sur un fichier et un
  // silence.
  if (path === '/frameworks') return <FrameworksPage />
  if (path === '/frugality') return <FrugalityPage />
  if (path === '/design') return <DesignCoursePage course={DESIGN_COURSE} />
  if (path === '/figma') return <DesignCoursePage course={FIGMA_COURSE} />
  if (path === '/guide') return <GuidePage />
  const gm = path.match(/^\/guide\/([a-z0-9-]+)$/i)
  if (gm) return <ConnectorGuidePage id={gm[1].toLowerCase()} />
  // the job-title pages · /ai-marketing-manager and the rest, plus their hub
  if (path === '/teammates') return <TeammatesPage />
  const slug = path.replace(/^\//, '').toLowerCase()
  if (isTeammateSlug(slug)) return <TeammatePage slug={slug} />
  // The landing is a marketing page and is read without the code. Its call to
  // action sets #app, which is where the door actually is — you can read what
  // Dojoburo does, and you need the code to use it.
  // UN FRAGMENT QUI N'EST PAS UNE ROUTE EST UNE ANCRE · la page d'accueil est
  // rendue, et c'est elle qui fait défiler jusqu'à la section. Le test était
  // `!route`, donc n'importe quelle ancre passait pour une vue.
  // UNE ANCRE QUI N'EST PAS UNE VUE RENVOIE AU JEU · la brochure a son
  // adresse à elle maintenant, donc « / » ne lui appartient plus.
  if (!isAppRoute(route)) return <DojosPage />

  // ---- the product · gated -------------------------------------------------
  if (!open) return <AccessGate onOpen={() => setOpen(true)} />
  // Everything past the door is a lazy chunk, so each of these is wrapped once
  // here rather than four times below. The fallback is deliberately plain: the
  // dojo takes a moment to arrive and a spinner that looks like the app would
  // be a worse lie than a line of text.
  const gated = (node: React.ReactNode) => (
    <Suspense fallback={<div className="boot-wait">Opening your dojo…</div>}>{node}</Suspense>
  )
  // standalone always-on-top widget window (Tauri desktop) · no auth chrome
  if (route === 'widget') return gated(<WidgetApp />)
  // An invitation link is `#join=<token>`, and it arrives cold — the person
  // clicking it has never opened this app. It has to land in the app, because
  // that is where the token is redeemed; falling through to the landing page
  // would drop the invitation on the floor and tell them nothing.
  if (route === 'app' || route.startsWith('join=')) return gated(<App />)
  // Dojo Academy · opened from inside the app · stays in the dojo environment
  // (dojo header + Back-to-dojo) instead of the landing page.
  if (route === 'academy') return <AcademyHome inApp />
  // Dojo Guide · the per-app setup pages, opened from inside the dojo.
  if (route === 'guide') return <GuidePage inApp />
  // Dojo Studio · full page (build dojos, tune agents, account & billing).
  if (route === 'studio') return gated(<StudioPage />)
  // Connect apps · full page, every connector grouped by functionality category.
  if (route === 'connect') return gated(<ConnectorsPage />)
  // Documents · la base documentaire de l'entreprise, en pleine page.
  if (route === 'documents') return gated(<DocumentsPage />)
  return <DojosPage />
}

// Le retour d'une autorisation, AVANT tout rendu.
//
// Cette page est alors la fenêtre d'autorisation : elle prévient la fenêtre qui
// l'a ouverte et se ferme. Rendre l'app entre-temps ferait clignoter la page
// d'accueil dans une fenêtre sur le point de disparaître — et, dans le chemin
// sans fenêtre fille, chargerait un écran qu'on quitte aussitôt.
if (handleConnectReturn()) {
  // rien à rendre · la fenêtre se ferme ou l'adresse vient de changer
} else {
  // Côté fenêtre MÈRE · le résultat de l'autorisation, d'où qu'il vienne.
  //
  // Ici plutôt que dans App : on connecte une application aussi bien depuis la
  // page « Connect apps », qui est sa propre route et où App n'est pas monté.
  // L'écouteur y serait absent, la carte resterait sur « Connect » et il aurait
  // fallu recharger la page pour voir qu'elle avait marché.
  //
  // Ce qui compte est loadTools() : sans lui l'app propose encore de connecter
  // une application qui vient de l'être, et on recommence en croyant avoir raté.
  // Les magasins sont chargés À LA DEMANDE : les importer en tête de ce fichier
  // les ferait descendre par chaque visiteur du site vitrine, qui n'a ni dojo ni
  // application à connecter. C'est la séparation que ce fichier existe à tenir.
  const announce = async (r: { ok: boolean; detail: string }) => {
    const [{ useDojo }, { useWork }, { CONNECTOR_BY_ID }] = await Promise.all([
      import('./store'), import('./agents/workStore'), import('./data/connectors'),
    ])
    if (r.ok) {
      void useWork.getState().loadTools()
      useDojo.getState().pushToast({
        kind: 'event', badge: 'OK', color: '#2fae6a',
        title: 'App connected',
        text: `${CONNECTOR_BY_ID[r.detail]?.label ?? r.detail} is linked to your agents.`,
      })
    } else {
      useDojo.getState().pushToast({
        kind: 'event', badge: '!', color: '#d9822b',
        title: 'Connection failed', text: r.detail,
      })
    }
  }
  const pending = takeConnectResult()
  if (pending) void announce(pending)
  onConnectResult((r) => void announce(r))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Boundary what="DojoBuro">
      <AuthProvider>
        <Root />
      </AuthProvider>
    </Boundary>
  </StrictMode>,
)
}

// Self-healing after deploys. The old caching service worker could serve stale
// module chunks, blanking panels. We (a) let the kill-switch sw.js remove any
// existing service worker + wipe caches, (b) reload once when the controller
// changes, and (c) reload once if a lazy chunk fails to load (stale cache) so
// the user always ends up on fresh files. All guards prevent reload loops.
// Build stamp · so we can confirm which version is actually running.
declare const __BUILD_ID__: string
try {
  const build = __BUILD_ID__
  ;(window as unknown as { __DOJOBURO_BUILD__: string }).__DOJOBURO_BUILD__ = build
  console.log('%cDojoBuro · build ' + build + ' · modules bundled', 'font-weight:bold;color:#7b5cff')
  document.documentElement.setAttribute('data-build', build)
} catch { /* ignore */ }

if ('serviceWorker' in navigator) {
  // Kill any previously-registered service worker AND wipe its caches. Older
  // builds shipped a caching SW that served stale bundles after a deploy,
  // leaving panels blank. We unregister every SW and delete every Cache Storage
  // entry so the app is always served fresh from the network.
  navigator.serviceWorker.getRegistrations?.().then(async (regs) => {
    let hadSW = false
    for (const r of regs) { hadSW = true; try { await r.unregister() } catch { /* */ } }
    try {
      if ('caches' in self) {
        const keys = await caches.keys()
        await Promise.all(keys.map((k) => caches.delete(k)))
      }
    } catch { /* */ }
    // If we just removed a controlling SW, reload once so this page is served
    // straight from the network instead of the SW's stale cache.
    if (hadSW && navigator.serviceWorker.controller) {
      try {
        if (sessionStorage.getItem('dj_sw_reload') !== '1') {
          sessionStorage.setItem('dj_sw_reload', '1')
          location.reload()
        }
      } catch { /* */ }
    }
  }).catch(() => { /* */ })
}

// If a dynamically-imported module chunk fails (usually a stale cache after a
// deploy), reload once to fetch the current chunks.
window.addEventListener('vite:preloadError', () => {
  try {
    if (sessionStorage.getItem('dj_chunk_reload') === '1') return
    sessionStorage.setItem('dj_chunk_reload', '1')
    location.reload()
  } catch { location.reload() }
})

