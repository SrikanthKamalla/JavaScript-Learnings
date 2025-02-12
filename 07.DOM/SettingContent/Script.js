// innerText -> show how the content display on screen
// innerHTML -> show how the code written in html file including tags, we can html tags in javascript
// textContect -> show how the code written in html file without tags,we can't html tags in javascript
let heading = document.getElementById("heading");
heading.innerText = `HEADING`;
let para = document.getElementsByClassName("para");
para[0].innerHTML = `<i>${para[0].innerText}<i>`;

let head = document.getElementById("heading3");
head.innerHTML = `<u>${head.innerText}</u>`;

let haf = document.getElementById("had");
haf.textContent = `${haf.textContent} world!`;
