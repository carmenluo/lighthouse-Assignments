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
const flatten = function(arr){
  let result = [];
  for (item of arr){
    if (Array.isArray(item)){
      item.forEach(element => {result.push(element); 
      });
    }
    else result.push(item);
  }
  return result;
}
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([['hello','world'],['carmen']]));
asserArraysEqual(['hello','world','carmen'],flatten([['hello','world'],['carmen']]))