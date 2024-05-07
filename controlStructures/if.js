if (6 < 5) {
  console.log("Hallo");
} else {
  console.log("Welt");
}

let name = "Alex";
let location = "NRW";
let country = "Ger";
let phone = "0221";

if (name === "Klaus") {
  console.log("if condition");
} else if (location === "NRW" && name === "Alex") {
  console.log("else if condition");
} else {
  console.log("else");
}

if (
  name == "Alex" ||
  (location == "B" && country == "Ger" && phone == "0221")
) {
  if (true) {
    console.log("Hello");
  }
  console.log(true);
} else {
  console.log(false);
}
//ternärer Opertor bedingung ? true(if) : false(else)
x = 10 < 9 ? console.log("ja") : console.log("nein");
car = "Opel";

let masseinheit = 1;
switch (masseinheit) {
  case 1:
    console.log("case 1");
    break;
  case 2:
    console.log("case 5");
    break;
  default:
    console.log("default");
}
