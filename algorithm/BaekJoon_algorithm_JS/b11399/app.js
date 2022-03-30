const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const input1 = input.shift();
input = input
  .join("")
  .split(" ")
  .map((v) => Number(v));

console.log(solution(input1, input));
function solution(N, arr) {
  const total = [];
  let sum = 0;
  let answer = 0;
  arr.sort((a, b) => a - b);

  for (const x of arr) {
    sum = sum + x;
    total.push(sum);
  }

  for (const y of total) {
    answer += y;
  }

  return answer;
}
