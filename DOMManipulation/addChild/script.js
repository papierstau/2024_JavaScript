window.onload = () => {
  const heading = document.createElement("h1");
  const headingText = document.createTextNode("Big Heading!");
  heading.appendChild(headingText);
  document.body.appendChild(heading);
};
const parent = document.querySelector(".parent");
const addChild = document.body.querySelector("#add-child");
const removeChild = document.querySelector("#remove-child");

addChild.addEventListener("click", () => {
  const child = document.createElement("div");
  child.classList.add("child");
  child.textContent = "child";
  parent.appendChild(child);
});

removeChild.addEventListener("click", () => {
  const child = document.querySelector(".child");
  parent.removeChild(child);
});

function generateTable() {
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");
  for (let i = 0; i < 2; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 2; j++) {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  document.body.appendChild(tbl);
  tbl.setAttribute("border", 2);
}

document.querySelector("#table").addEventListener("click", generateTable);
