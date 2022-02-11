function minMax(array) {
  const Small = Math.min(...array);
  const Big = Math.max(...array);
  console.log([Small,Big]);
}
minMax([1,2,3,4,5]);
console.log();
minMax([1]);
console.log();
minMax([2334454, 5]);