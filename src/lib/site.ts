// Website engine · 100% local. A site is an ordered list of section blocks,
// each rendered to semantic HTML that references the Brand Kit's CSS variables.
// The same blockHtml() feeds both the live iframe preview and the exported
// standalone .html file — so what you see is exactly what you export. No server.
import { idbGet, idbSet } from './idb'
import { type BrandKit, defaultKit, kitCss } from './brand'

export type BlockType = 'hero' | 'features' | 'pricing' | 'cta' | 'form' | 'text' | 'gallery' | 'footer'
export interface Block { id: string; type: BlockType; props: Record<string, unknown> }
export interface SiteDoc { name: string; blocks: Block[]; updatedAt: number }

const uid = () => `b_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`
const esc = (s: unknown) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// ---- block catalog (defaults + label) --------------------------------------
export const BLOCK_LABELS: Record<BlockType, string> = {
  hero: 'Hero', features: 'Points forts', pricing: 'Tarifs', cta: 'Appel à l’action',
  form: 'Formulaire', text: 'Texte', gallery: 'Galerie', footer: 'Pied de page',
}
export const BLOCK_ORDER: BlockType[] = ['hero', 'features', 'pricing', 'cta', 'form', 'text', 'gallery', 'footer']

export function makeBlock(type: BlockType, name = 'Ma marque'): Block {
  const P: Record<BlockType, Record<string, unknown>> = {
    hero: { title: name, subtitle: 'La solution qui change tout pour vos clients.', cta: 'Commencer' },
    features: { title: 'Pourquoi nous choisir', items: [
      { title: 'Rapide', desc: 'Mise en route en quelques minutes.' },
      { title: 'Fiable', desc: 'Une qualité constante, à chaque fois.' },
      { title: 'Sur-mesure', desc: 'Adapté à votre activité.' },
    ] },
    pricing: { title: 'Nos offres', tiers: [
      { name: 'Starter', price: '0€', features: ['L’essentiel', 'Support email'] },
      { name: 'Pro', price: '29€', features: ['Tout Starter', 'Fonctions avancées', 'Support prioritaire'] },
      { name: 'Business', price: '99€', features: ['Tout Pro', 'Accompagnement dédié'] },
    ] },
    cta: { title: 'Prêt à démarrer ?', subtitle: 'Rejoignez-nous dès aujourd’hui.', cta: 'Créer un compte' },
    form: { title: 'Contactez-nous', subtitle: 'On vous répond sous 24h.', button: 'Envoyer' },
    text: { heading: 'À propos', body: 'Décrivez ici votre activité, votre histoire et ce qui vous rend unique.' },
    gallery: { title: 'Galerie', count: 6 },
    footer: { text: `© ${name}`, links: ['Accueil', 'Tarifs', 'Contact'] },
  }
  return { id: uid(), type, props: P[type] }
}

/** The AI first version (generated locally, instantly) from the company name. */
export function generateSite(name: string): SiteDoc {
  const order: BlockType[] = ['hero', 'features', 'pricing', 'cta', 'footer']
  return { name, blocks: order.map((t) => makeBlock(t, name)), updatedAt: Date.now() }
}

// ---- immutable path get/set (supports 'items.0.title', 'tiers.1.name') ------
export function getPath(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((o, k) => (o == null ? o : (o as Record<string, unknown>)[k]), obj)
}
export function setPath<T>(obj: T, path: string, value: unknown): T {
  const keys = path.split('.')
  const clone = Array.isArray(obj) ? [...(obj as unknown[])] : { ...(obj as Record<string, unknown>) }
  let cur: any = clone
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i]
    cur[k] = Array.isArray(cur[k]) ? [...cur[k]] : { ...cur[k] }
    cur = cur[k]
  }
  cur[keys[keys.length - 1]] = value
  return clone as T
}

