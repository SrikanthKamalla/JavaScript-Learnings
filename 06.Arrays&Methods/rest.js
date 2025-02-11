function sum(...args) {
  return args.reduce((s, e) => s + e);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
