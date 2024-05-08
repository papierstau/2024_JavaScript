const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fd = new FormData(form);
  const obj = Object.fromEntries(fd);
  //   const json = JSON.stringify(obj);
  //   const nonJson = JSON.parse(json);
  localStorage.setItem("pw", obj.pw);
  console.log(localStorage.getItem("pw"));
  //   console.log(nonJson);
  //   console.log(document.getElementById("pw").value);
});
