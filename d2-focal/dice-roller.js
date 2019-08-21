const rollDice = function(numOfDices) {
    let result = [];
    let numOfDicesOriginal = numOfDices;
    while (numOfDices > 0){
      result.push(getRandomInt(5));
      numOfDices --;
    }
    return `Rolled ${numOfDicesOriginal} dice: ${result}`;
}
const getRandomInt = function(max){
  return Math.ceil(Math.random() * max);
}
console.log(rollDice(process.argv.slice(2)));