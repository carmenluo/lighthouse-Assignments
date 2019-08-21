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
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
const abb = { b: "24", a: "1" };
console.log(eqObjects(ab, abb)); // => false
const cd = { c: '1', d: ['2', 3] };
const dc = {d:['2',3], c:'1'};
console.log(eqObjects(cd, dc)); // => true
const cd2 = { c: '1', d: ['2', 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
