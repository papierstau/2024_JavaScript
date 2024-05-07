for (let index = 0; index < 10; index++) {
  console.log(index);
}

arr = ["hallo", "name", 1, 2, 3];
for (const i of arr) {
  console.log(i);
}

let person = {
  name: "Alexander Schwarz",
  location: "Cologne",
};

for (const [key, value] of Object.entries(person)) {
  console.log(" Schüssel: " + key + " Wert: " + value);
}

Object.entries(person).forEach(([key, value]) => {
  if (key == "location") {
    console.log(key + " " + value);
  }
});

let i = true;
while (i) {
  console.log(arr);
  i = false;
}

i = 0;
do {
  console.log(i);
  //   i = false;
  i++;
} while (i < 10);
