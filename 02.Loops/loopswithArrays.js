let fruits = ["apple", "banana", "mango", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log();

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}
console.log();

// loops with 2D arrays
let numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    process.stdout.write(numbers[i][j] + " ");
  }
  console.log();
}
console.log();

// for-of loop
let cars = ["audi", "bmw", "maruthi", "kia"];

for (const car of cars) {
  console.log(car);
}
console.log();

let str = "For-oFLoop";
for (const char of str) {
  console.log(char);
}
console.log();

// Nested for-of loop
let lists = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (const list of lists) {
  for (const item of list) {
    process.stdout.write(item + " ");
  }
  console.log();
}
