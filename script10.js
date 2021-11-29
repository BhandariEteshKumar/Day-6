// You cant change the value of the msg
let message;
if (2 || null || undefined) {
  message = "welcome boss";
} else {
  message = "Go away";
}
console.log(message);
