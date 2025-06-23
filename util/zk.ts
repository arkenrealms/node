import { groth16 } from 'snarkjs';
import fs from 'fs';
import path from 'path';

type UpdateLeafInput = {
  oldLeaf: string;
  newLeaf: string;
  path: string; // leaf index (0-based as stringified bigint)
  siblings: string[]; // array of Poseidon hashes (depth size)
  oldRoot: string;
  newRoot: string;
};

export async function generateZkProof({
  oldRoot,
  newRoot,
  oldLeaf,
  newLeaf,
  leafIndex,
  siblings,
}: {
  oldRoot: string;
  newRoot: string;
  oldLeaf: string;
  newLeaf: string;
  leafIndex: number;
  siblings: string[];
}) {
  const input: UpdateLeafInput = {
    oldLeaf,
    newLeaf,
    path: leafIndex.toString(), // <- ✅ match the circuit
    siblings,
    oldRoot,
    newRoot,
  };
  //   const input = {
  //     oldLeaf: "<Poseidon hash of old leaf>",
  //     newLeaf: "<Poseidon hash of new leaf>",
  //     path: "42", // ← leafIndex!
  //     siblings: [ /* hex strings */ ],
  //     oldRoot: "<Merkle root before update>",
  //     newRoot: "<Merkle root after update>"
  //   };
  //   const input: UpdateLeafInput = {
  //     oldLeaf: "123456789...",
  //     newLeaf: "987654321...",
  //     path: "42",
  //     siblings: [
  //       "111...", "222...", ..., "nnn..."
  //     ],
  //     oldRoot: "0xabc...",
  //     newRoot: "0xdef..."
  //   };

  const { proof, publicSignals } = await groth16.fullProve(
    input,
    path.resolve(__dirname, './updateLeaf_js/updateLeaf.wasm'),
    path.resolve(__dirname, './updateLeaf.zkey')
  );

  return { proof, publicSignals };
}

export async function verifyZkProof(proof: any, publicSignals: string[]) {
  const vkey = JSON.parse(fs.readFileSync(path.resolve(__dirname, './verification_key.json'), 'utf8'));
  const isValid = await groth16.verify(vkey, publicSignals, proof);
  return isValid;
}
