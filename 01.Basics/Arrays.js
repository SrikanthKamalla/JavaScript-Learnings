// arrays are linear collection of data
let student1 = "harry";
let student2 = "adam";
let student3 = "bob";

let students = ["harry", "adam", "bob"];
console.log(students);

let arrayLength = students.length;

// in array we can store different types of data
let arr = [111, "google", 3.3, true];
console.log(arr[1]);

//Arrays are mutable

let fruits = ["Mango", "banana", "Apple"];
console.log(fruits);
fruits[1] = "orange";
console.log(fruits);
fruits[11] = "Banana";
console.log(fruits.length);

// Array Methods
let cars = ["BMW", "Audi", "Mahindra"];
cars.push("Maruthi"); // element added at end

cars.pop(); // delete from end & returns it

cars.unshift("Tata"); // element added at start

cars.shift(); // delete from start & returns it

console.log(cars.indexOf("Mahindra")); // returns the index of that element

console.log(cars.includes("BMW")); // returns true if that element present in the array or else returns false

let superCars = ["Ferrari", "Bugati"];

let fourWheelers = cars.concat(superCars); // merge two arrays and returns new array
console.log(fourWheelers);

fourWheelers.reverse(); // change the order of the elements to reverse order
console.log(fourWheelers);

//Array Sort Method
fourWheelers.sort(); // sort the elements in lexicographical order
console.log(fourWheelers);

let numbers = [12, 11, 13, 10, 3, 8, 7, 1, 5, 4, 9, 2, 6];
numbers.sort((a, b) => a - b); // sort the elements in numerical order
console.log(numbers);

// Multi-dimentional Arrays
let arrr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(arrr);
console.log(arrr[1][0]);
