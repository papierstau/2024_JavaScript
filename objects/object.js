const person = {
  name: {
    first: "Bob",
    last: "Müller",
  },
  age: 89,
  bio: function () {
    console.log(
      `${this.name.first} ${this.name.last} is ${this.age} years old`
    );
  },
};

person["bio"]();

person["eyes"] = "blue";
person.farewell = function () {
  console.log("Bye Bye");
};
person.farewell();

function Person(name) {
  this.name = name;
}

const giles = new Person("Giles");

class Person2 {
  #name;
  #gebDatum;
  constructor(name, gebDatum) {
    this.#name = name;
    this.#gebDatum = gebDatum;
  }
  getName() {
    return this.#name;
  }
  getGebDatum() {
    return this.#gebDatum;
  }
}

const peter = new Person2("peter");

class Student extends Person2 {
  subject;
  constructor(name, gebDatum, subject) {
    super(name, gebDatum);
    this.subject = subject;
  }
}

const walsh = new Student("Walsh", "2005-05-07", "Computer Sience");
walsh.name = "Gerda";
walsh.subject = "Chemie";
console.log(walsh.subject);

// methode mit mwst
class Artikel {
  name;
  artikelNummer;
  preis;
  kategorie;

  constructor(name, artikelNummer, preis, kategorie) {
    this.name = name;
    this.artikelNummer = artikelNummer;
    this.preis = preis;
    this.kategorie = kategorie;
  }

  mwSt() {
    let a = 1.07;
    let b = 1.19;
    if (this.kategorie == "a") {
      return this.preis * a;
    } else {
      return this.preis * b;
    }
  }
}

const art = new Artikel("Boot", "B001", 25.67, "a");
const art2 = new Artikel("Rose", "R0001", 4.32, "b");

function gesamtPreis() {
  let endSumme = 0;
  for (i of arguments) {
    endSumme += i.mwSt();
  }
  return endSumme.toFixed(2);
}
console.log(art);
console.log(gesamtPreis(art, art2));

let item = Object.create(Object.prototype, {
  name: {
    value: "(❁´◡`❁)",
    writable: true,
    configurable: true,
  },
});
item.name = "hallo";
console.log(item.name);
