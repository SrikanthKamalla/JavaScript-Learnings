// function name(params) {
//     opration
// }

function print() {
  console.log("Function called");
}

// fucntion calling
print();

function print1to10() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

print1to10();

function isAdult() {
  let age = 19;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }
}

isAdult();
