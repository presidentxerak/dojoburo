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

// LA BIBLIOTHÈQUE, de la même manière. Le raisonnement de chaque entrée est
// gratuit et répond à une question qu'on tape dans un moteur de recherche —
// « prompt pour résumer avec les sources », « brief de relecture de code ». Le
// FICHIER, lui, ne sort que de /api/library : on pré-rend donc tout sauf lui,
// ce qui est exactement la bonne coupe entre ce qui attire et ce qui se vend.
const libBundle = await build({
  entryPoints: [path.join(ROOT, 'src/data/library.ts')],
  bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent',
})
const libMod = await import('data:text/javascript;base64,' + Buffer.from(libBundle.outputFiles[0].text).toString('base64'))
const { ENTRIES, CATEGORY_BY_ID, KIND_LABEL } = libMod

// LES DOUZE CAS D'USAGE, de la même manière. Chacun est une page que
// quelqu'un cherche en toutes lettres : « agent d'extraction de factures »,
// « agent qui trie des tickets ». Sa difficulté propre et son parcours sont du
// contenu gratuit, indexable, et c'est la meilleure porte d'entrée qu'on ait.
const ucBundle = await build({
  entryPoints: [path.join(ROOT, 'src/data/agentUseCases.ts')],
  bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent',
})
const ucMod = await import('data:text/javascript;base64,' + Buffer.from(ucBundle.outputFiles[0].text).toString('base64'))
const { USE_CASES, USE_CASE_BY_AGENT } = ucMod

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
  { loc: '/build', pri: '0.9', freq: 'weekly' },
  ...USE_CASES.map((u) => ({ loc: `/build/${u.id}`, pri: '0.8', freq: 'monthly' })),
  { loc: '/academy', pri: '0.9', freq: 'weekly' },
  ...TRACKS.map((t) => ({ loc: `/academy/${t.slug}`, pri: '0.8', freq: 'monthly' })),
  ...ALL_LESSONS.map(({ track, lesson }) => ({ loc: `/academy/${track.slug}/${lesson.slug}`, pri: '0.8', freq: 'monthly' })),
  { loc: '/frugality', pri: '0.9', freq: 'monthly' },
  { loc: '/library', pri: '0.9', freq: 'weekly' },
  ...ENTRIES.map((e) => ({ loc: `/library/${e.slug}`, pri: '0.7', freq: 'monthly' })),
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
<ol>${track.lessons.map((l) => `<li><a href="/academy/${track.slug}/${l.slug}">${esc(l.title)}</a> · ${esc(l.summary)} (${l.minutes} min)</li>`).join('')}</ol></article>`
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
<p>Free, interactive courses on how AI agents actually work, from "what is an agent" to running a whole system of teams. ${LESSON_COUNT} lessons, about ${hours} hours, no code and no account needed.</p>
${TRACKS.map((t) => `<section><h2><a href="/academy/${t.slug}">${esc(t.label)}</a></h2><p>${esc(t.blurb)}</p><ul>${t.lessons.map((l) => `<li><a href="/academy/${t.slug}/${l.slug}">${esc(l.title)}</a></li>`).join('')}</ul></section>`).join('\n')}
</article>`
  const html = head(shell, {
    title: `Dojo Academy · learn AI agents from zero · ${LESSON_COUNT} free lessons`,
    description: `Free, interactive courses on how AI agents actually work: what an agent is, how to edit one, and how to build a whole system in a loop. ${LESSON_COUNT} lessons, about ${hours} hours, no code and no account needed.`,
    canonical, type: 'website',
    jsonLd: {
      '@context': 'https://schema.org', '@type': 'Course', name: 'Dojo Academy',
      description: 'A free, interactive course taking a complete beginner from "what is an AI agent" to writing the instruction an agent actually follows.',
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
<nav><a href="/">DojoBuro</a> › <a href="/teammates">The crew</a> › ${esc(r.dept)}</nav>
<h1>${esc(r.public)}</h1>
<p>Its name is ${esc(r.code)}, and it is one of the ${PUBLIC_AGENTS.length} characters in the dojo.</p>
${USE_CASE_BY_AGENT[r.id] ? `<p>In the dojo it teaches one shape of agent: <a href="/build/${USE_CASE_BY_AGENT[r.id].id}">${esc(USE_CASE_BY_AGENT[r.id].shape)}</a>.</p>` : ''}
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
<h1>The characters of the dojo</h1>
<p>${PUBLIC_AGENTS.length} of them live in the room, and ${USE_CASES.length} carry a shape of agent you learn to build end to end. Each one fails in its own way, which is why they are taught one at a time.</p>
${byDept.map((d) => `<section><h2>${esc(d)}</h2><ul>${PUBLIC_AGENTS.filter((r) => r.dept === d).map((r) => `<li><a href="/${r.slug}">${esc(r.public)}</a> · ${esc(r.desc)}</li>`).join('')}</ul></section>`).join('\n')}
</article>`
  const html = head(shell, {
    title: `The characters of the dojo · DojoBuro`,
    description: `The ${PUBLIC_AGENTS.length} characters in the DojoBuro dojo. ${USE_CASES.length} of them carry a shape of agent you learn to build end to end, from a blank page to a file you can run in a real framework.`,
    canonical, type: 'website',
    jsonLd: {
      '@context': 'https://schema.org', '@type': 'ItemList',
      name: 'The characters of the DojoBuro dojo', url: canonical,
      numberOfItems: PUBLIC_AGENTS.length,
      itemListElement: PUBLIC_AGENTS.map((r, i) => ({
        '@type': 'ListItem', position: i + 1, name: r.public, url: `${SITE}/${r.slug}`,
      })),
    },
  }).replace('<div id="root"></div>', `<div id="root">${body}</div>`)
  write('teammates', html)
  roles++
}

// --- 4 · une page par entrée de bibliothèque --------------------------------
// Tout le gratuit, et RIEN du fichier. Pré-rendre le corps ici le publierait
// en clair sur une adresse indexable, ce qui reviendrait à mettre la porte
// blindée à côté du mur.
let files = 0
for (const e of ENTRIES) {
  const canonical = `${SITE}/library/${e.slug}`
  const cat = CATEGORY_BY_ID[e.category]
  const kind = KIND_LABEL[e.kind]
  const body = `<article>
<nav><a href="/">DojoBuro</a> › <a href="/library">Library</a></nav>
<h1>${esc(e.title)}</h1>
<p>${esc(e.summary)}</p>
<p><b>${esc(kind.label)}</b> · ${esc(cat?.label || '')} · about ${e.tokens} tokens</p>
<section><h2>When to reach for it</h2><p>${esc(e.useCase)}</p></section>
<section><h2>Why it is written this way</h2><ul>${e.why.map((w) => `<li>${esc(w)}</li>`).join('')}</ul></section>
<section><h2>What to change for your case</h2><ul>${e.adapt.map((a) => `<li>${esc(a)}</li>`).join('')}</ul></section>
<section><h2>The mistake it exists to avoid</h2><p>${esc(e.trap)}</p></section>
<section><h2>Excerpt</h2><pre>${esc(e.preview)}</pre></section>
</article>`
  const html = head(shell, {
    title: `${e.title} · ${kind.label} · DojoBuro library`,
    description: e.summary,
    canonical, type: 'article',
    jsonLd: {
      '@context': 'https://schema.org', '@type': 'HowTo',
      name: e.title, description: e.summary, url: canonical,
      keywords: e.keywords.join(', '),
      step: e.adapt.map((a, i) => ({ '@type': 'HowToStep', position: i + 1, text: a })),
    },
  }).replace('<div id="root"></div>', `<div id="root">${body}</div>`)
  write(`library/${e.slug}`, html)
  files++
}

// --- 5 · une page par cas d'usage d'agent -----------------------------------
// Tout est gratuit ici, parcours compris : ce qui se vend dans ce produit est
// le FICHIER de la bibliothèque, pas la leçon. Une leçon cachée n'attire
// personne et n'enseigne à personne.
let shapes = 0
for (const u of USE_CASES) {
  const canonical = `${SITE}/build/${u.id}`
  const body = `<article>
<nav><a href="/">DojoBuro</a> › <a href="/build">Build an agent</a></nav>
<h1>${esc(u.name)} · ${esc(u.shape)}</h1>
<p>${esc(u.does)}</p>
<section><h2>Who needs it</h2><p>${esc(u.forWhom)}</p></section>
<section><h2>What is hard about it</h2><p>${esc(u.hard)}</p></section>
<section><h2>How it fails</h2><p>${esc(u.failure)}</p></section>
<section><h2>The path</h2><ol>${u.steps.map((s) => `<li><b>${esc(s.title)}</b> · makes ${esc(s.makes)}. Before you move on: ${esc(s.check)}</li>`).join('')}</ol></section>
<section><h2>What you leave with</h2><ul>${u.ships.map((s) => `<li>${esc(s)}</li>`).join('')}</ul></section>
<section><h2>The other agents in the dojo</h2><ul>${USE_CASES.filter((o) => o.id !== u.id).map((o) => `<li><a href="/build/${o.id}">${esc(o.name)}</a> · ${esc(o.shape)}</li>`).join('')}</ul></section>
</article>`
  const html = head(shell, {
    title: `${u.name} · build this agent · DojoBuro`,
    description: `${u.does} What is hard about it: ${u.hard}`,
    canonical, type: 'article',
    jsonLd: {
      '@context': 'https://schema.org', '@type': 'HowTo',
      name: `Build ${u.name}`, description: u.does, url: canonical,
      keywords: u.keywords.join(', '),
      step: u.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.makes })),
    },
  }).replace('<div id="root"></div>', `<div id="root">${body}</div>`)
  write(`build/${u.id}`, html)
  shapes++
}

{
  const canonical = `${SITE}/build`
  const body = `<article>
<nav><a href="/">DojoBuro</a></nav>
<h1>Which agent do you need?</h1>
<p>${USE_CASES.length} agents sleep in the dojo, one per shape of problem. Pick the one you actually have and it wakes up. A research agent and a sorting agent do not fail the same way, so they are not taught the same way.</p>
<ul>${USE_CASES.map((u) => `<li><a href="/build/${u.id}">${esc(u.name)}</a> · ${esc(u.shape)}. Hard part: ${esc(u.hard.split('.')[0])}.</li>`).join('')}</ul>
</article>`
  const html = head(shell, {
    title: `Build an AI agent · ${USE_CASES.length} shapes, taught one at a time · DojoBuro`,
    description: `Walk into the dojo, pick the shape of agent you actually need, and build it from a blank page to a file you can run in a real framework. ${USE_CASES.length} use cases, each with its own path.`,
    canonical, type: 'website',
    jsonLd: {
      '@context': 'https://schema.org', '@type': 'ItemList',
      name: 'Agent use cases taught at DojoBuro', url: canonical,
      numberOfItems: USE_CASES.length,
      itemListElement: USE_CASES.map((u, i) => ({
        '@type': 'ListItem', position: i + 1, name: u.name, url: `${SITE}/build/${u.id}`,
      })),
    },
  }).replace('<div id="root"></div>', `<div id="root">${body}</div>`)
  write('build', html)
  shapes++
}

console.log(`gen-seo · sitemap with ${urls.length} urls · ${pages} prerendered Academy pages · ${roles} teammate pages · ${files} library pages · ${shapes} agent pages`)
