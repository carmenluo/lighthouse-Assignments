const findKey = function (objects, callback){
  for (let item in objects) {
    if (callback(objects[item])) {
      return item;
    }
  }
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🚀🚀🚀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😢😢😢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const test1 = findKey({
  'Blue Hill'  : {stars: 1},
  'Akaleri'    : {stars: 3},
  'noma'       : {stars: 2},
  'elBully'    : {stars: 3},
  'Ora'        : {stars: 2},
  'Akelarre'   : {stars: 3}
}, x => x.stars === 4);
const test2 = findKey({
  'Blue Hill'  : {stars: 1},
  'Akaleri'    : {stars: 3},
  'noma'       : {stars: 2},
  'elBully'    : {stars: 3},
  'Ora'        : {stars: 2},
  'Akelarre'   : {stars: 3}
}, x => x.stars === 3);

assertEqual(test1, undefined);
assertEqual(test2, 'Akaleri');