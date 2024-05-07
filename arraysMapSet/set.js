// Set dürfen nur einzigartige Elemente vorkommen
const letter = new Set(["a", "b", "c", "c"]);
const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters.size);
// letters.clear();
letters.delete("b");
letters.add("b");
console.log(letters);
