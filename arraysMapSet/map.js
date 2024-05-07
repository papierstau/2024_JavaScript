const fruits = new Map();

fruits.set("apples", [500, "test"]);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
console.log(fruits.get("apples"));
console.log(fruits.entries());
console.log(fruits.keys());
console.log(typeof fruits);
