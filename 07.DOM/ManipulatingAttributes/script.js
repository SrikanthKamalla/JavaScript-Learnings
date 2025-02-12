let heading = document.querySelector("h1");
console.log(heading.getAttribute("id"));

heading.setAttribute("id", "heading1");
console.log(heading.getAttribute("id"));

let img = document.getElementsByTagName("img");
img[0].setAttribute("alt", "github_Image");
img[0].setAttribute("class", "width55");
