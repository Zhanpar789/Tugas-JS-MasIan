// function mean(angka) {
//   const rata = angka.reduce((a,b) => a + b, 0) / angka.length
//   console.log(rata);
// }
// mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3])
// console.log();
// mean([2, 3, 2, 3]);
// console.log();
// mean([3, 3, 3, 3, 3]);

const mean = (array) =>{
  var total = 0;
  var count = 0;

  array.forEach(function(item){
    total += item;
    count++;
  })

  const i = total / count;
  return i.toPrecision(3)
}
console.log(mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]));
console.log(mean([2, 3, 2, 3]));
console.log(mean([3, 3, 3, 3, 3]));

