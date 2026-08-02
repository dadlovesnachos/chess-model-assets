# Chess Lab App Icon Family

Status: approved production direction

## Purpose

This directory is the canonical source of truth for the installed-app identity of:

- Chess Redo
- Chess Game Review
- Puzzle Notebook

Generated comparison images are design references only. The SVG masters in this directory are authoritative.

## Shared visual language

All three icons use:

- one exact knight silhouette;
- a dot eye and small nostril;
- one curved mane line;
- a two-level pedestal;
- flat white artwork;
- one flat app color;
- a rounded-square 1024 × 1024 canvas;
- important artwork inside the central 78% safe area;
- no gradients, shadows, text, or decorative texture.

The shared knight geometry is defined in `shared-knight.svg`. Each standalone master repeats that exact geometry so common SVG rasterizers do not depend on external references.

## Product-specific symbols

### Chess Redo

- Color: `#087F82`
- Dominant symbol: circular replay arrow
- Meaning: return to the position and try the decision again

### Chess Game Review

- Color: `#256B8F`
- Dominant symbol: magnifying glass
- Secondary symbol: minimal board squares
- Meaning: inspect and understand the position

### Puzzle Notebook

- Color: `#7145A8`
- Dominant symbol: notebook
- Secondary symbol: connected four-piece puzzle
- Puzzle colors: top-left and bottom-right purple; opposite diagonal white
- Meaning: collect, deliver, and track chess practice

Puzzle Notebook keeps the knight centered over the connected puzzle. The bottom of the knight pedestal aligns optically with the bottom of the puzzle area.

## Required exports

Each app pack should contain:

- `master-1024.png`
- `icon-512.png`
- `icon-192.png`
- `icon-maskable-512.png`
- `icon-maskable-192.png`
- `apple-touch-icon.png`
- `favicon.ico`

Maskable exports place the complete symbol inside a 78% safe area on the same flat app color.

## Visual QA

Inspect all icons together at:

- 512 px
- 192 px
- 64 px
- 32 px
- 16 px

At 32 px, the primary symbol and knight must remain recognizable. At 16 px, app color and the dominant outer symbol take priority over puzzle joins or board squares.

## Consumer rule

Application repositories should consume generated exports from this directory rather than redraw the knight independently. App-specific PWA generators may copy or resize these assets, but should not alter the canonical composition.
