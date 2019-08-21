const letterPositions = function(sentence) {
  const results = {};
  let sentenceWithoutSpaces = sentence.replace(/\s/g,"");
  for (i of sentenceWithoutSpaces) {
    // if (results[i]) {
    //   results[i].push(sentenceWithoutSpaces.indexOf(i));
      
    // }
    // else {
    //   results[i] = [sentenceWithoutSpaces.indexOf(i)];
    // }

  // }
  results[i] = indexOfAll(sentenceWithoutSpaces, i);
  }
  console.log(results);
  return results;
};
const indexOfAll = function(source, itemToFind){
  let result = [];
  let ind = source.indexOf(itemToFind);
  while (ind !== -1){
    result.push(ind);
    ind = source.indexOf(itemToFind, ++ind);
  }
  return result;
}
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

asserArraysEqual(letterPositions("hello")['l'], [2,3]);
asserArraysEqual(letterPositions("hhello")['h'], [0,1]);
asserArraysEqual(letterPositions("hello")['e'], [1]);
asserArraysEqual(letterPositions("hello")['o'], [4]);


