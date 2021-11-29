var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 1; i < 11; i++) {
  new_string += numsArr[i - 1] + ",";
}
new_string += numsArr[numsArr.length - 1];
console.log(new_string);
