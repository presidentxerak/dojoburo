// Post-build SEO pass · sitemap + a real HTML page per Academy lesson.
//
// The app is a single page, so without this every Academy URL would serve the
// landing page's HTML and depend entirely on the crawler executing JavaScript
// before it saw a word of the lesson. Two things fix that, and both run here:
//
//   1 · sitemap.xml · every public URL, so the lessons are discovered at all.
//   2 · a prerendered file per lesson · dist/academy/<track>/<lesson>/index.html
//       carrying that lesson's real title, description, canonical, JSON-LD and
//       its actual text as semantic HTML. The app boots over it and renders the
//       same lesson, so what a crawler reads and what a person reads match.
//
// The content is read straight from src/data/academy.ts, so there is one source
// of truth: change a lesson and its static page changes with it.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DIST = path.join(ROOT, 'dist')
const SITE = 'https://www.dojoburo.com'

if (!fs.existsSync(DIST)) {
  console.error('gen-seo: dist/ not found · run the build first')
  process.exit(1)
}

// --- read the curriculum without a TypeScript toolchain ---------------------
// The data file is plain data behind a few type annotations. Strip the types
// with esbuild (already a dependency of Vite) and import the result.
const { build } = await import('esbuild')
const bundled = await build({
  entryPoints: [path.join(ROOT, 'src/data/academy.ts')],
  bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent',
})
const mod = await import('data:text/javascript;base64,' + Buffer.from(bundled.outputFiles[0].text).toString('base64'))
const { TRACKS, ALL_LESSONS, LESSON_COUNT, TOTAL_MINUTES } = mod

// The roster, the same way. roleAgents.ts pulls in a Department type from
// agents.ts, which esbuild resolves; nothing here is duplicated from the app.
const rolesBundle = await build({
  entryPoints: [path.join(ROOT, 'src/data/roleAgents.ts')],
  bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent',
})
const roleMod = await import('data:text/javascript;base64,' + Buffer.from(rolesBundle.outputFiles[0].text).toString('base64'))
const { PUBLIC_AGENTS } = roleMod

// Each agent's public profile comes from the context file it actually runs on,
// so the crawled page and the running agent cannot describe different things.
// This is the same parse as src/data/agentProfile.ts — kept here rather than
// imported because that module reads the files through Vite's import.meta.glob,
// which does not exist in node. The shape is asserted below, so a drift in
// either direction fails the build instead of silently emptying a page.
function ctxSections(md) {
  const out = {}
  const re = /^## +(.+?)[ \t]*$\n([\s\S]*?)(?=^## |(?![\s\S]))/gm
  let m
  while ((m = re.exec(md))) out[m[1].trim().toLowerCase()] = m[2].trim()
  return out
}
const ctxBullets = (s) => s.split('\n').map((l) => l.trim()).filter((l) => l.startsWith('- ')).map((l) => l.slice(2).trim()).filter(Boolean)
const ctxProse = (s) => s.split(/\n{2,}/)[0].replace(/\s*\n\s*/g, ' ').trim()

function profileFor(roleId) {
  const f = path.join(ROOT, 'src/data/contexts', `${roleId}.md`)
  if (!fs.existsSync(f)) return null
  const s = ctxSections(fs.readFileSync(f, 'utf8'))
  return {
    mission: ctxProse(s.mission || s.identity || ''),
    expertise: ctxBullets(s.expertise || ''),
    output: ctxProse(s.output || ''),
    worksWith: ctxProse(s['works with'] || ''),
    boundaries: ctxBullets(s.boundaries || ''),
  }
}

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;')

