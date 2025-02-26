let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((response) => {
//   // console.log(response);
//   return response.json();
// })
// .then((data) => {
//   console.log(data.fact);
//   return fetch(url);
// })
// .then((response2) => {
//   // console.log(response2);
//   return response2.json();
// })
// .then((data2) => {
//   console.log(data2.fact);
// })
// .catch((err) => {
//   console.log("error ", err);
// });

console.log("this line print before the above code exection");

// Fecth with async and await

async function getFact() {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data.fact);
}
