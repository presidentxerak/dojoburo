#!/usr/bin/env python3
"""Build every logo export from the product's own source of truth.

The icon is the exact path shipped in public/logo-icon-dojoburo.svg. The
wordmark is "dojoburo" set in Outfit Black at the tracking the app uses
(-0.02em) and converted to outlines, so no export depends on a font being
installed anywhere.

Each file carries a 10px margin, measured in the export's own pixel space, as
asked. Every SVG is a single self-contained file with a real background rect,
so "white on black" is white on black in any viewer rather than a transparent
shape that happens to look right on a dark page.
"""
import re
import xml.etree.ElementTree as ET
from pathlib import Path

from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.misc.transform import Transform

HERE = Path(__file__).parent
SRC = HERE / 'src'
OUT = HERE / 'logo'
OUT.mkdir(parents=True, exist_ok=True)

INK = '#14151A'      # the app's --ink
PAPER = '#FFFFFF'
MARGIN = 10          # px, on every export

# ---------------------------------------------------------------- the icon --
icon_svg = ((HERE.parent / 'public' / 'logo-icon-dojoburo.svg')).read_text()
ICON_PATHS = re.findall(r'<path d="([^"]+)"', icon_svg)
ICON_BOX = 272.0
assert ICON_PATHS, 'no paths found in the icon source'


# ------------------------------------------------------------ the wordmark --
def wordmark_paths(text='dojoburo', tracking_em=-0.02):
    """Outfit Black outlines for the wordmark, in a 1000-unit em space.

    Returns (path_d, advance_width, ascender, descender) with y already flipped
    into SVG's downward axis.
    """
    font = TTFont(SRC / 'Outfit-900.ttf')
    glyphs = font.getGlyphSet()
    cmap = font.getBestCmap()
    hmtx = font['hmtx']
    upm = font['head'].unitsPerEm
    track = tracking_em * upm

    d_parts = []
    x = 0.0
    for ch in text:
        name = cmap[ord(ch)]
        pen = SVGPathPen(glyphs)
        # flip y (font space is up, SVG is down) and place at the pen position
        tpen = TransformPen(pen, Transform(1, 0, 0, -1, x, 0))
        glyphs[name].draw(tpen)
        d = pen.getCommands()
        if d:
            d_parts.append(d)
        x += hmtx[name][0] + track
    # the last letter contributes no trailing track
    width = x - track
    return ' '.join(d_parts), width, font['hhea'].ascender, font['hhea'].descender


WM_D, WM_W, ASC, DESC = wordmark_paths()


def wm_bounds(text='dojoburo', tracking_em=-0.02):
    """True inked bounds of the wordmark, in em units with y already flipped.

    Reading coordinates out of the path string does not work: a cubic segment
    carries six numbers, so every other one is not a y. Ask the font for the
    real control bounds instead.
    """
    font = TTFont(SRC / 'Outfit-900.ttf')
    glyphs = font.getGlyphSet()
    cmap = font.getBestCmap()
    hmtx = font['hmtx']
    upm = font['head'].unitsPerEm
    track = tracking_em * upm
    bp = BoundsPen(glyphs)
    x = 0.0
    for ch in text:
        name = cmap[ord(ch)]
        glyphs[name].draw(TransformPen(bp, Transform(1, 0, 0, -1, x, 0)))
        x += hmtx[name][0] + track
    xmin, ymin, xmax, ymax = bp.bounds
    return ymin, ymax, xmin, xmax


WM_TOP, WM_BOT, WM_XMIN, WM_XMAX = wm_bounds()
WM_H = WM_BOT - WM_TOP


# ------------------------------------------------------------------ output --
def svg(w, h, body, fg, bg):
    """One self-contained SVG. bg is painted, never assumed."""
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{w:.0f}" height="{h:.0f}" '
        f'viewBox="0 0 {w:.2f} {h:.2f}" fill="none">\n'
        f'  <rect width="{w:.2f}" height="{h:.2f}" fill="{bg}"/>\n'
        f'{body}'
        f'</svg>\n'
    )


