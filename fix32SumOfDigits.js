let n = 123;
console.log(add(n));
function add(n) {
  let sum = 0;
  let tem = n + "";
  for (var i = 0; i < tem.length; i++) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

// Output : 6
