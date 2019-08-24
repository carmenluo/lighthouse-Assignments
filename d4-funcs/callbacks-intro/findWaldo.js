const findWaldo = function(names, found){
  // for (let i = 0; i < names.length; i++){
  //   let name = names[i];
  //   if (name === 'Waldo') {
  //     found(i);
  //   }
  // }
  names.forEach((value,i) => {value === "Waldo" ? found(i) : void 0;
  });
}

const actionWhenFound = function(index) {
  console.log("Found him at index " + index);
}
findWaldo(['ALice','Bob', 'Waldo', 'Winston'], actionWhenFound);