const assert = require('chai').assert;
//const assertEqual = require('../assertEqual');
const tail = require('../tail');
const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!  
describe("#tail", () => {
  it(`returns ${result} for ["Lighthouse", "Labs"]`, () => {
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
});
