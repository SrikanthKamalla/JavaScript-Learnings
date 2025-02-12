let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

function change(obj) {
  obj.addEventListener("click", function () {
    console.dir(this);
    this.style.backgroundColor = "blue";
  });
}
change(btn);
change(h1);
change(h3);
change(p);
