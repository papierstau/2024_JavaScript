/**
 *
 * @param {*} x
 * @param {*} y
 */
function add(x, y, ...restArgs) {
  result = x + y;
  console.log(arguments.length);
  console.log(restArgs);
}
// add(3, 4, 7, 9);

function minus(zahl1 = 3, zahl2 = 5) {
  result = zahl1 - zahl2;
  console.log(result);
}

// minus((zahl2 = 4));
// minus(6, 3);

function hello() {
  return "Hallo Welt";
}

hello = function () {
  return "Hallo";
};

hello = () => {
  return "Welt";
};

kaffee = (e) => console.log("Kaffepause " + e);
kaffee("e");
