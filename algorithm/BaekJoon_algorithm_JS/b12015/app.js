const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const testNum = +input.shift();
input = input.flatMap((v) => v.split(" ")).map((v) => +v);

function solution(arr) {
  let answer = 1;
  const dp = Array(arr.length).fill(0);
  dp[0] = 1;

  let lt = 1;
  let rt = arr.length;

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    let count = 1;
    let max = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
      if (max < arr[i]) {
        count += 1;
        max = arr[i];
      }
    }
  }

  return answer;
}

console.log(solution(input));
