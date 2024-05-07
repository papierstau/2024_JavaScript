// 5 Wege um Elemente zu "finden"
const item = document.getElementById("item");
console.log(item);
item.style.height = "250px";
document.getElementById("item").style.backgroundColor = "red";
console.log(item);

const content = document.getElementsByClassName("content");
content[0].style.height = "350px";
content[0].style.backgroundColor = "blue";
// content[0].innerText += "Lorem ipsum";
console.log(content);

const tags = document.getElementsByTagName("div");
console.log(tags);

const query = document.querySelector(".content");
console.log(query);

const queryAll = document.querySelectorAll(".content");
console.log(queryAll);

const h1 = document.querySelector("h1");

h1.setAttribute("class", ".content");

console.log(query.childNodes);