// --- 1 · sitemap ------------------------------------------------------------
const today = new Date().toISOString().slice(0, 10)
const urls = [
  { loc: '/', pri: '1.0', freq: 'weekly' },
  { loc: '/academy', pri: '0.9', freq: 'weekly' },
  ...TRACKS.map((t) => ({ loc: `/academy/${t.slug}`, pri: '0.8', freq: 'monthly' })),
  ...ALL_LESSONS.map(({ track, lesson }) => ({ loc: `/academy/${track.slug}/${lesson.slug}`, pri: '0.8', freq: 'monthly' })),
  { loc: '/teammates', pri: '0.9', freq: 'weekly' },
  ...PUBLIC_AGENTS.map((r) => ({ loc: `/${r.slug}`, pri: '0.8', freq: 'monthly' })),
  { loc: '/guide', pri: '0.6', freq: 'monthly' },
  { loc: '/terms', pri: '0.2', freq: 'yearly' },
  { loc: '/privacy', pri: '0.2', freq: 'yearly' },
]

fs.writeFileSync(path.join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map((u) => `  <url><loc>${SITE}${u.loc}</loc><lastmod>${today}</lastmod><changefreq>${u.freq}</changefreq><priority>${u.pri}</priority></url>`).join('\n') +
  `\n</urlset>\n`)

// --- 2 · a prerendered page per lesson --------------------------------------
const shell = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8')

