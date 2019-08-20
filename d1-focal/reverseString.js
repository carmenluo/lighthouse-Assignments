'use strict';
for (let i = 2; i < process.argv.length; i++) {
    let result = '';
    let temp =  process.argv[i];
//   console.log(temp); 
    for (var j = temp.length - 1; j >= 0; j--){
        result += temp[j];
    }
    console.log(result);
}