let str = "   Hello World!  ";
str = str.trim(); //remove spaces from start and end, and return a string
console.log(str);

//String immuatable
let password = "    javascript@123   ";
console.log(password.trim()); //javascript@123 =>it returns the new string, but not change the original string

console.log(password); //    javascript@123

let firstNname = "srikanht";

firstNname = firstNname.toUpperCase(); // converts the all  characters to Upper case and returns a string
console.log(firstNname); //SRIKANTH

firstNname = firstNname.toLowerCase(); // converts the all  characters to Lower case and returns a string
console.log(firstNname); //srikanth

// String Methods with Arguments
let lastName = "Kamalla";
console.log(lastName.indexOf("a")); // returns the first occured index. If not occured then return -1
console.log(lastName.indexOf("mall")); //2
console.log(lastName.indexOf("z")); //-1

console.log(lastName.lastIndexOf("a")); // returns the last occured index. If not occured then return -1

// Mathod Chaining
let fullName = "   srikanth kamalla   ";
fullName = fullName.trim().toUpperCase(); //using multiple methods at a time and it returns a string
console.log(fullName);

// Slice
let alphabets = "abcdefghijklmnopqrstuvwxyz";

console.log(alphabets.slice(5)); // it returns a string with all characters after given index
console.log(alphabets.slice(2, 8)); //it returns a string form starting index to before ending index
console.log(alphabets.slice(-5)); //  the index is replaced with (length of the string - |index given|) OR returns string of characters from last

// replace
let strs = "ILoveCoding";
console.log(strs.replace("Love", "do")); // first string is replace with second string only for one time and returns a new string

// repeat
let s = "str";
console.log(s.repeat(3)); // repeat the string for given number of times
