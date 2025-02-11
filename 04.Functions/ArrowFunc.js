// const sum = (a, b) => {
//   console.log(a + b);
// };

// sum(4, 5);

// const mul = (a, b) => a * b;
// console.log(mul(7, 8));

// this keyword in Arrow Function
const Student = {
  name: "srikanth",
  marks: 98,
  property: this,

  // normal function
  getname: function () {
    console.log("Normal Function");
    console.log(this); // returns Student object
    console.log(this.name);
  },

  // arrow function
  getmarks: () => {
    console.log("Arrow Function");
    console.log(this); //returns window object
    console.log(this.marks);
  },
  // Example 2
  getInfo1: function () {
    setTimeout(() => {
      console.log(this); // Print Student Obj
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(this); // Print window Obj
    }, 2000);
  },
};
// Student.getname();
// Student.getmarks();
