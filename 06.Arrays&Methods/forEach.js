let arr = [8, 3, 9, 6, 4, 1, 7];

let print = function (ele) {
  console.log(ele);
};
// arr.forEach(print);

// or

// arr.forEach((ele) => {
//   console.log(ele);
// });

// for objects
let objArr = [
  {
    name: "Srinivas",
    marks: 97,
  },
  {
    name: "Srikanth",
    marks: 92,
  },
  {
    name: "Viswas",
    marks: 95,
  },
  {
    name: "Vinay",
    marks: 95,
  },
  {
    name: "Nandha Kishor",
    marks: 93,
  },
];

objArr.forEach((student) => {
  console.log(student.name, ":", student.marks);
});
