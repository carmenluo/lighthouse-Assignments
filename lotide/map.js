const eqArrays = function(arr1 , arr2){
  for (var i = 0 ; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length != arr2.length) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1 , arr2)) {
      console.log("🙂🙂🙂🙂Assertion passed");
  }
  else {
      console.log("😿😿😿Assertion failed");}
}
const words = ["ground", 'control', 'to', 'major', 'tom'];
const map = function (array, callback){
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
}
const result1 = map(words, word => word[0]);
//console.log(result1);
assertArraysEqual(result1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
//console.log(map(words, word => word.length > 5));
assertArraysEqual(map(words, word => word.length > 5),[true, true, false, false, false]);