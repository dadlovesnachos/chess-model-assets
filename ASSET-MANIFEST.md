# Chess Model Assets Manifest

This manifest records the immutable provenance and byte identity of assets
published by this repository. Release assets are consumed by Chess Game Review
and other Chess Lab training apps through pinned GitHub release URLs.

## Stockfish 18 Lite Single

| Field | Value |
| --- | --- |
| Runtime | Stockfish 18 Lite Single |
| Intended consumers | Chess Game Review first-time online preparation; Trainer |
| Upstream project | [nmrugg/stockfish.js](https://github.com/nmrugg/stockfish.js) |
| Upstream release | [`v18.0.0`](https://github.com/nmrugg/stockfish.js/releases/tag/v18.0.0) |
| License | GPLv3 |
| Repository release | [`models-v1`](https://github.com/dadlovesnachos/chess-model-assets/releases/tag/models-v1) |

| Filename | Size (bytes) | SHA-256 |
| --- | ---: | --- |
| `stockfish-18-lite-single.js` | 20670 | `2278005057f381491f1c9bb3e44c9f5920b3a00bef9759e33cc6582769a1f1fe` |
| `stockfish-18-lite-single.wasm` | 7295411 | `a8fbc05ec6920b56d7485826dcb02c5ffd2826bcbf751cf973046f237a9096f1` |

Pinned public URLs:

- https://github.com/dadlovesnachos/chess-model-assets/releases/download/models-v1/stockfish-18-lite-single.js
- https://github.com/dadlovesnachos/chess-model-assets/releases/download/models-v1/stockfish-18-lite-single.wasm

The repository-root copies are byte-for-byte identical to those public release
assets. The Single pair must remain separate from the Stockfish 18 Lite Multi
runtime, whose existing filenames are `stockfish-18-lite.js` and
`stockfish-18-lite.wasm`.
