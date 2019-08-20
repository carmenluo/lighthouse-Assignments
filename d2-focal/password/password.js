
const obfuscate = function(password) {
  console.log(password);
  let result = '';
  for (i of password) {
    switch (i) {
      case 'a':
        result += '4';
        break;
      case 'e':
        result += '3';
        break;
      case 'o':
        result += '0';
        break;
      case 'l':
        result += '1';
        break;
      default:
        result += i;
    }
  }
  return result;
}
console.log(obfuscate(process.argv.slice(2)[0]));
console.log(obfuscate("password"));