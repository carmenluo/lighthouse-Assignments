'use strict';
for (let i = 2; i < process.argv.length; i++) {
    let result = '';
    let temp =  process.argv[i];
//   console.log(temp); 
    for (var j = 1; j <= temp.length - 1; j++){
        result += temp[j];
    }
    result += temp[0] + "ay";
    console.log(result);
}