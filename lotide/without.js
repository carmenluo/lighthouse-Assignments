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

const without = function(source, itemToRemove) {
  let result = [];
  result = source.filter((elementSource) => {
    for (var i = 0; i < itemToRemove.length ; i++){
      if (elementSource === itemToRemove[i]){
        return false;
      }
    }
    return true;
  });
  //   itemToRemove.forEach(element => {
  //     return elementSource === element ? false : true   
  //   });
  // });
  return result;
}
console.log(without([1, 2, 3], [1,2]));
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));
let words = ["hello", "world", "lighthouse"];
words = without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);