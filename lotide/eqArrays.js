const assertEqual = function(actual, expected, message) {
  if (actual === expected) { 
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
};

const eqArrays = function(arr1 , arr2){
  let flattenArr1 = flattenArray(arr1).sort((a,b) => a - b );
  let flattenArr2 = flattenArray(arr2).sort((a,b) => a - b );
  for (var i = 0 ; i < flattenArr1.length; i++) {
    if (flattenArr1[i] !== flattenArr2[i] || flattenArr1.length != flattenArr2.length) {
      return false;
    }
  }
  return true;
}
const flattenArray = function (arr) {
  let result =[];
  for (let item of arr) {
    if (Array.isArray(item)){
      flattenArray(item).forEach(element => result.push(element));
    }
    else {
      result.push(item);
    }
  }
  return result;
}
// eqArrays([1, 2, 3], [1, 2, 3]) // => trues

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
assertEqual(eqArrays([1, 2, 3], [3, [[2]], 1]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], ['1','2','3']), false); 
assertEqual(eqArrays([1, 2, 3], [1,2,3,4]), false); 