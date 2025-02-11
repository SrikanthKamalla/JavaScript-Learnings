let greet = function (a) {
  console.log(a + ".Hello");
};

function hof(func, n) {
  //Higher order function
  for (let i = 1; i <= n; i++) {
    func(i);
  }
}

hof(greet, 5);

hof(function (a) {
  console.log(a + ".Namaste");
}, 10);

console.log();

// Higher Order Function returns a function
function functionFActory(request) {
  if (request == "odd") {
    let odd = function (a) {
      if (a % 2 == 1) {
        console.log(a + " is odd :true");
      } else {
        console.log(a + " is odd :false");
      }
    };
    return odd;
  } else if (request == "even") {
    let even = function (a) {
      if (a % 2 == 0) {
        console.log(a + " is even :true");
      } else {
        console.log(a + " is even :false");
      }
    };
    return even;
  } else {
    return "invaid request";
  }
}
let request = "odd";
let HOF = functionFActory(request);
HOF(9);

request = "odd";
HOF = functionFActory(request);
HOF(10);

request = "even";
HOF = functionFActory(request);
HOF(10);

request = "even";
HOF = functionFActory(request);
HOF(9);
