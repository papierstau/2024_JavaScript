const box = document.querySelector(".box");

// box.addEventListener("mouseover", (e) => {
//   console.log(box.style.backgroundColor);
//   if (box.style.backgroundColor == "blue") {
//     box.style.backgroundColor = "red";
//   } else {
//     box.style.backgroundColor = "blue";
//   }
// });

window.addEventListener(
  "click",
  function () {
    console.log("Window");
  },
  true
);
document.addEventListener(
  "click",
  (e) => {
    // e.stopPropagation();
    console.log("Document");
  },
  true
);

document.querySelector(".box").addEventListener(
  "click",
  () => {
    console.log("Div");
  },
  true
);
