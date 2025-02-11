// Function with Arguments
function printInfo(name, age) {
  console.log(`${name} age is ${age}`);
}

printInfo("srikanth", 20);

function Sum(a, b) {
  console.log(a + b);
}
Sum(324, 234);

// Function with return keyword
function Add(a, b) {
  return a + b;
}

let Addition = Add(9, 8);
console.log(Addition);
// or
console.log(Add(5, 6));

function IsAdult(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Child";
  }
}

let res = IsAdult(13);
console.log(res);

console.log(IsAdult(19));
