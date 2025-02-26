let url = "https://dog.ceo/api/breeds/image/random";
let img = document.querySelector("img");
let btn = document.querySelector("button");

async function dogApi() {
  try {
    let res = await axios.get(url);
    return res.data.message;
    // console.log(res.data.message);
  } catch (error) {
    img.setAttribute("alt", "image not found");
  }
}

btn.addEventListener("click", async () => {
  let image = await dogApi();
  img.setAttribute("src", image);
});
