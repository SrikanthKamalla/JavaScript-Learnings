let url = "https://icanhazdadjoke.com/";
let btn = document.querySelector("button");
let p = document.querySelector("p");

async function jokesApi() {
  try {
    let config = { headers: { Accept: "application/json" } };
    let res = await axios.get(url, config);
    console.log(res.data.joke);
    return res.data.joke;
  } catch (error) {}
}
btn.addEventListener("click", async () => {
  let joke = await jokesApi();
  p.innerText = joke;
  btn.innerText = "Click for more jokes";
});
