let btn = document.querySelector("button");
let div = document.querySelector("div");
let h3 = document.querySelector("h3");
let body = document.querySelector("body");

btn.addEventListener("click", () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let color = `rgb(${r},${g},${b})`;
  let bgc = `rgb(${r},${g},${b},0.2)`;
  div.style.backgroundColor = color;
  h3.innerText = color;
  body.style.backgroundColor = bgc;
});

function randomColor() {}
