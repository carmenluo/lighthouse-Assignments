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
  
  // ACTUAL FUNCTION
  const middle = function(array) {
    //...
    let result = [];
    if (array.length === 0 || array.length === 1 || array.length === 2) {
        return result;
    }
    else{
        const middleIndex = array.length / 2;
        if (Number.isInteger(middleIndex)){
            result.push(array[middleIndex-  1]);
            result.push(array[middleIndex]);
        }
        else {result.push(array[Math.floor(middleIndex)])}
    }
    return result;
  }
  
  // TEST CODE
  // ...
 // console.log(middle([1,2,3,4,5,6]));
  asserArraysEqual([3], middle([1,2,3,4,5]));
  asserArraysEqual([], middle([1,2]));
  asserArraysEqual(['world'], middle(['hello', 'world', 'carmen']));