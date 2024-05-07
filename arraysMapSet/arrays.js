let oceans = ["Pazifik", "Atlantik", "Indischen", "Arktischen"];
let oceans2 = new Array("Pazifik", "Atlantik", "Indischen", "Arktischen");

console.log(oceans2.length);
console.log(oceans2[oceans2.length - 1]);
// ist ein element im array vorhanden?
console.log(oceans2.includes("Arktischen"));
//einfügen an erster stelle / index 0
console.log(oceans2.unshift("silent"));
//einfügen an letzter stelle / index length -1
console.log(oceans2.push("antarktische"));
//löscht das letzte element im array
console.log(oceans2.pop());
//löscht das erste element im array
console.log(oceans2.shift());
//schneidet elemente aus dem Arry @params(startelement Index, endelement)
console.log("hallo " + oceans2.splice(1, 2));
console.log(oceans2);

let costumers = new Array();

//for-Schleife um die Elemente in ein neues Array zu setzen
for (let index = 0; index < oceans.length; index++) {
  const element = oceans[index];
  costumers.push(element);
}
console.log(costumers);

let car = [
  // Array Index 0
  // 0           1
  ["Toyota", "Auris"],
  //Array Index 1
  // 0      1
  ["BMW", "Z3"],
];

console.log(car[0][0]);
