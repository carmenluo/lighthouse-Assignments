const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🚀🚀🚀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😢😢😢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sourceString){
  let stringNoSpaces = sourceString.replace(/\s/g, '');
  let result = {};
  for (i of stringNoSpaces){
    if (result[i]){
      result[i] += 1;
    }
    else {
      result[i] = 1;
    }
  }
  return result;
}
const expected = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};
assertEqual(countLetters("lighthouse in the house")['l'], expected['l']);
assertEqual(countLetters("lighthouse in the house")['i'], expected['i']);
assertEqual(countLetters("lighthouse in the house")['g'], expected['g']);
assertEqual(countLetters("lighthouse in the house")['h'], expected['h']);