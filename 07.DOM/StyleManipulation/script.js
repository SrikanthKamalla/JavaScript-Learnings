let body = document.getElementsByTagName("body");
body[0].style.backgroundColor = "azure";

let h1 = document.getElementsByTagName("h1");
h1[0].style.color = "purple";
h1[0].style.backgroundColor = "grey";

//
// classList
let img = document.querySelector("img");
console.log(img.classList);
img.classList.add("abc");
console.log(img.classList);
img.classList.remove("abc");
console.log(img.classList);

console.log(img.classList.contains("images"));

console.log(img.classList.toggle("images")); //revome if it contain
console.log(img.classList.toggle("images")); // add if it not contain

//
//Navigation on page
let div = document.querySelector("div");
console.log(div.childElementCount);
console.log(div.children);
console.log(img.parentElement);
console.log(img.previousElementSibling);
console.log(h1[0].nextElementSibling);
img.previousElementSibling.style.color = "red";
