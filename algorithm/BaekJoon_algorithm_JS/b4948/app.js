const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((v) => Number(v));

for (const x of input) {
  if (x !== 0) {
    console.log(solution(x));
  }
}

function solution(N) {
  let count = 0;
  for (let i = N + 1; i <= 2 * N; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}

function isPrime(num) {
  let flag = true;
  for (let k = 2; k <= Math.sqrt(num); k++) {
    if (num % k === 0) {
      flag = false;
      break;
    }
  }

  return flag;
}
