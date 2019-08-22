const eqArrays = function (arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length != arr2.length) {
      return false;
    }
  }
  return true;
};
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      }
      else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🚀🚀🚀 ${inspect(actual)} === ${inspect(expected)} Assertion passed!`);
  }
  else{
    console.log(`😿😿😿 ${inspect(actual)} !== ${inspect(expected)} Assertion failed!`);
  }
};
const abc = { a: "1", b: "2", c: "3" };
const abcd = { c: "3", b: "2", a: "1" };
const abcd1 = { a: "1", b: "2", c: "3", d: '5' };
assertObjectsEqual(abc,abcd);
assertObjectsEqual(abc,abcd1);
