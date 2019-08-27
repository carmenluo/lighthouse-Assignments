const eqArrays = require('./eqArrays');
  const asserArraysEqual = function (arr1, arr2) {
    if (eqArrays(arr1 , arr2)) {
        console.log("🙂🙂🙂🙂Assertion passed");
    }
    else {
        console.log("😿😿😿Assertion failed");}
  }
  module.exports = asserArraysEqual;