"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.average = exports.randInt = exports.toFixed = exports.median = void 0;
function median(values) {
    if (values.length === 0)
        return 0;
    values.sort(function (a, b) {
        return a - b;
    });
    var half = Math.floor(values.length / 2);
    if (values.length % 2)
        return values[half];
    return (values[half - 1] + values[half]) / 2.0;
}
exports.median = median;
function toFixed(num, decimals) {
    if (decimals === void 0) { decimals = 2; }
    return (num + '').match(new RegExp("^-?\\d+(?:\\.\\d{0," + decimals + "})?"))[0];
}
exports.toFixed = toFixed;
function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.randInt = randInt;
function average(arr) {
    return arr.reduce(function (p, c) { return p + c; }, 0) / arr.length;
}
exports.average = average;
