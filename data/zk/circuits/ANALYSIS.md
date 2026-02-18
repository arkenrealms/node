# arken/packages/node/data/zk/circuits/ANALYSIS.md

## Folder purpose in project context
Defines the core arithmetic constraints for proving a Merkle leaf update without exposing full tree state.

## Notable files and responsibilities
- `MerklePath.circom`
  - Uses `Num2Bits(depth)` to derive branch directions from numeric `path`.
  - Uses Poseidon(2) hashers at each depth level.
- `updateLeaf.circom`
  - Reuses the same sibling/path input for old and new leaf roots.
  - Enforces `oldRoot` and `newRoot` equality constraints against computed roots.
  - Instantiates `main = UpdateLeaf(16)` (fixed depth in compiled artifact).

## Protocol/test relevance
- Trust-critical input to any upstream protocol path that accepts proof-verified state transitions.
- Depth is hardcoded at 16 in `main`, which should remain consistent with callers and tree builders.

## Risks / gaps
- No local tests in this folder asserting witness/proof validity across edge paths (left/right extremes, invalid sibling order).
- Hardcoded depth can become a hidden coupling if runtime tree depth changes.

## Follow-ups
- Add fixture-driven proof generation/verification tests in a future node test pass.
