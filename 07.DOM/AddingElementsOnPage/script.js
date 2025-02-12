let h1 = document.createElement("h1");
console.log(h1);
h1.innerText = `Hi i am new Heading`;

let body = document.querySelector("body");
body.appendChild(h1);

let p = document.createElement("p");
p.innerText = `Hello everyone this is new paragraph created using "createElement" and added into this page using "appendChild" `;
body.append(p);

let link = document.createElement("a");
link.innerText = "click here for more";
link.setAttribute("href", "https://chatgpt.com/");
body.append(link);

let btn = document.createElement("button");
btn.innerText = `Click me`;

// p.insertAdjacentElement("beforebegin", btn);
// p.insertAdjacentElement("beforeend", btn);
// p.insertAdjacentElement("afterbegin", btn);
p.insertAdjacentElement("afterend", btn);

// body.removeChild(btn);
btn.remove();
