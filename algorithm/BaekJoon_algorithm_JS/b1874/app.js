const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((v) => Number(v));

const testCase = +input.shift();

solution(testCase);

function solution(N) {
  const stack = [];

  return count;
}
