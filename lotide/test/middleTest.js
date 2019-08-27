const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
assertArraysEqual([3], middle([1,2,3,4,5]));
assertArraysEqual([], middle([1,2]));
assertArraysEqual(['world'], middle(['hello', 'world', 'carmen']));