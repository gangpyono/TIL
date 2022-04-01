const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const testNum = +input.shift();
input = input.flatMap((v) => v.split(" ")).map((v) => +v);

function solution(arr) {
  let answer = 1;
  const dp = Array(arr.length).fill(1);
  dp[0] = 1;
  for (let i = 1; i < arr.length; i += 1) {
    let max = 0;
    for (let j = i - 1; j >= 0; j -= 1) {
      if (arr[i] > arr[j] && max < dp[j]) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
    answer = Math.max(dp[i], answer);
  }
  return answer;
}

console.log(solution(input));
