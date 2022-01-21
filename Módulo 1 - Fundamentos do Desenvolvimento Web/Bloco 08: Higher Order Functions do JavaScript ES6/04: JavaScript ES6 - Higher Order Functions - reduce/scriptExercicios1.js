const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

//1 - Dada uma matriz, transforme em um array.
console.log(arrays);

function flatten() {
  return arrays.reduce((acc, item) => acc.concat(item));
}

console.log(flatten());

