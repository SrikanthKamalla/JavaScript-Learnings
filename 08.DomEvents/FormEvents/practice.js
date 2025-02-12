let text1 = document.querySelector("#text1");
text1.addEventListener("input", function () {
  let para1 = document.querySelector("#para1");
  para1.innerText = this.value;
});

let text2 = document.querySelector("#text2");
text2.addEventListener("change", function () {
  let para2 = document.querySelector("#para2");
  para2.innerText = this.value;
});
