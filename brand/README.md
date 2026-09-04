# DojoBuro brand pack

Everything here is generated from the app's own sources, by scripts that ship
beside it. Nothing was drawn by hand, so nothing can quietly drift out of sync
with the product — rerun the scripts and the pack is current again.

| | |
|---|---|
| `dojoburo-brand-guidelines.pdf` | 15 pages, A4 portrait. The whole system. |
| `logo/` | 8 SVG + 24 PNG. Black on white and white on black, 10px margin on every export. |
| `tokens/dojoburo.tokens.json` | The colour, type, space, radius, shadow and motion values as W3C design tokens. |
| `figma-plugin/` | Builds the design system inside a Figma file. |
| `render/` | The capture sheet, and the 3D stills of the teammates and objects it produces. |
| `src/` | The Outfit faces the scripts use. |

## About the `.fig` file

You asked for the design system as a `.fig`. I can't produce one, and I'd rather
say so than hand you something that fails to open.

`.fig` is Figma's own container format. It is proprietary, undocumented, and has
no public writer — not from Figma, not from anyone else. Every tool that claims
to "export to Figma" does what this pack does: it drives Figma's plugin API from
inside Figma. There is no offline path to a valid `.fig`.

So the plugin below is the real thing, not a consolation. Run it once and you
have a native Figma library — styles you can apply from the picker, components
you can instance and override. Save that file, and you have your `.fig`.

## Getting the system into Figma

Two ways, and they compose — the plugin gives you styles and components, the
token file gives you a live pipeline if you want one.

### The plugin — 30 seconds, gives you everything

1. In Figma, open the file you want the system in (a new one is fine).
2. Menu → **Plugins → Development → Import plugin from manifest…**
3. Choose `brand/figma-plugin/manifest.json`.
4. Menu → **Plugins → Development → DojoBuro design system**.

It creates, in that file:

- **31 colour styles** — grouped Base / Accent / Primary / Status / CTA / Dark,
  each with a note saying what it is for.
- **8 text styles** — the seven roles plus Emphasis, at their real sizes,
  weights, line heights and tracking.
- **4 elevation styles** — the card shadow, its hover, the dialog, the button.
- **14 components** on a new page: both logo lockups, three buttons, a field,
  three cards including the empty one, a chip, a toast, two nav states, and the
  access-gate dialog.

Outfit must be available in the file — it is in Figma's own font list, so
enabling it is enough. If it is missing, the plugin says so and stops rather
than silently substituting a different face.

To share it with a team: **Publish library** on that file. To hand it over as a
file: **Save local copy** gives you the `.fig`.

If you edit `public/logo-icon-dojoburo.svg` or the token file, run
`node brand/figma-plugin/build.mjs` to regenerate `code.js`, then run the plugin
again in a fresh file.

### The tokens — for Tokens Studio

`tokens/dojoburo.tokens.json` is standard W3C design-tokens format. In the
Tokens Studio plugin: **Settings → Import → JSON**. Use this if you want the
values to stay linked to a source you can version, rather than baked into
styles.

## Rebuilding the pack

From the repo root:

```
python3 brand/build-logos.py        # the 8 SVGs, from the app's icon + Outfit
node brand/rasterise.mjs            # the 24 PNGs, at 1x / 2x / 3x
node brand/render-3d.mjs            # the 3D stills · starts a dev server, slow
node brand/make-guidelines.mjs      # the PDF
node brand/figma-plugin/build.mjs   # the plugin's code.js
node brand/figma-plugin/test-plugin.mjs   # runs the plugin against a mock Figma
```

### The 3D pages

WebGL cannot be printed — the app's own stylesheet hides every canvas in print
media for that reason — so the teammate and 3D-object pages carry stills. They
are stills of the real thing: `brand/render/agents.tsx` mounts the app's own
`TeammateCard` and `Object3DInline` against the app's own stylesheet, and
`render-3d.mjs` starts the dev server and photographs each block at 3×. Change a
teammate card in the app and the next capture shows the change.

It runs on SwiftShader here (no GPU), so it is slow — allow fifteen to twenty
minutes, and do not put a short `timeout` in front of it. Afterwards
`check-captures.py` counts distinct colours in each PNG and fails the run if one
came out blank — a canvas that mounts but never draws yields a page of empty
white card frames, which is plausible enough at thumbnail size to ship by
accident.

The capture sheet lives under `brand/` and is served by `vite` in dev only;
`vite build` has `index.html` as its single entry, so none of it reaches the
production bundle.

`make-guidelines.mjs` measures every page against its own box and exits non-zero
if one would print clipped, so a document that overflows never gets written.

It also refuses to write a PDF containing a soft mask. Chromium prints a blurred
`box-shadow` as an image plus a soft mask inside a transparency group; that is
valid PDF, but several common viewers paint the mask's bounding box instead of
applying it, and every shadow becomes an opaque grey slab lying across the page.
The first build of this document shipped with seventeen of them. The fix is that
each specimen block is rendered by the browser at 3× and placed as one opaque
JPEG — no alpha, no mask, nothing left for a viewer to get wrong — while type,
tables, colour swatches and the logo plates stay live vector. If you add a
component demo, put it inside a `.demo` or `.elev` block so it is flattened too;
the build will fail loudly if you don't.
`test-plugin.mjs` runs the plugin body against a stand-in for the Figma API that
rejects unknown node properties and text set before its font is loaded — it
cannot tell you the layout looks right, but it catches the errors that would
otherwise appear as a red banner in front of you.

Chromium does the rasterising and the PDF printing; there is no other renderer
on the build machine, and using the browser means the component pages in the PDF
are the components, built from the same values, rather than pictures of them.

## Two things to know about the exports

**The 10px margin is inside the artwork.** It is measured in each file's own
pixel space, so a logo dropped into a layout is never flush against something
else. In the PNGs it scales with the export: 10px at 1×, 20px at 2×, 30px at 3×.

**The wordmark is outlined.** `dojoburo-wordmark-*.svg` contains paths, not text,
so it opens correctly on a machine that has never had Outfit installed.
