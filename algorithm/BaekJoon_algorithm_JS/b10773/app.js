const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const N = +input.shift();
console.log(solution(N, input));

function solution(N, testCase) {
  let answer = 0;
  const stack = [];

  for (const num of testCase) {
    if (num) stack.push(num);
    else stack.pop();
  }

  if (stack.length === 0) return 0;
  else {
    for (const x of stack) {
      answer += x;
    }
    return answer;
  }
}
