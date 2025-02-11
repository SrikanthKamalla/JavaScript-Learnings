// Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Unary Operators
console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);

// Assignment Operators
b = a;
b += a;
b -= a;
b *= a;
b /= a;
b %= a;

// Comparison Operators
let age = 16;
console.log(age > 18); //false
console.log(age >= 18); //false
console.log(age < 18); //true
console.log(age <= 18); //true
console.log(age == 18); //false
console.log(age != 18); //true
console.log(age === 18); //false

// Non-numbers Comparison
console.log("a" < "A"); //false
console.log("a" > "b"); //false
console.log("b" < "c"); //true
console.log("B" < "C"); //true
console.log("*" < "&"); //false
