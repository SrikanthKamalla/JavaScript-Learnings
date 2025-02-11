let participants = [
  "srinivas",
  "Srikanth",
  "Viswas",
  "Vinay",
  "Nandha Kishore",
];

let [Winner, Runnerup, , ...others] = participants;
console.log(Winner);
console.log(Runnerup);
console.log(others);

//
// Destructuring objects

let student = {
  name: "Srinivas",
  age: 14,
  class: ["Telugu", "English", "Hindi"],
  username: "srinivasDappu",
  password: "dappucnu",
  //   city: "Zahirabad",
};

let {
  username: user,
  password: passkey,
  city: location = "Hyderabad",
} = student;
console.log(user, passkey, location);
