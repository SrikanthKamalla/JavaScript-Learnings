// function saveDb(sucess, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     sucess();
//   } else {
//     failure();
//   }
// }

// saveDb(
//   () => {
//     console.log("sucess1 : data saved sucessfully");
//     saveDb(
//       () => {
//         console.log("sucess2 : data saved sucessfully");
//         saveDb(
//           () => {
//             console.log("sucess3 : data saved sucessfully");
//           },
//           () => {
//             console.log("failure3 : data not saved");
//           }
//         );
//       },
//       () => {
//         console.log("failure2 : data not saved");
//       }
//     );
//   },
//   () => {
//     console.log("failure1 : data not saved");
//   }
// );

function saveDb() {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("sucess : data saved sucessfully");
    } else {
      reject("failure : data not saved");
    }
  });
}

// let request = saveDb();
// request
//   .then(() => {
//     console.log(request);
//     console.log("then method");
//   })
//   .catch(() => {
//     console.log(request);
//     console.log("catch method");
//   });

//      OR

saveDb()
  .then((message) => {
    console.log(message);
    console.log("then method");
    return saveDb();
  })
  .then((message) => {
    console.log(message + "2");
    console.log("then method2");
    return saveDb();
  })
  .then((message) => {
    console.log(message + "3");
    console.log("then method3");
  })
  .catch((error) => {
    console.log(error);
    console.log("catch method");
  });
