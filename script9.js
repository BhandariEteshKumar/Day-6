let login = "Employee";
let message =
  login == "Employee"
    ? login == "Director"
      ? "Greetings"
      : "Welcome the Employee"
    : login == ""
    ? "No login"
    : "";
console.log(message);
