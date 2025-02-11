let arr = [9, -5, 8, 4, 7, 6, 3];

let minimum = Math.min(...arr);
console.log(minimum);

let newArr = [...arr];
newArr.push(99);

let data = {
  name: "Srinivas",
  email: "dappucnu.@gmail.com",
};

let dataCopy = { ...data, id: 202 };
console.log(dataCopy);

const obj = { ...arr };
console.log(obj);
