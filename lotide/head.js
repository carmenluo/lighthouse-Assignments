// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`🚀🚀🚀 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`😢😢😢 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
const assertEqual = require('./assertEqual');
const head = function (arr) {
  if (arr == null) {
    return undefined;
  }
  else {
    return arr[0];
  }
}
// TEST CODE
module.exports = head;