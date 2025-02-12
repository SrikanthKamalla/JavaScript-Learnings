// Selecting by HTML ID
let heading = document.getElementById("myHeading");
console.dir(heading);
heading.innerHTML = "HEADING changed by 'getElementById'";

//
// Selecting by HTML Class
let paragraph = document.getElementsByClassName("myParagraph");
paragraph[0].innerHTML = `changing the content using 'getElementByClassName' in JS`;

//
// Selecting by HTML tag name
let heading2 = document.getElementsByTagName("h2");
for (let i = 0; i < heading2.length; i++) {
  heading2[i].innerHTML = `${
    i + 1
  }. Heading 2 changed by 'getElementsByTagName'`;
}

//
// Selecting by Query Selectors
let heading3 = document.querySelector("h3");
heading3.innerHTML = ` changed by querySelector`;

let ielements = document.querySelectorAll("i");
for (let i = 0; i < ielements.length; i++) {
  ielements[i].innerHTML = `changed by querySelectorAll `;
}