// ---- render one block to HTML ---------------------------------------------
export function blockHtml(b: Block): string {
  const p = b.props
  switch (b.type) {
    case 'hero':
      return `<section class="b b-hero"><h1>${esc(p.title)}</h1><p>${esc(p.subtitle)}</p><a class="btn" href="#">${esc(p.cta)}</a></section>`
    case 'features': {
      const items = (p.items as { title: string; desc: string }[]) || []
      return `<section class="b b-features"><h2>${esc(p.title)}</h2><div class="grid">${items.map((it) => `<div class="card"><h3>${esc(it.title)}</h3><p>${esc(it.desc)}</p></div>`).join('')}</div></section>`
    }
    case 'pricing': {
      const tiers = (p.tiers as { name: string; price: string; features: string[] }[]) || []
      return `<section class="b b-pricing"><h2>${esc(p.title)}</h2><div class="grid">${tiers.map((t, i) => `<div class="tier${i === 1 ? ' feat' : ''}"><h3>${esc(t.name)}</h3><div class="price">${esc(t.price)}</div><ul>${(t.features || []).map((f) => `<li>${esc(f)}</li>`).join('')}</ul><a class="btn" href="#">Choisir</a></div>`).join('')}</div></section>`
    }
    case 'cta':
      return `<section class="b b-cta"><h2>${esc(p.title)}</h2><p>${esc(p.subtitle)}</p><a class="btn" href="#">${esc(p.cta)}</a></section>`
    case 'form':
      return `<section class="b b-form"><h2>${esc(p.title)}</h2><p>${esc(p.subtitle)}</p><div class="formx"><input placeholder="Votre nom"/><input placeholder="Votre email" type="email"/><textarea placeholder="Votre message"></textarea><button class="btn" type="button">${esc(p.button)}</button></div></section>`
    case 'text':
      return `<section class="b b-text"><h2>${esc(p.heading)}</h2><p>${esc(p.body)}</p></section>`
    case 'gallery': {
      const n = Math.max(1, Math.min(12, Number(p.count) || 6))
      return `<section class="b b-gallery"><h2>${esc(p.title)}</h2><div class="grid">${Array.from({ length: n }).map((_, i) => `<div class="ph" style="--i:${i}"></div>`).join('')}</div></section>`
    }
    case 'footer': {
      const links = (p.links as string[]) || []
      return `<footer class="b b-footer"><nav>${links.map((l) => `<a href="#">${esc(l)}</a>`).join('')}</nav><span>${esc(p.text)}</span></footer>`
    }
    default:
      return ''
  }
}

// ---- base site CSS (uses Brand Kit variables) ------------------------------
const SITE_CSS = `
*{box-sizing:border-box}body{margin:0;font-family:var(--brand-body,system-ui);color:var(--brand-ink,#111);background:var(--brand-bg,#fff);line-height:1.55}
.b{padding:64px 24px;max-width:1080px;margin:0 auto}
h1,h2,h3{font-family:var(--brand-heading,inherit);margin:0 0 12px}
h1{font-size:44px}h2{font-size:30px;text-align:center}
.btn{display:inline-block;background:var(--brand-accent,#3355ff);color:#fff;text-decoration:none;padding:12px 22px;border-radius:10px;font-weight:700;border:none;cursor:pointer}
.b-hero{text-align:center;padding:96px 24px;background:linear-gradient(135deg,var(--brand-primary,#5b6)15%,var(--brand-accent,#39c));color:#fff;max-width:none}
.b-hero h1{color:#fff}.b-hero p{font-size:19px;opacity:.92;max-width:620px;margin:0 auto 24px}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:24px}
.card{background:#fff;border:1px solid #0001;border-radius:14px;padding:22px;box-shadow:0 6px 18px #0000000d}
.card h3{color:var(--brand-primary,#333)}
.tier{background:#fff;border:1px solid #0001;border-radius:14px;padding:24px;text-align:center;box-shadow:0 6px 18px #0000000d}
.tier.feat{border:2px solid var(--brand-accent,#39c);transform:scale(1.03)}
.tier .price{font-size:34px;font-weight:800;color:var(--brand-primary,#333);margin:6px 0 12px}
.tier ul{list-style:none;padding:0;margin:0 0 18px;text-align:left}.tier li{padding:6px 0;border-bottom:1px solid #0000000d}
.b-cta{text-align:center;background:var(--brand-primary,#222);color:#fff;border-radius:0;max-width:none}
.b-cta h2,.b-cta p{color:#fff}
.b-form .formx{display:flex;flex-direction:column;gap:10px;max-width:460px;margin:18px auto 0}
.b-form input,.b-form textarea{padding:12px;border:1px solid #0002;border-radius:10px;font:inherit}
.b-text{max-width:720px;text-align:center}
.b-gallery .ph{aspect-ratio:1;border-radius:12px;background:linear-gradient(135deg,var(--brand-primary,#889),var(--brand-accent,#39c));opacity:calc(.55 + var(--i)*.06)}
.b-footer{display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap;border-top:1px solid #0001;color:#0009}
.b-footer nav{display:flex;gap:16px}.b-footer a{color:inherit;text-decoration:none}
@media(max-width:720px){.grid{grid-template-columns:1fr}h1{font-size:32px}.tier.feat{transform:none}}
`

