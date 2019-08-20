const assertEqual = function(actual, expected, message) {
  if (actual === expected) { 
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
};

const eqArrays = function(arr1 , arr2){
  for (var i = 0 ; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length != arr2.length) {
      return false;
    }
    return true;
  }

}
// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], ['1','2','3']), false); 
assertEqual(eqArrays([1, 2, 3], [1,2,3,4]), false); 