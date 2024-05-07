// primitive Datentypen
// string
const favSport = "volleyball";

// number
const age = 47;
const float = 2.1;
const bigInt = 35n;

// boolean
const bool = true;

// Null
const x = null;

// undefined
const y = undefined;

// Symbol
const sym = Symbol();

// nicht-primitive Datentypen
// Array
const arr = [1,2,3,"test"];
// console.log(arr[4]);

// functions
function helloworld(){
    console.log("Hello World");
}
// Object
let toyota = {
    type: "Hybrid",
    color: "red"
}
console.log(typeof toyota);
console.log(toyota["color"]);