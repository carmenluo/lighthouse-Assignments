const args = process.argv;
const sum = function(args) {
  let args1 = parseInt(args.slice(2, 3));
  let args2 = parseInt(args.slice(3, 4));
  return args1 + args2;
};
console.log(sum(args));
     