/** Swap the head tags the SPA would otherwise inherit from the landing page. */
function head(html, { title, description, canonical, jsonLd, type }) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(description)}" />`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(title)}" />`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(description)}" />`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${esc(canonical)}" />`)
    .replace(/<meta property="og:type"[^>]*>/, `<meta property="og:type" content="${type}" />`)
    .replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(title)}" />`)
    .replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(description)}" />`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${esc(canonical)}" />`)
    .replace('</head>', `  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n  </head>`)
}

/** The lesson as semantic HTML, inside #root · React replaces it with the same
 *  lesson on boot, so there is no difference between what is crawled and what
 *  is read. */
function lessonBody({ track, lesson, index }) {
  const blocks = lesson.blocks.map((b) => [
    `<section><h2>${esc(b.title)}</h2><p>${esc(b.body)}</p>`,
    b.points ? `<ul>${b.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>` : '',
    b.compare
      ? `<table><thead><tr><th>${esc(b.compare.a)}</th><th>${esc(b.compare.b)}</th></tr></thead><tbody>` +
        b.compare.rows.map(([l, r]) => `<tr><td>${esc(l)}</td><td>${esc(r)}</td></tr>`).join('') + '</tbody></table>'
      : '',
    '</section>',
  ].join('')).join('\n')

  return `<article>
<nav><a href="/">DojoBuro</a> › <a href="/academy">Dojo Academy</a> › <a href="/academy/${track.slug}">${esc(track.label)}</a></nav>
<h1>${esc(lesson.title)}</h1>
<p>${esc(lesson.summary)}</p>
<p>Lesson ${index + 1} of ${LESSON_COUNT} · ${lesson.minutes} min · ${esc(track.level)} · free</p>
${blocks}
<section><h2>Check yourself</h2><p>${esc(lesson.quiz.q)}</p><ul>${lesson.quiz.options.map((o) => `<li>${esc(o)}</li>`).join('')}</ul><p>${esc(lesson.quiz.why)}</p></section>
<section><h2>Remember this</h2><p>${esc(lesson.takeaway)}</p>${lesson.next ? `<p>${esc(lesson.next)}</p>` : ''}</section>
</article>`
}

const write = (rel, html) => {
  const dir = path.join(DIST, rel)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), html)
}

let pages = 0

for (const [index, { track, lesson }] of ALL_LESSONS.entries()) {
  const canonical = `${SITE}/academy/${track.slug}/${lesson.slug}`
  const html = head(shell, {
    title: `${lesson.title} · Dojo Academy`,
    description: lesson.summary,
    canonical, type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: lesson.title,
      description: lesson.summary,
      url: canonical,
      learningResourceType: 'Lesson',
      educationalLevel: track.level,
      timeRequired: `PT${lesson.minutes}M`,
      isAccessibleForFree: true,
      inLanguage: 'en',
      teaches: lesson.takeaway,
      keywords: lesson.keywords.join(', '),
      isPartOf: { '@type': 'Course', name: 'Dojo Academy', url: `${SITE}/academy` },
      provider: { '@type': 'Organization', name: 'DojoBuro', url: SITE },
    },
  }).replace('<div id="root"></div>', `<div id="root">${lessonBody({ track, lesson, index })}</div>`)
  write(`academy/${track.slug}/${lesson.slug}`, html)
  pages++
}

for (const track of TRACKS) {
  const canonical = `${SITE}/academy/${track.slug}`
  const body = `<article><nav><a href="/">DojoBuro</a> › <a href="/academy">Dojo Academy</a></nav>
<h1>${esc(track.label)}</h1><p>${esc(track.blurb)}</p><p>${esc(track.who)}</p>
<ol>${track.lessons.map((l) => `<li><a href="/academy/${track.slug}/${l.slug}">${esc(l.title)}</a> — ${esc(l.summary)} (${l.minutes} min)</li>`).join('')}</ol></article>`
  const html = head(shell, {
    title: `${track.label} · Dojo Academy`,
    description: `${track.blurb} ${track.lessons.length} free interactive lessons.`,
    canonical, type: 'website',
    jsonLd: {
      '@context': 'https://schema.org', '@type': 'Course', name: `${track.label} · Dojo Academy`,
      description: track.blurb, url: canonical, isAccessibleForFree: true, inLanguage: 'en',
      provider: { '@type': 'Organization', name: 'DojoBuro', url: SITE },
      hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online' },
    },
  }).replace('<div id="root"></div>', `<div id="root">${body}</div>`)
  write(`academy/${track.slug}`, html)
  pages++
}

{
  const canonical = `${SITE}/academy`
  const hours = Math.round((TOTAL_MINUTES / 60) * 10) / 10
  const body = `<article><h1>Dojo Academy</h1>
<p>Free, interactive courses on how AI agents actually work — from "what is an agent" to running a whole system of teams. ${LESSON_COUNT} lessons, about ${hours} hours, no code and no account needed.</p>
${TRACKS.map((t) => `<section><h2><a href="/academy/${t.slug}">${esc(t.label)}</a></h2><p>${esc(t.blurb)}</p><ul>${t.lessons.map((l) => `<li><a href="/academy/${t.slug}/${l.slug}">${esc(l.title)}</a></li>`).join('')}</ul></section>`).join('\n')}
</article>`
  const html = head(shell, {
    title: `Dojo Academy · learn AI agents from zero · ${LESSON_COUNT} free lessons`,
    description: `Free, interactive courses on how AI agents actually work: what an agent is, how to edit one, and how to build a whole system in a loop. ${LESSON_COUNT} lessons, about ${hours} hours, no code and no account needed.`,
    canonical, type: 'website',
    jsonLd: {
      '@context': 'https://schema.org', '@type': 'Course', name: 'Dojo Academy',
      description: 'A free, interactive course taking a complete beginner from "what is an AI agent" to running a working system of AI teammates.',
      url: canonical, isAccessibleForFree: true, inLanguage: 'en', educationalLevel: 'Beginner',
      provider: { '@type': 'Organization', name: 'DojoBuro', url: SITE },
      hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: `PT${TOTAL_MINUTES}M` },
    },
  }).replace('<div id="root"></div>', `<div id="root">${body}</div>`)
  write('academy', html)
  pages++
}

// --- 3 · a prerendered page per job title -----------------------------------
// A codename is unsearchable. These pages are addressed by the job a business
// recruits for — /ai-marketing-manager — and carry the agent's real brief, so
// what ranks and what runs are the same thing.
let roles = 0
for (const r of PUBLIC_AGENTS) {
  const p = profileFor(r.id)
  if (!p) {
    console.error(`gen-seo: ${r.id} is public but ships no context file · src/data/contexts/${r.id}.md`)
    process.exit(1)
  }
  if (!p.mission || !p.expertise.length || !p.output) {
    console.error(`gen-seo: ${r.id}.md is missing Mission, Expertise or Output · its page would be empty`)
    process.exit(1)
  }

  const canonical = `${SITE}/${r.slug}`
  const description = `${r.public} for your business. ${r.desc} Works alongside the rest of your AI team inside DojoBuro.`
  const body = `<article>
<nav><a href="/">DojoBuro</a> › <a href="/teammates">Teammates</a> › ${esc(r.dept)}</nav>
<h1>${esc(r.public)}</h1>
<p>Its name is ${esc(r.code)}, and it is one of eighteen teammates you can put in a company.</p>
<p>${esc(p.mission)}</p>
<section><h2>What it knows</h2><ul>${p.expertise.map((e) => `<li>${esc(e)}</li>`).join('')}</ul></section>
<section><h2>What you get back</h2><p>${esc(p.output)}</p></section>
${r.apps.length ? `<section><h2>Apps it works in</h2><ul>${r.apps.map((a) => `<li>${esc(a)}</li>`).join('')}</ul></section>` : ''}
<section><h2>Who it works with</h2><p>${esc(p.worksWith)}</p></section>
${p.boundaries.length ? `<section><h2>What it will not do</h2><ul>${p.boundaries.map((b) => `<li>${esc(b)}</li>`).join('')}</ul></section>` : ''}
<section><h2>The rest of the team</h2><ul>${PUBLIC_AGENTS.filter((o) => o.id !== r.id).map((o) => `<li><a href="/${o.slug}">${esc(o.public)}</a></li>`).join('')}</ul></section>
</article>`

  const html = head(shell, {
    title: `${r.public} · DojoBuro`,
    description,
    canonical, type: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: `${r.public} · DojoBuro`,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: p.mission,
      url: canonical,
      featureList: p.expertise,
      inLanguage: 'en',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: 'DojoBuro', url: SITE },
    },
  }).replace('<div id="root"></div>', `<div id="root">${body}</div>`)
  write(r.slug, html)
  roles++
}

{
  const canonical = `${SITE}/teammates`
  const byDept = [...new Set(PUBLIC_AGENTS.map((r) => r.dept))]
  const body = `<article>
<nav><a href="/">DojoBuro</a></nav>
<h1>One teammate for every job</h1>
<p>${PUBLIC_AGENTS.length} specialists, grouped the way a business is. Each has its own brief, its own apps and its own limits — and Chief coordinates them so you brief one teammate, not ${PUBLIC_AGENTS.length}.</p>
${byDept.map((d) => `<section><h2>${esc(d)}</h2><ul>${PUBLIC_AGENTS.filter((r) => r.dept === d).map((r) => `<li><a href="/${r.slug}">${esc(r.public)}</a> — ${esc(r.desc)}</li>`).join('')}</ul></section>`).join('\n')}
</article>`
  const html = head(shell, {
    title: `AI teammates for every department · DojoBuro`,
    description: `${PUBLIC_AGENTS.length} AI teammates you can hire into a company: marketing, sales, support, engineering, finance, legal, brand and more. Each one runs real work in your own connected apps.`,
    canonical, type: 'website',
    jsonLd: {
      '@context': 'https://schema.org', '@type': 'ItemList',
      name: 'DojoBuro AI teammates', url: canonical,
      numberOfItems: PUBLIC_AGENTS.length,
      itemListElement: PUBLIC_AGENTS.map((r, i) => ({
        '@type': 'ListItem', position: i + 1, name: r.public, url: `${SITE}/${r.slug}`,
      })),
    },
  }).replace('<div id="root"></div>', `<div id="root">${body}</div>`)
  write('teammates', html)
  roles++
}

console.log(`gen-seo · sitemap with ${urls.length} urls · ${pages} prerendered Academy pages · ${roles} teammate pages`)
