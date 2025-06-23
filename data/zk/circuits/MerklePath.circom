pragma circom 2.0.0;

include "poseidon.circom";
include "bitify.circom";

template MerklePathVerifier(depth) {
    signal input leaf;
    signal input path; // leaf index (as a number)
    signal input siblings[depth];
    signal output root;

    signal bits[depth];
    component pathBits = Num2Bits(depth);
    pathBits.in <== path;

    // Hash computation signals
    signal cur[depth + 1];
    component hashers[depth];

    signal left0[depth], left1[depth];
    signal sel0[depth], sel1[depth];
    signal leftSelected[depth];

    signal right0[depth], right1[depth];
    signal rsel0[depth], rsel1[depth];
    signal rightSelected[depth];

    cur[0] <== leaf;

    for (var i = 0; i < depth; i++) {
        bits[i] <== pathBits.out[i];

        hashers[i] = Poseidon(2);

        // Conditional left side
        left0[i] <== cur[i];
        left1[i] <== siblings[i];
        sel0[i] <== left0[i] * (1 - bits[i]);
        sel1[i] <== left1[i] * bits[i];
        leftSelected[i] <== sel0[i] + sel1[i];

        // Conditional right side
        right0[i] <== siblings[i];
        right1[i] <== cur[i];
        rsel0[i] <== right0[i] * (1 - bits[i]);
        rsel1[i] <== right1[i] * bits[i];
        rightSelected[i] <== rsel0[i] + rsel1[i];

        hashers[i].inputs[0] <== leftSelected[i];
        hashers[i].inputs[1] <== rightSelected[i];
        cur[i + 1] <== hashers[i].out;
    }

    root <== cur[depth];
}