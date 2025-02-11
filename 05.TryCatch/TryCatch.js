// console.log(a); gives you a error

console.log("Hello1");
console.log("Hello1");
try {
  console.log(a);
} catch {
  console.log("caurht an error. variable is not defined");
}
console.log("Hello2");
console.log("Hello2");

try {
  console.log(a);
} catch (e) {
  console.log(e);
  console.log("caught an error. variable is not defined");
}
