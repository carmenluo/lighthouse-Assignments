const obfuscate = function (password) {
  //  console.log(password);
  let result = '';
  for (let i of password) {
    switch (i) {
      case 'a':
        result += '4';
        break;
      case 'e':
        result += '3';
        break;
      case 'o':
        break;
      case 'l':
        result += '1';
        break;
      default:
        result += i;
    }
  }
  return result;
};
console.log(obfuscate(process.argv[2]));
console.log(obfuscate("password"));