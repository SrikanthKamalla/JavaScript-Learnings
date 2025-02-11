const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
};

console.log(calculator.add(15, 6));
console.log(calculator.sub(15, 6));
console.log(calculator.mul(15, 6));
console.log(calculator.div(15, 6));

// and

const calculation = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
  div(a, b) {
    return a / b;
  },
};
console.log(calculation.add(15, 8));
console.log(calculation.sub(15, 8));
console.log(calculation.mul(15, 8));
console.log(calculation.div(15, 8));
