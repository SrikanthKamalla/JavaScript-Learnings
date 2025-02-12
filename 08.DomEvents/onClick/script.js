let btns = document.querySelectorAll("button");
for (const btn of btns) {
  btn.onclick = func; // we should not use () at this line, if we use () at this line the function called before click
  btn.onmouseenter = function () {
    console.log("on mouse enter");
  };
}

function func() {
  alert("click on submit button");
}

//

let btn1 = document.getElementById("btn1");
// console.dir(btn1);
btn1.onclick = alertfunc;
function alertfunc() {
  alert("btn1 was clicked");
}

let btn2 = document.getElementById("btn2");
// console.dir(btn2);
btn2.onclick = function () {
  alert("btn2 was clicked");
};
