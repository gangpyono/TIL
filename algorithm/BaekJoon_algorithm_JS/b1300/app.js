const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const A = +input.shift();
const B = +input.shift();

console.log(solution(A, B));

function solution(N, k) {
  let lt = 1;
  let rt = k;

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    let count = 0;
    for (let i = 1; i <= N; i++) {
      count += Math.min(Math.floor(mid / i), N);
    }

    if (count < k) {
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return lt;
}
