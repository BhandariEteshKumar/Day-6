const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let sum = (a, b) => a + b;
sum = num.reduce(sum);
console.log(sum);

// Output : 550
