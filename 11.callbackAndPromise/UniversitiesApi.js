let url = "http://universities.hipolabs.com/search?name=";
// let country = "india";
let input = document.querySelector("input");
let btn = document.querySelector("button");
let ol = document.querySelector("ol");

async function getUniversities(country) {
  try {
    let res = await axios.get(url + country);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    input.value = "";
    // console.log(".........................", error);
    // alert("please enter correct country");
    // return [];
  }
}

btn.addEventListener("click", async () => {
  let country = input.value;
  if (country === "") {
    alert("please enter country");
  } else {
    ol.innerHTML = ``;
    let data = await getUniversities(country);
    for (const clg of data) {
      let li = document.createElement("li");
      li.innerHTML = clg.name;
      ol.appendChild(li);
    }
  }
  input.value = "";
});
