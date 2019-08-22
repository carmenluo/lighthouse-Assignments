const takeUntil = (array, callback) => {
  let results = [];
  for (let i = 0; i < array.length; i++){
    if (!callback(array[i])){
      results.push(array[i]);
    }
    else {
      break;}
  }
  return results;
}
const data1 = [1, 2, 7, 2, -7, 3, 4, 5];
const results1 = takeUntil(data1, x => x<0);
console.log(results1);

console.log('----');

const data2 = ["I've",'been','to', 'Hollywood',',',"I've",'been','to','Redwood'];
const results2 = takeUntil(data2 ,x=>x === ',');
console.log(results2);