/** A complete standalone HTML document — used for the iframe AND the export. */
export function fullDoc(site: SiteDoc, kit: BrandKit): string {
  const body = site.blocks.map(blockHtml).join('\n')
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>${esc(site.name)}</title><style>${kitCss(kit)}\n${SITE_CSS}</style></head><body>${body}</body></html>`
}

// ---- inspector fields per block --------------------------------------------
export interface Field { path: string; label: string; kind: 'text' | 'area' | 'lines' }
export function fieldsFor(b: Block): Field[] {
  const t = (path: string, label: string, kind: Field['kind'] = 'text'): Field => ({ path, label, kind })
  switch (b.type) {
    case 'hero': case 'cta': return [t('title', 'Titre'), t('subtitle', 'Sous-titre', 'area'), t('cta', 'Bouton')]
    case 'text': return [t('heading', 'Titre'), t('body', 'Texte', 'area')]
    case 'form': return [t('title', 'Titre'), t('subtitle', 'Sous-titre', 'area'), t('button', 'Bouton')]
    case 'gallery': return [t('title', 'Titre'), t('count', 'Nombre d’images')]
    case 'footer': return [t('text', 'Texte'), ...(((b.props.links as string[]) || []).map((_, i) => t(`links.${i}`, `Lien ${i + 1}`)))]
    case 'features': return [t('title', 'Titre'), ...(((b.props.items as unknown[]) || []).flatMap((_, i) => [t(`items.${i}.title`, `Point ${i + 1} · titre`), t(`items.${i}.desc`, `Point ${i + 1} · texte`, 'area')]))]
    case 'pricing': return [t('title', 'Titre'), ...(((b.props.tiers as unknown[]) || []).flatMap((_, i) => [t(`tiers.${i}.name`, `Offre ${i + 1} · nom`), t(`tiers.${i}.price`, `Offre ${i + 1} · prix`), t(`tiers.${i}.features`, `Offre ${i + 1} · lignes`, 'lines')]))]
    default: return []
  }
}

// ---- persistence -----------------------------------------------------------
const siteKey = (dojoId: string) => `site.${dojoId || 'default'}`
export async function loadSite(dojoId: string): Promise<SiteDoc | null> {
  return (await idbGet<SiteDoc>('projects', siteKey(dojoId))) ?? null
}
export async function saveSite(dojoId: string, site: SiteDoc): Promise<void> {
  await idbSet('projects', siteKey(dojoId), { ...site, updatedAt: Date.now() })
}

/** Brand Kit for a company, or a sensible default when none saved yet. */
export async function siteBrand(dojoId: string, name: string): Promise<BrandKit> {
  const k = await idbGet<BrandKit>('projects', `brand.${dojoId || 'default'}`)
  return k ?? defaultKit(name)
}
