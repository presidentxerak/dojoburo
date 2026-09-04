#!/usr/bin/env python3
"""Refuse a 3D capture that came out blank.

A WebGL canvas that mounts but never draws produces a capture of empty white
boxes — the card frame is there, the character is not. It looks plausible at
thumbnail size, which is exactly why it needs an automatic check rather than a
glance.

Counting distinct colours separates the two cleanly: a shaded 3D character over
a card runs to thousands, a blank card to a few dozen. The threshold sits far
below anything a real capture produces and far above anything an empty one can.
"""
import sys
from pathlib import Path

from PIL import Image

MIN_COLOURS = 400

out = Path(sys.argv[1])
pngs = sorted(out.glob('*.png'))
if not pngs:
    print(f'FAIL  no captures found in {out}', file=sys.stderr)
    raise SystemExit(1)

bad = []
for p in pngs:
    im = Image.open(p).convert('RGB')
    # getcolors returns None past maxcolors, which itself means "plenty"
    colours = im.getcolors(maxcolors=1 << 16)
    n = len(colours) if colours is not None else 1 << 16
    if n < MIN_COLOURS:
        bad.append((p.name, n))

if bad:
    for name, n in bad:
        print(f'FAIL  {name}: only {n} distinct colours — the 3D scene did not draw',
              file=sys.stderr)
    raise SystemExit(1)
