var a = "2" < "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted");
} else {
  console.log("Diffused");
}

// Here we get Code is Blasted as the js compares the strings based on lexographical order.
// So we can change the first char of secound number or change it to < operator.