def icon_group(x, y, size, fg):
    s = size / ICON_BOX
    inner = '\n'.join(f'    <path d="{d}" fill="{fg}"/>' for d in ICON_PATHS)
    return f'  <g transform="translate({x:.3f} {y:.3f}) scale({s:.6f})">\n{inner}\n  </g>\n'


def wordmark_group(x, baseline_y, size, fg):
    """size = cap-to-descender height in px; scales the 1000-unit em to match."""
    s = size / 1000.0
    return (f'  <g transform="translate({x:.3f} {baseline_y:.3f}) scale({s:.6f})">\n'
            f'    <path d="{WM_D}" fill="{fg}"/>\n  </g>\n')


VARIANTS = [('black', INK, PAPER), ('white', PAPER, INK)]

made = []

# --- 1 · the icon alone -----------------------------------------------------
ICON_PX = 256
for name, fg, bg in VARIANTS:
    w = h = ICON_PX + MARGIN * 2
    body = icon_group(MARGIN, MARGIN, ICON_PX, fg)
    p = OUT / f'dojoburo-icon-{name}.svg'
    p.write_text(svg(w, h, body, fg, bg))
    made.append(p)

# --- 2 · the wordmark alone -------------------------------------------------
WM_PX = 120  # em size in px
for name, fg, bg in VARIANTS:
    s = WM_PX / 1000.0
    w = (WM_XMAX - WM_XMIN) * s + MARGIN * 2
    h = WM_H * s + MARGIN * 2
    # the inked box lands exactly on the margin, left and top
    body = wordmark_group(MARGIN - WM_XMIN * s, MARGIN - WM_TOP * s, WM_PX, fg)
    p = OUT / f'dojoburo-wordmark-{name}.svg'
    p.write_text(svg(w, h, body, fg, bg))
    made.append(p)

# --- 3 · the lockup · icon and name together --------------------------------
# The icon's optical height is matched to the wordmark's, and the gap is set
# from the icon size so the pair scales as one object.
LOCK_ICON = 96
GAP = LOCK_ICON * 0.28
WM_LOCK = LOCK_ICON * 0.72          # em size that puts x-height beside the icon
for name, fg, bg in VARIANTS:
    s = WM_LOCK / 1000.0
    wm_w = (WM_XMAX - WM_XMIN) * s
    wm_h = WM_H * s
    w = MARGIN + LOCK_ICON + GAP + wm_w + MARGIN
    h = MARGIN + LOCK_ICON + MARGIN
    body = icon_group(MARGIN, MARGIN, LOCK_ICON, fg)
    # optically centre the name against the icon's own box
    wm_y = MARGIN + (LOCK_ICON - wm_h) / 2 - WM_TOP * s
    body += wordmark_group(MARGIN + LOCK_ICON + GAP - WM_XMIN * s, wm_y, WM_LOCK, fg)
    p = OUT / f'dojoburo-lockup-{name}.svg'
    p.write_text(svg(w, h, body, fg, bg))
    made.append(p)

# --- 4 · a stacked lockup · the one the access gate uses --------------------
for name, fg, bg in VARIANTS:
    s = WM_LOCK / 1000.0
    wm_w = (WM_XMAX - WM_XMIN) * s
    wm_h = WM_H * s
    inner_w = max(LOCK_ICON, wm_w)
    vgap = LOCK_ICON * 0.22
    w = inner_w + MARGIN * 2
    h = MARGIN + LOCK_ICON + vgap + wm_h + MARGIN
    body = icon_group(MARGIN + (inner_w - LOCK_ICON) / 2, MARGIN, LOCK_ICON, fg)
    body += wordmark_group(MARGIN + (inner_w - wm_w) / 2 - WM_XMIN * s,
                           MARGIN + LOCK_ICON + vgap - WM_TOP * s, WM_LOCK, fg)
    p = OUT / f'dojoburo-stacked-{name}.svg'
    p.write_text(svg(w, h, body, fg, bg))
    made.append(p)

for p in sorted(made):
    t = ET.fromstring(p.read_text())
    print(f'{p.name:34} {t.get("width"):>4} x {t.get("height"):>4}')
print(f'\n{len(made)} SVG written to {OUT}')
