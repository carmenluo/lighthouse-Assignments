const eqArrays = require('./eqArrays');
const asserArraysEqual = require('./assertArraysEqual');
const flatten = function(arr){
  let result = [];
  for (item of arr){
    if (Array.isArray(item)){
      let temp = flatten(item);
      temp.forEach(item=>result.push(item));
    }
    else result.push(item);
  }
  return result;
}

module.exports = flatten;