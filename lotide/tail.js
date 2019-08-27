const assertEqual = require('./assertEqual');
const tail = function (arr) {
  if (arr === null) {
    return undefined;
  }
  else {
    return arr.slice(1);
  }
};
module.exports = tail;
