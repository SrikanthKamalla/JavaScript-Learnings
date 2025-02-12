let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  //   let username = document.querySelector("#username");
  //   let password = this.elements[1];
  //   console.log(username.value);
  //   console.log(password.value);
});

let trackBigChange = document.querySelector("#trackBigChange");
trackBigChange.addEventListener("change", function () {
  console.log("input changed");
  console.log(this.value);
});

let trackSmallChange = document.querySelector("#trackSmallChange");
trackSmallChange.addEventListener("input", function () {
  console.log("input changed");
  console.log(this.value);
});
