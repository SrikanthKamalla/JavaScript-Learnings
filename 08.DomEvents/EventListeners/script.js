const btn1 = document.getElementById("bnt1");
// console.dir(btn1);
// element.addEventListener(event,callback function)
btn1.addEventListener("click", function () {
  console.log("addEventListener is executed");
});

const btn2 = document.getElementById("bnt2");
btn2.addEventListener("dblclick", function () {
  console.log("double click addEventListener is executed");
});
