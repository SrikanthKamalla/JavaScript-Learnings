let sum = 89; //Global Scope
function CalSum(a, b) {
  let sum = a + b; // Function Scope
  console.log(sum);
}
CalSum(3, 4);
console.log(sum);

// Block Scope
{
  let a = 9;
  var b = 99;
  console.log(a);
  console.log(b);
}
// console.log(a); // we can't use let and const out side its block scope
console.log(b);
console.log();

// Lexical scope
function outerFunc() {
  let x = 8;
  let y = 9;
  function innerFunc() {
    console.log(x);
    console.log(y);
  }
  innerFunc();
}
outerFunc();

let Scope = "Global Scope";

function outerFunction() {
  let Scope = "Local Scope";
  console.log(Scope); // Local Scope

  function innerFunction() {
    Scope = "Lexical Scope";
    console.log(Scope); // Lexical Scope
  }

  innerFunction();
}

console.log(Scope); // Global Scope
outerFunction();
