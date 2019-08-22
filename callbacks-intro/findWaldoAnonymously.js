const findWaldo = function (names, found) {
  names.forEach((value, i) => value === 'Waldo' ? found(i) : void 0 );
}
//findWaldo(['ALice','Bob', 'Waldo', 'Winston'], actionWhenFound);
findWaldo(['Alice', 'Bob', 'Waldo', 'Winston'], function (index) {
  console.log('Waldo is located at:', index);
})