let btn = document.querySelector("button");

btn.addEventListener("click", function (event) {
  console.log(event);
  console.log("button clicked");
});
let input = document.querySelector("input");

input.addEventListener("keydown", function (event) {
  if (event.code == "ArrowDown") {
    console.log("character moved backward");
  } else if (event.code == "ArrowUp") {
    console.log("character moved forward");
  } else if (event.code == "ArrowLeft") {
    console.log("character moved left");
  } else if (event.code == "ArrowRight") {
    console.log("character moved right");
  } else {
    console.log("you choose wrong option");
  }
});
