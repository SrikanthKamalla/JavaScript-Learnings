// logical AND(&&)
if (true && ture) {
  console.log("if the both conditions are true then only it will be ture");
}
let marks = 90;
if (marks >= 33 && marks >= 80) {
  console.log("A+");
}

// logicall OR(||)
if (true || false) {
  console.log("if the both conditions are false then only it will be false");
}
let marks2 = 70;
if (marks2 >= 33 || marks2 >= 80) {
  console.log("Pass");
}

// logical not(!)
if (!false) {
  console.log("if the condition is true, it will make it false and vice versa");
}

// Falsy values
// false, 0, -0, 0n(BigInt value),  ""(empty string), null, undefined, NaN

// Truthy values
// true, !0(non-zero), "#"(non empty string), etc...
