let arr = [9, 5, 8, 4, 7, 6, 3];

let doubledArr = arr.map((num) => {
  // map do the operation and return and it is stored in array
  return num * 2; // operation
});
// console.log(doubledArr);

// getting gpa from marks
let students = [
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

let gpa = students.map((student) => {
  return student.marks / 10;
});

console.log(gpa);
