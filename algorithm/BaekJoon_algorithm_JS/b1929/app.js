const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ").map((item) => +item);

solution(input[0], input[1]);
function solution(M, N) {
  // M이상 N이하 소수를 모두 출력
  for (let i = M; i <= N; i++) {
    if (isPrime(i)) console.log(i);
  }
}

function isPrime(num) {
  if (num === 1) return false;

  for (let k = 2; k <= Math.sqrt(num); k++) {
    if (num % k === 0) return false;
  }
  return true;
}

// function solution(M, N) {
//   const a = Array.from({ length: N + 1 }, (v, i) => i);
//   a[1] = 0;
//   for (let i = 2; i < a.length; i++) {
//     if (a[i] === 0) continue;

//     for (let j = i + i; j < a.length; j += i) {
//       a[j] = 0;
//     }
//   }
//   for (let k = M; k < a.length; k++) {
//     if (a[k] !== 0) console.log(a[k]);
//   }
// }
