# Chess Model Assets

Shared static engine/model binaries and reusable visual assets for private Chess Lab training apps.

## Releases

### models-v1
- stockfish-18-lite.wasm
- stockfish-18.wasm
- stockfish-18-lite-single.js
- stockfish-18-lite-single.wasm
- maia3_simplified.onnx
- maia2_rapid.onnx
- ort-wasm-simd-threaded.wasm

Apps should reference pinned release URLs, not the main branch.

## Stockfish 18 Lite Single

`stockfish-18-lite-single.js` and `stockfish-18-lite-single.wasm` are the
Stockfish 18 Lite Single runtime used by Chess Game Review and Trainer. They
are distinct from the Stockfish 18 Lite Multi runtime, which remains published
under the unchanged filenames `stockfish-18-lite.js` and
`stockfish-18-lite.wasm`.

The pair is sourced from the immutable upstream `nmrugg/stockfish.js` release
[`v18.0.0`](https://github.com/nmrugg/stockfish.js/releases/tag/v18.0.0), and
is distributed under GPLv3. The worker header identifies Stockfish.js 18,
Copyright 2026 Chess.com, LLC, and the worker resolves its companion WASM via
`location.hash`, `locateFile`, and `fetch`.

The exact release asset identity is recorded in
[`ASSET-MANIFEST.md`](ASSET-MANIFEST.md). Consumers must use the pinned
`models-v1` release URLs documented there; filenames are part of the runtime
contract and must not be changed.

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
