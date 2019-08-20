const without = function(source, itemToRemove) {
  let result = [];
  result = source.filter((elementSource) => {
    for (var i = 0; i < itemToRemove.length ; i++){
      if (elementSource === itemToRemove[i]){
        return false;
      }
    }
    return true;
  });
  //   itemToRemove.forEach(element => {
  //     return elementSource === element ? false : true   
  //   });
  // });
  return result;
}
console.log(without([1, 2, 3], [1,2]));
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));