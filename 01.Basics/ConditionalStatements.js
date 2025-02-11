// if Statement
let age = 21;
if (age >= 18) {
  console.log("You can Vote");
}
if (age < 18) {
  console.log("You can't Vote");
}

// Practic problem
let light = "red";
if (light == "red") {
  console.log("stop");
}

if (light == "green") {
  console.log("Go");
}

if (light == "yellow") {
  console.log("Slow Down");
}

// else if Statement
let marks = 75;
if (marks >= 80) {
  console.log("A+");
} else if (marks >= 60) {
  console.log("A");
} else if (marks >= 33) {
  console.log("B");
} else if (marks < 33) {
  console.log("F");
}

// Practice problem

let size = "L";
if (size == "XL") {
  console.log(`price for ${size} size popcorn is 250 Rs.`);
} else if (size == "L") {
  console.log(`price for ${size} size popcorn is 200 Rs.`);
} else if (size == "M") {
  console.log(`price for ${size} size popcorn is 100 Rs.`);
} else if (size == "S") {
  console.log(`price for ${size} size popcorn is 50 Rs.`);
}

// Nested if-else
if (marks >= 33) {
  console.log("Pass ");
  if (marks >= 80) {
    console.log("O");
  } else {
    console.log("A");
  }
} else {
  console.log("Better luck next time");
}

// switch Statement
let color = "red";
switch (color) {
  case "red":
    console.log("stop");
    break;
  case "green":
    console.log("Go");
    break;
  case "yellow":
    console.log("Slow Down");
    break;
  default:
    console.log("Signal not working");
    break;
}
