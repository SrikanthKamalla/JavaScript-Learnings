let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve(`${color} color changed`);
    }, delay);
  });
}

changeColor("red", 1000)
  .then((message) => {
    console.log(message);
    return changeColor("orange", 1000);
  })
  .then((message) => {
    console.log(message);
    return changeColor("green", 1000);
  })
  .then((message) => {
    console.log(message);
    return changeColor("blue", 1000);
  })
  .then((message) => {
    console.log(message);
    return changeColor("yellow", 1000);
  })
  .then((message) => {
    console.log(message);
    return changeColor("azure", 1000);
  })
  .then((message) => {
    console.log(message);
    // return changeColor("orange",1000);
  });

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("yellow", 1000);
//     });
//   });
// });

// changeColor("red")
//   .then((color) => {
//     h1.style.color = color;
//     return changeColor("orange",1000);
//   })
//   .then((color) => {
//     h1.style.color = color;
//     return changeColor("green");
//   })
//   .then((color) => {
//     h1.style.color = color;
//     return changeColor("yellow");
//   })
//   .then((color) => {
//     h1.style.color = color;
//   });
