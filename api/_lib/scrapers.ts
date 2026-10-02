// L'ANTI-ASPIRATION · demandé : « Vérifie la cyber sécurité et l'anti hacking
// et scraping de données ».
//
// Ce fichier ne prétend pas arrêter un aspirateur déterminé : un navigateur
// piloté, avec un en-tête User-Agent recopié, passe. Il arrête les outils
// d'aspiration ordinaires, qui annoncent ce qu'ils sont, et c'est l'essentiel
// du trafic de ce genre. Le reste est tenu par les limites de débit (par
// minute ET par heure, voir api/community.ts) et par ce qu'on n'expose pas à
// un visiteur anonyme (l'annuaire complet des membres).
//
// Ne s'applique qu'aux LECTURES PUBLIQUES et au robot d'aide : les webhooks
// Stripe et les appels authentifiés ont leurs propres preuves (signature,
// jeton), et un User-Agent n'y ajouterait rien.

/** Les signatures des clients automatisés courants · bibliothèques HTTP,
 *  aspirateurs, navigateurs sans tête qui s'annoncent comme tels. */
const AUTOMATED = /\b(curl|wget|python-requests|python-urllib|aiohttp|httpx|scrapy|go-http-client|okhttp|java\/|libwww-perl|httpclient|axios|node-fetch|undici|headlesschrome|phantomjs|selenium|puppeteer|playwright|crawler|spider|scraper|httrack|nutch|petalbot|bytespider|semrushbot|ahrefsbot|dataforseobot|mj12bot)\b/i

/** Ce client s'annonce-t-il comme un automate, ou ne s'annonce-t-il pas ? */
export function isAutomatedClient(userAgent: string | null | undefined): boolean {
  const ua = String(userAgent || '').trim()
  if (ua.length < 12) return true
  return AUTOMATED.test(ua)
}
