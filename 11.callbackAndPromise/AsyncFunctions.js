// async function greet() {
//   //   throw "error occur";
//   return "hello";
// }

// greet()
//   .then((message) => {
//     console.log(message);
//     console.log("greet then");
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log("greet catch");
//   });

// Await function
function greet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.random() * 10;
      console.log("in set timeout");
      resolve(num);
    }, 1000);
  });
}

async function demo() {
  await greet();
  greet();
}

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.random() * 10;
      if (num > 4) {
        reject("error occur");
      }
      h1.style.color = color;
      resolve(`${color} color changed`);
      console.log(`${color} color changed`);
    }, delay);
  });
}

async function demonstrate() {
  try {
    await changeColor("red", 1000);
    await changeColor("blue", 1000);
    await changeColor("green", 1000);
    await changeColor("orange", 1000);
    await changeColor("yellow", 1000);
    await changeColor("azure", 1000);
    await changeColor("pink", 1000);
  } catch (error) {
    console.log(error);
  }
  // demonstrate();
}
