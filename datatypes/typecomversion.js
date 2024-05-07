let conv;
let string = "1234"

// String to Number
conv = Number(string);


// Boolean to Number
conv = Number(true);

// Null to Number
conv = Number(null);

// Number to String
conv = String(12345);
conv = (45).toString();

conv = String(false);

// Boolean
conv = Boolean(12);
conv = Boolean("Hallo");
conv = Boolean(null);

const sum1 = 10;
const sum2 = '20';
let zahl1 = Number(sum1);
const result = Number(sum1) + Number(sum2);

console.log(result);
console.log(typeof result);