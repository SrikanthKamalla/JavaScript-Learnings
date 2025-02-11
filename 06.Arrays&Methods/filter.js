let arr = [2, 9, 5, 8, 4, 7, 6, 3];
let evenNumbers = arr.filter((num) => {
  // return the num if the given condition true
  return num % 2 == 0; // condition
});

console.log(evenNumbers);

let oddNumbers = arr.filter((num) => {
  return num % 2 != 0;
});
console.log(oddNumbers);
