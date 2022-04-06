const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "))
  .map((v) => v.map((v) => +v));
const testCase = input.shift();

console.log(solution(+testCase[0], +testCase[1], input));
function solution(N, K, arr) {
  arr.unshift(null);
  const maxValueSum = [];
  for (let i = 0; i <= N; i += 1) {
    maxValueSum.push(Array(K + 1).fill(0));
  }

  for (let n = 1; n <= N; n += 1) {
    const [weight, value] = arr[n];
    for (let k = 0; k <= K; k += 1) {
      if (weight > k) {
        maxValueSum[n][k] = maxValueSum[n - 1][k];
      } else {
        maxValueSum[n][k] = Math.max(maxValueSum[n - 1][k], maxValueSum[n - 1][k - weight] + value);
      }
    }
  }

  return maxValueSum[N][K];
}
