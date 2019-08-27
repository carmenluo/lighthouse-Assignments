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
 module.exports = middle;