console.log(Math);

//Methods
const Pi = Math.PI;
const E = Math.E;

// Objects
console.log(Math.abs(-65));

console.log(Math.pow(4, 2));

console.log(Math.floor(5.9));

console.log(Math.ceil(5.9));

console.log(Math.random());

// Random Number Generator (1 to 10)
let num = Math.random(); // generate random number b/w 0-1
num = num * 10;
num = Math.floor(num);
num = num + 1;
console.log(num);
// All steps combined
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("Random number: " + randomNum);

// Random Number Generator (20 to 25)
let randomNumber = Math.floor(Math.random() * 5) + 21;
console.log(randomNumber);
