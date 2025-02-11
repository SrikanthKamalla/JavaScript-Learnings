let age = 21; //number
let merks = 89.5;
let tempareture = -3;
let a = 10;
let b = 6;
//operations on number
let addition = a + b;
let subtraction = a - b;
let multplication = a * b;
let division = a / b;
let remainder = a % b;
let power = a ** b;

let num = NaN; //Not-A-Number

//operation Precedence
//  =>   () ,   ** ,   *,/,%   +,-

let year = 2025;
year = year + 1;
year += 1;
year++; //post increment
++year; //pre increment

year = year - 1;
year -= 1;
year--; //post decrement
--year; //pre decrement

let fullName = "Srikanth Kamalla"; //String

//concatenation
let firstName = "Srikanth";
let lastName = "Kamalla";
let FullName = firstName + " " + lastName;

let nameLength = FullName.length;

let areYouMajor = true; //boolean

console.log("Hello World!");

console.log(areYouMajor, firstName, lastName);

let pen = 10;
let pencil = 5;
console.log(`The total price is: ${pen + pencil} Rupees.`);
