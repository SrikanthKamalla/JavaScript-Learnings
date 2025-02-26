let url = "https://catfact.ninja/fact";
let p = document.querySelector("p");

async function getFact() {
  try {
    let res = await axios.get(url);
    // let data = await res.json();
    return res.data.fact;
    // console.log(res.data.fact);
  } catch (error) {
    return "No Fact Found";
  }
}

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  p.innerText = await getFact();
});
