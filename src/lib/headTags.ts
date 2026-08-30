// Per-page <head>, set at runtime.
//
// The app is a single page, so index.html carries the landing page's title and
// description and every other route would otherwise inherit them. Search engines
// render this app before indexing it, so updating the head on navigation is
// enough for each Academy lesson to be indexed under its own title, description
// and canonical URL — and for a link to it to unfurl correctly when shared.
//
// The structured data goes in as JSON-LD, which is how a search engine reads a
// course: Course and LearningResource for the lessons, BreadcrumbList for the
// path back up to the Academy.
//
// (Not to be confused with lib/seo.ts, which is the SEO *studio* — the tool a
// dojo uses to audit the website it built.)
import { useEffect } from 'react'

export const SITE = 'https://www.dojoburo.com'

function meta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function link(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

export interface HeadTags {
  title: string
  description: string
  /** path, e.g. /academy/start-here/what-is-an-agent */
  path: string
  /** 'article' for a lesson, 'website' for an index */
  type?: 'article' | 'website'
  keywords?: string[]
  /** one or more JSON-LD objects */
  jsonLd?: unknown[]
}

const LD_ID = 'dojoburo-jsonld'

/** Set the document head for this page, and put the title back when we leave. */
export function useHeadTags({ title, description, path, type = 'website', keywords, jsonLd }: HeadTags) {
  // The objects come from render, so compare by value rather than identity —
  // otherwise the effect reruns on every keystroke elsewhere on the page.
  const kw = keywords?.join(', ') ?? ''
  const ld = jsonLd?.length ? JSON.stringify(jsonLd.length === 1 ? jsonLd[0] : jsonLd) : ''
  useEffect(() => {
    const url = SITE + path
    const prevTitle = document.title
    document.title = title
    meta('meta[name="description"]', 'name', 'description', description)
    meta('meta[property="og:title"]', 'property', 'og:title', title)
    meta('meta[property="og:description"]', 'property', 'og:description', description)
    meta('meta[property="og:url"]', 'property', 'og:url', url)
    meta('meta[property="og:type"]', 'property', 'og:type', type)
    meta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    meta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    if (kw) meta('meta[name="keywords"]', 'name', 'keywords', kw)
    link('canonical', url)

    document.getElementById(LD_ID)?.remove()
    if (ld) {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.id = LD_ID
      s.textContent = ld
      document.head.appendChild(s)
    }

    return () => {
      document.title = prevTitle
      document.getElementById(LD_ID)?.remove()
    }
  }, [title, description, path, type, kw, ld])
}

/** The trail at the top of a page, as a search engine reads it. */
export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: SITE + it.path,
    })),
  }
}
