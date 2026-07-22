// The company's single source of truth · name + domain.
//
// Every agent (Branding, Website, Growth/SEO, Business, Marketing…) must show the
// SAME company identity so the dojo is coherent. The canonical name is the BRAND
// the user set in Branding (persisted in the Brand Kit); the dojo name is only a
// fallback for a company that hasn't been branded yet. The domain is derived from
// that name so `novaranly` → `novaranly.com` everywhere.
import { loadBrandKit } from './brand'
import { loadSite, slugify } from './site'

export interface CompanyIdentity { name: string; domain: string; hasBrand: boolean }

export const companyDomain = (name: string) => `${slugify(name) || 'company'}.com`

/** Resolve the canonical company identity for a dojo. Brand Kit name wins (it's
 *  the deliberate brand), then the saved site name, then the dojo name. */
export async function companyIdentity(dojoId: string, fallbackName?: string): Promise<CompanyIdentity> {
  const [kit, site] = await Promise.all([loadBrandKit(dojoId), loadSite(dojoId)])
  const brand = kit?.name?.trim()
  const name = brand || site?.name?.trim() || fallbackName?.trim() || 'My company'
  return { name, domain: companyDomain(name), hasBrand: !!brand }
}
