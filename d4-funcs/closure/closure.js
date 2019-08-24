function makeIdGenerator() {
  let id = 0;
  return function () {
    id = + 1;
    return id;
  }
}
const nextId = makeIdGenerator();

console.log(nextId());
console.log(nextId());

const rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
}
console.log(rollDie());

function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let index = -1;
  return function () {
    index++;
    return list[index];
  }
}

const rollLoadedDie = makeLoadedDie();
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());

const countdownGenerator = function (x) {
  /* your code here */
  function innerFunc() {
    if (x > 0) {
      console.log(`T-minus ${x}`);
    }
    if (x === 0) {
      console.log("Blast off!");
    }
    if (x < 0) {
      console.log("Rockets already gone, bub!");
    }
    x--;
  }
  return innerFunc;
};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!

const wrapLog = function (callback, name){
  callback.name = name;
  return callback;

};

const area = function (x, y){
  return x * y;
}
const logArea = wrapLog(area, 'area');

console.log(logArea(5, 3));
console.log(logArea(3, 2));

const volume = function (x,y,z){
  return x * y * z;
}
const logVolume = wrapLog(volume, 'volume');
console.log(logVolume(5, 3, 2));
console.log(logVolume(3, 2, 4));