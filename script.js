// №1
function fib(n) {
  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b; b = c;
  }
  return b;
}
console.log(fib(8));


// №2 
let n = 1000;
num = 0;
while (n > 50) {
  n /= 2;
  num++;
}
console.log(num);