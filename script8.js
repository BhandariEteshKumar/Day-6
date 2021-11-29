let value = prompt("How many runs you scored in this ball");
if (value === "4") {
  console.log("You hit a Four");
} else if (value === "6") {
  console.log("You hit a Six");
} else {
  console.log("I couldn't figure out");
}
console.log("Your Score" + value);

// we get input as string so we need to compare it string
// Another method is parsing the input string to number
