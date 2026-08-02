# Chess Model Assets

Shared static engine/model binaries and reusable visual assets for private Chess Lab training apps.

## Releases

### models-v1
- stockfish-18-lite.wasm
- stockfish-18.wasm
- maia3_simplified.onnx
- maia2_rapid.onnx
- ort-wasm-simd-threaded.wasm

Apps should reference pinned release URLs, not the main branch.

## Chess Lab app icons

Canonical Redo, Chess Game Review, and Puzzle Notebook artwork lives in:

```text
branding/chess-lab-app-icons/
```

The directory contains:

- one shared knight definition;
- deterministic SVG masters for all three apps;
- the approved color and geometry specification;
- a Sharp-based export script for standard, Apple-touch, and maskable PNG assets.

To generate local icon packs:

```bash
cd branding/chess-lab-app-icons
npm install
npm run generate
```

Application repositories should consume generated exports rather than independently redraw the shared knight.
