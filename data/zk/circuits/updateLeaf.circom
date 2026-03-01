pragma circom 2.0.0;

include "MerklePath.circom";

template UpdateLeaf(depth) {
    signal input oldLeaf;
    signal input newLeaf;
    signal input path;
    signal input siblings[depth];

    signal input oldRoot;
    signal input newRoot;

    component oldMerkle = MerklePathVerifier(depth);
    oldMerkle.leaf <== oldLeaf;
    oldMerkle.path <== path;
    for (var i = 0; i < depth; i++) {
        oldMerkle.siblings[i] <== siblings[i];
    }

    component newMerkle = MerklePathVerifier(depth);
    newMerkle.leaf <== newLeaf;
    newMerkle.path <== path;
    for (var i = 0; i < depth; i++) {
        newMerkle.siblings[i] <== siblings[i];
    }

    oldRoot === oldMerkle.root;
    newRoot === newMerkle.root;
}

component main = UpdateLeaf(16);