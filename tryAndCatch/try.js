try {
  x = 2;
  y = "4";
  z = x / y;

  if (typeof y !== "number") {
    throw new Error("Invalid pw or username");
  } else {
    console.log(z);
  }
} catch (error) {
  alert(error);
} finally {
  console.log("finally");
  //   location.reload();
}
