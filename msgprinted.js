var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
  msg += "hi";
}
if (lemeout) {
  msg += "Hello";
}
console.log(msg);

// hi is printed as lemein contains string and lemeout contains number which is considerd false in if statement
