for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log();
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
console.log();

// Print all odd number (1 to 15)
console.log("odd number (1 to 15)");
for (let i = 1; i <= 15; i += 2) {
  console.log(i);
}
console.log();

// Print all odd number (15 to 1)
console.log("odd number (15 to 1)");
for (let i = 15; i >= 1; i -= 2) {
  console.log(i);
}

// Print all even number (2 to 15)
console.log("even number (2 to 10)");
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
console.log();

// Print all even number (15 to 2)
console.log("even number (10 to 2)");
for (let i = 10; i >= 2; i -= 2) {
  console.log(i);
}

console.log();
//Multiplication Table for 5
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// Nested for loops

for (let i = 1; i <= 3; i++) {
  console.log(`outer loop ${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(j);
  }
}
