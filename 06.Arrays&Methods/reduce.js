let arr = [8, 3, 9, 6, 4, 1, 7];
let result = arr.reduce((res, num) => {
  console.log(res, num);
  return res - num;
}); //res ->arr[0] and nums starts from arr[1]
console.log(result); // result -> -22

let maximum = arr.reduce((res, num) => {
  if (res > num) {
    return res;
  } else {
    return num;
  }
});
console.log(maximum);

let minimum = arr.reduce((res, ele) => {
  if (res > ele) {
    return ele;
  } else {
    return res;
  }
});
console.log(minimum);
