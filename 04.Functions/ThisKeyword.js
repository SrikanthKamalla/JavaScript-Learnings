const student = {
  name: "Srikanth",
  age: 21,
  eng: 92,
  mat: 98,
  sci: 96,
  TotalMarks() {
    console.log(this.eng + this.mat + this.sci);
  },
};

student.TotalMarks();
