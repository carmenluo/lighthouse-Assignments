const assertEqual = function (actual, expected) {
  let act = actual.join();
  let exp = expected.join();
  if (act == exp) {
    console.log(`${actual} is equal to ${expected}`);
  }
  else {
    console.log(`${actual} not equal to ${expected}`);
  }
};
const tail = function (arr) {
  if (arr === null) {
    return undefined;
  }
  else {
    return arr.slice(1);
  }
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!  
