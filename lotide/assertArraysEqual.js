const eqArrays = function(arr1 , arr2){
    for (var i = 0 ; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i] || arr1.length != arr2.length) {
        return false;
      }
    }
    return true;
  }

  const asserArraysEqual = function (arr1, arr2) {
    if (eqArrays(arr1 , arr2)) {
        console.log("🙂🙂🙂🙂Assertion passed");
    }
    else {
        console.log("😿😿😿Assertion failed");}
  }
asserArraysEqual([1, 2, 3], [3, 2, 1]);
asserArraysEqual([1, 2, 3], [1,2,3]);
