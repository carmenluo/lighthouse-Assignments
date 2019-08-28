const assert = require('chai').assert;
const flatten = require('../flatten');
//asserArraysEqual(['hello','world','carmen'],flatten([['hello','world'],['carmen']]));
describe("#flatten", () => {
  it("returns 'hello','world','carmen' for [['hello','world'],['carmen']]", () => {
    assert.deepEqual(flatten([['hello','world'],['carmen']]), ['hello','world','carmen']);
  });
});